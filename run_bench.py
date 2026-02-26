#!/usr/bin/env python3
"""
A2UI-Bench: One-command benchmark orchestrator

Usage:
    # Run full pipeline (inference + eval)
    python run_bench.py --model gpt-4o-2024-11-20 --max_dialogues 5

    # Evaluate existing predictions only
    python run_bench.py --model gpt-4o-2024-11-20 --eval-only

    # Skip L3 (LLM-judge) to save cost
    python run_bench.py --model gpt-4o-mini-2024-07-18 --max_dialogues 10 --no-l3

    # Compare multiple models
    python run_bench.py --compare gpt-4o-2024-11-20 gpt-4o-mini-2024-07-18
"""

import argparse
import json
import os
import sys

from inference import run_inference, save_predictions, load_predictions
from evaluate import evaluate, save_scores


DEFAULT_API_KEY = "sk-eYCTwG0C6tIvrQLXTvr1yl2ekbdt6ewDWEe0A8F42W8dMzs6"
DEFAULT_BASE_URL = "https://api.bltcy.ai/v1"


def load_test_data() -> list:
    """Load test_200.json."""
    data_path = os.path.join(os.path.dirname(__file__), "data", "test_200.json")
    with open(data_path, "r", encoding="utf-8") as f:
        return json.load(f)


def run_single_model(
    model: str,
    test_data: list,
    eval_only: bool = False,
    max_dialogues: int = None,
    run_l3: bool = True,
    api_key: str = DEFAULT_API_KEY,
    base_url: str = DEFAULT_BASE_URL,
    max_concurrency: int = 5,
    judge_model: str = "gpt-4o-mini-2024-07-18",
    max_judge_turns: int = 500
) -> dict:
    """Run inference and evaluation for a single model."""
    print(f"\n{'#' * 60}")
    print(f"Model: {model}")
    print(f"{'#' * 60}")

    # Step 1: Inference
    predictions = None
    if not eval_only:
        predictions = run_inference(
            model=model,
            test_data=test_data,
            api_key=api_key,
            base_url=base_url,
            max_concurrency=max_concurrency,
            max_dialogues=max_dialogues
        )
        save_predictions(predictions, model)
    else:
        predictions = load_predictions(model)
        if predictions is None:
            print(f"ERROR: No predictions found for {model}. Run inference first.")
            return None
        print(f"Loaded {len(predictions)} existing predictions for {model}")

    # Step 2: Evaluation
    # Use only the dialogues we have predictions for
    pred_ids = {p["dialogue_id"] for p in predictions}
    gt_data = [d for d in test_data if d["dialogue_id"] in pred_ids]

    scores = evaluate(
        predictions=predictions,
        ground_truth=gt_data,
        run_l3=run_l3,
        api_key=api_key,
        base_url=base_url,
        judge_model=judge_model,
        max_judge_turns=max_judge_turns
    )
    save_scores(scores, model)

    return scores


def compare_models(model_names: list):
    """Print comparison table of multiple models."""
    print(f"\n{'=' * 80}")
    print("Model Comparison")
    print(f"{'=' * 80}")

    results_dir = os.path.join(os.path.dirname(__file__), "results")

    # Header
    print(f"{'Metric':<30}", end="")
    for name in model_names:
        print(f"{name:>20}", end="")
    print()
    print("-" * (30 + 20 * len(model_names)))

    # Load scores
    all_scores = {}
    for name in model_names:
        path = os.path.join(results_dir, name, "scores.json")
        if os.path.exists(path):
            with open(path) as f:
                all_scores[name] = json.load(f)
        else:
            print(f"WARNING: No scores found for {name}")
            all_scores[name] = None

    # Print metrics
    metrics = [
        ("Overall Score", lambda s: s["overall_score"]),
        ("", None),  # separator
        ("L1: JSON Parse Rate", lambda s: s["l1"]["json_parse_rate"]),
        ("L1: Format Compliance", lambda s: s["l1"]["format_compliance"]),
        ("L1: Validator Pass Rate", lambda s: s["l1"]["validator_pass_rate"]),
        ("L1 Score", lambda s: s["l1"]["l1_score"]),
        ("", None),
        ("L2: Msg Type Accuracy", lambda s: s["l2"]["message_type_accuracy"]),
        ("L2: Component Type F1", lambda s: s["l2"]["component_type_f1"]),
        ("L2: Data Key Recall", lambda s: s["l2"]["data_key_recall"]),
        ("L2: Surface ID Accuracy", lambda s: s["l2"]["surface_id_accuracy"]),
        ("L2 Score", lambda s: s["l2"]["l2_score"]),
        ("", None),
        ("L3: Text-UI Coherence", lambda s: s["l3"]["text_ui_coherence"] if s.get("l3") else None),
        ("L3: Component Approp.", lambda s: s["l3"]["component_appropriateness"] if s.get("l3") else None),
        ("L3 Score", lambda s: s["l3"]["l3_score"] if s.get("l3") else None),
    ]

    for metric_name, getter in metrics:
        if getter is None:
            print()
            continue
        print(f"{metric_name:<30}", end="")
        for name in model_names:
            if all_scores[name] is None:
                print(f"{'N/A':>20}", end="")
            else:
                try:
                    val = getter(all_scores[name])
                    if val is None:
                        print(f"{'N/A':>20}", end="")
                    else:
                        print(f"{val:>20.4f}", end="")
                except (KeyError, TypeError):
                    print(f"{'N/A':>20}", end="")
        print()

    print(f"{'=' * (30 + 20 * len(model_names))}")


def main():
    parser = argparse.ArgumentParser(description="A2UI-Bench: Benchmark for A2UI Generation")
    parser.add_argument("--model", type=str, help="Model name to evaluate")
    parser.add_argument("--eval-only", action="store_true", help="Only evaluate existing predictions")
    parser.add_argument("--max_dialogues", type=int, default=None, help="Limit number of dialogues")
    parser.add_argument("--no-l3", action="store_true", help="Skip L3 LLM-judge metrics")
    parser.add_argument("--compare", nargs="+", help="Compare multiple models")
    parser.add_argument("--api_key", type=str, default=DEFAULT_API_KEY, help="API key")
    parser.add_argument("--base_url", type=str, default=DEFAULT_BASE_URL, help="API base URL")
    parser.add_argument("--max_concurrency", type=int, default=5, help="Max concurrent API calls")
    parser.add_argument("--judge_model", type=str, default="gpt-4o-mini-2024-07-18", help="Judge model for L3")
    parser.add_argument("--max_judge_turns", type=int, default=500, help="Max turns for L3 judge")

    args = parser.parse_args()

    if args.compare:
        compare_models(args.compare)
        return

    if not args.model:
        parser.print_help()
        sys.exit(1)

    test_data = load_test_data()
    print(f"Loaded {len(test_data)} test dialogues")

    run_single_model(
        model=args.model,
        test_data=test_data,
        eval_only=args.eval_only,
        max_dialogues=args.max_dialogues,
        run_l3=not args.no_l3,
        api_key=args.api_key,
        base_url=args.base_url,
        max_concurrency=args.max_concurrency,
        judge_model=args.judge_model,
        max_judge_turns=args.max_judge_turns
    )


if __name__ == "__main__":
    main()
