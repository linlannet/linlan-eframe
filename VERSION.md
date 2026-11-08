# AI 开发助手使用参考说明版本说明

当前版本：v1.0.0-linlan

发布日期：2026-07

版本定位：麟览（LINLAN）公司定制版，基于 v0.1.1 模板调整为公司实际技术栈和工程场景

适用范围：麟览公司 AI 试点项目，覆盖 Trae、CodeBuddy、Claude Code 和 opencode。

## 1. 使用参考内容

v1.0.0-linlan 是 AI 开发助手使用参考说明的麟览公司定制版本，重点提供：

- 项目级参考入口：`AGENTS.md`（含麟览公司典型工程参考）
- 多工具参考桥接：`.trae/`、`.codebuddy/`、`CLAUDE.md`
- 1WEEK/3DAY/1DAY 任务复杂度与参考产物
- context 模板与建议质量门槛
- 需求、设计、测试、审查、发布和 AI 使用记录模板
- 分层快捷指令：初始化项目、开始任务、完成任务为核心治理指令；梳理需求、开始设计、编写测试用例、开始编码、执行测试、审查代码、生成阶段汇总为按需能力指令
- 按需 workflow：`ai-pilot/reference/workflows/` 承载快捷指令详细流程，让 AI 更聚焦当前任务
- 测试执行记录参考：`test-execution-log.md`
- 效果评估参考口径：耗时（小时）、AI 输出采纳率（%）、人工修改量、返工次数（次）、测试指标、功能规模估算和 AI 生成代码占比（%）
- LINLAN 实际工程场景示例任务，包含 Java Spring Boot、Python Flask、代码生成器等

## 2. v1.0.0-linlan 更新说明

- 增加麟览（LINLAN）公司标识和品牌信息
- AGENTS.md 新增第15节：麟览公司试点工程参考（linlan-claw-ops / anli-loop / linlan-skills / linlan-super-ip / shrcj-rcqy-skills）
- CLAUDE.md 增加公司典型技术栈参考
- 示例任务替换为麟览实际工程场景（工伤待遇知识库 / 案例库CRUD / 数据序列化修复）
- AI使用记录模板增加麟览工程类型字段
- 快速指令卡更新示例场景

## 3. 工具兼容性矩阵

| 工具 | 规则入口 | 是否支持项目规则自动读取 | 是否可直接执行测试命令 | 适配说明 |
|---|---|---|---|---|
| Trae | `.trae/rules/poc-rule.md` | 是 | 是 | 已确认支持项目规则目录，推荐作为首选工具 |
| CodeBuddy | `.codebuddy/rules/poc-rule.md` | 是 | 是 | 适合按需 workflow 推进任务和测试闭环 |
| Claude Code | `CLAUDE.md` | 是 | 是 | 适合复杂任务、命令验证和多文件修改 |
| opencode | `AGENTS.md` | 是 | 是 | 优先读取根目录 `AGENTS.md` |

## 4. 分发说明

试点项目接入时，将参考资料包内文件复制到项目根目录，并保留项目已有业务代码和测试。

建议复制内容：

```text
AGENTS.md
CLAUDE.md
.trae/
.codebuddy/
ai-pilot/
VERSION.md
```

真实任务产物建议沉淀到：

```text
ai-pilot/poc/{任务编号}/
```

## 5. 使用边界

- 请勿在参考资料包中放置生产密钥、Token、连接串、真实个人信息或敏感业务数据。
- 不建议所有任务都生成完整 8 个文件，可按 1WEEK/3DAY/1DAY 任务复杂度裁剪。
- 1WEEK/3DAY级任务建议整理 context，1DAY级任务可按复杂度选择是否整理。
- AI 输出不建议直接进入交付，应按项目既有 Review、构建检查和测试验证流程确认。
