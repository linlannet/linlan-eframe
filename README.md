# EFRAME — 企业级全栈支撑框架（linlan-eframe）

简体中文 | [English](./README.en.md)

> **TL;DR** · 基于 Java 17 + Spring Boot 的企业级后端框架与 Vue3 管理前端，内置机构、管理员、角色、权限、分组、消息、代码生成与定时任务能力。
> **Keywords**: EFRAME, Spring Boot, Java 17, MyBatis, Druid, Quartz, Vue3, Element Plus, Maven
> **AI 入口**: [llms.txt](./llms.txt) · [AGENTS.md](./AGENTS.md)

[![License](https://img.shields.io/badge/license-Apache%202-green.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![java version](https://img.shields.io/badge/JAVA-17-green.svg)
![spring boot](https://img.shields.io/badge/Spring%20Boot-3.5.16-brightgreen.svg)
![gitee star](https://gitee.com/linlannet/linlan-eframe/badge/star.svg)

## 介绍

JAVA 企业级后端框架（EFRAME），基于 Spring Boot，采用支持 JAVA 17 的 framework、security，后端数据访问采用 MyBatis 框架，支持多种数据库一套代码适配，提供脚手架可快速生成 Mapper 等。
借鉴若依框架，实现最基础的管理员、机构、角色、权限、分组、消息管理，为各类企业级应用提供框架支撑应用扩展。

**工具类代码地址：** <https://gitee.com/linlannet/java-tools-parent>

**智能代码生成工具地址：** <https://gitee.com/linlannet/java-tools-generate>

**非浸入式自动生成接口 API 代码地址：** <https://gitee.com/linlannet/java-plugin-doc-generate>

**企业框架（EFRAME）使用指南及效果：** <https://gitee.com/linlannet/linlan-eframe/tree/master/eframe-docs>

## 版本历史

全部版本变更见 [CHANGELOG](./CHANGELOG.md)。本 README 只保留稳定的架构、模块与使用说明。

## 目录

- [1. 仓库组成](#1-仓库组成)
- [2. 快速开始](#2-快速开始)
- [3. 后端模块](#3-后端模块)
- [4. 配置与端口](#4-配置与端口)
- [5. 前端工程](#5-前端工程)
- [6. AI 试点资料包](#6-ai-试点资料包)
- [7. 目录结构](#7-目录结构)
- [8. 开发约定](#8-开发约定)
- [9. 文档索引](#9-文档索引)
- [参与贡献](#参与贡献)
- [版权](#版权)

---

## 1. 仓库组成

| 目录 | 说明 | 技术栈 |
| ---- | ---- | ---- |
| [backend](./backend) | 企业级后端框架，Maven 多模块 | Java 17 + Spring Boot 3.5.16 + Spring Framework 6.2.14 + Spring Security 6.5.7 + MyBatis 3.5.19 + Druid + PageHelper + Quartz |
| [frontend](./frontend) | 管理前端工程 | Vue 3.2 + Element Plus 2.9 + Ant Design Vue 3 + Pinia + Vue Router 4 + Vite 2.7 |
| [ai-pilot](./ai-pilot) | 麟览 AI 开发助手参考资料包 | Markdown 模板 + 快捷指令 workflow |
| [docs](./docs) | Smart-doc 生成的接口文档（HTML / OpenAPI） | smart-doc |

## 2. 快速开始

### 2.1 环境要求

- JDK 17
- Maven 3.8+
- Node.js 与 npm（前端）
- MySQL（默认数据源为 MySQL；也提供 H2 本地数据源配置）

### 2.2 后端构建

```bash
cd backend
mvn clean install            # 全模块安装到本地仓库
mvn clean package -DskipTests # 仅打包
```

### 2.3 后端启动

```bash
# 方式一：Maven 直接运行
mvn -pl eframe-web -am spring-boot:run -Dspring-boot.run.profiles=dev

# 方式二：运行打包产物
java -jar eframe-web/target/eframe-web.jar --spring.profiles.active=dev
```

启动类：`backend/eframe-web/src/main/java/net/linlan/FrameApplication.java`

### 2.4 前端启动

```bash
cd frontend
npm install
npm run dev        # vite --mode dev
npm run build      # vite build --mode prod
npm run preview
```

> 前端端口从 `VITE_PORT` 环境变量读取；仓库未附 `.env.*` 文件，需在 `frontend/` 下自行创建 `.env.dev` / `.env.prod` 并设置 `VITE_PORT`。开发代理 `/dev_api` 指向 `http://localhost:8081/eframe_backend/`。

## 3. 后端模块

| 模块 | 说明 |
| --- | --- |
| `eframe-support` | frame 支撑模块，各类工具类、数据工具包 |
| `eframe-model` | model 模型数据模块，数据库读取的 service 和 dao 资源工具包 |
| `eframe-core` | core 核心共性模块，通用业务逻辑核心工具 |
| `eframe-view` | view 视图逻辑模块，采用读写分离方式拆分业务视图逻辑 |
| `eframe-api` | api 接口网关模块，框架层通用 api 资源包 |
| `module-generator` | 代码生成模块，支持简单控制与读写分离控制，一体化服务网关 |
| `module-quartz` | Quartz 定时任务模块，任务配置、启动、停止与监控 |
| `eframe-web` | web 应用服务模块，服务应用 API 配置注入，提供接口 |
| `module-extend` | 扩展模块，后续增加 sms、social 等通用配置与 jar 引用 |
| `scripts` | 数据库脚本、API 接口文档、服务器端运行脚本 |

依赖方向：`eframe-web` → `eframe-api` / `eframe-view` / `eframe-core` / `eframe-model` / `eframe-support`；`module-generator`、`module-quartz`、`module-extend` 为可插拔能力模块。

### 3.1 核心能力

- 管理员、机构、角色、岗位、分组、消息管理
- 权限与数据范围控制（Spring Security）
- 多数据源适配（Druid + DynamicDataSource）
- MyBatis Mapper 与分页（PageHelper）
- 代码生成（module-generator）
- 定时任务（module-quartz）
- 接口文档生成（smart-doc，产物见 `docs/api-docs`）

## 4. 配置与端口

| 配置 | 文件 | 值 |
| --- | --- | --- |
| 默认 profile | `backend/eframe-web/src/main/resources/application.yml` | `ver` |
| 开发端口 / 上下文 | `application-dev.yml` | `8081` / `/eframe_backend/` |
| 生产端口 / 上下文 | `application-prod.yml` | `8310` / `/eframe_backend` |
| 默认数据源 | `application-dev.yml` | `jdbc:mysql://localhost:3306/eframedb_1.0`（用户 `lldba`） |
| H2 本地数据源 | `application-dev.yml` | `jdbc:h2:~/H2Data/lldb` |
| 前端代理 | `frontend/vite.config.js` | `/dev_api` → `http://localhost:8081/eframe_backend/` |

> 注意：仓库内仅提供 `application-dev.yml`、`application-prod.yml`，而 `application.yml` 默认激活 `ver`。本地启动请显式指定 `--spring.profiles.active=dev`，或自行提供 `application-ver.yml`。生产账号、密码与密钥请通过外部配置注入，不要提交到仓库。

## 5. 前端工程

管理前端覆盖机构、管理员、角色、岗位、分组、消息等管理界面，目录约定：

```text
frontend/src/
├── api/            admin / monitor / system / tool 接口封装
├── views/          admin、monitor、profile、tool、workbench、login、error
├── components/     FileUpload、ImageUpload、Pagination、DictTag、iFrame 等
├── directive/      权限指令
├── plugins/        全局插件
├── utils/          dict、通用工具
└── assets/         图片与样式
```

前端详细说明：[frontend/README.md](./frontend/README.md) · [frontend/CHANGELOG.md](./frontend/CHANGELOG.md)

## 6. AI 试点资料包

根目录中的 `ai-pilot/`、`AGENTS.md`、`CLAUDE.md`、`VERSION.md` 以及 `.trae/`、`.codebuddy/` 规则入口，构成麟览 AI 开发助手参考资料包（v1.0.0-linlan）。

- 参考资料包总览：[ai-pilot/README.md](./ai-pilot/README.md)
- 版本与工具兼容性：[VERSION.md](./VERSION.md)
- 标准模板：`ai-pilot/standards/`（需求、设计、API、数据库、测试、审查、发布、AI 使用记录等 15 个模板）
- 快捷指令流程：`ai-pilot/reference/workflows/`（初始化项目、开始任务、梳理需求、开始设计、编写测试用例、开始编码、执行测试、审查代码、完成任务、生成阶段汇总）
- 任务产物目录：`ai-pilot/poc/{任务编号}/`

> 该资料包是研发流程参考，不改变项目既有构建、发布与评审流程。AI 产物需经人工 Review、构建检查与测试验证后进入交付。

## 7. 目录结构

```text
linlan-eframe/
├── backend/                 Maven 多模块后端
│   ├── pom.xml              父 POM（1.2.2）
│   ├── eframe-support/      工具与数据支撑
│   ├── eframe-model/        model 层（service/dao）
│   ├── eframe-core/         核心共性逻辑
│   ├── eframe-view/         视图逻辑（读写分离）
│   ├── eframe-api/          通用 API 资源
│   ├── module-generator/    代码生成
│   ├── module-quartz/       定时任务
│   ├── eframe-web/          Web 应用与启动类
│   ├── module-extend/       扩展模块
│   └── scripts/             bin / codestyle / docker / sql
├── frontend/                Vue3 管理前端
├── docs/api-docs/           Smart-doc 接口文档
├── ai-pilot/                AI 试点模板与流程
├── AGENTS.md                AI Agent 工程约定
├── CLAUDE.md                Claude Code 桥接入口
├── VERSION.md               AI 参考资料包版本说明
├── llms.txt                 AI Agent 快速索引
└── CHANGELOG.md             版本变更记录
```

## 8. 开发约定

- 后端保持模块边界：控制器只做协议转换，业务规则放在 service / view / core 层
- 新增数据库表时同步更新 `backend/scripts/sql/` 脚本与对应 Mapper XML
- 接口返回统一使用框架的 `ResponseEntity` 封装，`code` 使用整型状态码
- 新增模块必须更新 `backend/pom.xml` 的 `<modules>` 与依赖管理
- 前端接口统一走 `frontend/src/api/`，页面放 `frontend/src/views/`，公共组件放 `frontend/src/components/`
- `README.md` 与 `README.en.md` 同步维护；版本变更记录到根 `CHANGELOG.md` 与对应子工程 `CHANGELOG.md`
- 发布前执行 `mvn clean install`，前端执行 `npm run build`

## 9. 文档索引

| 文档 | 内容 |
| --- | --- |
| [CHANGELOG.md](./CHANGELOG.md) | 后端 / 前端版本变更记录与索引 |
| [AGENTS.md](./AGENTS.md) | AI Agent 使用的工程结构、命令与约束 |
| [llms.txt](./llms.txt) | 机器可读的项目摘要与命令索引 |
| [backend/README.md](./backend/README.md) | 后端子工程说明 |
| [backend/CHANGELOG.md](./backend/CHANGELOG.md) | 后端子工程版本记录 |
| [frontend/README.md](./frontend/README.md) | 前端子工程说明 |
| [frontend/CHANGELOG.md](./frontend/CHANGELOG.md) | 前端子工程版本记录 |
| [backend/FAQ.md](./backend/FAQ.md) | 后端分支与常见问题 |
| [frontend/FAQ.md](./frontend/FAQ.md) | 前端分支与常见问题 |
| [docs/api-docs/README.md](./docs/api-docs/README.md) | Smart-doc 接口文档说明 |
| [ai-pilot/README.md](./ai-pilot/README.md) | AI 试点参考资料包 |
| [VERSION.md](./VERSION.md) | AI 参考资料包版本与兼容性 |

## 参与贡献

欢迎你的加入！[提交 issue](https://gitee.com/linlannet/linlan-eframe/issues/new/choose) 或者提交拉取请求。

1. Fork 代码仓库
2. 新建 `Feat_1.0.0` 分支
3. 提交代码
4. 新建 Pull Request
5. 创建并提交 tag

```bash
git config user.name linlaninfo
git config user.email linlannet@163.com

git tag -a 1.0.0 -m "初始化版本"
git push origin --tags

本地编译：mvn clean install
发布中央库：mvn clean deploy
```

## 版权

[Apache 2.0 © eframe-java-backend 2023](./LICENSE)