"""
A2UI-Bench Evaluation Aggregator

Runs L1/L2/L3 metrics and computes overall scores.
"""

import json
import os
from typing import Dict, List, Any, Optional

from metrics.structural import compute_structural_metrics
from metrics.semantic import compute_semantic_metrics
from metrics.ux import compute_ux_metrics


DEFAULT_API_KEY = "sk-eYCTwG0C6tIvrQLXTvr1yl2ekbdt6ewDWEe0A8F42W8dMzs6"
DEFAULT_BASE_URL = "https://api.bltcy.ai/v1"


def compute_overall_score(l1_score: float, l2_score: float, l3_score: float) -> float:
    """
    Compute overall A2UI-Bench score.

    L1 is a gate: if L1 < 0.5, overall = L1 * 0.1
    Otherwise: weighted combination 0.3*L1 + 0.4*L2 + 0.3*L3
    """
    if l1_score < 0.5:
        return round(l1_score * 0.1, 4)
    return round(0.3 * l1_score + 0.4 * l2_score + 0.3 * l3_score, 4)


def evaluate(
    predictions: List[Dict],
    ground_truth: List[Dict],
    run_l3: bool = True,
    api_key: str = DEFAULT_API_KEY,
    base_url: str = DEFAULT_BASE_URL,
    judge_model: str = "gpt-4o-mini-2024-07-18",
    max_judge_turns: int = 500
) -> Dict[str, Any]:
    """
    Run full evaluation pipeline.

    Args:
        predictions: Model predictions.
        ground_truth: Ground truth from test_200.json.
        run_l3: Whether to run L3 LLM-judge metrics (costs API credits).
        api_key: API key for L3 judge.
        base_url: API base URL for L3 judge.
        judge_model: Model for L3 judge.
        max_judge_turns: Max turns for L3 judge.

    Returns:
        Complete evaluation results.
    """
    print("=" * 60)
    print("A2UI-Bench Evaluation")
    print("=" * 60)

    # L1: Structural Correctness
    print("\n[L1] Computing structural metrics...")
    l1_results = compute_structural_metrics(predictions)
    print(f"  json_parse_rate:    {l1_results['json_parse_rate']:.4f}")
    print(f"  format_compliance:  {l1_results['format_compliance']:.4f}")
    print(f"  validator_pass_rate:{l1_results['validator_pass_rate']:.4f}")
    print(f"  L1 Score:           {l1_results['l1_score']:.4f}")

    # L2: Semantic Appropriateness
    print("\n[L2] Computing semantic metrics...")
    l2_results = compute_semantic_metrics(predictions, ground_truth)
    print(f"  message_type_acc:   {l2_results['message_type_accuracy']:.4f}")
    print(f"  component_type_f1:  {l2_results['component_type_f1']:.4f}")
    print(f"  data_key_recall:    {l2_results['data_key_recall']:.4f}")
    print(f"  surface_id_accuracy:{l2_results['surface_id_accuracy']:.4f}")
    print(f"  L2 Score:           {l2_results['l2_score']:.4f}")

    # L3: UX Quality
    l3_results = None
    if run_l3:
        print("\n[L3] Computing UX metrics (LLM-judge)...")
        l3_results = compute_ux_metrics(
            predictions, ground_truth,
            api_key=api_key, base_url=base_url,
            judge_model=judge_model, max_judge_turns=max_judge_turns
        )
        print(f"  text_ui_coherence:  {l3_results['text_ui_coherence']:.4f} (raw 1-5)")
        print(f"  component_approp.:  {l3_results['component_appropriateness']:.4f} (raw 1-5)")
        print(f"  L3 Score:           {l3_results['l3_score']:.4f}")
        print(f"  Judged turns:       {l3_results['judged_turns']}")

    # Overall
    l1_score = l1_results["l1_score"]
    l2_score = l2_results["l2_score"]
    l3_score = l3_results["l3_score"] if l3_results else 0.0
    overall = compute_overall_score(l1_score, l2_score, l3_score)

    print("\n" + "=" * 60)
    print(f"Overall Score: {overall:.4f}")
    if l1_score < 0.5:
        print(f"  (L1 gate active: L1={l1_score:.4f} < 0.5)")
    else:
        print(f"  (0.3*{l1_score:.4f} + 0.4*{l2_score:.4f} + 0.3*{l3_score:.4f})")
    print("=" * 60)

    return {
        "overall_score": overall,
        "l1": l1_results,
        "l2": l2_results,
        "l3": l3_results,
        "total_dialogues": len(predictions),
        "total_turns": l1_results["total_turns"]
    }


def save_scores(scores: Dict, model: str, output_dir: str = None):
    """Save evaluation scores to results directory."""
    if output_dir is None:
        output_dir = os.path.join(os.path.dirname(__file__), "results", model)
    os.makedirs(output_dir, exist_ok=True)

    # Save full results (with per-turn details)
    full_path = os.path.join(output_dir, "scores_full.json")
    with open(full_path, "w", encoding="utf-8") as f:
        json.dump(scores, f, ensure_ascii=False, indent=2)

    # Save summary (without per-turn details)
    summary = {
        "overall_score": scores["overall_score"],
        "l1": {k: v for k, v in scores["l1"].items() if k != "details"},
        "l2": {k: v for k, v in scores["l2"].items() if k != "details"},
        "l3": {k: v for k, v in scores["l3"].items() if k != "details"} if scores["l3"] else None,
        "total_dialogues": scores["total_dialogues"],
        "total_turns": scores["total_turns"]
    }
    summary_path = os.path.join(output_dir, "scores.json")
    with open(summary_path, "w", encoding="utf-8") as f:
        json.dump(summary, f, ensure_ascii=False, indent=2)

    print(f"Scores saved to {summary_path}")
    return summary_path
