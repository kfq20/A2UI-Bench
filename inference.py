"""
A2UI-Bench Inference Pipeline

Runs turn-by-turn model inference on test dialogues, maintaining conversation
history to simulate real multi-turn interactions.
"""

import json
import os
import asyncio
import time
from typing import Dict, List, Any, Optional
from openai import AsyncOpenAI


DEFAULT_API_KEY = "sk-eYCTwG0C6tIvrQLXTvr1yl2ekbdt6ewDWEe0A8F42W8dMzs6"
DEFAULT_BASE_URL = "https://api.bltcy.ai/v1"


def load_system_prompt() -> str:
    """Load system prompt from file."""
    prompt_path = os.path.join(os.path.dirname(__file__), "prompts", "system_prompt.txt")
    with open(prompt_path, "r", encoding="utf-8") as f:
        return f.read().strip()


def parse_model_output(raw_output: str) -> Dict[str, Any]:
    """
    Parse model output into structured format.

    Returns:
        Dict with "text_response", "a2ui", and "parse_error" fields.
    """
    # Try to extract JSON from the output
    text = raw_output.strip()

    # Handle markdown code blocks
    if "```json" in text:
        start = text.index("```json") + 7
        end = text.index("```", start)
        text = text[start:end].strip()
    elif "```" in text:
        start = text.index("```") + 3
        end = text.index("```", start)
        text = text[start:end].strip()

    try:
        parsed = json.loads(text)
        if isinstance(parsed, dict) and "text_response" in parsed:
            return {
                "text_response": parsed.get("text_response", ""),
                "a2ui": parsed.get("a2ui", []),
                "parse_error": False
            }
        else:
            # JSON but wrong structure
            return {
                "text_response": str(parsed),
                "a2ui": [],
                "parse_error": False,
                "format_warning": "Missing text_response/a2ui structure"
            }
    except json.JSONDecodeError:
        return {
            "text_response": raw_output,
            "a2ui": [],
            "parse_error": True
        }


async def run_dialogue_inference(
    client: AsyncOpenAI,
    model: str,
    system_prompt: str,
    dialogue: Dict,
    semaphore: asyncio.Semaphore,
    temperature: float = 0.0,
    max_tokens: int = 4096
) -> Dict[str, Any]:
    """
    Run inference for a single dialogue, turn by turn.

    Maintains conversation history across turns within a dialogue.
    """
    dialogue_id = dialogue["dialogue_id"]
    turns = dialogue["turns"]
    results = []

    conversation = [{"role": "system", "content": system_prompt}]

    for turn_idx, turn in enumerate(turns):
        user_message = turn["userMessage"]
        conversation.append({"role": "user", "content": user_message})

        async with semaphore:
            try:
                response = await client.chat.completions.create(
                    model=model,
                    messages=conversation,
                    temperature=temperature,
                    max_tokens=max_tokens
                )
                raw_output = response.choices[0].message.content
                usage = {
                    "prompt_tokens": response.usage.prompt_tokens,
                    "completion_tokens": response.usage.completion_tokens
                }
            except Exception as e:
                raw_output = f"API_ERROR: {str(e)}"
                usage = {"prompt_tokens": 0, "completion_tokens": 0}

        parsed = parse_model_output(raw_output)

        # Add assistant response to conversation history
        conversation.append({"role": "assistant", "content": raw_output})

        results.append({
            "turn_idx": turn_idx,
            "raw_output": raw_output,
            "parsed": parsed if not parsed["parse_error"] else None,
            "parse_error": parsed["parse_error"],
            "usage": usage
        })

    return {
        "dialogue_id": dialogue_id,
        "turns": results,
        "num_turns": len(results)
    }


async def run_inference_async(
    model: str,
    test_data: List[Dict],
    api_key: str = DEFAULT_API_KEY,
    base_url: str = DEFAULT_BASE_URL,
    max_concurrency: int = 5,
    max_dialogues: Optional[int] = None,
    temperature: float = 0.0,
    max_tokens: int = 4096
) -> List[Dict]:
    """
    Run inference on all test dialogues.

    Args:
        model: Model name (e.g., "gpt-4o-2024-11-20").
        test_data: List of dialogue dicts from test_200.json.
        max_concurrency: Max concurrent dialogue inferences.
        max_dialogues: Limit number of dialogues (for testing).

    Returns:
        List of prediction dicts.
    """
    client = AsyncOpenAI(api_key=api_key, base_url=base_url)
    system_prompt = load_system_prompt()
    semaphore = asyncio.Semaphore(max_concurrency)

    dialogues = test_data[:max_dialogues] if max_dialogues else test_data

    print(f"Running inference: model={model}, dialogues={len(dialogues)}, concurrency={max_concurrency}")
    start_time = time.time()

    tasks = [
        run_dialogue_inference(client, model, system_prompt, dialogue, semaphore, temperature, max_tokens)
        for dialogue in dialogues
    ]

    results = []
    # Process in batches for progress reporting
    batch_size = max(1, max_concurrency)
    for i in range(0, len(tasks), batch_size):
        batch = tasks[i:i + batch_size]
        batch_results = await asyncio.gather(*batch)
        results.extend(batch_results)
        elapsed = time.time() - start_time
        print(f"  Progress: {len(results)}/{len(dialogues)} dialogues ({elapsed:.1f}s)")

    elapsed = time.time() - start_time
    total_turns = sum(r["num_turns"] for r in results)
    parse_errors = sum(1 for r in results for t in r["turns"] if t["parse_error"])
    total_prompt_tokens = sum(t["usage"]["prompt_tokens"] for r in results for t in r["turns"])
    total_completion_tokens = sum(t["usage"]["completion_tokens"] for r in results for t in r["turns"])

    print(f"Inference complete: {total_turns} turns in {elapsed:.1f}s")
    print(f"  Parse errors: {parse_errors}/{total_turns}")
    print(f"  Tokens: {total_prompt_tokens} prompt + {total_completion_tokens} completion")

    return results


def run_inference(
    model: str,
    test_data: List[Dict],
    api_key: str = DEFAULT_API_KEY,
    base_url: str = DEFAULT_BASE_URL,
    max_concurrency: int = 5,
    max_dialogues: Optional[int] = None,
    temperature: float = 0.0,
    max_tokens: int = 4096
) -> List[Dict]:
    """Synchronous wrapper for run_inference_async."""
    return asyncio.run(run_inference_async(
        model, test_data, api_key, base_url,
        max_concurrency, max_dialogues, temperature, max_tokens
    ))


def save_predictions(predictions: List[Dict], model: str, output_dir: str = None):
    """Save predictions to results directory."""
    if output_dir is None:
        output_dir = os.path.join(os.path.dirname(__file__), "results", model)
    os.makedirs(output_dir, exist_ok=True)

    path = os.path.join(output_dir, "predictions.json")
    with open(path, "w", encoding="utf-8") as f:
        json.dump(predictions, f, ensure_ascii=False, indent=2)
    print(f"Predictions saved to {path}")
    return path


def load_predictions(model: str, output_dir: str = None) -> Optional[List[Dict]]:
    """Load existing predictions."""
    if output_dir is None:
        output_dir = os.path.join(os.path.dirname(__file__), "results", model)
    path = os.path.join(output_dir, "predictions.json")

    if os.path.exists(path):
        with open(path, "r", encoding="utf-8") as f:
            return json.load(f)
    return None
