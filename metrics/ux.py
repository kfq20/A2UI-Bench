"""
L3: UX Quality Metrics (LLM-as-judge)

Uses an LLM to evaluate subjective quality:
- text_ui_coherence: Does the text match what the UI shows? (1-5)
- component_appropriateness: Are component choices good for the task? (1-5)
"""

import json
import asyncio
from typing import Dict, List, Any
from openai import AsyncOpenAI


JUDGE_PROMPT_COHERENCE = """You are evaluating an AI assistant's response quality. The assistant produces both a text response and a structured UI (A2UI JSON) for a travel booking system.

**User message:** {user_message}
**Assistant text:** {text_response}
**A2UI JSON:** {a2ui_json}

Rate the **text-UI coherence** on a 1-5 scale:
- 5: Text and UI are perfectly aligned; text describes exactly what UI shows
- 4: Minor inconsistencies but overall coherent
- 3: Some information mismatch between text and UI
- 2: Significant disconnect between text and UI content
- 1: Text and UI are contradictory or completely unrelated

Respond with ONLY a JSON object: {{"score": <1-5>, "reason": "<brief explanation>"}}"""

JUDGE_PROMPT_COMPONENT = """You are evaluating an AI assistant's UI component choices. The assistant creates interactive UIs for a travel booking system.

**User message:** {user_message}
**Assistant text:** {text_response}
**A2UI JSON:** {a2ui_json}

Rate the **component appropriateness** on a 1-5 scale:
- 5: Perfect component choices; UI is intuitive and efficient for the task
- 4: Good choices with minor improvements possible
- 3: Acceptable but some components could be better suited
- 2: Poor choices that make the UI confusing or hard to use
- 1: Completely wrong components for the task

Respond with ONLY a JSON object: {{"score": <1-5>, "reason": "<brief explanation>"}}"""


async def _judge_single(
    client: AsyncOpenAI,
    model: str,
    prompt: str,
    semaphore: asyncio.Semaphore
) -> Dict:
    """Call LLM judge for a single evaluation."""
    async with semaphore:
        try:
            response = await client.chat.completions.create(
                model=model,
                messages=[{"role": "user", "content": prompt}],
                temperature=0.0,
                max_tokens=200
            )
            content = response.choices[0].message.content.strip()
            # Try to parse JSON from response
            # Handle markdown code blocks
            if content.startswith("```"):
                content = content.split("```")[1]
                if content.startswith("json"):
                    content = content[4:]
                content = content.strip()
            result = json.loads(content)
            return {"score": int(result.get("score", 3)), "reason": result.get("reason", "")}
        except Exception as e:
            return {"score": 3, "reason": f"Judge error: {str(e)}", "error": True}


async def _compute_ux_metrics_async(
    predictions: List[Dict],
    ground_truth: List[Dict],
    api_key: str,
    base_url: str,
    judge_model: str = "gpt-4o-mini-2024-07-18",
    max_concurrency: int = 10,
    max_judge_turns: int = 500
) -> Dict[str, Any]:
    """Async implementation of UX metric computation."""
    client = AsyncOpenAI(api_key=api_key, base_url=base_url)
    semaphore = asyncio.Semaphore(max_concurrency)

    # Build GT lookup
    gt_lookup = {}
    for gt in ground_truth:
        gt_lookup[gt["dialogue_id"]] = gt["turns"]

    # Collect evaluation tasks
    coherence_tasks = []
    component_tasks = []
    turn_info = []  # track which turn each task corresponds to

    for pred in predictions:
        did = pred["dialogue_id"]
        gt_turns = gt_lookup.get(did, [])

        for turn in pred.get("turns", []):
            if len(turn_info) >= max_judge_turns:
                break

            turn_idx = turn.get("turn_idx", 0)
            parsed = turn.get("parsed")

            if not parsed or not isinstance(parsed, dict):
                continue

            text_response = parsed.get("text_response", "")
            a2ui = parsed.get("a2ui", [])

            # Skip text-only turns (no UI to evaluate)
            if len(a2ui) == 0:
                continue

            # Get user message from GT
            if turn_idx < len(gt_turns):
                user_message = gt_turns[turn_idx].get("userMessage", "")
            else:
                user_message = ""

            a2ui_str = json.dumps(a2ui, ensure_ascii=False)[:2000]  # Truncate for judge

            coherence_prompt = JUDGE_PROMPT_COHERENCE.format(
                user_message=user_message,
                text_response=text_response,
                a2ui_json=a2ui_str
            )
            component_prompt = JUDGE_PROMPT_COMPONENT.format(
                user_message=user_message,
                text_response=text_response,
                a2ui_json=a2ui_str
            )

            coherence_tasks.append(_judge_single(client, judge_model, coherence_prompt, semaphore))
            component_tasks.append(_judge_single(client, judge_model, component_prompt, semaphore))
            turn_info.append({"dialogue_id": did, "turn_idx": turn_idx})

        if len(turn_info) >= max_judge_turns:
            break

    if len(coherence_tasks) == 0:
        return {"text_ui_coherence": 0, "component_appropriateness": 0, "l3_score": 0, "judged_turns": 0}

    # Run all judge calls
    coherence_results = await asyncio.gather(*coherence_tasks)
    component_results = await asyncio.gather(*component_tasks)

    coherence_scores = [r["score"] for r in coherence_results]
    component_scores = [r["score"] for r in component_results]

    per_turn_details = []
    for i, info in enumerate(turn_info):
        per_turn_details.append({
            **info,
            "coherence_score": coherence_results[i]["score"],
            "coherence_reason": coherence_results[i].get("reason", ""),
            "component_score": component_results[i]["score"],
            "component_reason": component_results[i].get("reason", ""),
        })

    avg_coherence = sum(coherence_scores) / len(coherence_scores)
    avg_component = sum(component_scores) / len(component_scores)

    # Normalize to 0-1 (from 1-5 scale)
    norm_coherence = (avg_coherence - 1) / 4
    norm_component = (avg_component - 1) / 4
    l3_score = (norm_coherence + norm_component) / 2

    return {
        "text_ui_coherence": round(avg_coherence, 4),
        "text_ui_coherence_normalized": round(norm_coherence, 4),
        "component_appropriateness": round(avg_component, 4),
        "component_appropriateness_normalized": round(norm_component, 4),
        "l3_score": round(l3_score, 4),
        "judged_turns": len(coherence_tasks),
        "details": per_turn_details
    }


def compute_ux_metrics(
    predictions: List[Dict],
    ground_truth: List[Dict],
    api_key: str,
    base_url: str,
    judge_model: str = "gpt-4o-mini-2024-07-18",
    max_concurrency: int = 10,
    max_judge_turns: int = 500
) -> Dict[str, Any]:
    """
    Compute L3 UX quality metrics using LLM-as-judge.

    Args:
        predictions: List of prediction dicts with parsed A2UI per turn.
        ground_truth: List of ground truth dicts.
        api_key: OpenAI API key.
        base_url: OpenAI API base URL.
        judge_model: Model to use as judge.
        max_concurrency: Max concurrent API calls.
        max_judge_turns: Max turns to judge (for cost control).

    Returns:
        Dict with metric scores.
    """
    return asyncio.run(_compute_ux_metrics_async(
        predictions, ground_truth, api_key, base_url,
        judge_model, max_concurrency, max_judge_turns
    ))
