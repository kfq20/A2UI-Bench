"""
L1: Structural Correctness Metrics

Measures whether model output is syntactically valid and structurally compliant:
- json_parse_rate: Can the output be parsed as JSON?
- format_compliance: Does it have the expected {text_response, a2ui} structure?
- validator_pass_rate: Do A2UI messages pass the 5-level validator?
"""

import json
import sys
import os
from typing import Dict, List, Any, Tuple

# Add validator path
sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', '..', 'A2UI', 'data_expansion'))
from a2ui_validator import A2UIValidator, ValidationLevel


def compute_structural_metrics(predictions: List[Dict]) -> Dict[str, Any]:
    """
    Compute L1 structural metrics across all predictions.

    Args:
        predictions: List of prediction dicts, each with:
            - "raw_output": str (the model's raw text output)
            - "parsed": dict or None (parsed JSON, if successful)
            - "parse_error": bool

    Returns:
        Dict with metric scores and per-turn details.
    """
    total_turns = 0
    json_parse_ok = 0
    format_ok = 0
    validator_ok = 0

    per_turn_details = []

    for pred in predictions:
        for turn in pred.get("turns", []):
            total_turns += 1
            turn_detail = {"dialogue_id": pred["dialogue_id"], "turn_idx": turn.get("turn_idx", -1)}

            # Metric 1: JSON parse rate
            parsed = turn.get("parsed")
            if turn.get("parse_error", True):
                turn_detail["json_parse"] = False
                turn_detail["format_compliance"] = False
                turn_detail["validator_pass"] = False
                per_turn_details.append(turn_detail)
                continue

            json_parse_ok += 1
            turn_detail["json_parse"] = True

            # Metric 2: Format compliance
            if (isinstance(parsed, dict) and
                "text_response" in parsed and
                "a2ui" in parsed and
                isinstance(parsed["a2ui"], list)):
                format_ok += 1
                turn_detail["format_compliance"] = True
            else:
                turn_detail["format_compliance"] = False
                turn_detail["validator_pass"] = False
                per_turn_details.append(turn_detail)
                continue

            # Metric 3: Validator pass rate
            a2ui_messages = parsed.get("a2ui", [])
            if len(a2ui_messages) == 0:
                # Empty a2ui is valid (text-only response)
                validator_ok += 1
                turn_detail["validator_pass"] = True
            else:
                try:
                    validator = A2UIValidator()
                    is_valid, results = validator.validate(a2ui_messages)
                    errors = [r for r in results if r.level == ValidationLevel.ERROR]
                    turn_detail["validator_pass"] = is_valid
                    if not is_valid:
                        turn_detail["validator_errors"] = [r.message for r in errors[:3]]
                    else:
                        validator_ok += 1
                except Exception as e:
                    turn_detail["validator_pass"] = False
                    turn_detail["validator_errors"] = [f"Validator crash: {str(e)[:100]}"]

            per_turn_details.append(turn_detail)

    if total_turns == 0:
        return {"json_parse_rate": 0, "format_compliance": 0, "validator_pass_rate": 0, "l1_score": 0, "total_turns": 0}

    json_parse_rate = json_parse_ok / total_turns
    format_compliance = format_ok / total_turns
    validator_pass_rate = validator_ok / total_turns
    l1_score = (json_parse_rate + format_compliance + validator_pass_rate) / 3

    return {
        "json_parse_rate": round(json_parse_rate, 4),
        "format_compliance": round(format_compliance, 4),
        "validator_pass_rate": round(validator_pass_rate, 4),
        "l1_score": round(l1_score, 4),
        "total_turns": total_turns,
        "details": per_turn_details
    }
