# 版本

> 本文件按「仓库版本 → 后端版本历史 → 前端版本历史」组织。
> **变更记录约定**
> - 每个版本标注：版本号、日期、变更类型、影响模块、更新内容
> - 变更类型：`新增` / `变更` / `修复` / `移除` / `文档` / `构建`
> - 后端模块名使用 `eframe-*` / `module-*`；前端变更统一归入「前端版本历史」
> - 历史条目保留原始事实描述，不回填未经确认的细节
> - AI Agent 修改代码后，应同步更新本文件，并在提交说明中引用版本号与影响模块
>
> **AI 检索提示**
> - 查后端某能力从哪个版本引入：在「后端版本历史」中检索关键词（如 `jdk`、`Druid`、`jakarta`、`docker`）
> - 查前端某页面/依赖的变更：在「前端版本历史」中检索
> - 当前后端版本以 `backend/pom.xml` 的 `<version>` 为准，前端版本以 `frontend/package.json` 的 `version` 为准

## 版本索引

### 后端

| 版本 | 日期 | 摘要 |
| --- | --- | --- |
| 1.2.3 | 2026-11-08 | 调整lib资源引用方式，统一前后端交互方法 |
| 1.2.2 | 2026-07-24 | 前后端工程合并、调整 pom 路径 |
| 1.2.1 | 2026-07-12 | 中央仓库发布配置、GPG/Sonatype 升级、Docker 配置 |
| 1.2.0 | 2026-03-08 | 升级 JDK 17、javax → jakarta、依赖升级 |
| 1.1.15 | 2026-02-01 | 解密请求体、用户范围、清理冗余代码 |
| 1.1.14 | 2025-12-01 | ResponseEntity / int 状态码、HttpStatus 统一 |
| 1.1.13 | 2025-11-25 | 依赖与包引用调整、多数据源自动模式、微信能力拆分 |
| 1.1.12 | 2025-11-10 | 安全参数还原、全局加解密配置、微信登录调试 |
| 1.1.11 及以下 | 见下方条目 | 见下方历史条目 |
| 1.0.0 | — | 初始化工程与基础文档 |

### 前端

| 版本 | 日期 | 摘要 |
| --- | --- | --- |
| 1.1.3 | 2026-03-11 | 多种登录方式、社交平台授权登录 |
| 1.1.2 | 2025-08-27 | 资源调整、admin / monitor 功能完成 |
| 1.1.1 | 2025-08-27 | 配合后端登录的资源调整 |
| 1.1.0 | 2025-08-25 | 增加已有资源 |
| 1.0.0 | 2025-08-23 | 初始化工程与基础文档 |

## 版本号：1.2.3
- 更新日期：2026-11-08
- 变更类型：变更
- 更新内容：
1. 调整 lib 资源引用方式
2. 统一前后端交互方法

## 版本号：1.2.2
- 更新日期：2026-07-24
- 后端更新内容：
1. 前后端工程合并
2. 调整pom文件内路径
3. 修改CHANGELOG.md文件
- 前端更新内容：
1. 前后端工程合并
2. 调整package.json文件内路径

## 后端版本历史
### 版本号：1.2.1
- 更新日期：2026-07-12
- 更新内容：
1. 修改中央仓库地址和发布配置，删除distributionManagement，路径放入plugin内
2. maven.gpg.version从3.1.0升级到3.2.8
3. maven.sonatype.version从0.7.0升级到0.10.0
4. 增加docker配置文件


### 版本号：1.2.0
- 更新日期：2026-03-08
- 更新内容：
1. jdk版本升级为17
2. 更新maven相关版本，适配jdk升级
3. javax修改为jakarta
4. 更新jdbc和websocket的版本
5. 修改SecurityConfig内错误
6. 增加DruidProperties，修改DynamicDataSourceConfig，删除RemoveAds文件

### 版本号：1.1.15
- 更新日期：2026-02-01
- 更新内容：
1. 增加DecryptRequestBodyAdvice文件
2. 更新前端工程路径
3. 修改UserRangeOrgan内的代码
4. 刪除BaseLabel内多余的代码

### 版本号：1.1.14
- 更新日期：2025-12-01
- 更新内容：
1. 更新tools基础包，采用ResponseEntity，code采用200等int类型
2. 删除本地的HttpStatus，用commons包内的HttpStatus，保持与spring一致
3. 修改和调整部分注释帮助文字
4. 删除SQLFilterUtils文件

### 版本号：1.1.13
- 更新日期：2025-11-25
- 更新内容：
1. 优化调整pom文件内包的引用，解决多版本冗余
2. 关闭PageHelper的控制台输出，调整为多数据源自动模式
3. wechat目录内方法拆分为Mp、Mini和Open三个文件
4. 调整ThirdMember的用户绑定方法，拆分MpMini到wechat目录
5. 增强BaseUser的人员查询匹配，增加OpenId和手机号多重查询
6. wechat目录移动到其他工程中，删除微信小程序相关代码
7. 新增安全的部分工具类，NoSqlFilter、NoXssFilter等
8. ThirdMember新增多个方法，查询用户信息
9. token内的updateTime和expireTime信息更新
10. ThirdMemberToken内新增部分方法
11. BaseUser和BaseUserExt内方法，分开处理
12. ThirdMemberService内心中unionId的操作方法
13. BaseUser内spare1保存unionId，增加getByUnionId 
14. BaseUser内spare2保存openId，source保存来源
15. AppLoginInfo内新增手机是否验证或实名状态

