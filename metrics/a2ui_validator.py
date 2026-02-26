"""
A2UI JSON 验证器
用于验证 Agent 输出的 A2UI JSON 是否符合规范

验证层次：
1. JSON 语法验证 - 确保是有效的 JSON
2. 消息结构验证 - 符合 A2UI 消息 schema
3. 组件引用验证 - ID 引用完整性
4. 组件属性验证 - 必需属性存在
5. 值格式验证 - literalString/literalNumber/path 格式正确
"""

import json
from typing import List, Dict, Any, Tuple, Optional
from dataclasses import dataclass
from enum import Enum


class ValidationLevel(Enum):
    """验证错误级别"""
    ERROR = "error"      # 严重错误，会导致渲染失败
    WARNING = "warning"  # 警告，可能影响渲染效果
    INFO = "info"        # 信息，建议改进


@dataclass
class ValidationResult:
    """验证结果"""
    level: ValidationLevel
    message: str
    location: str  # 错误位置描述


class A2UIValidator:
    """A2UI JSON 验证器"""

    # 支持的消息类型
    MESSAGE_TYPES = {"beginRendering", "surfaceUpdate", "dataModelUpdate", "deleteSurface"}

    # 布局组件（可以有子组件）
    LAYOUT_COMPONENTS = {"Card", "Column", "Row", "List", "Tabs", "Modal"}

    # 所有组件类型
    ALL_COMPONENTS = {
        # 布局组件
        "Card", "Column", "Row", "List", "Tabs", "Modal", "Divider",
        # 内容组件
        "Text", "Image", "Icon", "Video", "AudioPlayer",
        # 交互组件
        "Button", "TextField", "CheckBox", "Slider", "MultipleChoice", "DateTimeInput"
    }

    # 组件必需属性
    REQUIRED_PROPERTIES = {
        "Text": ["text"],
        "Image": ["url"],
        "Icon": ["name"],
        "Video": ["url"],
        "AudioPlayer": ["url"],
        "Card": ["child"],
        "Column": ["children"],
        "Row": ["children"],
        "List": ["children"],
        "Tabs": ["tabItems"],
        "Modal": ["entryPointChild", "contentChild"],
        "Button": ["child", "action"],
        "TextField": ["label"],
        "CheckBox": ["label", "value"],
        "Slider": ["value"],
        "MultipleChoice": ["selections", "options"],
        "DateTimeInput": ["value"],
        "Divider": []
    }

    def __init__(self):
        self.results: List[ValidationResult] = []

    def validate(self, messages: List[Dict]) -> Tuple[bool, List[ValidationResult]]:
        """
        验证 A2UI 消息列表

        Args:
            messages: A2UI 消息列表

        Returns:
            (是否有效, 验证结果列表)
        """
        self.results = []

        # 跟踪 surface 状态
        surfaces: Dict[str, Dict] = {}  # surfaceId -> {root, components}

        for i, msg in enumerate(messages):
            self._validate_message(msg, i, surfaces)

        # 检查是否有严重错误
        has_errors = any(r.level == ValidationLevel.ERROR for r in self.results)
        return not has_errors, self.results

    def _validate_message(self, msg: Dict, index: int, surfaces: Dict):
        """验证单个消息"""
        loc = f"消息 #{index}"

        # 1. 检查消息类型
        msg_types = [k for k in msg.keys() if k in self.MESSAGE_TYPES]

        if len(msg_types) == 0:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                f"消息必须包含以下类型之一: {self.MESSAGE_TYPES}",
                loc
            ))
            return

        if len(msg_types) > 1:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                f"消息只能包含一个类型，但发现: {msg_types}",
                loc
            ))
            return

        msg_type = msg_types[0]
        content = msg[msg_type]

        # 2. 根据消息类型验证
        if msg_type == "beginRendering":
            self._validate_begin_rendering(content, loc, surfaces)
        elif msg_type == "surfaceUpdate":
            self._validate_surface_update(content, loc, surfaces)
        elif msg_type == "dataModelUpdate":
            self._validate_data_model_update(content, loc)
        elif msg_type == "deleteSurface":
            self._validate_delete_surface(content, loc, surfaces)

    def _validate_begin_rendering(self, content: Dict, loc: str, surfaces: Dict):
        """验证 beginRendering 消息"""
        # 检查必需字段
        if "surfaceId" not in content:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                "beginRendering 缺少必需字段 'surfaceId'",
                loc
            ))
            return

        if "root" not in content:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                "beginRendering 缺少必需字段 'root'",
                loc
            ))
            return

        surface_id = content["surfaceId"]
        root_id = content["root"]

        # 记录 surface
        surfaces[surface_id] = {"root": root_id, "components": {}}

    def _validate_surface_update(self, content: Dict, loc: str, surfaces: Dict):
        """验证 surfaceUpdate 消息"""
        # 检查必需字段
        if "surfaceId" not in content:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                "surfaceUpdate 缺少必需字段 'surfaceId'",
                loc
            ))
            return

        if "components" not in content:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                "surfaceUpdate 缺少必需字段 'components'",
                loc
            ))
            return

        surface_id = content["surfaceId"]
        components = content["components"]

        # 确保 surface 已经 beginRendering
        if surface_id not in surfaces:
            self.results.append(ValidationResult(
                ValidationLevel.WARNING,
                f"surfaceUpdate 引用了未初始化的 surface: '{surface_id}'，应先发送 beginRendering",
                loc
            ))
            surfaces[surface_id] = {"root": None, "components": {}}

        # 检查 components 是否为数组
        if not isinstance(components, list):
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                "components 必须是数组",
                loc
            ))
            return

        if len(components) == 0:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                "components 数组不能为空",
                loc
            ))
            return

        # 收集所有组件 ID
        component_map = {}
        for i, comp in enumerate(components):
            comp_loc = f"{loc} -> component[{i}]"

            if "id" not in comp:
                self.results.append(ValidationResult(
                    ValidationLevel.ERROR,
                    "组件缺少必需字段 'id'",
                    comp_loc
                ))
                continue

            if "component" not in comp:
                self.results.append(ValidationResult(
                    ValidationLevel.ERROR,
                    "组件缺少必需字段 'component'",
                    comp_loc
                ))
                continue

            comp_id = comp["id"]
            component_map[comp_id] = comp
            surfaces[surface_id]["components"][comp_id] = comp

        # 验证每个组件
        for comp_id, comp in component_map.items():
            self._validate_component(comp, f"{loc} -> {comp_id}", component_map)

        # 验证根组件存在
        root_id = surfaces[surface_id].get("root")
        if root_id and root_id not in component_map:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                f"根组件 '{root_id}' 在 components 中未定义",
                loc
            ))

    def _validate_component(self, comp: Dict, loc: str, component_map: Dict):
        """验证单个组件"""
        comp_wrapper = comp["component"]

        # 获取组件类型
        comp_types = list(comp_wrapper.keys())

        if len(comp_types) == 0:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                "component 对象不能为空",
                loc
            ))
            return

        if len(comp_types) > 1:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                f"component 对象只能包含一个组件类型，但发现: {comp_types}",
                loc
            ))
            return

        comp_type = comp_types[0]
        props = comp_wrapper[comp_type]

        # 检查组件类型是否支持
        if comp_type not in self.ALL_COMPONENTS:
            self.results.append(ValidationResult(
                ValidationLevel.WARNING,
                f"未知组件类型: '{comp_type}'，可能是自定义组件",
                loc
            ))

        # 检查必需属性
        if comp_type in self.REQUIRED_PROPERTIES:
            for required_prop in self.REQUIRED_PROPERTIES[comp_type]:
                if required_prop not in props:
                    self.results.append(ValidationResult(
                        ValidationLevel.ERROR,
                        f"组件 {comp_type} 缺少必需属性 '{required_prop}'",
                        loc
                    ))

        # 验证子组件引用
        self._validate_child_references(comp_type, props, loc, component_map)

        # 验证值格式
        self._validate_value_formats(comp_type, props, loc)

    def _validate_child_references(self, comp_type: str, props: Dict, loc: str, component_map: Dict):
        """验证子组件引用"""
        # 单个子组件 (Card, Button 等)
        if "child" in props:
            child_id = props["child"]
            if child_id not in component_map:
                self.results.append(ValidationResult(
                    ValidationLevel.ERROR,
                    f"子组件引用 '{child_id}' 未定义",
                    loc
                ))

        # 多个子组件 (Column, Row, List)
        if "children" in props:
            children = props["children"]
            if isinstance(children, dict) and "explicitList" in children:
                for child_id in children["explicitList"]:
                    if child_id not in component_map:
                        self.results.append(ValidationResult(
                            ValidationLevel.ERROR,
                            f"子组件引用 '{child_id}' 未定义",
                            loc
                        ))

        # Modal 特殊处理
        if comp_type == "Modal":
            for ref_prop in ["entryPointChild", "contentChild"]:
                if ref_prop in props:
                    child_id = props[ref_prop]
                    if child_id not in component_map:
                        self.results.append(ValidationResult(
                            ValidationLevel.ERROR,
                            f"{ref_prop} 引用 '{child_id}' 未定义",
                            loc
                        ))

        # Tabs 特殊处理
        if comp_type == "Tabs" and "tabItems" in props:
            for i, tab in enumerate(props["tabItems"]):
                if "child" in tab:
                    child_id = tab["child"]
                    if child_id not in component_map:
                        self.results.append(ValidationResult(
                            ValidationLevel.ERROR,
                            f"Tab[{i}] 子组件引用 '{child_id}' 未定义",
                            loc
                        ))

    def _validate_value_formats(self, comp_type: str, props: Dict, loc: str):
        """验证值格式 (literalString, literalNumber, path 等)"""

        # 需要验证的值属性映射
        value_props = {
            "Text": [("text", "string")],
            "Image": [("url", "string")],
            "Icon": [("name", "string")],
            "Video": [("url", "string")],
            "AudioPlayer": [("url", "string"), ("description", "string")],
            "TextField": [("label", "string"), ("text", "string")],
            "CheckBox": [("label", "string"), ("value", "boolean")],
            "Slider": [("value", "number")],
            "DateTimeInput": [("value", "string")],
            "MultipleChoice": [("selections", "array")]
        }

        if comp_type in value_props:
            for prop_name, expected_type in value_props[comp_type]:
                if prop_name in props:
                    self._validate_value_object(props[prop_name], expected_type, f"{loc}.{prop_name}")

        # 验证 MultipleChoice 的 options
        if comp_type == "MultipleChoice" and "options" in props:
            options = props["options"]
            if not isinstance(options, list):
                self.results.append(ValidationResult(
                    ValidationLevel.ERROR,
                    "options 必须是数组",
                    loc
                ))
            else:
                for i, opt in enumerate(options):
                    opt_loc = f"{loc}.options[{i}]"

                    if "value" not in opt:
                        self.results.append(ValidationResult(
                            ValidationLevel.ERROR,
                            "选项缺少必需字段 'value'",
                            opt_loc
                        ))

                    if "label" not in opt:
                        self.results.append(ValidationResult(
                            ValidationLevel.ERROR,
                            "选项缺少必需字段 'label'",
                            opt_loc
                        ))
                    else:
                        self._validate_value_object(opt["label"], "string", f"{opt_loc}.label")

    def _validate_value_object(self, value: Any, expected_type: str, loc: str):
        """验证值对象格式"""
        if not isinstance(value, dict):
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                f"值必须是对象格式 (如 {{\"literalString\": \"...\"}})，但得到: {type(value).__name__}",
                loc
            ))
            return

        valid_keys = {
            "string": ["literalString", "path"],
            "number": ["literalNumber", "path"],
            "boolean": ["literalBoolean", "path"],
            "array": ["literalArray", "path"]
        }

        expected_keys = valid_keys.get(expected_type, [])
        actual_keys = [k for k in value.keys() if k in expected_keys]

        if len(actual_keys) == 0:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                f"值对象必须包含以下键之一: {expected_keys}，但实际为: {list(value.keys())}",
                loc
            ))
        elif len(actual_keys) > 1:
            self.results.append(ValidationResult(
                ValidationLevel.WARNING,
                f"值对象应只包含一个键，但发现多个: {actual_keys}",
                loc
            ))

        # 检查嵌套的 literalString（常见错误）
        if "literalString" in value:
            inner = value["literalString"]
            if isinstance(inner, dict) and "literalString" in inner:
                self.results.append(ValidationResult(
                    ValidationLevel.ERROR,
                    "检测到双重嵌套的 literalString，这是一个常见错误",
                    loc
                ))

    def _validate_data_model_update(self, content: Dict, loc: str):
        """验证 dataModelUpdate 消息"""
        if "surfaceId" not in content:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                "dataModelUpdate 缺少必需字段 'surfaceId'",
                loc
            ))

        if "contents" not in content:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                "dataModelUpdate 缺少必需字段 'contents'",
                loc
            ))

    def _validate_delete_surface(self, content: Dict, loc: str, surfaces: Dict):
        """验证 deleteSurface 消息"""
        if "surfaceId" not in content:
            self.results.append(ValidationResult(
                ValidationLevel.ERROR,
                "deleteSurface 缺少必需字段 'surfaceId'",
                loc
            ))
            return

        surface_id = content["surfaceId"]
        if surface_id in surfaces:
            del surfaces[surface_id]


