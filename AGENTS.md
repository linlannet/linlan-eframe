# AGENTS.md — linlan-eframe

## Project
EFRAME 企业级全栈支撑框架：Java 17 + Spring Boot 3.5.16 后端（Maven 多模块）+ Vue3 管理前端。后端版本 1.2.2，前端版本 1.2.0。

## Layout
- `backend/` Maven 父 POM 与 10 个子模块
  - `eframe-support` 工具与数据支撑
  - `eframe-model` model 层（service/dao）
  - `eframe-core` 核心共性逻辑
  - `eframe-view` 视图逻辑（读写分离）
  - `eframe-api` 通用 API 资源
  - `module-generator` 代码生成
  - `module-quartz` 定时任务
  - `eframe-web` Web 应用与启动类 `net.linlan.FrameApplication`
  - `module-extend` 扩展模块
  - `scripts/` bin / codestyle / docker / sql
- `frontend/` Vue3 管理前端：`src/api`、`src/views`、`src/components`、`src/directive`、`src/utils`
- `docs/api-docs/` Smart-doc 生成的接口文档
- `ai-pilot/` AI 开发助手模板与 workflow；`VERSION.md` 记录资料包版本

## Build & Test
- 后端构建：`cd backend && mvn clean install`
- 后端启动：`mvn -pl eframe-web -am spring-boot:run -Dspring-boot.run.profiles=dev`
- 后端 jar：`java -jar backend/eframe-web/target/eframe-web.jar --spring.profiles.active=dev`
- 前端：`cd frontend && npm install && npm run dev`；构建 `npm run build`
- 后端测试：`mvn test`；单模块：`mvn -pl <module> -am test`
- 前端未配置测试与 lint 脚本；改动后至少执行 `npm run build`

## Conventions
- 控制器只做协议转换；业务规则放在 service / view / core
- 接口统一返回框架 `ResponseEntity` 封装，`code` 为整型
- 新增表同步更新 `backend/scripts/sql/` 与 Mapper XML
- 新增 Maven 模块必须更新 `backend/pom.xml` 的 `<modules>` 与依赖管理
- 前端接口统一走 `frontend/src/api/`，页面放 `src/views/`，公共组件放 `src/components/`
- `README.md` 与 `README.en.md` 同步维护；版本变更同步 `CHANGELOG.md` 与子工程 CHANGELOG
- 默认 profile 为 `ver`，仓库仅提供 `dev` / `prod`；本地启动显式指定 `dev`

## Do Not
- 不提交 `target/`、`node_modules/`、`dist/`
- 不提交数据库密码、Redis 密码、Token、生产连接串
- 不在 `eframe-web` 中堆积业务逻辑
- 不绕过人工 Review 直接合并主干或发布生产
- 不擅自修改生产配置或执行不可逆数据库变更

## AI Pilot Rules
- 触发快捷指令前先读本文件，再按 `ai-pilot/reference/workflows/` 对应文件执行
- 1WEEK/3DAY 级任务读取 `ai-pilot/poc/{任务编号}/context.md`
- 任务产物沉淀到 `ai-pilot/poc/{任务编号}/`
- 大型项目不全量读取 `src/`、`docs/`、`config/`；先按任务范围、diff、错误日志定位
- 输出使用中文；不确定业务规则、权限或数据口径时先提问

## Key Docs
- `README.md` / `README.en.md` / `llms.txt`
- `backend/README.md` / `frontend/README.md`
- `docs/api-docs/README.md`
- `ai-pilot/README.md` / `ai-pilot/standards/00-ai-usage-rule.md`
- `VERSION.md`