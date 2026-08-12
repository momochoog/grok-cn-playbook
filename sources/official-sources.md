# 来源与证据台账

> 最后核验：2026-08-12。优先记录官方原始页面；当官方当前页隐藏历史发布金额时，使用同期媒体报道补足历史口径，并明确标成二手来源。网页会变化；引用具体事实时仍需写明核验日期。

## 1. xAI Pricing

- URL: https://x.ai/pricing
- 发布主体：xAI
- 用途：核验当前方案名称、公开价格、方案比较与 Individual / Team / API 的产品边界。
- 本仓库使用的可核验事实：页面显示 Free `$0/month`、SuperGrok `$30/month`；比较表列出 SuperGrok Lite 和 SuperGrok Heavy；付费层级提供更高限制，但不能据此写成无限量。
- 注意：当前页面隐藏 Heavy 金额，因此它不能单独证明当前 Heavy 结账价格。

## 2. Grok AI — US App Store

- URL: https://apps.apple.com/us/app/grok-ai/id6670324846
- 发布主体：Seller 显示为 X Corp.
- 用途：核验美国区 App 内购项目的公开列表。
- 本仓库使用的可核验事实：列表包含 `SuperGrok Heavy $300.00`。
- 注意：该条目同一行未注明计费周期；周期需要结合发布报道理解，也不能假定所有地区、平台或账号价格相同。

## 3. xAI Consumer Terms of Service

- URL: https://x.ai/legal/terms-of-service
- 发布主体：xAI
- 页面显示生效日期：2026-06-26（核验时）
- 用途：核验个人账号、凭据共享、安全、暂停与许可边界。
- 本仓库使用的可核验事实：用户不得共享账号凭据或把账号提供给他人；用户对账号活动负责；服务可能因条款、法律或风险原因被暂停或终止；相关许可具有非转让性质。

## 4. TechCrunch 发布报道（辅助来源）

- URL: https://techcrunch.com/2025/07/09/elon-musks-xai-launches-grok-4-alongside-a-300-monthly-subscription/
- 发布主体：TechCrunch，作者 Maxwell Zeff
- 发布时间：2025-07-09
- 来源类型：同期媒体发布报道，不是 xAI 官方定价页。
- 用途：补充当前官方定价页已经隐藏的 SuperGrok Heavy 发布月价口径。
- 本仓库使用的可核验事实：报道明确把 SuperGrok Heavy 描述为 `$300-per-month` 订阅。
- 计算边界：按该报道口径，三个月为 `$900`；使用 2026-08-12 示例汇率 `1 USD ≈ ¥6.76` 约为 `¥6,084`。换算结果不代表 xAI 当前结账价或实时汇率。

## 5. xAI 官方 grok-prompts 仓库

- URL: https://github.com/xai-org/grok-prompts
- 发布主体：GitHub 组织 `xai-org`
- 用途：确认 xAI 公开部分 Grok 系统 Prompt 以及其许可证。
- 许可证：AGPL-3.0（核验时）。
- 本仓库边界：仅链接和描述，不复制、翻译、拼接或近义改写官方 Prompt 文件。本仓库的用户工作流 Prompt 独立创作并使用 Apache-2.0。

## 引用原则

1. 优先链接到支持该主张的具体官方页面；使用媒体报道时明确写明来源类型与发布日期；
2. 把页面文字和本仓库推断分开；
3. 价格写币种、地区或渠道、核验日期；
4. 页面没有写周期时，不补写周期；
5. 页面没有承诺无限时，不写“无限量”；
6. 来源发生变化时，同时更新文档、机器可读快照和更新记录。