def validate_a2ui_json(json_str: str) -> Tuple[bool, List[ValidationResult]]:
    """
    便捷函数：验证 A2UI JSON 字符串

    Args:
        json_str: JSON 字符串

    Returns:
        (是否有效, 验证结果列表)
    """
    # 1. 先验证 JSON 语法
    try:
        data = json.loads(json_str)
    except json.JSONDecodeError as e:
        return False, [ValidationResult(
            ValidationLevel.ERROR,
            f"JSON 语法错误: {e}",
            f"字符位置 {e.pos}"
        )]

    # 2. 确保是列表
    if isinstance(data, dict):
        data = [data]
    elif not isinstance(data, list):
        return False, [ValidationResult(
            ValidationLevel.ERROR,
            f"A2UI 消息必须是对象或对象数组，但得到: {type(data).__name__}",
            "根"
        )]

    # 3. 验证消息结构
    validator = A2UIValidator()
    return validator.validate(data)


def validate_training_data(file_path: str) -> Dict[str, Any]:
    """
    验证训练数据文件中的所有 A2UI JSON

    Args:
        file_path: 训练数据 JSON 文件路径

    Returns:
        验证报告
    """
    with open(file_path, 'r', encoding='utf-8') as f:
        training_data = json.load(f)

    report = {
        "total_examples": len(training_data),
        "valid_examples": 0,
        "invalid_examples": 0,
        "error_summary": {},
        "details": []
    }

    for i, example in enumerate(training_data):
        example_id = example.get("id", example.get("example_id", f"example_{i}"))

        # 获取 agent 的 A2UI 输出 - 支持多种字段名
        a2ui_data = None
        for field_name in ["expected_a2ui_json", "agent_a2ui_json", "a2ui_json"]:
            if field_name in example:
                a2ui_data = example[field_name]
                break

        # 也检查 turns 结构
        if a2ui_data is None and "turns" in example:
            a2ui_data = []
            for turn in example["turns"]:
                for field_name in ["agent_a2ui_json", "expected_a2ui_json", "a2ui_json"]:
                    if field_name in turn:
                        a2ui_data.extend(turn[field_name])
                        break

        if a2ui_data is None:
            report["details"].append({
                "example_id": example_id,
                "valid": False,
                "errors": ["找不到 agent_a2ui_json 字段"]
            })
            report["invalid_examples"] += 1
            continue

        # 验证
        validator = A2UIValidator()
        is_valid, results = validator.validate(a2ui_data if isinstance(a2ui_data, list) else [a2ui_data])

        errors = [r for r in results if r.level == ValidationLevel.ERROR]
        warnings = [r for r in results if r.level == ValidationLevel.WARNING]

        if is_valid:
            report["valid_examples"] += 1
        else:
            report["invalid_examples"] += 1

        # 统计错误类型
        for error in errors:
            msg = error.message
            if msg not in report["error_summary"]:
                report["error_summary"][msg] = 0
            report["error_summary"][msg] += 1

        report["details"].append({
            "example_id": example_id,
            "valid": is_valid,
            "error_count": len(errors),
            "warning_count": len(warnings),
            "errors": [{"message": e.message, "location": e.location} for e in errors],
            "warnings": [{"message": w.message, "location": w.location} for w in warnings]
        })

    return report


