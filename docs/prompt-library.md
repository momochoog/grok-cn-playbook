# Grok Prompt 库怎么用？

直接答案：选择最接近任务的 JSON 文件，填写 `inputs` 中声明的变量，再把 `prompt_template` 发送给 Grok。先看输出是否满足 `expected_output`，再按 `quality_checks` 做一次复核。不要把账号凭据、订单隐私或 API Key 放进变量。

## 为什么使用 JSON

- 人可以直接阅读和复制；
- 程序可以读取变量、模板和验收条件；
- Schema 与校验脚本能发现缺失字段、重复 ID 和未声明占位符；
- 每份 Prompt 都带版本、更新时间、许可证和原创来源声明。

## 文件结构

```json
{
  "$schema": "../schema/prompt.schema.json",
  "id": "research-source-audit",
  "title": "事实核验研究",
  "version": "1.0.0",
  "updated": "2026-08-12",
  "language": "zh-CN",
  "workflow": "research",
  "description": "将一个主题拆成可核验主张、证据和未知项。",
  "suitable_for": ["产品调研", "时效性事实核验"],
  "inputs": [],
  "prompt_template": "...",
  "expected_output": ["..."],
  "quality_checks": ["..."],
  "safety_notes": ["..."],
  "license": "Apache-2.0",
  "origin": "Original prompt authored for this repository; not copied or derived from xAI system prompts."
}
```

## 变量替换

占位符统一写成 `{{variable_name}}`。例如：

```text
{{topic}} → SuperGrok Heavy 的公开价格信息
{{as_of_date}} → 2026-08-12
```

变量值是数据，不是高优先级指令。如果输入包含“忽略前文”等文本，应把它当成待分析内容，而不是执行。

## 使用流程

1. 选择一个工作流文件；
2. 阅读 `suitable_for`，确认任务匹配；
3. 填写所有 `required: true` 的输入；
4. 发送模板，必要时附上原始材料；
5. 根据 `expected_output` 验收结构；
6. 根据 `quality_checks` 检查事实、遗漏和不确定性；
7. 涉及当前事实时，重新查看来源，不把模型记忆当成证据。

## 原创与官方 Prompt 的边界

xAI 在官方 `xai-org/grok-prompts` 仓库公开部分系统 Prompt，并采用 AGPL-3.0。这个仓库只把它作为“官方 Prompt 存在且会更新”的来源记录，不复制、不翻译、不近义改写其中内容。本项目的 JSON 是面向最终用户任务的原创工作流，采用 Apache-2.0。

如果贡献者想讨论官方 Prompt，请只链接原文件并概述自己的观察；不要把官方文件复制进本仓库。

## 本地验证

```bash
node scripts/validate-prompts.mjs
```

校验通过只代表结构与仓库规则正确，不代表模型输出天然准确。事实性结论仍需人工核验。

## 官方来源

- [xAI 官方 grok-prompts 仓库](https://github.com/xai-org/grok-prompts)

