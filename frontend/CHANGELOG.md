
### 版本号：1.2.0（统一 lib 接入）
- 更新日期：2026-11-08
- 更新内容：
1. `src/utils/request.js` 改用 `@linlannet/lib-vue-base/platforms/admin` 的 `createAdminClient`，统一请求头、令牌、超时与错误处理
2. `src/utils/auth.js` 改用统一 `TokenManager`，保持 `Admin-Token` cookie 与 `Linlan` 令牌方案
3. 保留 `request({ url, method })`、`request.get(url, { params })`、`request.post(url, data)` 等原有调用方式
4. 保留业务错误码 401 弹窗、500/通用失败通知与文件下载能力
5. `vite.config.js` 增加 `@linlannet/lib-vue-base` 源码别名，`package.json` 增加本地依赖
- 验证命令：`cd frontend && npm install && npm run build`

### 版本号：1.1.2
- 更新日期：2025-08-27
- 更新内容：
1. 对已有资源进行调整，配合后端实现登录等功能
2. 对样式名称进行调整
3. 删除不用的图片资源
4. 完成admin和monitor目录功能

### 版本号：1.1.1
- 更新日期：2025-08-27
- 更新内容：
1. 对已有资源进行调整，配合后端实现登录等功能

### 版本号：1.1.0
- 更新日期：2025-08-25
- 更新内容：
1. 增加已有资源

### 版本号：1.0.0
- 更新日期：2025-08-23
- 更新内容：
1. 初始化工程目录
2. 增加根目录的README、Q&A、CHANGELOG
3. 采用node和nvm方式进行打包
4. 增加npm上传配置文件
