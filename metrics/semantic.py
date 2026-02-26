"""
L2: Semantic Appropriateness Metrics

Compares model predictions against ground truth:
- message_type_accuracy: Correct turn-level A2UI action types
- component_type_f1: Correct component type selection
- data_key_recall: Passes correct data to UI
- surface_id_accuracy: Sends to correct surface
"""

from typing import Dict, List, Any, Set


def _extract_message_types(a2ui_messages: List[Dict]) -> Set[str]:
    """Extract the set of message types from A2UI messages."""
    types = set()
    for msg in a2ui_messages:
        for k in ["surfaceUpdate", "dataModelUpdate", "beginRendering", "deleteSurface"]:
            if k in msg:
                types.add(k)
    return types


def _extract_component_types(a2ui_messages: List[Dict]) -> Set[str]:
    """Extract the set of component types from surfaceUpdate messages."""
    comp_types = set()
    for msg in a2ui_messages:
        if "surfaceUpdate" in msg:
            for comp in msg["surfaceUpdate"].get("components", []):
                component = comp.get("component", {})
                comp_types.update(component.keys())
    return comp_types


def _extract_data_keys(a2ui_messages: List[Dict]) -> Set[str]:
    """Extract data keys from dataModelUpdate messages."""
    keys = set()
    for msg in a2ui_messages:
        if "dataModelUpdate" in msg:
            for item in msg["dataModelUpdate"].get("contents", []):
                if "key" in item:
                    keys.add(item["key"])
    return keys


def _extract_surface_ids(a2ui_messages: List[Dict]) -> Set[str]:
    """Extract all surface IDs from A2UI messages."""
    sids = set()
    for msg in a2ui_messages:
        for k in ["surfaceUpdate", "dataModelUpdate", "beginRendering", "deleteSurface"]:
            if k in msg:
                content = msg[k]
                if isinstance(content, dict) and "surfaceId" in content:
                    sids.add(content["surfaceId"])
    return sids


def _f1_score(predicted: Set, ground_truth: Set) -> float:
    """Compute F1 score between two sets."""
    if len(predicted) == 0 and len(ground_truth) == 0:
        return 1.0
    if len(predicted) == 0 or len(ground_truth) == 0:
        return 0.0

    tp = len(predicted & ground_truth)
    precision = tp / len(predicted)
    recall = tp / len(ground_truth)

    if precision + recall == 0:
        return 0.0
    return 2 * precision * recall / (precision + recall)


def _recall_score(predicted: Set, ground_truth: Set) -> float:
    """Compute recall of ground truth in predicted."""
    if len(ground_truth) == 0:
        return 1.0
    if len(predicted) == 0:
        return 0.0
    return len(predicted & ground_truth) / len(ground_truth)


def _set_accuracy(predicted: Set, ground_truth: Set) -> float:
    """Exact set match accuracy."""
    if predicted == ground_truth:
        return 1.0
    return 0.0


def compute_semantic_metrics(predictions: List[Dict], ground_truth: List[Dict]) -> Dict[str, Any]:
    """
    Compute L2 semantic metrics by comparing predictions against ground truth.

    Args:
        predictions: List of prediction dicts with parsed A2UI per turn.
        ground_truth: List of ground truth dicts (from test_200.json).

    Returns:
        Dict with metric scores and per-turn details.
    """
    # Build GT lookup
    gt_lookup = {}
    for gt in ground_truth:
        did = gt["dialogue_id"]
        gt_lookup[did] = gt["turns"]

    total_turns = 0
    msg_type_scores = []
    comp_type_scores = []
    data_key_scores = []
    surface_id_scores = []

    per_turn_details = []

    for pred in predictions:
        did = pred["dialogue_id"]
        gt_turns = gt_lookup.get(did, [])

        for turn in pred.get("turns", []):
            turn_idx = turn.get("turn_idx", 0)
            total_turns += 1

            # Get ground truth for this turn
            if turn_idx < len(gt_turns):
                gt_turn = gt_turns[turn_idx]
                gt_a2ui = gt_turn.get("a2uiMessages", [])
            else:
                gt_a2ui = []

            # Get prediction A2UI
            parsed = turn.get("parsed")
            if parsed and isinstance(parsed, dict) and isinstance(parsed.get("a2ui"), list):
                pred_a2ui = parsed["a2ui"]
            else:
                pred_a2ui = []

            # Metric 1: Message type accuracy (set match)
            gt_msg_types = _extract_message_types(gt_a2ui)
            pred_msg_types = _extract_message_types(pred_a2ui)

            # Handle text-only turns: if GT has no a2ui and pred has no a2ui, that's correct
            if len(gt_a2ui) == 0 and len(pred_a2ui) == 0:
                msg_type_acc = 1.0
            else:
                msg_type_acc = _f1_score(pred_msg_types, gt_msg_types)
            msg_type_scores.append(msg_type_acc)

            # Metric 2: Component type F1
            gt_comp_types = _extract_component_types(gt_a2ui)
            pred_comp_types = _extract_component_types(pred_a2ui)
            comp_f1 = _f1_score(pred_comp_types, gt_comp_types)
            comp_type_scores.append(comp_f1)

            # Metric 3: Data key recall
            gt_data_keys = _extract_data_keys(gt_a2ui)
            pred_data_keys = _extract_data_keys(pred_a2ui)
            dk_recall = _recall_score(pred_data_keys, gt_data_keys)
            data_key_scores.append(dk_recall)

            # Metric 4: Surface ID accuracy (set match)
            gt_sids = _extract_surface_ids(gt_a2ui)
            pred_sids = _extract_surface_ids(pred_a2ui)
            sid_acc = _set_accuracy(pred_sids, gt_sids)
            surface_id_scores.append(sid_acc)

            per_turn_details.append({
                "dialogue_id": did,
                "turn_idx": turn_idx,
                "message_type_accuracy": round(msg_type_acc, 4),
                "component_type_f1": round(comp_f1, 4),
                "data_key_recall": round(dk_recall, 4),
                "surface_id_accuracy": round(sid_acc, 4)
            })

    if total_turns == 0:
        return {"message_type_accuracy": 0, "component_type_f1": 0, "data_key_recall": 0,
                "surface_id_accuracy": 0, "l2_score": 0, "total_turns": 0}

    msg_type_accuracy = sum(msg_type_scores) / total_turns
    component_type_f1 = sum(comp_type_scores) / total_turns
    data_key_recall = sum(data_key_scores) / total_turns
    surface_id_accuracy = sum(surface_id_scores) / total_turns
    l2_score = (msg_type_accuracy + component_type_f1 + data_key_recall + surface_id_accuracy) / 4

    return {
        "message_type_accuracy": round(msg_type_accuracy, 4),
        "component_type_f1": round(component_type_f1, 4),
        "data_key_recall": round(data_key_recall, 4),
        "surface_id_accuracy": round(surface_id_accuracy, 4),
        "l2_score": round(l2_score, 4),
        "total_turns": total_turns,
        "details": per_turn_details
    }