# ============= 命令行接口 =============

if __name__ == "__main__":
    import sys
    import argparse

    parser = argparse.ArgumentParser(description="A2UI JSON 验证器")
    parser.add_argument("input", help="要验证的 JSON 文件路径")
    parser.add_argument("--training-data", "-t", action="store_true",
                        help="验证训练数据文件格式")
    parser.add_argument("--output", "-o", help="输出验证报告到文件")
    parser.add_argument("--verbose", "-v", action="store_true",
                        help="显示详细信息")

    args = parser.parse_args()

    if args.training_data:
        # 验证训练数据
        report = validate_training_data(args.input)

        print(f"\n{'='*60}")
        print("A2UI 训练数据验证报告")
        print(f"{'='*60}")
        print(f"总样本数: {report['total_examples']}")
        print(f"有效样本: {report['valid_examples']}")
        print(f"无效样本: {report['invalid_examples']}")

        if report['error_summary']:
            print(f"\n错误类型统计:")
            for msg, count in sorted(report['error_summary'].items(), key=lambda x: -x[1]):
                print(f"  [{count}] {msg}")

        if args.verbose and report['details']:
            print(f"\n详细信息:")
            for detail in report['details']:
                if not detail['valid'] or detail.get('warning_count', 0) > 0:
                    print(f"\n  {detail['example_id']}:")
                    for err in detail.get('errors', []):
                        if isinstance(err, dict):
                            print(f"    ❌ {err['message']} @ {err['location']}")
                        else:
                            print(f"    ❌ {err}")
                    for warn in detail.get('warnings', []):
                        if isinstance(warn, dict):
                            print(f"    ⚠️  {warn['message']} @ {warn['location']}")
                        else:
                            print(f"    ⚠️  {warn}")

        if args.output:
            with open(args.output, 'w', encoding='utf-8') as f:
                json.dump(report, f, ensure_ascii=False, indent=2)
            print(f"\n验证报告已保存到: {args.output}")

        # 设置退出码
        sys.exit(0 if report['invalid_examples'] == 0 else 1)

    else:
        # 验证单个 A2UI JSON 文件
        with open(args.input, 'r', encoding='utf-8') as f:
            json_str = f.read()

        is_valid, results = validate_a2ui_json(json_str)

        print(f"\n{'='*60}")
        print(f"验证文件: {args.input}")
        print(f"{'='*60}")

        if is_valid:
            print("✅ JSON 验证通过!")
        else:
            print("❌ JSON 验证失败!")

        for result in results:
            if result.level == ValidationLevel.ERROR:
                print(f"  ❌ ERROR: {result.message} @ {result.location}")
            elif result.level == ValidationLevel.WARNING:
                print(f"  ⚠️  WARNING: {result.message} @ {result.location}")
            elif args.verbose:
                print(f"  ℹ️  INFO: {result.message} @ {result.location}")

        sys.exit(0 if is_valid else 1)
