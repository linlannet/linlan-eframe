# EFRAME — Enterprise Full-Stack Framework (linlan-eframe)

[简体中文](./README.md) | English

> **TL;DR** · An enterprise back-end framework on Java 17 + Spring Boot with a Vue3 management front end: organizations, administrators, roles, permissions, groups, messages, code generation and scheduled jobs.
> **Keywords**: EFRAME, Spring Boot, Java 17, MyBatis, Druid, Quartz, Vue3, Element Plus, Maven
> **AI entry**: [llms.txt](./llms.txt) · [AGENTS.md](./AGENTS.md)

[![License](https://img.shields.io/badge/license-Apache%202-green.svg)](https://www.apache.org/licenses/LICENSE-2.0)
![java version](https://img.shields.io/badge/JAVA-17-green.svg)
![spring boot](https://img.shields.io/badge/Spring%20Boot-3.5.16-brightgreen.svg)
![gitee star](https://gitee.com/linlannet/linlan-eframe/badge/star.svg)

## Introduction

EFRAME is a Java enterprise back-end framework based on Spring Boot, using framework and security components that support Java 17. Data access uses MyBatis with one codebase adaptable to multiple databases, and scaffolding quickly generates mappers and related code.
Inspired by RuoYi, it implements the baseline management of administrators, organizations, roles, permissions, groups and messages, providing a framework for enterprise applications to extend.

**Common tools:** <https://gitee.com/linlannet/java-tools-parent>

**Code generator:** <https://gitee.com/linlannet/java-tools-generate>

**Non-intrusive API doc plugin:** <https://gitee.com/linlannet/java-plugin-doc-generate>

**EFRAME usage guide and results:** <https://gitee.com/linlannet/linlan-eframe/tree/master/eframe-docs>

## Version History

All changes are recorded in [CHANGELOG](./CHANGELOG.md). This README keeps only stable architecture, module and usage documentation.

## Table of Contents

- [1. Repository Structure](#1-repository-structure)
- [2. Quick Start](#2-quick-start)
- [3. Back-end Modules](#3-back-end-modules)
- [4. Configuration and Ports](#4-configuration-and-ports)
- [5. Front-end Project](#5-front-end-project)
- [6. AI Pilot Toolkit](#6-ai-pilot-toolkit)
- [7. Directory Layout](#7-directory-layout)
- [8. Conventions](#8-conventions)
- [9. Documentation Index](#9-documentation-index)
- [Contributing](#contributing)
- [License](#license)

---

## 1. Repository Structure

| Directory | Description | Stack |
| ---- | ---- | ---- |
| [backend](./backend) | Enterprise back end, Maven multi-module | Java 17 + Spring Boot 3.5.16 + Spring Framework 6.2.14 + Spring Security 6.5.7 + MyBatis 3.5.19 + Druid + PageHelper + Quartz |
| [frontend](./frontend) | Management front end | Vue 3.2 + Element Plus 2.9 + Ant Design Vue 3 + Pinia + Vue Router 4 + Vite 2.7 |
| [ai-pilot](./ai-pilot) | LINLAN AI development assistant toolkit | Markdown templates + workflows |
| [docs](./docs) | Smart-doc generated API docs (HTML / OpenAPI) | smart-doc |

## 2. Quick Start

### 2.1 Requirements

- JDK 17
- Maven 3.8+
- Node.js and npm (front end)
- MySQL (the default data source; an H2 local data source is also configured)

### 2.2 Back-end Build

```bash
cd backend
mvn clean install             # install all modules to the local repository
mvn clean package -DskipTests # package only
```

### 2.3 Back-end Run

```bash
# Option 1: run with Maven
mvn -pl eframe-web -am spring-boot:run -Dspring-boot.run.profiles=dev

# Option 2: run the packaged jar
java -jar eframe-web/target/eframe-web.jar --spring.profiles.active=dev
```

Main class: `backend/eframe-web/src/main/java/net/linlan/FrameApplication.java`

### 2.4 Front-end Run

```bash
cd frontend
npm install
npm run dev        # vite --mode dev
npm run build      # vite build --mode prod
npm run preview
```

> The front-end port is read from the `VITE_PORT` environment variable. The repository does not ship `.env.*` files; create `.env.dev` / `.env.prod` under `frontend/` and set `VITE_PORT`. The `/dev_api` dev proxy targets `http://localhost:8081/eframe_backend/`.

## 3. Back-end Modules

| Module | Description |
| --- | --- |
| `eframe-support` | Framework support: utilities and data toolkits |
| `eframe-model` | Model layer: services and DAOs for database access |
| `eframe-core` | Core shared business logic |
| `eframe-view` | View logic with read/write separation |
| `eframe-api` | Framework-level common API resources |
| `module-generator` | Code generation, supporting simple and read/write-separated modes |
| `module-quartz` | Quartz scheduling: configure, start, stop and monitor jobs |
| `eframe-web` | Web application, API wiring and entry point |
| `module-extend` | Extension module for SMS, social and other integrations |
| `scripts` | SQL scripts, API docs and server scripts |

Dependency direction: `eframe-web` → `eframe-api` / `eframe-view` / `eframe-core` / `eframe-model` / `eframe-support`; `module-generator`, `module-quartz` and `module-extend` are pluggable capability modules.

### 3.1 Core Capabilities

- Administrator, organization, role, post, group and message management
- Permission and data-scope control (Spring Security)
- Multi-datasource support (Druid + DynamicDataSource)
- MyBatis mappers and pagination (PageHelper)
- Code generation (module-generator)
- Scheduled jobs (module-quartz)
- API docs (smart-doc, output in `docs/api-docs`)

## 4. Configuration and Ports

| Item | File | Value |
| --- | --- | --- |
| Default profile | `backend/eframe-web/src/main/resources/application.yml` | `ver` |
| Dev port / context | `application-dev.yml` | `8081` / `/eframe_backend/` |
| Prod port / context | `application-prod.yml` | `8310` / `/eframe_backend` |
| Default datasource | `application-dev.yml` | `jdbc:mysql://localhost:3306/eframedb_1.0` (user `lldba`) |
| H2 local datasource | `application-dev.yml` | `jdbc:h2:~/H2Data/lldb` |
| Front-end proxy | `frontend/vite.config.js` | `/dev_api` → `http://localhost:8081/eframe_backend/` |

> Note: only `application-dev.yml` and `application-prod.yml` are present, while `application.yml` activates `ver` by default. Start locally with `--spring.profiles.active=dev`, or provide your own `application-ver.yml`. Inject production credentials and secrets externally; never commit them.

## 5. Front-end Project

The management UI covers organizations, administrators, roles, posts, groups and messages:

```text
frontend/src/
├── api/            admin / monitor / system / tool APIs
├── views/          admin, monitor, profile, tool, workbench, login, error
├── components/     FileUpload, ImageUpload, Pagination, DictTag, iFrame, etc.
├── directive/      permission directives
├── plugins/        global plugins
├── utils/          dict and shared utilities
└── assets/         images and styles
```

Details: [frontend/README.en.md](./frontend/README.en.md) · [frontend/CHANGELOG.md](./frontend/CHANGELOG.md)

## 6. AI Pilot Toolkit

`ai-pilot/`, `AGENTS.md`, `CLAUDE.md`, `VERSION.md` and the `.trae/` / `.codebuddy/` rule entries form the LINLAN AI development assistant toolkit (v1.0.0-linlan).

- Toolkit overview: [ai-pilot/README.md](./ai-pilot/README.md)
- Version and tool compatibility: [VERSION.md](./VERSION.md)
- Templates: `ai-pilot/standards/` (15 templates for requirements, design, API, database, tests, review, release and AI usage)
- Workflows: `ai-pilot/reference/workflows/` (init project, start/finish task, requirement, design, test cases, coding, testing, review, summary)
- Task artifacts: `ai-pilot/poc/{task-id}/`

> The toolkit is a process reference and does not change the existing build, release or review process. AI output must pass human review, build checks and tests before delivery.

## 7. Directory Layout

```text
linlan-eframe/
├── backend/                 Maven multi-module back end
│   ├── pom.xml              Parent POM (1.2.2)
│   ├── eframe-support/      Utilities and data support
│   ├── eframe-model/        Model layer (service/dao)
│   ├── eframe-core/         Core shared logic
│   ├── eframe-view/         View logic (read/write separation)
│   ├── eframe-api/          Common API resources
│   ├── module-generator/    Code generation
│   ├── module-quartz/       Scheduled jobs
│   ├── eframe-web/          Web app and entry point
│   ├── module-extend/       Extension module
│   └── scripts/             bin / codestyle / docker / sql
├── frontend/                Vue3 management front end
├── docs/api-docs/           Smart-doc API docs
├── ai-pilot/                AI pilot templates and workflows
├── AGENTS.md                AI agent conventions
├── CLAUDE.md                Claude Code bridge
├── VERSION.md               AI toolkit version notes
├── llms.txt                 AI agent quick index
└── CHANGELOG.md             Version history
```

## 8. Conventions

- Keep module boundaries: controllers only translate protocol; business rules live in service / view / core
- When adding tables, update `backend/scripts/sql/` and the matching mapper XML
- Return the framework `ResponseEntity` envelope; use integer `code` values
- New Maven modules must be declared in `backend/pom.xml` (`<modules>` and dependency management)
- Front-end APIs go through `frontend/src/api/`, pages in `frontend/src/views/`, shared components in `frontend/src/components/`
- Keep `README.md` and `README.en.md` in sync; update the root `CHANGELOG.md` and the matching sub-project changelog
- Run `mvn clean install` before release; run `npm run build` for the front end

## 9. Documentation Index

| Document | Content |
| --- | --- |
| [CHANGELOG.md](./CHANGELOG.md) | Back-end / front-end version history and index |
| [AGENTS.md](./AGENTS.md) | Layout, commands and constraints for AI agents |
| [llms.txt](./llms.txt) | Machine-readable summary and command index |
| [backend/README.en.md](./backend/README.en.md) | Back-end sub-project guide |
| [backend/CHANGELOG.md](./backend/CHANGELOG.md) | Back-end changelog |
| [frontend/README.en.md](./frontend/README.en.md) | Front-end sub-project guide |
| [frontend/CHANGELOG.md](./frontend/CHANGELOG.md) | Front-end changelog |
| [backend/FAQ.md](./backend/FAQ.md) | Back-end branches and FAQ |
| [frontend/FAQ.md](./frontend/FAQ.md) | Front-end branches and FAQ |
| [docs/api-docs/README.md](./docs/api-docs/README.md) | Smart-doc API docs |
| [ai-pilot/README.md](./ai-pilot/README.md) | AI pilot toolkit |
| [VERSION.md](./VERSION.md) | AI toolkit version and compatibility |

## Contributing

You are welcome to join! [Raise an issue](https://gitee.com/linlannet/linlan-eframe/issues/new/choose) or submit a Pull Request.

1. Fork the repository
2. Create a `Feat_1.0.0` branch
3. Commit your changes
4. Open a Pull Request
5. Create and push a tag

```bash
git config user.name linlaninfo
git config user.email linlannet@163.com

git tag -a 1.0.0 -m "initial version"
git push origin --tags

Local build: mvn clean install
Deploy:      mvn clean deploy
```

## License

[Apache 2.0 © eframe-java-backend 2023](./LICENSE)