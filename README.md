# eframe-java-backend

[![License](https://img.shields.io/badge/license-Apache%202-green.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![java version](https://img.shields.io/badge/JAVA-17-green.svg)
![gitee star](https://gitee.com/linlannet/linlan-eframe/badge/star.svg)

## 介绍

JAVA企业级后端框架（EFRAME），基于Springboot，采用支持 JAVA 17的framework、security，后端数据访问采用Mybatis框架，支持多种数据库一套代码适配，提供脚手架可快速生成Mapper等。
借鉴若依框架，实现最基础的管理员、机构、角色、权限、分组、消息管理，为各类企业级应用提供框架支撑应用扩展。

**工具类代码地址：** <a target="_blank">https://gitee.com/linlannet/java-tools-parent

**智能代码生成工具地址：** <a target="_blank">https://gitee.com/linlannet/java-tools-generate

**非浸入式自动生成接口API代码地址：** <a target="_blank">https://gitee.com/linlannet/java-plugin-doc-generate


前端工程路径：

**VUE+TS前端工程地址：** <a target="_blank">https://gitee.com/linlannet/linlan-eframe/tree/master/eframe-vue-frontend


## 版本历史

[CHANGELOG](./CHANGELOG.md)

## 应用效果

**企业框架（EFRAME）使用指南及效果：** <a target="_blank">https://gitee.com/linlannet/linlan-eframe/tree/master/eframe-docs

## 子包简介
1. eframe-support: frame支撑模块，各类工具类、数据工具包.
2. eframe-model: model模型数据模块，数据库读取的service和dao资源工具包.
3. eframe-core: core核心共性模块，通用的业务逻辑核心工具.
4. eframe-view: view视图逻辑模块，采用读写分离方式，对部分业务进行视图逻辑拆分.
5. eframe-api: api接口网关模块，框架层的通用api资源包.
6. module-generator: generator代码生成模块，代码生成支持简单控制和读写分离控制，一体化服务网关.
7. module-quartz: quartz定时任务模块，对任务进行配置、启动、停止和监控.
8. eframe-web: web应用服务模块，服务应用API配置注入，提供接口.
9. module-extend: module扩展模块，后端服务扩展，后续增加sms、social等通用配置和jar引用，实现扩展.
10. scripts: 数据库脚本、API接口文档、服务器端运行的sh脚本等.


## 技术路径
### 软件架构
```
Springboot + Framework + Security + Mybatis
```

### 安装教程
1. mvn clean install
2. mvn clean deploy

### 使用说明
1. 通过依赖使用
```
   <dependency>
      <groupId>${groupId}</groupId>
      <artifactId>${artifactId}</artifactId>
      <version>${project.version}</version>
      <scope>test</scope>
   </dependency>
```
2. 直接拷贝打包后的jar包

## 参与贡献
1.  Fork 本仓库
2.  新建 Feat_1.0.0 分支
3.  提交代码
```
git config user.name linlaninfo
git config user.email linlannet@163.com
git config --global --list
git config --list
```
4. 新建 Pull Request
5. 创建和提交tag
```
创建
git tag -a 1.0.0 -m "初始化版本"
查看
git tag
提交
git push origin --tags
删除
git tag -d 1.0.0

本地编译：mvn clean install
发布到github：mvn clean deploy

```
6. 其他

## 版权

[Apache 2.0 © eframe-java-backend 2023](./LICENSE)

# eframe-vue-frontend

[![License](https://img.shields.io/badge/license-Apache%202-green.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![java version](https://img.shields.io/badge/JAVA-17-green.svg)
![gitee star](https://gitee.com/linlannet/linlan-eframe/badge/star.svg)

## 简介

企业级前端框架，基于VUE框架实现机构、管理员、角色、岗位、分组、消息管理的前端工程


后端工程路径：

**JAVA后端工程地址：** <a target="_blank">https://gitee.com/linlannet/linlan-eframe/tree/master/eframe-java-backend


## 修改历史记录

[CHANGELOG](./CHANGELOG.md)


## 应用效果

**企业框架（EFRAME）使用指南及效果：** <a target="_blank">https://gitee.com/linlannet/linlan-eframe/tree/master/eframe-docs


## 环境准备

- [node](http://nodejs.org/) and [git](https://git-scm.com/) - Project development environment
- [Vite](https://vitejs.dev/) - Familiar with vite features
- [Vue3](https://v3.vuejs.org/) - Familiar with Vue basic syntax
- [TypeScript](https://www.typescriptlang.org/) - Familiar with the basic syntax of `TypeScript`
- [Es6+](http://es6.ruanyifeng.com/) - Familiar with es6 basic syntax
- [Vue-Router-Next](https://next.router.vuejs.org/) - Familiar with the basic use of vue-router
- [Ant-Design-Vue](https://antdv.com/docs/vue/introduce-cn/) - ui basic use
- [Mock.js](https://github.com/nuysoft/Mock) - mockjs basic syntax

## 安装和使用

- 获取项目代码

```bash
git clone https://gitee.com/linlannet/linlan-eframe/tree/master/eframe-vue-frontend
```

- 安装依赖

```bash
cd eframe-vue-frontend

npm install

```

- 调试运行

```bash
npm run dev
```

- 打包发布

```bash
npm build
```

## 参与贡献

欢迎你的加入！[提交 issue](https://gitee.com/linlannet/linlan-eframe/issues/new/choose) 或者提交拉取请求。

**拉取请求步骤:**

1. Fork 代码仓库
2. 创建你自己的分支: `git checkout -b feat/xxxx`
3. 提交你的代码: `git commit -am 'feat(function): add xxxxx'`
4. 推送你的分支到本仓库: `git push origin feat/xxxx`
5. 发布`pull request`

## 版权

[Apache 2.0 © eframe-vue-frontend 2023](./LICENSE)

# 麟览（LINLAN）AI 开发助手使用参考说明

[English](./README.en.md)

当前版本：`v1.0.0-linlan` | 发布日期：2026-07

本参考资料包用于麟览公司 AI 试点项目，适配 **Trae**、**CodeBuddy**、**Claude Code** 和 **opencode** 四款 AI 工具。核心目标是降低 AI 开发助手任务的上下文准备成本，帮助使用人员沉淀需求、设计、测试、审查和效果评估材料，同时不改变项目既有研发流程。

---

## 文件索引

### 根目录

| 文件 | 说明 |
|---|---|
| [AGENTS.md](./AGENTS.md) | 项目级 AI 开发助手使用参考（opencode 原生读取，含麟览公司试点工程参考） |
| [CLAUDE.md](./CLAUDE.md) | Claude Code 引用桥接文件（含公司典型技术栈） |
| [VERSION.md](./VERSION.md) | 参考资料包版本、兼容性和分发说明 |

### 工具规则入口

| 工具 | 文件 | 说明 |
|---|---|---|
| Trae | [.trae/rules/poc-rule.md](./.trae/rules/poc-rule.md) | Trae 项目规则自动读取 |
| CodeBuddy | [.codebuddy/rules/poc-rule.md](./.codebuddy/rules/poc-rule.md) | CodeBuddy 项目规则自动读取 |

### AI Pilot 主目录

| 文件 | 说明 |
|---|---|
| [ai-pilot/README.md](./ai-pilot/README.md) | 参考资料包使用说明与目录总览 |

### 标准模板（`ai-pilot/standards/`）

| 文件 | 用途 |
|---|---|
| [00-ai-usage-rule.md](./ai-pilot/standards/00-ai-usage-rule.md) | AI 使用规则总览 |
| [01-requirement-spec-template.md](./ai-pilot/standards/01-requirement-spec-template.md) | 需求规格说明模板 |
| [02-design-template.md](./ai-pilot/standards/02-design-template.md) | 技术设计模板 |
| [03-api-design-template.md](./ai-pilot/standards/03-api-design-template.md) | 接口设计模板 |
| [04-db-design-template.md](./ai-pilot/standards/04-db-design-template.md) | 数据库设计模板 |
| [05-test-case-template.md](./ai-pilot/standards/05-test-case-template.md) | 测试用例模板 |
| [06-code-review-template.md](./ai-pilot/standards/06-code-review-template.md) | 代码审查模板 |
| [07-release-note-template.md](./ai-pilot/standards/07-release-note-template.md) | 发布说明模板 |
| [08-ai-usage-record-template.md](./ai-pilot/standards/08-ai-usage-record-template.md) | AI 使用记录模板 |
| [09-poc-evaluation-template.md](./ai-pilot/standards/09-poc-evaluation-template.md) | 试点评估模板 |
| [10-prompt-guide.md](./ai-pilot/standards/10-prompt-guide.md) | Prompt 编写指南 |
| [11-context-1week-template.md](./ai-pilot/standards/11-context-1week-template.md) | 1WEEK 级任务上下文模板 |
| [12-context-3day-template.md](./ai-pilot/standards/12-context-3day-template.md) | 3DAY 级任务上下文模板 |
| [13-context-1day-template.md](./ai-pilot/standards/13-context-1day-template.md) | 1DAY 级任务上下文模板 |
| [14-test-execution-log-template.md](./ai-pilot/standards/14-test-execution-log-template.md) | 测试执行日志模板 |

### 快捷指令 Workflow（`ai-pilot/reference/workflows/`）

| 指令 | 文件 | 说明 |
|---|---|---|
| 初始化项目 | [00-init-project.md](./ai-pilot/reference/workflows/00-init-project.md) | 扫描配置并预填项目信息 |
| 开始任务 | [01-start-task.md](./ai-pilot/reference/workflows/01-start-task.md) | 创建任务目录和基础产物 |
| 梳理需求 | [02-prepare-requirement.md](./ai-pilot/reference/workflows/02-prepare-requirement.md) | 生成或更新需求说明 |
| 开始设计 | [03-prepare-design.md](./ai-pilot/reference/workflows/03-prepare-design.md) | 生成或更新技术设计 |
| 编写测试用例 | [04-prepare-test-cases.md](./ai-pilot/reference/workflows/04-prepare-test-cases.md) | 生成或更新测试用例 |
| 开始编码 | [05-start-coding.md](./ai-pilot/reference/workflows/05-start-coding.md) | 基于任务上下文实现代码 |
| 执行测试 | [06-run-tests.md](./ai-pilot/reference/workflows/06-run-tests.md) | 运行最小必要测试集 |
| 审查代码 | [07-code-review.md](./ai-pilot/reference/workflows/07-code-review.md) | 基于 diff 做风险审查 |
| 完成任务 | [08-finish-task.md](./ai-pilot/reference/workflows/08-finish-task.md) | 补充 AI 使用记录和完整性检查 |
| 生成阶段汇总 | [09-generate-summary.md](./ai-pilot/reference/workflows/09-generate-summary.md) | 基于任务产物生成试点汇总 |

### 参考资料（`ai-pilot/reference/`）

| 文件 | 说明 |
|---|---|
| [quick-commands.md](./ai-pilot/reference/quick-commands.md) | 一页纸快速指令卡 |
| [metrics-definition.md](./ai-pilot/reference/metrics-definition.md) | 效果评估参考口径 |
| [summary-template.md](./ai-pilot/reference/summary-template.md) | 阶段复盘参考模板 |
| [.gitignore.template](./ai-pilot/reference/.gitignore.template) | 安全 gitignore 参考 |
| [pre-commit-config.yaml](./ai-pilot/reference/pre-commit-config.yaml) | gitleaks pre-commit 参考 |

### IDE 配置（`.idea/`）

| 文件 | 说明 |
|---|---|
| [.gitignore](./.idea/.gitignore) | IDE 目录 gitignore |
| [linlan-ai-assist.iml](./.idea/linlan-ai-assist.iml) | IntelliJ 模块文件 |
| [misc.xml](./.idea/misc.xml) | 杂项 IDE 配置 |
| [modules.xml](./.idea/modules.xml) | 模块配置 |

---

## 任务产物目录

真实任务产物建议沉淀到：

```
ai-pilot/poc/{任务编号}/
```

标准任务产物包括：

| 文件 | 用途 |
|---|---|
| `context.md` | 任务上下文索引 |
| `requirement.md` | 需求背景、范围、验收标准 |
| `design.md` | 技术方案、影响范围、关键流程 |
| `api-design.md` | 接口定义、请求响应、错误码 |
| `db-design.md` | 表结构、字段、索引、迁移策略 |
| `test-cases.md` | 功能、异常、边界、回归测试 |
| `test-execution-log.md` | 测试执行日志 |
| `review-summary.md` | 代码审查摘要 |
| `release-note.md` | 上线内容、影响范围、回滚方案 |
| `ai-usage-record.md` | AI 使用过程、采纳情况、效率指标 |

---

## 任务复杂度分级

| 级别 | 适用场景 | 建议产物 |
|---|---|---|
| **1WEEK**（>3天） | 新功能、架构变更、跨系统改造 | context 完整版 + 8 个核心文件 |
| **3DAY**（1-3天） | 中等需求、接口开发 | context 精简版 + 5 个核心文件 |
| **1DAY**（<1天） | Bug fix、配置修改 | review-summary + ai-usage-record |

---

## 快速上手

1. 将参考资料包解压到项目根目录
2. 在 AI 对话中输入 `初始化项目`，让 AI 扫描项目并预填 `AGENTS.md` 第 1-4 节
3. 补充业务背景并确认 AI 推断结果后，开始使用 AI 工具

---

## 麟览公司试点工程参考

| 工程 | 类型 | 技术栈 |
|---|---|---|
| linlan-claw-ops | 测试知识库平台 | Python Flask + Dashboard + MySQL |
| anli-loop | 案例库管理系统 | Java Spring Boot + Vue3 + MySQL + Redis |
| linlan-skills | AI 技能集合 | Markdown + Python |
| linlan-super-ip | 数据追踪工具 | Python |
| shrcj-rcqy-skills | 代码生成器 | Java + MySQL |

---

## 使用边界

- 请勿放置生产密钥、Token、连接串、真实个人信息或敏感业务数据
- 不建议所有任务都生成完整 8 个文件，可按任务复杂度裁剪
- AI 输出不建议直接进入交付，应经 Review、构建检查和测试验证确认