### 版本号：1.1.12
- 更新日期：2025-11-10
- 更新内容：
1. 还原SecurityUtils内的userLid参数和方法
2. roleTypeId统一调整为roletypeId
3. 全局加解密配置类将DbKeyConfig修改为PlatformSecurityConfig
4. 部分数据库内表别名修改，调整为小写
5. organwId调整为id
6. social内新增revoke和refresh方法
7. resources内新增error.html和users.html
8. authn内新增PublicGroup资源
9. social内增加UserRangeOrgan资源
10. social内增加权限方面的代码
11. 调整ThirdLoginController，增加第三方社交平台登录方法
12. 新增WechatOpenController，微信相关方法
13. 新增LogCategoryEnum等枚举类
14. 对微信扫码登录、小程序扫码登录进行功能调试，默认扫码添加用户信息


### 版本号：1.1.11
- 更新日期：2025-10-22
- 更新内容：
1. 解决循环引用的BUG
2. 调整doc文档内controller上无法解析static文件中路径的问题
3. 合并AdminDeptController文件
4. 合并AdminUserController文件
5. 新增ProviderSource文件，重新定义提供商来源
6. PublicTemplateInfoService内新增三个方法

### 版本号：1.1.10
- 更新日期：2025-10-19
- 更新内容：
1. 更新oss包的资源内容
2. AESUtil修改为AESUtils，新增EncryptContextHelper
3. module-mail和module-sms合并，包名称修改为module-authn，调整authn包资源
4. 配置登录的Provider信息
5. 新增module-social包，增加资源
6. 新增module-enterprise包
7. 修改生成api接口文件的配置，增加扩展模块接口API
8. 对文件内用于api文档的名称进行调整

### 版本号：1.1.9
- 更新日期：2025-10-13
- 更新内容：
1. 扩展BaseUser、BaseUserExt资源
2. 增加1.0_1新增脚本 
3. FrameAdminUser内字段调整，删除adminId，全部使用userId
4. FrameAdminUser修改为FrameUserDetails，新增UserDetailsService
5. SecurityUtils内刪除getAdminId方法
6. redis的存储键值规范化调整
7. 新增PublicTemplateInfo包资源，Public三张表内SITE_ID修改为APP_ID
8. 增加ThirdMember、ThirdMemberToken、ThirdMemberBind
9. 新增module-oss包
10. 新增module-authn包资源

### 版本号：1.1.8
- 更新日期：2025-10-09
- 更新内容：
1. Put方法全部调整为Post，更新部分的路由
2. SYS_ROLE_MENU表名称修改
3. 增加DeptTypeEnum资源，更新保存方法

### 版本号：1.1.7
- 更新日期：2025-10-08
- 更新内容：
1. AdminDept内新增getByOrganId
2. 更新部分方法中关于默认appId的判断
3. 更新eframe数据库脚本名称

### 版本号：1.1.6
- 更新日期：2025-09-20
- 更新内容：
1. AdminUser内新增getByEmail
2. AdminUser内findBy方法名调整，查询结果为AdminUser对象
3. AdminUser内getBy方法名调整，查询结果为AdminUserDto对象
4. AdminDept内增加organId、name的方法


### 版本号：1.1.5
- 更新日期：2025-09-19
- 更新内容：
1. UserPresetService内新增方法
2. PermissionService内新增adminType的权限判断方法
3. FrameAdminUser内新增adminType

### 版本号：1.1.4
- 更新日期：2025-09-05
- 更新内容：
1. 增加http内工具类
2. HttpContextUtils内方法增加
3. BaseConfigWholeService内增加getByKeys，getByKeyLike等方法

### 版本号：1.1.3
- 更新日期：2025-08-31
- 更新内容：
1. encryptPassword、matchesPassword方法统一到ShaUtils内
2. 增加BaseEnumInteger、BaseEnumString接口
3. AdminDept内name、sname、searchCode意义更新

### 版本号：1.1.2
- 更新日期：2025-08-26
- 更新内容：
1. 修改数据库查询的别名
2. 更新菜单查询的list方法
3. 更新缓存名称，统一字典、全局配置的缓存名称
4. 全局配置的api路径调整

### 版本号：1.1.1
- 更新日期：2025-08-25
- 更新内容：
1. 修复发布web文件过大
2. 增加每个pom文件中必要的配置，name，develop，version，package等
3. 增加module的扩展，后续增加sms和social融合模块

### 版本号：1.1.0
- 更新日期：2025-08-25
- 更新内容：
1. 新增已有的资源和代码
2. Q&A修改为FAQ
3. 更新代码中的注释信息，生成javadoc
4. 核对自动生成的doc接口api文档
   1. [EFRAME-API-HTML](./docs/api-docs/ent-frame.html)
   2. [EFRAME-API-MD](./docs/api-docs/ent-frame.html.md)
5. 增加数据库默认结构SQL  [DB_STRUCTURE](./backend/scripts/sql/eframe_structure_1.0.sql)
6. 配置代码文件增加Formatter和Licence


### 版本号：1.0.0
- 更新日期：2025-08-23
- 更新内容：
1. 初始化工程目录
2. 增加根目录的README、Q&A、CHANGELOG
3. 增加THIRD_PARTY.md
4. 采用maven方式进行打包，新增初始化pom文件
5. 修改README.en文件信息

## 前端版本历史
### 版本号：1.1.3
- 更新日期：2026-03-11
- 更新内容：
1. 增加登录多种方式
2. 增加社交平台授权登录
3. 调整和更新资源

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
