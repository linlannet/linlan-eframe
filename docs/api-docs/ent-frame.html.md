# ent-frame
Version |  Update Time  | Status | Author |  Description
---|---|---|---|---
1.0|2025-08-24 10:30|update|Linlan|desc



# default
# 平台通用接口API
## 平台当前监控状态
### 每次发版前，将版本号进行调整，以明确当前发布的版本和启动的版本是一致的
**URL:** https://linlan.net/eframe_backend/api/stage/getStatus.do

**Type:** GET

**Author:** Linlan
CreateTime:12/19/17 9:00 PM

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 每次发版前，将版本号进行调整，以明确当前发布的版本和启动的版本是一致的

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
params|map|透传的请求参数（getStatus 接口会将其回显到响应中）|false|-
└─any object|object|any object.|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/stage/getStatus.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─any object|object|any object.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "mapKey": {
      "waring": "You may use java.util.Object for Map value; doc-generate can't be handle."
    }
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

# 一体化平台接口API
## 公共文件管理读写控制类
### 获取资源存储清单列表
**URL:** https://linlan.net/eframe_backend/api/system/file/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取资源存储清单列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
resclassId|string|资源种类ID|false|-
appId|string|应用ID|false|-
fileName|string|文件名称|false|-
fileIsvalid|boolean|是否有效，0无效1有效|false|-
refId|string|参考ID|false|-
refType|string|类名称|false|-
fileSize|int64|文件大小，单位KB|false|-
fileExtension|string|文件扩展名|false|-
key|string|关键字|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/list.do?refType=yzvitr&fileExtension=5aihwj&endTime=2026-11-09 17:56:55&fileName=carola.harvey&limit=10&startTime=2026-11-09 17:56:55&orderBy=158&appId=25&fileIsvalid=true&page=1&fileSize=220&q=zpuvv1&resclassId=25&refId=25&key=g2fj9x
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─totalCount|int32|总记录数 the total count|-
└─pageSize|int32|每页记录数 the page size|-
└─totalPage|int32|总页数 the total page|-
└─currPage|int32|当前页数 the current page|-
└─list|array|列表数据 the list|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|string|文件路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─resclassId|string|资源种类ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─fileName|string|文件名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─fileIsvalid|boolean|是否有效|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─fileExtension|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ids|array|数组|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "totalCount": 508,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "id": "25",
        "resclassId": "25",
        "fileName": "carola.harvey",
        "fileIsvalid": true,
        "createTime": "2026-11-09 17:58:09",
        "fileExtension": "t5lj3b",
        "ids": [
          "tmgc2j"
        ]
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 资源存储清单导出
**URL:** https://linlan.net/eframe_backend/api/system/file/export.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 资源存储清单导出

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
resclassId|string|资源种类ID|false|-
appId|string|应用ID|false|-
fileName|string|文件名称|false|-
fileIsvalid|boolean|是否有效，0无效1有效|false|-
refId|string|参考ID|false|-
refType|string|类名称|false|-
fileSize|int64|文件大小，单位KB|false|-
fileExtension|string|文件扩展名|false|-
key|string|关键字|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/export.do --data 'fileExtension=pjkk93&endTime=2026-11-09 17:56:55&q=xocda1&appId=25&fileSize=375&writer.trouble=true&refId=25&key=k0b4z4&bufferSize=10&writer.psOut.formatter.zero=6&writer.psOut.autoFlush=true&writer.psOut.closing=true&writer.formatter.lastException.detailMessage=success&contentType=2wwymg&writer.psOut.closed=true&writer.psOut.trouble=true&committed=true&writer.psOut.textOut.nextChar=266&orderBy=417&startTime=2026-11-09 17:56:55&limit=10&status=82&writer.writeBuffer=1&writer.writeBuffer=1&refType=67rewe&writer.psOut.textOut.nChars=669&fileIsvalid=true&fileName=carola.harvey&characterEncoding=mb4qoq&resclassId=25&writer.autoFlush=true&writer.formatter.zero=7&page=1'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "8jq25b",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据编号获取文件详细信息
**URL:** https://linlan.net/eframe_backend/api/system/file/info.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据编号获取文件详细信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|   主键ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/info.do?id=25
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─id|string|文件路径|-
└─resclassId|string|资源种类ID|-
└─fileName|string|文件名称|-
└─fileIsvalid|boolean|是否有效|-
└─createTime|string|创建时间|-
└─fileExtension|string|创建时间|-
└─ids|array|数组|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "id": "25",
    "resclassId": "25",
    "fileName": "carola.harvey",
    "fileIsvalid": true,
    "createTime": "2026-11-09 17:58:09",
    "fileExtension": "yimelb",
    "ids": [
      "7nlxrm"
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增文件
**URL:** https://linlan.net/eframe_backend/api/system/file/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/json; charset=utf-8

**Description:** 新增文件

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|文件路径|false|-
resclassId|string|资源种类ID|false|-
fileName|string|文件名称|false|-
fileIsvalid|boolean|是否有效|false|-
createTime|string|创建时间|false|-
fileExtension|string|创建时间|false|-
ids|array|数组|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/save.do --data '{
  "id": "25",
  "resclassId": "25",
  "fileName": "carola.harvey",
  "fileIsvalid": true,
  "createTime": "2026-11-09 17:58:09",
  "fileExtension": "9ghhcj",
  "ids": [
    "6yy380"
  ]
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "3iwyuo",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改文件
**URL:** https://linlan.net/eframe_backend/api/system/file/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/json; charset=utf-8

**Description:** 修改文件

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|文件路径|false|-
resclassId|string|资源种类ID|false|-
fileName|string|文件名称|false|-
fileIsvalid|boolean|是否有效|false|-
createTime|string|创建时间|false|-
fileExtension|string|创建时间|false|-
ids|array|数组|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/update.do --data '{
  "id": "25",
  "resclassId": "25",
  "fileName": "carola.harvey",
  "fileIsvalid": true,
  "createTime": "2026-11-09 17:58:09",
  "fileExtension": "n93smy",
  "ids": [
    "g0achu"
  ]
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "ixowb4",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除文件
**URL:** https://linlan.net/eframe_backend/api/system/file/delete.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/json; charset=utf-8

**Description:** 删除文件

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|文件路径|false|-
resclassId|string|资源种类ID|false|-
fileName|string|文件名称|false|-
fileIsvalid|boolean|是否有效|false|-
createTime|string|创建时间|false|-
fileExtension|string|创建时间|false|-
ids|array|数组|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/delete.do --data '{
  "id": "25",
  "resclassId": "25",
  "fileName": "carola.harvey",
  "fileIsvalid": true,
  "createTime": "2026-11-09 17:58:09",
  "fileExtension": "bzibar",
  "ids": [
    "7ik8yn"
  ]
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "jau8ix",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 刷新参数缓存
**URL:** https://linlan.net/eframe_backend/api/system/file/refreshCache.do

**Type:** DELETE

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 刷新参数缓存

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/refreshCache.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "rwzjqj",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 通用下载请求
**URL:** https://linlan.net/eframe_backend/api/system/file/download.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 通用下载请求

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
fileName|string|文件名称|false|-
delete|boolean|是否删除|false|-
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
requestedSessionIdFromCookie|boolean|No comments found.|false|-
requestedSessionIdFromURL|boolean|No comments found.|false|-
authType|string|No comments found.|false|-
httpServletMapping|object|No comments found.|false|-
└─matchValue|string|No comments found.|false|-
└─servletName|string|No comments found.|false|-
└─mappingMatch|enum|null<br/>CONTEXT_ROOT<br/>DEFAULT<br/>EXACT<br/>EXTENSION<br/>PATH<br/>|false|-
└─pattern|string|No comments found.|false|-
pathInfo|string|No comments found.|false|-
pathTranslated|string|No comments found.|false|-
contextPath|string|No comments found.|false|-
queryString|string|No comments found.|false|-
remoteUser|string|No comments found.|false|-
requestedSessionId|string|No comments found.|false|-
requestURI|string|No comments found.|false|-
requestURL|object|No comments found.|false|-
└─empty|boolean|No comments found.|false|-
└─value|array|No comments found.|false|-
└─coder|int8|No comments found.|false|-
└─count|int32|No comments found.|false|-
servletPath|string|No comments found.|false|-
requestedSessionIdValid|boolean|No comments found.|false|-
trailerFieldsReady|boolean|No comments found.|false|-
trailerFields|map|No comments found.|false|-
└─any object|object|any object.|false|-
headerNames|object|No comments found.|false|-
session|object|No comments found.|false|-
└─lastAccessedTime|int64|No comments found.|false|-
└─maxInactiveInterval|int32|No comments found.|false|-
└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─new|boolean|No comments found.|false|-
└─id|string|No comments found.|false|-
└─creationTime|int64|No comments found.|false|-
userPrincipal|object|No comments found.|false|-
└─name|string|No comments found.|false|-
parts|array|No comments found.|false|-
cookies|array|No comments found.|false|-
└─name|string|No comments found.|false|-
└─value|string|No comments found.|false|-
└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
method|string|No comments found.|false|-
serverName|string|No comments found.|false|-
serverPort|int32|No comments found.|false|-
remoteAddr|string|No comments found.|false|-
remoteHost|string|No comments found.|false|-
remotePort|int32|No comments found.|false|-
localAddr|string|No comments found.|false|-
localPort|int32|No comments found.|false|-
servletContext|object|No comments found.|false|-
└─defaultSessionTrackingModes|array|No comments found.|false|-
└─effectiveSessionTrackingModes|array|No comments found.|false|-
└─requestCharacterEncoding|string|No comments found.|false|-
└─responseCharacterEncoding|string|No comments found.|false|-
└─effectiveMajorVersion|int32|No comments found.|false|-
└─effectiveMinorVersion|int32|No comments found.|false|-
└─initParameterNames|object|No comments found.|false|-
└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─serverInfo|string|No comments found.|false|-
└─servletContextName|string|No comments found.|false|-
└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
└─virtualServerName|string|No comments found.|false|-
└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─sessionTimeout|int32|No comments found.|false|-
└─contextPath|string|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─minorVersion|int32|No comments found.|false|-
└─classLoader|object|No comments found.|false|-
└─majorVersion|int32|No comments found.|false|-
asyncStarted|boolean|No comments found.|false|-
asyncSupported|boolean|No comments found.|false|-
asyncContext|object|No comments found.|false|-
└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─committed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bufferSize|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writer|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─outputStream|object|No comments found.|false|-
└─timeout|int64|No comments found.|false|-
└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteHost|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remotePort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncStarted|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncSupported|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─timeout|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolRequestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletConnection|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─connectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolConnectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─reader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─in|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─markedChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─readAheadLimit|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipLF|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─markedSkipLF|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterMap|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locales|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─scheme|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─inputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLength|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLengthLong|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
protocolRequestId|string|No comments found.|false|-
servletConnection|object|No comments found.|false|-
└─connectionId|string|No comments found.|false|-
└─protocolConnectionId|string|No comments found.|false|-
└─secure|boolean|No comments found.|false|-
└─protocol|string|No comments found.|false|-
requestId|string|No comments found.|false|-
reader|object|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─skipBuffer|array|No comments found.|false|-
└─in|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipBuffer|array|No comments found.|false|-
└─cb|array|No comments found.|false|-
└─nChars|int32|No comments found.|false|-
└─nextChar|int32|No comments found.|false|-
└─markedChar|int32|No comments found.|false|-
└─readAheadLimit|int32|No comments found.|false|-
└─skipLF|boolean|No comments found.|false|-
└─markedSkipLF|boolean|No comments found.|false|-
attributeNames|object|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
parameterNames|object|No comments found.|false|-
parameterMap|map|No comments found.|false|-
└─any object|object|any object.|false|-
locales|object|No comments found.|false|-
secure|boolean|No comments found.|false|-
scheme|string|No comments found.|false|-
inputStream|object|No comments found.|false|-
protocol|string|No comments found.|false|-
locale|object|No comments found.|false|-
localName|string|No comments found.|false|-
contentLength|int32|No comments found.|false|-
contentLengthLong|int64|No comments found.|false|-
contentType|string|No comments found.|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/download.do?localName=carola.harvey&secure=true&characterEncoding=jojqh1&servletContext.servletContextName=carola.harvey&reader.markedSkipLF=true&writer.psOut.autoFlush=true&servletContext.sessionCookieConfig.secure=true&writer.formatter.lastException.detailMessage=success&session.servletContext.contextPath=ra6vuv&writer.psOut.closed=true&asyncContext.request.reader.nChars=192&asyncContext.request.servletContext.servletContextName=carola.harvey&session.servletContext.sessionCookieConfig.secure=true&servletContext.requestCharacterEncoding=il6bl8&reader.nextChar=763&session.maxInactiveInterval=516&asyncContext.request.reader.markedChar=778&asyncContext.request.asyncSupported=true&asyncContext.request.servletContext.sessionTimeout=96&requestedSessionIdFromURL=true&session.servletContext.servletContextName=carola.harvey&asyncContext.request.asyncContext.timeout=371&requestURL.value=57&requestURL.value=57&asyncContext.request.servletConnection.secure=true&asyncContext.request.reader.skipLF=true&asyncContext.request.contentLength=955&asyncContext.request.servletConnection.protocol=rnja6e&writer.psOut.trouble=true&servletContext.majorVersion=91&authType=zfzirp&localAddr=q0fz1f&writer.psOut.textOut.nextChar=148&asyncContext.request.scheme=zrrsor&servletConnection.connectionId=25&servletContext.minorVersion=960&bufferSize=10&requestedSessionIdValid=true&session.lastAccessedTime=1794218215586&servletContext.serverInfo=dvira5&session.servletContext.virtualServerName=carola.harvey&contentLengthLong=442&servletContext.virtualServerName=carola.harvey&asyncContext.request.servletContext.serverInfo=f17upd&reader.markedChar=969&writer.formatter.zero=n&asyncContext.request.protocol=21w10i&session.servletContext.sessionCookieConfig.name=carola.harvey&localPort=366&servletConnection.protocolConnectionId=25&session.servletContext.majorVersion=810&writer.psOut.formatter.zero=h&contentType=gzcwh8&httpServletMapping.servletName=carola.harvey&remotePort=40&asyncContext.response.writer.trouble=true&asyncContext.response.committed=true&asyncContext.request.servletContext.requestCharacterEncoding=twkvd3&userPrincipal.name=carola.harvey&reader.nChars=975&asyncContext.request.servletConnection.connectionId=25&session.new=true&asyncContext.request.dispatcherType=FORWARD&servletPath=snbgsy&asyncContext.request.characterEncoding=5ihyjg&requestId=25&reader.readAheadLimit=10&asyncContext.request.secure=true&writer.psOut.textOut.nChars=170&session.servletContext.sessionTimeout=289&requestedSessionId=25&writer.trouble=true&session.servletContext.sessionCookieConfig.path=9zkud3&servletContext.responseCharacterEncoding=bvv8t2&servletContext.sessionCookieConfig.domain=runolfsdottir.co&servletContext.sessionTimeout=897&remoteHost=8l17cn&serverPort=707&asyncContext.request.servletContext.minorVersion=209&session.servletContext.responseCharacterEncoding=n70ysp&writer.autoFlush=true&servletContext.sessionCookieConfig.path=85udf7&reader.skipBuffer=t&reader.skipBuffer=t&session.servletContext.effectiveMajorVersion=68&serverName=carola.harvey&asyncSupported=true&asyncContext.request.remoteHost=36fvvf&remoteAddr=fublbv&servletContext.contextPath=ai8x1b&asyncContext.response.writer.autoFlush=true&asyncContext.request.servletConnection.protocolConnectionId=25&protocolRequestId=25&session.servletContext.minorVersion=398&requestURL.count=455&servletContext.effectiveMajorVersion=223&servletConnection.protocol=p2bdcb&session.servletContext.requestCharacterEncoding=4alxh2&asyncContext.request.reader.markedSkipLF=true&protocol=8fhukk&queryString=ov4jqo&requestURI=715xq5&httpServletMapping.pattern=7wgl14&requestURL.coder=115&pathTranslated=x53jmw&session.servletContext.effectiveMinorVersion=39&asyncContext.request.servletContext.responseCharacterEncoding=rp6c3j&committed=true&dispatcherType=FORWARD&cookies.=carola.harvey&cookies.=carola.harvey&session.servletContext.sessionCookieConfig.comment=1lo4y1&requestedSessionIdFromCookie=true&asyncContext.request.reader.readAheadLimit=10&contextPath=eq7bhg&status=561&asyncContext.response.contentType=kia81m&asyncContext.request.contentLengthLong=177&delete=true&asyncContext.request.servletContext.contextPath=iixih6&asyncContext.request.reader.nextChar=355&remoteUser=cqulug&session.servletContext.sessionCookieConfig.httpOnly=true&contentLength=670&writer.psOut.closing=true&asyncContext.request.localPort=271&session.servletContext.sessionCookieConfig.domain=runolfsdottir.co&asyncContext.request.servletContext.virtualServerName=carola.harvey&asyncContext.request.requestId=25&asyncStarted=true&asyncContext.request.localName=carola.harvey&asyncContext.request.remotePort=434&servletConnection.secure=true&asyncContext.request.protocolRequestId=25&asyncContext.request.serverPort=276&asyncContext.request.asyncStarted=true&servletContext.effectiveMinorVersion=494&servletContext.sessionCookieConfig.httpOnly=true&pathInfo=6351sw&httpServletMapping.mappingMatch=CONTEXT_ROOT&asyncContext.request.localAddr=a3wbfu&fileName=carola.harvey&asyncContext.request.servletContext.effectiveMajorVersion=635&requestURL.empty=true&servletContext.sessionCookieConfig.maxAge=2&session.servletContext.sessionCookieConfig.maxAge=2&reader.cb=y&reader.cb=y&asyncContext.request.servletContext.majorVersion=294&trailerFieldsReady=true&asyncContext.request.servletContext.effectiveMinorVersion=42&session.id=25&asyncContext.timeout=324&servletContext.sessionCookieConfig.name=carola.harvey&session.creationTime=1794218215586&asyncContext.response.bufferSize=10&httpServletMapping.matchValue=pi7ny8&servletContext.sessionCookieConfig.comment=6dci9j&asyncContext.request.serverName=carola.harvey&asyncContext.request.remoteAddr=ffvrrh&reader.skipLF=true&method=k6e5we&scheme=m3vkyt&writer.writeBuffer=2&writer.writeBuffer=2&asyncContext.response.characterEncoding=eme2tn&asyncContext.request.contentType=3yf7ec&session.servletContext.serverInfo=tmp4vq
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "gaoqx0",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 通用上传请求（单个）
**URL:** https://linlan.net/eframe_backend/api/system/file/upload.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 通用上传请求（单个）

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
requestedSessionIdFromCookie|boolean|No comments found.|false|-
requestedSessionIdFromURL|boolean|No comments found.|false|-
authType|string|No comments found.|false|-
httpServletMapping|object|No comments found.|false|-
└─matchValue|string|No comments found.|false|-
└─servletName|string|No comments found.|false|-
└─mappingMatch|enum|null<br/>CONTEXT_ROOT<br/>DEFAULT<br/>EXACT<br/>EXTENSION<br/>PATH<br/>|false|-
└─pattern|string|No comments found.|false|-
pathInfo|string|No comments found.|false|-
pathTranslated|string|No comments found.|false|-
contextPath|string|No comments found.|false|-
queryString|string|No comments found.|false|-
remoteUser|string|No comments found.|false|-
requestedSessionId|string|No comments found.|false|-
requestURI|string|No comments found.|false|-
requestURL|object|No comments found.|false|-
└─empty|boolean|No comments found.|false|-
└─value|array|No comments found.|false|-
└─coder|int8|No comments found.|false|-
└─count|int32|No comments found.|false|-
servletPath|string|No comments found.|false|-
requestedSessionIdValid|boolean|No comments found.|false|-
trailerFieldsReady|boolean|No comments found.|false|-
trailerFields|map|No comments found.|false|-
└─any object|object|any object.|false|-
headerNames|object|No comments found.|false|-
session|object|No comments found.|false|-
└─lastAccessedTime|int64|No comments found.|false|-
└─maxInactiveInterval|int32|No comments found.|false|-
└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─new|boolean|No comments found.|false|-
└─id|string|No comments found.|false|-
└─creationTime|int64|No comments found.|false|-
userPrincipal|object|No comments found.|false|-
└─name|string|No comments found.|false|-
parts|array|No comments found.|false|-
cookies|array|No comments found.|false|-
└─name|string|No comments found.|false|-
└─value|string|No comments found.|false|-
└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
method|string|No comments found.|false|-
serverName|string|No comments found.|false|-
serverPort|int32|No comments found.|false|-
remoteAddr|string|No comments found.|false|-
remoteHost|string|No comments found.|false|-
remotePort|int32|No comments found.|false|-
localAddr|string|No comments found.|false|-
localPort|int32|No comments found.|false|-
servletContext|object|No comments found.|false|-
└─defaultSessionTrackingModes|array|No comments found.|false|-
└─effectiveSessionTrackingModes|array|No comments found.|false|-
└─requestCharacterEncoding|string|No comments found.|false|-
└─responseCharacterEncoding|string|No comments found.|false|-
└─effectiveMajorVersion|int32|No comments found.|false|-
└─effectiveMinorVersion|int32|No comments found.|false|-
└─initParameterNames|object|No comments found.|false|-
└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─serverInfo|string|No comments found.|false|-
└─servletContextName|string|No comments found.|false|-
└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
└─virtualServerName|string|No comments found.|false|-
└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─sessionTimeout|int32|No comments found.|false|-
└─contextPath|string|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─minorVersion|int32|No comments found.|false|-
└─classLoader|object|No comments found.|false|-
└─majorVersion|int32|No comments found.|false|-
asyncStarted|boolean|No comments found.|false|-
asyncSupported|boolean|No comments found.|false|-
asyncContext|object|No comments found.|false|-
└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─committed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bufferSize|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writer|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─outputStream|object|No comments found.|false|-
└─timeout|int64|No comments found.|false|-
└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteHost|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remotePort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncStarted|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncSupported|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─timeout|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolRequestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletConnection|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─connectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolConnectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─reader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─in|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─markedChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─readAheadLimit|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipLF|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─markedSkipLF|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterMap|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locales|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─scheme|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─inputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLength|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLengthLong|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
protocolRequestId|string|No comments found.|false|-
servletConnection|object|No comments found.|false|-
└─connectionId|string|No comments found.|false|-
└─protocolConnectionId|string|No comments found.|false|-
└─secure|boolean|No comments found.|false|-
└─protocol|string|No comments found.|false|-
requestId|string|No comments found.|false|-
reader|object|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─skipBuffer|array|No comments found.|false|-
└─in|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipBuffer|array|No comments found.|false|-
└─cb|array|No comments found.|false|-
└─nChars|int32|No comments found.|false|-
└─nextChar|int32|No comments found.|false|-
└─markedChar|int32|No comments found.|false|-
└─readAheadLimit|int32|No comments found.|false|-
└─skipLF|boolean|No comments found.|false|-
└─markedSkipLF|boolean|No comments found.|false|-
attributeNames|object|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
parameterNames|object|No comments found.|false|-
parameterMap|map|No comments found.|false|-
└─any object|object|any object.|false|-
locales|object|No comments found.|false|-
secure|boolean|No comments found.|false|-
scheme|string|No comments found.|false|-
inputStream|object|No comments found.|false|-
protocol|string|No comments found.|false|-
locale|object|No comments found.|false|-
localName|string|No comments found.|false|-
contentLength|int32|No comments found.|false|-
contentLengthLong|int64|No comments found.|false|-
contentType|string|No comments found.|false|-
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/upload.do --data 'reader.skipBuffer=0&reader.skipBuffer=0&writer.formatter.lastException.detailMessage=success&servletContext.sessionCookieConfig.comment=vwk4r9&writer.psOut.textOut.nChars=358&session.servletContext.sessionCookieConfig.comment=by1i70&session.servletContext.virtualServerName=carola.harvey&asyncContext.response.characterEncoding=9rpffo&servletContext.sessionCookieConfig.httpOnly=true&asyncContext.request.protocolRequestId=25&reader.nChars=222&session.new=true&servletConnection.secure=true&asyncContext.request.servletConnection.protocolConnectionId=25&cookies.=dsap6g&cookies.=dsap6g&asyncContext.request.servletContext.effectiveMajorVersion=713&asyncContext.request.remoteHost=t2tqus&trailerFieldsReady=true&session.servletContext.contextPath=cyyxm6&pathInfo=znjz2m&localAddr=x7m8bn&asyncContext.request.reader.readAheadLimit=10&servletContext.sessionCookieConfig.maxAge=2&asyncContext.request.secure=true&asyncContext.request.localAddr=mjrhi4&remoteHost=fvezq0&asyncContext.request.servletContext.minorVersion=444&dispatcherType=FORWARD&protocolRequestId=25&reader.markedSkipLF=true&bufferSize=10&writer.psOut.formatter.zero=l&writer.psOut.closing=true&asyncContext.request.reader.markedChar=350&asyncContext.response.bufferSize=10&contextPath=em2b37&asyncContext.request.remotePort=277&session.maxInactiveInterval=514&asyncContext.request.remoteAddr=bvaqf5&status=753&reader.readAheadLimit=10&asyncContext.request.servletConnection.secure=true&asyncContext.request.serverName=carola.harvey&reader.cb=l&reader.cb=l&servletPath=h2ubh0&session.servletContext.sessionCookieConfig.name=carola.harvey&remoteUser=b85s5o&reader.markedChar=172&asyncContext.request.requestId=25&asyncContext.request.reader.nChars=514&asyncContext.request.asyncSupported=true&asyncContext.request.servletContext.virtualServerName=carola.harvey&pathTranslated=5ha1vd&httpServletMapping.matchValue=aq8gra&servletContext.effectiveMajorVersion=835&asyncContext.request.serverPort=556&asyncContext.request.protocol=3hyyi9&writer.autoFlush=true&asyncContext.request.servletContext.sessionTimeout=719&secure=true&writer.psOut.textOut.nextChar=118&asyncContext.request.reader.markedSkipLF=true&servletConnection.protocolConnectionId=25&requestedSessionId=25&localPort=319&asyncContext.request.localPort=222&servletContext.sessionCookieConfig.name=carola.harvey&asyncContext.request.contentLengthLong=593&httpServletMapping.servletName=carola.harvey&writer.psOut.autoFlush=true&asyncContext.response.committed=true&asyncContext.request.servletContext.majorVersion=92&asyncContext.request.characterEncoding=cqwds2&requestedSessionIdValid=true&session.servletContext.requestCharacterEncoding=kgyo4g&servletContext.majorVersion=268&servletContext.serverInfo=74v070&servletContext.sessionTimeout=403&asyncContext.request.servletContext.responseCharacterEncoding=ad8cgg&asyncContext.request.servletContext.serverInfo=4qngqn&asyncContext.request.servletContext.contextPath=thlir5&session.servletContext.serverInfo=vvkzme&asyncStarted=true&session.servletContext.effectiveMajorVersion=133&serverName=carola.harvey&asyncContext.request.asyncStarted=true&session.servletContext.sessionCookieConfig.path=0n3jnb&writer.trouble=true&servletConnection.connectionId=25&asyncContext.request.dispatcherType=FORWARD&requestedSessionIdFromCookie=true&userPrincipal.name=carola.harvey&remoteAddr=y7rmbv&servletContext.sessionCookieConfig.secure=true&asyncContext.request.scheme=tspsnq&asyncContext.response.writer.autoFlush=true&asyncContext.request.servletConnection.connectionId=25&session.servletContext.effectiveMinorVersion=230&session.servletContext.sessionCookieConfig.secure=true&session.servletContext.minorVersion=787&asyncContext.request.reader.nextChar=927&contentLengthLong=117&requestURL.value=82&requestURL.value=82&requestURL.count=889&session.servletContext.sessionCookieConfig.domain=runolfsdottir.co&writer.writeBuffer=0&writer.writeBuffer=0&characterEncoding=4qx2ro&writer.psOut.closed=true&asyncSupported=true&protocol=t12m7b&requestId=25&servletContext.minorVersion=415&contentType=akqms7&writer.formatter.zero=k&requestURL.coder=112&authType=g8dwt7&asyncContext.response.contentType=7u5who&committed=true&requestedSessionIdFromURL=true&asyncContext.request.reader.skipLF=true&serverPort=67&characterEncoding=4bv8kr&localName=carola.harvey&asyncContext.timeout=563&asyncContext.request.contentType=8o7w6v&session.servletContext.servletContextName=carola.harvey&reader.nextChar=459&cookies.=carola.harvey&cookies.=carola.harvey&asyncContext.request.servletContext.effectiveMinorVersion=744&servletConnection.protocol=pxetwx&queryString=aq9xyl&contentLength=899&requestURL.empty=true&session.servletContext.responseCharacterEncoding=93mxd0&servletContext.responseCharacterEncoding=li9c24&asyncContext.response.writer.trouble=true&servletContext.virtualServerName=carola.harvey&contentType=mjcsis&session.lastAccessedTime=1794218215586&session.servletContext.sessionTimeout=630&scheme=22s81i&reader.skipLF=true&session.servletContext.sessionCookieConfig.maxAge=2&asyncContext.request.localName=carola.harvey&asyncContext.request.contentLength=229&servletContext.effectiveMinorVersion=222&session.servletContext.majorVersion=367&servletContext.contextPath=l5xruo&method=a1cenx&asyncContext.request.servletContext.requestCharacterEncoding=qo3qxq&asyncContext.request.asyncContext.timeout=779&writer.psOut.trouble=true&httpServletMapping.mappingMatch=CONTEXT_ROOT&remotePort=549&requestURI=rexjw7&session.creationTime=1794218215586&servletContext.servletContextName=carola.harvey&servletContext.sessionCookieConfig.domain=runolfsdottir.co&servletContext.sessionCookieConfig.path=thpewh&session.servletContext.sessionCookieConfig.httpOnly=true&servletContext.requestCharacterEncoding=2rtq2e&asyncContext.request.servletContext.servletContextName=carola.harvey&httpServletMapping.pattern=t72zuj&session.id=25&asyncContext.request.servletConnection.protocol=uxjpxk'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─originFilename|string|原文件名|-
└─filename|string|保存文件名|-
└─fileType|string|文件类型|-
└─fileUrl|string|保存路径|-
└─fileHttpUrl|string|保存路径，对外使用的Http或Https路径|-
└─statusCode|string|是否上传成功|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "originFilename": "carola.harvey",
    "filename": "carola.harvey",
    "fileType": "90qttx",
    "fileUrl": "www.hank-okon.com",
    "fileHttpUrl": "www.hank-okon.com",
    "statusCode": "12647"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 通用上传请求（多个）
**URL:** https://linlan.net/eframe_backend/api/system/file/uploads.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** multipart/form-data

**Description:** 通用上传请求（多个）

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
files|file|文件(array of file)|true|-
requestedSessionIdFromCookie|boolean|No comments found.|false|-
requestedSessionIdFromURL|boolean|No comments found.|false|-
authType|string|No comments found.|false|-
httpServletMapping|object|No comments found.|false|-
└─matchValue|string|No comments found.|false|-
└─servletName|string|No comments found.|false|-
└─mappingMatch|enum|null<br/>CONTEXT_ROOT<br/>DEFAULT<br/>EXACT<br/>EXTENSION<br/>PATH<br/>|false|-
└─pattern|string|No comments found.|false|-
pathInfo|string|No comments found.|false|-
pathTranslated|string|No comments found.|false|-
contextPath|string|No comments found.|false|-
queryString|string|No comments found.|false|-
remoteUser|string|No comments found.|false|-
requestedSessionId|string|No comments found.|false|-
requestURI|string|No comments found.|false|-
requestURL|object|No comments found.|false|-
└─empty|boolean|No comments found.|false|-
└─value|array|No comments found.|false|-
└─coder|int8|No comments found.|false|-
└─count|int32|No comments found.|false|-
servletPath|string|No comments found.|false|-
requestedSessionIdValid|boolean|No comments found.|false|-
trailerFieldsReady|boolean|No comments found.|false|-
trailerFields|map|No comments found.|false|-
└─any object|object|any object.|false|-
headerNames|object|No comments found.|false|-
session|object|No comments found.|false|-
└─lastAccessedTime|int64|No comments found.|false|-
└─maxInactiveInterval|int32|No comments found.|false|-
└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─new|boolean|No comments found.|false|-
└─id|string|No comments found.|false|-
└─creationTime|int64|No comments found.|false|-
userPrincipal|object|No comments found.|false|-
└─name|string|No comments found.|false|-
parts|array|No comments found.|false|-
cookies|array|No comments found.|false|-
└─name|string|No comments found.|false|-
└─value|string|No comments found.|false|-
└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
method|string|No comments found.|false|-
serverName|string|No comments found.|false|-
serverPort|int32|No comments found.|false|-
remoteAddr|string|No comments found.|false|-
remoteHost|string|No comments found.|false|-
remotePort|int32|No comments found.|false|-
localAddr|string|No comments found.|false|-
localPort|int32|No comments found.|false|-
servletContext|object|No comments found.|false|-
└─defaultSessionTrackingModes|array|No comments found.|false|-
└─effectiveSessionTrackingModes|array|No comments found.|false|-
└─requestCharacterEncoding|string|No comments found.|false|-
└─responseCharacterEncoding|string|No comments found.|false|-
└─effectiveMajorVersion|int32|No comments found.|false|-
└─effectiveMinorVersion|int32|No comments found.|false|-
└─initParameterNames|object|No comments found.|false|-
└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─serverInfo|string|No comments found.|false|-
└─servletContextName|string|No comments found.|false|-
└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
└─virtualServerName|string|No comments found.|false|-
└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─sessionTimeout|int32|No comments found.|false|-
└─contextPath|string|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─minorVersion|int32|No comments found.|false|-
└─classLoader|object|No comments found.|false|-
└─majorVersion|int32|No comments found.|false|-
asyncStarted|boolean|No comments found.|false|-
asyncSupported|boolean|No comments found.|false|-
asyncContext|object|No comments found.|false|-
└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─committed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bufferSize|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writer|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─outputStream|object|No comments found.|false|-
└─timeout|int64|No comments found.|false|-
└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteHost|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remotePort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncStarted|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncSupported|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─timeout|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolRequestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletConnection|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─connectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolConnectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─reader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─in|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─markedChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─readAheadLimit|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipLF|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─markedSkipLF|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterMap|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locales|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─scheme|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─inputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLength|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLengthLong|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
protocolRequestId|string|No comments found.|false|-
servletConnection|object|No comments found.|false|-
└─connectionId|string|No comments found.|false|-
└─protocolConnectionId|string|No comments found.|false|-
└─secure|boolean|No comments found.|false|-
└─protocol|string|No comments found.|false|-
requestId|string|No comments found.|false|-
reader|object|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─skipBuffer|array|No comments found.|false|-
└─in|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipBuffer|array|No comments found.|false|-
└─cb|array|No comments found.|false|-
└─nChars|int32|No comments found.|false|-
└─nextChar|int32|No comments found.|false|-
└─markedChar|int32|No comments found.|false|-
└─readAheadLimit|int32|No comments found.|false|-
└─skipLF|boolean|No comments found.|false|-
└─markedSkipLF|boolean|No comments found.|false|-
attributeNames|object|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
parameterNames|object|No comments found.|false|-
parameterMap|map|No comments found.|false|-
└─any object|object|any object.|false|-
locales|object|No comments found.|false|-
secure|boolean|No comments found.|false|-
scheme|string|No comments found.|false|-
inputStream|object|No comments found.|false|-
protocol|string|No comments found.|false|-
locale|object|No comments found.|false|-
localName|string|No comments found.|false|-
contentLength|int32|No comments found.|false|-
contentLengthLong|int64|No comments found.|false|-
contentType|string|No comments found.|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: multipart/form-data' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/uploads.do --data 'requestURL.value=78&requestURL.value=78&session.servletContext.sessionCookieConfig.domain=runolfsdottir.co&session.servletContext.sessionCookieConfig.name=carola.harvey&servletContext.majorVersion=570&session.servletContext.servletContextName=carola.harvey&trailerFieldsReady=true&session.servletContext.responseCharacterEncoding=s5jafc&asyncContext.request.servletContext.contextPath=brxn6f&servletContext.sessionCookieConfig.secure=true&requestedSessionIdValid=true&remoteAddr=zpzusv&reader.markedSkipLF=true&pathInfo=dyrjef&servletContext.serverInfo=87nn0t&session.servletContext.sessionTimeout=763&localAddr=e58h9e&asyncContext.request.localName=carola.harvey&servletContext.contextPath=kthjen&asyncContext.request.servletContext.sessionTimeout=571&servletContext.responseCharacterEncoding=4oklyv&asyncContext.request.reader.skipLF=true&asyncContext.request.contentLength=10&asyncContext.request.servletContext.effectiveMajorVersion=839&asyncContext.request.servletConnection.protocolConnectionId=25&asyncContext.request.servletConnection.protocol=lyomvt&session.servletContext.majorVersion=677&servletContext.servletContextName=carola.harvey&session.servletContext.serverInfo=exkyt8&servletContext.sessionCookieConfig.name=carola.harvey&asyncContext.request.servletContext.effectiveMinorVersion=170&asyncContext.request.reader.readAheadLimit=10&secure=true&contentLengthLong=53&requestedSessionIdFromURL=true&asyncContext.timeout=385&reader.skipBuffer=7&reader.skipBuffer=7&asyncContext.response.writer.trouble=true&cookies.=3mpg38&cookies.=3mpg38&asyncContext.request.servletConnection.secure=true&dispatcherType=FORWARD&servletContext.sessionCookieConfig.comment=i7t2me&asyncContext.request.characterEncoding=qpgotu&userPrincipal.name=carola.harvey&servletContext.sessionCookieConfig.domain=runolfsdottir.co&session.lastAccessedTime=1794218215586&asyncContext.request.scheme=phaop1&asyncContext.request.protocolRequestId=25&session.servletContext.minorVersion=296&protocol=m6drw6&asyncContext.request.reader.nextChar=8&requestURL.coder=72&asyncContext.request.asyncSupported=true&servletContext.minorVersion=368&asyncContext.request.dispatcherType=FORWARD&asyncContext.request.reader.nChars=317&remoteHost=a9vsqw&asyncContext.request.localPort=682&cookies.=carola.harvey&cookies.=carola.harvey&asyncContext.request.servletContext.virtualServerName=carola.harvey&asyncContext.request.contentLengthLong=368&session.servletContext.sessionCookieConfig.path=nbjs6v&session.id=25&remoteUser=oxnude&asyncContext.request.servletContext.requestCharacterEncoding=8qsv2y&asyncContext.request.protocol=2t0cx3&session.servletContext.sessionCookieConfig.secure=true&asyncContext.request.localAddr=t351xy&httpServletMapping.pattern=i4bnlj&session.servletContext.sessionCookieConfig.httpOnly=true&session.servletContext.contextPath=tt8e6p&asyncContext.request.reader.markedChar=552&contentLength=432&requestId=25&asyncContext.request.remoteHost=u9tfbc&httpServletMapping.matchValue=z76u5u&servletContext.sessionCookieConfig.maxAge=2&asyncContext.request.remoteAddr=7d6khj&reader.nextChar=95&reader.markedChar=619&reader.readAheadLimit=10&asyncContext.request.serverName=carola.harvey&session.maxInactiveInterval=296&servletConnection.connectionId=25&contextPath=6jivv7&queryString=mdaz55&requestedSessionId=25&session.servletContext.sessionCookieConfig.comment=2n9m6e&session.new=true&session.servletContext.effectiveMinorVersion=457&serverName=carola.harvey&localPort=746&asyncContext.request.requestId=25&servletConnection.protocol=k2fjg8&pathTranslated=dqzrdb&remotePort=754&authType=0nsdgu&session.servletContext.virtualServerName=carola.harvey&method=z0dgva&servletContext.sessionCookieConfig.path=6fxiho&asyncContext.request.servletContext.servletContextName=carola.harvey&localName=carola.harvey&requestURL.count=488&session.servletContext.sessionCookieConfig.maxAge=2&session.servletContext.requestCharacterEncoding=k6tddf&servletContext.sessionCookieConfig.httpOnly=true&servletContext.sessionTimeout=79&asyncContext.request.servletContext.majorVersion=856&protocolRequestId=25&servletContext.requestCharacterEncoding=widq5l&asyncContext.request.secure=true&requestedSessionIdFromCookie=true&requestURI=nmvarb&asyncStarted=true&asyncContext.request.asyncContext.timeout=488&servletPath=zhm8oz&reader.nChars=625&asyncContext.request.reader.markedSkipLF=true&servletContext.effectiveMinorVersion=805&asyncContext.request.servletContext.minorVersion=20&characterEncoding=bcbios&reader.skipLF=true&asyncContext.request.contentType=zk0u1x&scheme=4kavec&servletContext.effectiveMajorVersion=322&session.creationTime=1794218215586&servletConnection.protocolConnectionId=25&requestURL.empty=true&contentType=2uqpab&asyncContext.response.bufferSize=10&serverPort=269&servletContext.virtualServerName=carola.harvey&httpServletMapping.servletName=carola.harvey&asyncContext.response.contentType=7w9ir3&asyncSupported=true&asyncContext.request.serverPort=259&asyncContext.request.servletContext.serverInfo=s89wor&session.servletContext.effectiveMajorVersion=828&asyncContext.request.servletConnection.connectionId=25&asyncContext.request.asyncStarted=true&asyncContext.response.characterEncoding=ltnr5x&asyncContext.request.servletContext.responseCharacterEncoding=iiif5y&reader.cb=m&reader.cb=m&httpServletMapping.mappingMatch=CONTEXT_ROOT&asyncContext.response.writer.autoFlush=true&servletConnection.secure=true&asyncContext.response.committed=true&asyncContext.request.remotePort=76'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─originFilename|string|原文件名|-
└─filename|string|保存文件名|-
└─fileType|string|文件类型|-
└─fileUrl|string|保存路径|-
└─fileHttpUrl|string|保存路径，对外使用的Http或Https路径|-
└─statusCode|string|是否上传成功|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "originFilename": "carola.harvey",
      "filename": "carola.harvey",
      "fileType": "qp4b66",
      "fileUrl": "www.hank-okon.com",
      "fileHttpUrl": "www.hank-okon.com",
      "statusCode": "12647"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 本地资源通用下载
**URL:** https://linlan.net/eframe_backend/api/system/file/download/resource.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 本地资源通用下载

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
resource|string|资源文件路径|false|-
requestedSessionIdFromCookie|boolean|No comments found.|false|-
requestedSessionIdFromURL|boolean|No comments found.|false|-
authType|string|No comments found.|false|-
httpServletMapping|object|No comments found.|false|-
└─matchValue|string|No comments found.|false|-
└─servletName|string|No comments found.|false|-
└─mappingMatch|enum|null<br/>CONTEXT_ROOT<br/>DEFAULT<br/>EXACT<br/>EXTENSION<br/>PATH<br/>|false|-
└─pattern|string|No comments found.|false|-
pathInfo|string|No comments found.|false|-
pathTranslated|string|No comments found.|false|-
contextPath|string|No comments found.|false|-
queryString|string|No comments found.|false|-
remoteUser|string|No comments found.|false|-
requestedSessionId|string|No comments found.|false|-
requestURI|string|No comments found.|false|-
requestURL|object|No comments found.|false|-
└─empty|boolean|No comments found.|false|-
└─value|array|No comments found.|false|-
└─coder|int8|No comments found.|false|-
└─count|int32|No comments found.|false|-
servletPath|string|No comments found.|false|-
requestedSessionIdValid|boolean|No comments found.|false|-
trailerFieldsReady|boolean|No comments found.|false|-
trailerFields|map|No comments found.|false|-
└─any object|object|any object.|false|-
headerNames|object|No comments found.|false|-
session|object|No comments found.|false|-
└─lastAccessedTime|int64|No comments found.|false|-
└─maxInactiveInterval|int32|No comments found.|false|-
└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─new|boolean|No comments found.|false|-
└─id|string|No comments found.|false|-
└─creationTime|int64|No comments found.|false|-
userPrincipal|object|No comments found.|false|-
└─name|string|No comments found.|false|-
parts|array|No comments found.|false|-
cookies|array|No comments found.|false|-
└─name|string|No comments found.|false|-
└─value|string|No comments found.|false|-
└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
method|string|No comments found.|false|-
serverName|string|No comments found.|false|-
serverPort|int32|No comments found.|false|-
remoteAddr|string|No comments found.|false|-
remoteHost|string|No comments found.|false|-
remotePort|int32|No comments found.|false|-
localAddr|string|No comments found.|false|-
localPort|int32|No comments found.|false|-
servletContext|object|No comments found.|false|-
└─defaultSessionTrackingModes|array|No comments found.|false|-
└─effectiveSessionTrackingModes|array|No comments found.|false|-
└─requestCharacterEncoding|string|No comments found.|false|-
└─responseCharacterEncoding|string|No comments found.|false|-
└─effectiveMajorVersion|int32|No comments found.|false|-
└─effectiveMinorVersion|int32|No comments found.|false|-
└─initParameterNames|object|No comments found.|false|-
└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─serverInfo|string|No comments found.|false|-
└─servletContextName|string|No comments found.|false|-
└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
└─virtualServerName|string|No comments found.|false|-
└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─sessionTimeout|int32|No comments found.|false|-
└─contextPath|string|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─minorVersion|int32|No comments found.|false|-
└─classLoader|object|No comments found.|false|-
└─majorVersion|int32|No comments found.|false|-
asyncStarted|boolean|No comments found.|false|-
asyncSupported|boolean|No comments found.|false|-
asyncContext|object|No comments found.|false|-
└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─committed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bufferSize|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writer|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─outputStream|object|No comments found.|false|-
└─timeout|int64|No comments found.|false|-
└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteHost|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remotePort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncStarted|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncSupported|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─timeout|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolRequestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletConnection|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─connectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolConnectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─reader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─in|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─markedChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─readAheadLimit|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipLF|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─markedSkipLF|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterMap|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locales|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─scheme|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─inputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLength|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLengthLong|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
protocolRequestId|string|No comments found.|false|-
servletConnection|object|No comments found.|false|-
└─connectionId|string|No comments found.|false|-
└─protocolConnectionId|string|No comments found.|false|-
└─secure|boolean|No comments found.|false|-
└─protocol|string|No comments found.|false|-
requestId|string|No comments found.|false|-
reader|object|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─skipBuffer|array|No comments found.|false|-
└─in|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipBuffer|array|No comments found.|false|-
└─cb|array|No comments found.|false|-
└─nChars|int32|No comments found.|false|-
└─nextChar|int32|No comments found.|false|-
└─markedChar|int32|No comments found.|false|-
└─readAheadLimit|int32|No comments found.|false|-
└─skipLF|boolean|No comments found.|false|-
└─markedSkipLF|boolean|No comments found.|false|-
attributeNames|object|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
parameterNames|object|No comments found.|false|-
parameterMap|map|No comments found.|false|-
└─any object|object|any object.|false|-
locales|object|No comments found.|false|-
secure|boolean|No comments found.|false|-
scheme|string|No comments found.|false|-
inputStream|object|No comments found.|false|-
protocol|string|No comments found.|false|-
locale|object|No comments found.|false|-
localName|string|No comments found.|false|-
contentLength|int32|No comments found.|false|-
contentLengthLong|int64|No comments found.|false|-
contentType|string|No comments found.|false|-
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/download/resource.do?writer.psOut.autoFlush=true&asyncContext.request.reader.markedSkipLF=true&dispatcherType=FORWARD&servletContext.responseCharacterEncoding=y7dca5&servletContext.sessionCookieConfig.maxAge=2&asyncContext.request.requestId=25&asyncContext.request.servletContext.effectiveMinorVersion=27&httpServletMapping.pattern=3j4erz&asyncSupported=true&pathTranslated=cs1vgz&remotePort=526&session.servletContext.sessionCookieConfig.domain=runolfsdottir.co&asyncContext.request.serverName=carola.harvey&authType=17gyk0&cookies.=carola.harvey&cookies.=carola.harvey&servletContext.effectiveMajorVersion=6&servletContext.sessionCookieConfig.name=carola.harvey&session.servletContext.responseCharacterEncoding=p1hpxi&asyncContext.request.reader.skipLF=true&secure=true&session.servletContext.sessionCookieConfig.httpOnly=true&asyncContext.request.servletConnection.secure=true&session.servletContext.sessionCookieConfig.name=carola.harvey&session.creationTime=1794218215586&serverName=carola.harvey&asyncContext.request.reader.nChars=483&writer.psOut.trouble=true&asyncContext.request.dispatcherType=FORWARD&reader.markedSkipLF=true&remoteUser=k94deb&asyncContext.request.servletContext.contextPath=xgjbo5&servletContext.servletContextName=carola.harvey&session.lastAccessedTime=1794218215586&asyncContext.request.contentType=ozfqz5&servletContext.majorVersion=747&session.servletContext.majorVersion=27&pathInfo=5rfe8o&requestedSessionIdFromURL=true&servletContext.sessionTimeout=898&asyncContext.request.reader.readAheadLimit=10&writer.psOut.textOut.nextChar=485&localPort=530&asyncContext.request.asyncStarted=true&servletContext.sessionCookieConfig.path=9ps26x&asyncContext.request.secure=true&session.servletContext.effectiveMinorVersion=671&session.servletContext.serverInfo=tgddro&servletContext.requestCharacterEncoding=xd48kc&servletConnection.secure=true&serverPort=627&localAddr=panr7d&asyncContext.request.servletContext.sessionTimeout=507&protocol=xasino&session.servletContext.minorVersion=135&session.servletContext.effectiveMajorVersion=825&asyncContext.request.asyncContext.timeout=184&session.servletContext.sessionCookieConfig.path=kl1gtq&asyncContext.request.servletContext.serverInfo=q8baq5&localName=carola.harvey&contentType=da3lsj&servletContext.effectiveMinorVersion=724&writer.psOut.formatter.zero=0&requestedSessionId=25&writer.autoFlush=true&queryString=sambxz&asyncContext.request.servletConnection.protocolConnectionId=25&contextPath=6213d2&servletContext.sessionCookieConfig.httpOnly=true&session.servletContext.sessionCookieConfig.secure=true&requestURL.empty=true&session.id=25&asyncContext.response.writer.trouble=true&asyncContext.request.servletContext.effectiveMajorVersion=833&requestedSessionIdValid=true&reader.markedChar=472&servletContext.virtualServerName=carola.harvey&servletContext.sessionCookieConfig.comment=kaashz&asyncContext.request.contentLengthLong=453&session.servletContext.sessionCookieConfig.comment=4er0kw&writer.trouble=true&requestId=25&servletContext.sessionCookieConfig.secure=true&session.maxInactiveInterval=968&asyncContext.request.remoteAddr=udvzek&requestURL.count=215&asyncContext.request.servletContext.minorVersion=137&asyncContext.response.contentType=1u57yw&asyncContext.request.reader.markedChar=800&httpServletMapping.mappingMatch=CONTEXT_ROOT&session.servletContext.requestCharacterEncoding=7ggvq5&requestURI=qg42a8&writer.psOut.closed=true&asyncContext.request.localName=carola.harvey&method=0hck2x&asyncContext.response.committed=true&asyncContext.response.characterEncoding=nyc1ek&servletContext.sessionCookieConfig.domain=runolfsdottir.co&asyncContext.request.servletContext.virtualServerName=carola.harvey&asyncContext.request.protocol=weins1&servletConnection.protocolConnectionId=25&reader.nextChar=119&characterEncoding=hoiqva&writer.psOut.textOut.nChars=963&session.new=true&asyncContext.request.servletContext.requestCharacterEncoding=z5bbfq&servletConnection.protocol=plnz7i&asyncContext.request.contentLength=304&asyncContext.request.servletContext.responseCharacterEncoding=rrqt8r&session.servletContext.contextPath=5nbdhp&session.servletContext.servletContextName=carola.harvey&asyncContext.request.localAddr=aar78d&asyncContext.request.asyncSupported=true&asyncContext.request.characterEncoding=yq19z0&asyncContext.request.localPort=7&reader.cb=6&reader.cb=6&servletContext.contextPath=7fzsj4&scheme=ywx2ds&session.servletContext.virtualServerName=carola.harvey&contentLengthLong=578&asyncContext.request.servletContext.servletContextName=carola.harvey&asyncContext.request.servletConnection.connectionId=25&writer.formatter.zero=n&remoteAddr=n3fd7g&asyncContext.response.writer.autoFlush=true&writer.psOut.closing=true&servletContext.serverInfo=u7bsgi&asyncContext.request.remotePort=118&asyncContext.request.servletContext.majorVersion=972&httpServletMapping.servletName=carola.harvey&httpServletMapping.matchValue=uocels&userPrincipal.name=carola.harvey&writer.formatter.lastException.detailMessage=success&servletConnection.connectionId=25&contentLength=210&requestURL.coder=37&servletPath=josxhu&session.servletContext.sessionTimeout=271&servletContext.minorVersion=329&trailerFieldsReady=true&remoteHost=tb24hf&requestedSessionIdFromCookie=true&asyncContext.timeout=842&resource=63rt9b&requestURL.value=14&requestURL.value=14&protocolRequestId=25&asyncStarted=true&reader.skipLF=true&asyncContext.request.reader.nextChar=848&asyncContext.response.bufferSize=10&asyncContext.request.servletConnection.protocol=v8sioc&reader.nChars=197&asyncContext.request.protocolRequestId=25&asyncContext.request.serverPort=16&status=253&committed=true&asyncContext.request.scheme=i8i2kj&reader.skipBuffer=n&reader.skipBuffer=n&bufferSize=10&writer.writeBuffer=f&writer.writeBuffer=f&asyncContext.request.remoteHost=gpx1sv&session.servletContext.sessionCookieConfig.maxAge=2&reader.readAheadLimit=10
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "dx0l31",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 参数配置信息操作处理
### 获取参数配置列表
**URL:** https://linlan.net/eframe_backend/api/system/configwhole/list.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取参数配置列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
configKey|string|参数键名|false|-
configValue|string|参数键值|false|-
isDisabled|boolean|状态|false|-
remark|string|描述|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/configwhole/list.do?configKey=ohel2r&page=1&q=xq8cxo&configValue=jy7c0u&limit=10&orderBy=848&remark=zv2tfx&isDisabled=true&startTime=2026-11-09 17:56:55&endTime=2026-11-09 17:56:55
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─totalCount|int32|总记录数 the total count|-
└─pageSize|int32|每页记录数 the page size|-
└─totalPage|int32|总页数 the total page|-
└─currPage|int32|当前页数 the current page|-
└─list|array|列表数据 the list|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─configId|string|参数主键|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─configKey|string|参数键名|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─configValue|string|参数键值|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isDisabled|boolean|状态|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "totalCount": 642,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "configId": "25",
        "configKey": "qihgb3",
        "configValue": "xxg2rd",
        "isDisabled": true,
        "remark": "y3yo9f"
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 参数配置导出
**URL:** https://linlan.net/eframe_backend/api/system/configwhole/export.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 参数配置导出

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
configKey|string|参数键名|false|-
configValue|string|参数键值|false|-
isDisabled|boolean|状态|false|-
remark|string|描述|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/configwhole/export.do --data 'writer.psOut.autoFlush=true&committed=true&writer.psOut.textOut.nextChar=995&orderBy=96&q=aesi5p&writer.trouble=true&characterEncoding=4aw8a7&remark=syo74o&writer.formatter.lastException.detailMessage=success&writer.psOut.closing=true&bufferSize=10&isDisabled=true&page=1&configValue=kxrtnp&contentType=o5wcti&configKey=8g3gdk&endTime=2026-11-09 17:56:55&writer.psOut.closed=true&status=635&writer.autoFlush=true&limit=10&writer.psOut.trouble=true&writer.psOut.formatter.zero=z&startTime=2026-11-09 17:56:55&writer.psOut.textOut.nChars=164&writer.writeBuffer=f&writer.writeBuffer=f&writer.formatter.zero=z'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "5wcdds",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据参数编号获取详细信息
**URL:** https://linlan.net/eframe_backend/api/system/configwhole/{configId}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据参数编号获取详细信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
configId|string|   配置ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/configwhole/25.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─configId|string|参数主键|-
└─configKey|string|参数键名|-
└─configValue|string|参数键值|-
└─isDisabled|boolean|状态|-
└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "configId": "25",
    "configKey": "rvbfc0",
    "configValue": "1p9t6e",
    "isDisabled": true,
    "remark": "i0w5ku"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据参数键名查询参数值
**URL:** https://linlan.net/eframe_backend/api/system/configwhole/configKey/{configKey}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据参数键名查询参数值

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
configKey|string|    键值Key|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/configwhole/configKey/xpgb2c.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─configId|string|参数主键|-
└─configKey|string|参数键名|-
└─configValue|string|参数键值|-
└─isDisabled|boolean|状态|-
└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "configId": "25",
    "configKey": "ruluun",
    "configValue": "5zk5b2",
    "isDisabled": true,
    "remark": "dp9q6p"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增参数配置
**URL:** https://linlan.net/eframe_backend/api/system/configwhole/save.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 新增参数配置

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
configId|string|参数主键|false|-
configKey|string|参数键名|false|-
configValue|string|参数键值|false|-
isDisabled|boolean|状态|false|-
remark|string|备注|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/configwhole/save.do --data '{
  "configId": "25",
  "configKey": "pyfisv",
  "configValue": "fleni1",
  "isDisabled": true,
  "remark": "vxyws0"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "k43ghc",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改参数配置
**URL:** https://linlan.net/eframe_backend/api/system/configwhole/update.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 修改参数配置

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
configId|string|参数主键|false|-
configKey|string|参数键名|false|-
configValue|string|参数键值|false|-
isDisabled|boolean|状态|false|-
remark|string|备注|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/configwhole/update.do --data '{
  "configId": "25",
  "configKey": "gkfhg1",
  "configValue": "7pt7xv",
  "isDisabled": true,
  "remark": "b982rv"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "hyqe5x",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除参数配置
**URL:** https://linlan.net/eframe_backend/api/system/configwhole/delete/{configIds}.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除参数配置

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
configIds|array|   配置Ids,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/configwhole/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "re0553",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 刷新参数缓存
**URL:** https://linlan.net/eframe_backend/api/system/configwhole/refreshCache.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 刷新参数缓存

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/configwhole/refreshCache.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "vz5ea3",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 在线用户监控
### 获取在线用户列表
**URL:** https://linlan.net/eframe_backend/api/monitor/online/list.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取在线用户列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ipaddr|string|   IP地址|false|-
username|string| 用户名|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/online/list.do?username=carola.harvey&ipaddr=nk0dlk
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─tokenId|string|会话编号|-
└─deptName|string|部门名称|-
└─username|string|用户名称|-
└─ipaddr|string|登录IP地址|-
└─loginLocation|string|登录地址|-
└─browser|string|浏览器类型|-
└─os|string|操作系统|-
└─loginTime|int64|登录时间|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "tokenId": "25",
      "deptName": "carola.harvey",
      "username": "carola.harvey",
      "ipaddr": "wtqbbs",
      "loginLocation": "imxw1j",
      "browser": "yqtamn",
      "os": "v3sp48",
      "loginTime": 1794218215586
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 在线用户下线
**URL:** https://linlan.net/eframe_backend/api/monitor/online/{tokenId}.do

**Type:** DELETE

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 在线用户下线

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
tokenId|string|  token令牌|true|-

**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/online/25.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "lhy61k",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 基础用户扩展信息读写控制类
### Get BaseUserExt list. 获取基础用户扩展信息列表或分页, 返回BaseUserExt对象.
**URL:** https://linlan.net/eframe_backend/api/third/baseuserext/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get BaseUserExt list. 获取基础用户扩展信息列表或分页, 返回BaseUserExt对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
nickname|string|用户昵称|false|-
name|string|真实姓名，加密的姓名|false|-
idNum|string|身份证号码，加密的身份证号码|false|-
idMobile|string|电话|false|-
idType|string|证件类型|false|-
namePy|string|姓名全拼|false|-
sname|string|姓名缩写，外部输入填写的姓名|false|-
nameEn|string|姓名英文|false|-
searchCode|string|查询码，名称的拼音首字母|false|-
sex|string|性别GB_XBDM|false|-
birthday|string|出生日期|false|-
postCode|string|家庭邮政编码|false|-
address|string|地址|false|-
nativePlace|string|籍贯GB_XZQHDM_SHENG|false|-
familyAddress|string|家庭地址|false|-
homeTel|string|住宅电话|false|-
qqNo|string|QQ号码|false|-
weixinId|string|微信用户名|false|-
spareMobile|string|备用手机，紧急手机|false|-
mobileConfirm|boolean|手机是否验证|false|-
emergencePhone|string|紧急电话，外部输入填写的身份证号码，外部导入或临时处理的身份证号码|false|-
keywords|string|关键字|false|-
intro|string|个人介绍|false|-
comefrom|string|来自|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-
spare3|string|备用3|false|-
spare4|string|备用4|false|-
ids|array|id集合|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/baseuserext/list.do?spare1=77rvys&orderBy=761&isMobileConfirm=true&nameEn=jc1dkw&ids=8xyi5l&ids=8xyi5l&sname=carola.harvey&searchCode=12647&name=carola.harvey&idMobile=337-229-9034&spare3=8dvmeo&namePy=6vg4ll&emergencePhone=662-667-5459&limit=10&startTime=2026-11-09 17:56:55&idType=u0l3tk&comefrom=j1mtv5&nickname=crysta.feeney&sex=bl4eye&postCode=12647&spare2=7pfwi6&address=Apt. 424 0228 Runte Wall， North Davina， VT 47787&q=7keim7&qqNo=6rqml2&familyAddress=Apt. 424 0228 Runte Wall， North Davina， VT 47787&weixinId=25&intro=tqnfne&birthday=2026-11-09 17:58:13&page=1&nativePlace=f7fhmp&spareMobile=337-229-9034&endTime=2026-11-09 17:56:55&keywords=u4avxi&homeTel=xsmcaj&spare4=3xocpx&idNum=ppt5hb
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|用户ID|-
└─nickname|string|用户昵称|-
└─idName|string|真实姓名，加密的姓名|-
└─idNum|string|身份证号码，加密的身份证号码|-
└─idMobile|string|电话|-
└─idType|string|证件类型|-
└─namePy|string|姓名全拼，BCryptPasswordEncoder密码")|-
└─sname|string|姓名缩写，外部输入填写的姓名|-
└─nameEn|string|姓名英文|-
└─searchCode|string|查询码，名称的拼音首字母|-
└─sex|string|性别GB_XBDM|-
└─birthday|string|出生日期|-
└─postCode|string|家庭邮政编码|-
└─address|string|地址|-
└─nativePlace|string|籍贯GB_XZQHDM_SHENG|-
└─familyAddress|string|家庭地址|-
└─homeTel|string|住宅电话|-
└─qqNo|string|即时通讯QQ号码|-
└─weixinId|string|微信用户名|-
└─weiboId|string|微博用户名|-
└─spareMobile|string|备用手机，紧急手机|-
└─isMobileConfirm|boolean|手机号码是否验证0否1是，是否实名认证|-
└─emergencePhone|string|紧急电话，外部输入填写的身份证号码，外部导入或临时处理的身份证号码|-
└─keywords|string|关键字|-
└─intro|string|个人介绍|-
└─comefrom|string|来自|-
└─imagePath|string|用户图像图标|-
└─userSignature|string|用户签名|-
└─ipRange|string|登录IP地址(";"分隔）|-
└─macCode|string|允许登录MAC地址(";"分隔）|-
└─resume|string|简历，网格平台使用，人所属的网格多个，分隔|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
└─spare3|string|备用3|-
└─spare4|string|备用4|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:13",
      "lastTime": "2026-11-09 17:58:13",
      "id": "25",
      "nickname": "crysta.feeney",
      "idName": "carola.harvey",
      "idNum": "n7453d",
      "idMobile": "337-229-9034",
      "idType": "5nk82o",
      "namePy": "hxci90",
      "sname": "carola.harvey",
      "nameEn": "nwgvdi",
      "searchCode": "12647",
      "sex": "4zzvl1",
      "birthday": "2026-11-09 17:58:13",
      "postCode": "12647",
      "address": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
      "nativePlace": "71964k",
      "familyAddress": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
      "homeTel": "8wx43u",
      "qqNo": "mf0klh",
      "weixinId": "25",
      "weiboId": "25",
      "spareMobile": "337-229-9034",
      "isMobileConfirm": true,
      "emergencePhone": "662-667-5459",
      "keywords": "20w2ri",
      "intro": "yr5ipr",
      "comefrom": "dng13o",
      "imagePath": "3qmc89",
      "userSignature": "7ogkmg",
      "ipRange": "n61y46",
      "macCode": "12647",
      "resume": "fu5n4f",
      "spare1": "s6qhwp",
      "spare2": "oqbi3a",
      "spare3": "co3mgm",
      "spare4": "jo6uud"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get BaseUserExt by id. 主键获取基础用户扩展信息详细信息.
**URL:** https://linlan.net/eframe_backend/api/third/baseuserext/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get BaseUserExt by id. 主键获取基础用户扩展信息详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|用户ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/baseuserext/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|用户ID|-
└─nickname|string|用户昵称|-
└─idName|string|真实姓名，加密的姓名|-
└─idNum|string|身份证号码，加密的身份证号码|-
└─idMobile|string|电话|-
└─idType|string|证件类型|-
└─namePy|string|姓名全拼，BCryptPasswordEncoder密码")|-
└─sname|string|姓名缩写，外部输入填写的姓名|-
└─nameEn|string|姓名英文|-
└─searchCode|string|查询码，名称的拼音首字母|-
└─sex|string|性别GB_XBDM|-
└─birthday|string|出生日期|-
└─postCode|string|家庭邮政编码|-
└─address|string|地址|-
└─nativePlace|string|籍贯GB_XZQHDM_SHENG|-
└─familyAddress|string|家庭地址|-
└─homeTel|string|住宅电话|-
└─qqNo|string|即时通讯QQ号码|-
└─weixinId|string|微信用户名|-
└─weiboId|string|微博用户名|-
└─spareMobile|string|备用手机，紧急手机|-
└─isMobileConfirm|boolean|手机号码是否验证0否1是，是否实名认证|-
└─emergencePhone|string|紧急电话，外部输入填写的身份证号码，外部导入或临时处理的身份证号码|-
└─keywords|string|关键字|-
└─intro|string|个人介绍|-
└─comefrom|string|来自|-
└─imagePath|string|用户图像图标|-
└─userSignature|string|用户签名|-
└─ipRange|string|登录IP地址(";"分隔）|-
└─macCode|string|允许登录MAC地址(";"分隔）|-
└─resume|string|简历，网格平台使用，人所属的网格多个，分隔|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
└─spare3|string|备用3|-
└─spare4|string|备用4|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:13",
    "lastTime": "2026-11-09 17:58:13",
    "id": "25",
    "nickname": "crysta.feeney",
    "idName": "carola.harvey",
    "idNum": "ip6aki",
    "idMobile": "337-229-9034",
    "idType": "xnkp42",
    "namePy": "mu9bma",
    "sname": "carola.harvey",
    "nameEn": "3zdl0o",
    "searchCode": "12647",
    "sex": "juiqci",
    "birthday": "2026-11-09 17:58:13",
    "postCode": "12647",
    "address": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
    "nativePlace": "p309yr",
    "familyAddress": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
    "homeTel": "eti5of",
    "qqNo": "bvscgq",
    "weixinId": "25",
    "weiboId": "25",
    "spareMobile": "337-229-9034",
    "isMobileConfirm": true,
    "emergencePhone": "662-667-5459",
    "keywords": "ehp29r",
    "intro": "de66vf",
    "comefrom": "pph37j",
    "imagePath": "3th658",
    "userSignature": "iywdw4",
    "ipRange": "yql064",
    "macCode": "12647",
    "resume": "acmqtw",
    "spare1": "hkzch7",
    "spare2": "cpl87o",
    "spare3": "t2zwiq",
    "spare4": "87ua5x"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### BaseUserExt Operation. 新增基础用户扩展信息数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/third/baseuserext/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/json; charset=utf-8

**Description:** BaseUserExt Operation. 新增基础用户扩展信息数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|用户ID|false|-
nickname|string|用户昵称|false|-
idName|string|真实姓名，加密的姓名|false|-
idNum|string|身份证号码，加密的身份证号码|false|-
idMobile|string|电话|false|-
idType|string|证件类型|false|-
namePy|string|姓名全拼，BCryptPasswordEncoder密码")|false|-
sname|string|姓名缩写，外部输入填写的姓名|false|-
nameEn|string|姓名英文|false|-
searchCode|string|查询码，名称的拼音首字母|false|-
sex|string|性别GB_XBDM|false|-
birthday|string|出生日期|false|-
postCode|string|家庭邮政编码|false|-
address|string|地址|false|-
nativePlace|string|籍贯GB_XZQHDM_SHENG|false|-
familyAddress|string|家庭地址|false|-
homeTel|string|住宅电话|false|-
qqNo|string|即时通讯QQ号码|false|-
weixinId|string|微信用户名|false|-
weiboId|string|微博用户名|false|-
spareMobile|string|备用手机，紧急手机|false|-
isMobileConfirm|boolean|手机号码是否验证0否1是，是否实名认证|false|-
emergencePhone|string|紧急电话，外部输入填写的身份证号码，外部导入或临时处理的身份证号码|false|-
keywords|string|关键字|false|-
intro|string|个人介绍|false|-
comefrom|string|来自|false|-
imagePath|string|用户图像图标|false|-
userSignature|string|用户签名|false|-
ipRange|string|登录IP地址(";"分隔）|false|-
macCode|string|允许登录MAC地址(";"分隔）|false|-
resume|string|简历，网格平台使用，人所属的网格多个，分隔|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-
spare3|string|备用3|false|-
spare4|string|备用4|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/baseuserext/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:13",
  "lastTime": "2026-11-09 17:58:13",
  "id": "25",
  "nickname": "crysta.feeney",
  "idName": "carola.harvey",
  "idNum": "1euoca",
  "idMobile": "337-229-9034",
  "idType": "qnsk3i",
  "namePy": "lbptdx",
  "sname": "carola.harvey",
  "nameEn": "yj90wo",
  "searchCode": "12647",
  "sex": "elp9o9",
  "birthday": "2026-11-09 17:58:13",
  "postCode": "12647",
  "address": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
  "nativePlace": "gvf1er",
  "familyAddress": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
  "homeTel": "j8xuif",
  "qqNo": "i1e01g",
  "weixinId": "25",
  "weiboId": "25",
  "spareMobile": "337-229-9034",
  "isMobileConfirm": true,
  "emergencePhone": "662-667-5459",
  "keywords": "5g69rg",
  "intro": "vombkd",
  "comefrom": "tftq9x",
  "imagePath": "eoiu59",
  "userSignature": "9tmcnj",
  "ipRange": "jkl28i",
  "macCode": "12647",
  "resume": "cyhvp6",
  "spare1": "v3pwl9",
  "spare2": "afvjtt",
  "spare3": "qsgtsl",
  "spare4": "ajvuf9"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "9lh7c2",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### BaseUserExt Operation. 修改基础用户扩展信息数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/third/baseuserext/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/json; charset=utf-8

**Description:** BaseUserExt Operation. 修改基础用户扩展信息数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|用户ID|false|-
nickname|string|用户昵称|false|-
idName|string|真实姓名，加密的姓名|false|-
idNum|string|身份证号码，加密的身份证号码|false|-
idMobile|string|电话|false|-
idType|string|证件类型|false|-
namePy|string|姓名全拼，BCryptPasswordEncoder密码")|false|-
sname|string|姓名缩写，外部输入填写的姓名|false|-
nameEn|string|姓名英文|false|-
searchCode|string|查询码，名称的拼音首字母|false|-
sex|string|性别GB_XBDM|false|-
birthday|string|出生日期|false|-
postCode|string|家庭邮政编码|false|-
address|string|地址|false|-
nativePlace|string|籍贯GB_XZQHDM_SHENG|false|-
familyAddress|string|家庭地址|false|-
homeTel|string|住宅电话|false|-
qqNo|string|即时通讯QQ号码|false|-
weixinId|string|微信用户名|false|-
weiboId|string|微博用户名|false|-
spareMobile|string|备用手机，紧急手机|false|-
isMobileConfirm|boolean|手机号码是否验证0否1是，是否实名认证|false|-
emergencePhone|string|紧急电话，外部输入填写的身份证号码，外部导入或临时处理的身份证号码|false|-
keywords|string|关键字|false|-
intro|string|个人介绍|false|-
comefrom|string|来自|false|-
imagePath|string|用户图像图标|false|-
userSignature|string|用户签名|false|-
ipRange|string|登录IP地址(";"分隔）|false|-
macCode|string|允许登录MAC地址(";"分隔）|false|-
resume|string|简历，网格平台使用，人所属的网格多个，分隔|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-
spare3|string|备用3|false|-
spare4|string|备用4|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/baseuserext/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:13",
  "lastTime": "2026-11-09 17:58:13",
  "id": "25",
  "nickname": "crysta.feeney",
  "idName": "carola.harvey",
  "idNum": "y9cqht",
  "idMobile": "337-229-9034",
  "idType": "twodkh",
  "namePy": "b04fhl",
  "sname": "carola.harvey",
  "nameEn": "6dds41",
  "searchCode": "12647",
  "sex": "jcoa82",
  "birthday": "2026-11-09 17:58:13",
  "postCode": "12647",
  "address": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
  "nativePlace": "k4ebth",
  "familyAddress": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
  "homeTel": "0tqkj4",
  "qqNo": "r5rpfr",
  "weixinId": "25",
  "weiboId": "25",
  "spareMobile": "337-229-9034",
  "isMobileConfirm": true,
  "emergencePhone": "662-667-5459",
  "keywords": "xdgidz",
  "intro": "a6frjq",
  "comefrom": "iaexbf",
  "imagePath": "impx6e",
  "userSignature": "e0jgiy",
  "ipRange": "az62wc",
  "macCode": "12647",
  "resume": "d3snan",
  "spare1": "leqsq0",
  "spare2": "6xylhz",
  "spare3": "w7ai06",
  "spare4": "w7wi1r"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "ha68xf",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### BaseUserExt Operation. 删除基础用户扩展信息数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/third/baseuserext/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** BaseUserExt Operation. 删除基础用户扩展信息数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|用户ID:null;1;1,2,3,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/baseuserext/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "pvlgy5",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 基础用户读写控制类
### Get BaseUser list. 获取基础用户列表或分页, 返回BaseUser对象.
**URL:** https://linlan.net/eframe_backend/api/system/baseuser/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get BaseUser list. 获取基础用户列表或分页, 返回BaseUser对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
xzqhId|int64|行政区划编号，用户来源地|false|-
source|int32|创建来源类型|false|-
createType|int32|创建方式0导入1录入2授权|false|-
username|string|用户名，城市APP市民云的用户名|false|-
mobile|string|手机号码|false|-
email|string|电子邮箱|false|-
srcCode|int32|当前来源0缺省1:WEB或PC,2APP21:AndroidAPP,22:IOSAPP,3WAP,4MINI|false|-
registerTime|string|注册时间|false|-
lastAppId|string|最后登录的应用ID|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|描述|false|-
spare1|string|备用1，第三方的平台的用户名，如随申办统一身份体系的用户名|false|-
spare2|string|备用2，第三方用户ID，OpenId|false|-
key|string|关键字|false|-
bindOrganId|string|绑定机构ID|false|-
bindOrganType|string|绑定机构类型|false|-
isBindFrontUser|string|绑定站点用户|false|-
createTime|string|关键字|false|-
searchCode|string|搜索编码|false|-
workUserId|string|用户编号|false|-
ids|array|id集合|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/baseuser/list.do?mobile=337-229-9034&workUserId=25&email=afton.goyette@gmail.com&startTime=2026-11-09 17:56:55&username=carola.harvey&srcCode=690&key=xv3ngq&orderBy=44&endTime=2026-11-09 17:56:55&spare2=87mw7e&page=1&spare1=rn18he&isBindFrontUser=mvtvgo&searchCode=12647&lastAppId=25&description=rv90xl&limit=10&bindOrganType=367lxo&ids=y45yat&ids=y45yat&source=235&q=k0icbp&bindOrganId=25&createTime=2026-11-09 17:56:55&registerTime=2026-11-09 17:58:10&xzqhId=775&createType=682&delFlag=5
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|用户ID|-
└─xzqhId|int64|行政区划编号，用户来源地|-
└─source|string|创建来源类型|-
└─createType|int32|创建方式0导入1录入2授权|-
└─username|string|用户名，城市APP市民云的用户名|-
└─mobile|string|手机号码|-
└─email|string|电子邮箱|-
└─password|string|密码|-
└─salt|string|混淆字符|-
└─srcCode|int32|当前来源0缺省1:WEB或PC,2APP21:AndroidAPP,22:IOSAPP,3WAP,4MINI|-
└─registerTime|string|注册时间|-
└─registerIp|string|注册IP|-
└─currentLoginTime|string|当前登录时间|-
└─currentLoginIp|string|当前登录IP|-
└─lastAppId|string|最后登录的应用ID|-
└─lastLoginTime|string|最后登录时间|-
└─lastLoginIp|string|最后登录IP|-
└─lastLogoutTime|string|最后一次退出时间|-
└─loginCount|int32|登录次数|-
└─resetKey|string|重置密码KEY|-
└─resetPwd|string|重置密码VALUE|-
└─lastResetTime|string|上次修改密码时间，最后一次修改密码时间|-
└─errorTime|string|出错时间|-
└─errorCount|int32|出错数量|-
└─errorIp|string|出错IP|-
└─lockTime|string|锁定时间|-
└─activation|boolean|是否激活0否1是，是否需要更改密码0否1是|-
└─activationCode|string|激活代码|-
└─priority|int32|排序|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─deleteTime|string|删除时间|-
└─description|string|描述|-
└─spare1|string|备用1，第三方用户ID，UnionId|-
└─spare2|string|备用2，第三方用户ID，OpenId|-
└─newPassword|string|新密码|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:10",
      "lastTime": "2026-11-09 17:58:10",
      "id": "25",
      "xzqhId": 595,
      "source": "nexwbx",
      "createType": 609,
      "username": "carola.harvey",
      "mobile": "337-229-9034",
      "email": "afton.goyette@gmail.com",
      "password": "y0f4uk",
      "salt": "x8ddvg",
      "srcCode": 537,
      "registerTime": "2026-11-09 17:58:10",
      "registerIp": "79.62.69.121",
      "currentLoginTime": "2026-11-09 17:58:10",
      "currentLoginIp": "79.62.69.121",
      "lastAppId": "25",
      "lastLoginTime": "2026-11-09 17:58:10",
      "lastLoginIp": "79.62.69.121",
      "lastLogoutTime": "2026-11-09 17:58:10",
      "loginCount": 444,
      "resetKey": "1p16cu",
      "resetPwd": "swiycm",
      "lastResetTime": "2026-11-09 17:58:10",
      "errorTime": "2026-11-09 17:58:10",
      "errorCount": 345,
      "errorIp": "79.62.69.121",
      "lockTime": "2026-11-09 17:58:10",
      "activation": true,
      "activationCode": "12647",
      "priority": 897,
      "delFlag": 5,
      "deleteTime": "2026-11-09 17:58:10",
      "description": "u2rzbi",
      "spare1": "x5p7n4",
      "spare2": "iyvlto",
      "newPassword": "mexd0k"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get BaseUser by id. 主键获取基础用户详细信息.
**URL:** https://linlan.net/eframe_backend/api/system/baseuser/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get BaseUser by id. 主键获取基础用户详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|用户ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/baseuser/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|用户ID|-
└─xzqhId|int64|行政区划编号，用户来源地|-
└─source|string|创建来源类型|-
└─createType|int32|创建方式0导入1录入2授权|-
└─username|string|用户名，城市APP市民云的用户名|-
└─mobile|string|手机号码|-
└─email|string|电子邮箱|-
└─password|string|密码|-
└─salt|string|混淆字符|-
└─srcCode|int32|当前来源0缺省1:WEB或PC,2APP21:AndroidAPP,22:IOSAPP,3WAP,4MINI|-
└─registerTime|string|注册时间|-
└─registerIp|string|注册IP|-
└─currentLoginTime|string|当前登录时间|-
└─currentLoginIp|string|当前登录IP|-
└─lastAppId|string|最后登录的应用ID|-
└─lastLoginTime|string|最后登录时间|-
└─lastLoginIp|string|最后登录IP|-
└─lastLogoutTime|string|最后一次退出时间|-
└─loginCount|int32|登录次数|-
└─resetKey|string|重置密码KEY|-
└─resetPwd|string|重置密码VALUE|-
└─lastResetTime|string|上次修改密码时间，最后一次修改密码时间|-
└─errorTime|string|出错时间|-
└─errorCount|int32|出错数量|-
└─errorIp|string|出错IP|-
└─lockTime|string|锁定时间|-
└─activation|boolean|是否激活0否1是，是否需要更改密码0否1是|-
└─activationCode|string|激活代码|-
└─priority|int32|排序|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─deleteTime|string|删除时间|-
└─description|string|描述|-
└─spare1|string|备用1，第三方用户ID，UnionId|-
└─spare2|string|备用2，第三方用户ID，OpenId|-
└─newPassword|string|新密码|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:10",
    "lastTime": "2026-11-09 17:58:10",
    "id": "25",
    "xzqhId": 468,
    "source": "pi3j34",
    "createType": 21,
    "username": "carola.harvey",
    "mobile": "337-229-9034",
    "email": "afton.goyette@gmail.com",
    "password": "10qvfr",
    "salt": "r9lx57",
    "srcCode": 69,
    "registerTime": "2026-11-09 17:58:10",
    "registerIp": "79.62.69.121",
    "currentLoginTime": "2026-11-09 17:58:10",
    "currentLoginIp": "79.62.69.121",
    "lastAppId": "25",
    "lastLoginTime": "2026-11-09 17:58:10",
    "lastLoginIp": "79.62.69.121",
    "lastLogoutTime": "2026-11-09 17:58:10",
    "loginCount": 381,
    "resetKey": "wudd7v",
    "resetPwd": "gbuj6r",
    "lastResetTime": "2026-11-09 17:58:10",
    "errorTime": "2026-11-09 17:58:10",
    "errorCount": 831,
    "errorIp": "79.62.69.121",
    "lockTime": "2026-11-09 17:58:10",
    "activation": true,
    "activationCode": "12647",
    "priority": 163,
    "delFlag": 5,
    "deleteTime": "2026-11-09 17:58:10",
    "description": "j2hqx5",
    "spare1": "x5tklt",
    "spare2": "8h6eiu",
    "newPassword": "xkmwfc"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### BaseUser Operation. 新增基础用户数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/system/baseuser/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/json; charset=utf-8

**Description:** BaseUser Operation. 新增基础用户数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|用户ID|false|-
xzqhId|int64|行政区划编号，用户来源地|false|-
source|string|创建来源类型|false|-
createType|int32|创建方式0导入1录入2授权|false|-
username|string|用户名，城市APP市民云的用户名|false|-
mobile|string|手机号码|false|-
email|string|电子邮箱|false|-
password|string|密码|false|-
salt|string|混淆字符|false|-
srcCode|int32|当前来源0缺省1:WEB或PC,2APP21:AndroidAPP,22:IOSAPP,3WAP,4MINI|false|-
registerTime|string|注册时间|false|-
registerIp|string|注册IP|false|-
currentLoginTime|string|当前登录时间|false|-
currentLoginIp|string|当前登录IP|false|-
lastAppId|string|最后登录的应用ID|false|-
lastLoginTime|string|最后登录时间|false|-
lastLoginIp|string|最后登录IP|false|-
lastLogoutTime|string|最后一次退出时间|false|-
loginCount|int32|登录次数|false|-
resetKey|string|重置密码KEY|false|-
resetPwd|string|重置密码VALUE|false|-
lastResetTime|string|上次修改密码时间，最后一次修改密码时间|false|-
errorTime|string|出错时间|false|-
errorCount|int32|出错数量|false|-
errorIp|string|出错IP|false|-
lockTime|string|锁定时间|false|-
activation|boolean|是否激活0否1是，是否需要更改密码0否1是|false|-
activationCode|string|激活代码|false|-
priority|int32|排序|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
deleteTime|string|删除时间|false|-
description|string|描述|false|-
spare1|string|备用1，第三方用户ID，UnionId|false|-
spare2|string|备用2，第三方用户ID，OpenId|false|-
newPassword|string|新密码|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/baseuser/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:10",
  "lastTime": "2026-11-09 17:58:10",
  "id": "25",
  "xzqhId": 836,
  "source": "j9n433",
  "createType": 626,
  "username": "carola.harvey",
  "mobile": "337-229-9034",
  "email": "afton.goyette@gmail.com",
  "password": "1i1zoy",
  "salt": "9qm0fa",
  "srcCode": 962,
  "registerTime": "2026-11-09 17:58:10",
  "registerIp": "79.62.69.121",
  "currentLoginTime": "2026-11-09 17:58:10",
  "currentLoginIp": "79.62.69.121",
  "lastAppId": "25",
  "lastLoginTime": "2026-11-09 17:58:10",
  "lastLoginIp": "79.62.69.121",
  "lastLogoutTime": "2026-11-09 17:58:10",
  "loginCount": 994,
  "resetKey": "4i7biu",
  "resetPwd": "brya5r",
  "lastResetTime": "2026-11-09 17:58:10",
  "errorTime": "2026-11-09 17:58:10",
  "errorCount": 840,
  "errorIp": "79.62.69.121",
  "lockTime": "2026-11-09 17:58:10",
  "activation": true,
  "activationCode": "12647",
  "priority": 838,
  "delFlag": 5,
  "deleteTime": "2026-11-09 17:58:10",
  "description": "apree1",
  "spare1": "qdy9v4",
  "spare2": "iryxmw",
  "newPassword": "8hwlbf"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "6qzb5g",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### BaseUser Operation. 修改基础用户数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/system/baseuser/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/json; charset=utf-8

**Description:** BaseUser Operation. 修改基础用户数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|用户ID|false|-
xzqhId|int64|行政区划编号，用户来源地|false|-
source|string|创建来源类型|false|-
createType|int32|创建方式0导入1录入2授权|false|-
username|string|用户名，城市APP市民云的用户名|false|-
mobile|string|手机号码|false|-
email|string|电子邮箱|false|-
password|string|密码|false|-
salt|string|混淆字符|false|-
srcCode|int32|当前来源0缺省1:WEB或PC,2APP21:AndroidAPP,22:IOSAPP,3WAP,4MINI|false|-
registerTime|string|注册时间|false|-
registerIp|string|注册IP|false|-
currentLoginTime|string|当前登录时间|false|-
currentLoginIp|string|当前登录IP|false|-
lastAppId|string|最后登录的应用ID|false|-
lastLoginTime|string|最后登录时间|false|-
lastLoginIp|string|最后登录IP|false|-
lastLogoutTime|string|最后一次退出时间|false|-
loginCount|int32|登录次数|false|-
resetKey|string|重置密码KEY|false|-
resetPwd|string|重置密码VALUE|false|-
lastResetTime|string|上次修改密码时间，最后一次修改密码时间|false|-
errorTime|string|出错时间|false|-
errorCount|int32|出错数量|false|-
errorIp|string|出错IP|false|-
lockTime|string|锁定时间|false|-
activation|boolean|是否激活0否1是，是否需要更改密码0否1是|false|-
activationCode|string|激活代码|false|-
priority|int32|排序|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
deleteTime|string|删除时间|false|-
description|string|描述|false|-
spare1|string|备用1，第三方用户ID，UnionId|false|-
spare2|string|备用2，第三方用户ID，OpenId|false|-
newPassword|string|新密码|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/baseuser/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:10",
  "lastTime": "2026-11-09 17:58:10",
  "id": "25",
  "xzqhId": 181,
  "source": "5hdfzn",
  "createType": 691,
  "username": "carola.harvey",
  "mobile": "337-229-9034",
  "email": "afton.goyette@gmail.com",
  "password": "mq0d72",
  "salt": "h29xza",
  "srcCode": 193,
  "registerTime": "2026-11-09 17:58:10",
  "registerIp": "79.62.69.121",
  "currentLoginTime": "2026-11-09 17:58:10",
  "currentLoginIp": "79.62.69.121",
  "lastAppId": "25",
  "lastLoginTime": "2026-11-09 17:58:10",
  "lastLoginIp": "79.62.69.121",
  "lastLogoutTime": "2026-11-09 17:58:10",
  "loginCount": 753,
  "resetKey": "nr6brl",
  "resetPwd": "euu2gu",
  "lastResetTime": "2026-11-09 17:58:10",
  "errorTime": "2026-11-09 17:58:10",
  "errorCount": 261,
  "errorIp": "79.62.69.121",
  "lockTime": "2026-11-09 17:58:10",
  "activation": true,
  "activationCode": "12647",
  "priority": 890,
  "delFlag": 5,
  "deleteTime": "2026-11-09 17:58:10",
  "description": "se42kx",
  "spare1": "m7jcew",
  "spare2": "cae5f3",
  "newPassword": "2sax3d"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "fwojju",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### BaseUser Operation. 删除基础用户数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/system/baseuser/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** BaseUser Operation. 删除基础用户数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|用户ID:null;1;1,2,3,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/baseuser/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "5tdx3p",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get BaseUserExt list. 获取基础用户扩展信息列表或分页, 返回BaseUserExt对象.
**URL:** https://linlan.net/eframe_backend/api/system/baseuserext/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get BaseUserExt list. 获取基础用户扩展信息列表或分页, 返回BaseUserExt对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
nickname|string|用户昵称|false|-
name|string|真实姓名，加密的姓名|false|-
idNum|string|身份证号码，加密的身份证号码|false|-
idMobile|string|电话|false|-
idType|string|证件类型|false|-
namePy|string|姓名全拼|false|-
sname|string|姓名缩写，外部输入填写的姓名|false|-
nameEn|string|姓名英文|false|-
searchCode|string|查询码，名称的拼音首字母|false|-
sex|string|性别GB_XBDM|false|-
birthday|string|出生日期|false|-
postCode|string|家庭邮政编码|false|-
address|string|地址|false|-
nativePlace|string|籍贯GB_XZQHDM_SHENG|false|-
familyAddress|string|家庭地址|false|-
homeTel|string|住宅电话|false|-
qqNo|string|QQ号码|false|-
weixinId|string|微信用户名|false|-
spareMobile|string|备用手机，紧急手机|false|-
mobileConfirm|boolean|手机是否验证|false|-
emergencePhone|string|紧急电话，外部输入填写的身份证号码，外部导入或临时处理的身份证号码|false|-
keywords|string|关键字|false|-
intro|string|个人介绍|false|-
comefrom|string|来自|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-
spare3|string|备用3|false|-
spare4|string|备用4|false|-
ids|array|id集合|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/baseuserext/list.do?spare4=zzzb7g&spare3=rqvkif&postCode=12647&address=Apt. 424 0228 Runte Wall， North Davina， VT 47787&intro=2qv3b6&endTime=2026-11-09 17:56:55&keywords=zt4h47&nativePlace=9dm7x4&startTime=2026-11-09 17:56:55&spareMobile=337-229-9034&comefrom=t0oidq&qqNo=h4uyv5&idType=b0f603&spare2=fudkh3&q=atbxlt&birthday=2026-11-09 17:58:11&emergencePhone=662-667-5459&sname=carola.harvey&ids=hsno9k&ids=hsno9k&isMobileConfirm=true&weixinId=25&limit=10&idNum=gpnbst&nameEn=fjyt6g&page=1&searchCode=12647&sex=8kfew1&homeTel=1hgu3y&orderBy=185&spare1=ujxl88&name=carola.harvey&namePy=bb42sj&nickname=crysta.feeney&idMobile=337-229-9034&familyAddress=Apt. 424 0228 Runte Wall， North Davina， VT 47787
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|用户ID|-
└─nickname|string|用户昵称|-
└─idName|string|真实姓名，加密的姓名|-
└─idNum|string|身份证号码，加密的身份证号码|-
└─idMobile|string|电话|-
└─idType|string|证件类型|-
└─namePy|string|姓名全拼，BCryptPasswordEncoder密码")|-
└─sname|string|姓名缩写，外部输入填写的姓名|-
└─nameEn|string|姓名英文|-
└─searchCode|string|查询码，名称的拼音首字母|-
└─sex|string|性别GB_XBDM|-
└─birthday|string|出生日期|-
└─postCode|string|家庭邮政编码|-
└─address|string|地址|-
└─nativePlace|string|籍贯GB_XZQHDM_SHENG|-
└─familyAddress|string|家庭地址|-
└─homeTel|string|住宅电话|-
└─qqNo|string|即时通讯QQ号码|-
└─weixinId|string|微信用户名|-
└─weiboId|string|微博用户名|-
└─spareMobile|string|备用手机，紧急手机|-
└─isMobileConfirm|boolean|手机号码是否验证0否1是，是否实名认证|-
└─emergencePhone|string|紧急电话，外部输入填写的身份证号码，外部导入或临时处理的身份证号码|-
└─keywords|string|关键字|-
└─intro|string|个人介绍|-
└─comefrom|string|来自|-
└─imagePath|string|用户图像图标|-
└─userSignature|string|用户签名|-
└─ipRange|string|登录IP地址(";"分隔）|-
└─macCode|string|允许登录MAC地址(";"分隔）|-
└─resume|string|简历，网格平台使用，人所属的网格多个，分隔|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
└─spare3|string|备用3|-
└─spare4|string|备用4|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:11",
      "lastTime": "2026-11-09 17:58:11",
      "id": "25",
      "nickname": "crysta.feeney",
      "idName": "carola.harvey",
      "idNum": "kxg2cf",
      "idMobile": "337-229-9034",
      "idType": "hnd7ep",
      "namePy": "eh2ir8",
      "sname": "carola.harvey",
      "nameEn": "ldz2b9",
      "searchCode": "12647",
      "sex": "1lgx27",
      "birthday": "2026-11-09 17:58:11",
      "postCode": "12647",
      "address": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
      "nativePlace": "pqta6m",
      "familyAddress": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
      "homeTel": "nta3ua",
      "qqNo": "dd14ky",
      "weixinId": "25",
      "weiboId": "25",
      "spareMobile": "337-229-9034",
      "isMobileConfirm": true,
      "emergencePhone": "662-667-5459",
      "keywords": "dmwvzb",
      "intro": "5zrheb",
      "comefrom": "5q3xa5",
      "imagePath": "nj6qn0",
      "userSignature": "d1rvgf",
      "ipRange": "1oj8sz",
      "macCode": "12647",
      "resume": "1lvoco",
      "spare1": "e0uuqv",
      "spare2": "9o3nre",
      "spare3": "baqrmh",
      "spare4": "c7wb7g"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get BaseUserExt by id. 主键获取基础用户扩展信息详细信息.
**URL:** https://linlan.net/eframe_backend/api/system/baseuserext/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get BaseUserExt by id. 主键获取基础用户扩展信息详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|用户ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/baseuserext/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|用户ID|-
└─nickname|string|用户昵称|-
└─idName|string|真实姓名，加密的姓名|-
└─idNum|string|身份证号码，加密的身份证号码|-
└─idMobile|string|电话|-
└─idType|string|证件类型|-
└─namePy|string|姓名全拼，BCryptPasswordEncoder密码")|-
└─sname|string|姓名缩写，外部输入填写的姓名|-
└─nameEn|string|姓名英文|-
└─searchCode|string|查询码，名称的拼音首字母|-
└─sex|string|性别GB_XBDM|-
└─birthday|string|出生日期|-
└─postCode|string|家庭邮政编码|-
└─address|string|地址|-
└─nativePlace|string|籍贯GB_XZQHDM_SHENG|-
└─familyAddress|string|家庭地址|-
└─homeTel|string|住宅电话|-
└─qqNo|string|即时通讯QQ号码|-
└─weixinId|string|微信用户名|-
└─weiboId|string|微博用户名|-
└─spareMobile|string|备用手机，紧急手机|-
└─isMobileConfirm|boolean|手机号码是否验证0否1是，是否实名认证|-
└─emergencePhone|string|紧急电话，外部输入填写的身份证号码，外部导入或临时处理的身份证号码|-
└─keywords|string|关键字|-
└─intro|string|个人介绍|-
└─comefrom|string|来自|-
└─imagePath|string|用户图像图标|-
└─userSignature|string|用户签名|-
└─ipRange|string|登录IP地址(";"分隔）|-
└─macCode|string|允许登录MAC地址(";"分隔）|-
└─resume|string|简历，网格平台使用，人所属的网格多个，分隔|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
└─spare3|string|备用3|-
└─spare4|string|备用4|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:11",
    "lastTime": "2026-11-09 17:58:11",
    "id": "25",
    "nickname": "crysta.feeney",
    "idName": "carola.harvey",
    "idNum": "o8suk2",
    "idMobile": "337-229-9034",
    "idType": "5l1fi9",
    "namePy": "u9eksg",
    "sname": "carola.harvey",
    "nameEn": "hg2yee",
    "searchCode": "12647",
    "sex": "msbp2i",
    "birthday": "2026-11-09 17:58:11",
    "postCode": "12647",
    "address": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
    "nativePlace": "qnba5f",
    "familyAddress": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
    "homeTel": "nlog5x",
    "qqNo": "bdmyve",
    "weixinId": "25",
    "weiboId": "25",
    "spareMobile": "337-229-9034",
    "isMobileConfirm": true,
    "emergencePhone": "662-667-5459",
    "keywords": "74no9i",
    "intro": "l9jzbb",
    "comefrom": "mzbfns",
    "imagePath": "emryk8",
    "userSignature": "8ki1o7",
    "ipRange": "2ph20b",
    "macCode": "12647",
    "resume": "kfnr84",
    "spare1": "2molkz",
    "spare2": "xjnjhf",
    "spare3": "xdg56w",
    "spare4": "prnm3m"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### BaseUserExt Operation. 新增基础用户扩展信息数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/system/baseuserext/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/json; charset=utf-8

**Description:** BaseUserExt Operation. 新增基础用户扩展信息数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|用户ID|false|-
nickname|string|用户昵称|false|-
idName|string|真实姓名，加密的姓名|false|-
idNum|string|身份证号码，加密的身份证号码|false|-
idMobile|string|电话|false|-
idType|string|证件类型|false|-
namePy|string|姓名全拼，BCryptPasswordEncoder密码")|false|-
sname|string|姓名缩写，外部输入填写的姓名|false|-
nameEn|string|姓名英文|false|-
searchCode|string|查询码，名称的拼音首字母|false|-
sex|string|性别GB_XBDM|false|-
birthday|string|出生日期|false|-
postCode|string|家庭邮政编码|false|-
address|string|地址|false|-
nativePlace|string|籍贯GB_XZQHDM_SHENG|false|-
familyAddress|string|家庭地址|false|-
homeTel|string|住宅电话|false|-
qqNo|string|即时通讯QQ号码|false|-
weixinId|string|微信用户名|false|-
weiboId|string|微博用户名|false|-
spareMobile|string|备用手机，紧急手机|false|-
isMobileConfirm|boolean|手机号码是否验证0否1是，是否实名认证|false|-
emergencePhone|string|紧急电话，外部输入填写的身份证号码，外部导入或临时处理的身份证号码|false|-
keywords|string|关键字|false|-
intro|string|个人介绍|false|-
comefrom|string|来自|false|-
imagePath|string|用户图像图标|false|-
userSignature|string|用户签名|false|-
ipRange|string|登录IP地址(";"分隔）|false|-
macCode|string|允许登录MAC地址(";"分隔）|false|-
resume|string|简历，网格平台使用，人所属的网格多个，分隔|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-
spare3|string|备用3|false|-
spare4|string|备用4|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/baseuserext/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:11",
  "lastTime": "2026-11-09 17:58:11",
  "id": "25",
  "nickname": "crysta.feeney",
  "idName": "carola.harvey",
  "idNum": "mhjpca",
  "idMobile": "337-229-9034",
  "idType": "p6ykxs",
  "namePy": "p4ty7v",
  "sname": "carola.harvey",
  "nameEn": "vc2jpd",
  "searchCode": "12647",
  "sex": "wc7ta3",
  "birthday": "2026-11-09 17:58:11",
  "postCode": "12647",
  "address": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
  "nativePlace": "gr5v8a",
  "familyAddress": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
  "homeTel": "l0vqd5",
  "qqNo": "oetu8k",
  "weixinId": "25",
  "weiboId": "25",
  "spareMobile": "337-229-9034",
  "isMobileConfirm": true,
  "emergencePhone": "662-667-5459",
  "keywords": "n3u698",
  "intro": "lks18z",
  "comefrom": "qu656d",
  "imagePath": "pepgyr",
  "userSignature": "0bzt1i",
  "ipRange": "ua4sy9",
  "macCode": "12647",
  "resume": "6kv035",
  "spare1": "nfo5oj",
  "spare2": "nyipc9",
  "spare3": "1eb180",
  "spare4": "65pndd"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "ai2k4d",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### BaseUserExt Operation. 修改基础用户扩展信息数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/system/baseuserext/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/json; charset=utf-8

**Description:** BaseUserExt Operation. 修改基础用户扩展信息数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|用户ID|false|-
nickname|string|用户昵称|false|-
idName|string|真实姓名，加密的姓名|false|-
idNum|string|身份证号码，加密的身份证号码|false|-
idMobile|string|电话|false|-
idType|string|证件类型|false|-
namePy|string|姓名全拼，BCryptPasswordEncoder密码")|false|-
sname|string|姓名缩写，外部输入填写的姓名|false|-
nameEn|string|姓名英文|false|-
searchCode|string|查询码，名称的拼音首字母|false|-
sex|string|性别GB_XBDM|false|-
birthday|string|出生日期|false|-
postCode|string|家庭邮政编码|false|-
address|string|地址|false|-
nativePlace|string|籍贯GB_XZQHDM_SHENG|false|-
familyAddress|string|家庭地址|false|-
homeTel|string|住宅电话|false|-
qqNo|string|即时通讯QQ号码|false|-
weixinId|string|微信用户名|false|-
weiboId|string|微博用户名|false|-
spareMobile|string|备用手机，紧急手机|false|-
isMobileConfirm|boolean|手机号码是否验证0否1是，是否实名认证|false|-
emergencePhone|string|紧急电话，外部输入填写的身份证号码，外部导入或临时处理的身份证号码|false|-
keywords|string|关键字|false|-
intro|string|个人介绍|false|-
comefrom|string|来自|false|-
imagePath|string|用户图像图标|false|-
userSignature|string|用户签名|false|-
ipRange|string|登录IP地址(";"分隔）|false|-
macCode|string|允许登录MAC地址(";"分隔）|false|-
resume|string|简历，网格平台使用，人所属的网格多个，分隔|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-
spare3|string|备用3|false|-
spare4|string|备用4|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/baseuserext/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:11",
  "lastTime": "2026-11-09 17:58:11",
  "id": "25",
  "nickname": "crysta.feeney",
  "idName": "carola.harvey",
  "idNum": "c4ly75",
  "idMobile": "337-229-9034",
  "idType": "ll40ao",
  "namePy": "6xjrxs",
  "sname": "carola.harvey",
  "nameEn": "4wp9ia",
  "searchCode": "12647",
  "sex": "fj6hvu",
  "birthday": "2026-11-09 17:58:11",
  "postCode": "12647",
  "address": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
  "nativePlace": "q3011n",
  "familyAddress": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
  "homeTel": "xeg7gp",
  "qqNo": "xnlwjs",
  "weixinId": "25",
  "weiboId": "25",
  "spareMobile": "337-229-9034",
  "isMobileConfirm": true,
  "emergencePhone": "662-667-5459",
  "keywords": "9tozsn",
  "intro": "xzui8r",
  "comefrom": "yecaxn",
  "imagePath": "9pqefd",
  "userSignature": "be25ce",
  "ipRange": "s8jf35",
  "macCode": "12647",
  "resume": "x61lly",
  "spare1": "eez8xk",
  "spare2": "zggs39",
  "spare3": "eab2ul",
  "spare4": "t4i39c"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "z5onjx",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### BaseUserExt Operation. 删除基础用户扩展信息数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/system/baseuserext/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** BaseUserExt Operation. 删除基础用户扩展信息数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|用户ID:null;1;1,2,3,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/baseuserext/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "mpl43y",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 平台公共消息读写控制类
### Get PublicNotice list. 获取平台公共消息列表或分页, 返回PublicNotice对象.
**URL:** https://linlan.net/eframe_backend/api/system/notice/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get PublicNotice list. 获取平台公共消息列表或分页, 返回PublicNotice对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|int64|信息ID|false|-
appId|string|应用ID|false|-
organId|string|机构ID|false|-
bizType|string|业务类型1通知公告11促销21模块业务|false|-
type|int32|类型，1通知2公告|false|-
title|string|信息标题|false|-
content|string|信息内容|false|-
msgUrl|string|信息链接，链接平台内地址，可点击访问|false|-
foreignId|string|信息外键，如CONTENT_ID或短彩信网关信息ID|false|-
imagePath|string|图片路径|false|-
iconStyle|string|图标样式|false|-
recvMemberId|string|信息接收会员ID|false|-
recvGroupId|string|信息接收会员组ID|false|-
recvOrganId|string|信息接收部门ID|false|-
recvTargetid|string|接收对象ID或手机号码列表|false|-
status|int32|信息状态(0未启用1正常2关闭)|false|-
creatorId|string|创建管理用户ID|false|-
updatorId|string|维护管理用户ID|false|-
updateTime|string|修改时间|false|-
description|string|描述|false|-
readStatus|string|阅读状态 （查询关联表）|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/list.do?recvOrganId=25&content=opasy4&recvMemberId=25&msgUrl=www.hank-okon.com&startTime=2026-11-09 17:56:55&limit=10&appId=25&bizType=9208v9&updateTime=2026-11-09 17:58:03&recvGroupId=25&iconStyle=3bdhqa&status=521&creatorId=25&readStatus=l1gwz7&imagePath=xetodu&updatorId=25&orderBy=139&title=ukkphg&description=km7w9u&foreignId=25&type=920&organId=25&endTime=2026-11-09 17:56:55&recvTargetid=25&id=761&q=dbjluo&page=1
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|信息ID|-
└─appId|string|应用ID|-
└─organId|string|机构ID|-
└─bizType|string|业务类型1通知公告11促销21模块业务|-
└─type|int32|类型，1通知2公告|-
└─title|string|信息标题|-
└─content|string|信息内容|-
└─msgUrl|string|信息链接，链接平台内地址，可点击访问|-
└─foreignId|string|信息外键，如CONTENT_ID或短彩信网关信息ID|-
└─imagePath|string|图片路径|-
└─iconStyle|string|图标样式|-
└─recvMemberId|string|信息接收会员ID|-
└─recvGroupId|string|信息接收会员组ID|-
└─recvOrganId|string|信息接收部门ID|-
└─recvTargetid|string|接收对象ID或手机号码列表|-
└─status|int32|信息状态(0未启用1正常2关闭)|-
└─updatorId|string|维护管理用户ID|-
└─updateTime|string|修改时间|-
└─description|string|描述|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:04",
      "lastTime": "2026-11-09 17:58:04",
      "id": 595,
      "appId": "25",
      "organId": "25",
      "bizType": "jtj343",
      "type": 755,
      "title": "d1y75x",
      "content": "fz5t1h",
      "msgUrl": "www.hank-okon.com",
      "foreignId": "25",
      "imagePath": "cph1ai",
      "iconStyle": "xzbvpb",
      "recvMemberId": "25",
      "recvGroupId": "25",
      "recvOrganId": "25",
      "recvTargetid": "25",
      "status": 642,
      "updatorId": "25",
      "updateTime": "2026-11-09 17:58:04",
      "description": "sdk3fm"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get PublicNotice list. 获取所有信息列表分页
**URL:** https://linlan.net/eframe_backend/api/system/notice/list/myself.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get PublicNotice list. 获取所有信息列表分页

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|int64|信息ID|false|-
appId|string|应用ID|false|-
organId|string|机构ID|false|-
bizType|string|业务类型1通知公告11促销21模块业务|false|-
type|int32|类型，1通知2公告|false|-
title|string|信息标题|false|-
content|string|信息内容|false|-
msgUrl|string|信息链接，链接平台内地址，可点击访问|false|-
foreignId|string|信息外键，如CONTENT_ID或短彩信网关信息ID|false|-
imagePath|string|图片路径|false|-
iconStyle|string|图标样式|false|-
recvMemberId|string|信息接收会员ID|false|-
recvGroupId|string|信息接收会员组ID|false|-
recvOrganId|string|信息接收部门ID|false|-
recvTargetid|string|接收对象ID或手机号码列表|false|-
status|int32|信息状态(0未启用1正常2关闭)|false|-
creatorId|string|创建管理用户ID|false|-
updatorId|string|维护管理用户ID|false|-
updateTime|string|修改时间|false|-
description|string|描述|false|-
readStatus|string|阅读状态 （查询关联表）|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/list/myself.do?msgUrl=www.hank-okon.com&creatorId=25&description=uq645o&q=e4iley&startTime=2026-11-09 17:56:55&content=tn7tqd&readStatus=8m2w8z&id=667&appId=25&type=944&imagePath=x24x2k&foreignId=25&limit=10&recvMemberId=25&recvTargetid=25&updatorId=25&recvGroupId=25&recvOrganId=25&status=276&page=1&orderBy=546&title=b7skm2&endTime=2026-11-09 17:56:55&iconStyle=dk1k4v&updateTime=2026-11-09 17:58:04&bizType=3u8fln&organId=25
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|信息ID|-
└─appId|string|应用ID|-
└─organId|string|机构ID|-
└─bizType|string|业务类型1通知公告11促销21模块业务|-
└─type|int32|类型，1通知2公告|-
└─title|string|信息标题|-
└─content|string|信息内容|-
└─msgUrl|string|信息链接，链接平台内地址，可点击访问|-
└─foreignId|string|信息外键，如CONTENT_ID或短彩信网关信息ID|-
└─imagePath|string|图片路径|-
└─iconStyle|string|图标样式|-
└─recvMemberId|string|信息接收会员ID|-
└─recvGroupId|string|信息接收会员组ID|-
└─recvOrganId|string|信息接收部门ID|-
└─recvTargetid|string|接收对象ID或手机号码列表|-
└─status|int32|信息状态(0未启用1正常2关闭)|-
└─updatorId|string|维护管理用户ID|-
└─updateTime|string|修改时间|-
└─description|string|描述|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:04",
      "lastTime": "2026-11-09 17:58:04",
      "id": 256,
      "appId": "25",
      "organId": "25",
      "bizType": "4drjuw",
      "type": 125,
      "title": "jylr1y",
      "content": "gyv6wq",
      "msgUrl": "www.hank-okon.com",
      "foreignId": "25",
      "imagePath": "f1fbvr",
      "iconStyle": "t3qj03",
      "recvMemberId": "25",
      "recvGroupId": "25",
      "recvOrganId": "25",
      "recvTargetid": "25",
      "status": 101,
      "updatorId": "25",
      "updateTime": "2026-11-09 17:58:04",
      "description": "063peu"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicNotice Operation. PublicNotice数据操作逻辑，导出操作.
**URL:** https://linlan.net/eframe_backend/api/system/notice/export.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** PublicNotice Operation. PublicNotice数据操作逻辑，导出操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|int64|信息ID|false|-
appId|string|应用ID|false|-
organId|string|机构ID|false|-
bizType|string|业务类型1通知公告11促销21模块业务|false|-
type|int32|类型，1通知2公告|false|-
title|string|信息标题|false|-
content|string|信息内容|false|-
msgUrl|string|信息链接，链接平台内地址，可点击访问|false|-
foreignId|string|信息外键，如CONTENT_ID或短彩信网关信息ID|false|-
imagePath|string|图片路径|false|-
iconStyle|string|图标样式|false|-
recvMemberId|string|信息接收会员ID|false|-
recvGroupId|string|信息接收会员组ID|false|-
recvOrganId|string|信息接收部门ID|false|-
recvTargetid|string|接收对象ID或手机号码列表|false|-
status|int32|信息状态(0未启用1正常2关闭)|false|-
creatorId|string|创建管理用户ID|false|-
updatorId|string|维护管理用户ID|false|-
updateTime|string|修改时间|false|-
description|string|描述|false|-
readStatus|string|阅读状态 （查询关联表）|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/export.do --data 'updateTime=2026-11-09 17:58:04&writer.psOut.trouble=true&content=khr54p&id=181&updatorId=25&writer.psOut.closing=true&imagePath=tlypim&iconStyle=a8045e&writer.trouble=true&orderBy=11&status=629&organId=25&writer.formatter.zero=v&description=oj0b87&contentType=a5aoz6&msgUrl=www.hank-okon.com&committed=true&characterEncoding=yisjaz&bizType=9bb6ph&readStatus=rz99ok&recvTargetid=25&status=529&writer.psOut.closed=true&limit=10&writer.autoFlush=true&writer.psOut.textOut.nChars=439&writer.psOut.autoFlush=true&recvMemberId=25&creatorId=25&appId=25&writer.formatter.lastException.detailMessage=success&page=1&writer.psOut.formatter.zero=r&endTime=2026-11-09 17:56:55&startTime=2026-11-09 17:56:55&q=w2fncf&type=165&recvOrganId=25&writer.psOut.textOut.nextChar=166&title=l82jp1&recvGroupId=25&foreignId=25&bufferSize=10&writer.writeBuffer=0&writer.writeBuffer=0'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "schha0",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get PublicNotice by id. 主键获取平台公共消息详细信息.
**URL:** https://linlan.net/eframe_backend/api/system/notice/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get PublicNotice by id. 主键获取平台公共消息详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|int64|信息ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|信息ID|-
└─appId|string|应用ID|-
└─organId|string|机构ID|-
└─bizType|string|业务类型1通知公告11促销21模块业务|-
└─type|int32|类型，1通知2公告|-
└─title|string|信息标题|-
└─content|string|信息内容|-
└─msgUrl|string|信息链接，链接平台内地址，可点击访问|-
└─foreignId|string|信息外键，如CONTENT_ID或短彩信网关信息ID|-
└─imagePath|string|图片路径|-
└─iconStyle|string|图标样式|-
└─recvMemberId|string|信息接收会员ID|-
└─recvGroupId|string|信息接收会员组ID|-
└─recvOrganId|string|信息接收部门ID|-
└─recvTargetid|string|接收对象ID或手机号码列表|-
└─status|int32|信息状态(0未启用1正常2关闭)|-
└─updatorId|string|维护管理用户ID|-
└─updateTime|string|修改时间|-
└─description|string|描述|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:04",
    "lastTime": "2026-11-09 17:58:04",
    "id": 861,
    "appId": "25",
    "organId": "25",
    "bizType": "9f109s",
    "type": 763,
    "title": "bcvlgu",
    "content": "f8gjku",
    "msgUrl": "www.hank-okon.com",
    "foreignId": "25",
    "imagePath": "m37xfq",
    "iconStyle": "burlvv",
    "recvMemberId": "25",
    "recvGroupId": "25",
    "recvOrganId": "25",
    "recvTargetid": "25",
    "status": 908,
    "updatorId": "25",
    "updateTime": "2026-11-09 17:58:04",
    "description": "wrrab1"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicNotice Operation. 新增平台公共消息数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/system/notice/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/json; charset=utf-8

**Description:** PublicNotice Operation. 新增平台公共消息数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|信息ID|false|-
appId|string|应用ID|false|-
organId|string|机构ID|false|-
bizType|string|业务类型1通知公告11促销21模块业务|false|-
type|int32|类型，1通知2公告|false|-
title|string|信息标题|false|-
content|string|信息内容|false|-
msgUrl|string|信息链接，链接平台内地址，可点击访问|false|-
foreignId|string|信息外键，如CONTENT_ID或短彩信网关信息ID|false|-
imagePath|string|图片路径|false|-
iconStyle|string|图标样式|false|-
recvMemberId|string|信息接收会员ID|false|-
recvGroupId|string|信息接收会员组ID|false|-
recvOrganId|string|信息接收部门ID|false|-
recvTargetid|string|接收对象ID或手机号码列表|false|-
status|int32|信息状态(0未启用1正常2关闭)|false|-
updatorId|string|维护管理用户ID|false|-
updateTime|string|修改时间|false|-
description|string|描述|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:04",
  "lastTime": "2026-11-09 17:58:04",
  "id": 400,
  "appId": "25",
  "organId": "25",
  "bizType": "mnwulx",
  "type": 807,
  "title": "od0lmu",
  "content": "hoz4fn",
  "msgUrl": "www.hank-okon.com",
  "foreignId": "25",
  "imagePath": "c2toki",
  "iconStyle": "nijogo",
  "recvMemberId": "25",
  "recvGroupId": "25",
  "recvOrganId": "25",
  "recvTargetid": "25",
  "status": 220,
  "updatorId": "25",
  "updateTime": "2026-11-09 17:58:04",
  "description": "p2h4aw"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "h941ai",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicNotice Operation. 修改平台公共消息数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/system/notice/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/json; charset=utf-8

**Description:** PublicNotice Operation. 修改平台公共消息数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|信息ID|false|-
appId|string|应用ID|false|-
organId|string|机构ID|false|-
bizType|string|业务类型1通知公告11促销21模块业务|false|-
type|int32|类型，1通知2公告|false|-
title|string|信息标题|false|-
content|string|信息内容|false|-
msgUrl|string|信息链接，链接平台内地址，可点击访问|false|-
foreignId|string|信息外键，如CONTENT_ID或短彩信网关信息ID|false|-
imagePath|string|图片路径|false|-
iconStyle|string|图标样式|false|-
recvMemberId|string|信息接收会员ID|false|-
recvGroupId|string|信息接收会员组ID|false|-
recvOrganId|string|信息接收部门ID|false|-
recvTargetid|string|接收对象ID或手机号码列表|false|-
status|int32|信息状态(0未启用1正常2关闭)|false|-
updatorId|string|维护管理用户ID|false|-
updateTime|string|修改时间|false|-
description|string|描述|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:04",
  "lastTime": "2026-11-09 17:58:04",
  "id": 472,
  "appId": "25",
  "organId": "25",
  "bizType": "ur7cxt",
  "type": 487,
  "title": "vvh8ww",
  "content": "ghzl8z",
  "msgUrl": "www.hank-okon.com",
  "foreignId": "25",
  "imagePath": "ex4tr7",
  "iconStyle": "0mr1te",
  "recvMemberId": "25",
  "recvGroupId": "25",
  "recvOrganId": "25",
  "recvTargetid": "25",
  "status": 936,
  "updatorId": "25",
  "updateTime": "2026-11-09 17:58:04",
  "description": "ife6ni"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "61le4d",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicNotice Operation. 删除平台公共消息数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/system/notice/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** PublicNotice Operation. 删除平台公共消息数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|信息ID:null;1;1,2,3,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "vf2ufh",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicNotice Operation. 将当前账户的未读消息全部设置为已读.
**URL:** https://linlan.net/eframe_backend/api/system/notice/read/all.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** PublicNotice Operation. 将当前账户的未读消息全部设置为已读.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/read/all.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "nvu1lb",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicNotice Operation. 将当前账户的未读消息全部设置为已读.
**URL:** https://linlan.net/eframe_backend/api/system/notice/read/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** PublicNotice Operation. 将当前账户的未读消息全部设置为已读.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|  主键Ids,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/read/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "82ab5i",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicNotice Operation. 将指定的消息设置为未读状态.
**URL:** https://linlan.net/eframe_backend/api/system/notice/unRead/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** PublicNotice Operation. 将指定的消息设置为未读状态.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|主键ID:null;1;1,2,3,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/unRead/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "w3yjlj",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicNotice Operation. . 获取获取未读消息数量
**URL:** https://linlan.net/eframe_backend/api/system/notice/num.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** PublicNotice Operation. . 获取获取未读消息数量

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/num.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "mapKey1": "wejtal",
    "mapKey2": "c8l881"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 平台账号信息读写控制类
### Get CoreAccount list. 获取平台账号信息列表或分页, 返回CoreAccount对象.
**URL:** https://linlan.net/eframe_backend/api/system/account/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get CoreAccount list. 获取平台账号信息列表或分页, 返回CoreAccount对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|string|对接账户ID，外部系统分配的主键|false|-
organId|string|系统机构ID|false|-
appId|string|应用ID|false|-
organName|string|系统机构名称，没有ORGAN_ID时使用|false|-
inoutMode|int32|对接模式0内部接入1内部接出11外部接入20双向40市民云对接类短信平台|false|-
name|string|对接系统或账户名称|false|-
cname|string|对接系统名称中文|false|-
type|int32|对接系统类型1平台应用2APP应用3外部接口|false|-
clientId|string|对接系统CLIENTID，或CORPID|false|-
clientSecret|string|客户密钥|false|-
aesKey|string|AES加解密密钥，备用|false|-
aesIvKey|string|AES iv key，备用|false|-
serverIp|string|对接服务器IP地址或域名|false|-
serverType|string|对接服务器类型，授权类型|false|-
serverUrl|string|默认接口URL，存放CODE_URL，短信网关配置|false|-
serverConf1|string|服务器配置扩展1，MODE为11时，访问IP地址白名单，,分隔；MODE为40时，|false|-
serverConf2|string|服务器配置扩展2，MODE为40时，消息发送方式001,111,100,010等，第一位为发送站内信，第二位为短信，第三位为彩信|false|-
serverConf3|string|服务器配置扩展3，MODE为1时平台类型，如果共用SMY体系，此时填写smy，多个市民云体系的APP可以用一套模式接入；MODE为40时，短信模板|false|-
currCount|int32|当前调用次数|false|-
confLimit|int32|每日限制调用次数(0无限制)|false|-
isAdmin|boolean|是否默认管理后台API账户，是否开启前后端加密，如果开启则使用公钥私钥|false|-
isSingle|boolean|是否限制单设备同时登陆|false|-
isDisabled|boolean|是否禁用0否1是|false|-
status|int32|对接系统状态0不可用1可用2过期|false|-
description|string|对接系统描述|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/account/list.do?cname=carola.harvey&aesIvKey=ess26m&name=carola.harvey&endTime=2026-11-09 17:56:55&limit=10&serverIp=79.62.69.121&clientSecret=6wrcvy&serverConf2=dkmty5&confLimit=10&organId=25&startTime=2026-11-09 17:56:55&appId=25&serverUrl=www.hank-okon.com&serverConf1=w1jgwq&spare2=zj0xjk&isAdmin=true&type=684&serverType=3685b6&serverConf3=bgl0yb&spare1=b3dyi0&status=320&isSingle=true&q=roojk6&id=25&currCount=922&isDisabled=true&page=1&inoutMode=941&orderBy=534&description=4glh4y&organName=carola.harvey&clientId=25&aesKey=761m7c
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|对接账户ID，外部系统分配的主键|-
└─organId|string|系统机构ID|-
└─appId|string|应用ID|-
└─organName|string|系统机构名称，没有ORGAN_ID时使用|-
└─inoutMode|int32|对接模式0内部接入1内部接出11外部接入20双向40市民云对接类短信平台|-
└─name|string|对接系统或账户名称，开放平台认证平台名称|-
└─cname|string|对接系统名称中文|-
└─type|int32|对接系统类型1平台应用2APP应用3外部接口|-
└─clientId|string|对接系统CLIENTID，或CORPID|-
└─clientSecret|string|客户密钥|-
└─aesKey|string|AES加解密密钥，备用|-
└─aesIvKey|string|AES iv key，备用|-
└─serverIp|string|对接服务器IP地址或域名|-
└─serverType|string|对接服务器类型，授权类型，开放平台认证平台类型|-
└─serverUrl|string|默认接口URL，存放CODE_URL，短信网关配置|-
└─serverConf1|string|服务器配置扩展1，MODE为11时，访问IP地址白名单，,分隔；MODE为40时，|-
└─serverConf2|string|服务器配置扩展2，MODE为40时，消息发送方式001,111,100,010等，第一位为发送站内信，第二位为短信，第三位为彩信|-
└─serverConf3|string|服务器配置扩展3，MODE为1时平台类型，如果共用SMY体系，此时填写smy，多个市民云体系的APP可以用一套模式接入；MODE为40时，短信模板|-
└─currCount|int32|当前调用次数|-
└─confLimit|int32|每日限制调用次数(0无限制)|-
└─isAdmin|boolean|是否默认管理后台API账户，是否开启前后端加密，如果开启则使用公钥私钥|-
└─isSingle|boolean|是否限制单设备同时登陆|-
└─isDisabled|boolean|是否禁用0否1是|-
└─status|int32|对接系统状态0不可用1可用2过期|-
└─description|string|对接系统描述|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
└─inOrganName|string|内部系统名称|-
└─userName|string|用户名称|-
└─appName|string|应用名称|-
└─inoutModeName|string|对接模式名字|-
└─typeName|string|平台类型名字|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:13",
      "lastTime": "2026-11-09 17:58:13",
      "id": "25",
      "organId": "25",
      "appId": "25",
      "organName": "carola.harvey",
      "inoutMode": 792,
      "name": "carola.harvey",
      "cname": "carola.harvey",
      "type": 863,
      "clientId": "25",
      "clientSecret": "n0nic4",
      "aesKey": "auj0i2",
      "aesIvKey": "ekfxph",
      "serverIp": "79.62.69.121",
      "serverType": "zu9x3n",
      "serverUrl": "www.hank-okon.com",
      "serverConf1": "8u3hem",
      "serverConf2": "2ksbfv",
      "serverConf3": "veiyna",
      "currCount": 82,
      "confLimit": 10,
      "isAdmin": true,
      "isSingle": true,
      "isDisabled": true,
      "status": 574,
      "description": "p5fvym",
      "spare1": "s8vne3",
      "spare2": "7bk8o9",
      "inOrganName": "carola.harvey",
      "userName": "carola.harvey",
      "appName": "carola.harvey",
      "inoutModeName": "carola.harvey",
      "typeName": "carola.harvey"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 平台账户生成密钥对
**URL:** https://linlan.net/eframe_backend/api/system/account/getClientSecret.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 平台账户生成密钥对

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
clientId|string| 客户ID|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/account/getClientSecret.do?clientId=25
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|对接账户ID，外部系统分配的主键|-
└─organId|string|系统机构ID|-
└─appId|string|应用ID|-
└─organName|string|系统机构名称，没有ORGAN_ID时使用|-
└─inoutMode|int32|对接模式0内部接入1内部接出11外部接入20双向40市民云对接类短信平台|-
└─name|string|对接系统或账户名称，开放平台认证平台名称|-
└─cname|string|对接系统名称中文|-
└─type|int32|对接系统类型1平台应用2APP应用3外部接口|-
└─clientId|string|对接系统CLIENTID，或CORPID|-
└─clientSecret|string|客户密钥|-
└─aesKey|string|AES加解密密钥，备用|-
└─aesIvKey|string|AES iv key，备用|-
└─serverIp|string|对接服务器IP地址或域名|-
└─serverType|string|对接服务器类型，授权类型，开放平台认证平台类型|-
└─serverUrl|string|默认接口URL，存放CODE_URL，短信网关配置|-
└─serverConf1|string|服务器配置扩展1，MODE为11时，访问IP地址白名单，,分隔；MODE为40时，|-
└─serverConf2|string|服务器配置扩展2，MODE为40时，消息发送方式001,111,100,010等，第一位为发送站内信，第二位为短信，第三位为彩信|-
└─serverConf3|string|服务器配置扩展3，MODE为1时平台类型，如果共用SMY体系，此时填写smy，多个市民云体系的APP可以用一套模式接入；MODE为40时，短信模板|-
└─currCount|int32|当前调用次数|-
└─confLimit|int32|每日限制调用次数(0无限制)|-
└─isAdmin|boolean|是否默认管理后台API账户，是否开启前后端加密，如果开启则使用公钥私钥|-
└─isSingle|boolean|是否限制单设备同时登陆|-
└─isDisabled|boolean|是否禁用0否1是|-
└─status|int32|对接系统状态0不可用1可用2过期|-
└─description|string|对接系统描述|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
└─inOrganName|string|内部系统名称|-
└─userName|string|用户名称|-
└─appName|string|应用名称|-
└─inoutModeName|string|对接模式名字|-
└─typeName|string|平台类型名字|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:13",
      "lastTime": "2026-11-09 17:58:13",
      "id": "25",
      "organId": "25",
      "appId": "25",
      "organName": "carola.harvey",
      "inoutMode": 696,
      "name": "carola.harvey",
      "cname": "carola.harvey",
      "type": 574,
      "clientId": "25",
      "clientSecret": "emmj9k",
      "aesKey": "s5wlay",
      "aesIvKey": "xnsvf6",
      "serverIp": "79.62.69.121",
      "serverType": "wuhdix",
      "serverUrl": "www.hank-okon.com",
      "serverConf1": "ql1spm",
      "serverConf2": "vkqgei",
      "serverConf3": "h7oybb",
      "currCount": 515,
      "confLimit": 10,
      "isAdmin": true,
      "isSingle": true,
      "isDisabled": true,
      "status": 608,
      "description": "5122sq",
      "spare1": "qqneka",
      "spare2": "aomav0",
      "inOrganName": "carola.harvey",
      "userName": "carola.harvey",
      "appName": "carola.harvey",
      "inoutModeName": "carola.harvey",
      "typeName": "carola.harvey"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 生成平台密钥对
**URL:** https://linlan.net/eframe_backend/api/system/account/getKeyParity.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 生成平台密钥对

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|   账号ID|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/account/getKeyParity.do?id=25
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|对接账户ID，外部系统分配的主键|-
└─organId|string|系统机构ID|-
└─appId|string|应用ID|-
└─organName|string|系统机构名称，没有ORGAN_ID时使用|-
└─inoutMode|int32|对接模式0内部接入1内部接出11外部接入20双向40市民云对接类短信平台|-
└─name|string|对接系统或账户名称，开放平台认证平台名称|-
└─cname|string|对接系统名称中文|-
└─type|int32|对接系统类型1平台应用2APP应用3外部接口|-
└─clientId|string|对接系统CLIENTID，或CORPID|-
└─clientSecret|string|客户密钥|-
└─aesKey|string|AES加解密密钥，备用|-
└─aesIvKey|string|AES iv key，备用|-
└─serverIp|string|对接服务器IP地址或域名|-
└─serverType|string|对接服务器类型，授权类型，开放平台认证平台类型|-
└─serverUrl|string|默认接口URL，存放CODE_URL，短信网关配置|-
└─serverConf1|string|服务器配置扩展1，MODE为11时，访问IP地址白名单，,分隔；MODE为40时，|-
└─serverConf2|string|服务器配置扩展2，MODE为40时，消息发送方式001,111,100,010等，第一位为发送站内信，第二位为短信，第三位为彩信|-
└─serverConf3|string|服务器配置扩展3，MODE为1时平台类型，如果共用SMY体系，此时填写smy，多个市民云体系的APP可以用一套模式接入；MODE为40时，短信模板|-
└─currCount|int32|当前调用次数|-
└─confLimit|int32|每日限制调用次数(0无限制)|-
└─isAdmin|boolean|是否默认管理后台API账户，是否开启前后端加密，如果开启则使用公钥私钥|-
└─isSingle|boolean|是否限制单设备同时登陆|-
└─isDisabled|boolean|是否禁用0否1是|-
└─status|int32|对接系统状态0不可用1可用2过期|-
└─description|string|对接系统描述|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
└─inOrganName|string|内部系统名称|-
└─userName|string|用户名称|-
└─appName|string|应用名称|-
└─inoutModeName|string|对接模式名字|-
└─typeName|string|平台类型名字|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:13",
      "lastTime": "2026-11-09 17:58:13",
      "id": "25",
      "organId": "25",
      "appId": "25",
      "organName": "carola.harvey",
      "inoutMode": 643,
      "name": "carola.harvey",
      "cname": "carola.harvey",
      "type": 486,
      "clientId": "25",
      "clientSecret": "29b0w0",
      "aesKey": "4oh46t",
      "aesIvKey": "klqeiw",
      "serverIp": "79.62.69.121",
      "serverType": "cn389c",
      "serverUrl": "www.hank-okon.com",
      "serverConf1": "5n3u4b",
      "serverConf2": "ocbwbg",
      "serverConf3": "fetkd9",
      "currCount": 698,
      "confLimit": 10,
      "isAdmin": true,
      "isSingle": true,
      "isDisabled": true,
      "status": 482,
      "description": "vpmb45",
      "spare1": "lysw6u",
      "spare2": "5uo5jh",
      "inOrganName": "carola.harvey",
      "userName": "carola.harvey",
      "appName": "carola.harvey",
      "inoutModeName": "carola.harvey",
      "typeName": "carola.harvey"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get CoreAccount by id. 主键获取平台账号信息详细信息.
**URL:** https://linlan.net/eframe_backend/api/system/account/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get CoreAccount by id. 主键获取平台账号信息详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|信息ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/account/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|对接账户ID，外部系统分配的主键|-
└─organId|string|系统机构ID|-
└─appId|string|应用ID|-
└─organName|string|系统机构名称，没有ORGAN_ID时使用|-
└─inoutMode|int32|对接模式0内部接入1内部接出11外部接入20双向40市民云对接类短信平台|-
└─name|string|对接系统或账户名称，开放平台认证平台名称|-
└─cname|string|对接系统名称中文|-
└─type|int32|对接系统类型1平台应用2APP应用3外部接口|-
└─clientId|string|对接系统CLIENTID，或CORPID|-
└─clientSecret|string|客户密钥|-
└─aesKey|string|AES加解密密钥，备用|-
└─aesIvKey|string|AES iv key，备用|-
└─serverIp|string|对接服务器IP地址或域名|-
└─serverType|string|对接服务器类型，授权类型，开放平台认证平台类型|-
└─serverUrl|string|默认接口URL，存放CODE_URL，短信网关配置|-
└─serverConf1|string|服务器配置扩展1，MODE为11时，访问IP地址白名单，,分隔；MODE为40时，|-
└─serverConf2|string|服务器配置扩展2，MODE为40时，消息发送方式001,111,100,010等，第一位为发送站内信，第二位为短信，第三位为彩信|-
└─serverConf3|string|服务器配置扩展3，MODE为1时平台类型，如果共用SMY体系，此时填写smy，多个市民云体系的APP可以用一套模式接入；MODE为40时，短信模板|-
└─currCount|int32|当前调用次数|-
└─confLimit|int32|每日限制调用次数(0无限制)|-
└─isAdmin|boolean|是否默认管理后台API账户，是否开启前后端加密，如果开启则使用公钥私钥|-
└─isSingle|boolean|是否限制单设备同时登陆|-
└─isDisabled|boolean|是否禁用0否1是|-
└─status|int32|对接系统状态0不可用1可用2过期|-
└─description|string|对接系统描述|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{"success":true,"code":0,"msg":"正常","data":Error restful return.,"requestId":"25","timestamp":"2026-11-09 17:56:55"}
```

### CoreAccount Operation. 新增平台账号信息数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/system/account/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** CoreAccount Operation. 新增平台账号信息数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/account/save.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "tog74n",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreAccount Operation. 修改平台账号信息数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/system/account/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** CoreAccount Operation. 修改平台账号信息数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/account/update.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "5t9shi",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreAccount Operation. 删除平台账号信息数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/system/account/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** CoreAccount Operation. 删除平台账号信息数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|信息ID:null;1;1,2,3,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/account/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "r5u957",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取社交授权平台账号列表
**URL:** https://linlan.net/eframe_backend/api/system/account/authlist.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取社交授权平台账号列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|string|对接账户ID，外部系统分配的主键|false|-
organId|string|系统机构ID|false|-
appId|string|应用ID|false|-
organName|string|系统机构名称，没有ORGAN_ID时使用|false|-
inoutMode|int32|对接模式0内部接入1内部接出11外部接入20双向40市民云对接类短信平台|false|-
name|string|对接系统或账户名称|false|-
cname|string|对接系统名称中文|false|-
type|int32|对接系统类型1平台应用2APP应用3外部接口|false|-
clientId|string|对接系统CLIENTID，或CORPID|false|-
clientSecret|string|客户密钥|false|-
aesKey|string|AES加解密密钥，备用|false|-
aesIvKey|string|AES iv key，备用|false|-
serverIp|string|对接服务器IP地址或域名|false|-
serverType|string|对接服务器类型，授权类型|false|-
serverUrl|string|默认接口URL，存放CODE_URL，短信网关配置|false|-
serverConf1|string|服务器配置扩展1，MODE为11时，访问IP地址白名单，,分隔；MODE为40时，|false|-
serverConf2|string|服务器配置扩展2，MODE为40时，消息发送方式001,111,100,010等，第一位为发送站内信，第二位为短信，第三位为彩信|false|-
serverConf3|string|服务器配置扩展3，MODE为1时平台类型，如果共用SMY体系，此时填写smy，多个市民云体系的APP可以用一套模式接入；MODE为40时，短信模板|false|-
currCount|int32|当前调用次数|false|-
confLimit|int32|每日限制调用次数(0无限制)|false|-
isAdmin|boolean|是否默认管理后台API账户，是否开启前后端加密，如果开启则使用公钥私钥|false|-
isSingle|boolean|是否限制单设备同时登陆|false|-
isDisabled|boolean|是否禁用0否1是|false|-
status|int32|对接系统状态0不可用1可用2过期|false|-
description|string|对接系统描述|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/account/authlist.do?serverConf1=80jw79&serverType=qly6yz&clientSecret=1spqzm&serverUrl=www.hank-okon.com&spare2=26xpgw&cname=carola.harvey&startTime=2026-11-09 17:56:55&q=ll1baw&spare1=nnzd71&type=868&appId=25&isDisabled=true&serverIp=79.62.69.121&name=carola.harvey&aesIvKey=yqoqw5&endTime=2026-11-09 17:56:55&aesKey=gmddu6&limit=10&clientId=25&status=919&description=rzlvvl&inoutMode=541&page=1&isAdmin=true&isSingle=true&currCount=756&organName=carola.harvey&serverConf3=z8ml33&confLimit=10&orderBy=619&serverConf2=ctf94i&id=25&organId=25
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|对接账户ID，外部系统分配的主键|-
└─organId|string|系统机构ID|-
└─appId|string|应用ID|-
└─organName|string|系统机构名称，没有ORGAN_ID时使用|-
└─inoutMode|int32|对接模式0内部接入1内部接出11外部接入20双向40市民云对接类短信平台|-
└─name|string|对接系统或账户名称，开放平台认证平台名称|-
└─cname|string|对接系统名称中文|-
└─type|int32|对接系统类型1平台应用2APP应用3外部接口|-
└─clientId|string|对接系统CLIENTID，或CORPID|-
└─clientSecret|string|客户密钥|-
└─aesKey|string|AES加解密密钥，备用|-
└─aesIvKey|string|AES iv key，备用|-
└─serverIp|string|对接服务器IP地址或域名|-
└─serverType|string|对接服务器类型，授权类型，开放平台认证平台类型|-
└─serverUrl|string|默认接口URL，存放CODE_URL，短信网关配置|-
└─serverConf1|string|服务器配置扩展1，MODE为11时，访问IP地址白名单，,分隔；MODE为40时，|-
└─serverConf2|string|服务器配置扩展2，MODE为40时，消息发送方式001,111,100,010等，第一位为发送站内信，第二位为短信，第三位为彩信|-
└─serverConf3|string|服务器配置扩展3，MODE为1时平台类型，如果共用SMY体系，此时填写smy，多个市民云体系的APP可以用一套模式接入；MODE为40时，短信模板|-
└─currCount|int32|当前调用次数|-
└─confLimit|int32|每日限制调用次数(0无限制)|-
└─isAdmin|boolean|是否默认管理后台API账户，是否开启前后端加密，如果开启则使用公钥私钥|-
└─isSingle|boolean|是否限制单设备同时登陆|-
└─isDisabled|boolean|是否禁用0否1是|-
└─status|int32|对接系统状态0不可用1可用2过期|-
└─description|string|对接系统描述|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
└─inOrganName|string|内部系统名称|-
└─userName|string|用户名称|-
└─appName|string|应用名称|-
└─inoutModeName|string|对接模式名字|-
└─typeName|string|平台类型名字|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:13",
      "lastTime": "2026-11-09 17:58:13",
      "id": "25",
      "organId": "25",
      "appId": "25",
      "organName": "carola.harvey",
      "inoutMode": 272,
      "name": "carola.harvey",
      "cname": "carola.harvey",
      "type": 362,
      "clientId": "25",
      "clientSecret": "1hdi2c",
      "aesKey": "18mguc",
      "aesIvKey": "j3fm9a",
      "serverIp": "79.62.69.121",
      "serverType": "yr31tu",
      "serverUrl": "www.hank-okon.com",
      "serverConf1": "gagg68",
      "serverConf2": "we7c8c",
      "serverConf3": "obvwrq",
      "currCount": 962,
      "confLimit": 10,
      "isAdmin": true,
      "isSingle": true,
      "isDisabled": true,
      "status": 87,
      "description": "xrykcd",
      "spare1": "omz0i0",
      "spare2": "4aucfe",
      "inOrganName": "carola.harvey",
      "userName": "carola.harvey",
      "appName": "carola.harvey",
      "inoutModeName": "carola.harvey",
      "typeName": "carola.harvey"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 平台首页入口
### 访问首页，提示语
**URL:** https://linlan.net/eframe_backend/.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 访问首页，提示语

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "frzj5c",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 工作台应用支撑统计
**URL:** https://linlan.net/eframe_backend/api/admin/index/application.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 工作台应用支撑统计

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/index/application.do?limit=10&orderBy=832&startTime=2026-11-09 17:56:55&q=99stkf&endTime=2026-11-09 17:56:55&page=1
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─organNum|string|机构数|-
└─deptNum|string|部门数|-
└─peopleNum|string|人员数|-
└─roleNum|string|角色数|-
└─dicTypeNum|string|数据字典分类数|-
└─appNum|string|应用数|-
└─fileNum|string|资源存储数|-
└─paramNum|string|参数数|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "organNum": "rjawxw",
      "deptNum": "wrdj1y",
      "peopleNum": "i7lz3v",
      "roleNum": "cdbs2e",
      "dicTypeNum": "tdpc4y",
      "appNum": "aieu5r",
      "fileNum": "bb0i9v",
      "paramNum": "bhugy3"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 工作台要素支撑统计
**URL:** https://linlan.net/eframe_backend/api/admin/index/element.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 工作台要素支撑统计

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/index/element.do?q=5lidu6&endTime=2026-11-09 17:56:55&page=1&startTime=2026-11-09 17:56:55&orderBy=172&limit=10
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─objectNum|string|对象数|-
└─modelNum|string|模型数|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "objectNum": "p76b32",
      "modelNum": "y8yxez"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 工作台管理支撑统计
**URL:** https://linlan.net/eframe_backend/api/admin/index/manage.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 工作台管理支撑统计

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/index/manage.do?q=60qpcz&startTime=2026-11-09 17:56:55&page=1&endTime=2026-11-09 17:56:55&limit=10&orderBy=810
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─appNum|string|应用数|-
└─accountNum|string|平台账户数|-
└─serviceOrganNum|string|服务商数|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "appNum": "h8k0q5",
      "accountNum": "f79si3",
      "serviceOrganNum": "s9549l"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 应用管理读写控制类
### 获取应用下拉列表
**URL:** https://linlan.net/eframe_backend/api/system/app/selectList.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取应用下拉列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
ftpId|string|资源存储ID|false|-
domainId|string|域平台编号|false|-
organId|string|单位编码，所属单位，管理单位|false|-
xzqhId|int64|应用适用顶级行政区划ID|false|-
sertypeId|string|应用服务类型ID|false|-
name|string|应用名称|false|-
path|string|应用访问路径|false|-
appType|string|应用类型，QUANBU全部领域，WORK工作端，H5移动端，SCREEN大屏端；B/S，C/S，独立应用，可多选|false|-
isSite|boolean|是否站点，如果是站点，则SITE内存在记录|false|-
isDisabled|boolean|是否禁用0否1是|false|-
isMobileApp|boolean|是否为复杂权限应用0否（一般应用APP应用）1是|false|-
status|int32|状态0异常关闭1正常2升级3锁定|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|描述|false|-
existKey|string|关键字查询，以前的保留，以后用q|false|-
mode|int32|模式|false|-
ids|array|No comments found.|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/selectList.do?q=wf3yhw&domainId=25&ftpId=25&name=carola.harvey&appType=9wigia&existKey=n3euw2&path=5cg3hj&mode=978&xzqhId=525&description=yqwh0b&isMobileApp=true&delFlag=5&sertypeId=25&isDisabled=true&organId=25&ids=rmt9sr&ids=rmt9sr&startTime=2026-11-09 17:56:55&endTime=2026-11-09 17:56:55&status=511&limit=10&orderBy=316&page=1&isSite=true
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|应用ID|-
└─ftpId|string|文件上传配置ID|-
└─domainId|string|域平台编号|-
└─organId|string|单位编码，所属单位，管理单位|-
└─xzqhId|int64|应用适用顶级行政区划ID|-
└─sertypeId|string|应用服务类型ID|-
└─name|string|应用名称|-
└─path|string|应用访问路径|-
└─appType|string|应用类型，QUANBU全部领域，WORK工作端，H5移动端，SCREEN大屏端；B/S，C/S，独立应用，可多选|-
└─isSite|boolean|是否站点，如果是站点，则SITE内存在记录|-
└─isDisabled|boolean|是否禁用0否1是|-
└─isMobileApp|boolean|是否为复杂权限应用0否（一般应用APP应用）1是|-
└─status|int32|状态0异常关闭1正常2升级3锁定|-
└─priority|int32|排序|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─deleteTime|string|删除时间|-
└─description|string|描述|-
└─spare1|string|备用1，LOGO图标|-
└─spare2|string|备用2|-
└─xzqhName|string|行政区划名称|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:11",
      "lastTime": "2026-11-09 17:58:11",
      "id": "25",
      "ftpId": "25",
      "domainId": "25",
      "organId": "25",
      "xzqhId": 44,
      "sertypeId": "25",
      "name": "carola.harvey",
      "path": "hqadq0",
      "appType": "wsd5fj",
      "isSite": true,
      "isDisabled": true,
      "isMobileApp": true,
      "status": 160,
      "priority": 325,
      "delFlag": 5,
      "deleteTime": "2026-11-09 17:58:11",
      "description": "uae3c0",
      "spare1": "g0vcxc",
      "spare2": "psoyh2",
      "xzqhName": "carola.harvey"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取应用列表
**URL:** https://linlan.net/eframe_backend/api/system/app/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取应用列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
ftpId|string|资源存储ID|false|-
domainId|string|域平台编号|false|-
organId|string|单位编码，所属单位，管理单位|false|-
xzqhId|int64|应用适用顶级行政区划ID|false|-
sertypeId|string|应用服务类型ID|false|-
name|string|应用名称|false|-
path|string|应用访问路径|false|-
appType|string|应用类型，B/S，C/S|false|-
isSite|boolean|是否站点，如果是站点，则SITE内存在记录|false|-
isDisabled|boolean|是否禁用0否1是|false|-
isMobileApp|boolean|是否为复杂权限应用0否（一般应用APP应用）1是|false|-
status|int32|状态0异常关闭1正常2升级3锁定|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|描述|false|-
existKey|string|关键字查询，以前的保留，以后用q|false|-
mode|int32|模式|false|-
ids|array|No comments found.|false|-
idArr|string|id字符串|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/list.do?isSite=true&xzqhId=312&sertypeId=25&description=rdkzh1&isMobileApp=true&startTime=2026-11-09 17:56:55&q=9xbsvr&name=carola.harvey&appType=swjnqx&mode=133&ftpId=25&domainId=25&isDisabled=true&orderBy=191&organId=25&idArr=wd9e6y&existKey=07o7rv&page=1&path=26hz0w&status=402&endTime=2026-11-09 17:56:55&ids=0nq0hx&ids=0nq0hx&delFlag=5&limit=10
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─totalCount|int32|总记录数 the total count|-
└─pageSize|int32|每页记录数 the page size|-
└─totalPage|int32|总页数 the total page|-
└─currPage|int32|当前页数 the current page|-
└─list|array|列表数据 the list|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|string|应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ftpId|string|文件上传配置ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domainId|string|域平台编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|单位编码，所属单位，管理单位|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─xzqhId|int64|应用适用顶级行政区划ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sertypeId|string|应用服务类型ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|应用名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|应用访问路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appType|string|应用类型，QUANBU全部领域，WORK工作端，H5移动端，SCREEN大屏端；B/S，C/S，独立应用，可多选|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isSite|boolean|是否站点，如果是站点，则SITE内存在记录|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isDisabled|boolean|是否禁用0否1是|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isMobileApp|boolean|是否为复杂权限应用0否（一般应用APP应用）1是|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0异常关闭1正常2升级3锁定|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deleteTime|string|删除时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare1|string|备用1，LOGO图标|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare2|string|备用2|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─xzqhName|string|行政区划名称|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "totalCount": 123,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:11",
        "lastTime": "2026-11-09 17:58:11",
        "id": "25",
        "ftpId": "25",
        "domainId": "25",
        "organId": "25",
        "xzqhId": 904,
        "sertypeId": "25",
        "name": "carola.harvey",
        "path": "48f42o",
        "appType": "sj9i5r",
        "isSite": true,
        "isDisabled": true,
        "isMobileApp": true,
        "status": 915,
        "priority": 119,
        "delFlag": 5,
        "deleteTime": "2026-11-09 17:58:11",
        "description": "wcw98r",
        "spare1": "nvad48",
        "spare2": "sgm2ko",
        "xzqhName": "carola.harvey"
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 应用列表导出
**URL:** https://linlan.net/eframe_backend/api/system/app/export.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 应用列表导出

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
ftpId|string|资源存储ID|false|-
domainId|string|域平台编号|false|-
organId|string|单位编码，所属单位，管理单位|false|-
xzqhId|int64|应用适用顶级行政区划ID|false|-
sertypeId|string|应用服务类型ID|false|-
name|string|应用名称|false|-
path|string|应用访问路径|false|-
appType|string|应用类型，B/S，C/S|false|-
isSite|boolean|是否站点，如果是站点，则SITE内存在记录|false|-
isDisabled|boolean|是否禁用0否1是|false|-
isMobileApp|boolean|是否为复杂权限应用0否（一般应用APP应用）1是|false|-
status|int32|状态0异常关闭1正常2升级3锁定|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|描述|false|-
existKey|string|关键字查询，以前的保留，以后用q|false|-
mode|int32|模式|false|-
ids|array|No comments found.|false|-
idArr|string|id字符串|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/export.do --data 'domainId=25&page=1&ftpId=25&writer.writeBuffer=x&writer.writeBuffer=x&writer.psOut.closed=true&status=471&bufferSize=10&writer.psOut.closing=true&mode=849&endTime=2026-11-09 17:56:55&orderBy=314&description=1srn7e&writer.trouble=true&q=1zsfuh&isDisabled=true&status=71&writer.psOut.autoFlush=true&idArr=fyiieu&writer.autoFlush=true&existKey=n00u1w&isSite=true&startTime=2026-11-09 17:56:55&xzqhId=228&writer.formatter.lastException.detailMessage=success&committed=true&writer.psOut.trouble=true&appType=ktm6o8&writer.formatter.zero=9&name=carola.harvey&ids=a82lvj&ids=a82lvj&writer.psOut.textOut.nChars=76&contentType=dilkc9&path=u7m41w&characterEncoding=iacwi9&limit=10&writer.psOut.textOut.nextChar=12&isMobileApp=true&sertypeId=25&delFlag=5&organId=25&writer.psOut.formatter.zero=1'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "6noxo3",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据参数编号获取详细信息
**URL:** https://linlan.net/eframe_backend/api/system/app/{appId}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据参数编号获取详细信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
appId|string| 参数ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/25.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|应用ID|-
└─ftpId|string|文件上传配置ID|-
└─domainId|string|域平台编号|-
└─organId|string|单位编码，所属单位，管理单位|-
└─xzqhId|int64|应用适用顶级行政区划ID|-
└─sertypeId|string|应用服务类型ID|-
└─name|string|应用名称|-
└─path|string|应用访问路径|-
└─appType|string|应用类型，QUANBU全部领域，WORK工作端，H5移动端，SCREEN大屏端；B/S，C/S，独立应用，可多选|-
└─isSite|boolean|是否站点，如果是站点，则SITE内存在记录|-
└─isDisabled|boolean|是否禁用0否1是|-
└─isMobileApp|boolean|是否为复杂权限应用0否（一般应用APP应用）1是|-
└─status|int32|状态0异常关闭1正常2升级3锁定|-
└─priority|int32|排序|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─deleteTime|string|删除时间|-
└─description|string|描述|-
└─spare1|string|备用1，LOGO图标|-
└─spare2|string|备用2|-
└─xzqhName|string|行政区划名称|-
└─ftpName|string|全局文件上传服务器名称|-
└─sertypeName|string|服务类型名称|-
└─domainName|string|域平台名称|-
└─organName|string|机构名称|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:11",
    "lastTime": "2026-11-09 17:58:11",
    "id": "25",
    "ftpId": "25",
    "domainId": "25",
    "organId": "25",
    "xzqhId": 995,
    "sertypeId": "25",
    "name": "carola.harvey",
    "path": "m74xc6",
    "appType": "3urx2g",
    "isSite": true,
    "isDisabled": true,
    "isMobileApp": true,
    "status": 364,
    "priority": 797,
    "delFlag": 5,
    "deleteTime": "2026-11-09 17:58:11",
    "description": "78l4tk",
    "spare1": "3m6idn",
    "spare2": "kvl5zf",
    "xzqhName": "carola.harvey",
    "ftpName": "carola.harvey",
    "sertypeName": "carola.harvey",
    "domainName": "carola.harvey",
    "organName": "carola.harvey"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增应用配置
**URL:** https://linlan.net/eframe_backend/api/system/app/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/json; charset=utf-8

**Description:** 新增应用配置

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|应用ID|false|-
ftpId|string|文件上传配置ID|false|-
ftpName|string|资源仓库名称|false|-
domainId|string|域平台编号|false|-
domainName|string|域平台名称|false|-
organId|string|单位编码，所属单位，管理单位|false|-
organName|string|机构名称|false|-
xzqhId|int64|应用适用顶级行政区划ID|false|-
xzqhName|string|应用适用顶级行政区划名称|false|-
sertypeId|string|应用服务类型ID|false|-
name|string|应用名称|false|-
path|string|应用访问路径|false|-
appType|string|应用类型，QUANBU全部领域，WORK工作端，H5移动端，SCREEN大屏端；B/S，C/S，独立应用，可多选|false|-
isSite|boolean|是否站点，如果是站点，则SITE内存在记录|false|-
isOpen|boolean|是否启用0否1是|false|-
isMobileApp|boolean|是否为复杂权限应用0否（一般应用APP应用）1是|false|-
status|int32|状态0异常关闭1正常2升级3锁定|false|-
statusName|string|状态，0异常关闭1正常2升级|false|-
priority|int32|排序|false|-
createTime|string|创建时间|false|-
description|string|描述|false|-
spare1|string|备用1，LOGO图标|false|-
statusMap|object|No comments found.|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/save.do --data '{
  "id": "25",
  "ftpId": "25",
  "ftpName": "carola.harvey",
  "domainId": "25",
  "domainName": "carola.harvey",
  "organId": "25",
  "organName": "carola.harvey",
  "xzqhId": 678,
  "xzqhName": "carola.harvey",
  "sertypeId": "25",
  "name": "carola.harvey",
  "path": "lcvxu4",
  "appType": "9g1v6r",
  "isSite": true,
  "isOpen": true,
  "isMobileApp": true,
  "status": 198,
  "statusName": "carola.harvey",
  "priority": 590,
  "createTime": "2026-11-09 17:58:11",
  "description": "r8upef",
  "spare1": "3jsy13",
  "statusMap": {
    "mapKey": "3ow7be"
  }
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "9nxahc",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改应用配置
**URL:** https://linlan.net/eframe_backend/api/system/app/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/json; charset=utf-8

**Description:** 修改应用配置

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|应用ID|false|-
ftpId|string|文件上传配置ID|false|-
ftpName|string|资源仓库名称|false|-
domainId|string|域平台编号|false|-
domainName|string|域平台名称|false|-
organId|string|单位编码，所属单位，管理单位|false|-
organName|string|机构名称|false|-
xzqhId|int64|应用适用顶级行政区划ID|false|-
xzqhName|string|应用适用顶级行政区划名称|false|-
sertypeId|string|应用服务类型ID|false|-
name|string|应用名称|false|-
path|string|应用访问路径|false|-
appType|string|应用类型，QUANBU全部领域，WORK工作端，H5移动端，SCREEN大屏端；B/S，C/S，独立应用，可多选|false|-
isSite|boolean|是否站点，如果是站点，则SITE内存在记录|false|-
isOpen|boolean|是否启用0否1是|false|-
isMobileApp|boolean|是否为复杂权限应用0否（一般应用APP应用）1是|false|-
status|int32|状态0异常关闭1正常2升级3锁定|false|-
statusName|string|状态，0异常关闭1正常2升级|false|-
priority|int32|排序|false|-
createTime|string|创建时间|false|-
description|string|描述|false|-
spare1|string|备用1，LOGO图标|false|-
statusMap|object|No comments found.|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/update.do --data '{
  "id": "25",
  "ftpId": "25",
  "ftpName": "carola.harvey",
  "domainId": "25",
  "domainName": "carola.harvey",
  "organId": "25",
  "organName": "carola.harvey",
  "xzqhId": 409,
  "xzqhName": "carola.harvey",
  "sertypeId": "25",
  "name": "carola.harvey",
  "path": "c5uuxf",
  "appType": "bfge37",
  "isSite": true,
  "isOpen": true,
  "isMobileApp": true,
  "status": 133,
  "statusName": "carola.harvey",
  "priority": 428,
  "createTime": "2026-11-09 17:58:12",
  "description": "xege6d",
  "spare1": "2cvhns",
  "statusMap": {
    "mapKey": "dslgit"
  }
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "xjsn8o",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除应用配置
**URL:** https://linlan.net/eframe_backend/api/system/app/delete/{appIds}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除应用配置

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
appIds|array| 应用Ids,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "tm2jfc",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 应用初始化
**URL:** https://linlan.net/eframe_backend/api/system/app/init/{id}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/json; charset=utf-8

**Description:** 应用初始化

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string| 应用ID|true|-

**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|应用ID，导入和导出的APPID|false|-
menuJsons|object|菜单JSON对象|false|-
└─size|int32|No comments found.|false|-
initJson|object|初始化JSON对象|false|-
username|string|初始化用户名|false|-
password|string|初始化密码|false|-
initPath|string|导入的文件路径|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/init/25.do --data '{
  "id": "25",
  "menuJsons": {
    "size": 10
  },
  "initJson": {},
  "username": "carola.harvey",
  "password": "2uv994",
  "initPath": "20bmgl"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "waring": "You may have used non-display generics."
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 刷新参数缓存
**URL:** https://linlan.net/eframe_backend/api/system/app/refreshCache.do

**Type:** DELETE

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 刷新参数缓存

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/refreshCache.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "2n64ff",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 顶级行政区划下拉框
**URL:** https://linlan.net/eframe_backend/api/system/app/xzqh/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 顶级行政区划下拉框

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
parentId|int64|行政区划父节点|false|-
countryId|string|国家或地区编号|false|-
areatypeId|string|地域级别ID|false|-
lft|int32|树左边|false|-
rgt|int32|树右边|false|-
code|string|行政区划代码|false|-
name|string|行政区划名称|false|-
nameTotal|string|行政区划完整名称|false|-
sname|string|行政区划简洁名称|false|-
nameEn|string|名称英文|false|-
searchCode|string|快速码|false|-
isDisplay|boolean|是否显示(1显示0不显示)|false|-
hasContent|boolean|是否有内容(1有内容，编号单位等)|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|描述|false|-
parentIds|array|父节点集合|false|-
areatypeIds|array|父节点集合|false|-
likeQuery|string|父节点集合|false|-
deleteTime|string|删除时间|false|-
ids|array|id集合|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/xzqh/list.do?orderBy=308&parentIds=2sdnyr&parentIds=2sdnyr&page=1&startTime=2026-11-09 17:56:55&sname=carola.harvey&rgt=959&areatypeId=25&hasContent=true&endTime=2026-11-09 17:56:55&lft=85&areatypeIds=a5b4fv&areatypeIds=a5b4fv&searchCode=12647&deleteTime=2026-11-09 17:56:55&limit=10&isDisplay=true&likeQuery=36ks44&ids=pg76ys&ids=pg76ys&code=12647&delFlag=5&q=ii8gsz&parentId=790&name=carola.harvey&nameEn=oxy4tg&countryId=25&nameTotal=01036k&description=tc7p7j
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─totalCount|int32|总记录数 the total count|-
└─pageSize|int32|每页记录数 the page size|-
└─totalPage|int32|总页数 the total page|-
└─currPage|int32|当前页数 the current page|-
└─list|array|列表数据 the list|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|行政区划编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentId|int64|行政区划父节点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─countryId|string|国家或地区编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areatypeId|string|地域级别ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lft|int32|树左边|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─rgt|int32|树右边|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|行政区划代码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|行政区划名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nameTotal|string|行政区划完整名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sname|string|行政区划简洁名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nameEn|string|名称英文|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─searchCode|string|快速码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isDisplay|boolean|是否显示(1显示0不显示)|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─hasContent|boolean|是否有内容(1有内容，编号单位等)|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deleteTime|string|删除时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─countryName|string|全局国家或地区类|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentName|string|全局行政区划父类名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areatypeName|string|行政区划子节点列表集|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "totalCount": 32,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:12",
        "lastTime": "2026-11-09 17:58:12",
        "id": 111,
        "parentId": 603,
        "countryId": "25",
        "areatypeId": "25",
        "lft": 781,
        "rgt": 243,
        "code": "12647",
        "name": "carola.harvey",
        "nameTotal": "xljvik",
        "sname": "carola.harvey",
        "nameEn": "uvu2xo",
        "searchCode": "12647",
        "isDisplay": true,
        "hasContent": true,
        "priority": 89,
        "delFlag": 5,
        "deleteTime": "2026-11-09 17:58:12",
        "description": "4ramaa",
        "countryName": "carola.harvey",
        "parentName": "carola.harvey",
        "areatypeName": "carola.harvey"
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 管理单位下拉框
**URL:** https://linlan.net/eframe_backend/api/system/app/organ/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 管理单位下拉框

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
xzqhId|int64|单位所在地行政区划ID，区县级|false|-
orgtypeId|string|机构类型|false|-
name|string|名称|false|-
source|int32|创建来源类型0后台，1前台|false|-
unionCode|string|统一信用代码|false|-
organCode|string|组织机构代码，地域类机构的地域ID|false|-
organName|string|组织机构名称|false|-
createType|int32|创建方式0导入1录入2授权，1为唯一标记，2可能为重复的数据|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|描述|false|-
spare1|string|备用1，地域类机构的地域CODE，本地编码|false|-
spare2|string|备用2，地域类机构外部ID|false|-
key|string|关键字|false|-
ids|array|id集合|false|-
isOrganWork|string|是否工作机构|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/organ/list.do?organCode=12647&source=438&orgtypeId=25&page=1&orderBy=965&spare1=n8dozp&spare2=sgn42x&key=o8njz9&isOrganWork=5wkcf5&q=rkc98f&startTime=2026-11-09 17:56:55&createType=716&delFlag=5&name=carola.harvey&endTime=2026-11-09 17:56:55&organName=carola.harvey&limit=10&xzqhId=262&description=hl89iu&ids=oyoc39&ids=oyoc39&unionCode=12647
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─totalCount|int32|总记录数 the total count|-
└─pageSize|int32|每页记录数 the page size|-
└─totalPage|int32|总页数 the total page|-
└─currPage|int32|当前页数 the current page|-
└─list|array|列表数据 the list|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cmsKey|string|规格类型ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cmsValue|string|站点ID|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "totalCount": 41,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:12",
        "lastTime": "2026-11-09 17:58:12",
        "cmsKey": "ij4yne",
        "cmsValue": "qoevjh"
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 数据字典信息读写
### 获取数据字典信息列表
**URL:** https://linlan.net/eframe_backend/api/system/dictionary/list.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取数据字典信息列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
cddId|int64|字典编码|false|-
dictSort|int64|字典排序|false|-
name|string|字典名称|false|-
dictLabel|string|字典标签|false|-
cddValue|string|字典键值|false|-
typeCode|string|字典类型|false|-
cssClass|string|样式属性（其他样式扩展）|false|-
listClass|string|表格字典样式|false|-
isDefault|string|是否默认（Y是 N否）|false|-
status|string|状态（0未生效 1正常）|false|-
remark|string|备注|false|-
key|string|关键字|false|-
searchCode|string|快速码|false|-
parentId|int64|父节点ID|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictionary/list.do?searchCode=12647&isDefault=s1ana9&cddId=274&parentId=101&startTime=2026-11-09 17:56:55&cssClass=83evwo&typeCode=12647&orderBy=554&key=od68a7&limit=10&listClass=v9wuji&dictSort=844&name=carola.harvey&remark=vq9pll&q=2pnf54&endTime=2026-11-09 17:56:55&page=1&dictLabel=3hpa7c&cddValue=u2vj3w&status=ep4yap
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─totalCount|int32|总记录数 the total count|-
└─pageSize|int32|每页记录数 the page size|-
└─totalPage|int32|总页数 the total page|-
└─currPage|int32|当前页数 the current page|-
└─list|array|列表数据 the list|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cddId|int64|字典编码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─typeCode|string|字典排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentId|int64|字典标签|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|字典键值|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sname|string|字典类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cddValue|string|字典值|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─searchCode|string|快速码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remark|string|备注|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dictLabel|string|备注|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─typeCodeName|string|类型名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentName|string|父节点名称|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "totalCount": 712,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "cddId": 598,
        "typeCode": "12647",
        "parentId": 935,
        "name": "carola.harvey",
        "sname": "carola.harvey",
        "cddValue": "ayg5z3",
        "searchCode": "12647",
        "priority": 522,
        "createTime": "2026-11-09 17:58:08",
        "remark": "3pfb88",
        "dictLabel": "gqyour",
        "typeCodeName": "carola.harvey",
        "parentName": "carola.harvey"
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 数据字典导出
**URL:** https://linlan.net/eframe_backend/api/system/dictionary/export.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 数据字典导出

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
cddId|int64|字典编码|false|-
dictSort|int64|字典排序|false|-
name|string|字典名称|false|-
dictLabel|string|字典标签|false|-
cddValue|string|字典键值|false|-
typeCode|string|字典类型|false|-
cssClass|string|样式属性（其他样式扩展）|false|-
listClass|string|表格字典样式|false|-
isDefault|string|是否默认（Y是 N否）|false|-
status|string|状态（0未生效 1正常）|false|-
remark|string|备注|false|-
key|string|关键字|false|-
searchCode|string|快速码|false|-
parentId|int64|父节点ID|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictionary/export.do --data 'writer.psOut.autoFlush=true&startTime=2026-11-09 17:56:55&status=642&writer.formatter.zero=w&cddId=45&status=t81w8a&dictLabel=5ju1x2&isDefault=g9p4dz&writer.psOut.formatter.zero=x&q=180549&writer.formatter.lastException.detailMessage=success&parentId=421&limit=10&characterEncoding=6cf12i&cssClass=s69gdc&writer.psOut.trouble=true&name=carola.harvey&cddValue=z80lmd&committed=true&remark=cdz4pb&key=tskaxc&writer.psOut.textOut.nChars=839&writer.psOut.closing=true&listClass=oyfbyn&writer.trouble=true&contentType=er5s1h&searchCode=12647&writer.psOut.textOut.nextChar=502&writer.psOut.closed=true&writer.autoFlush=true&orderBy=288&endTime=2026-11-09 17:56:55&writer.writeBuffer=r&writer.writeBuffer=r&page=1&dictSort=332&bufferSize=10&typeCode=12647'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "c2fuug",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 查询字典数据详细
**URL:** https://linlan.net/eframe_backend/api/system/dictionary/{dictId}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 查询字典数据详细

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
dictId|int64|   字典ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictionary/201.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─cddId|int64|字典编码|-
└─typeCode|string|字典排序|-
└─parentId|int64|字典标签|-
└─name|string|字典键值|-
└─sname|string|字典类型|-
└─cddValue|string|字典值|-
└─searchCode|string|快速码|-
└─priority|int32|排序码|-
└─createTime|string|创建时间|-
└─remark|string|备注|-
└─dictLabel|string|备注|-
└─typeCodeName|string|类型名称|-
└─parentName|string|父节点名称|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "cddId": 132,
    "typeCode": "12647",
    "parentId": 416,
    "name": "carola.harvey",
    "sname": "carola.harvey",
    "cddValue": "woqvca",
    "searchCode": "12647",
    "priority": 520,
    "createTime": "2026-11-09 17:58:08",
    "remark": "ytk98g",
    "dictLabel": "mvuhkd",
    "typeCodeName": "carola.harvey",
    "parentName": "carola.harvey"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据字典类型查询字典数据信息
**URL:** https://linlan.net/eframe_backend/api/system/dictionary/type/{dictType}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据字典类型查询字典数据信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
dictType|string| 字典分类|true|-

**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
typeCode|string|字典类型代码|false|-
parentId|string|字典父节点编号，简单的字典使用|false|-
zparentId|string|父节点ID|false|-
roletypeId|string|角色分类ID|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictionary/type/t3sam3.do?typeCode=12647&zparentId=25&parentId=25&roletypeId=25
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "waring": "You may have used non-display generics."
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增字典
**URL:** https://linlan.net/eframe_backend/api/system/dictionary/save.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 新增字典

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
cddId|int64|字典编码|false|-
typeCode|string|字典排序|false|-
parentId|int64|字典标签|false|-
name|string|字典键值|false|-
sname|string|字典类型|false|-
cddValue|string|字典值|false|-
searchCode|string|快速码|false|-
priority|int32|排序码|false|-
createTime|string|创建时间|false|-
remark|string|备注|false|-
dictLabel|string|备注|false|-
typeCodeName|string|类型名称|false|-
parentName|string|父节点名称|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictionary/save.do --data '{
  "cddId": 95,
  "typeCode": "12647",
  "parentId": 837,
  "name": "carola.harvey",
  "sname": "carola.harvey",
  "cddValue": "o7k99t",
  "searchCode": "12647",
  "priority": 651,
  "createTime": "2026-11-09 17:58:08",
  "remark": "ptpkyo",
  "dictLabel": "b0l87o",
  "typeCodeName": "carola.harvey",
  "parentName": "carola.harvey"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "ihaeft",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改保存字典
**URL:** https://linlan.net/eframe_backend/api/system/dictionary/update.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 修改保存字典

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
cddId|int64|字典编码|false|-
typeCode|string|字典排序|false|-
parentId|int64|字典标签|false|-
name|string|字典键值|false|-
sname|string|字典类型|false|-
cddValue|string|字典值|false|-
searchCode|string|快速码|false|-
priority|int32|排序码|false|-
createTime|string|创建时间|false|-
remark|string|备注|false|-
dictLabel|string|备注|false|-
typeCodeName|string|类型名称|false|-
parentName|string|父节点名称|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictionary/update.do --data '{
  "cddId": 716,
  "typeCode": "12647",
  "parentId": 450,
  "name": "carola.harvey",
  "sname": "carola.harvey",
  "cddValue": "g9w1o6",
  "searchCode": "12647",
  "priority": 72,
  "createTime": "2026-11-09 17:58:08",
  "remark": "va84bg",
  "dictLabel": "9d8jqs",
  "typeCodeName": "carola.harvey",
  "parentName": "carola.harvey"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "qvmcjb",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除字典
**URL:** https://linlan.net/eframe_backend/api/system/dictionary/delete/{dictIds}.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除字典

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
dictIds|array|  字典Ids,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictionary/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "s2lx7n",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 通用字典树获取接口
**URL:** https://linlan.net/eframe_backend/api/system/comm/tree.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 通用字典树获取接口

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
type|string|树类型：参见 TreeTypeEnum|false|-
wlType|string|机构类型|false|-
subType|string|树子类型|false|-
parentId|string|父id, 空的时候查根节点   TYPE:ID|false|-
refresh|string|刷新缓存：Y 是，N 否,<br>缓存刷新时间，10分钟。|false|-
positionType|string|岗位层级类型|false|-
groupId|string|会员组ID,返回岗位是否绑定|false|-
roleId|string|角色ID|false|-
roletypeId|string|角色类型ID|false|-
positionId|string|岗位ID|false|-
refType|string|标签类型过滤|false|-
organId|string|如果传入parentId为空，则通过organId查自身所属机构节点|false|-
metaId|string|用于资源目录管理的字段|false|-
appId|string|应用ID|false|-
status|string|状态|false|-
key|string|名字|false|-
gnType|string|功能类型|false|-
showButton|string|是否显示button，默认不显示|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/comm/tree.do?type=w0g44d&positionType=sr7tcg&positionId=25&parentId=25&organId=25&appId=25&startTime=2026-11-09 17:56:55&key=3s1g7o&showButton=ftbugn&refType=d8jx81&subType=ajvf4d&endTime=2026-11-09 17:56:55&wlType=2y9cgo&refresh=ingwv4&groupId=25&limit=10&page=1&status=y0zi42&q=i5rsiw&roletypeId=25&orderBy=420&metaId=25&roleId=25&gnType=i1vx9d
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─id|string|id|-
└─label|string|名称|-
└─shortName|string|简称|-
└─organId|string|机构id|-
└─areaId|int64|行政区划id|-
└─searchCode|string|全路径|-
└─childNum|int32|子类数量|-
└─checked|boolean|是否选中|-
└─entity|int32|是否实体，1 是，0 否|-
└─show|boolean|是否显示|-
└─showIcon|boolean|是否显示图标|-
└─parentId|string|父id|-
└─children|array|子对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "id": "25",
      "label": "soxbyt",
      "shortName": "carola.harvey",
      "organId": "25",
      "areaId": 826,
      "searchCode": "12647",
      "childNum": 56,
      "checked": true,
      "entity": 924,
      "show": true,
      "showIcon": true,
      "parentId": "25",
      "children": [
        {
          "$ref": ".."
        }
      ]
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 字典树获取
**URL:** https://linlan.net/eframe_backend/api/system/dictionary/tree.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 字典树获取

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
typeCode|string|字典类型代码|false|-
parentId|int64|字典父节点编号，简单的字典使用|false|-
isAllChild|string|是否所有|false|-
name|string|字典名称|false|-
sname|string|字典名称简称，英文，多语种名称|false|-
cddValue|string|字典值|false|-
cddLevel|string|字典级别, tree时有效|false|-
searchCode|string|快速码|false|-
dispFlag|string|显示标记，用|分隔，第1位全部第2位重点第3位特殊分类；如1|1|0|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|描述|false|-
key|string|关键字,以后用q|false|-
existKey|string|存在key|false|-
typeMode|string|typeMode|false|-
ids|array|id集合|false|-
typeCodes|array|字典类型代码|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictionary/tree.do?startTime=2026-11-09 17:56:55&sname=carola.harvey&name=carola.harvey&parentId=532&searchCode=12647&description=3syxpb&typeCode=12647&dispFlag=a1dl0p&delFlag=5&endTime=2026-11-09 17:56:55&isAllChild=mu07bi&typeMode=wz26y2&existKey=nn4yxg&ids=yfnat4&ids=yfnat4&typeCodes=bp9l9j&typeCodes=bp9l9j&page=1&q=60sqb4&cddLevel=wlnees&limit=10&cddValue=4pk6s3&orderBy=576&key=zbz243
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|字典编号|-
└─typeCode|string|字典类型代码|-
└─parentId|int64|字典父节点编号，简单的字典使用|-
└─name|string|字典名称|-
└─sname|string|字典名称简称，英文，多语种名称|-
└─cddValue|string|字典值|-
└─cddLevel|string|字典级别, tree时有效|-
└─searchCode|string|快速码|-
└─dispFlag|string|显示标记，用|分隔，第1位全部第2位重点第3位特殊分类；如1|1|0|-
└─priority|int32|排序码|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─deleteTime|string|删除时间|-
└─description|string|描述|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
└─children|array|No comments found.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:09",
      "lastTime": "2026-11-09 17:58:09",
      "id": 476,
      "typeCode": "12647",
      "parentId": 786,
      "name": "carola.harvey",
      "sname": "carola.harvey",
      "cddValue": "hk6knv",
      "cddLevel": "sity3d",
      "searchCode": "12647",
      "dispFlag": "rw03u5",
      "priority": 177,
      "delFlag": 5,
      "deleteTime": "2026-11-09 17:58:09",
      "description": "b1poa6",
      "spare1": "hjis31",
      "spare2": "pwgjfx",
      "children": [
        {
          "$ref": ".."
        }
      ]
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 数据字典类型信息读写
### 获取字典类型列表
**URL:** https://linlan.net/eframe_backend/api/system/dictype/list.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取字典类型列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
typeId|string|字典主键|false|-
name|string|字典名称|false|-
typeMode|int32|字典类型模式0平面1树形|false|-
typeClass|string|字典类型|false|-
status|string|状态（0未生效 1正常）|false|-
remark|string|备注|false|-
key|string|关键字|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictype/list.do?name=carola.harvey&startTime=2026-11-09 17:56:55&q=g521gt&limit=10&typeId=25&endTime=2026-11-09 17:56:55&status=nj6jvf&typeMode=665&key=s0qt39&orderBy=533&page=1&typeClass=48n1jn&remark=5ukkep
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─totalCount|int32|总记录数 the total count|-
└─pageSize|int32|每页记录数 the page size|-
└─totalPage|int32|总页数 the total page|-
└─currPage|int32|当前页数 the current page|-
└─list|array|列表数据 the list|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─typeId|string|字典主键|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|字典名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─typeClass|string|类型分类|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─typeRef|string|字典引用名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─typeMode|int32|字典类型模式 0平面1树形|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─searchCode|string|快速码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态（0未生效 1正常）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "totalCount": 881,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "typeId": "25",
        "name": "carola.harvey",
        "typeClass": "dvtm45",
        "typeRef": "271p62",
        "typeMode": 330,
        "searchCode": "12647",
        "priority": 231,
        "createTime": "2026-11-09 17:58:14",
        "status": 704,
        "remark": "o4gxi7"
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 字典类型导出
**URL:** https://linlan.net/eframe_backend/api/system/dictype/export.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 字典类型导出

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
typeId|string|字典主键|false|-
name|string|字典名称|false|-
typeMode|int32|字典类型模式0平面1树形|false|-
typeClass|string|字典类型|false|-
status|string|状态（0未生效 1正常）|false|-
remark|string|备注|false|-
key|string|关键字|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictype/export.do --data 'limit=10&writer.autoFlush=true&orderBy=181&writer.psOut.textOut.nChars=849&writer.psOut.trouble=true&writer.psOut.closing=true&bufferSize=10&writer.trouble=true&committed=true&endTime=2026-11-09 17:56:55&typeClass=gee55y&writer.writeBuffer=k&writer.writeBuffer=k&writer.formatter.zero=6&writer.psOut.autoFlush=true&key=mbhnj4&writer.psOut.textOut.nextChar=706&contentType=g665wp&writer.psOut.closed=true&typeMode=110&typeId=25&remark=gcvmnq&writer.formatter.lastException.detailMessage=success&q=rpzy2r&characterEncoding=gs305o&page=1&status=1e1hvs&startTime=2026-11-09 17:56:55&writer.psOut.formatter.zero=c&name=carola.harvey&status=65'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "zgqhcl",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 查询字典类型详细
**URL:** https://linlan.net/eframe_backend/api/system/dictype/{dictId}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 查询字典类型详细

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
dictId|string|   字典分类ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictype/25.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─typeId|string|字典主键|-
└─name|string|字典名称|-
└─typeClass|string|类型分类|-
└─typeRef|string|字典引用名称|-
└─typeMode|int32|字典类型模式 0平面1树形|-
└─searchCode|string|快速码|-
└─priority|int32|排序码|-
└─createTime|string|创建时间|-
└─status|int32|状态（0未生效 1正常）|-
└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "typeId": "25",
    "name": "carola.harvey",
    "typeClass": "mn44qc",
    "typeRef": "n4nr7k",
    "typeMode": 475,
    "searchCode": "12647",
    "priority": 133,
    "createTime": "2026-11-09 17:58:14",
    "status": 191,
    "remark": "pkh283"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增字典类型
**URL:** https://linlan.net/eframe_backend/api/system/dictype/save.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 新增字典类型

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
typeId|string|字典主键|false|-
name|string|字典名称|false|-
typeClass|string|类型分类|false|-
typeRef|string|字典引用名称|false|-
typeMode|int32|字典类型模式 0平面1树形|false|-
searchCode|string|快速码|false|-
priority|int32|排序码|false|-
createTime|string|创建时间|false|-
status|int32|状态（0未生效 1正常）|false|-
remark|string|备注|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictype/save.do --data '{
  "typeId": "25",
  "name": "carola.harvey",
  "typeClass": "iimkla",
  "typeRef": "jj7hy9",
  "typeMode": 140,
  "searchCode": "12647",
  "priority": 93,
  "createTime": "2026-11-09 17:58:14",
  "status": 410,
  "remark": "7kzkcy"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "agleif",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改字典类型
**URL:** https://linlan.net/eframe_backend/api/system/dictype/update.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 修改字典类型

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
typeId|string|字典主键|false|-
name|string|字典名称|false|-
typeClass|string|类型分类|false|-
typeRef|string|字典引用名称|false|-
typeMode|int32|字典类型模式 0平面1树形|false|-
searchCode|string|快速码|false|-
priority|int32|排序码|false|-
createTime|string|创建时间|false|-
status|int32|状态（0未生效 1正常）|false|-
remark|string|备注|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictype/update.do --data '{
  "typeId": "25",
  "name": "carola.harvey",
  "typeClass": "1seeix",
  "typeRef": "6ztlnb",
  "typeMode": 400,
  "searchCode": "12647",
  "priority": 931,
  "createTime": "2026-11-09 17:58:14",
  "status": 228,
  "remark": "6kq8zp"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "sqn3yl",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除字典类型
**URL:** https://linlan.net/eframe_backend/api/system/dictype/delete/{dictIds}.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除字典类型

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
dictIds|array|   字典分类Ids,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictype/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "9xcb0d",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 刷新字典类型缓存
**URL:** https://linlan.net/eframe_backend/api/system/dictype/refreshCache.do

**Type:** DELETE

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 刷新字典类型缓存

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictype/refreshCache.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "02oo8g",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取字典选择框列表
**URL:** https://linlan.net/eframe_backend/api/system/dictype/option/select.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取字典选择框列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictype/option/select.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─typeId|string|字典主键|-
└─name|string|字典名称|-
└─typeClass|string|类型分类|-
└─typeRef|string|字典引用名称|-
└─typeMode|int32|字典类型模式 0平面1树形|-
└─searchCode|string|快速码|-
└─priority|int32|排序码|-
└─createTime|string|创建时间|-
└─status|int32|状态（0未生效 1正常）|-
└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "typeId": "25",
      "name": "carola.harvey",
      "typeClass": "xul76q",
      "typeRef": "zpta4f",
      "typeMode": 701,
      "searchCode": "12647",
      "priority": 761,
      "createTime": "2026-11-09 17:58:14",
      "status": 898,
      "remark": "vfe5z4"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 服务器监控
### 获取服务器基本信息
**URL:** https://linlan.net/eframe_backend/api/monitor/server.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取服务器基本信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/server.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─cpu|object|CPU相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cpuNum|int32|核心数|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─total|double|CPU总的使用率|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sys|double|CPU系统使用率|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─used|double|CPU用户使用率|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─wait|double|CPU当前等待率|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─free|double|CPU当前空闲率|-
└─mem|object|內存相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─total|double|内存总量|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─used|double|已用内存|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─free|double|剩余内存|-
└─jvm|object|JVM相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─total|double|当前JVM占用的内存总数(M)|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─max|double|JVM最大可用内存总数(M)|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─free|double|JVM空闲内存(M)|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─version|string|JDK版本|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─home|string|JDK路径|-
└─sys|object|服务器相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─computerName|string|服务器名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─computerIp|string|服务器Ip|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─userDir|string|项目路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─osName|string|操作系统|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─osArch|string|系统架构|-
└─sysFiles|array|磁盘相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dirName|string|盘符路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sysTypeName|string|盘符类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─typeName|string|文件类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─total|string|总大小|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─free|string|剩余大小|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─used|string|已经使用量|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─usage|double|资源的使用率|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "cpu": {
      "cpuNum": 573,
      "total": 7.58,
      "sys": 26.18,
      "used": 25.01,
      "wait": 70.31,
      "free": 57.33
    },
    "mem": {
      "total": 36.15,
      "used": 90.94,
      "free": 9.68
    },
    "jvm": {
      "total": 28.62,
      "max": 71.63,
      "free": 45.50,
      "version": "1.6",
      "home": "l68hvw"
    },
    "sys": {
      "computerName": "carola.harvey",
      "computerIp": "79.62.69.121",
      "userDir": "ialh9h",
      "osName": "carola.harvey",
      "osArch": "1s6gdm"
    },
    "sysFiles": [
      {
        "dirName": "carola.harvey",
        "sysTypeName": "carola.harvey",
        "typeName": "carola.harvey",
        "total": "bgba6e",
        "free": "kknfpn",
        "used": "b1e2lo",
        "usage": 19.46
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 权限分类读写控制类
### Get CoreRighttype list. 获取权限分类列表或分页, 返回CoreRighttype对象.
**URL:** https://linlan.net/eframe_backend/api/system/righttype/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-12-16 10:58:56

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get CoreRighttype list. 获取权限分类列表或分页, 返回CoreRighttype对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
name|string|类型名称|false|-
sname|string|类型简称,英文|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|描述|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/righttype/list.do?startTime=2026-11-09 17:56:55&orderBy=895&name=carola.harvey&page=1&endTime=2026-11-09 17:56:55&delFlag=5&sname=carola.harvey&q=k1fk4z&limit=10&description=lko5yh
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|资源类型ID|-
└─name|string|类型名称|-
└─sname|string|类型简称,英文|-
└─priority|int32|重点优先级|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─description|string|描述|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:10",
      "lastTime": "2026-11-09 17:58:10",
      "id": "25",
      "name": "carola.harvey",
      "sname": "carola.harvey",
      "priority": 192,
      "delFlag": 5,
      "description": "8qtkxg"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreRighttype Operation. CoreRighttype数据操作逻辑，导出操作.
**URL:** https://linlan.net/eframe_backend/api/system/righttype/export.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-12-16 10:58:56

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** CoreRighttype Operation. CoreRighttype数据操作逻辑，导出操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
name|string|类型名称|false|-
sname|string|类型简称,英文|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|描述|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/righttype/export.do --data 'name=carola.harvey&characterEncoding=s4ajae&startTime=2026-11-09 17:56:55&writer.autoFlush=true&writer.psOut.closing=true&orderBy=667&status=425&writer.psOut.trouble=true&contentType=6dpeve&writer.psOut.formatter.zero=p&writer.formatter.zero=h&sname=carola.harvey&writer.writeBuffer=x&writer.writeBuffer=x&description=k4u326&endTime=2026-11-09 17:56:55&bufferSize=10&writer.psOut.textOut.nextChar=229&delFlag=5&writer.psOut.textOut.nChars=772&page=1&committed=true&q=reotp6&writer.formatter.lastException.detailMessage=success&writer.psOut.closed=true&writer.trouble=true&writer.psOut.autoFlush=true&limit=10'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "25fnzz",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get CoreRighttype by id. 主键获取权限分类详细信息.
**URL:** https://linlan.net/eframe_backend/api/system/righttype/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-12-16 10:58:56

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get CoreRighttype by id. 主键获取权限分类详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|资源类型ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/righttype/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|资源类型ID|-
└─name|string|类型名称|-
└─sname|string|类型简称,英文|-
└─priority|int32|重点优先级|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─description|string|描述|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:10",
    "lastTime": "2026-11-09 17:58:10",
    "id": "25",
    "name": "carola.harvey",
    "sname": "carola.harvey",
    "priority": 188,
    "delFlag": 5,
    "description": "2ty23e"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreRighttype Operation. 新增权限分类数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/system/righttype/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-12-16 10:58:56

**Content-Type:** application/json; charset=utf-8

**Description:** CoreRighttype Operation. 新增权限分类数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|资源类型ID|false|-
name|string|类型名称|false|-
sname|string|类型简称,英文|false|-
priority|int32|重点优先级|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|描述|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/righttype/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:10",
  "lastTime": "2026-11-09 17:58:10",
  "id": "25",
  "name": "carola.harvey",
  "sname": "carola.harvey",
  "priority": 553,
  "delFlag": 5,
  "description": "oqb0vh"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "433783",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreRighttype Operation. 修改权限分类数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/system/righttype/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-12-16 10:58:56

**Content-Type:** application/json; charset=utf-8

**Description:** CoreRighttype Operation. 修改权限分类数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|资源类型ID|false|-
name|string|类型名称|false|-
sname|string|类型简称,英文|false|-
priority|int32|重点优先级|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|描述|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/righttype/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:10",
  "lastTime": "2026-11-09 17:58:10",
  "id": "25",
  "name": "carola.harvey",
  "sname": "carola.harvey",
  "priority": 561,
  "delFlag": 5,
  "description": "leskfn"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "qnpfus",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreRighttype Operation. 删除权限分类数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/system/righttype/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-12-16 10:58:56

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** CoreRighttype Operation. 删除权限分类数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|资源类型ID:null;1;1,2,3,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/righttype/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "glgxkc",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 模板信息配置读写控制类
### Get PublicTemplateInfo list. 获取模板信息配置列表或分页, 返回PublicTemplateInfo对象.
**URL:** https://linlan.net/eframe_backend/api/system/template/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-15 13:52:44

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get PublicTemplateInfo list. 获取模板信息配置列表或分页, 返回PublicTemplateInfo对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|string|模板ID|false|-
appId|string|应用ID|false|-
organId|string|机构ID|false|-
providerId|string|提供商ID，平台ID|false|-
providerName|string|提供商名称，平台名称|false|-
foreignId|string|外键ID|false|-
type|string|模板类型，邮件模板，短信模板|false|-
subType|string|模板子类型|false|-
name|string|模板名称，标题名称|false|-
signature|string|签名，发送人名称|false|-
content|string|内容JSON，发布版本的JSON配置|false|-
status|int32|状态0未生效1正常2受限3锁定|false|-
creatorId|string|创建者ID|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/template/list.do?creatorId=25&subType=zqhpk0&orderBy=199&page=1&delFlag=5&id=25&appId=25&organId=25&q=z0nu79&providerId=25&spare1=ppctz8&startTime=2026-11-09 17:56:55&description=f4x5cw&status=943&spare2=wu9v5v&type=ozmkvx&providerName=carola.harvey&endTime=2026-11-09 17:56:55&limit=10&content=r0hxa6&foreignId=25&name=carola.harvey&signature=8c585a
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|模板ID|-
└─appId|string|应用ID|-
└─organId|string|机构ID|-
└─providerId|string|提供商ID，平台ID|-
└─providerName|string|提供商名称，平台名称|-
└─foreignId|string|外键ID|-
└─type|string|模板类型，邮件模板，短信模板|-
└─subType|string|模板子类型|-
└─name|string|模板名称，标题名称|-
└─signature|string|签名，发送人名称|-
└─content|string|内容JSON，发布版本的JSON配置|-
└─priority|int32|排序号|-
└─status|int32|状态0未生效1正常2受限3锁定|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:02",
      "lastTime": "2026-11-09 17:58:02",
      "id": "25",
      "appId": "25",
      "organId": "25",
      "providerId": "25",
      "providerName": "carola.harvey",
      "foreignId": "25",
      "type": "b3wh5y",
      "subType": "qhzlsu",
      "name": "carola.harvey",
      "signature": "4oplgq",
      "content": "bgfbtn",
      "priority": 909,
      "status": 196,
      "delFlag": 5,
      "description": "w0djeq",
      "spare1": "9ighlw",
      "spare2": "m7t3ly"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get PublicTemplateInfo by id. 主键获取模板信息配置详细信息.
**URL:** https://linlan.net/eframe_backend/api/system/template/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-15 13:52:44

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get PublicTemplateInfo by id. 主键获取模板信息配置详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|模板ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/template/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|模板ID|-
└─appId|string|应用ID|-
└─organId|string|机构ID|-
└─providerId|string|提供商ID，平台ID|-
└─providerName|string|提供商名称，平台名称|-
└─foreignId|string|外键ID|-
└─type|string|模板类型，邮件模板，短信模板|-
└─subType|string|模板子类型|-
└─name|string|模板名称，标题名称|-
└─signature|string|签名，发送人名称|-
└─content|string|内容JSON，发布版本的JSON配置|-
└─priority|int32|排序号|-
└─status|int32|状态0未生效1正常2受限3锁定|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:03",
    "lastTime": "2026-11-09 17:58:03",
    "id": "25",
    "appId": "25",
    "organId": "25",
    "providerId": "25",
    "providerName": "carola.harvey",
    "foreignId": "25",
    "type": "h1hl7v",
    "subType": "tbwf3n",
    "name": "carola.harvey",
    "signature": "agbopg",
    "content": "tuulq3",
    "priority": 929,
    "status": 42,
    "delFlag": 5,
    "description": "u5adfa",
    "spare1": "o3owqi",
    "spare2": "dxb34m"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicTemplateInfo Operation. 新增模板信息配置数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/system/template/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-15 13:52:44

**Content-Type:** application/json; charset=utf-8

**Description:** PublicTemplateInfo Operation. 新增模板信息配置数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|模板ID|false|-
appId|string|应用ID|false|-
organId|string|机构ID|false|-
providerId|string|提供商ID，平台ID|false|-
providerName|string|提供商名称，平台名称|false|-
foreignId|string|外键ID|false|-
type|string|模板类型，邮件模板，短信模板|false|-
subType|string|模板子类型|false|-
name|string|模板名称，标题名称|false|-
signature|string|签名，发送人名称|false|-
content|string|内容JSON，发布版本的JSON配置|false|-
priority|int32|排序号|false|-
status|int32|状态0未生效1正常2受限3锁定|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/template/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:03",
  "lastTime": "2026-11-09 17:58:03",
  "id": "25",
  "appId": "25",
  "organId": "25",
  "providerId": "25",
  "providerName": "carola.harvey",
  "foreignId": "25",
  "type": "vv5zlf",
  "subType": "qtlzld",
  "name": "carola.harvey",
  "signature": "yaab13",
  "content": "zms4nl",
  "priority": 828,
  "status": 730,
  "delFlag": 5,
  "description": "wf3e3t",
  "spare1": "wi4aoi",
  "spare2": "ttyani"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "x6jeoa",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicTemplateInfo Operation. 修改模板信息配置数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/system/template/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-15 13:52:44

**Content-Type:** application/json; charset=utf-8

**Description:** PublicTemplateInfo Operation. 修改模板信息配置数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|模板ID|false|-
appId|string|应用ID|false|-
organId|string|机构ID|false|-
providerId|string|提供商ID，平台ID|false|-
providerName|string|提供商名称，平台名称|false|-
foreignId|string|外键ID|false|-
type|string|模板类型，邮件模板，短信模板|false|-
subType|string|模板子类型|false|-
name|string|模板名称，标题名称|false|-
signature|string|签名，发送人名称|false|-
content|string|内容JSON，发布版本的JSON配置|false|-
priority|int32|排序号|false|-
status|int32|状态0未生效1正常2受限3锁定|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/template/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:03",
  "lastTime": "2026-11-09 17:58:03",
  "id": "25",
  "appId": "25",
  "organId": "25",
  "providerId": "25",
  "providerName": "carola.harvey",
  "foreignId": "25",
  "type": "t8tjuu",
  "subType": "auya4u",
  "name": "carola.harvey",
  "signature": "59cdql",
  "content": "hc58kk",
  "priority": 63,
  "status": 350,
  "delFlag": 5,
  "description": "aemyi0",
  "spare1": "3yozs0",
  "spare2": "5sa194"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "1djb3r",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicTemplateInfo Operation. 删除模板信息配置数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/system/template/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-15 13:52:44

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** PublicTemplateInfo Operation. 删除模板信息配置数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|模板ID:null;1;1,2,3,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/template/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "q5azsq",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 消息阅读读写控制类
### Get PublicUnionMessage list. 获取消息阅读列表或分页, 返回PublicUnionMessage对象.
**URL:** https://linlan.net/eframe_backend/api/system/message/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:52

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get PublicUnionMessage list. 获取消息阅读列表或分页, 返回PublicUnionMessage对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|string|记录ID|false|-
appId|string|应用ID|false|-
foreignId|string|站点门户ID|false|-
type|string|类型|false|-
bizType|string|业务类型|false|-
msgCreateTime|string|统一消息创建时间|false|-
msgId|int64|信息ID|false|-
msgType|int32|消息类型|false|-
msgTitle|string|信息标题|false|-
msgAbstract|string|统一消息摘要|false|-
msgAccountId|string|统一消息应用账户ID|false|-
msgAccountName|string|统一消息应用系统或账户名称|false|-
msgModuleId|string|统一消息应用应用ID|false|-
msgModuleName|string|统一消息应用应用名称|false|-
msgUserId|string|统一消息应用用户ID|false|-
msgUserName|string|统一消息应用用户名称|false|-
msgOrganId|string|统一消息应用机构ID|false|-
msgOrganName|string|统一消息应用机构名称|false|-
msgUrl|string|统一信息链接，链接平台内地址，可点击访问|false|-
msgLabels|string|统一消息业务标签|false|-
msgContent|string|统一消息信息内容|false|-
status|string|状态，0待阅读，10已阅读|false|-
opUserId|string|操作人ID|false|-
opTime|string|操作时间|false|-
opOrganId|string|操作单位ID|false|-
opOrganName|string|操作单位名称|false|-
creatorId|string|创建人ID，不使用外键|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/message/list.do?startTime=2026-11-09 17:56:55&endTime=2026-11-09 17:56:55&id=25&q=3h3v2g&msgTitle=h8v3g1&orderBy=22&msgId=505&msgUserName=carola.harvey&appId=25&msgContent=xx4kzv&msgUrl=www.hank-okon.com&opUserId=25&msgAccountName=carola.harvey&type=s7cemq&opOrganId=25&creatorId=25&msgAccountId=25&description=jn300l&spare2=5vc5sk&bizType=t0ovrn&msgModuleId=25&msgUserId=25&msgOrganName=carola.harvey&msgModuleName=carola.harvey&msgType=757&msgCreateTime=2026-11-09 17:58:03&opTime=2026-11-09 17:58:03&page=1&foreignId=25&spare1=b90scg&msgAbstract=9e8rpg&opOrganName=carola.harvey&msgOrganId=25&limit=10&msgLabels=0mhkoh&status=pgvpw2
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|记录ID|-
└─appId|string|应用ID|-
└─foreignId|string|站点门户ID|-
└─type|string|类型|-
└─bizType|string|业务类型|-
└─msgCreateTime|string|统一消息创建时间|-
└─msgId|int64|信息ID|-
└─msgType|int32|消息类型|-
└─msgTitle|string|信息标题|-
└─msgAbstract|string|统一消息摘要|-
└─msgAccountId|string|统一消息应用账户ID|-
└─msgAccountName|string|统一消息应用系统或账户名称|-
└─msgModuleId|string|统一消息应用应用ID|-
└─msgModuleName|string|统一消息应用应用名称|-
└─msgUserId|string|统一消息应用用户ID|-
└─msgUserName|string|统一消息应用用户名称|-
└─msgOrganId|string|统一消息应用机构ID|-
└─msgOrganName|string|统一消息应用机构名称|-
└─msgUrl|string|统一信息链接，链接平台内地址，可点击访问|-
└─msgLabels|string|统一消息业务标签|-
└─msgContent|string|统一消息信息内容|-
└─status|string|状态，0待阅读，10已阅读|-
└─opUserId|string|操作人ID|-
└─opTime|string|操作时间|-
└─opOrganId|string|操作单位ID|-
└─opOrganName|string|操作单位名称|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:03",
      "lastTime": "2026-11-09 17:58:03",
      "id": "25",
      "appId": "25",
      "foreignId": "25",
      "type": "rt2ozs",
      "bizType": "a1u6v8",
      "msgCreateTime": "2026-11-09 17:58:03",
      "msgId": 541,
      "msgType": 93,
      "msgTitle": "zbqgt8",
      "msgAbstract": "adv3gf",
      "msgAccountId": "25",
      "msgAccountName": "carola.harvey",
      "msgModuleId": "25",
      "msgModuleName": "carola.harvey",
      "msgUserId": "25",
      "msgUserName": "carola.harvey",
      "msgOrganId": "25",
      "msgOrganName": "carola.harvey",
      "msgUrl": "www.hank-okon.com",
      "msgLabels": "trbxta",
      "msgContent": "9nr3mk",
      "status": "y70huo",
      "opUserId": "25",
      "opTime": "2026-11-09 17:58:03",
      "opOrganId": "25",
      "opOrganName": "carola.harvey",
      "description": "47ziwa",
      "spare1": "bs3hf0",
      "spare2": "5pmfst"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicUnionMessage Operation. PublicUnionMessage数据操作逻辑，导出操作.
**URL:** https://linlan.net/eframe_backend/api/system/message/export.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:52

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** PublicUnionMessage Operation. PublicUnionMessage数据操作逻辑，导出操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|string|记录ID|false|-
appId|string|应用ID|false|-
foreignId|string|站点门户ID|false|-
type|string|类型|false|-
bizType|string|业务类型|false|-
msgCreateTime|string|统一消息创建时间|false|-
msgId|int64|信息ID|false|-
msgType|int32|消息类型|false|-
msgTitle|string|信息标题|false|-
msgAbstract|string|统一消息摘要|false|-
msgAccountId|string|统一消息应用账户ID|false|-
msgAccountName|string|统一消息应用系统或账户名称|false|-
msgModuleId|string|统一消息应用应用ID|false|-
msgModuleName|string|统一消息应用应用名称|false|-
msgUserId|string|统一消息应用用户ID|false|-
msgUserName|string|统一消息应用用户名称|false|-
msgOrganId|string|统一消息应用机构ID|false|-
msgOrganName|string|统一消息应用机构名称|false|-
msgUrl|string|统一信息链接，链接平台内地址，可点击访问|false|-
msgLabels|string|统一消息业务标签|false|-
msgContent|string|统一消息信息内容|false|-
status|string|状态，0待阅读，10已阅读|false|-
opUserId|string|操作人ID|false|-
opTime|string|操作时间|false|-
opOrganId|string|操作单位ID|false|-
opOrganName|string|操作单位名称|false|-
creatorId|string|创建人ID，不使用外键|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/message/export.do --data 'characterEncoding=j779tu&msgLabels=j9hlk8&startTime=2026-11-09 17:56:55&opTime=2026-11-09 17:58:03&spare1=6t952n&opOrganName=carola.harvey&limit=10&writer.psOut.textOut.nextChar=831&id=25&msgType=435&writer.trouble=true&foreignId=25&msgModuleId=25&opOrganId=25&orderBy=374&creatorId=25&msgContent=5sw0ui&msgUserName=carola.harvey&opUserId=25&writer.psOut.autoFlush=true&writer.psOut.formatter.zero=l&writer.formatter.zero=u&msgAccountName=carola.harvey&msgOrganName=carola.harvey&appId=25&endTime=2026-11-09 17:56:55&msgModuleName=carola.harvey&msgOrganId=25&status=784&msgUserId=25&type=vgemur&msgAbstract=2kp5ss&writer.autoFlush=true&msgAccountId=25&writer.writeBuffer=s&writer.writeBuffer=s&writer.formatter.lastException.detailMessage=success&q=z2to5u&committed=true&bizType=b9bs6x&page=1&msgId=631&writer.psOut.closed=true&msgUrl=www.hank-okon.com&writer.psOut.textOut.nChars=946&msgTitle=jqqk75&writer.psOut.closing=true&spare2=9fgoyi&writer.psOut.trouble=true&contentType=hq9i5s&description=chc36w&bufferSize=10&msgCreateTime=2026-11-09 17:58:03&status=4rpe94'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "f3xtvd",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get PublicUnionMessage by id. 主键获取消息阅读详细信息.
**URL:** https://linlan.net/eframe_backend/api/system/message/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:52

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get PublicUnionMessage by id. 主键获取消息阅读详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|主键ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/message/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|记录ID|-
└─appId|string|应用ID|-
└─foreignId|string|站点门户ID|-
└─type|string|类型|-
└─bizType|string|业务类型|-
└─msgCreateTime|string|统一消息创建时间|-
└─msgId|int64|信息ID|-
└─msgType|int32|消息类型|-
└─msgTitle|string|信息标题|-
└─msgAbstract|string|统一消息摘要|-
└─msgAccountId|string|统一消息应用账户ID|-
└─msgAccountName|string|统一消息应用系统或账户名称|-
└─msgModuleId|string|统一消息应用应用ID|-
└─msgModuleName|string|统一消息应用应用名称|-
└─msgUserId|string|统一消息应用用户ID|-
└─msgUserName|string|统一消息应用用户名称|-
└─msgOrganId|string|统一消息应用机构ID|-
└─msgOrganName|string|统一消息应用机构名称|-
└─msgUrl|string|统一信息链接，链接平台内地址，可点击访问|-
└─msgLabels|string|统一消息业务标签|-
└─msgContent|string|统一消息信息内容|-
└─status|string|状态，0待阅读，10已阅读|-
└─opUserId|string|操作人ID|-
└─opTime|string|操作时间|-
└─opOrganId|string|操作单位ID|-
└─opOrganName|string|操作单位名称|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:03",
    "lastTime": "2026-11-09 17:58:03",
    "id": "25",
    "appId": "25",
    "foreignId": "25",
    "type": "hg8rgm",
    "bizType": "q9xktv",
    "msgCreateTime": "2026-11-09 17:58:03",
    "msgId": 411,
    "msgType": 281,
    "msgTitle": "lfiiq6",
    "msgAbstract": "c78pjk",
    "msgAccountId": "25",
    "msgAccountName": "carola.harvey",
    "msgModuleId": "25",
    "msgModuleName": "carola.harvey",
    "msgUserId": "25",
    "msgUserName": "carola.harvey",
    "msgOrganId": "25",
    "msgOrganName": "carola.harvey",
    "msgUrl": "www.hank-okon.com",
    "msgLabels": "mceiha",
    "msgContent": "ylvn4b",
    "status": "gk5wt5",
    "opUserId": "25",
    "opTime": "2026-11-09 17:58:03",
    "opOrganId": "25",
    "opOrganName": "carola.harvey",
    "description": "caw1if",
    "spare1": "oqt0q6",
    "spare2": "va6c30"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicUnionMessage Operation. 新增消息阅读数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/system/message/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:52

**Content-Type:** application/json; charset=utf-8

**Description:** PublicUnionMessage Operation. 新增消息阅读数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|记录ID|false|-
appId|string|应用ID|false|-
foreignId|string|站点门户ID|false|-
type|string|类型|false|-
bizType|string|业务类型|false|-
msgCreateTime|string|统一消息创建时间|false|-
msgId|int64|信息ID|false|-
msgType|int32|消息类型|false|-
msgTitle|string|信息标题|false|-
msgAbstract|string|统一消息摘要|false|-
msgAccountId|string|统一消息应用账户ID|false|-
msgAccountName|string|统一消息应用系统或账户名称|false|-
msgModuleId|string|统一消息应用应用ID|false|-
msgModuleName|string|统一消息应用应用名称|false|-
msgUserId|string|统一消息应用用户ID|false|-
msgUserName|string|统一消息应用用户名称|false|-
msgOrganId|string|统一消息应用机构ID|false|-
msgOrganName|string|统一消息应用机构名称|false|-
msgUrl|string|统一信息链接，链接平台内地址，可点击访问|false|-
msgLabels|string|统一消息业务标签|false|-
msgContent|string|统一消息信息内容|false|-
status|string|状态，0待阅读，10已阅读|false|-
opUserId|string|操作人ID|false|-
opTime|string|操作时间|false|-
opOrganId|string|操作单位ID|false|-
opOrganName|string|操作单位名称|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/message/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:03",
  "lastTime": "2026-11-09 17:58:03",
  "id": "25",
  "appId": "25",
  "foreignId": "25",
  "type": "f90gps",
  "bizType": "eyra7p",
  "msgCreateTime": "2026-11-09 17:58:03",
  "msgId": 178,
  "msgType": 81,
  "msgTitle": "xlv7ng",
  "msgAbstract": "bc3q8m",
  "msgAccountId": "25",
  "msgAccountName": "carola.harvey",
  "msgModuleId": "25",
  "msgModuleName": "carola.harvey",
  "msgUserId": "25",
  "msgUserName": "carola.harvey",
  "msgOrganId": "25",
  "msgOrganName": "carola.harvey",
  "msgUrl": "www.hank-okon.com",
  "msgLabels": "cyzk2h",
  "msgContent": "y1n12v",
  "status": "s7i3fs",
  "opUserId": "25",
  "opTime": "2026-11-09 17:58:03",
  "opOrganId": "25",
  "opOrganName": "carola.harvey",
  "description": "t20ypv",
  "spare1": "f3vvby",
  "spare2": "v3hp7h"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "n9fq3n",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicUnionMessage Operation. 修改消息阅读数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/system/message/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:52

**Content-Type:** application/json; charset=utf-8

**Description:** PublicUnionMessage Operation. 修改消息阅读数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|记录ID|false|-
appId|string|应用ID|false|-
foreignId|string|站点门户ID|false|-
type|string|类型|false|-
bizType|string|业务类型|false|-
msgCreateTime|string|统一消息创建时间|false|-
msgId|int64|信息ID|false|-
msgType|int32|消息类型|false|-
msgTitle|string|信息标题|false|-
msgAbstract|string|统一消息摘要|false|-
msgAccountId|string|统一消息应用账户ID|false|-
msgAccountName|string|统一消息应用系统或账户名称|false|-
msgModuleId|string|统一消息应用应用ID|false|-
msgModuleName|string|统一消息应用应用名称|false|-
msgUserId|string|统一消息应用用户ID|false|-
msgUserName|string|统一消息应用用户名称|false|-
msgOrganId|string|统一消息应用机构ID|false|-
msgOrganName|string|统一消息应用机构名称|false|-
msgUrl|string|统一信息链接，链接平台内地址，可点击访问|false|-
msgLabels|string|统一消息业务标签|false|-
msgContent|string|统一消息信息内容|false|-
status|string|状态，0待阅读，10已阅读|false|-
opUserId|string|操作人ID|false|-
opTime|string|操作时间|false|-
opOrganId|string|操作单位ID|false|-
opOrganName|string|操作单位名称|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/message/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:03",
  "lastTime": "2026-11-09 17:58:03",
  "id": "25",
  "appId": "25",
  "foreignId": "25",
  "type": "bzyn8h",
  "bizType": "e9qmyv",
  "msgCreateTime": "2026-11-09 17:58:03",
  "msgId": 524,
  "msgType": 441,
  "msgTitle": "cjot1k",
  "msgAbstract": "f7vcmy",
  "msgAccountId": "25",
  "msgAccountName": "carola.harvey",
  "msgModuleId": "25",
  "msgModuleName": "carola.harvey",
  "msgUserId": "25",
  "msgUserName": "carola.harvey",
  "msgOrganId": "25",
  "msgOrganName": "carola.harvey",
  "msgUrl": "www.hank-okon.com",
  "msgLabels": "bzwo6o",
  "msgContent": "9846an",
  "status": "b74gg4",
  "opUserId": "25",
  "opTime": "2026-11-09 17:58:03",
  "opOrganId": "25",
  "opOrganName": "carola.harvey",
  "description": "o7l6qf",
  "spare1": "jboxua",
  "spare2": "upjtsg"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "x0qeew",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicUnionMessage Operation. 删除消息阅读数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/system/message/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:52

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** PublicUnionMessage Operation. 删除消息阅读数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|主键ID:null;1;1,2,3,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/message/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "f3hi12",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicUnionMessage Operation. 删除消息阅读数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/system/message/read/{ids}/{status}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:52

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** PublicUnionMessage Operation. 删除消息阅读数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|主键ID:null;1;1,2,3,[array of string]|true|
status|string|消息状态|true|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/message/read/coi562.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "0snvv6",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 用户权限预置
### 用户权限预置列表
**URL:** https://linlan.net/eframe_backend/api/admin/preset/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 用户权限预置列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
type|string|类型 RCYY人才预约，SJKB数据看板，SJPZ事件配置，SQ12345诉求12345|false|-
status|int32|状态：0未初始化 1 已初始化， 2.初始化失败|false|-
appId|string|应用Id|false|-
syncMode|string|角色类型，R31 WEB，R32移动<br>对应字段：SYNC_MODE|false|-
groupId|int64|组id|false|-
positionId|string|岗位id|false|-
organId|string|机构id|false|-
areaId|int64|区域id|false|-
batchId|string|批次id|false|-
keyWords|string|关键字|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/preset/list.do?limit=10&syncMode=2w4dcd&startTime=2026-11-09 17:56:55&q=bgm201&status=354&organId=25&page=1&orderBy=617&groupId=411&type=z8h0kp&endTime=2026-11-09 17:56:55&areaId=337&batchId=25&keyWords=b7yljp&appId=25&positionId=25
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─totalCount|int32|总记录数 the total count|-
└─pageSize|int32|每页记录数 the page size|-
└─totalPage|int32|总页数 the total page|-
└─currPage|int32|当前页数 the current page|-
└─list|array|列表数据 the list|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|预置信息ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|所属应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─saveSource|string|来源，RGYZ人工预置，PLTJ批量添加|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─unitName|string|服务处所，单位名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|姓名|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─idNum|string|身份证号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─duty|string|人员职务|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─telephone|string|办公电话|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─mobile|string|手机号码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─extInfo1|string|备用信息1，可保存岗位名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─extInfo2|string|备用信息2，可保存所属网格等信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─extInfo3|string|备用信息3|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─needInitUser|boolean|是否同步初始化人员，0否1是，是则人员会加入BASE_USER|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─userId|string|机构用户人员ID，关联BASE_USER，初始化之后更新|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─needInitOrgan|boolean|是否同步初始化机构，0否1是，是则人员会加入BASE_ORGAN|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|机构ID，关联BASE_ORGAN，初始化之后更新|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─type|string|类型，RCYY人才预约，SJKB数据看板，SJPZ事件配置，SQ12345诉求12345|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─foreignUrl|string|外部URL，如SJKB的URL，人才预约的URL|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bizType|int32|业务类型，1具体单位2具体地域3具体权限组4综合权限9多个同类信息，12单位和地域，13单位和权限组，19多个单位，23地域和权限组，29多个地域，39多个权限|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bizOrganId|string|业务机构ID，人员绑定机构，绑定的ORGAN_ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bizAreaId|int64|业务权限ID，当前查询范围|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bizGroupId|int64|业务会员组ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bizPower|string|业务综合权限，备用字段|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bizMultiInfo|string|多个信息时，Ids,隔开|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─needSetOrgan|boolean|是否需要绑定企业，0否1是，是则人员会配置IDENTITY的ORGAN_ID信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─needSetArea|boolean|是否需要绑定地域，0否1是，是则人员会配置IDENTITY的POWER_AREA_ID信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─needSetGroup|boolean|是否需要绑定会员组，0否1是，是则人员会配置会员组，并设置IDENTITY内的GROUP_ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─needSetPower|boolean|是否需要绑定综合权限，0否1是，是则人员会配置IDENTITY的其他综合权限等信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─opUserId|string|操作人ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─opOrganId|string|操作单位ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─opTime|string|操作时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─opInfo|string|操作说明|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0未初始化1初始化配置成功2初始化配置不成功|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dataBatch|string|数据批次号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dataVersion|int32|数据版本，流水号，向上增加|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─updateTime|string|数据更新时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─syncMode|string|同步类型，I插入，U更新，D删除，DM人工删除，UM人工更新|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─syncTime|string|同步更新时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─groupName|string|角色组名称，角色名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─positionName|string|岗名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bizPowerName|string|业务范围名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─subdistrictName|string|业务范围,街镇名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─communityName|string|业务范围,居委名称|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "totalCount": 75,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:05",
        "lastTime": "2026-11-09 17:58:05",
        "id": 204,
        "appId": "25",
        "saveSource": "29f752",
        "unitName": "carola.harvey",
        "name": "carola.harvey",
        "idNum": "apgm7f",
        "duty": "hbkcms",
        "telephone": "662-667-5459",
        "mobile": "337-229-9034",
        "extInfo1": "zq1xvo",
        "extInfo2": "ezq62s",
        "extInfo3": "qofmom",
        "needInitUser": true,
        "userId": "25",
        "needInitOrgan": true,
        "organId": "25",
        "type": "u52mpu",
        "foreignUrl": "www.hank-okon.com",
        "bizType": 634,
        "bizOrganId": "25",
        "bizAreaId": 997,
        "bizGroupId": 493,
        "bizPower": "n2u7iu",
        "bizMultiInfo": "otn6kz",
        "needSetOrgan": true,
        "needSetArea": true,
        "needSetGroup": true,
        "needSetPower": true,
        "opUserId": "25",
        "opOrganId": "25",
        "opTime": "2026-11-09 17:58:05",
        "opInfo": "6efydr",
        "priority": 76,
        "status": 431,
        "delFlag": 5,
        "dataBatch": "qfzspc",
        "dataVersion": 878,
        "updateTime": "2026-11-09 17:58:05",
        "syncMode": "w6oubm",
        "syncTime": "2026-11-09 17:58:05",
        "description": "wuiomm",
        "groupName": "carola.harvey",
        "positionName": "carola.harvey",
        "bizPowerName": "carola.harvey",
        "subdistrictName": "carola.harvey",
        "communityName": "carola.harvey"
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据用户权限预置导出
**URL:** https://linlan.net/eframe_backend/api/admin/preset/export.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据用户权限预置导出

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
type|string|类型 RCYY人才预约，SJKB数据看板，SJPZ事件配置，SQ12345诉求12345|false|-
status|int32|状态：0未初始化 1 已初始化， 2.初始化失败|false|-
appId|string|应用Id|false|-
syncMode|string|角色类型，R31 WEB，R32移动<br>对应字段：SYNC_MODE|false|-
groupId|int64|组id|false|-
positionId|string|岗位id|false|-
organId|string|机构id|false|-
areaId|int64|区域id|false|-
batchId|string|批次id|false|-
keyWords|string|关键字|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/preset/export.do --data 'status=662&writer.writeBuffer=o&writer.writeBuffer=o&endTime=2026-11-09 17:56:55&page=1&writer.psOut.closing=true&committed=true&characterEncoding=qviqwh&writer.autoFlush=true&contentType=bv6qjm&batchId=25&startTime=2026-11-09 17:56:55&groupId=795&writer.psOut.autoFlush=true&writer.psOut.trouble=true&writer.psOut.textOut.nChars=737&writer.formatter.zero=t&keyWords=ftrgj2&orderBy=742&writer.trouble=true&writer.psOut.formatter.zero=f&positionId=25&writer.psOut.textOut.nextChar=231&writer.psOut.closed=true&q=3ycqns&organId=25&writer.formatter.lastException.detailMessage=success&status=528&syncMode=wccpqf&areaId=391&appId=25&limit=10&bufferSize=10&type=ez5a80'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "1v8nyd",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据用户权限预置获取详细信息
**URL:** https://linlan.net/eframe_backend/api/admin/preset/{configId}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据用户权限预置获取详细信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
configId|int64| 配置ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/preset/622.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|预置信息ID|-
└─appId|string|所属应用ID|-
└─saveSource|string|来源，RGYZ人工预置，PLTJ批量添加|-
└─unitName|string|服务处所，单位名称|-
└─name|string|姓名|-
└─idNum|string|身份证号|-
└─duty|string|人员职务|-
└─telephone|string|办公电话|-
└─mobile|string|手机号码|-
└─extInfo1|string|备用信息1，可保存岗位名称|-
└─extInfo2|string|备用信息2，可保存所属网格等信息|-
└─extInfo3|string|备用信息3|-
└─needInitUser|boolean|是否同步初始化人员，0否1是，是则人员会加入BASE_USER|-
└─userId|string|机构用户人员ID，关联BASE_USER，初始化之后更新|-
└─needInitOrgan|boolean|是否同步初始化机构，0否1是，是则人员会加入BASE_ORGAN|-
└─organId|string|机构ID，关联BASE_ORGAN，初始化之后更新|-
└─type|string|类型，RCYY人才预约，SJKB数据看板，SJPZ事件配置，SQ12345诉求12345|-
└─foreignUrl|string|外部URL，如SJKB的URL，人才预约的URL|-
└─bizType|int32|业务类型，1具体单位2具体地域3具体权限组4综合权限9多个同类信息，12单位和地域，13单位和权限组，19多个单位，23地域和权限组，29多个地域，39多个权限|-
└─bizOrganId|string|业务机构ID，人员绑定机构，绑定的ORGAN_ID|-
└─bizAreaId|int64|业务权限ID，当前查询范围|-
└─bizGroupId|int64|业务会员组ID|-
└─bizPower|string|业务综合权限，备用字段|-
└─bizMultiInfo|string|多个信息时，Ids,隔开|-
└─needSetOrgan|boolean|是否需要绑定企业，0否1是，是则人员会配置IDENTITY的ORGAN_ID信息|-
└─needSetArea|boolean|是否需要绑定地域，0否1是，是则人员会配置IDENTITY的POWER_AREA_ID信息|-
└─needSetGroup|boolean|是否需要绑定会员组，0否1是，是则人员会配置会员组，并设置IDENTITY内的GROUP_ID|-
└─needSetPower|boolean|是否需要绑定综合权限，0否1是，是则人员会配置IDENTITY的其他综合权限等信息|-
└─opUserId|string|操作人ID|-
└─opOrganId|string|操作单位ID|-
└─opTime|string|操作时间|-
└─opInfo|string|操作说明|-
└─priority|int32|排序码|-
└─status|int32|状态0未初始化1初始化配置成功2初始化配置不成功|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─dataBatch|string|数据批次号|-
└─dataVersion|int32|数据版本，流水号，向上增加|-
└─updateTime|string|数据更新时间|-
└─syncMode|string|同步类型，I插入，U更新，D删除，DM人工删除，UM人工更新|-
└─syncTime|string|同步更新时间|-
└─description|string|描述|-
└─groupName|string|角色组名称，角色名称|-
└─positionName|string|岗名称|-
└─bizPowerName|string|业务范围名称|-
└─subdistrictName|string|业务范围,街镇名称|-
└─communityName|string|业务范围,居委名称|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:05",
    "lastTime": "2026-11-09 17:58:05",
    "id": 949,
    "appId": "25",
    "saveSource": "cqls69",
    "unitName": "carola.harvey",
    "name": "carola.harvey",
    "idNum": "8wpqed",
    "duty": "enqlkp",
    "telephone": "662-667-5459",
    "mobile": "337-229-9034",
    "extInfo1": "kje526",
    "extInfo2": "6rpr9q",
    "extInfo3": "9oq091",
    "needInitUser": true,
    "userId": "25",
    "needInitOrgan": true,
    "organId": "25",
    "type": "qbmc69",
    "foreignUrl": "www.hank-okon.com",
    "bizType": 746,
    "bizOrganId": "25",
    "bizAreaId": 78,
    "bizGroupId": 16,
    "bizPower": "1b7373",
    "bizMultiInfo": "djb5dw",
    "needSetOrgan": true,
    "needSetArea": true,
    "needSetGroup": true,
    "needSetPower": true,
    "opUserId": "25",
    "opOrganId": "25",
    "opTime": "2026-11-09 17:58:05",
    "opInfo": "1ufxhm",
    "priority": 557,
    "status": 36,
    "delFlag": 5,
    "dataBatch": "rbudym",
    "dataVersion": 752,
    "updateTime": "2026-11-09 17:58:05",
    "syncMode": "bygpdr",
    "syncTime": "2026-11-09 17:58:05",
    "description": "e7ll5d",
    "groupName": "carola.harvey",
    "positionName": "carola.harvey",
    "bizPowerName": "carola.harvey",
    "subdistrictName": "carola.harvey",
    "communityName": "carola.harvey"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增户权限预置
**URL:** https://linlan.net/eframe_backend/api/admin/preset/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/json; charset=utf-8

**Description:** 新增户权限预置

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|预置信息ID|false|-
appId|string|所属应用ID|false|-
saveSource|string|来源，RGYZ人工预置，PLTJ批量添加|false|-
unitName|string|服务处所，单位名称|false|-
name|string|姓名|false|-
idNum|string|身份证号|false|-
duty|string|人员职务|false|-
telephone|string|办公电话|false|-
mobile|string|手机号码|false|-
extInfo1|string|备用信息1，可保存岗位名称|false|-
extInfo2|string|备用信息2，可保存所属网格等信息|false|-
extInfo3|string|备用信息3|false|-
needInitUser|boolean|是否同步初始化人员，0否1是，是则人员会加入BASE_USER|false|-
userId|string|机构用户人员ID，关联BASE_USER，初始化之后更新|false|-
needInitOrgan|boolean|是否同步初始化机构，0否1是，是则人员会加入BASE_ORGAN|false|-
organId|string|机构ID，关联BASE_ORGAN，初始化之后更新|false|-
type|string|类型，RCYY人才预约，SJKB数据看板，SJPZ事件配置，SQ12345诉求12345|false|-
foreignUrl|string|外部URL，如SJKB的URL，人才预约的URL|false|-
bizType|int32|业务类型，1具体单位2具体地域3具体权限组4综合权限9多个同类信息，12单位和地域，13单位和权限组，19多个单位，23地域和权限组，29多个地域，39多个权限|false|-
bizOrganId|string|业务机构ID，人员绑定机构，绑定的ORGAN_ID|false|-
bizAreaId|int64|业务权限ID，当前查询范围|false|-
bizGroupId|int64|业务会员组ID|false|-
bizPower|string|业务综合权限，备用字段|false|-
bizMultiInfo|string|多个信息时，Ids,隔开|false|-
needSetOrgan|boolean|是否需要绑定企业，0否1是，是则人员会配置IDENTITY的ORGAN_ID信息|false|-
needSetArea|boolean|是否需要绑定地域，0否1是，是则人员会配置IDENTITY的POWER_AREA_ID信息|false|-
needSetGroup|boolean|是否需要绑定会员组，0否1是，是则人员会配置会员组，并设置IDENTITY内的GROUP_ID|false|-
needSetPower|boolean|是否需要绑定综合权限，0否1是，是则人员会配置IDENTITY的其他综合权限等信息|false|-
opUserId|string|操作人ID|false|-
opOrganId|string|操作单位ID|false|-
opTime|string|操作时间|false|-
opInfo|string|操作说明|false|-
priority|int32|排序码|false|-
status|int32|状态0未初始化1初始化配置成功2初始化配置不成功|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
dataBatch|string|数据批次号|false|-
dataVersion|int32|数据版本，流水号，向上增加|false|-
updateTime|string|数据更新时间|false|-
syncMode|string|同步类型，I插入，U更新，D删除，DM人工删除，UM人工更新|false|-
syncTime|string|同步更新时间|false|-
description|string|描述|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/preset/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:05",
  "lastTime": "2026-11-09 17:58:05",
  "id": 56,
  "appId": "25",
  "saveSource": "zz465i",
  "unitName": "carola.harvey",
  "name": "carola.harvey",
  "idNum": "13w2bb",
  "duty": "p44qen",
  "telephone": "662-667-5459",
  "mobile": "337-229-9034",
  "extInfo1": "d6acdh",
  "extInfo2": "yuqc6l",
  "extInfo3": "zsdu19",
  "needInitUser": true,
  "userId": "25",
  "needInitOrgan": true,
  "organId": "25",
  "type": "z7zstr",
  "foreignUrl": "www.hank-okon.com",
  "bizType": 608,
  "bizOrganId": "25",
  "bizAreaId": 785,
  "bizGroupId": 204,
  "bizPower": "8d10ua",
  "bizMultiInfo": "011uty",
  "needSetOrgan": true,
  "needSetArea": true,
  "needSetGroup": true,
  "needSetPower": true,
  "opUserId": "25",
  "opOrganId": "25",
  "opTime": "2026-11-09 17:58:05",
  "opInfo": "l8izay",
  "priority": 822,
  "status": 491,
  "delFlag": 5,
  "dataBatch": "ibmg1h",
  "dataVersion": 644,
  "updateTime": "2026-11-09 17:58:05",
  "syncMode": "0oj5oz",
  "syncTime": "2026-11-09 17:58:05",
  "description": "feyab8"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "dn8vkq",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改户权限预置
**URL:** https://linlan.net/eframe_backend/api/admin/preset/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/json; charset=utf-8

**Description:** 修改户权限预置

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|预置信息ID|false|-
appId|string|所属应用ID|false|-
saveSource|string|来源，RGYZ人工预置，PLTJ批量添加|false|-
unitName|string|服务处所，单位名称|false|-
name|string|姓名|false|-
idNum|string|身份证号|false|-
duty|string|人员职务|false|-
telephone|string|办公电话|false|-
mobile|string|手机号码|false|-
extInfo1|string|备用信息1，可保存岗位名称|false|-
extInfo2|string|备用信息2，可保存所属网格等信息|false|-
extInfo3|string|备用信息3|false|-
needInitUser|boolean|是否同步初始化人员，0否1是，是则人员会加入BASE_USER|false|-
userId|string|机构用户人员ID，关联BASE_USER，初始化之后更新|false|-
needInitOrgan|boolean|是否同步初始化机构，0否1是，是则人员会加入BASE_ORGAN|false|-
organId|string|机构ID，关联BASE_ORGAN，初始化之后更新|false|-
type|string|类型，RCYY人才预约，SJKB数据看板，SJPZ事件配置，SQ12345诉求12345|false|-
foreignUrl|string|外部URL，如SJKB的URL，人才预约的URL|false|-
bizType|int32|业务类型，1具体单位2具体地域3具体权限组4综合权限9多个同类信息，12单位和地域，13单位和权限组，19多个单位，23地域和权限组，29多个地域，39多个权限|false|-
bizOrganId|string|业务机构ID，人员绑定机构，绑定的ORGAN_ID|false|-
bizAreaId|int64|业务权限ID，当前查询范围|false|-
bizGroupId|int64|业务会员组ID|false|-
bizPower|string|业务综合权限，备用字段|false|-
bizMultiInfo|string|多个信息时，Ids,隔开|false|-
needSetOrgan|boolean|是否需要绑定企业，0否1是，是则人员会配置IDENTITY的ORGAN_ID信息|false|-
needSetArea|boolean|是否需要绑定地域，0否1是，是则人员会配置IDENTITY的POWER_AREA_ID信息|false|-
needSetGroup|boolean|是否需要绑定会员组，0否1是，是则人员会配置会员组，并设置IDENTITY内的GROUP_ID|false|-
needSetPower|boolean|是否需要绑定综合权限，0否1是，是则人员会配置IDENTITY的其他综合权限等信息|false|-
opUserId|string|操作人ID|false|-
opOrganId|string|操作单位ID|false|-
opTime|string|操作时间|false|-
opInfo|string|操作说明|false|-
priority|int32|排序码|false|-
status|int32|状态0未初始化1初始化配置成功2初始化配置不成功|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
dataBatch|string|数据批次号|false|-
dataVersion|int32|数据版本，流水号，向上增加|false|-
updateTime|string|数据更新时间|false|-
syncMode|string|同步类型，I插入，U更新，D删除，DM人工删除，UM人工更新|false|-
syncTime|string|同步更新时间|false|-
description|string|描述|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/preset/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:05",
  "lastTime": "2026-11-09 17:58:05",
  "id": 872,
  "appId": "25",
  "saveSource": "ueax7p",
  "unitName": "carola.harvey",
  "name": "carola.harvey",
  "idNum": "hdlol3",
  "duty": "306e97",
  "telephone": "662-667-5459",
  "mobile": "337-229-9034",
  "extInfo1": "lm95fa",
  "extInfo2": "bme3q3",
  "extInfo3": "bgq7is",
  "needInitUser": true,
  "userId": "25",
  "needInitOrgan": true,
  "organId": "25",
  "type": "7rtngq",
  "foreignUrl": "www.hank-okon.com",
  "bizType": 598,
  "bizOrganId": "25",
  "bizAreaId": 178,
  "bizGroupId": 744,
  "bizPower": "cyzgx9",
  "bizMultiInfo": "jv20pu",
  "needSetOrgan": true,
  "needSetArea": true,
  "needSetGroup": true,
  "needSetPower": true,
  "opUserId": "25",
  "opOrganId": "25",
  "opTime": "2026-11-09 17:58:05",
  "opInfo": "v2h7kf",
  "priority": 863,
  "status": 944,
  "delFlag": 5,
  "dataBatch": "3b4ccr",
  "dataVersion": 353,
  "updateTime": "2026-11-09 17:58:05",
  "syncMode": "shlzmz",
  "syncTime": "2026-11-09 17:58:05",
  "description": "k89p4n"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "ivfsjt",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除户权限预置
**URL:** https://linlan.net/eframe_backend/api/admin/preset/delete/{configIds}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除户权限预置

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
configIds|array| 配置IDs,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/preset/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "dz8b6p",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 刷新户权限预置缓存
**URL:** https://linlan.net/eframe_backend/api/admin/preset/refreshCache.do

**Type:** DELETE

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 刷新户权限预置缓存

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/preset/refreshCache.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "s4wcsb",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 用户注册验证
### 系统用户注册
**URL:** https://linlan.net/eframe_backend/register.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 系统用户注册

**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
username|string|用户名|false|-
password|string|用户密码|false|-
code|string|验证码|false|-
uuid|string|唯一标识|false|-
appId|string|所在应用ID|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -i https://linlan.net/eframe_backend/register.do --data '{
  "username": "carola.harvey",
  "password": "m3x072",
  "code": "12647",
  "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86",
  "appId": "25"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "96guk5",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 管理员登录日志查询读取控制类
### 获取管理员登录日志列表
**URL:** https://linlan.net/eframe_backend/api/monitor/loginlog/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-07 20:45:06

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取管理员登录日志列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
infoId|int64|ID|false|-
username|string|用户账号|false|-
status|string|登录状态 0成功 1失败|false|-
ipaddr|string|登录IP地址|false|-
loginTime|string|访问时间|false|-
browser|string|浏览器类型|false|-
os|string|操作系统|false|-
msg|string|提示消息|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/loginlog/list.do?endTime=2026-11-09 17:56:55&startTime=2026-11-09 17:56:55&browser=63xsyg&msg=o5zhxl&orderBy=581&page=1&username=carola.harvey&limit=10&infoId=491&q=nsykt6&ipaddr=u63aul&status=0n6h7b&os=tbl8rp&loginTime=2026-11-09 17:58:02
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─totalCount|int32|总记录数 the total count|-
└─pageSize|int32|每页记录数 the page size|-
└─totalPage|int32|总页数 the total page|-
└─currPage|int32|当前页数 the current page|-
└─list|array|列表数据 the list|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─infoId|int64|ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─username|string|用户账号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|string|登录状态 0成功 1失败|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ipaddr|string|登录IP地址|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─loginLocation|string|登录地点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─browser|string|浏览器类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─os|string|操作系统|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─msg|string|提示消息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─loginTime|string|访问时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "totalCount": 383,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "infoId": 745,
        "username": "carola.harvey",
        "status": "adu9bg",
        "ipaddr": "y3h63x",
        "loginLocation": "grlfgj",
        "browser": "qqeyam",
        "os": "kpa388",
        "msg": "h8er51",
        "loginTime": "2026-11-09 17:58:02",
        "remark": "8ty9nn"
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取管理员登录日志列表
**URL:** https://linlan.net/eframe_backend/api/monitor/loginlog/export.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-07 20:45:06

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取管理员登录日志列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
infoId|int64|ID|false|-
username|string|用户账号|false|-
status|string|登录状态 0成功 1失败|false|-
ipaddr|string|登录IP地址|false|-
loginTime|string|访问时间|false|-
browser|string|浏览器类型|false|-
os|string|操作系统|false|-
msg|string|提示消息|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/loginlog/export.do --data 'writer.psOut.textOut.nChars=449&msg=ax00d4&page=1&writer.psOut.textOut.nextChar=388&ipaddr=ymel54&username=carola.harvey&loginTime=2026-11-09 17:58:02&status=124&writer.writeBuffer=n&writer.writeBuffer=n&contentType=l5vts5&characterEncoding=yzz64q&browser=xgc6uk&infoId=384&writer.psOut.closing=true&os=7usygt&status=yoyesf&bufferSize=10&writer.psOut.formatter.zero=4&writer.formatter.lastException.detailMessage=success&writer.autoFlush=true&writer.psOut.autoFlush=true&committed=true&orderBy=272&startTime=2026-11-09 17:56:55&writer.formatter.zero=0&writer.psOut.trouble=true&writer.trouble=true&writer.psOut.closed=true&q=06bln0&endTime=2026-11-09 17:56:55&limit=10'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "cyspje",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除管理员登录日志
**URL:** https://linlan.net/eframe_backend/api/monitor/loginlog/{infoIds}.do

**Type:** DELETE

**Author:** Linlan
CreateTime 2024-10-07 20:45:06

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除管理员登录日志

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
infoIds|array| 信息Ids,[array of int64]|true|

**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/loginlog/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "qw2oxk",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 清理管理员登录日志
**URL:** https://linlan.net/eframe_backend/api/monitor/loginlog/clean.do

**Type:** DELETE

**Author:** Linlan
CreateTime 2024-10-07 20:45:06

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 清理管理员登录日志

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/loginlog/clean.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "8ad2zh",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 账户解锁
**URL:** https://linlan.net/eframe_backend/api/monitor/loginlog/unlock/{username}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-07 20:45:06

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 账户解锁

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
username|string| 用户名|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/loginlog/unlock/carola.harvey.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "exaz26",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 管理用户查询读取控制类
### 获取用户列表
**URL:** https://linlan.net/eframe_backend/api/admin/user/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取用户列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
adminId|int64|用户LID|false|-
userId|string|用户UUID|false|-
deptId|int64|部门ID|false|-
organId|string|机构ID|false|-
username|string|用户账号|false|-
nickName|string|用户昵称|false|-
email|string|用户邮箱|false|-
mobile|string|手机号码|false|-
status|string|帐号状态（0未生效 1正常）|false|-
delFlag|int32|删除标志（0代表存在 1代表删除）|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/list.do?deptId=667&userId=25&orderBy=630&username=carola.harvey&adminId=133&nickName=crysta.feeney&page=1&limit=10&status=dtftwj&endTime=2026-11-09 17:56:55&email=afton.goyette@gmail.com&startTime=2026-11-09 17:56:55&mobile=337-229-9034&organId=25&q=du9gm8&delFlag=5
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|用户LID|-
└─userId|string|用户UUID|-
└─deptId|int64|部门ID|-
└─deptName|string|部门名称|-
└─organId|string|机构ID|-
└─organName|string|机构名称|-
└─name|string|人员姓名|-
└─username|string|用户账号|-
└─nickName|string|用户昵称|-
└─email|string|用户邮箱|-
└─mobile|string|手机号码|-
└─imagePath|string|用户头像|-
└─password|string|密码|-
└─isSuperAdmin|boolean|是否超级管理员|-
└─isAuditAdmin|boolean|是否审计只读管理员|-
└─isSelfAdmin|boolean|是否只管理自己的数据|-
└─status|int32|帐号状态（0未生效 1正常）|-
└─delFlag|int32|删除标志（0代表存在 2代表删除）|-
└─lastLoginIp|string|最后登录IP|-
└─lastLoginTime|string|最后登录时间|-
└─description|string|备注,办公地址|-
└─dept|object|部门对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|单位ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|系统机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentId|int64|父节点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─depttypeId|int64|部门分类ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─foreignId|string|外部业务ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createType|int32|创建方式0导入1录入2授权|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称，多级累加名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sname|string|名称简称，本单位显示名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areaCode|string|地域编码，所在城市|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organLeader|string|领导名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─leaderId|string|负责人ID，用户接收相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─leaderMobile|string|负责人手机号码，用户接收相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isOrganLevel|boolean|是否机构本级1是0否默认1|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isVirtual|boolean|是否虚拟节点1是0不是默认0|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isLeaf|boolean|是否叶子节点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isDisabled|boolean|是否禁用0否1是|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─searchCode|string|多级累加路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─imagePath|string|图片路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0未生效1正常2受限3锁定4删除|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|是否删除1已删除0正常|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare1|string|备用1|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare2|string|备用2|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─children|array|子部门|-
└─roles|array|角色对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roletypeId|string|角色分类ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|角色自定义名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|角色自定义代码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|重点优先级|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isRegular|boolean|是否固定权限1表示固定角色0表示自定义角色|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isSuper|boolean|拥有所有权限|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isPublic|boolean|是否公共角色|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0未生效1正常2受限3锁定4删除|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|角色描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areaType|string|地域类型|-
└─roleIds|array|角色组|-
└─positionIds|array|岗位组|-
└─roleId|int64|角色ID|-
└─userRoleList|array|角色集合|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|用户角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptId|int64|部门ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptName|string|部门名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organName|string|机构名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleId|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleName|string|角色名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─adminId|int64|公共管理用户ID|-
└─code|string|验证码|-
└─uuid|string|uuid标识|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:06",
      "lastTime": "2026-11-09 17:58:06",
      "id": 44,
      "userId": "25",
      "deptId": 494,
      "deptName": "carola.harvey",
      "organId": "25",
      "organName": "carola.harvey",
      "name": "carola.harvey",
      "username": "carola.harvey",
      "nickName": "crysta.feeney",
      "email": "afton.goyette@gmail.com",
      "mobile": "337-229-9034",
      "imagePath": "lejf1d",
      "password": "kvx9od",
      "isSuperAdmin": true,
      "isAuditAdmin": true,
      "isSelfAdmin": true,
      "status": 68,
      "delFlag": 5,
      "lastLoginIp": "79.62.69.121",
      "lastLoginTime": "2026-11-09 17:58:06",
      "description": "q3b7st",
      "dept": {
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:06",
        "lastTime": "2026-11-09 17:58:06",
        "id": 948,
        "organId": "25",
        "parentId": 444,
        "appId": "25",
        "depttypeId": 196,
        "foreignId": "25",
        "createType": 524,
        "type": "3efuyi",
        "name": "carola.harvey",
        "sname": "carola.harvey",
        "areaCode": "12647",
        "organLeader": "djtm7u",
        "leaderId": "25",
        "leaderMobile": "337-229-9034",
        "isOrganLevel": true,
        "isVirtual": true,
        "isLeaf": true,
        "isDisabled": true,
        "searchCode": "12647",
        "imagePath": "34o3kp",
        "priority": 585,
        "status": 980,
        "delFlag": 5,
        "description": "27uv2s",
        "spare1": "t1dhzr",
        "spare2": "zp43hw",
        "children": [
          {
            "$ref": ".."
          }
        ]
      },
      "roles": [
        {
          "creatorId": "25",
          "createTime": "2026-11-09 17:58:06",
          "lastTime": "2026-11-09 17:58:06",
          "id": 718,
          "roletypeId": "25",
          "appId": "25",
          "name": "carola.harvey",
          "code": "12647",
          "priority": 755,
          "isRegular": true,
          "isSuper": true,
          "isPublic": true,
          "status": 309,
          "description": "gpopvo",
          "areaType": "wzfx8k"
        }
      ],
      "roleIds": [
        373
      ],
      "positionIds": [
        "wu0swq"
      ],
      "roleId": 233,
      "userRoleList": [
        {
          "id": 375,
          "deptId": 365,
          "deptName": "carola.harvey",
          "organId": "25",
          "organName": "carola.harvey",
          "roleId": 626,
          "roleName": "carola.harvey",
          "adminId": 272
        }
      ],
      "code": "12647",
      "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据用户编号获取详细信息
**URL:** https://linlan.net/eframe_backend/api/admin/[user/{adminId}].do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据用户编号获取详细信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
adminId|int64| 管理员ID|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/[user/848].do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─user|object|当前用户|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|用户LID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─userId|string|用户UUID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptId|int64|部门ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptName|string|部门名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organName|string|机构名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|人员姓名|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─username|string|用户账号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nickName|string|用户昵称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─email|string|用户邮箱|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─mobile|string|手机号码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─imagePath|string|用户头像|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─password|string|密码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isSuperAdmin|boolean|是否超级管理员|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isAuditAdmin|boolean|是否审计只读管理员|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isSelfAdmin|boolean|是否只管理自己的数据|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|帐号状态（0未生效 1正常）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|删除标志（0代表存在 2代表删除）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastLoginIp|string|最后登录IP|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastLoginTime|string|最后登录时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|备注,办公地址|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dept|object|部门对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|单位ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|系统机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentId|int64|父节点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─depttypeId|int64|部门分类ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─foreignId|string|外部业务ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createType|int32|创建方式0导入1录入2授权|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称，多级累加名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sname|string|名称简称，本单位显示名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areaCode|string|地域编码，所在城市|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organLeader|string|领导名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─leaderId|string|负责人ID，用户接收相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─leaderMobile|string|负责人手机号码，用户接收相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isOrganLevel|boolean|是否机构本级1是0否默认1|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isVirtual|boolean|是否虚拟节点1是0不是默认0|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isLeaf|boolean|是否叶子节点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isDisabled|boolean|是否禁用0否1是|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─searchCode|string|多级累加路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─imagePath|string|图片路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0未生效1正常2受限3锁定4删除|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|是否删除1已删除0正常|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare1|string|备用1|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare2|string|备用2|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─children|array|子部门|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roles|array|角色对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roletypeId|string|角色分类ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|角色自定义名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|角色自定义代码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|重点优先级|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isRegular|boolean|是否固定权限1表示固定角色0表示自定义角色|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isSuper|boolean|拥有所有权限|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isPublic|boolean|是否公共角色|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0未生效1正常2受限3锁定4删除|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|角色描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areaType|string|地域类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleIds|array|角色组|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─positionIds|array|岗位组|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleId|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─userRoleList|array|角色集合|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|用户角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptId|int64|部门ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptName|string|部门名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organName|string|机构名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleId|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleName|string|角色名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─adminId|int64|公共管理用户ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|验证码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─uuid|string|uuid标识|-
└─roles|array|角色列表|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleId|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleName|string|角色名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleKey|string|角色权限|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleSort|int32|角色排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─menuCheckStrictly|boolean|菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptCheckStrictly|boolean|部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|角色状态（0未生效 1正常）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─flag|boolean|用户是否存在此角色标识 默认不存在|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─menuIds|array|菜单组|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptIds|array|部门组（数据权限）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─permissions|array|角色菜单权限|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remark|string|备注|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentName|string|父角色名字|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appName|string|全局应用信息类|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roletypeId|string|系统角色分类|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roletypeName|string|系统角色分类|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isSuper|boolean|是否拥有所有权限|-
└─roleList|array|角色列表|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|用户角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleId|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─adminId|int64|公共管理用户ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptId|int64|部门ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptName|string|部门名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organName|string|机构名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleName|string|角色名称|-
└─positions|array|岗位列表|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─postId|string|岗位序号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─postCode|string|岗位编码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─postName|string|岗位名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─postSort|int32|岗位排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态（0未生效1正常2受限3锁定4删除）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建者|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|更新时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|删除标记（0正常 1删除）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remark|string|备注|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ids|array|角色id集合|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─positionId|string|岗位ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─flag|boolean|用户是否存在此岗位标识 默认不存在|-
└─roleIds|array|角色Ids|-
└─positionIds|array|岗位Ids|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "user": {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:06",
      "lastTime": "2026-11-09 17:58:06",
      "id": 61,
      "userId": "25",
      "deptId": 489,
      "deptName": "carola.harvey",
      "organId": "25",
      "organName": "carola.harvey",
      "name": "carola.harvey",
      "username": "carola.harvey",
      "nickName": "crysta.feeney",
      "email": "afton.goyette@gmail.com",
      "mobile": "337-229-9034",
      "imagePath": "zomzhf",
      "password": "sl5ho7",
      "isSuperAdmin": true,
      "isAuditAdmin": true,
      "isSelfAdmin": true,
      "status": 759,
      "delFlag": 5,
      "lastLoginIp": "79.62.69.121",
      "lastLoginTime": "2026-11-09 17:58:06",
      "description": "kse0ui",
      "dept": {
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:06",
        "lastTime": "2026-11-09 17:58:06",
        "id": 422,
        "organId": "25",
        "parentId": 395,
        "appId": "25",
        "depttypeId": 298,
        "foreignId": "25",
        "createType": 842,
        "type": "wvo61b",
        "name": "carola.harvey",
        "sname": "carola.harvey",
        "areaCode": "12647",
        "organLeader": "pewo4s",
        "leaderId": "25",
        "leaderMobile": "337-229-9034",
        "isOrganLevel": true,
        "isVirtual": true,
        "isLeaf": true,
        "isDisabled": true,
        "searchCode": "12647",
        "imagePath": "s2kgwd",
        "priority": 129,
        "status": 400,
        "delFlag": 5,
        "description": "o9foq8",
        "spare1": "8mkosf",
        "spare2": "2oet5n",
        "children": [
          {
            "$ref": ".."
          }
        ]
      },
      "roles": [
        {
          "creatorId": "25",
          "createTime": "2026-11-09 17:58:06",
          "lastTime": "2026-11-09 17:58:06",
          "id": 355,
          "roletypeId": "25",
          "appId": "25",
          "name": "carola.harvey",
          "code": "12647",
          "priority": 50,
          "isRegular": true,
          "isSuper": true,
          "isPublic": true,
          "status": 985,
          "description": "k0o8g2",
          "areaType": "si1saw"
        }
      ],
      "roleIds": [
        301
      ],
      "positionIds": [
        "gp19la"
      ],
      "roleId": 54,
      "userRoleList": [
        {
          "id": 21,
          "deptId": 631,
          "deptName": "carola.harvey",
          "organId": "25",
          "organName": "carola.harvey",
          "roleId": 446,
          "roleName": "carola.harvey",
          "adminId": 123
        }
      ],
      "code": "12647",
      "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86"
    },
    "roles": [
      {
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:06",
        "lastTime": "2026-11-09 17:58:06",
        "roleId": 802,
        "roleName": "carola.harvey",
        "roleKey": "uvb7c1",
        "roleSort": 994,
        "menuCheckStrictly": true,
        "deptCheckStrictly": true,
        "status": 997,
        "flag": true,
        "menuIds": [
          40
        ],
        "deptIds": [
          738
        ],
        "permissions": [
          "h8tny0"
        ],
        "remark": "uc4vn3",
        "parentName": "carola.harvey",
        "appName": "carola.harvey",
        "roletypeId": "25",
        "roletypeName": "carola.harvey",
        "priority": 506,
        "isSuper": true
      }
    ],
    "roleList": [
      {
        "id": 617,
        "roleId": 210,
        "adminId": 623,
        "deptId": 821,
        "deptName": "carola.harvey",
        "organId": "25",
        "organName": "carola.harvey",
        "roleName": "carola.harvey"
      }
    ],
    "positions": [
      {
        "postId": "25",
        "postCode": "12647",
        "postName": "carola.harvey",
        "postSort": 515,
        "status": 190,
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:06",
        "lastTime": "2026-11-09 17:58:06",
        "delFlag": 5,
        "remark": "f0p7at",
        "ids": [
          "g0o2ps"
        ],
        "positionId": "25",
        "flag": true
      }
    ],
    "roleIds": [
      396
    ],
    "positionIds": [
      "s9y3to"
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取用户部门树列表
**URL:** https://linlan.net/eframe_backend/api/admin/user/deptTree.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取用户部门树列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
deptId|int64|单位ID|false|-
organId|string|系统机构ID|false|-
parentId|int64|父节点|false|-
appId|string|应用ID|false|-
depttypeId|int64|部门分类ID|false|-
foreignId|string|外部业务ID|false|-
createType|int32|创建方式0导入1录入2授权|false|-
type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|false|-
name|string|名称，多级累加名称|false|-
sname|string|名称简称，本单位显示名称|false|-
areaCode|string|地域编码，所在城市|false|-
organLeader|string|领导名称|false|-
leaderId|string|负责人ID，用户接收相关信息|false|-
leaderMobile|string|负责人手机号码，用户接收相关信息|false|-
isOrganLevel|boolean|是否机构本级1是0否默认1|false|-
isVirtual|boolean|是否虚拟节点1是0不是默认0|false|-
isLeaf|boolean|是否叶子节点|false|-
isDisabled|boolean|是否禁用0否1是|false|-
searchCode|string|多级累加路径|false|-
imagePath|string|图片路径|false|-
status|int32|状态0未生效1正常2受限3锁定4删除|false|-
creatorId|string|创建用户ID|false|-
delFlag|int32|是否删除1已删除0正常|false|-
description|string|描述|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/deptTree.do?leaderMobile=337-229-9034&endTime=2026-11-09 17:56:55&sname=carola.harvey&spare1=x9ztvm&description=7txumr&areaCode=12647&leaderId=25&spare2=vuqjmz&limit=10&page=1&deptId=79&foreignId=25&q=05nfl6&isLeaf=true&organId=25&imagePath=tk4l5v&organLeader=ngmv21&type=3wbi10&delFlag=5&parentId=566&isOrganLevel=true&createType=360&appId=25&orderBy=273&creatorId=25&depttypeId=222&status=260&isVirtual=true&name=carola.harvey&startTime=2026-11-09 17:56:55&isDisabled=true&searchCode=12647
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─id|int64|节点ID|-
└─label|string|节点名称|-
└─children|array|子节点|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "id": 51,
      "label": "jvd4rw",
      "children": [
        {
          "$ref": ".."
        }
      ]
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### AdminUser Operation. AdminUser数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/admin/user/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/json; charset=utf-8

**Description:** AdminUser Operation. AdminUser数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|用户LID|false|-
userId|string|用户UUID|false|-
deptId|int64|部门ID|false|-
deptName|string|部门名称|false|-
organId|string|机构ID|false|-
organName|string|机构名称|false|-
name|string|人员姓名|false|-
username|string|用户账号|false|-
nickName|string|用户昵称|false|-
email|string|用户邮箱|false|-
mobile|string|手机号码|false|-
imagePath|string|用户头像|false|-
password|string|密码|false|-
isSuperAdmin|boolean|是否超级管理员|false|-
isAuditAdmin|boolean|是否审计只读管理员|false|-
isSelfAdmin|boolean|是否只管理自己的数据|false|-
status|int32|帐号状态（0未生效 1正常）|false|-
delFlag|int32|删除标志（0代表存在 2代表删除）|false|-
lastLoginIp|string|最后登录IP|false|-
lastLoginTime|string|最后登录时间|false|-
description|string|备注,办公地址|false|-
dept|object|部门对象|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─id|int64|单位ID|false|-
└─organId|string|系统机构ID|false|-
└─parentId|int64|父节点|false|-
└─appId|string|应用ID|false|-
└─depttypeId|int64|部门分类ID|false|-
└─foreignId|string|外部业务ID|false|-
└─createType|int32|创建方式0导入1录入2授权|false|-
└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|false|-
└─name|string|名称，多级累加名称|false|-
└─sname|string|名称简称，本单位显示名称|false|-
└─areaCode|string|地域编码，所在城市|false|-
└─organLeader|string|领导名称|false|-
└─leaderId|string|负责人ID，用户接收相关信息|false|-
└─leaderMobile|string|负责人手机号码，用户接收相关信息|false|-
└─isOrganLevel|boolean|是否机构本级1是0否默认1|false|-
└─isVirtual|boolean|是否虚拟节点1是0不是默认0|false|-
└─isLeaf|boolean|是否叶子节点|false|-
└─isDisabled|boolean|是否禁用0否1是|false|-
└─searchCode|string|多级累加路径|false|-
└─imagePath|string|图片路径|false|-
└─priority|int32|排序|false|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|false|-
└─delFlag|int32|是否删除1已删除0正常|false|-
└─description|string|描述|false|-
└─spare1|string|备用1|false|-
└─spare2|string|备用2|false|-
└─children|array|子部门|false|-
roles|array|角色对象|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─id|int64|角色ID|false|-
└─roletypeId|string|角色分类ID|false|-
└─appId|string|应用ID|false|-
└─name|string|角色自定义名称|false|-
└─code|string|角色自定义代码|false|-
└─priority|int32|重点优先级|false|-
└─isRegular|boolean|是否固定权限1表示固定角色0表示自定义角色|false|-
└─isSuper|boolean|拥有所有权限|false|-
└─isPublic|boolean|是否公共角色|false|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|false|-
└─description|string|角色描述|false|-
└─areaType|string|地域类型|false|-
roleIds|array|角色组|false|-
positionIds|array|岗位组|false|-
roleId|int64|角色ID|false|-
userRoleList|array|角色集合|false|-
└─id|int64|用户角色ID|false|-
└─deptId|int64|部门ID|false|-
└─deptName|string|部门名称|false|-
└─organId|string|机构ID|false|-
└─organName|string|机构名称|false|-
└─roleId|int64|角色ID|false|-
└─roleName|string|角色名称|false|-
└─adminId|int64|公共管理用户ID|false|-
code|string|验证码|false|-
uuid|string|uuid标识|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:06",
  "lastTime": "2026-11-09 17:58:06",
  "id": 247,
  "userId": "25",
  "deptId": 365,
  "deptName": "carola.harvey",
  "organId": "25",
  "organName": "carola.harvey",
  "name": "carola.harvey",
  "username": "carola.harvey",
  "nickName": "crysta.feeney",
  "email": "afton.goyette@gmail.com",
  "mobile": "337-229-9034",
  "imagePath": "e97b55",
  "password": "q0fggi",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "status": 159,
  "delFlag": 5,
  "lastLoginIp": "79.62.69.121",
  "lastLoginTime": "2026-11-09 17:58:06",
  "description": "k2icsu",
  "dept": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:06",
    "lastTime": "2026-11-09 17:58:06",
    "id": 795,
    "organId": "25",
    "parentId": 604,
    "appId": "25",
    "depttypeId": 995,
    "foreignId": "25",
    "createType": 919,
    "type": "rykn68",
    "name": "carola.harvey",
    "sname": "carola.harvey",
    "areaCode": "12647",
    "organLeader": "20v91b",
    "leaderId": "25",
    "leaderMobile": "337-229-9034",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "12647",
    "imagePath": "kn4p92",
    "priority": 69,
    "status": 5,
    "delFlag": 5,
    "description": "impwp0",
    "spare1": "l7awwm",
    "spare2": "qxxlat",
    "children": [
      {
        "$ref": ".."
      }
    ]
  },
  "roles": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:06",
      "lastTime": "2026-11-09 17:58:06",
      "id": 955,
      "roletypeId": "25",
      "appId": "25",
      "name": "carola.harvey",
      "code": "12647",
      "priority": 224,
      "isRegular": true,
      "isSuper": true,
      "isPublic": true,
      "status": 675,
      "description": "nemhc2",
      "areaType": "s8dspy"
    }
  ],
  "roleIds": [
    445
  ],
  "positionIds": [
    "esk5ug"
  ],
  "roleId": 85,
  "userRoleList": [
    {
      "id": 769,
      "deptId": 55,
      "deptName": "carola.harvey",
      "organId": "25",
      "organName": "carola.harvey",
      "roleId": 947,
      "roleName": "carola.harvey",
      "adminId": 25
    }
  ],
  "code": "12647",
  "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "upo25u",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### AdminUser Operation. AdminUser数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/admin/user/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/json; charset=utf-8

**Description:** AdminUser Operation. AdminUser数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|用户LID|false|-
userId|string|用户UUID|false|-
deptId|int64|部门ID|false|-
deptName|string|部门名称|false|-
organId|string|机构ID|false|-
organName|string|机构名称|false|-
name|string|人员姓名|false|-
username|string|用户账号|false|-
nickName|string|用户昵称|false|-
email|string|用户邮箱|false|-
mobile|string|手机号码|false|-
imagePath|string|用户头像|false|-
password|string|密码|false|-
isSuperAdmin|boolean|是否超级管理员|false|-
isAuditAdmin|boolean|是否审计只读管理员|false|-
isSelfAdmin|boolean|是否只管理自己的数据|false|-
status|int32|帐号状态（0未生效 1正常）|false|-
delFlag|int32|删除标志（0代表存在 2代表删除）|false|-
lastLoginIp|string|最后登录IP|false|-
lastLoginTime|string|最后登录时间|false|-
description|string|备注,办公地址|false|-
dept|object|部门对象|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─id|int64|单位ID|false|-
└─organId|string|系统机构ID|false|-
└─parentId|int64|父节点|false|-
└─appId|string|应用ID|false|-
└─depttypeId|int64|部门分类ID|false|-
└─foreignId|string|外部业务ID|false|-
└─createType|int32|创建方式0导入1录入2授权|false|-
└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|false|-
└─name|string|名称，多级累加名称|false|-
└─sname|string|名称简称，本单位显示名称|false|-
└─areaCode|string|地域编码，所在城市|false|-
└─organLeader|string|领导名称|false|-
└─leaderId|string|负责人ID，用户接收相关信息|false|-
└─leaderMobile|string|负责人手机号码，用户接收相关信息|false|-
└─isOrganLevel|boolean|是否机构本级1是0否默认1|false|-
└─isVirtual|boolean|是否虚拟节点1是0不是默认0|false|-
└─isLeaf|boolean|是否叶子节点|false|-
└─isDisabled|boolean|是否禁用0否1是|false|-
└─searchCode|string|多级累加路径|false|-
└─imagePath|string|图片路径|false|-
└─priority|int32|排序|false|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|false|-
└─delFlag|int32|是否删除1已删除0正常|false|-
└─description|string|描述|false|-
└─spare1|string|备用1|false|-
└─spare2|string|备用2|false|-
└─children|array|子部门|false|-
roles|array|角色对象|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─id|int64|角色ID|false|-
└─roletypeId|string|角色分类ID|false|-
└─appId|string|应用ID|false|-
└─name|string|角色自定义名称|false|-
└─code|string|角色自定义代码|false|-
└─priority|int32|重点优先级|false|-
└─isRegular|boolean|是否固定权限1表示固定角色0表示自定义角色|false|-
└─isSuper|boolean|拥有所有权限|false|-
└─isPublic|boolean|是否公共角色|false|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|false|-
└─description|string|角色描述|false|-
└─areaType|string|地域类型|false|-
roleIds|array|角色组|false|-
positionIds|array|岗位组|false|-
roleId|int64|角色ID|false|-
userRoleList|array|角色集合|false|-
└─id|int64|用户角色ID|false|-
└─deptId|int64|部门ID|false|-
└─deptName|string|部门名称|false|-
└─organId|string|机构ID|false|-
└─organName|string|机构名称|false|-
└─roleId|int64|角色ID|false|-
└─roleName|string|角色名称|false|-
└─adminId|int64|公共管理用户ID|false|-
code|string|验证码|false|-
uuid|string|uuid标识|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:06",
  "lastTime": "2026-11-09 17:58:06",
  "id": 858,
  "userId": "25",
  "deptId": 40,
  "deptName": "carola.harvey",
  "organId": "25",
  "organName": "carola.harvey",
  "name": "carola.harvey",
  "username": "carola.harvey",
  "nickName": "crysta.feeney",
  "email": "afton.goyette@gmail.com",
  "mobile": "337-229-9034",
  "imagePath": "h4h369",
  "password": "fqs6il",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "status": 26,
  "delFlag": 5,
  "lastLoginIp": "79.62.69.121",
  "lastLoginTime": "2026-11-09 17:58:06",
  "description": "swyh7c",
  "dept": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:06",
    "lastTime": "2026-11-09 17:58:06",
    "id": 57,
    "organId": "25",
    "parentId": 677,
    "appId": "25",
    "depttypeId": 350,
    "foreignId": "25",
    "createType": 143,
    "type": "3u5ub1",
    "name": "carola.harvey",
    "sname": "carola.harvey",
    "areaCode": "12647",
    "organLeader": "nagdjq",
    "leaderId": "25",
    "leaderMobile": "337-229-9034",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "12647",
    "imagePath": "soif0w",
    "priority": 728,
    "status": 754,
    "delFlag": 5,
    "description": "g1x13d",
    "spare1": "wl3k3p",
    "spare2": "9wxte8",
    "children": [
      {
        "$ref": ".."
      }
    ]
  },
  "roles": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:06",
      "lastTime": "2026-11-09 17:58:06",
      "id": 980,
      "roletypeId": "25",
      "appId": "25",
      "name": "carola.harvey",
      "code": "12647",
      "priority": 0,
      "isRegular": true,
      "isSuper": true,
      "isPublic": true,
      "status": 675,
      "description": "mgn01r",
      "areaType": "pmx624"
    }
  ],
  "roleIds": [
    628
  ],
  "positionIds": [
    "n0hwzj"
  ],
  "roleId": 363,
  "userRoleList": [
    {
      "id": 45,
      "deptId": 8,
      "deptName": "carola.harvey",
      "organId": "25",
      "organName": "carola.harvey",
      "roleId": 295,
      "roleName": "carola.harvey",
      "adminId": 979
    }
  ],
  "code": "12647",
  "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "xgpsgi",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 停用启用用户
**URL:** https://linlan.net/eframe_backend/api/admin/user/disable/{id}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/json; charset=utf-8

**Description:** 停用启用用户

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|企业管理用户ID|false|-
userId|string|系统管理用户ID|false|-
organId|string|机构ID|false|-
deptId|int64|单位ID|false|-
createType|int32|创建方式0导入1录入2授权|false|-
name|string|显示名称，可设置为用户名、手机号、昵称、真名|false|-
username|string|用户名|false|-
mobile|string|手机号码|false|-
email|string|电子邮箱|false|-
password|string|密码|false|-
salt|string|混淆字符|false|-
imagePath|string|头像|false|-
adminType|string|管理类型：ADMIN管理员，DEMO演示用户|false|-
isSuperAdmin|boolean|是否超级管理员|false|-
isAuditAdmin|boolean|是否审计只读管理员|false|-
isSelfAdmin|boolean|是否只管理自己的数据|false|-
adminRange|string|管理的范围配置JSON，APP_ID或者SITE_ID的数组，或者单个APP_ID|false|-
adminPerms|string|管理权限JSON|false|-
lastAppId|string|最后登录的应用ID|false|-
lastLoginTime|string|最后登录时间|false|-
lastLoginIp|string|最后登录IP|false|-
loginCount|int32|登录次数|false|-
status|int32|状态0未生效1正常2受限3锁定4删除|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-
roleIds|array|角色组|false|-
positionIds|array|岗位组|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/disable/{id}.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:06",
  "lastTime": "2026-11-09 17:58:06",
  "id": 310,
  "userId": "25",
  "organId": "25",
  "deptId": 551,
  "createType": 554,
  "name": "carola.harvey",
  "username": "carola.harvey",
  "mobile": "337-229-9034",
  "email": "afton.goyette@gmail.com",
  "password": "25ixtf",
  "salt": "sdivc6",
  "imagePath": "lexoo7",
  "adminType": "69nf3b",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "adminRange": "illf5t",
  "adminPerms": "47yotb",
  "lastAppId": "25",
  "lastLoginTime": "2026-11-09 17:58:06",
  "lastLoginIp": "79.62.69.121",
  "loginCount": 903,
  "status": 723,
  "delFlag": 5,
  "spare1": "pf081d",
  "spare2": "38i6uu",
  "roleIds": [
    750
  ],
  "positionIds": [
    "cio746"
  ]
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "ng8rfj",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 重置密码
**URL:** https://linlan.net/eframe_backend/api/admin/user/resetpassword/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/json; charset=utf-8

**Description:** 重置密码

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array| 管理员Ids,[array of int64]|true|

**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|用户LID|false|-
userId|string|用户UUID|false|-
deptId|int64|部门ID|false|-
deptName|string|部门名称|false|-
organId|string|机构ID|false|-
organName|string|机构名称|false|-
name|string|人员姓名|false|-
username|string|用户账号|false|-
nickName|string|用户昵称|false|-
email|string|用户邮箱|false|-
mobile|string|手机号码|false|-
imagePath|string|用户头像|false|-
password|string|密码|false|-
isSuperAdmin|boolean|是否超级管理员|false|-
isAuditAdmin|boolean|是否审计只读管理员|false|-
isSelfAdmin|boolean|是否只管理自己的数据|false|-
status|int32|帐号状态（0未生效 1正常）|false|-
delFlag|int32|删除标志（0代表存在 2代表删除）|false|-
lastLoginIp|string|最后登录IP|false|-
lastLoginTime|string|最后登录时间|false|-
description|string|备注,办公地址|false|-
dept|object|部门对象|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─id|int64|单位ID|false|-
└─organId|string|系统机构ID|false|-
└─parentId|int64|父节点|false|-
└─appId|string|应用ID|false|-
└─depttypeId|int64|部门分类ID|false|-
└─foreignId|string|外部业务ID|false|-
└─createType|int32|创建方式0导入1录入2授权|false|-
└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|false|-
└─name|string|名称，多级累加名称|false|-
└─sname|string|名称简称，本单位显示名称|false|-
└─areaCode|string|地域编码，所在城市|false|-
└─organLeader|string|领导名称|false|-
└─leaderId|string|负责人ID，用户接收相关信息|false|-
└─leaderMobile|string|负责人手机号码，用户接收相关信息|false|-
└─isOrganLevel|boolean|是否机构本级1是0否默认1|false|-
└─isVirtual|boolean|是否虚拟节点1是0不是默认0|false|-
└─isLeaf|boolean|是否叶子节点|false|-
└─isDisabled|boolean|是否禁用0否1是|false|-
└─searchCode|string|多级累加路径|false|-
└─imagePath|string|图片路径|false|-
└─priority|int32|排序|false|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|false|-
└─delFlag|int32|是否删除1已删除0正常|false|-
└─description|string|描述|false|-
└─spare1|string|备用1|false|-
└─spare2|string|备用2|false|-
└─children|array|子部门|false|-
roles|array|角色对象|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─id|int64|角色ID|false|-
└─roletypeId|string|角色分类ID|false|-
└─appId|string|应用ID|false|-
└─name|string|角色自定义名称|false|-
└─code|string|角色自定义代码|false|-
└─priority|int32|重点优先级|false|-
└─isRegular|boolean|是否固定权限1表示固定角色0表示自定义角色|false|-
└─isSuper|boolean|拥有所有权限|false|-
└─isPublic|boolean|是否公共角色|false|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|false|-
└─description|string|角色描述|false|-
└─areaType|string|地域类型|false|-
roleIds|array|角色组|false|-
positionIds|array|岗位组|false|-
roleId|int64|角色ID|false|-
userRoleList|array|角色集合|false|-
└─id|int64|用户角色ID|false|-
└─deptId|int64|部门ID|false|-
└─deptName|string|部门名称|false|-
└─organId|string|机构ID|false|-
└─organName|string|机构名称|false|-
└─roleId|int64|角色ID|false|-
└─roleName|string|角色名称|false|-
└─adminId|int64|公共管理用户ID|false|-
code|string|验证码|false|-
uuid|string|uuid标识|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/resetpassword/.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:06",
  "lastTime": "2026-11-09 17:58:06",
  "id": 91,
  "userId": "25",
  "deptId": 821,
  "deptName": "carola.harvey",
  "organId": "25",
  "organName": "carola.harvey",
  "name": "carola.harvey",
  "username": "carola.harvey",
  "nickName": "crysta.feeney",
  "email": "afton.goyette@gmail.com",
  "mobile": "337-229-9034",
  "imagePath": "s419ul",
  "password": "p5ixbc",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "status": 595,
  "delFlag": 5,
  "lastLoginIp": "79.62.69.121",
  "lastLoginTime": "2026-11-09 17:58:06",
  "description": "jtoddg",
  "dept": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:06",
    "lastTime": "2026-11-09 17:58:06",
    "id": 29,
    "organId": "25",
    "parentId": 995,
    "appId": "25",
    "depttypeId": 592,
    "foreignId": "25",
    "createType": 868,
    "type": "i4j9iy",
    "name": "carola.harvey",
    "sname": "carola.harvey",
    "areaCode": "12647",
    "organLeader": "il6bcc",
    "leaderId": "25",
    "leaderMobile": "337-229-9034",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "12647",
    "imagePath": "dzh68c",
    "priority": 93,
    "status": 450,
    "delFlag": 5,
    "description": "ujrpwb",
    "spare1": "brnv24",
    "spare2": "f9dzm0",
    "children": [
      {
        "$ref": ".."
      }
    ]
  },
  "roles": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:06",
      "lastTime": "2026-11-09 17:58:06",
      "id": 586,
      "roletypeId": "25",
      "appId": "25",
      "name": "carola.harvey",
      "code": "12647",
      "priority": 597,
      "isRegular": true,
      "isSuper": true,
      "isPublic": true,
      "status": 353,
      "description": "wt2qv1",
      "areaType": "e2gtjd"
    }
  ],
  "roleIds": [
    977
  ],
  "positionIds": [
    "fijrzs"
  ],
  "roleId": 819,
  "userRoleList": [
    {
      "id": 602,
      "deptId": 123,
      "deptName": "carola.harvey",
      "organId": "25",
      "organName": "carola.harvey",
      "roleId": 406,
      "roleName": "carola.harvey",
      "adminId": 43
    }
  ],
  "code": "12647",
  "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "llpyfo",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除用户
**URL:** https://linlan.net/eframe_backend/api/admin/user/delete/{adminIds}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除用户

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
adminIds|array| 管理员Ids,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "ubxfx0",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 用户数据导出
**URL:** https://linlan.net/eframe_backend/api/admin/user/export.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 用户数据导出

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
adminId|int64|用户LID|false|-
userId|string|用户UUID|false|-
deptId|int64|部门ID|false|-
organId|string|机构ID|false|-
username|string|用户账号|false|-
nickName|string|用户昵称|false|-
email|string|用户邮箱|false|-
mobile|string|手机号码|false|-
status|string|帐号状态（0未生效 1正常）|false|-
delFlag|int32|删除标志（0代表存在 1代表删除）|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/export.do --data 'writer.psOut.autoFlush=true&nickName=crysta.feeney&writer.psOut.trouble=true&delFlag=5&writer.psOut.formatter.zero=o&orderBy=83&adminId=34&username=carola.harvey&status=202&limit=10&deptId=420&page=1&writer.psOut.closed=true&userId=25&email=afton.goyette@gmail.com&characterEncoding=w7flou&organId=25&writer.formatter.lastException.detailMessage=success&q=k8sww0&startTime=2026-11-09 17:56:55&writer.trouble=true&writer.writeBuffer=a&writer.writeBuffer=a&contentType=d0rlpw&committed=true&status=miwb2a&writer.psOut.textOut.nextChar=463&writer.formatter.zero=u&writer.psOut.closing=true&bufferSize=10&mobile=337-229-9034&endTime=2026-11-09 17:56:55&writer.autoFlush=true&writer.psOut.textOut.nChars=918'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "mqbkqp",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 用户数据导入
**URL:** https://linlan.net/eframe_backend/api/admin/user/importData.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** multipart/form-data

**Description:** 用户数据导入

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
file|file| 文件|true|-
updateSupport|boolean|    是否支持更新|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: multipart/form-data' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/importData.do --data 'updateSupport=true'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "qu1djp",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 用户导入模板下载
**URL:** https://linlan.net/eframe_backend/api/admin/user/importTemplate.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 用户导入模板下载

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/importTemplate.do --data 'writer.psOut.closing=true&contentType=xscsys&status=280&writer.psOut.textOut.nextChar=196&writer.psOut.autoFlush=true&writer.writeBuffer=l&writer.writeBuffer=l&writer.psOut.closed=true&characterEncoding=3wrjmj&committed=true&writer.autoFlush=true&writer.psOut.trouble=true&writer.trouble=true&bufferSize=10&writer.psOut.textOut.nChars=499&writer.psOut.formatter.zero=8&writer.formatter.lastException.detailMessage=success&writer.formatter.zero=y'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "jsn0v1",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 重置密码
**URL:** https://linlan.net/eframe_backend/api/admin/user/resetPwd.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/json; charset=utf-8

**Description:** 重置密码

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|用户LID|false|-
userId|string|用户UUID|false|-
deptId|int64|部门ID|false|-
deptName|string|部门名称|false|-
organId|string|机构ID|false|-
organName|string|机构名称|false|-
name|string|人员姓名|false|-
username|string|用户账号|false|-
nickName|string|用户昵称|false|-
email|string|用户邮箱|false|-
mobile|string|手机号码|false|-
imagePath|string|用户头像|false|-
password|string|密码|false|-
isSuperAdmin|boolean|是否超级管理员|false|-
isAuditAdmin|boolean|是否审计只读管理员|false|-
isSelfAdmin|boolean|是否只管理自己的数据|false|-
status|int32|帐号状态（0未生效 1正常）|false|-
delFlag|int32|删除标志（0代表存在 2代表删除）|false|-
lastLoginIp|string|最后登录IP|false|-
lastLoginTime|string|最后登录时间|false|-
description|string|备注,办公地址|false|-
dept|object|部门对象|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─id|int64|单位ID|false|-
└─organId|string|系统机构ID|false|-
└─parentId|int64|父节点|false|-
└─appId|string|应用ID|false|-
└─depttypeId|int64|部门分类ID|false|-
└─foreignId|string|外部业务ID|false|-
└─createType|int32|创建方式0导入1录入2授权|false|-
└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|false|-
└─name|string|名称，多级累加名称|false|-
└─sname|string|名称简称，本单位显示名称|false|-
└─areaCode|string|地域编码，所在城市|false|-
└─organLeader|string|领导名称|false|-
└─leaderId|string|负责人ID，用户接收相关信息|false|-
└─leaderMobile|string|负责人手机号码，用户接收相关信息|false|-
└─isOrganLevel|boolean|是否机构本级1是0否默认1|false|-
└─isVirtual|boolean|是否虚拟节点1是0不是默认0|false|-
└─isLeaf|boolean|是否叶子节点|false|-
└─isDisabled|boolean|是否禁用0否1是|false|-
└─searchCode|string|多级累加路径|false|-
└─imagePath|string|图片路径|false|-
└─priority|int32|排序|false|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|false|-
└─delFlag|int32|是否删除1已删除0正常|false|-
└─description|string|描述|false|-
└─spare1|string|备用1|false|-
└─spare2|string|备用2|false|-
└─children|array|子部门|false|-
roles|array|角色对象|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─id|int64|角色ID|false|-
└─roletypeId|string|角色分类ID|false|-
└─appId|string|应用ID|false|-
└─name|string|角色自定义名称|false|-
└─code|string|角色自定义代码|false|-
└─priority|int32|重点优先级|false|-
└─isRegular|boolean|是否固定权限1表示固定角色0表示自定义角色|false|-
└─isSuper|boolean|拥有所有权限|false|-
└─isPublic|boolean|是否公共角色|false|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|false|-
└─description|string|角色描述|false|-
└─areaType|string|地域类型|false|-
roleIds|array|角色组|false|-
positionIds|array|岗位组|false|-
roleId|int64|角色ID|false|-
userRoleList|array|角色集合|false|-
└─id|int64|用户角色ID|false|-
└─deptId|int64|部门ID|false|-
└─deptName|string|部门名称|false|-
└─organId|string|机构ID|false|-
└─organName|string|机构名称|false|-
└─roleId|int64|角色ID|false|-
└─roleName|string|角色名称|false|-
└─adminId|int64|公共管理用户ID|false|-
code|string|验证码|false|-
uuid|string|uuid标识|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/resetPwd.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:06",
  "lastTime": "2026-11-09 17:58:06",
  "id": 402,
  "userId": "25",
  "deptId": 855,
  "deptName": "carola.harvey",
  "organId": "25",
  "organName": "carola.harvey",
  "name": "carola.harvey",
  "username": "carola.harvey",
  "nickName": "crysta.feeney",
  "email": "afton.goyette@gmail.com",
  "mobile": "337-229-9034",
  "imagePath": "94lqch",
  "password": "24w80x",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "status": 333,
  "delFlag": 5,
  "lastLoginIp": "79.62.69.121",
  "lastLoginTime": "2026-11-09 17:58:06",
  "description": "kixqc6",
  "dept": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:06",
    "lastTime": "2026-11-09 17:58:06",
    "id": 454,
    "organId": "25",
    "parentId": 396,
    "appId": "25",
    "depttypeId": 825,
    "foreignId": "25",
    "createType": 974,
    "type": "vizggc",
    "name": "carola.harvey",
    "sname": "carola.harvey",
    "areaCode": "12647",
    "organLeader": "3d5am3",
    "leaderId": "25",
    "leaderMobile": "337-229-9034",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "12647",
    "imagePath": "ujo6zr",
    "priority": 571,
    "status": 370,
    "delFlag": 5,
    "description": "krlu0h",
    "spare1": "6ypch9",
    "spare2": "ec4g1u",
    "children": [
      {
        "$ref": ".."
      }
    ]
  },
  "roles": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:06",
      "lastTime": "2026-11-09 17:58:06",
      "id": 127,
      "roletypeId": "25",
      "appId": "25",
      "name": "carola.harvey",
      "code": "12647",
      "priority": 263,
      "isRegular": true,
      "isSuper": true,
      "isPublic": true,
      "status": 214,
      "description": "gkui00",
      "areaType": "k22jin"
    }
  ],
  "roleIds": [
    38
  ],
  "positionIds": [
    "11pim0"
  ],
  "roleId": 183,
  "userRoleList": [
    {
      "id": 980,
      "deptId": 465,
      "deptName": "carola.harvey",
      "organId": "25",
      "organName": "carola.harvey",
      "roleId": 465,
      "roleName": "carola.harvey",
      "adminId": 710
    }
  ],
  "code": "12647",
  "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "vhg0yt",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 用户状态修改
**URL:** https://linlan.net/eframe_backend/api/admin/user/changeStatus.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/json; charset=utf-8

**Description:** 用户状态修改

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|用户LID|false|-
userId|string|用户UUID|false|-
deptId|int64|部门ID|false|-
deptName|string|部门名称|false|-
organId|string|机构ID|false|-
organName|string|机构名称|false|-
name|string|人员姓名|false|-
username|string|用户账号|false|-
nickName|string|用户昵称|false|-
email|string|用户邮箱|false|-
mobile|string|手机号码|false|-
imagePath|string|用户头像|false|-
password|string|密码|false|-
isSuperAdmin|boolean|是否超级管理员|false|-
isAuditAdmin|boolean|是否审计只读管理员|false|-
isSelfAdmin|boolean|是否只管理自己的数据|false|-
status|int32|帐号状态（0未生效 1正常）|false|-
delFlag|int32|删除标志（0代表存在 2代表删除）|false|-
lastLoginIp|string|最后登录IP|false|-
lastLoginTime|string|最后登录时间|false|-
description|string|备注,办公地址|false|-
dept|object|部门对象|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─id|int64|单位ID|false|-
└─organId|string|系统机构ID|false|-
└─parentId|int64|父节点|false|-
└─appId|string|应用ID|false|-
└─depttypeId|int64|部门分类ID|false|-
└─foreignId|string|外部业务ID|false|-
└─createType|int32|创建方式0导入1录入2授权|false|-
└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|false|-
└─name|string|名称，多级累加名称|false|-
└─sname|string|名称简称，本单位显示名称|false|-
└─areaCode|string|地域编码，所在城市|false|-
└─organLeader|string|领导名称|false|-
└─leaderId|string|负责人ID，用户接收相关信息|false|-
└─leaderMobile|string|负责人手机号码，用户接收相关信息|false|-
└─isOrganLevel|boolean|是否机构本级1是0否默认1|false|-
└─isVirtual|boolean|是否虚拟节点1是0不是默认0|false|-
└─isLeaf|boolean|是否叶子节点|false|-
└─isDisabled|boolean|是否禁用0否1是|false|-
└─searchCode|string|多级累加路径|false|-
└─imagePath|string|图片路径|false|-
└─priority|int32|排序|false|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|false|-
└─delFlag|int32|是否删除1已删除0正常|false|-
└─description|string|描述|false|-
└─spare1|string|备用1|false|-
└─spare2|string|备用2|false|-
└─children|array|子部门|false|-
roles|array|角色对象|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─id|int64|角色ID|false|-
└─roletypeId|string|角色分类ID|false|-
└─appId|string|应用ID|false|-
└─name|string|角色自定义名称|false|-
└─code|string|角色自定义代码|false|-
└─priority|int32|重点优先级|false|-
└─isRegular|boolean|是否固定权限1表示固定角色0表示自定义角色|false|-
└─isSuper|boolean|拥有所有权限|false|-
└─isPublic|boolean|是否公共角色|false|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|false|-
└─description|string|角色描述|false|-
└─areaType|string|地域类型|false|-
roleIds|array|角色组|false|-
positionIds|array|岗位组|false|-
roleId|int64|角色ID|false|-
userRoleList|array|角色集合|false|-
└─id|int64|用户角色ID|false|-
└─deptId|int64|部门ID|false|-
└─deptName|string|部门名称|false|-
└─organId|string|机构ID|false|-
└─organName|string|机构名称|false|-
└─roleId|int64|角色ID|false|-
└─roleName|string|角色名称|false|-
└─adminId|int64|公共管理用户ID|false|-
code|string|验证码|false|-
uuid|string|uuid标识|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/changeStatus.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:06",
  "lastTime": "2026-11-09 17:58:06",
  "id": 167,
  "userId": "25",
  "deptId": 35,
  "deptName": "carola.harvey",
  "organId": "25",
  "organName": "carola.harvey",
  "name": "carola.harvey",
  "username": "carola.harvey",
  "nickName": "crysta.feeney",
  "email": "afton.goyette@gmail.com",
  "mobile": "337-229-9034",
  "imagePath": "cm7jlp",
  "password": "z57fpe",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "status": 724,
  "delFlag": 5,
  "lastLoginIp": "79.62.69.121",
  "lastLoginTime": "2026-11-09 17:58:06",
  "description": "3fykhy",
  "dept": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:06",
    "lastTime": "2026-11-09 17:58:06",
    "id": 351,
    "organId": "25",
    "parentId": 475,
    "appId": "25",
    "depttypeId": 406,
    "foreignId": "25",
    "createType": 180,
    "type": "ptxkiw",
    "name": "carola.harvey",
    "sname": "carola.harvey",
    "areaCode": "12647",
    "organLeader": "ey557z",
    "leaderId": "25",
    "leaderMobile": "337-229-9034",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "12647",
    "imagePath": "18evij",
    "priority": 589,
    "status": 153,
    "delFlag": 5,
    "description": "l8f5qm",
    "spare1": "zrdhxo",
    "spare2": "z7uxcl",
    "children": [
      {
        "$ref": ".."
      }
    ]
  },
  "roles": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:06",
      "lastTime": "2026-11-09 17:58:06",
      "id": 761,
      "roletypeId": "25",
      "appId": "25",
      "name": "carola.harvey",
      "code": "12647",
      "priority": 873,
      "isRegular": true,
      "isSuper": true,
      "isPublic": true,
      "status": 260,
      "description": "cdyk2l",
      "areaType": "ei9uoz"
    }
  ],
  "roleIds": [
    860
  ],
  "positionIds": [
    "qlsis3"
  ],
  "roleId": 470,
  "userRoleList": [
    {
      "id": 341,
      "deptId": 45,
      "deptName": "carola.harvey",
      "organId": "25",
      "organName": "carola.harvey",
      "roleId": 991,
      "roleName": "carola.harvey",
      "adminId": 766
    }
  ],
  "code": "12647",
  "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "ffmxps",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据用户编号获取授权角色
**URL:** https://linlan.net/eframe_backend/api/admin/user/authRole/{adminId}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据用户编号获取授权角色

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
adminId|int64|    管理员ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/authRole/275.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "lqu9rr",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 用户授权角色
**URL:** https://linlan.net/eframe_backend/api/admin/user/authRole.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 用户授权角色

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
adminId|int64|    管理员ID|false|-
roleIds|array|    角色Ids,[array of int64]|false|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/authRole.do --data 'adminId=6&roleIds=eknkoo&roleIds=eknkoo'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "23se79",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 个人资料信息
**URL:** https://linlan.net/eframe_backend/api/admin/user/profile.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 个人资料信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/profile.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─user|object|当前用户|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─authorities|array|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─username|string|用户名|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─password|string|密码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─userId|string|用户UUID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─userLid|int64|用户LID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|所属应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptId|int64|部门ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|用户机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─token|string|登录令牌|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─viewName|string|昵称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─needChangePassword|boolean|需要修改密码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─email|string|邮箱|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─mobile|string|手机号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─imagePath|string|头像URL|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─loginCount|int32|登录次数|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─loginIp|string|上次登录IP|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastUpdatePasswordTime|string|最后修改密码时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─foreignId|string|外部ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─expireTime|string|过期时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─loginTime|string|登录时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─userType|string|用户类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isSuperAdmin|boolean|是否超级管理员|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─loginBrowse|string|登录的浏览器|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─loginOs|string|登录的OS|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─perms|array|权限列表|-
└─roleGroup|string|角色组|-
└─positionGroup|string|岗位组|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "user": {
      "authorities": [
        {
          "object": "any object"
        }
      ],
      "username": "carola.harvey",
      "password": "q6xzs4",
      "userId": "25",
      "userLid": 973,
      "appId": "25",
      "deptId": 109,
      "organId": "25",
      "token": "r2j2f5",
      "viewName": "carola.harvey",
      "needChangePassword": true,
      "email": "afton.goyette@gmail.com",
      "mobile": "337-229-9034",
      "imagePath": "weugur",
      "loginCount": 735,
      "loginIp": "79.62.69.121",
      "lastUpdatePasswordTime": "2026-11-09 17:58:06",
      "lastTime": "2026-11-09 17:58:06",
      "foreignId": "25",
      "expireTime": "2026-11-09 17:58:06",
      "loginTime": "2026-11-09 17:58:06",
      "userType": "3mvhcs",
      "isSuperAdmin": true,
      "loginBrowse": "lt0src",
      "loginOs": "k7hza0",
      "perms": [
        "yocdmi"
      ]
    },
    "roleGroup": "5n91sb",
    "positionGroup": "ce5hys"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 个人信息
**URL:** https://linlan.net/eframe_backend/api/admin/user/info.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 个人信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/info.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|用户LID|-
└─userId|string|用户UUID|-
└─deptId|int64|部门ID|-
└─deptName|string|部门名称|-
└─organId|string|机构ID|-
└─organName|string|机构名称|-
└─name|string|人员姓名|-
└─username|string|用户账号|-
└─nickName|string|用户昵称|-
└─email|string|用户邮箱|-
└─mobile|string|手机号码|-
└─imagePath|string|用户头像|-
└─password|string|密码|-
└─isSuperAdmin|boolean|是否超级管理员|-
└─isAuditAdmin|boolean|是否审计只读管理员|-
└─isSelfAdmin|boolean|是否只管理自己的数据|-
└─status|int32|帐号状态（0未生效 1正常）|-
└─delFlag|int32|删除标志（0代表存在 2代表删除）|-
└─lastLoginIp|string|最后登录IP|-
└─lastLoginTime|string|最后登录时间|-
└─description|string|备注,办公地址|-
└─dept|object|部门对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|单位ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|系统机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentId|int64|父节点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─depttypeId|int64|部门分类ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─foreignId|string|外部业务ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createType|int32|创建方式0导入1录入2授权|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称，多级累加名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sname|string|名称简称，本单位显示名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areaCode|string|地域编码，所在城市|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organLeader|string|领导名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─leaderId|string|负责人ID，用户接收相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─leaderMobile|string|负责人手机号码，用户接收相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isOrganLevel|boolean|是否机构本级1是0否默认1|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isVirtual|boolean|是否虚拟节点1是0不是默认0|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isLeaf|boolean|是否叶子节点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isDisabled|boolean|是否禁用0否1是|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─searchCode|string|多级累加路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─imagePath|string|图片路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0未生效1正常2受限3锁定4删除|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|是否删除1已删除0正常|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare1|string|备用1|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare2|string|备用2|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─children|array|子部门|-
└─roles|array|角色对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roletypeId|string|角色分类ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|角色自定义名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|角色自定义代码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|重点优先级|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isRegular|boolean|是否固定权限1表示固定角色0表示自定义角色|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isSuper|boolean|拥有所有权限|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isPublic|boolean|是否公共角色|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0未生效1正常2受限3锁定4删除|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|角色描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areaType|string|地域类型|-
└─roleIds|array|角色组|-
└─positionIds|array|岗位组|-
└─roleId|int64|角色ID|-
└─userRoleList|array|角色集合|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|用户角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptId|int64|部门ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptName|string|部门名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organName|string|机构名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleId|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleName|string|角色名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─adminId|int64|公共管理用户ID|-
└─code|string|验证码|-
└─uuid|string|uuid标识|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:06",
    "lastTime": "2026-11-09 17:58:06",
    "id": 438,
    "userId": "25",
    "deptId": 446,
    "deptName": "carola.harvey",
    "organId": "25",
    "organName": "carola.harvey",
    "name": "carola.harvey",
    "username": "carola.harvey",
    "nickName": "crysta.feeney",
    "email": "afton.goyette@gmail.com",
    "mobile": "337-229-9034",
    "imagePath": "8evtta",
    "password": "gtqvi9",
    "isSuperAdmin": true,
    "isAuditAdmin": true,
    "isSelfAdmin": true,
    "status": 884,
    "delFlag": 5,
    "lastLoginIp": "79.62.69.121",
    "lastLoginTime": "2026-11-09 17:58:06",
    "description": "fde0s1",
    "dept": {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:06",
      "lastTime": "2026-11-09 17:58:06",
      "id": 91,
      "organId": "25",
      "parentId": 275,
      "appId": "25",
      "depttypeId": 677,
      "foreignId": "25",
      "createType": 348,
      "type": "b78psh",
      "name": "carola.harvey",
      "sname": "carola.harvey",
      "areaCode": "12647",
      "organLeader": "r254hk",
      "leaderId": "25",
      "leaderMobile": "337-229-9034",
      "isOrganLevel": true,
      "isVirtual": true,
      "isLeaf": true,
      "isDisabled": true,
      "searchCode": "12647",
      "imagePath": "ezuba2",
      "priority": 533,
      "status": 343,
      "delFlag": 5,
      "description": "am2dg9",
      "spare1": "2gw00p",
      "spare2": "i7ztvs",
      "children": [
        {
          "$ref": ".."
        }
      ]
    },
    "roles": [
      {
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:06",
        "lastTime": "2026-11-09 17:58:06",
        "id": 178,
        "roletypeId": "25",
        "appId": "25",
        "name": "carola.harvey",
        "code": "12647",
        "priority": 738,
        "isRegular": true,
        "isSuper": true,
        "isPublic": true,
        "status": 365,
        "description": "0fvsbq",
        "areaType": "n8joyp"
      }
    ],
    "roleIds": [
      942
    ],
    "positionIds": [
      "hm2gwz"
    ],
    "roleId": 304,
    "userRoleList": [
      {
        "id": 16,
        "deptId": 718,
        "deptName": "carola.harvey",
        "organId": "25",
        "organName": "carola.harvey",
        "roleId": 737,
        "roleName": "carola.harvey",
        "adminId": 214
      }
    ],
    "code": "12647",
    "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改用户个人信息
**URL:** https://linlan.net/eframe_backend/api/admin/user/profile.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/json; charset=utf-8

**Description:** 修改用户个人信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|用户LID|false|-
userId|string|用户UUID|false|-
deptId|int64|部门ID|false|-
deptName|string|部门名称|false|-
organId|string|机构ID|false|-
organName|string|机构名称|false|-
name|string|人员姓名|false|-
username|string|用户账号|false|-
nickName|string|用户昵称|false|-
email|string|用户邮箱|false|-
mobile|string|手机号码|false|-
imagePath|string|用户头像|false|-
password|string|密码|false|-
isSuperAdmin|boolean|是否超级管理员|false|-
isAuditAdmin|boolean|是否审计只读管理员|false|-
isSelfAdmin|boolean|是否只管理自己的数据|false|-
status|int32|帐号状态（0未生效 1正常）|false|-
delFlag|int32|删除标志（0代表存在 2代表删除）|false|-
lastLoginIp|string|最后登录IP|false|-
lastLoginTime|string|最后登录时间|false|-
description|string|备注,办公地址|false|-
dept|object|部门对象|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─id|int64|单位ID|false|-
└─organId|string|系统机构ID|false|-
└─parentId|int64|父节点|false|-
└─appId|string|应用ID|false|-
└─depttypeId|int64|部门分类ID|false|-
└─foreignId|string|外部业务ID|false|-
└─createType|int32|创建方式0导入1录入2授权|false|-
└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|false|-
└─name|string|名称，多级累加名称|false|-
└─sname|string|名称简称，本单位显示名称|false|-
└─areaCode|string|地域编码，所在城市|false|-
└─organLeader|string|领导名称|false|-
└─leaderId|string|负责人ID，用户接收相关信息|false|-
└─leaderMobile|string|负责人手机号码，用户接收相关信息|false|-
└─isOrganLevel|boolean|是否机构本级1是0否默认1|false|-
└─isVirtual|boolean|是否虚拟节点1是0不是默认0|false|-
└─isLeaf|boolean|是否叶子节点|false|-
└─isDisabled|boolean|是否禁用0否1是|false|-
└─searchCode|string|多级累加路径|false|-
└─imagePath|string|图片路径|false|-
└─priority|int32|排序|false|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|false|-
└─delFlag|int32|是否删除1已删除0正常|false|-
└─description|string|描述|false|-
└─spare1|string|备用1|false|-
└─spare2|string|备用2|false|-
└─children|array|子部门|false|-
roles|array|角色对象|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─id|int64|角色ID|false|-
└─roletypeId|string|角色分类ID|false|-
└─appId|string|应用ID|false|-
└─name|string|角色自定义名称|false|-
└─code|string|角色自定义代码|false|-
└─priority|int32|重点优先级|false|-
└─isRegular|boolean|是否固定权限1表示固定角色0表示自定义角色|false|-
└─isSuper|boolean|拥有所有权限|false|-
└─isPublic|boolean|是否公共角色|false|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|false|-
└─description|string|角色描述|false|-
└─areaType|string|地域类型|false|-
roleIds|array|角色组|false|-
positionIds|array|岗位组|false|-
roleId|int64|角色ID|false|-
userRoleList|array|角色集合|false|-
└─id|int64|用户角色ID|false|-
└─deptId|int64|部门ID|false|-
└─deptName|string|部门名称|false|-
└─organId|string|机构ID|false|-
└─organName|string|机构名称|false|-
└─roleId|int64|角色ID|false|-
└─roleName|string|角色名称|false|-
└─adminId|int64|公共管理用户ID|false|-
code|string|验证码|false|-
uuid|string|uuid标识|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/profile.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:06",
  "lastTime": "2026-11-09 17:58:06",
  "id": 722,
  "userId": "25",
  "deptId": 633,
  "deptName": "carola.harvey",
  "organId": "25",
  "organName": "carola.harvey",
  "name": "carola.harvey",
  "username": "carola.harvey",
  "nickName": "crysta.feeney",
  "email": "afton.goyette@gmail.com",
  "mobile": "337-229-9034",
  "imagePath": "nqhasv",
  "password": "h5js9k",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "status": 56,
  "delFlag": 5,
  "lastLoginIp": "79.62.69.121",
  "lastLoginTime": "2026-11-09 17:58:06",
  "description": "1jjrwh",
  "dept": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:06",
    "lastTime": "2026-11-09 17:58:06",
    "id": 864,
    "organId": "25",
    "parentId": 108,
    "appId": "25",
    "depttypeId": 711,
    "foreignId": "25",
    "createType": 686,
    "type": "igp0w4",
    "name": "carola.harvey",
    "sname": "carola.harvey",
    "areaCode": "12647",
    "organLeader": "a1vsp8",
    "leaderId": "25",
    "leaderMobile": "337-229-9034",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "12647",
    "imagePath": "4b3m8e",
    "priority": 140,
    "status": 416,
    "delFlag": 5,
    "description": "ixvxe1",
    "spare1": "eznsa4",
    "spare2": "sh3n75",
    "children": [
      {
        "$ref": ".."
      }
    ]
  },
  "roles": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:06",
      "lastTime": "2026-11-09 17:58:06",
      "id": 0,
      "roletypeId": "25",
      "appId": "25",
      "name": "carola.harvey",
      "code": "12647",
      "priority": 148,
      "isRegular": true,
      "isSuper": true,
      "isPublic": true,
      "status": 992,
      "description": "3bqm1u",
      "areaType": "be7k0a"
    }
  ],
  "roleIds": [
    176
  ],
  "positionIds": [
    "6ibl0m"
  ],
  "roleId": 716,
  "userRoleList": [
    {
      "id": 118,
      "deptId": 830,
      "deptName": "carola.harvey",
      "organId": "25",
      "organName": "carola.harvey",
      "roleId": 927,
      "roleName": "carola.harvey",
      "adminId": 386
    }
  ],
  "code": "12647",
  "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": true,
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 个人修改密码
**URL:** https://linlan.net/eframe_backend/api/admin/user/updatePwd.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/json; charset=utf-8

**Description:** 个人修改密码

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
oldPassword|string|旧密码|false|-
newPassword|string|新密码|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/updatePwd.do --data '{
  "oldPassword": "yyd299",
  "newPassword": "n2ns04"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "waring": "You may have used non-display generics."
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 用户头像上传
**URL:** https://linlan.net/eframe_backend/api/admin/user/imagePath.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** multipart/form-data

**Description:** 用户头像上传

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
file|file| 文件|true|-
requestedSessionIdFromCookie|boolean|No comments found.|false|-
requestedSessionIdFromURL|boolean|No comments found.|false|-
authType|string|No comments found.|false|-
httpServletMapping|object|No comments found.|false|-
└─matchValue|string|No comments found.|false|-
└─servletName|string|No comments found.|false|-
└─mappingMatch|enum|null<br/>CONTEXT_ROOT<br/>DEFAULT<br/>EXACT<br/>EXTENSION<br/>PATH<br/>|false|-
└─pattern|string|No comments found.|false|-
pathInfo|string|No comments found.|false|-
pathTranslated|string|No comments found.|false|-
contextPath|string|No comments found.|false|-
queryString|string|No comments found.|false|-
remoteUser|string|No comments found.|false|-
requestedSessionId|string|No comments found.|false|-
requestURI|string|No comments found.|false|-
requestURL|object|No comments found.|false|-
└─empty|boolean|No comments found.|false|-
└─value|array|No comments found.|false|-
└─coder|int8|No comments found.|false|-
└─count|int32|No comments found.|false|-
servletPath|string|No comments found.|false|-
requestedSessionIdValid|boolean|No comments found.|false|-
trailerFieldsReady|boolean|No comments found.|false|-
trailerFields|map|No comments found.|false|-
└─any object|object|any object.|false|-
headerNames|object|No comments found.|false|-
session|object|No comments found.|false|-
└─lastAccessedTime|int64|No comments found.|false|-
└─maxInactiveInterval|int32|No comments found.|false|-
└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─new|boolean|No comments found.|false|-
└─id|string|No comments found.|false|-
└─creationTime|int64|No comments found.|false|-
userPrincipal|object|No comments found.|false|-
└─name|string|No comments found.|false|-
parts|array|No comments found.|false|-
cookies|array|No comments found.|false|-
└─name|string|No comments found.|false|-
└─value|string|No comments found.|false|-
└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
method|string|No comments found.|false|-
serverName|string|No comments found.|false|-
serverPort|int32|No comments found.|false|-
remoteAddr|string|No comments found.|false|-
remoteHost|string|No comments found.|false|-
remotePort|int32|No comments found.|false|-
localAddr|string|No comments found.|false|-
localPort|int32|No comments found.|false|-
servletContext|object|No comments found.|false|-
└─defaultSessionTrackingModes|array|No comments found.|false|-
└─effectiveSessionTrackingModes|array|No comments found.|false|-
└─requestCharacterEncoding|string|No comments found.|false|-
└─responseCharacterEncoding|string|No comments found.|false|-
└─effectiveMajorVersion|int32|No comments found.|false|-
└─effectiveMinorVersion|int32|No comments found.|false|-
└─initParameterNames|object|No comments found.|false|-
└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─serverInfo|string|No comments found.|false|-
└─servletContextName|string|No comments found.|false|-
└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
└─virtualServerName|string|No comments found.|false|-
└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─sessionTimeout|int32|No comments found.|false|-
└─contextPath|string|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─minorVersion|int32|No comments found.|false|-
└─classLoader|object|No comments found.|false|-
└─majorVersion|int32|No comments found.|false|-
asyncStarted|boolean|No comments found.|false|-
asyncSupported|boolean|No comments found.|false|-
asyncContext|object|No comments found.|false|-
└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─committed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bufferSize|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writer|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─outputStream|object|No comments found.|false|-
└─timeout|int64|No comments found.|false|-
└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteHost|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remotePort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncStarted|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncSupported|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─timeout|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolRequestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletConnection|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─connectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolConnectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─reader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─in|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─markedChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─readAheadLimit|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipLF|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─markedSkipLF|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterMap|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locales|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─scheme|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─inputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLength|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLengthLong|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
protocolRequestId|string|No comments found.|false|-
servletConnection|object|No comments found.|false|-
└─connectionId|string|No comments found.|false|-
└─protocolConnectionId|string|No comments found.|false|-
└─secure|boolean|No comments found.|false|-
└─protocol|string|No comments found.|false|-
requestId|string|No comments found.|false|-
reader|object|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─skipBuffer|array|No comments found.|false|-
└─in|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipBuffer|array|No comments found.|false|-
└─cb|array|No comments found.|false|-
└─nChars|int32|No comments found.|false|-
└─nextChar|int32|No comments found.|false|-
└─markedChar|int32|No comments found.|false|-
└─readAheadLimit|int32|No comments found.|false|-
└─skipLF|boolean|No comments found.|false|-
└─markedSkipLF|boolean|No comments found.|false|-
attributeNames|object|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
parameterNames|object|No comments found.|false|-
parameterMap|map|No comments found.|false|-
└─any object|object|any object.|false|-
locales|object|No comments found.|false|-
secure|boolean|No comments found.|false|-
scheme|string|No comments found.|false|-
inputStream|object|No comments found.|false|-
protocol|string|No comments found.|false|-
locale|object|No comments found.|false|-
localName|string|No comments found.|false|-
contentLength|int32|No comments found.|false|-
contentLengthLong|int64|No comments found.|false|-
contentType|string|No comments found.|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: multipart/form-data' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/imagePath.do --data 'contentLength=755&servletContext.sessionCookieConfig.secure=true&asyncSupported=true&secure=true&asyncContext.request.dispatcherType=FORWARD&servletContext.sessionCookieConfig.domain=runolfsdottir.co&session.creationTime=1794218215586&serverName=carola.harvey&servletContext.contextPath=jpbv5t&protocolRequestId=25&session.servletContext.sessionTimeout=937&asyncContext.request.asyncContext.timeout=471&method=rn7tdm&servletContext.sessionCookieConfig.maxAge=2&asyncContext.response.writer.trouble=true&asyncContext.request.servletContext.responseCharacterEncoding=8mjsyq&asyncContext.request.reader.nChars=585&asyncContext.request.contentLengthLong=297&requestedSessionIdFromCookie=true&servletConnection.protocolConnectionId=25&asyncContext.request.servletConnection.protocolConnectionId=25&asyncContext.request.reader.markedSkipLF=true&reader.markedChar=892&localPort=154&session.servletContext.majorVersion=767&asyncContext.request.asyncStarted=true&servletConnection.connectionId=25&asyncContext.request.localAddr=vdlb7k&asyncContext.request.serverPort=985&asyncContext.request.localPort=899&servletContext.requestCharacterEncoding=p8z70v&servletContext.sessionTimeout=661&servletContext.serverInfo=6p837g&protocol=yetwf3&asyncContext.request.protocolRequestId=25&servletContext.sessionCookieConfig.httpOnly=true&requestURL.value=126&requestURL.value=126&servletContext.effectiveMajorVersion=698&asyncContext.request.remoteAddr=zus4u7&asyncContext.request.remotePort=638&requestedSessionIdValid=true&session.servletContext.servletContextName=carola.harvey&serverPort=349&reader.cb=0&reader.cb=0&requestedSessionId=25&session.servletContext.minorVersion=443&session.servletContext.requestCharacterEncoding=ltmua1&localAddr=gv6j5c&asyncContext.response.writer.autoFlush=true&httpServletMapping.servletName=carola.harvey&asyncContext.request.servletContext.requestCharacterEncoding=4dgih3&asyncContext.request.scheme=yuke7z&asyncContext.request.localName=carola.harvey&remoteAddr=his23n&contextPath=yw38xr&asyncContext.response.committed=true&asyncContext.request.remoteHost=8yooba&requestedSessionIdFromURL=true&asyncContext.request.servletContext.minorVersion=613&asyncContext.request.servletConnection.secure=true&session.servletContext.effectiveMajorVersion=337&httpServletMapping.pattern=oogsa1&httpServletMapping.mappingMatch=CONTEXT_ROOT&queryString=qqswd7&servletContext.sessionCookieConfig.name=carola.harvey&asyncContext.request.servletContext.virtualServerName=carola.harvey&asyncContext.request.protocol=akuksf&requestURL.empty=true&contentLengthLong=42&session.new=true&dispatcherType=FORWARD&session.servletContext.responseCharacterEncoding=kefq0o&session.servletContext.sessionCookieConfig.maxAge=2&session.servletContext.contextPath=94w3kn&asyncContext.request.servletContext.effectiveMajorVersion=414&characterEncoding=hzo9ff&servletContext.servletContextName=carola.harvey&asyncContext.request.requestId=25&asyncContext.request.servletConnection.connectionId=25&userPrincipal.name=carola.harvey&asyncContext.request.reader.skipLF=true&remotePort=783&cookies.=dhjska&cookies.=dhjska&session.servletContext.sessionCookieConfig.comment=fgcxml&servletConnection.secure=true&servletContext.effectiveMinorVersion=665&session.servletContext.sessionCookieConfig.secure=true&reader.readAheadLimit=10&remoteHost=tvjfbl&asyncContext.request.reader.readAheadLimit=10&requestURI=452qdk&requestURL.count=468&asyncContext.request.servletContext.majorVersion=952&session.servletContext.effectiveMinorVersion=448&cookies.=carola.harvey&cookies.=carola.harvey&asyncContext.request.servletConnection.protocol=s5pq3c&asyncContext.request.servletContext.contextPath=w9i58b&requestURL.coder=62&asyncContext.request.characterEncoding=j898c1&asyncContext.request.servletContext.serverInfo=x9gvnq&servletContext.majorVersion=295&servletContext.sessionCookieConfig.comment=ssriv4&asyncContext.timeout=421&session.maxInactiveInterval=892&asyncContext.request.contentLength=45&localName=carola.harvey&asyncContext.request.reader.markedChar=296&servletContext.minorVersion=396&servletContext.virtualServerName=carola.harvey&reader.skipBuffer=5&reader.skipBuffer=5&session.lastAccessedTime=1794218215586&authType=peimgz&remoteUser=h6ugua&asyncContext.response.characterEncoding=uegp8j&asyncContext.request.asyncSupported=true&session.servletContext.virtualServerName=carola.harvey&asyncContext.request.secure=true&asyncContext.request.contentType=j62wpo&servletPath=z4z8mh&contentType=x0n6l1&asyncContext.request.servletContext.sessionTimeout=694&reader.nChars=216&reader.markedSkipLF=true&scheme=0zdzdm&pathInfo=f19e82&asyncContext.response.contentType=65aic6&requestId=25&httpServletMapping.matchValue=93vh5t&servletConnection.protocol=y28vds&session.servletContext.sessionCookieConfig.httpOnly=true&asyncContext.request.reader.nextChar=547&session.servletContext.sessionCookieConfig.domain=runolfsdottir.co&servletContext.responseCharacterEncoding=9yz6mu&servletContext.sessionCookieConfig.path=fhzwr8&trailerFieldsReady=true&session.id=25&asyncContext.response.bufferSize=10&pathTranslated=77pzwh&session.servletContext.serverInfo=xabdq6&session.servletContext.sessionCookieConfig.name=carola.harvey&session.servletContext.sessionCookieConfig.path=2gwrgh&reader.nextChar=69&asyncContext.request.servletContext.effectiveMinorVersion=229&asyncStarted=true&asyncContext.request.serverName=carola.harvey&asyncContext.request.servletContext.servletContextName=carola.harvey&reader.skipLF=true'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─imageUrl|string|角色组|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "imageUrl": "www.hank-okon.com"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 系统岗位信息操作处理
### 获取岗位列表
**URL:** https://linlan.net/eframe_backend/api/admin/position/list.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取岗位列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
ids|array|岗位id数组|false|-
parentId|string|父岗位ID|false|-
postypeId|string|岗位分类ID|false|-
roletypeId|string|角色分类ID|false|-
name|string|岗位名称|false|-
sname|string|岗位简称，别名|false|-
code|string|UAS岗位id|false|-
oname|string|岗位别名|false|-
posFunction|string|工作分工，二维码申请页面模板|false|-
posRank|int32|级别|false|-
posType|string|岗位类型|false|-
status|int32|岗位性质0未生效1启用，STATUS，状态0未生效1正常2受限3锁定4删除|false|-
isPub|boolean|是否公开0否1是|false|-
mobilePhone|string|岗位移动手机|false|-
officePhone|string|岗位办公电话|false|-
delFlag|int32|删除标志0正常1已删除2应用内受限3回收站|false|-
description|string|描述，岗位职责|false|-
positionId|string|岗位ID|false|-
groupId|string|分组Id|false|-
id|string|编号id|false|-
createTime|string|创建时间|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/position/list.do?posRank=60&postypeId=25&ids=a6k1jc&ids=a6k1jc&groupId=25&mobilePhone=662-667-5459&positionId=25&name=carola.harvey&code=12647&oname=carola.harvey&startTime=2026-11-09 17:56:55&posType=ufc30p&orderBy=838&description=btnxcb&parentId=25&createTime=2026-11-09 17:56:55&posFunction=9ej31u&sname=carola.harvey&q=v6z5b4&isPub=true&page=1&status=54&officePhone=662-667-5459&endTime=2026-11-09 17:56:55&id=25&roletypeId=25&delFlag=5&limit=10
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─totalCount|int32|总记录数 the total count|-
└─pageSize|int32|每页记录数 the page size|-
└─totalPage|int32|总页数 the total page|-
└─currPage|int32|当前页数 the current page|-
└─list|array|列表数据 the list|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─postId|string|岗位序号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─postCode|string|岗位编码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─postName|string|岗位名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─postSort|int32|岗位排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态（0未生效1正常2受限3锁定4删除）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建者|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|更新时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|删除标记（0正常 1删除）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remark|string|备注|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ids|array|角色id集合|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─positionId|string|岗位ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─flag|boolean|用户是否存在此岗位标识 默认不存在|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "totalCount": 14,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "postId": "25",
        "postCode": "12647",
        "postName": "carola.harvey",
        "postSort": 69,
        "status": 394,
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:04",
        "lastTime": "2026-11-09 17:58:04",
        "delFlag": 5,
        "remark": "9hdt6y",
        "ids": [
          "wy43vk"
        ],
        "positionId": "25",
        "flag": true
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 岗位列表导出
**URL:** https://linlan.net/eframe_backend/api/admin/position/export.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 岗位列表导出

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
postCode|string|岗位编码|false|-
postName|string|岗位名称|false|-
status|int32|状态（0未生效1正常2受限3锁定4删除）|false|-
delFlag|int32|删除标记（0正常 1删除）|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/position/export.do --data 'writer.psOut.trouble=true&postCode=12647&limit=10&writer.formatter.lastException.detailMessage=success&orderBy=500&writer.psOut.textOut.nChars=207&characterEncoding=jcphf8&writer.psOut.textOut.nextChar=700&postName=carola.harvey&startTime=2026-11-09 17:56:55&writer.formatter.zero=1&contentType=unuhe1&committed=true&writer.trouble=true&delFlag=5&status=590&q=0h5k5s&writer.psOut.formatter.zero=h&writer.psOut.autoFlush=true&status=349&page=1&writer.autoFlush=true&writer.psOut.closing=true&writer.psOut.closed=true&endTime=2026-11-09 17:56:55&bufferSize=10&writer.writeBuffer=7&writer.writeBuffer=7'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "ob7bkq",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据岗位编号获取详细信息
**URL:** https://linlan.net/eframe_backend/api/admin/position/{postId}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据岗位编号获取详细信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
postId|string| 岗位Id|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/position/25.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|岗位ID|-
└─parentId|string|父岗位ID|-
└─postypeId|string|岗位分类ID|-
└─roletypeId|string|角色分类ID|-
└─userId|string|系统管理用户ID|-
└─name|string|岗位名称|-
└─sname|string|岗位简称，别名|-
└─code|string|UAS岗位id|-
└─oname|string|岗位别名|-
└─posFunction|string|工作分工，二维码申请页面模板|-
└─posRank|int32|级别|-
└─posType|string|岗位类型|-
└─editorType|string|编制类型|-
└─isEditorCreate|boolean|是否编委创建|-
└─status|int32|岗位性质0未生效1启用，STATUS，状态0未生效1正常2受限3锁定4删除|-
└─isPub|boolean|是否公开0否1是|-
└─isAgent|boolean|是否代理岗位0否1是|-
└─isLeader|boolean|是否为部门领导0否1是|-
└─leaderId|string|部门领导用户ID|-
└─manageDeptids|string|分管内设机构|-
└─isBigContact|boolean|是否大通讯录|-
└─isSmallContact|boolean|是否小通讯录|-
└─mobilePhone|string|岗位移动手机|-
└─officePhone|string|岗位办公电话|-
└─buildingId|string|建筑楼栋号|-
└─roomNo|string|房间号|-
└─extQmType|string|微信签名类型|-
└─extQmTypePhoto|string|微信签名类型图片|-
└─extPosName|string|微信岗位|-
└─extOrganName|string|微信单位|-
└─priority|int32|排序|-
└─priorityInOrgan|int32|机构内排序|-
└─priorityInDomain|int32|应用域内排序|-
└─updaterId|string|修改人|-
└─updateTime|string|修改时间|-
└─delFlag|int32|删除标志0正常1已删除2应用内受限3回收站|-
└─description|string|描述，岗位职责|-
└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:04",
    "lastTime": "2026-11-09 17:58:04",
    "id": "25",
    "parentId": "25",
    "postypeId": "25",
    "roletypeId": "25",
    "userId": "25",
    "name": "carola.harvey",
    "sname": "carola.harvey",
    "code": "12647",
    "oname": "carola.harvey",
    "posFunction": "73t9xq",
    "posRank": 560,
    "posType": "2rrg0r",
    "editorType": "chnh57",
    "isEditorCreate": true,
    "status": 197,
    "isPub": true,
    "isAgent": true,
    "isLeader": true,
    "leaderId": "25",
    "manageDeptids": "3rz6xm",
    "isBigContact": true,
    "isSmallContact": true,
    "mobilePhone": "662-667-5459",
    "officePhone": "662-667-5459",
    "buildingId": "25",
    "roomNo": "2fojas",
    "extQmType": "d50r0f",
    "extQmTypePhoto": "m306wp",
    "extPosName": "carola.harvey",
    "extOrganName": "carola.harvey",
    "priority": 154,
    "priorityInOrgan": 242,
    "priorityInDomain": 99,
    "updaterId": "25",
    "updateTime": "2026-11-09 17:58:04",
    "delFlag": 5,
    "description": "xzf0uv",
    "remark": "msen2i"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增岗位
**URL:** https://linlan.net/eframe_backend/api/admin/position/save.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 新增岗位

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|岗位ID|false|-
parentId|string|父岗位ID|false|-
postypeId|string|岗位分类ID|false|-
roletypeId|string|角色分类ID|false|-
userId|string|系统管理用户ID|false|-
name|string|岗位名称|false|-
sname|string|岗位简称，别名|false|-
code|string|UAS岗位id|false|-
oname|string|岗位别名|false|-
posFunction|string|工作分工，二维码申请页面模板|false|-
posRank|int32|级别|false|-
posType|string|岗位类型|false|-
editorType|string|编制类型|false|-
isEditorCreate|boolean|是否编委创建|false|-
status|int32|岗位性质0未生效1启用，STATUS，状态0未生效1正常2受限3锁定4删除|false|-
isPub|boolean|是否公开0否1是|false|-
isAgent|boolean|是否代理岗位0否1是|false|-
isLeader|boolean|是否为部门领导0否1是|false|-
leaderId|string|部门领导用户ID|false|-
manageDeptids|string|分管内设机构|false|-
isBigContact|boolean|是否大通讯录|false|-
isSmallContact|boolean|是否小通讯录|false|-
mobilePhone|string|岗位移动手机|false|-
officePhone|string|岗位办公电话|false|-
buildingId|string|建筑楼栋号|false|-
roomNo|string|房间号|false|-
extQmType|string|微信签名类型|false|-
extQmTypePhoto|string|微信签名类型图片|false|-
extPosName|string|微信岗位|false|-
extOrganName|string|微信单位|false|-
priority|int32|排序|false|-
priorityInOrgan|int32|机构内排序|false|-
priorityInDomain|int32|应用域内排序|false|-
updaterId|string|修改人|false|-
updateTime|string|修改时间|false|-
delFlag|int32|删除标志0正常1已删除2应用内受限3回收站|false|-
description|string|描述，岗位职责|false|-
remark|string|备注|false|-
parentName|string|父岗位名称|false|-
roletypeName|string|角色分类名称|false|-
postypeName|string|角色分类名称|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/position/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:04",
  "lastTime": "2026-11-09 17:58:04",
  "id": "25",
  "parentId": "25",
  "postypeId": "25",
  "roletypeId": "25",
  "userId": "25",
  "name": "carola.harvey",
  "sname": "carola.harvey",
  "code": "12647",
  "oname": "carola.harvey",
  "posFunction": "5ralkj",
  "posRank": 553,
  "posType": "leqzqm",
  "editorType": "w1k4vk",
  "isEditorCreate": true,
  "status": 583,
  "isPub": true,
  "isAgent": true,
  "isLeader": true,
  "leaderId": "25",
  "manageDeptids": "cd8hwo",
  "isBigContact": true,
  "isSmallContact": true,
  "mobilePhone": "662-667-5459",
  "officePhone": "662-667-5459",
  "buildingId": "25",
  "roomNo": "4gufly",
  "extQmType": "nn58w3",
  "extQmTypePhoto": "aysit1",
  "extPosName": "carola.harvey",
  "extOrganName": "carola.harvey",
  "priority": 322,
  "priorityInOrgan": 478,
  "priorityInDomain": 92,
  "updaterId": "25",
  "updateTime": "2026-11-09 17:58:04",
  "delFlag": 5,
  "description": "2v07oh",
  "remark": "hlf6nz",
  "parentName": "carola.harvey",
  "roletypeName": "carola.harvey",
  "postypeName": "carola.harvey"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "1371pm",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改岗位
**URL:** https://linlan.net/eframe_backend/api/admin/position/update.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 修改岗位

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|岗位ID|false|-
parentId|string|父岗位ID|false|-
postypeId|string|岗位分类ID|false|-
roletypeId|string|角色分类ID|false|-
userId|string|系统管理用户ID|false|-
name|string|岗位名称|false|-
sname|string|岗位简称，别名|false|-
code|string|UAS岗位id|false|-
oname|string|岗位别名|false|-
posFunction|string|工作分工，二维码申请页面模板|false|-
posRank|int32|级别|false|-
posType|string|岗位类型|false|-
editorType|string|编制类型|false|-
isEditorCreate|boolean|是否编委创建|false|-
status|int32|岗位性质0未生效1启用，STATUS，状态0未生效1正常2受限3锁定4删除|false|-
isPub|boolean|是否公开0否1是|false|-
isAgent|boolean|是否代理岗位0否1是|false|-
isLeader|boolean|是否为部门领导0否1是|false|-
leaderId|string|部门领导用户ID|false|-
manageDeptids|string|分管内设机构|false|-
isBigContact|boolean|是否大通讯录|false|-
isSmallContact|boolean|是否小通讯录|false|-
mobilePhone|string|岗位移动手机|false|-
officePhone|string|岗位办公电话|false|-
buildingId|string|建筑楼栋号|false|-
roomNo|string|房间号|false|-
extQmType|string|微信签名类型|false|-
extQmTypePhoto|string|微信签名类型图片|false|-
extPosName|string|微信岗位|false|-
extOrganName|string|微信单位|false|-
priority|int32|排序|false|-
priorityInOrgan|int32|机构内排序|false|-
priorityInDomain|int32|应用域内排序|false|-
updaterId|string|修改人|false|-
updateTime|string|修改时间|false|-
delFlag|int32|删除标志0正常1已删除2应用内受限3回收站|false|-
description|string|描述，岗位职责|false|-
remark|string|备注|false|-
parentName|string|父岗位名称|false|-
roletypeName|string|角色分类名称|false|-
postypeName|string|角色分类名称|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/position/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:04",
  "lastTime": "2026-11-09 17:58:04",
  "id": "25",
  "parentId": "25",
  "postypeId": "25",
  "roletypeId": "25",
  "userId": "25",
  "name": "carola.harvey",
  "sname": "carola.harvey",
  "code": "12647",
  "oname": "carola.harvey",
  "posFunction": "2ucpm7",
  "posRank": 507,
  "posType": "d2vyg3",
  "editorType": "kw8e8j",
  "isEditorCreate": true,
  "status": 568,
  "isPub": true,
  "isAgent": true,
  "isLeader": true,
  "leaderId": "25",
  "manageDeptids": "rngsbv",
  "isBigContact": true,
  "isSmallContact": true,
  "mobilePhone": "662-667-5459",
  "officePhone": "662-667-5459",
  "buildingId": "25",
  "roomNo": "v7p081",
  "extQmType": "d7aklm",
  "extQmTypePhoto": "oz2lzq",
  "extPosName": "carola.harvey",
  "extOrganName": "carola.harvey",
  "priority": 597,
  "priorityInOrgan": 795,
  "priorityInDomain": 943,
  "updaterId": "25",
  "updateTime": "2026-11-09 17:58:04",
  "delFlag": 5,
  "description": "apd9sj",
  "remark": "gr2puv",
  "parentName": "carola.harvey",
  "roletypeName": "carola.harvey",
  "postypeName": "carola.harvey"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "6xck0m",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除岗位
**URL:** https://linlan.net/eframe_backend/api/admin/position/{positionIds}.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除岗位

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
positionIds|array| 岗位Ids,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/position/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "s0sz1k",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 绑定角色
**URL:** https://linlan.net/eframe_backend/api/admin/position/bind/{positionId}.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 绑定角色

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
postId|string|岗位序号|false|-
postCode|string|岗位编码|false|-
postName|string|岗位名称|false|-
postSort|int32|岗位排序|false|-
status|int32|状态（0未生效1正常2受限3锁定4删除）|false|-
creatorId|string|创建者|false|-
createTime|string|创建时间|false|-
lastTime|string|更新时间|false|-
delFlag|int32|删除标记（0正常 1删除）|false|-
remark|string|备注|false|-
ids|array|角色id集合|false|-
positionId|string|岗位ID|false|-
flag|boolean|用户是否存在此岗位标识 默认不存在|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/position/bind/{positionId}.do --data '{
  "postId": "25",
  "postCode": "12647",
  "postName": "carola.harvey",
  "postSort": 132,
  "status": 303,
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:04",
  "lastTime": "2026-11-09 17:58:04",
  "delFlag": 5,
  "remark": "8j96ej",
  "ids": [
    "mtihf5"
  ],
  "positionId": "25",
  "flag": true
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "hki7p0",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 解绑角色
**URL:** https://linlan.net/eframe_backend/api/admin/position/unbind/{positionId}.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 解绑角色

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|int64|用户角色ID|false|-
roleId|int64|角色ID|false|-
positionId|string|岗位ID|false|-
status|int32|审核状态0未审核1审核通过2冻结3例外|false|-
beginTime|string|开始时间|false|-
endTime|string|结束时间|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/position/unbind/{positionId}.do --data '{
  "id": 106,
  "roleId": 458,
  "positionId": "25",
  "status": 575,
  "beginTime": "2026-11-09",
  "endTime": "2026-11-09"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "s0cmh1",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取岗位选择框列表
**URL:** https://linlan.net/eframe_backend/api/admin/position/option/select.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取岗位选择框列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/position/option/select.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─postId|string|岗位序号|-
└─postCode|string|岗位编码|-
└─postName|string|岗位名称|-
└─postSort|int32|岗位排序|-
└─status|int32|状态（0未生效1正常2受限3锁定4删除）|-
└─creatorId|string|创建者|-
└─createTime|string|创建时间|-
└─lastTime|string|更新时间|-
└─delFlag|int32|删除标记（0正常 1删除）|-
└─remark|string|备注|-
└─ids|array|角色id集合|-
└─positionId|string|岗位ID|-
└─flag|boolean|用户是否存在此岗位标识 默认不存在|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "postId": "25",
      "postCode": "12647",
      "postName": "carola.harvey",
      "postSort": 245,
      "status": 263,
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:04",
      "lastTime": "2026-11-09 17:58:04",
      "delFlag": 5,
      "remark": "1g9e8b",
      "ids": [
        "rr0ape"
      ],
      "positionId": "25",
      "flag": true
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 系统操作日志记录
### 查看全部日志列表
**URL:** https://linlan.net/eframe_backend/api/monitor/commlog/list.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 查看全部日志列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
appId|string|应用ID|false|-
userId|string|系统管理用户ID|false|-
username|string|用户名|false|-
category|int32|日志类型|false|-
operation|string|操作|false|-
method|string|方法|false|-
srcCode|int32|当前登录来源|false|-
createTime|string|创建时间|false|-
ip|string|来访IP地址|false|-
time|int64|执行时长|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/commlog/list.do?time=1794218215586&method=yf0r4c&ip=79.62.69.121&username=carola.harvey&createTime=2026-11-09 17:58:02&page=1&limit=10&category=877&srcCode=599&startTime=2026-11-09 17:56:55&operation=tzvs9a&endTime=2026-11-09 17:56:55&q=6lqw2j&appId=25&orderBy=723&userId=25
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─totalCount|int32|总记录数 the total count|-
└─pageSize|int32|每页记录数 the page size|-
└─totalPage|int32|总页数 the total page|-
└─currPage|int32|当前页数 the current page|-
└─list|array|列表数据 the list|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─operId|int64|日志主键|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─title|string|操作模块|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─businessType|int32|业务类型（0其它 1新增 2修改 3删除）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─businessTypeName|string|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─businessTypes|array|业务类型数组|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─method|string|请求方法|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestMethod|string|请求方式|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─operatorType|int32|操作类别（0其它 1后台用户 2手机端用户）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─operName|string|操作人员|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptName|string|部门名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─operUrl|string|请求url|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─operIp|string|操作地址|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─operLocation|string|操作地点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─operParam|string|请求参数|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jsonResult|string|返回参数|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|操作状态（0正常 1异常）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─errorMsg|string|错误消息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─operTime|string|操作时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─costTime|int64|消耗时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "totalCount": 119,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "operId": 762,
        "title": "wvuo75",
        "businessType": 198,
        "businessTypeName": "carola.harvey",
        "businessTypes": [
          836
        ],
        "method": "q10lom",
        "requestMethod": "ja5a33",
        "operatorType": 233,
        "operName": "carola.harvey",
        "deptName": "carola.harvey",
        "operUrl": "www.hank-okon.com",
        "operIp": "79.62.69.121",
        "operLocation": "x4k9qx",
        "operParam": "e9ybqj",
        "jsonResult": "qrmh1r",
        "status": 985,
        "errorMsg": "y5pr7o",
        "operTime": "2026-11-09 17:58:02",
        "costTime": 1794218215586,
        "remark": "89k3ts"
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 操作日志导出
**URL:** https://linlan.net/eframe_backend/api/monitor/commlog/export.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 操作日志导出

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
operId|int64|日志主键|false|-
title|string|操作模块|false|-
businessType|int32|业务类型（0其它 1新增 2修改 3删除）|false|-
operatorType|int32|操作类别（0其它 1后台用户 2手机端用户）|false|-
operName|string|操作人员|false|-
deptName|string|部门名称|false|-
operIp|string|操作地址|false|-
status|int32|操作状态（0正常 1异常）|false|-
operTime|string|操作时间|false|-
remark|string|备注|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/commlog/export.do --data 'writer.formatter.zero=o&remark=0at3gn&operIp=79.62.69.121&operatorType=587&operName=carola.harvey&writer.psOut.autoFlush=true&deptName=carola.harvey&writer.psOut.formatter.zero=4&contentType=a3a64o&writer.writeBuffer=5&writer.writeBuffer=5&orderBy=899&title=2rr2io&endTime=2026-11-09 17:56:55&operTime=2026-11-09 17:58:02&writer.psOut.trouble=true&committed=true&writer.psOut.textOut.nChars=302&writer.psOut.textOut.nextChar=153&writer.trouble=true&limit=10&operId=51&status=362&businessType=444&characterEncoding=8ag17d&writer.psOut.closing=true&bufferSize=10&writer.psOut.closed=true&page=1&q=yyw45g&writer.autoFlush=true&writer.formatter.lastException.detailMessage=success&status=828&startTime=2026-11-09 17:56:55'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "e5j0x2",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 操作日志清理
**URL:** https://linlan.net/eframe_backend/api/monitor/commlog/{ids}.do

**Type:** DELETE

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 操作日志清理

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array| 主键Ids,[array of int64]|true|

**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/commlog/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "93pdkx",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 系统机构表读写控制类
### Get CoreOrgan list. 获取系统机构表列表或分页, 返回CoreOrgan对象.
**URL:** https://linlan.net/eframe_backend/api/system/organ/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-21 15:35:19

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get CoreOrgan list. 获取系统机构表列表或分页, 返回CoreOrgan对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
organName|string|机构名称|false|-
delFlag|int32|状态|false|-
organId|string|机构id|false|-
wlType|string|机构类型|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/organ/list.do?organId=25&page=1&q=zoldsc&orderBy=973&wlType=zvc3k7&organName=carola.harvey&limit=10&startTime=2026-11-09 17:56:55&endTime=2026-11-09 17:56:55&delFlag=5
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─ids|array|机构ids|-
└─organId|string|机构id|-
└─organName|string|机构名称|-
└─organSName|string|简称|-
└─organCode|string|地域id|-
└─address|string|父类Id|-
└─wlType|string|类型|-
└─wlTypeName|string|类型中文|-
└─priority|int32|排序|-
└─delFlag|int32|状态: 1 删除，0有效|-
└─createTime|string|创建时间|-
└─lastTime|string|最近修改时间|-
└─contactName|string|联系人名称|-
└─contactEmail|string|联系人电子邮箱|-
└─contactMobile|string|联系人手机|-
└─description|string|公司简介|-
└─tel|string|单位电话|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "ids": [
        "lnkmvm"
      ],
      "organId": "25",
      "organName": "carola.harvey",
      "organSName": "carola.harvey",
      "organCode": "12647",
      "address": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
      "wlType": "lbc4ip",
      "wlTypeName": "carola.harvey",
      "priority": 643,
      "delFlag": 5,
      "createTime": "2026-11-09 17:58:14",
      "lastTime": "2026-11-09 17:58:14",
      "contactName": "carola.harvey",
      "contactEmail": "afton.goyette@gmail.com",
      "contactMobile": "337-229-9034",
      "description": "l552sx",
      "tel": "1xe2ry"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get CoreOrgan by id. 主键获取系统机构表详细信息.
**URL:** https://linlan.net/eframe_backend/api/system/organ/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-21 15:35:19

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get CoreOrgan by id. 主键获取系统机构表详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|机构ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/organ/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─ids|array|机构ids|-
└─organId|string|机构id|-
└─organName|string|机构名称|-
└─organSName|string|简称|-
└─organCode|string|地域id|-
└─address|string|父类Id|-
└─wlType|string|类型|-
└─wlTypeName|string|类型中文|-
└─priority|int32|排序|-
└─delFlag|int32|状态: 1 删除，0有效|-
└─createTime|string|创建时间|-
└─lastTime|string|最近修改时间|-
└─contactName|string|联系人名称|-
└─contactEmail|string|联系人电子邮箱|-
└─contactMobile|string|联系人手机|-
└─description|string|公司简介|-
└─tel|string|单位电话|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "ids": [
      "yhlt7k"
    ],
    "organId": "25",
    "organName": "carola.harvey",
    "organSName": "carola.harvey",
    "organCode": "12647",
    "address": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
    "wlType": "mf3grz",
    "wlTypeName": "carola.harvey",
    "priority": 47,
    "delFlag": 5,
    "createTime": "2026-11-09 17:58:14",
    "lastTime": "2026-11-09 17:58:14",
    "contactName": "carola.harvey",
    "contactEmail": "afton.goyette@gmail.com",
    "contactMobile": "337-229-9034",
    "description": "7l69lj",
    "tel": "tnfc5s"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreOrgan Operation. 新增系统机构表数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/system/organ/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-21 15:35:19

**Content-Type:** application/json; charset=utf-8

**Description:** CoreOrgan Operation. 新增系统机构表数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|机构ids|false|-
organId|string|机构id|false|-
organName|string|机构名称|false|-
organSName|string|简称|false|-
organCode|string|地域id|false|-
address|string|父类Id|false|-
wlType|string|类型|false|-
wlTypeName|string|类型中文|false|-
priority|int32|排序|false|-
delFlag|int32|状态: 1 删除，0有效|false|-
createTime|string|创建时间|false|-
lastTime|string|最近修改时间|false|-
contactName|string|联系人名称|false|-
contactEmail|string|联系人电子邮箱|false|-
contactMobile|string|联系人手机|false|-
description|string|公司简介|false|-
tel|string|单位电话|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/organ/save.do --data '{
  "ids": [
    "mm8n29"
  ],
  "organId": "25",
  "organName": "carola.harvey",
  "organSName": "carola.harvey",
  "organCode": "12647",
  "address": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
  "wlType": "elimp8",
  "wlTypeName": "carola.harvey",
  "priority": 952,
  "delFlag": 5,
  "createTime": "2026-11-09 17:58:14",
  "lastTime": "2026-11-09 17:58:14",
  "contactName": "carola.harvey",
  "contactEmail": "afton.goyette@gmail.com",
  "contactMobile": "337-229-9034",
  "description": "iz1yq0",
  "tel": "0ki6hc"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "2d6idl",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreOrgan Operation. 修改系统机构表数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/system/organ/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-21 15:35:19

**Content-Type:** application/json; charset=utf-8

**Description:** CoreOrgan Operation. 修改系统机构表数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|机构ids|false|-
organId|string|机构id|false|-
organName|string|机构名称|false|-
organSName|string|简称|false|-
organCode|string|地域id|false|-
address|string|父类Id|false|-
wlType|string|类型|false|-
wlTypeName|string|类型中文|false|-
priority|int32|排序|false|-
delFlag|int32|状态: 1 删除，0有效|false|-
createTime|string|创建时间|false|-
lastTime|string|最近修改时间|false|-
contactName|string|联系人名称|false|-
contactEmail|string|联系人电子邮箱|false|-
contactMobile|string|联系人手机|false|-
description|string|公司简介|false|-
tel|string|单位电话|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/organ/update.do --data '{
  "ids": [
    "80xwrt"
  ],
  "organId": "25",
  "organName": "carola.harvey",
  "organSName": "carola.harvey",
  "organCode": "12647",
  "address": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
  "wlType": "jaxub0",
  "wlTypeName": "carola.harvey",
  "priority": 751,
  "delFlag": 5,
  "createTime": "2026-11-09 17:58:14",
  "lastTime": "2026-11-09 17:58:14",
  "contactName": "carola.harvey",
  "contactEmail": "afton.goyette@gmail.com",
  "contactMobile": "337-229-9034",
  "description": "zy62wm",
  "tel": "rp5m04"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "ew7xwk",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreOrgan Operation. 删除系统机构表数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/system/organ/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-21 15:35:19

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** CoreOrgan Operation. 删除系统机构表数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|机构ID:null;1;1,2,3,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/organ/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "j70y5l",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreOrgan Operation. 系统机构表数据操作逻辑，根据操作类型，执行停用启用操作.
**URL:** https://linlan.net/eframe_backend/api/system/organ/disable/{id}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-21 15:35:19

**Content-Type:** application/json; charset=utf-8

**Description:** CoreOrgan Operation. 系统机构表数据操作逻辑，根据操作类型，执行停用启用操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|机构ids|false|-
organId|string|机构id|false|-
organName|string|机构名称|false|-
organSName|string|简称|false|-
organCode|string|地域id|false|-
address|string|父类Id|false|-
wlType|string|类型|false|-
wlTypeName|string|类型中文|false|-
priority|int32|排序|false|-
delFlag|int32|状态: 1 删除，0有效|false|-
createTime|string|创建时间|false|-
lastTime|string|最近修改时间|false|-
contactName|string|联系人名称|false|-
contactEmail|string|联系人电子邮箱|false|-
contactMobile|string|联系人手机|false|-
description|string|公司简介|false|-
tel|string|单位电话|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/organ/disable/{id}.do --data '{
  "ids": [
    "ov71dh"
  ],
  "organId": "25",
  "organName": "carola.harvey",
  "organSName": "carola.harvey",
  "organCode": "12647",
  "address": "Apt. 424 0228 Runte Wall， North Davina， VT 47787",
  "wlType": "lhv4ac",
  "wlTypeName": "carola.harvey",
  "priority": 830,
  "delFlag": 5,
  "createTime": "2026-11-09 17:58:15",
  "lastTime": "2026-11-09 17:58:15",
  "contactName": "carola.harvey",
  "contactEmail": "afton.goyette@gmail.com",
  "contactMobile": "337-229-9034",
  "description": "3ich7u",
  "tel": "tcyujb"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "0fkpni",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 系统机构部门读写控制类
### 获取部门列表
**URL:** https://linlan.net/eframe_backend/api/admin/dept/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取部门列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
deptId|int64|单位ID|false|-
organId|string|系统机构ID|false|-
parentId|int64|父节点|false|-
appId|string|应用ID|false|-
depttypeId|int64|部门分类ID|false|-
foreignId|string|外部业务ID|false|-
createType|int32|创建方式0导入1录入2授权|false|-
type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|false|-
name|string|名称，多级累加名称|false|-
sname|string|名称简称，本单位显示名称|false|-
areaCode|string|地域编码，所在城市|false|-
organLeader|string|领导名称|false|-
leaderId|string|负责人ID，用户接收相关信息|false|-
leaderMobile|string|负责人手机号码，用户接收相关信息|false|-
isOrganLevel|boolean|是否机构本级1是0否默认1|false|-
isVirtual|boolean|是否虚拟节点1是0不是默认0|false|-
isLeaf|boolean|是否叶子节点|false|-
isDisabled|boolean|是否禁用0否1是|false|-
searchCode|string|多级累加路径|false|-
imagePath|string|图片路径|false|-
status|int32|状态0未生效1正常2受限3锁定4删除|false|-
creatorId|string|创建用户ID|false|-
delFlag|int32|是否删除1已删除0正常|false|-
description|string|描述|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/list.do?spare2=kwj1nf&description=r3wqm2&leaderMobile=337-229-9034&startTime=2026-11-09 17:56:55&parentId=92&sname=carola.harvey&name=carola.harvey&createType=793&status=189&creatorId=25&delFlag=5&isOrganLevel=true&appId=25&limit=10&isDisabled=true&imagePath=03kgo0&organLeader=uo2p9w&type=heqwue&q=kwjz7a&spare1=jkwqgx&isVirtual=true&leaderId=25&deptId=183&isLeaf=true&endTime=2026-11-09 17:56:55&areaCode=12647&organId=25&page=1&searchCode=12647&depttypeId=35&orderBy=164&foreignId=25
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─size|int32|No comments found.|-
└─pageNum|int32|No comments found.|-
└─pageSize|int32|No comments found.|-
└─startRow|int64|No comments found.|-
└─endRow|int64|No comments found.|-
└─total|int64|No comments found.|-
└─pages|int32|No comments found.|-
└─count|boolean|No comments found.|-
└─reasonable|boolean|No comments found.|-
└─pageSizeZero|boolean|No comments found.|-
└─countColumn|string|No comments found.|-
└─orderBy|string|No comments found.|-
└─orderByOnly|boolean|No comments found.|-
└─boundSqlInterceptor|object|No comments found.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "size": 10,
    "pageNum": 220,
    "pageSize": 10,
    "startRow": 912,
    "endRow": 389,
    "total": 540,
    "pages": 68,
    "count": true,
    "reasonable": true,
    "pageSizeZero": true,
    "countColumn": "kdy2ve",
    "orderBy": "15ip4p",
    "orderByOnly": true,
    "boundSqlInterceptor": {}
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取部门分页
**URL:** https://linlan.net/eframe_backend/api/admin/dept/page.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取部门分页

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
deptId|int64|单位ID|false|-
organId|string|系统机构ID|false|-
parentId|int64|父节点|false|-
appId|string|应用ID|false|-
depttypeId|int64|部门分类ID|false|-
foreignId|string|外部业务ID|false|-
createType|int32|创建方式0导入1录入2授权|false|-
type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|false|-
name|string|名称，多级累加名称|false|-
sname|string|名称简称，本单位显示名称|false|-
areaCode|string|地域编码，所在城市|false|-
organLeader|string|领导名称|false|-
leaderId|string|负责人ID，用户接收相关信息|false|-
leaderMobile|string|负责人手机号码，用户接收相关信息|false|-
isOrganLevel|boolean|是否机构本级1是0否默认1|false|-
isVirtual|boolean|是否虚拟节点1是0不是默认0|false|-
isLeaf|boolean|是否叶子节点|false|-
isDisabled|boolean|是否禁用0否1是|false|-
searchCode|string|多级累加路径|false|-
imagePath|string|图片路径|false|-
status|int32|状态0未生效1正常2受限3锁定4删除|false|-
creatorId|string|创建用户ID|false|-
delFlag|int32|是否删除1已删除0正常|false|-
description|string|描述|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/page.do?isLeaf=true&appId=25&q=x2qe59&depttypeId=684&type=ewjpxt&limit=10&startTime=2026-11-09 17:56:55&areaCode=12647&spare2=ew6z4c&isOrganLevel=true&parentId=599&creatorId=25&sname=carola.harvey&searchCode=12647&organLeader=rlvbit&imagePath=rsasfz&status=445&isVirtual=true&organId=25&name=carola.harvey&foreignId=25&endTime=2026-11-09 17:56:55&orderBy=717&leaderMobile=337-229-9034&createType=657&description=hq2bpn&leaderId=25&delFlag=5&page=1&deptId=179&spare1=nqpzvm&isDisabled=true
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─size|int32|No comments found.|-
└─pageNum|int32|No comments found.|-
└─pageSize|int32|No comments found.|-
└─startRow|int64|No comments found.|-
└─endRow|int64|No comments found.|-
└─total|int64|No comments found.|-
└─pages|int32|No comments found.|-
└─count|boolean|No comments found.|-
└─reasonable|boolean|No comments found.|-
└─pageSizeZero|boolean|No comments found.|-
└─countColumn|string|No comments found.|-
└─orderBy|string|No comments found.|-
└─orderByOnly|boolean|No comments found.|-
└─boundSqlInterceptor|object|No comments found.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "size": 10,
    "pageNum": 280,
    "pageSize": 10,
    "startRow": 780,
    "endRow": 179,
    "total": 345,
    "pages": 364,
    "count": true,
    "reasonable": true,
    "pageSizeZero": true,
    "countColumn": "wk6wst",
    "orderBy": "agavbi",
    "orderByOnly": true,
    "boundSqlInterceptor": {}
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 查询部门列表（排除节点）
**URL:** https://linlan.net/eframe_backend/api/admin/dept/list/exclude/{deptId}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 查询部门列表（排除节点）

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
deptId|int64| 部门ID|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/list/exclude/410.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─id|int64|单位ID|-
└─organId|string|系统机构ID|-
└─organName|string|系统机构名称|-
└─parentId|int64|父节点|-
└─appId|string|应用ID|-
└─depttypeId|int64|部门分类ID|-
└─foreignId|string|外部业务ID|-
└─createType|int32|创建方式0导入1录入2授权|-
└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|-
└─name|string|名称|-
└─sname|string|名称简称，本单位显示名称|-
└─areaCode|string|地域编码，所在城市|-
└─organLeader|string|领导名称|-
└─leaderId|string|负责人ID，用户接收相关信息|-
└─leaderMobile|string|负责人手机号码，用户接收相关信息|-
└─isOrganLevel|boolean|是否机构本级1是0否默认1|-
└─isVirtual|boolean|是否虚拟节点1是0不是默认0|-
└─isLeaf|boolean|是否叶子节点|-
└─isDisabled|boolean|是否禁用0否1是|-
└─searchCode|string|多级累加路径|-
└─imagePath|string|图片路径|-
└─priority|int32|排序|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|-
└─creatorId|string|创建用户ID|-
└─createTime|string|创建时间|-
└─lastTime|string|修改时间|-
└─delFlag|int32|是否删除1已删除0正常|-
└─description|string|描述|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
└─parentName|string|父节点名称|-
└─childNum|string|字节点数量|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "id": 124,
      "organId": "25",
      "organName": "carola.harvey",
      "parentId": 486,
      "appId": "25",
      "depttypeId": 683,
      "foreignId": "25",
      "createType": 381,
      "type": "4fxpx8",
      "name": "carola.harvey",
      "sname": "carola.harvey",
      "areaCode": "12647",
      "organLeader": "n5jw8u",
      "leaderId": "25",
      "leaderMobile": "337-229-9034",
      "isOrganLevel": true,
      "isVirtual": true,
      "isLeaf": true,
      "isDisabled": true,
      "searchCode": "12647",
      "imagePath": "7psm75",
      "priority": 60,
      "status": 80,
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:07",
      "lastTime": "2026-11-09 17:58:07",
      "delFlag": 5,
      "description": "2fsba0",
      "spare1": "pr4gwa",
      "spare2": "om1vcy",
      "parentName": "carola.harvey",
      "childNum": "gqmf6s"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据部门编号获取详细信息
**URL:** https://linlan.net/eframe_backend/api/admin/dept/{deptId}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据部门编号获取详细信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
deptId|int64| 部门ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/970.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─id|int64|单位ID|-
└─organId|string|系统机构ID|-
└─organName|string|系统机构名称|-
└─parentId|int64|父节点|-
└─appId|string|应用ID|-
└─depttypeId|int64|部门分类ID|-
└─foreignId|string|外部业务ID|-
└─createType|int32|创建方式0导入1录入2授权|-
└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|-
└─name|string|名称|-
└─sname|string|名称简称，本单位显示名称|-
└─areaCode|string|地域编码，所在城市|-
└─organLeader|string|领导名称|-
└─leaderId|string|负责人ID，用户接收相关信息|-
└─leaderMobile|string|负责人手机号码，用户接收相关信息|-
└─isOrganLevel|boolean|是否机构本级1是0否默认1|-
└─isVirtual|boolean|是否虚拟节点1是0不是默认0|-
└─isLeaf|boolean|是否叶子节点|-
└─isDisabled|boolean|是否禁用0否1是|-
└─searchCode|string|多级累加路径|-
└─imagePath|string|图片路径|-
└─priority|int32|排序|-
└─status|int32|状态0未生效1正常2受限3锁定4删除|-
└─creatorId|string|创建用户ID|-
└─createTime|string|创建时间|-
└─lastTime|string|修改时间|-
└─delFlag|int32|是否删除1已删除0正常|-
└─description|string|描述|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
└─parentName|string|父节点名称|-
└─childNum|string|字节点数量|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "id": 61,
    "organId": "25",
    "organName": "carola.harvey",
    "parentId": 786,
    "appId": "25",
    "depttypeId": 967,
    "foreignId": "25",
    "createType": 865,
    "type": "raksar",
    "name": "carola.harvey",
    "sname": "carola.harvey",
    "areaCode": "12647",
    "organLeader": "olbq1d",
    "leaderId": "25",
    "leaderMobile": "337-229-9034",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "12647",
    "imagePath": "qxx7br",
    "priority": 146,
    "status": 559,
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:07",
    "lastTime": "2026-11-09 17:58:07",
    "delFlag": 5,
    "description": "4cc5w4",
    "spare1": "o8dbkj",
    "spare2": "xwimdh",
    "parentName": "carola.harvey",
    "childNum": "9h3wk7"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取部门树
**URL:** https://linlan.net/eframe_backend/api/admin/dept/tree.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取部门树

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
deptId|int64|单位ID|false|-
organId|string|系统机构ID|false|-
parentId|int64|父节点|false|-
appId|string|应用ID|false|-
depttypeId|int64|部门分类ID|false|-
foreignId|string|外部业务ID|false|-
createType|int32|创建方式0导入1录入2授权|false|-
type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|false|-
name|string|名称，多级累加名称|false|-
sname|string|名称简称，本单位显示名称|false|-
areaCode|string|地域编码，所在城市|false|-
organLeader|string|领导名称|false|-
leaderId|string|负责人ID，用户接收相关信息|false|-
leaderMobile|string|负责人手机号码，用户接收相关信息|false|-
isOrganLevel|boolean|是否机构本级1是0否默认1|false|-
isVirtual|boolean|是否虚拟节点1是0不是默认0|false|-
isLeaf|boolean|是否叶子节点|false|-
isDisabled|boolean|是否禁用0否1是|false|-
searchCode|string|多级累加路径|false|-
imagePath|string|图片路径|false|-
status|int32|状态0未生效1正常2受限3锁定4删除|false|-
creatorId|string|创建用户ID|false|-
delFlag|int32|是否删除1已删除0正常|false|-
description|string|描述|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/tree.do?status=120&isOrganLevel=true&q=g5ftcy&page=1&areaCode=12647&limit=10&leaderId=25&type=64f6vl&isVirtual=true&depttypeId=722&delFlag=5&startTime=2026-11-09 17:56:55&foreignId=25&isLeaf=true&isDisabled=true&creatorId=25&deptId=127&organLeader=85ldwd&appId=25&description=j71h9h&name=carola.harvey&orderBy=372&endTime=2026-11-09 17:56:55&organId=25&parentId=600&imagePath=1czpjk&spare1=fqdi77&createType=878&sname=carola.harvey&searchCode=12647&leaderMobile=337-229-9034&spare2=itc34s
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─title|string|节点标题|-
└─id|string|节点唯一索引，用于对指定节点进行各类操作|-
└─parentId|string|父节点ID|-
└─extId|string|拓展id|-
└─href|string|点击节点弹出新窗口对应的 url。需开启 isJump 参数|-
└─spread|boolean|节点是否初始展开，默认 false|-
└─checked|boolean|节点是否初始为选中状态（如果开启复选框的话），默认 false|-
└─disabled|boolean|节点是否为禁用状态。默认 false|-
└─children|array|No comments found.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "title": "fq49ky",
      "id": "25",
      "parentId": "25",
      "extId": "25",
      "href": "v5m8nt",
      "spread": true,
      "checked": true,
      "disabled": true,
      "children": [
        {
          "$ref": ".."
        }
      ]
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增部门
**URL:** https://linlan.net/eframe_backend/api/admin/dept/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/json; charset=utf-8

**Description:** 新增部门

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|单位ID|false|-
organId|string|系统机构ID|false|-
parentId|int64|父节点|false|-
appId|string|应用ID|false|-
depttypeId|int64|部门分类ID|false|-
foreignId|string|外部业务ID|false|-
createType|int32|创建方式0导入1录入2授权|false|-
type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|false|-
name|string|名称，多级累加名称|false|-
sname|string|名称简称，本单位显示名称|false|-
areaCode|string|地域编码，所在城市|false|-
organLeader|string|领导名称|false|-
leaderId|string|负责人ID，用户接收相关信息|false|-
leaderMobile|string|负责人手机号码，用户接收相关信息|false|-
isOrganLevel|boolean|是否机构本级1是0否默认1|false|-
isVirtual|boolean|是否虚拟节点1是0不是默认0|false|-
isLeaf|boolean|是否叶子节点|false|-
isDisabled|boolean|是否禁用0否1是|false|-
searchCode|string|多级累加路径|false|-
imagePath|string|图片路径|false|-
priority|int32|排序|false|-
status|int32|状态0未生效1正常2受限3锁定4删除|false|-
delFlag|int32|是否删除1已删除0正常|false|-
description|string|描述|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-
children|array|子部门|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:07",
  "lastTime": "2026-11-09 17:58:07",
  "id": 9,
  "organId": "25",
  "parentId": 742,
  "appId": "25",
  "depttypeId": 142,
  "foreignId": "25",
  "createType": 924,
  "type": "3s1c6d",
  "name": "carola.harvey",
  "sname": "carola.harvey",
  "areaCode": "12647",
  "organLeader": "4udrhz",
  "leaderId": "25",
  "leaderMobile": "337-229-9034",
  "isOrganLevel": true,
  "isVirtual": true,
  "isLeaf": true,
  "isDisabled": true,
  "searchCode": "12647",
  "imagePath": "cic667",
  "priority": 765,
  "status": 390,
  "delFlag": 5,
  "description": "dt6bse",
  "spare1": "xta8ln",
  "spare2": "c2kxu0",
  "children": [
    {
      "$ref": ".."
    }
  ]
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "e8s1k3",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改部门
**URL:** https://linlan.net/eframe_backend/api/admin/dept/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/json; charset=utf-8

**Description:** 修改部门

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|单位ID|false|-
organId|string|系统机构ID|false|-
parentId|int64|父节点|false|-
appId|string|应用ID|false|-
depttypeId|int64|部门分类ID|false|-
foreignId|string|外部业务ID|false|-
createType|int32|创建方式0导入1录入2授权|false|-
type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|false|-
name|string|名称，多级累加名称|false|-
sname|string|名称简称，本单位显示名称|false|-
areaCode|string|地域编码，所在城市|false|-
organLeader|string|领导名称|false|-
leaderId|string|负责人ID，用户接收相关信息|false|-
leaderMobile|string|负责人手机号码，用户接收相关信息|false|-
isOrganLevel|boolean|是否机构本级1是0否默认1|false|-
isVirtual|boolean|是否虚拟节点1是0不是默认0|false|-
isLeaf|boolean|是否叶子节点|false|-
isDisabled|boolean|是否禁用0否1是|false|-
searchCode|string|多级累加路径|false|-
imagePath|string|图片路径|false|-
priority|int32|排序|false|-
status|int32|状态0未生效1正常2受限3锁定4删除|false|-
delFlag|int32|是否删除1已删除0正常|false|-
description|string|描述|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-
children|array|子部门|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:07",
  "lastTime": "2026-11-09 17:58:07",
  "id": 922,
  "organId": "25",
  "parentId": 658,
  "appId": "25",
  "depttypeId": 963,
  "foreignId": "25",
  "createType": 293,
  "type": "0yr66p",
  "name": "carola.harvey",
  "sname": "carola.harvey",
  "areaCode": "12647",
  "organLeader": "z4mqge",
  "leaderId": "25",
  "leaderMobile": "337-229-9034",
  "isOrganLevel": true,
  "isVirtual": true,
  "isLeaf": true,
  "isDisabled": true,
  "searchCode": "12647",
  "imagePath": "olvrrf",
  "priority": 270,
  "status": 200,
  "delFlag": 5,
  "description": "xgqlw2",
  "spare1": "basxdo",
  "spare2": "mzn79w",
  "children": [
    {
      "$ref": ".."
    }
  ]
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "2meyrh",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除部门
**URL:** https://linlan.net/eframe_backend/api/admin/dept/delete/{deptIds}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除部门

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
deptIds|array| 部门Ids,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "hm0pjf",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 停用启用部门
**URL:** https://linlan.net/eframe_backend/api/admin/dept/disable/{id}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-10-02 23:27:08

**Content-Type:** application/json; charset=utf-8

**Description:** 停用启用部门

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|单位ID|false|-
organId|string|系统机构ID|false|-
parentId|int64|父节点|false|-
appId|string|应用ID|false|-
depttypeId|int64|部门分类ID|false|-
foreignId|string|外部业务ID|false|-
createType|int32|创建方式0导入1录入2授权|false|-
type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|false|-
name|string|名称，多级累加名称|false|-
sname|string|名称简称，本单位显示名称|false|-
areaCode|string|地域编码，所在城市|false|-
organLeader|string|领导名称|false|-
leaderId|string|负责人ID，用户接收相关信息|false|-
leaderMobile|string|负责人手机号码，用户接收相关信息|false|-
isOrganLevel|boolean|是否机构本级1是0否默认1|false|-
isVirtual|boolean|是否虚拟节点1是0不是默认0|false|-
isLeaf|boolean|是否叶子节点|false|-
isDisabled|boolean|是否禁用0否1是|false|-
searchCode|string|多级累加路径|false|-
imagePath|string|图片路径|false|-
priority|int32|排序|false|-
status|int32|状态0未生效1正常2受限3锁定4删除|false|-
delFlag|int32|是否删除1已删除0正常|false|-
description|string|描述|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-
children|array|子部门|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/disable/{id}.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:07",
  "lastTime": "2026-11-09 17:58:07",
  "id": 566,
  "organId": "25",
  "parentId": 843,
  "appId": "25",
  "depttypeId": 657,
  "foreignId": "25",
  "createType": 332,
  "type": "rptal0",
  "name": "carola.harvey",
  "sname": "carola.harvey",
  "areaCode": "12647",
  "organLeader": "dwr8jv",
  "leaderId": "25",
  "leaderMobile": "337-229-9034",
  "isOrganLevel": true,
  "isVirtual": true,
  "isLeaf": true,
  "isDisabled": true,
  "searchCode": "12647",
  "imagePath": "cd5s2d",
  "priority": 212,
  "status": 145,
  "delFlag": 5,
  "description": "0fgtmo",
  "spare1": "kp7az3",
  "spare2": "d5sz0k",
  "children": [
    {
      "$ref": ".."
    }
  ]
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "3ofh5q",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 系统登录验证
### 登录方法
**URL:** https://linlan.net/eframe_backend/login.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 登录方法

**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
username|string|用户名|false|-
password|string|用户密码|false|-
code|string|验证码|false|-
uuid|string|唯一标识|false|-
appId|string|所在应用ID|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -i https://linlan.net/eframe_backend/login.do --data '{
  "username": "carola.harvey",
  "password": "f9p68s",
  "code": "12647",
  "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86",
  "appId": "25"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─userId|string|用户ID|-
└─token|string|令牌TOKEN|-
└─updateTime|string|更新时间|-
└─expireTime|string|过期时间|-
└─mobileConfirm|boolean|是否有手机号码|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "userId": "25",
    "token": "7iut7e",
    "updateTime": "2026-11-09 17:58:04",
    "expireTime": "2026-11-09 17:58:04",
    "mobileConfirm": true
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取应用用户信息，作用于Work端登录之后进行用户基本信息获取
**URL:** https://linlan.net/eframe_backend/appUserInfo.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取应用用户信息，作用于Work端登录之后进行用户基本信息获取

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/appUserInfo.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─user|object|当前用户|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|用户LID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─userId|string|用户UUID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptId|int64|部门ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptName|string|部门名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organName|string|机构名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|人员姓名|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─username|string|用户账号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nickName|string|用户昵称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─email|string|用户邮箱|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─mobile|string|手机号码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─imagePath|string|用户头像|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─password|string|密码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isSuperAdmin|boolean|是否超级管理员|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isAuditAdmin|boolean|是否审计只读管理员|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isSelfAdmin|boolean|是否只管理自己的数据|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|帐号状态（0未生效 1正常）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|删除标志（0代表存在 2代表删除）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastLoginIp|string|最后登录IP|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastLoginTime|string|最后登录时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|备注,办公地址|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dept|object|部门对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|单位ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|系统机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentId|int64|父节点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─depttypeId|int64|部门分类ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─foreignId|string|外部业务ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createType|int32|创建方式0导入1录入2授权|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称，多级累加名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sname|string|名称简称，本单位显示名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areaCode|string|地域编码，所在城市|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organLeader|string|领导名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─leaderId|string|负责人ID，用户接收相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─leaderMobile|string|负责人手机号码，用户接收相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isOrganLevel|boolean|是否机构本级1是0否默认1|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isVirtual|boolean|是否虚拟节点1是0不是默认0|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isLeaf|boolean|是否叶子节点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isDisabled|boolean|是否禁用0否1是|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─searchCode|string|多级累加路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─imagePath|string|图片路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0未生效1正常2受限3锁定4删除|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|是否删除1已删除0正常|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare1|string|备用1|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare2|string|备用2|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─children|array|子部门|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roles|array|角色对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roletypeId|string|角色分类ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|角色自定义名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|角色自定义代码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|重点优先级|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isRegular|boolean|是否固定权限1表示固定角色0表示自定义角色|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isSuper|boolean|拥有所有权限|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isPublic|boolean|是否公共角色|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0未生效1正常2受限3锁定4删除|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|角色描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areaType|string|地域类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleIds|array|角色组|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─positionIds|array|岗位组|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleId|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─userRoleList|array|角色集合|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|用户角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptId|int64|部门ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptName|string|部门名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organName|string|机构名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleId|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleName|string|角色名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─adminId|int64|公共管理用户ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|验证码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─uuid|string|uuid标识|-
└─roles|array|角色集合|-
└─permissions|array|权限集合|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "user": {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:05",
      "lastTime": "2026-11-09 17:58:05",
      "id": 533,
      "userId": "25",
      "deptId": 141,
      "deptName": "carola.harvey",
      "organId": "25",
      "organName": "carola.harvey",
      "name": "carola.harvey",
      "username": "carola.harvey",
      "nickName": "crysta.feeney",
      "email": "afton.goyette@gmail.com",
      "mobile": "337-229-9034",
      "imagePath": "3tyhdj",
      "password": "ek9o08",
      "isSuperAdmin": true,
      "isAuditAdmin": true,
      "isSelfAdmin": true,
      "status": 434,
      "delFlag": 5,
      "lastLoginIp": "79.62.69.121",
      "lastLoginTime": "2026-11-09 17:58:05",
      "description": "kmeeum",
      "dept": {
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:05",
        "lastTime": "2026-11-09 17:58:05",
        "id": 598,
        "organId": "25",
        "parentId": 325,
        "appId": "25",
        "depttypeId": 331,
        "foreignId": "25",
        "createType": 105,
        "type": "5ea2yg",
        "name": "carola.harvey",
        "sname": "carola.harvey",
        "areaCode": "12647",
        "organLeader": "0cg6mv",
        "leaderId": "25",
        "leaderMobile": "337-229-9034",
        "isOrganLevel": true,
        "isVirtual": true,
        "isLeaf": true,
        "isDisabled": true,
        "searchCode": "12647",
        "imagePath": "qjzis5",
        "priority": 863,
        "status": 841,
        "delFlag": 5,
        "description": "evvovp",
        "spare1": "mm1cqb",
        "spare2": "dtrvww",
        "children": [
          {
            "$ref": ".."
          }
        ]
      },
      "roles": [
        {
          "creatorId": "25",
          "createTime": "2026-11-09 17:58:05",
          "lastTime": "2026-11-09 17:58:05",
          "id": 910,
          "roletypeId": "25",
          "appId": "25",
          "name": "carola.harvey",
          "code": "12647",
          "priority": 975,
          "isRegular": true,
          "isSuper": true,
          "isPublic": true,
          "status": 855,
          "description": "23ns4n",
          "areaType": "c8rlex"
        }
      ],
      "roleIds": [
        408
      ],
      "positionIds": [
        "bqlj74"
      ],
      "roleId": 378,
      "userRoleList": [
        {
          "id": 828,
          "deptId": 412,
          "deptName": "carola.harvey",
          "organId": "25",
          "organName": "carola.harvey",
          "roleId": 9,
          "roleName": "carola.harvey",
          "adminId": 21
        }
      ],
      "code": "12647",
      "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86"
    },
    "roles": [
      "vl99v3"
    ],
    "permissions": [
      "kyj27t"
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取应用首页信息，包括菜单含路由信息
**URL:** https://linlan.net/eframe_backend/appIndexInfo.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取应用首页信息，包括菜单含路由信息

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/appIndexInfo.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─accountId|string|当前端ID|-
└─areaId|int64|当前地域ID|-
└─groupId|int64|当前角色或分组ID|-
└─positionId|string|当前岗位ID|-
└─tplSolution|string|当前页面模板方案|-
└─menuList|array|用户菜单信息列表|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|功能菜单ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentId|int64|父功能菜单ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|功能名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─ename|string|功能名称英文|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─type|string|功能类型,0CATAGORY目录1MENU菜单2BUTTON按钮|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─perms|string|权限字符串|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─menuLevel|int32|菜单层次|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─urlType|string|调用入口类型    // urlType 为 5时，当前组能看到的栏目ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─url|string|功能地址|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─menuSeq|string|菜单组件|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─icon|string|菜单图标|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─imagePath|string|图片路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─css|string|菜单样式 目前是判断是否为新菜单，css名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|新增 菜单 描述字段|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─todoTotalApi|string|新增 菜单获取待办数量api配置|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "accountId": "25",
    "areaId": 556,
    "groupId": 982,
    "positionId": "25",
    "tplSolution": "qnetdg",
    "menuList": [
      {
        "id": 387,
        "parentId": 922,
        "name": "carola.harvey",
        "ename": "carola.harvey",
        "type": "hfrx01",
        "perms": "48bkbp",
        "menuLevel": 486,
        "urlType": "0ud51g",
        "url": "www.hank-okon.com",
        "menuSeq": "38lkka",
        "icon": "i8oph3",
        "imagePath": "h22v35",
        "css": "4r7dxt",
        "description": "awrodj",
        "todoTotalApi": "vy6qrp"
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 内部应用，第三方应用登录方法，返回字段少的平台用户对象
**URL:** https://linlan.net/eframe_backend/platLogin.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 内部应用，第三方应用登录方法，返回字段少的平台用户对象

**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
requestedSessionIdFromCookie|boolean|No comments found.|false|-
requestedSessionIdFromURL|boolean|No comments found.|false|-
authType|string|No comments found.|false|-
httpServletMapping|object|No comments found.|false|-
└─matchValue|string|No comments found.|false|-
└─servletName|string|No comments found.|false|-
└─mappingMatch|enum|null<br/>CONTEXT_ROOT<br/>DEFAULT<br/>EXACT<br/>EXTENSION<br/>PATH<br/>|false|-
└─pattern|string|No comments found.|false|-
pathInfo|string|No comments found.|false|-
pathTranslated|string|No comments found.|false|-
contextPath|string|No comments found.|false|-
queryString|string|No comments found.|false|-
remoteUser|string|No comments found.|false|-
requestedSessionId|string|No comments found.|false|-
requestURI|string|No comments found.|false|-
requestURL|object|No comments found.|false|-
└─empty|boolean|No comments found.|false|-
└─value|array|No comments found.|false|-
└─coder|int8|No comments found.|false|-
└─count|int32|No comments found.|false|-
servletPath|string|No comments found.|false|-
requestedSessionIdValid|boolean|No comments found.|false|-
trailerFieldsReady|boolean|No comments found.|false|-
trailerFields|map|No comments found.|false|-
└─any object|object|any object.|false|-
headerNames|object|No comments found.|false|-
session|object|No comments found.|false|-
└─lastAccessedTime|int64|No comments found.|false|-
└─maxInactiveInterval|int32|No comments found.|false|-
└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─new|boolean|No comments found.|false|-
└─id|string|No comments found.|false|-
└─creationTime|int64|No comments found.|false|-
userPrincipal|object|No comments found.|false|-
└─name|string|No comments found.|false|-
parts|array|No comments found.|false|-
cookies|array|No comments found.|false|-
└─name|string|No comments found.|false|-
└─value|string|No comments found.|false|-
└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
method|string|No comments found.|false|-
serverName|string|No comments found.|false|-
serverPort|int32|No comments found.|false|-
remoteAddr|string|No comments found.|false|-
remoteHost|string|No comments found.|false|-
remotePort|int32|No comments found.|false|-
localAddr|string|No comments found.|false|-
localPort|int32|No comments found.|false|-
servletContext|object|No comments found.|false|-
└─defaultSessionTrackingModes|array|No comments found.|false|-
└─effectiveSessionTrackingModes|array|No comments found.|false|-
└─requestCharacterEncoding|string|No comments found.|false|-
└─responseCharacterEncoding|string|No comments found.|false|-
└─effectiveMajorVersion|int32|No comments found.|false|-
└─effectiveMinorVersion|int32|No comments found.|false|-
└─initParameterNames|object|No comments found.|false|-
└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─serverInfo|string|No comments found.|false|-
└─servletContextName|string|No comments found.|false|-
└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
└─virtualServerName|string|No comments found.|false|-
└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─sessionTimeout|int32|No comments found.|false|-
└─contextPath|string|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─minorVersion|int32|No comments found.|false|-
└─classLoader|object|No comments found.|false|-
└─majorVersion|int32|No comments found.|false|-
asyncStarted|boolean|No comments found.|false|-
asyncSupported|boolean|No comments found.|false|-
asyncContext|object|No comments found.|false|-
└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─committed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bufferSize|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writer|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─outputStream|object|No comments found.|false|-
└─timeout|int64|No comments found.|false|-
└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteHost|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remotePort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncStarted|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncSupported|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─timeout|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolRequestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletConnection|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─connectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolConnectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─reader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─in|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─markedChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─readAheadLimit|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipLF|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─markedSkipLF|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterMap|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locales|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─scheme|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─inputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLength|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLengthLong|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
protocolRequestId|string|No comments found.|false|-
servletConnection|object|No comments found.|false|-
└─connectionId|string|No comments found.|false|-
└─protocolConnectionId|string|No comments found.|false|-
└─secure|boolean|No comments found.|false|-
└─protocol|string|No comments found.|false|-
requestId|string|No comments found.|false|-
reader|object|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─skipBuffer|array|No comments found.|false|-
└─in|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─skipBuffer|array|No comments found.|false|-
└─cb|array|No comments found.|false|-
└─nChars|int32|No comments found.|false|-
└─nextChar|int32|No comments found.|false|-
└─markedChar|int32|No comments found.|false|-
└─readAheadLimit|int32|No comments found.|false|-
└─skipLF|boolean|No comments found.|false|-
└─markedSkipLF|boolean|No comments found.|false|-
attributeNames|object|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
parameterNames|object|No comments found.|false|-
parameterMap|map|No comments found.|false|-
└─any object|object|any object.|false|-
locales|object|No comments found.|false|-
secure|boolean|No comments found.|false|-
scheme|string|No comments found.|false|-
inputStream|object|No comments found.|false|-
protocol|string|No comments found.|false|-
locale|object|No comments found.|false|-
localName|string|No comments found.|false|-
contentLength|int32|No comments found.|false|-
contentLengthLong|int64|No comments found.|false|-
contentType|string|No comments found.|false|-

**Request-example:**
```
curl -X POST -k -i https://linlan.net/eframe_backend/platLogin.do --data 'asyncContext.response.contentType=4qgctq&asyncContext.request.requestId=25&trailerFieldsReady=true&servletContext.effectiveMajorVersion=980&asyncContext.response.characterEncoding=4cu91s&asyncContext.request.remoteHost=5nzp9q&characterEncoding=r8w4ep&remoteHost=nrso6a&asyncContext.request.reader.markedSkipLF=true&requestedSessionId=25&requestId=25&asyncContext.request.reader.nChars=775&contentLengthLong=389&session.servletContext.virtualServerName=carola.harvey&serverPort=179&pathTranslated=eruduf&session.id=25&remoteUser=vrg3bf&session.servletContext.sessionCookieConfig.path=b5xn74&asyncContext.request.servletContext.contextPath=oxq20d&asyncStarted=true&asyncContext.request.servletContext.servletContextName=carola.harvey&requestedSessionIdValid=true&asyncContext.request.asyncContext.timeout=399&session.new=true&serverName=carola.harvey&servletContext.minorVersion=102&session.servletContext.minorVersion=572&asyncContext.request.servletContext.majorVersion=548&asyncContext.request.dispatcherType=FORWARD&session.servletContext.sessionCookieConfig.httpOnly=true&servletContext.sessionTimeout=335&protocol=oges2l&localAddr=iqewwh&servletContext.serverInfo=y6iyra&asyncContext.request.characterEncoding=ybppl8&asyncContext.request.servletContext.minorVersion=632&asyncContext.request.asyncSupported=true&asyncContext.request.servletConnection.connectionId=25&asyncContext.request.scheme=wf5rz7&asyncContext.response.committed=true&servletContext.sessionCookieConfig.name=carola.harvey&cookies.=carola.harvey&cookies.=carola.harvey&asyncContext.request.servletConnection.protocol=h3ihuc&contentLength=247&servletContext.sessionCookieConfig.comment=92h39v&pathInfo=j6o4t7&asyncContext.request.servletContext.requestCharacterEncoding=i8zmla&asyncContext.request.remotePort=360&protocolRequestId=25&session.servletContext.responseCharacterEncoding=da0yg6&servletContext.servletContextName=carola.harvey&asyncContext.request.contentLength=263&session.servletContext.sessionTimeout=520&servletContext.sessionCookieConfig.maxAge=2&servletContext.sessionCookieConfig.path=v4bw5l&userPrincipal.name=carola.harvey&servletContext.virtualServerName=carola.harvey&asyncContext.response.bufferSize=10&session.creationTime=1794218215586&reader.readAheadLimit=10&asyncContext.request.servletContext.effectiveMinorVersion=941&asyncContext.request.protocolRequestId=25&asyncContext.response.writer.trouble=true&asyncContext.request.secure=true&servletConnection.protocolConnectionId=25&session.servletContext.contextPath=455ljo&asyncContext.request.contentType=yv1hcw&reader.markedChar=410&asyncSupported=true&asyncContext.timeout=510&servletContext.requestCharacterEncoding=5xtmim&asyncContext.response.writer.autoFlush=true&requestedSessionIdFromCookie=true&session.servletContext.effectiveMajorVersion=142&requestURL.empty=true&requestedSessionIdFromURL=true&session.servletContext.majorVersion=628&remoteAddr=2tz39t&servletContext.responseCharacterEncoding=4yt394&servletConnection.secure=true&reader.markedSkipLF=true&asyncContext.request.servletContext.sessionTimeout=841&session.servletContext.requestCharacterEncoding=xy5pbh&asyncContext.request.servletContext.effectiveMajorVersion=719&session.servletContext.sessionCookieConfig.domain=runolfsdottir.co&session.servletContext.sessionCookieConfig.maxAge=2&asyncContext.request.asyncStarted=true&httpServletMapping.pattern=rph5dq&asyncContext.request.reader.readAheadLimit=10&requestURL.value=0&requestURL.value=0&reader.cb=t&reader.cb=t&servletContext.effectiveMinorVersion=761&reader.nextChar=531&asyncContext.request.remoteAddr=2hir7n&reader.nChars=671&servletPath=36g5vr&servletConnection.protocol=e0khxp&session.servletContext.sessionCookieConfig.name=carola.harvey&asyncContext.request.servletContext.responseCharacterEncoding=ik8meb&asyncContext.request.reader.markedChar=743&asyncContext.request.serverPort=803&asyncContext.request.contentLengthLong=26&session.servletContext.servletContextName=carola.harvey&asyncContext.request.servletContext.serverInfo=49gm1q&asyncContext.request.reader.nextChar=587&secure=true&method=4an3h8&session.servletContext.serverInfo=v8atrn&asyncContext.request.servletConnection.protocolConnectionId=25&reader.skipBuffer=l&reader.skipBuffer=l&servletContext.sessionCookieConfig.secure=true&httpServletMapping.servletName=carola.harvey&localPort=200&asyncContext.request.localAddr=pd0k95&asyncContext.request.localPort=25&requestURI=53b5jv&asyncContext.request.servletContext.virtualServerName=carola.harvey&authType=ew2i9a&remotePort=966&session.servletContext.sessionCookieConfig.comment=thdn59&requestURL.count=705&contentType=li24oj&session.lastAccessedTime=1794218215586&servletContext.majorVersion=773&httpServletMapping.matchValue=elunum&servletContext.contextPath=3mz0g1&asyncContext.request.protocol=e974yk&asyncContext.request.servletConnection.secure=true&servletContext.sessionCookieConfig.httpOnly=true&cookies.=l98pzx&cookies.=l98pzx&queryString=kj7lg4&session.maxInactiveInterval=817&reader.skipLF=true&localName=carola.harvey&scheme=q4ju16&contextPath=0vp98y&asyncContext.request.reader.skipLF=true&httpServletMapping.mappingMatch=CONTEXT_ROOT&asyncContext.request.localName=carola.harvey&requestURL.coder=24&asyncContext.request.serverName=carola.harvey&servletContext.sessionCookieConfig.domain=runolfsdottir.co&dispatcherType=FORWARD&servletConnection.connectionId=25&session.servletContext.sessionCookieConfig.secure=true&session.servletContext.effectiveMinorVersion=56'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─id|string|平台ACCOUNT_ID|-
└─isAdmin|boolean|是否加解密|-
└─isEncryt|boolean|敏感信息是否加密|-
└─publicKey|string|平台公钥信息|-
└─aesKey|string|平台公钥信息|-
└─clientId|string|平台clientId|-
└─serverUrl|string|平台图片域名前缀|-
└─serverConf1|string|平台回调地址|-
└─appConf|object|平台配置基本对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─siteId|int64|PublicSiteConf.SITE_ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|APPID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─topXzqhId|string|BASE_APP内的XZQH_ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appConfJson|object|PublicSiteConf.CONF_KEY :PublicSiteConf.CONF_VALUE|-
└─isWork|boolean|通过CORE_ACCOUNT内的TYPE为1，则isWork为true，workConfig返回信息|-
└─workConfig|object|workInit，通过请求的url路径，匹配MANAGE_SITE内的PATH，输出site对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─layout|string|默认缺省|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─siteInfo|object|站点基本对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|站点ID，场景ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|应用ID，如PA-STAGE|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areaCode|string|地域代码，如310100|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|站点路径，访问的前台路径，URL地址|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|站点名称，场景名称，如公众门户|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sname|string|站点简称，场景简称，如公众门户|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─layout|string|站点门户布局|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─logoUrl|string|站点logo图片路径URL|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cdnUrl|string|站点的资源统一cdn路径URL|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "id": "25",
    "isAdmin": true,
    "isEncryt": true,
    "publicKey": "nzqqkk",
    "aesKey": "f0sgua",
    "clientId": "25",
    "serverUrl": "www.hank-okon.com",
    "serverConf1": "pntnfj",
    "appConf": {
      "siteId": 535,
      "appId": "25",
      "topXzqhId": "25",
      "appConfJson": {
        "mapKey": "xdtkf7"
      }
    },
    "isWork": true,
    "workConfig": {
      "layout": "x6uhku",
      "siteInfo": {
        "id": 789,
        "appId": "25",
        "areaCode": "12647",
        "path": "cfra40",
        "name": "carola.harvey",
        "sname": "carola.harvey",
        "layout": "kl2uqt",
        "logoUrl": "www.hank-okon.com",
        "cdnUrl": "www.hank-okon.com"
      }
    }
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 第三方服务商登录方法
**URL:** https://linlan.net/eframe_backend/third/ecorgan/login.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 第三方服务商登录方法

**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
username|string|用户名|false|-
password|string|用户密码|false|-
code|string|验证码|false|-
uuid|string|唯一标识|false|-
appId|string|所在应用ID|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -i https://linlan.net/eframe_backend/third/ecorgan/login.do --data '{
  "username": "carola.harvey",
  "password": "ff6p5b",
  "code": "12647",
  "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86",
  "appId": "25"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─userId|string|用户ID|-
└─token|string|令牌TOKEN|-
└─updateTime|string|更新时间|-
└─expireTime|string|过期时间|-
└─mobileConfirm|boolean|是否有手机号码|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "userId": "25",
    "token": "eywlut",
    "updateTime": "2026-11-09 17:58:05",
    "expireTime": "2026-11-09 17:58:05",
    "mobileConfirm": true
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 校验验证码
**URL:** https://linlan.net/eframe_backend/captcha/verify.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 校验验证码

**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
code|string|验证码|false|-
uuid|string|登录sessionId|false|-

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/captcha/verify.do?code=12647&uuid=1e3a83fa-00ad-4dec-9d63-bc67649e3d86
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "vdkvp0",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 系统缓存监控
### 获取缓存信息列表
**URL:** https://linlan.net/eframe_backend/api/monitor/cache.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取缓存信息列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/cache.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─any object|object|any object.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "mapKey": {
      "waring": "You may use java.util.Object for Map value; doc-generate can't be handle."
    }
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 通过名称前缀获取缓存信息列表
**URL:** https://linlan.net/eframe_backend/api/monitor/cache/getNames.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 通过名称前缀获取缓存信息列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/cache/getNames.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─cacheName|string|缓存名称|-
└─cacheKey|string|缓存键名|-
└─cacheValue|string|缓存内容|-
└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "cacheName": "carola.harvey",
      "cacheKey": "3x5m54",
      "cacheValue": "xhx38h",
      "remark": "uiawqr"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 通过名称获取缓存信息列表
**URL:** https://linlan.net/eframe_backend/api/monitor/cache/getKeys/{cacheName}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 通过名称获取缓存信息列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
cacheName|string|    缓存名称|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/cache/getKeys/carola.harvey.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {}
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 通过名称获取缓存详情
**URL:** https://linlan.net/eframe_backend/api/monitor/cache/getValue/{cacheName}/{cacheKey}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 通过名称获取缓存详情

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
cacheName|string|    缓存名称|true|-
cacheKey|string|    缓存Key名称|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/cache/getValue/carola.harvey/y94cwh.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─cacheName|string|缓存名称|-
└─cacheKey|string|缓存键名|-
└─cacheValue|string|缓存内容|-
└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "cacheName": "carola.harvey",
    "cacheKey": "r4wcz0",
    "cacheValue": "5jeg10",
    "remark": "r1p72b"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 通过名称前缀清理缓存
**URL:** https://linlan.net/eframe_backend/api/monitor/cache/clearCacheName/{cacheName}.do

**Type:** DELETE

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 通过名称前缀清理缓存

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
cacheName|string|    缓存名称前缀|true|-

**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/cache/clearCacheName/carola.harvey.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "5umq8d",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 通过名称清理缓存
**URL:** https://linlan.net/eframe_backend/api/monitor/cache/clearCacheKey/{cacheKey}.do

**Type:** DELETE

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 通过名称清理缓存

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
cacheKey|string|    缓存Key名称|true|-

**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/cache/clearCacheKey/upldrj.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "brmv1i",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 清理全部缓存
**URL:** https://linlan.net/eframe_backend/api/monitor/cache/clearCacheAll.do

**Type:** DELETE

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 清理全部缓存

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/cache/clearCacheAll.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "htajma",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 系统菜单信息读写
### 获取菜单列表
**URL:** https://linlan.net/eframe_backend/api/admin/menu/list.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取菜单列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
menuId|int64|菜单ID|false|-
menuName|string|菜单名称|false|-
parentId|int64|父菜单ID|false|-
currAppId|string|当前appId|false|-
menuType|string|类型（M目录 C菜单 F按钮）|false|-
visible|string|显示状态（0隐藏 1显示）|false|-
status|string|菜单状态（0未生效 1正常）|false|-
delFlag|string|状态0正常1停用2已删除|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/list.do?startTime=2026-11-09 17:56:55&menuType=97p5oq&visible=xdisyv&status=36a96h&orderBy=900&q=d67ftj&menuId=721&limit=10&page=1&currAppId=25&endTime=2026-11-09 17:56:55&menuName=carola.harvey&parentId=608&delFlag=fvfcjw
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─menuId|int64|菜单ID|-
└─menuName|string|菜单名称|-
└─type|string|功能类型|-
└─typeName|string|功能类型|-
└─parentName|string|父菜单名称|-
└─parentId|int64|父菜单ID|-
└─priority|int32|显示顺序|-
└─path|string|简短名称ENAME|-
└─component|string|组件路径URL|-
└─query|string|路由参数JS_EVENT|-
└─routeName|string|路由地址|-
└─isFrame|string|是否为外链（0是 1否）|-
└─isCache|string|是否缓存（0缓存 1不缓存）|-
└─menuType|string|菜单类型URL_TYPE（M目录 C菜单 F按钮）|-
└─menuTypeName|string|菜单类型URL_TYPE（M目录 C菜单 F按钮）|-
└─visible|string|显示状态（0隐藏 1显示）|-
└─status|string|菜单禁用（0正常 1禁用）|-
└─perms|string|权限字符串|-
└─icon|string|菜单图标|-
└─imagePath|string|菜单图片|-
└─creatorId|string|创建者|-
└─createTime|string|创建时间|-
└─lastTime|string|更新时间|-
└─children|array|子菜单|-
└─childNum|int32|子菜单数量|-
└─description|string|备注|-
└─listJson|string|页面列表JSON|-
└─delFlag|int32|状态0正常1停用2已删除|-
└─permsList|array|权限数组|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─permsName|string|权限名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─permsStr|string|权限字符串|-
└─buttonMenuList|array|子菜单按钮|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|string|主键|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentId|string|父节点ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|代码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "menuId": 795,
      "menuName": "carola.harvey",
      "type": "sgnkeo",
      "typeName": "carola.harvey",
      "parentName": "carola.harvey",
      "parentId": 337,
      "priority": 265,
      "path": "kqghi6",
      "component": "3kwv52",
      "query": "be6aez",
      "routeName": "carola.harvey",
      "isFrame": "k9xjdx",
      "isCache": "ehugaa",
      "menuType": "ciqk1s",
      "menuTypeName": "carola.harvey",
      "visible": "7q95nz",
      "status": "fnsazv",
      "perms": "4pmve9",
      "icon": "lw3xbc",
      "imagePath": "38y656",
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:07",
      "lastTime": "2026-11-09 17:58:07",
      "children": [
        {
          "$ref": ".."
        }
      ],
      "childNum": 903,
      "description": "tc8fg4",
      "listJson": "70f03r",
      "delFlag": 5,
      "permsList": [
        {
          "permsName": "carola.harvey",
          "permsStr": "rcpk8r"
        }
      ],
      "buttonMenuList": [
        {
          "id": "25",
          "parentId": "25",
          "code": "12647",
          "name": "carola.harvey"
        }
      ]
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取菜单分页
**URL:** https://linlan.net/eframe_backend/api/admin/menu/page.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取菜单分页

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
menuId|int64|菜单ID|false|-
menuName|string|菜单名称|false|-
parentId|int64|父菜单ID|false|-
currAppId|string|当前appId|false|-
menuType|string|类型（M目录 C菜单 F按钮）|false|-
visible|string|显示状态（0隐藏 1显示）|false|-
status|string|菜单状态（0未生效 1正常）|false|-
delFlag|string|状态0正常1停用2已删除|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/page.do?menuType=z92jpx&startTime=2026-11-09 17:56:55&endTime=2026-11-09 17:56:55&menuName=carola.harvey&orderBy=234&visible=4uv3ht&delFlag=uhyxm0&limit=10&q=6wbqup&menuId=590&status=r1w89s&parentId=7&currAppId=25&page=1
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─size|int32|No comments found.|-
└─pageNum|int32|No comments found.|-
└─pageSize|int32|No comments found.|-
└─startRow|int64|No comments found.|-
└─endRow|int64|No comments found.|-
└─total|int64|No comments found.|-
└─pages|int32|No comments found.|-
└─count|boolean|No comments found.|-
└─reasonable|boolean|No comments found.|-
└─pageSizeZero|boolean|No comments found.|-
└─countColumn|string|No comments found.|-
└─orderBy|string|No comments found.|-
└─orderByOnly|boolean|No comments found.|-
└─boundSqlInterceptor|object|No comments found.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "size": 10,
    "pageNum": 141,
    "pageSize": 10,
    "startRow": 702,
    "endRow": 506,
    "total": 359,
    "pages": 2,
    "count": true,
    "reasonable": true,
    "pageSizeZero": true,
    "countColumn": "19mga5",
    "orderBy": "1q4s30",
    "orderByOnly": true,
    "boundSqlInterceptor": {}
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据菜单编号获取详细信息
**URL:** https://linlan.net/eframe_backend/api/admin/menu/{menuId}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据菜单编号获取详细信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
menuId|int64| 菜单ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/354.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─menuId|int64|菜单ID|-
└─menuName|string|菜单名称|-
└─type|string|功能类型|-
└─typeName|string|功能类型|-
└─parentName|string|父菜单名称|-
└─parentId|int64|父菜单ID|-
└─priority|int32|显示顺序|-
└─path|string|简短名称ENAME|-
└─component|string|组件路径URL|-
└─query|string|路由参数JS_EVENT|-
└─routeName|string|路由地址|-
└─isFrame|string|是否为外链（0是 1否）|-
└─isCache|string|是否缓存（0缓存 1不缓存）|-
└─menuType|string|菜单类型URL_TYPE（M目录 C菜单 F按钮）|-
└─menuTypeName|string|菜单类型URL_TYPE（M目录 C菜单 F按钮）|-
└─visible|string|显示状态（0隐藏 1显示）|-
└─status|string|菜单禁用（0正常 1禁用）|-
└─perms|string|权限字符串|-
└─icon|string|菜单图标|-
└─imagePath|string|菜单图片|-
└─creatorId|string|创建者|-
└─createTime|string|创建时间|-
└─lastTime|string|更新时间|-
└─children|array|子菜单|-
└─childNum|int32|子菜单数量|-
└─description|string|备注|-
└─listJson|string|页面列表JSON|-
└─delFlag|int32|状态0正常1停用2已删除|-
└─permsList|array|权限数组|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─permsName|string|权限名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─permsStr|string|权限字符串|-
└─buttonMenuList|array|子菜单按钮|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|string|主键|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentId|string|父节点ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|代码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "menuId": 560,
    "menuName": "carola.harvey",
    "type": "denk8q",
    "typeName": "carola.harvey",
    "parentName": "carola.harvey",
    "parentId": 408,
    "priority": 479,
    "path": "9niebr",
    "component": "xe2x13",
    "query": "bw10o6",
    "routeName": "carola.harvey",
    "isFrame": "72c08x",
    "isCache": "xltgzu",
    "menuType": "fec6tv",
    "menuTypeName": "carola.harvey",
    "visible": "zq1tnm",
    "status": "tcm0xy",
    "perms": "2rb1jh",
    "icon": "5ne53v",
    "imagePath": "bzh5eu",
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:07",
    "lastTime": "2026-11-09 17:58:07",
    "children": [
      {
        "$ref": ".."
      }
    ],
    "childNum": 736,
    "description": "s55o1i",
    "listJson": "filj0g",
    "delFlag": 5,
    "permsList": [
      {
        "permsName": "carola.harvey",
        "permsStr": "wkgthw"
      }
    ],
    "buttonMenuList": [
      {
        "id": "25",
        "parentId": "25",
        "code": "12647",
        "name": "carola.harvey"
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取菜单下拉树列表
**URL:** https://linlan.net/eframe_backend/api/admin/menu/treeselect.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取菜单下拉树列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
menuId|int64|菜单ID|false|-
menuName|string|菜单名称|false|-
parentId|int64|父菜单ID|false|-
currAppId|string|当前appId|false|-
menuType|string|类型（M目录 C菜单 F按钮）|false|-
visible|string|显示状态（0隐藏 1显示）|false|-
status|string|菜单状态（0未生效 1正常）|false|-
delFlag|string|状态0正常1停用2已删除|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/treeselect.do?menuName=carola.harvey&visible=l2349v&startTime=2026-11-09 17:56:55&delFlag=knl65g&currAppId=25&endTime=2026-11-09 17:56:55&orderBy=19&limit=10&page=1&menuId=392&menuType=h7w0a8&q=3nx7yv&status=vu80gb&parentId=853
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─checkedKeys|array|选中菜单列表|-
└─menus|array|下拉树结构列表|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|节点ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─label|string|节点名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─children|array|子节点|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "checkedKeys": [
      824
    ],
    "menus": [
      {
        "id": 591,
        "label": "blk4wv",
        "children": [
          {
            "$ref": ".."
          }
        ]
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取菜单下拉初始树列表
**URL:** https://linlan.net/eframe_backend/api/admin/menu/treeInit.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取菜单下拉初始树列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
parentId|int64|父功能菜单ID|false|-
appId|string|应用ID|false|-
name|string|功能名称|false|-
isProtect|boolean|是否系统菜单，0否（会员或前端菜单）1是（系统菜单）|false|-
type|string|功能类型,关联BASE_RIGHTTYPE，ADMIN,WORK,APP,SCREEN,MEMBER,AUDIT|false|-
code|string|功能编号|false|-
menuLevel|int32|菜单层次|false|-
subCount|int32|子节点数|false|-
urlType|string|调用入口类型，如CATAGORY,MENU,BUTTON,OUTLINK,CHANNEL,COMPOS,SCENES,RECOMMEND,FOLLOW|false|-
url|string|功能地址，前台URL路由地址|false|-
icon|string|功能图标，样式序号，图标或按钮路径|false|-
popPosition|int32|弹出位置|false|-
imagePath|string|图片路径|false|-
shortCut|string|快捷键|false|-
isDisplay|boolean|是否显示0否1是|false|-
isDisabled|boolean|是否禁用0否1是|false|-
isCheck|boolean|是否验证权限0为无需验证，1为需要验证|false|-
delFlag|int32|是否删除1已删除0正常|false|-
description|string|描述|false|-
createTime|string|创建时间|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-
isMenuAll|string|是否全部菜单|false|-
offset|int32|菜单位置|false|-
parentNull|string|父节点为空|false|-
parentRoot|string|根节点|false|-
typeNoButton|string|类型为Button|false|-
appIds|array|应用ID集合|false|-
menuIds|array|菜单ID集合|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/treeInit.do?offset=1&shortCut=xmmjjc&urlType=nah3nb&spare1=8xn21y&isDisabled=true&menuIds=p36hzb&menuIds=p36hzb&page=1&url=www.hank-okon.com&type=mzawpc&icon=3iz5ux&code=12647&endTime=2026-11-09 17:56:55&q=cx22uj&imagePath=k5il90&parentId=271&isCheck=true&delFlag=5&appIds=we6nnf&appIds=we6nnf&subCount=849&name=carola.harvey&appId=25&menuLevel=74&startTime=2026-11-09 17:56:55&description=nenomr&popPosition=446&spare2=b6vqdf&parentNull=3nqxnd&parentRoot=dnddie&createTime=2026-11-09 17:56:55&limit=10&isDisplay=true&typeNoButton=7dnmr4&isProtect=true&isMenuAll=e3znj2&orderBy=191
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─title|string|节点标题|-
└─id|string|节点唯一索引，用于对指定节点进行各类操作|-
└─parentId|string|父节点ID|-
└─extId|string|拓展id|-
└─href|string|点击节点弹出新窗口对应的 url。需开启 isJump 参数|-
└─spread|boolean|节点是否初始展开，默认 false|-
└─checked|boolean|节点是否初始为选中状态（如果开启复选框的话），默认 false|-
└─disabled|boolean|节点是否为禁用状态。默认 false|-
└─children|array|No comments found.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "title": "drnoks",
      "id": "25",
      "parentId": "25",
      "extId": "25",
      "href": "bz7v96",
      "spread": true,
      "checked": true,
      "disabled": true,
      "children": [
        {
          "$ref": ".."
        }
      ]
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 加载对应角色菜单列表树
**URL:** https://linlan.net/eframe_backend/api/admin/menu/roleMenuTreeselect/{roleId}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 加载对应角色菜单列表树

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
roleId|int64| 角色ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/roleMenuTreeselect/683.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─checkedKeys|array|选中菜单列表|-
└─menus|array|下拉树结构列表|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|节点ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─label|string|节点名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─children|array|子节点|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "checkedKeys": [
      721
    ],
    "menus": [
      {
        "id": 615,
        "label": "2deg9p",
        "children": [
          {
            "$ref": ".."
          }
        ]
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增单个菜单
**URL:** https://linlan.net/eframe_backend/api/admin/menu/save/single.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 新增单个菜单

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
menuId|int64|菜单ID|false|-
menuName|string|菜单名称|false|-
type|string|功能类型|false|-
typeName|string|功能类型|false|-
parentName|string|父菜单名称|false|-
parentId|int64|父菜单ID|false|-
priority|int32|显示顺序|false|-
path|string|简短名称ENAME|false|-
component|string|组件路径URL|false|-
query|string|路由参数JS_EVENT|false|-
routeName|string|路由地址|false|-
isFrame|string|是否为外链（0是 1否）|false|-
isCache|string|是否缓存（0缓存 1不缓存）|false|-
menuType|string|菜单类型URL_TYPE（M目录 C菜单 F按钮）|false|-
menuTypeName|string|菜单类型URL_TYPE（M目录 C菜单 F按钮）|false|-
visible|string|显示状态（0隐藏 1显示）|false|-
status|string|菜单禁用（0正常 1禁用）|false|-
perms|string|权限字符串|false|-
icon|string|菜单图标|false|-
imagePath|string|菜单图片|false|-
creatorId|string|创建者|false|-
createTime|string|创建时间|false|-
lastTime|string|更新时间|false|-
children|array|子菜单|false|-
childNum|int32|子菜单数量|false|-
description|string|备注|false|-
listJson|string|页面列表JSON|false|-
delFlag|int32|状态0正常1停用2已删除|false|-
permsList|array|权限数组|false|-
└─permsName|string|权限名称|false|-
└─permsStr|string|权限字符串|false|-
buttonMenuList|array|子菜单按钮|false|-
└─id|string|主键|false|-
└─parentId|string|父节点ID|false|-
└─code|string|代码|false|-
└─name|string|名称|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/save/single.do --data '{
  "menuId": 748,
  "menuName": "carola.harvey",
  "type": "80zh38",
  "typeName": "carola.harvey",
  "parentName": "carola.harvey",
  "parentId": 728,
  "priority": 101,
  "path": "7jc2gk",
  "component": "tjput8",
  "query": "oi2d1r",
  "routeName": "carola.harvey",
  "isFrame": "1jzojc",
  "isCache": "g5bx23",
  "menuType": "lyqu1s",
  "menuTypeName": "carola.harvey",
  "visible": "imp98u",
  "status": "pshu9z",
  "perms": "ky2f75",
  "icon": "njkg8y",
  "imagePath": "9w4b68",
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:07",
  "lastTime": "2026-11-09 17:58:07",
  "children": [
    {
      "$ref": ".."
    }
  ],
  "childNum": 945,
  "description": "i9ii20",
  "listJson": "qvhvx2",
  "delFlag": 5,
  "permsList": [
    {
      "permsName": "carola.harvey",
      "permsStr": "ttkqh1"
    }
  ],
  "buttonMenuList": [
    {
      "id": "25",
      "parentId": "25",
      "code": "12647",
      "name": "carola.harvey"
    }
  ]
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "frwatq",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改菜单
**URL:** https://linlan.net/eframe_backend/api/admin/menu/update/single.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 修改菜单

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
menuId|int64|菜单ID|false|-
menuName|string|菜单名称|false|-
type|string|功能类型|false|-
typeName|string|功能类型|false|-
parentName|string|父菜单名称|false|-
parentId|int64|父菜单ID|false|-
priority|int32|显示顺序|false|-
path|string|简短名称ENAME|false|-
component|string|组件路径URL|false|-
query|string|路由参数JS_EVENT|false|-
routeName|string|路由地址|false|-
isFrame|string|是否为外链（0是 1否）|false|-
isCache|string|是否缓存（0缓存 1不缓存）|false|-
menuType|string|菜单类型URL_TYPE（M目录 C菜单 F按钮）|false|-
menuTypeName|string|菜单类型URL_TYPE（M目录 C菜单 F按钮）|false|-
visible|string|显示状态（0隐藏 1显示）|false|-
status|string|菜单禁用（0正常 1禁用）|false|-
perms|string|权限字符串|false|-
icon|string|菜单图标|false|-
imagePath|string|菜单图片|false|-
creatorId|string|创建者|false|-
createTime|string|创建时间|false|-
lastTime|string|更新时间|false|-
children|array|子菜单|false|-
childNum|int32|子菜单数量|false|-
description|string|备注|false|-
listJson|string|页面列表JSON|false|-
delFlag|int32|状态0正常1停用2已删除|false|-
permsList|array|权限数组|false|-
└─permsName|string|权限名称|false|-
└─permsStr|string|权限字符串|false|-
buttonMenuList|array|子菜单按钮|false|-
└─id|string|主键|false|-
└─parentId|string|父节点ID|false|-
└─code|string|代码|false|-
└─name|string|名称|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/update/single.do --data '{
  "menuId": 192,
  "menuName": "carola.harvey",
  "type": "q5ox3u",
  "typeName": "carola.harvey",
  "parentName": "carola.harvey",
  "parentId": 544,
  "priority": 247,
  "path": "zb2oec",
  "component": "qfpxpb",
  "query": "mkrq8u",
  "routeName": "carola.harvey",
  "isFrame": "e5xdpx",
  "isCache": "togpc3",
  "menuType": "xlt765",
  "menuTypeName": "carola.harvey",
  "visible": "kift2c",
  "status": "b5etni",
  "perms": "2vvwo8",
  "icon": "u795xd",
  "imagePath": "l6z2pt",
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:07",
  "lastTime": "2026-11-09 17:58:07",
  "children": [
    {
      "$ref": ".."
    }
  ],
  "childNum": 266,
  "description": "693okk",
  "listJson": "q0tnaw",
  "delFlag": 5,
  "permsList": [
    {
      "permsName": "carola.harvey",
      "permsStr": "xwnbt5"
    }
  ],
  "buttonMenuList": [
    {
      "id": "25",
      "parentId": "25",
      "code": "12647",
      "name": "carola.harvey"
    }
  ]
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "c6knd6",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增菜单及默认按钮
**URL:** https://linlan.net/eframe_backend/api/admin/menu/save.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 新增菜单及默认按钮

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
menuId|int64|菜单ID|false|-
menuName|string|菜单名称|false|-
type|string|功能类型|false|-
typeName|string|功能类型|false|-
parentName|string|父菜单名称|false|-
parentId|int64|父菜单ID|false|-
priority|int32|显示顺序|false|-
path|string|简短名称ENAME|false|-
component|string|组件路径URL|false|-
query|string|路由参数JS_EVENT|false|-
routeName|string|路由地址|false|-
isFrame|string|是否为外链（0是 1否）|false|-
isCache|string|是否缓存（0缓存 1不缓存）|false|-
menuType|string|菜单类型URL_TYPE（M目录 C菜单 F按钮）|false|-
menuTypeName|string|菜单类型URL_TYPE（M目录 C菜单 F按钮）|false|-
visible|string|显示状态（0隐藏 1显示）|false|-
status|string|菜单禁用（0正常 1禁用）|false|-
perms|string|权限字符串|false|-
icon|string|菜单图标|false|-
imagePath|string|菜单图片|false|-
creatorId|string|创建者|false|-
createTime|string|创建时间|false|-
lastTime|string|更新时间|false|-
children|array|子菜单|false|-
childNum|int32|子菜单数量|false|-
description|string|备注|false|-
listJson|string|页面列表JSON|false|-
delFlag|int32|状态0正常1停用2已删除|false|-
permsList|array|权限数组|false|-
└─permsName|string|权限名称|false|-
└─permsStr|string|权限字符串|false|-
buttonMenuList|array|子菜单按钮|false|-
└─id|string|主键|false|-
└─parentId|string|父节点ID|false|-
└─code|string|代码|false|-
└─name|string|名称|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/save.do --data '{
  "menuId": 700,
  "menuName": "carola.harvey",
  "type": "mu2man",
  "typeName": "carola.harvey",
  "parentName": "carola.harvey",
  "parentId": 95,
  "priority": 47,
  "path": "e5abwq",
  "component": "f9e6ef",
  "query": "5djnhj",
  "routeName": "carola.harvey",
  "isFrame": "hu5e6n",
  "isCache": "a3y63g",
  "menuType": "ybvedr",
  "menuTypeName": "carola.harvey",
  "visible": "2zkyjv",
  "status": "ow7yo3",
  "perms": "4yvbcd",
  "icon": "z15585",
  "imagePath": "qccygh",
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:07",
  "lastTime": "2026-11-09 17:58:07",
  "children": [
    {
      "$ref": ".."
    }
  ],
  "childNum": 853,
  "description": "ckqwe0",
  "listJson": "4u253x",
  "delFlag": 5,
  "permsList": [
    {
      "permsName": "carola.harvey",
      "permsStr": "jrpd6h"
    }
  ],
  "buttonMenuList": [
    {
      "id": "25",
      "parentId": "25",
      "code": "12647",
      "name": "carola.harvey"
    }
  ]
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "c5gorm",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改菜单及默认按钮
**URL:** https://linlan.net/eframe_backend/api/admin/menu/update.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 修改菜单及默认按钮

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
menuId|int64|菜单ID|false|-
menuName|string|菜单名称|false|-
type|string|功能类型|false|-
typeName|string|功能类型|false|-
parentName|string|父菜单名称|false|-
parentId|int64|父菜单ID|false|-
priority|int32|显示顺序|false|-
path|string|简短名称ENAME|false|-
component|string|组件路径URL|false|-
query|string|路由参数JS_EVENT|false|-
routeName|string|路由地址|false|-
isFrame|string|是否为外链（0是 1否）|false|-
isCache|string|是否缓存（0缓存 1不缓存）|false|-
menuType|string|菜单类型URL_TYPE（M目录 C菜单 F按钮）|false|-
menuTypeName|string|菜单类型URL_TYPE（M目录 C菜单 F按钮）|false|-
visible|string|显示状态（0隐藏 1显示）|false|-
status|string|菜单禁用（0正常 1禁用）|false|-
perms|string|权限字符串|false|-
icon|string|菜单图标|false|-
imagePath|string|菜单图片|false|-
creatorId|string|创建者|false|-
createTime|string|创建时间|false|-
lastTime|string|更新时间|false|-
children|array|子菜单|false|-
childNum|int32|子菜单数量|false|-
description|string|备注|false|-
listJson|string|页面列表JSON|false|-
delFlag|int32|状态0正常1停用2已删除|false|-
permsList|array|权限数组|false|-
└─permsName|string|权限名称|false|-
└─permsStr|string|权限字符串|false|-
buttonMenuList|array|子菜单按钮|false|-
└─id|string|主键|false|-
└─parentId|string|父节点ID|false|-
└─code|string|代码|false|-
└─name|string|名称|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/update.do --data '{
  "menuId": 994,
  "menuName": "carola.harvey",
  "type": "czbq15",
  "typeName": "carola.harvey",
  "parentName": "carola.harvey",
  "parentId": 585,
  "priority": 533,
  "path": "wp84iy",
  "component": "efoksl",
  "query": "3vmfnm",
  "routeName": "carola.harvey",
  "isFrame": "feh3ln",
  "isCache": "zwge93",
  "menuType": "kwqvj9",
  "menuTypeName": "carola.harvey",
  "visible": "u2v89r",
  "status": "wa0pjl",
  "perms": "1bsl9s",
  "icon": "yit719",
  "imagePath": "5nzdjo",
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:07",
  "lastTime": "2026-11-09 17:58:07",
  "children": [
    {
      "$ref": ".."
    }
  ],
  "childNum": 742,
  "description": "ifxoa3",
  "listJson": "bb4gw2",
  "delFlag": 5,
  "permsList": [
    {
      "permsName": "carola.harvey",
      "permsStr": "2ai9ep"
    }
  ],
  "buttonMenuList": [
    {
      "id": "25",
      "parentId": "25",
      "code": "12647",
      "name": "carola.harvey"
    }
  ]
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "qixiol",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除菜单
**URL:** https://linlan.net/eframe_backend/api/admin/menu/delete/{menuIds}.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除菜单

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
menuIds|array| 菜单Ids,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "94f8d0",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 停用启用菜单
**URL:** https://linlan.net/eframe_backend/api/admin/menu/disable/{id}.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 停用启用菜单

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|功能菜单ID|false|-
parentId|int64|父功能菜单ID|false|-
appId|string|应用ID|false|-
name|string|功能名称|false|-
ename|string|功能名称简称，英文，其他语种名称|false|-
sname|string|简短名称|false|-
isProtect|boolean|是否系统菜单，0否（会员或前端菜单）1是（系统菜单）|false|-
type|string|功能类型,关联BASE_RIGHTTYPE，ADMIN,WORK,APP,SCREEN,MEMBER,AUDIT|false|-
userId|string|系统管理用户ID|false|-
code|string|功能编号|false|-
menuLevel|int32|菜单层次|false|-
subCount|int32|子节点数|false|-
perms|string|功能模型，多个用逗号分隔，如：admin:user:list|false|-
urlType|string|调用入口类型，如CATAGORY,MENU,BUTTON,OUTLINK,CHANNEL,COMPOS,SCENES,RECOMMEND,FOLLOW|false|-
url|string|功能地址，前台URL路由地址|false|-
icon|string|功能图标，样式序号，图标或按钮路径|false|-
popPosition|int32|弹出位置|false|-
imagePath|string|图片路径|false|-
css|string|CSS页面样式|false|-
jsEvent|string|JS事件|false|-
menuSeq|string|菜单序列,菜单关联的外键ID，如栏目ID，组件ID，三方功能ID|false|-
shortCut|string|快捷键|false|-
isLeaf|boolean|是否叶子节点0为非叶子节点，1为叶子节点|false|-
isDisplay|boolean|是否显示0否1是|false|-
isDisabled|boolean|是否禁用0否1是|false|-
isCheck|boolean|是否验证权限0为无需验证，1为需要验证|false|-
priority|int32|重点优先级|false|-
delFlag|int32|是否删除1已删除0正常|false|-
deleteTime|string|删除时间|false|-
description|string|描述|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-
open|boolean|ztree属性|false|-
list|array|No comments found.|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/disable/{id}.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:08",
  "lastTime": "2026-11-09 17:58:08",
  "id": 902,
  "parentId": 400,
  "appId": "25",
  "name": "carola.harvey",
  "ename": "carola.harvey",
  "sname": "carola.harvey",
  "isProtect": true,
  "type": "h6aa0h",
  "userId": "25",
  "code": "12647",
  "menuLevel": 865,
  "subCount": 512,
  "perms": "v9lhh4",
  "urlType": "vs9kct",
  "url": "www.hank-okon.com",
  "icon": "cod0z4",
  "popPosition": 42,
  "imagePath": "9uhzbj",
  "css": "s263v5",
  "jsEvent": "p42uj4",
  "menuSeq": "b7r897",
  "shortCut": "bv7r1v",
  "isLeaf": true,
  "isDisplay": true,
  "isDisabled": true,
  "isCheck": true,
  "priority": 599,
  "delFlag": 5,
  "deleteTime": "2026-11-09 17:58:08",
  "description": "9hgi9k",
  "spare1": "xxs37d",
  "spare2": "zx8z42",
  "open": true,
  "list": [
    {
      "object": "any object"
    }
  ]
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "vipr1t",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 系统角色信息读写
### 获取角色列表
**URL:** https://linlan.net/eframe_backend/api/admin/role/list.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取角色列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
roleId|int64|角色ID|false|-
roleName|string|角色名称|false|-
roleKey|string|角色权限|false|-
status|int32|角色状态（0未生效 1正常）|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/list.do?startTime=2026-11-09 17:56:55&roleId=152&endTime=2026-11-09 17:56:55&q=xpefpf&roleKey=728ydg&status=51&page=1&orderBy=985&limit=10&roleName=carola.harvey
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─roleId|int64|角色ID|-
└─roleName|string|角色名称|-
└─roleKey|string|角色权限|-
└─roleSort|int32|角色排序|-
└─menuCheckStrictly|boolean|菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）|-
└─deptCheckStrictly|boolean|部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）|-
└─status|int32|角色状态（0未生效 1正常）|-
└─flag|boolean|用户是否存在此角色标识 默认不存在|-
└─menuIds|array|菜单组|-
└─deptIds|array|部门组（数据权限）|-
└─permissions|array|角色菜单权限|-
└─remark|string|备注|-
└─parentName|string|父角色名字|-
└─appName|string|全局应用信息类|-
└─roletypeId|string|系统角色分类|-
└─roletypeName|string|系统角色分类|-
└─priority|int32|排序码|-
└─isSuper|boolean|是否拥有所有权限|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:08",
      "lastTime": "2026-11-09 17:58:08",
      "roleId": 677,
      "roleName": "carola.harvey",
      "roleKey": "zycua3",
      "roleSort": 987,
      "menuCheckStrictly": true,
      "deptCheckStrictly": true,
      "status": 922,
      "flag": true,
      "menuIds": [
        226
      ],
      "deptIds": [
        868
      ],
      "permissions": [
        "7eqd8y"
      ],
      "remark": "7q3yck",
      "parentName": "carola.harvey",
      "appName": "carola.harvey",
      "roletypeId": "25",
      "roletypeName": "carola.harvey",
      "priority": 971,
      "isSuper": true
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 角色信息导出
**URL:** https://linlan.net/eframe_backend/api/admin/role/export.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 角色信息导出

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
roleId|int64|角色ID|false|-
roleName|string|角色名称|false|-
roleKey|string|角色权限|false|-
status|int32|角色状态（0未生效 1正常）|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/export.do --data 'roleName=carola.harvey&roleKey=phs5t8&status=907&writer.psOut.closing=true&orderBy=822&characterEncoding=g8s6ei&contentType=o54211&writer.trouble=true&writer.formatter.lastException.detailMessage=success&writer.psOut.textOut.nChars=390&limit=10&writer.psOut.formatter.zero=j&writer.writeBuffer=f&writer.writeBuffer=f&writer.formatter.zero=9&committed=true&q=90pvea&roleId=328&writer.psOut.autoFlush=true&writer.psOut.trouble=true&page=1&status=861&writer.psOut.closed=true&bufferSize=10&writer.psOut.textOut.nextChar=539&endTime=2026-11-09 17:56:55&writer.autoFlush=true&startTime=2026-11-09 17:56:55'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "j51jb5",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据角色编号获取详细信息
**URL:** https://linlan.net/eframe_backend/api/admin/role/{roleId}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据角色编号获取详细信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
roleId|int64| 角色ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/340.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─roleId|int64|角色ID|-
└─roleName|string|角色名称|-
└─roleKey|string|角色权限|-
└─roleSort|int32|角色排序|-
└─menuCheckStrictly|boolean|菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）|-
└─deptCheckStrictly|boolean|部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）|-
└─status|int32|角色状态（0未生效 1正常）|-
└─flag|boolean|用户是否存在此角色标识 默认不存在|-
└─menuIds|array|菜单组|-
└─deptIds|array|部门组（数据权限）|-
└─permissions|array|角色菜单权限|-
└─remark|string|备注|-
└─parentName|string|父角色名字|-
└─appName|string|全局应用信息类|-
└─roletypeId|string|系统角色分类|-
└─roletypeName|string|系统角色分类|-
└─priority|int32|排序码|-
└─isSuper|boolean|是否拥有所有权限|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:08",
    "lastTime": "2026-11-09 17:58:08",
    "roleId": 326,
    "roleName": "carola.harvey",
    "roleKey": "1mqmby",
    "roleSort": 587,
    "menuCheckStrictly": true,
    "deptCheckStrictly": true,
    "status": 915,
    "flag": true,
    "menuIds": [
      701
    ],
    "deptIds": [
      813
    ],
    "permissions": [
      "n3aqqt"
    ],
    "remark": "3trxwv",
    "parentName": "carola.harvey",
    "appName": "carola.harvey",
    "roletypeId": "25",
    "roletypeName": "carola.harvey",
    "priority": 940,
    "isSuper": true
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增角色
**URL:** https://linlan.net/eframe_backend/api/admin/role/save.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 新增角色

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
roleId|int64|角色ID|false|-
roleName|string|角色名称|false|-
roleKey|string|角色权限|false|-
roleSort|int32|角色排序|false|-
menuCheckStrictly|boolean|菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）|false|-
deptCheckStrictly|boolean|部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）|false|-
status|int32|角色状态（0未生效 1正常）|false|-
flag|boolean|用户是否存在此角色标识 默认不存在|false|-
menuIds|array|菜单组|false|-
deptIds|array|部门组（数据权限）|false|-
permissions|array|角色菜单权限|false|-
remark|string|备注|false|-
parentName|string|父角色名字|false|-
appName|string|全局应用信息类|false|-
roletypeId|string|系统角色分类|false|-
roletypeName|string|系统角色分类|false|-
priority|int32|排序码|false|-
isSuper|boolean|是否拥有所有权限|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:08",
  "lastTime": "2026-11-09 17:58:08",
  "roleId": 255,
  "roleName": "carola.harvey",
  "roleKey": "ac2eb3",
  "roleSort": 735,
  "menuCheckStrictly": true,
  "deptCheckStrictly": true,
  "status": 506,
  "flag": true,
  "menuIds": [
    767
  ],
  "deptIds": [
    512
  ],
  "permissions": [
    "b607te"
  ],
  "remark": "3be38v",
  "parentName": "carola.harvey",
  "appName": "carola.harvey",
  "roletypeId": "25",
  "roletypeName": "carola.harvey",
  "priority": 515,
  "isSuper": true
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "hux2xr",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改保存角色
**URL:** https://linlan.net/eframe_backend/api/admin/role/update.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 修改保存角色

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
roleId|int64|角色ID|false|-
roleName|string|角色名称|false|-
roleKey|string|角色权限|false|-
roleSort|int32|角色排序|false|-
menuCheckStrictly|boolean|菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）|false|-
deptCheckStrictly|boolean|部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）|false|-
status|int32|角色状态（0未生效 1正常）|false|-
flag|boolean|用户是否存在此角色标识 默认不存在|false|-
menuIds|array|菜单组|false|-
deptIds|array|部门组（数据权限）|false|-
permissions|array|角色菜单权限|false|-
remark|string|备注|false|-
parentName|string|父角色名字|false|-
appName|string|全局应用信息类|false|-
roletypeId|string|系统角色分类|false|-
roletypeName|string|系统角色分类|false|-
priority|int32|排序码|false|-
isSuper|boolean|是否拥有所有权限|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:08",
  "lastTime": "2026-11-09 17:58:08",
  "roleId": 934,
  "roleName": "carola.harvey",
  "roleKey": "n6jkg8",
  "roleSort": 897,
  "menuCheckStrictly": true,
  "deptCheckStrictly": true,
  "status": 342,
  "flag": true,
  "menuIds": [
    903
  ],
  "deptIds": [
    388
  ],
  "permissions": [
    "5k8hh2"
  ],
  "remark": "mhzha6",
  "parentName": "carola.harvey",
  "appName": "carola.harvey",
  "roletypeId": "25",
  "roletypeName": "carola.harvey",
  "priority": 953,
  "isSuper": true
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "vymwcv",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增角色及绑定菜单部门
**URL:** https://linlan.net/eframe_backend/api/admin/role/save/all.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 新增角色及绑定菜单部门

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
roleId|int64|角色ID|false|-
roleName|string|角色名称|false|-
roleKey|string|角色权限|false|-
roleSort|int32|角色排序|false|-
menuCheckStrictly|boolean|菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）|false|-
deptCheckStrictly|boolean|部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）|false|-
status|int32|角色状态（0未生效 1正常）|false|-
flag|boolean|用户是否存在此角色标识 默认不存在|false|-
menuIds|array|菜单组|false|-
deptIds|array|部门组（数据权限）|false|-
permissions|array|角色菜单权限|false|-
remark|string|备注|false|-
parentName|string|父角色名字|false|-
appName|string|全局应用信息类|false|-
roletypeId|string|系统角色分类|false|-
roletypeName|string|系统角色分类|false|-
priority|int32|排序码|false|-
isSuper|boolean|是否拥有所有权限|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/save/all.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:08",
  "lastTime": "2026-11-09 17:58:08",
  "roleId": 269,
  "roleName": "carola.harvey",
  "roleKey": "c3zioo",
  "roleSort": 93,
  "menuCheckStrictly": true,
  "deptCheckStrictly": true,
  "status": 940,
  "flag": true,
  "menuIds": [
    656
  ],
  "deptIds": [
    123
  ],
  "permissions": [
    "j0tjpg"
  ],
  "remark": "z4ixcf",
  "parentName": "carola.harvey",
  "appName": "carola.harvey",
  "roletypeId": "25",
  "roletypeName": "carola.harvey",
  "priority": 920,
  "isSuper": true
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "oenkao",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改保存角色及绑定菜单部门
**URL:** https://linlan.net/eframe_backend/api/admin/role/update/all.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 修改保存角色及绑定菜单部门

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
roleId|int64|角色ID|false|-
roleName|string|角色名称|false|-
roleKey|string|角色权限|false|-
roleSort|int32|角色排序|false|-
menuCheckStrictly|boolean|菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）|false|-
deptCheckStrictly|boolean|部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）|false|-
status|int32|角色状态（0未生效 1正常）|false|-
flag|boolean|用户是否存在此角色标识 默认不存在|false|-
menuIds|array|菜单组|false|-
deptIds|array|部门组（数据权限）|false|-
permissions|array|角色菜单权限|false|-
remark|string|备注|false|-
parentName|string|父角色名字|false|-
appName|string|全局应用信息类|false|-
roletypeId|string|系统角色分类|false|-
roletypeName|string|系统角色分类|false|-
priority|int32|排序码|false|-
isSuper|boolean|是否拥有所有权限|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/update/all.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:08",
  "lastTime": "2026-11-09 17:58:08",
  "roleId": 516,
  "roleName": "carola.harvey",
  "roleKey": "z4euzw",
  "roleSort": 296,
  "menuCheckStrictly": true,
  "deptCheckStrictly": true,
  "status": 769,
  "flag": true,
  "menuIds": [
    4
  ],
  "deptIds": [
    828
  ],
  "permissions": [
    "or2vc2"
  ],
  "remark": "3r3hji",
  "parentName": "carola.harvey",
  "appName": "carola.harvey",
  "roletypeId": "25",
  "roletypeName": "carola.harvey",
  "priority": 834,
  "isSuper": true
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "h2x3j1",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除角色
**URL:** https://linlan.net/eframe_backend/api/admin/role/delete/{roleIds}.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除角色

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
roleIds|array| 角色Ids,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "8a9z2j",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 停用启用角色
**URL:** https://linlan.net/eframe_backend/api/admin/role/disable/{roleId}.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 停用启用角色

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|角色ID|false|-
roletypeId|string|角色分类ID|false|-
appId|string|应用ID|false|-
name|string|角色自定义名称|false|-
code|string|角色自定义代码|false|-
priority|int32|重点优先级|false|-
isRegular|boolean|是否固定权限1表示固定角色0表示自定义角色|false|-
isSuper|boolean|拥有所有权限|false|-
isPublic|boolean|是否公共角色|false|-
status|int32|状态0未生效1正常2受限3锁定4删除|false|-
description|string|角色描述|false|-
areaType|string|地域类型|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/disable/{roleId}.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:08",
  "lastTime": "2026-11-09 17:58:08",
  "id": 908,
  "roletypeId": "25",
  "appId": "25",
  "name": "carola.harvey",
  "code": "12647",
  "priority": 897,
  "isRegular": true,
  "isSuper": true,
  "isPublic": true,
  "status": 327,
  "description": "jgioum",
  "areaType": "wqz3va"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "3hvxhc",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 角色绑定菜单
**URL:** https://linlan.net/eframe_backend/api/admin/role/bindMenu/{roleId}.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 角色绑定菜单

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
roleId|int64|角色ID|false|-
roleName|string|角色名称|false|-
roleKey|string|角色权限|false|-
roleSort|int32|角色排序|false|-
menuCheckStrictly|boolean|菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）|false|-
deptCheckStrictly|boolean|部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）|false|-
status|int32|角色状态（0未生效 1正常）|false|-
flag|boolean|用户是否存在此角色标识 默认不存在|false|-
menuIds|array|菜单组|false|-
deptIds|array|部门组（数据权限）|false|-
permissions|array|角色菜单权限|false|-
remark|string|备注|false|-
parentName|string|父角色名字|false|-
appName|string|全局应用信息类|false|-
roletypeId|string|系统角色分类|false|-
roletypeName|string|系统角色分类|false|-
priority|int32|排序码|false|-
isSuper|boolean|是否拥有所有权限|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/bindMenu/{roleId}.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:08",
  "lastTime": "2026-11-09 17:58:08",
  "roleId": 697,
  "roleName": "carola.harvey",
  "roleKey": "697a1q",
  "roleSort": 683,
  "menuCheckStrictly": true,
  "deptCheckStrictly": true,
  "status": 182,
  "flag": true,
  "menuIds": [
    824
  ],
  "deptIds": [
    77
  ],
  "permissions": [
    "mqqzp4"
  ],
  "remark": "918emm",
  "parentName": "carola.harvey",
  "appName": "carola.harvey",
  "roletypeId": "25",
  "roletypeName": "carola.harvey",
  "priority": 99,
  "isSuper": true
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "i4i1c7",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 角色绑定部门
**URL:** https://linlan.net/eframe_backend/api/admin/role/bindDept/{roleId}.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 角色绑定部门

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
roleId|int64|角色ID|false|-
roleName|string|角色名称|false|-
roleKey|string|角色权限|false|-
roleSort|int32|角色排序|false|-
menuCheckStrictly|boolean|菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）|false|-
deptCheckStrictly|boolean|部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）|false|-
status|int32|角色状态（0未生效 1正常）|false|-
flag|boolean|用户是否存在此角色标识 默认不存在|false|-
menuIds|array|菜单组|false|-
deptIds|array|部门组（数据权限）|false|-
permissions|array|角色菜单权限|false|-
remark|string|备注|false|-
parentName|string|父角色名字|false|-
appName|string|全局应用信息类|false|-
roletypeId|string|系统角色分类|false|-
roletypeName|string|系统角色分类|false|-
priority|int32|排序码|false|-
isSuper|boolean|是否拥有所有权限|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/bindDept/{roleId}.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:08",
  "lastTime": "2026-11-09 17:58:08",
  "roleId": 810,
  "roleName": "carola.harvey",
  "roleKey": "m9f1i2",
  "roleSort": 139,
  "menuCheckStrictly": true,
  "deptCheckStrictly": true,
  "status": 755,
  "flag": true,
  "menuIds": [
    501
  ],
  "deptIds": [
    60
  ],
  "permissions": [
    "zy6xj9"
  ],
  "remark": "ga65y9",
  "parentName": "carola.harvey",
  "appName": "carola.harvey",
  "roletypeId": "25",
  "roletypeName": "carola.harvey",
  "priority": 91,
  "isSuper": true
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "v4uike",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取角色选择框列表
**URL:** https://linlan.net/eframe_backend/api/admin/role/option/select.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取角色选择框列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/option/select.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─roleId|int64|角色ID|-
└─roleName|string|角色名称|-
└─roleKey|string|角色权限|-
└─roleSort|int32|角色排序|-
└─menuCheckStrictly|boolean|菜单树选择项是否关联显示（ 0：父子不互相关联显示 1：父子互相关联显示）|-
└─deptCheckStrictly|boolean|部门树选择项是否关联显示（0：父子不互相关联显示 1：父子互相关联显示 ）|-
└─status|int32|角色状态（0未生效 1正常）|-
└─flag|boolean|用户是否存在此角色标识 默认不存在|-
└─menuIds|array|菜单组|-
└─deptIds|array|部门组（数据权限）|-
└─permissions|array|角色菜单权限|-
└─remark|string|备注|-
└─parentName|string|父角色名字|-
└─appName|string|全局应用信息类|-
└─roletypeId|string|系统角色分类|-
└─roletypeName|string|系统角色分类|-
└─priority|int32|排序码|-
└─isSuper|boolean|是否拥有所有权限|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:08",
      "lastTime": "2026-11-09 17:58:08",
      "roleId": 990,
      "roleName": "carola.harvey",
      "roleKey": "awkhvt",
      "roleSort": 993,
      "menuCheckStrictly": true,
      "deptCheckStrictly": true,
      "status": 706,
      "flag": true,
      "menuIds": [
        990
      ],
      "deptIds": [
        4
      ],
      "permissions": [
        "j0mafg"
      ],
      "remark": "um20os",
      "parentName": "carola.harvey",
      "appName": "carola.harvey",
      "roletypeId": "25",
      "roletypeName": "carola.harvey",
      "priority": 189,
      "isSuper": true
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 查询已分配用户角色列表
**URL:** https://linlan.net/eframe_backend/api/admin/role/authUser/allocatedList.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 查询已分配用户角色列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
adminId|int64|用户LID|false|-
userId|string|用户UUID|false|-
deptId|int64|部门ID|false|-
organId|string|机构ID|false|-
username|string|用户账号|false|-
nickName|string|用户昵称|false|-
email|string|用户邮箱|false|-
mobile|string|手机号码|false|-
status|string|帐号状态（0未生效 1正常）|false|-
delFlag|int32|删除标志（0代表存在 1代表删除）|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/authUser/allocatedList.do?page=1&mobile=337-229-9034&startTime=2026-11-09 17:56:55&delFlag=5&adminId=305&limit=10&deptId=674&nickName=crysta.feeney&userId=25&endTime=2026-11-09 17:56:55&organId=25&orderBy=619&status=4nyzdh&email=afton.goyette@gmail.com&q=1at61a&username=carola.harvey
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|用户LID|-
└─userId|string|用户UUID|-
└─deptId|int64|部门ID|-
└─deptName|string|部门名称|-
└─organId|string|机构ID|-
└─organName|string|机构名称|-
└─name|string|人员姓名|-
└─username|string|用户账号|-
└─nickName|string|用户昵称|-
└─email|string|用户邮箱|-
└─mobile|string|手机号码|-
└─imagePath|string|用户头像|-
└─password|string|密码|-
└─isSuperAdmin|boolean|是否超级管理员|-
└─isAuditAdmin|boolean|是否审计只读管理员|-
└─isSelfAdmin|boolean|是否只管理自己的数据|-
└─status|int32|帐号状态（0未生效 1正常）|-
└─delFlag|int32|删除标志（0代表存在 2代表删除）|-
└─lastLoginIp|string|最后登录IP|-
└─lastLoginTime|string|最后登录时间|-
└─description|string|备注,办公地址|-
└─dept|object|部门对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|单位ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|系统机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentId|int64|父节点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─depttypeId|int64|部门分类ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─foreignId|string|外部业务ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createType|int32|创建方式0导入1录入2授权|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称，多级累加名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sname|string|名称简称，本单位显示名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areaCode|string|地域编码，所在城市|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organLeader|string|领导名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─leaderId|string|负责人ID，用户接收相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─leaderMobile|string|负责人手机号码，用户接收相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isOrganLevel|boolean|是否机构本级1是0否默认1|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isVirtual|boolean|是否虚拟节点1是0不是默认0|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isLeaf|boolean|是否叶子节点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isDisabled|boolean|是否禁用0否1是|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─searchCode|string|多级累加路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─imagePath|string|图片路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0未生效1正常2受限3锁定4删除|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|是否删除1已删除0正常|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare1|string|备用1|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare2|string|备用2|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─children|array|子部门|-
└─roles|array|角色对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roletypeId|string|角色分类ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|角色自定义名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|角色自定义代码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|重点优先级|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isRegular|boolean|是否固定权限1表示固定角色0表示自定义角色|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isSuper|boolean|拥有所有权限|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isPublic|boolean|是否公共角色|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0未生效1正常2受限3锁定4删除|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|角色描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areaType|string|地域类型|-
└─roleIds|array|角色组|-
└─positionIds|array|岗位组|-
└─roleId|int64|角色ID|-
└─userRoleList|array|角色集合|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|用户角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptId|int64|部门ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptName|string|部门名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organName|string|机构名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleId|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleName|string|角色名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─adminId|int64|公共管理用户ID|-
└─code|string|验证码|-
└─uuid|string|uuid标识|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:08",
      "lastTime": "2026-11-09 17:58:08",
      "id": 884,
      "userId": "25",
      "deptId": 72,
      "deptName": "carola.harvey",
      "organId": "25",
      "organName": "carola.harvey",
      "name": "carola.harvey",
      "username": "carola.harvey",
      "nickName": "crysta.feeney",
      "email": "afton.goyette@gmail.com",
      "mobile": "337-229-9034",
      "imagePath": "yls38j",
      "password": "9122xp",
      "isSuperAdmin": true,
      "isAuditAdmin": true,
      "isSelfAdmin": true,
      "status": 352,
      "delFlag": 5,
      "lastLoginIp": "79.62.69.121",
      "lastLoginTime": "2026-11-09 17:58:08",
      "description": "446yon",
      "dept": {
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:08",
        "lastTime": "2026-11-09 17:58:08",
        "id": 222,
        "organId": "25",
        "parentId": 250,
        "appId": "25",
        "depttypeId": 437,
        "foreignId": "25",
        "createType": 286,
        "type": "vytsme",
        "name": "carola.harvey",
        "sname": "carola.harvey",
        "areaCode": "12647",
        "organLeader": "fp7ead",
        "leaderId": "25",
        "leaderMobile": "337-229-9034",
        "isOrganLevel": true,
        "isVirtual": true,
        "isLeaf": true,
        "isDisabled": true,
        "searchCode": "12647",
        "imagePath": "2vkqxj",
        "priority": 606,
        "status": 265,
        "delFlag": 5,
        "description": "nptn99",
        "spare1": "29ixz1",
        "spare2": "3g5772",
        "children": [
          {
            "$ref": ".."
          }
        ]
      },
      "roles": [
        {
          "creatorId": "25",
          "createTime": "2026-11-09 17:58:08",
          "lastTime": "2026-11-09 17:58:08",
          "id": 87,
          "roletypeId": "25",
          "appId": "25",
          "name": "carola.harvey",
          "code": "12647",
          "priority": 568,
          "isRegular": true,
          "isSuper": true,
          "isPublic": true,
          "status": 871,
          "description": "h8y4vq",
          "areaType": "r5grz7"
        }
      ],
      "roleIds": [
        180
      ],
      "positionIds": [
        "8nw0of"
      ],
      "roleId": 282,
      "userRoleList": [
        {
          "id": 447,
          "deptId": 946,
          "deptName": "carola.harvey",
          "organId": "25",
          "organName": "carola.harvey",
          "roleId": 141,
          "roleName": "carola.harvey",
          "adminId": 709
        }
      ],
      "code": "12647",
      "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 查询未分配用户角色列表
**URL:** https://linlan.net/eframe_backend/api/admin/role/authUser/unallocatedList.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 查询未分配用户角色列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
adminId|int64|用户LID|false|-
userId|string|用户UUID|false|-
deptId|int64|部门ID|false|-
organId|string|机构ID|false|-
username|string|用户账号|false|-
nickName|string|用户昵称|false|-
email|string|用户邮箱|false|-
mobile|string|手机号码|false|-
status|string|帐号状态（0未生效 1正常）|false|-
delFlag|int32|删除标志（0代表存在 1代表删除）|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/authUser/unallocatedList.do?mobile=337-229-9034&limit=10&startTime=2026-11-09 17:56:55&page=1&deptId=426&orderBy=108&userId=25&username=carola.harvey&email=afton.goyette@gmail.com&adminId=176&delFlag=5&q=lztxhq&status=l69l55&nickName=crysta.feeney&endTime=2026-11-09 17:56:55&organId=25
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|用户LID|-
└─userId|string|用户UUID|-
└─deptId|int64|部门ID|-
└─deptName|string|部门名称|-
└─organId|string|机构ID|-
└─organName|string|机构名称|-
└─name|string|人员姓名|-
└─username|string|用户账号|-
└─nickName|string|用户昵称|-
└─email|string|用户邮箱|-
└─mobile|string|手机号码|-
└─imagePath|string|用户头像|-
└─password|string|密码|-
└─isSuperAdmin|boolean|是否超级管理员|-
└─isAuditAdmin|boolean|是否审计只读管理员|-
└─isSelfAdmin|boolean|是否只管理自己的数据|-
└─status|int32|帐号状态（0未生效 1正常）|-
└─delFlag|int32|删除标志（0代表存在 2代表删除）|-
└─lastLoginIp|string|最后登录IP|-
└─lastLoginTime|string|最后登录时间|-
└─description|string|备注,办公地址|-
└─dept|object|部门对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|单位ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|系统机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parentId|int64|父节点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─depttypeId|int64|部门分类ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─foreignId|string|外部业务ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createType|int32|创建方式0导入1录入2授权|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─type|string|部门类型，BENJI本级，NEISHE内设机构，FENZI分子机构|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|名称，多级累加名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sname|string|名称简称，本单位显示名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areaCode|string|地域编码，所在城市|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organLeader|string|领导名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─leaderId|string|负责人ID，用户接收相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─leaderMobile|string|负责人手机号码，用户接收相关信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isOrganLevel|boolean|是否机构本级1是0否默认1|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isVirtual|boolean|是否虚拟节点1是0不是默认0|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isLeaf|boolean|是否叶子节点|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isDisabled|boolean|是否禁用0否1是|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─searchCode|string|多级累加路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─imagePath|string|图片路径|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0未生效1正常2受限3锁定4删除|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|是否删除1已删除0正常|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare1|string|备用1|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare2|string|备用2|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─children|array|子部门|-
└─roles|array|角色对象|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roletypeId|string|角色分类ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─appId|string|应用ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|角色自定义名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─code|string|角色自定义代码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|重点优先级|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isRegular|boolean|是否固定权限1表示固定角色0表示自定义角色|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isSuper|boolean|拥有所有权限|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isPublic|boolean|是否公共角色|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─status|int32|状态0未生效1正常2受限3锁定4删除|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|角色描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─areaType|string|地域类型|-
└─roleIds|array|角色组|-
└─positionIds|array|岗位组|-
└─roleId|int64|角色ID|-
└─userRoleList|array|角色集合|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|用户角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptId|int64|部门ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─deptName|string|部门名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organName|string|机构名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleId|int64|角色ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─roleName|string|角色名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─adminId|int64|公共管理用户ID|-
└─code|string|验证码|-
└─uuid|string|uuid标识|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:08",
      "lastTime": "2026-11-09 17:58:08",
      "id": 454,
      "userId": "25",
      "deptId": 646,
      "deptName": "carola.harvey",
      "organId": "25",
      "organName": "carola.harvey",
      "name": "carola.harvey",
      "username": "carola.harvey",
      "nickName": "crysta.feeney",
      "email": "afton.goyette@gmail.com",
      "mobile": "337-229-9034",
      "imagePath": "mccmgb",
      "password": "vchb0o",
      "isSuperAdmin": true,
      "isAuditAdmin": true,
      "isSelfAdmin": true,
      "status": 876,
      "delFlag": 5,
      "lastLoginIp": "79.62.69.121",
      "lastLoginTime": "2026-11-09 17:58:08",
      "description": "gx2tdb",
      "dept": {
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:08",
        "lastTime": "2026-11-09 17:58:08",
        "id": 413,
        "organId": "25",
        "parentId": 504,
        "appId": "25",
        "depttypeId": 711,
        "foreignId": "25",
        "createType": 50,
        "type": "w1cl9l",
        "name": "carola.harvey",
        "sname": "carola.harvey",
        "areaCode": "12647",
        "organLeader": "ahg2yl",
        "leaderId": "25",
        "leaderMobile": "337-229-9034",
        "isOrganLevel": true,
        "isVirtual": true,
        "isLeaf": true,
        "isDisabled": true,
        "searchCode": "12647",
        "imagePath": "s4p2q1",
        "priority": 27,
        "status": 391,
        "delFlag": 5,
        "description": "zat9uy",
        "spare1": "n4qnx4",
        "spare2": "nhvhlg",
        "children": [
          {
            "$ref": ".."
          }
        ]
      },
      "roles": [
        {
          "creatorId": "25",
          "createTime": "2026-11-09 17:58:08",
          "lastTime": "2026-11-09 17:58:08",
          "id": 795,
          "roletypeId": "25",
          "appId": "25",
          "name": "carola.harvey",
          "code": "12647",
          "priority": 907,
          "isRegular": true,
          "isSuper": true,
          "isPublic": true,
          "status": 935,
          "description": "hhf8uk",
          "areaType": "lvxxs1"
        }
      ],
      "roleIds": [
        31
      ],
      "positionIds": [
        "8itk4o"
      ],
      "roleId": 38,
      "userRoleList": [
        {
          "id": 785,
          "deptId": 774,
          "deptName": "carola.harvey",
          "organId": "25",
          "organName": "carola.harvey",
          "roleId": 524,
          "roleName": "carola.harvey",
          "adminId": 169
        }
      ],
      "code": "12647",
      "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 取消授权用户
**URL:** https://linlan.net/eframe_backend/api/admin/role/authUser/cancel.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 取消授权用户

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|int64|用户角色ID|false|-
roleId|int64|角色ID|false|-
adminId|int64|公共管理用户ID|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/authUser/cancel.do --data '{
  "id": 201,
  "roleId": 643,
  "adminId": 165
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "kpsuiz",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 批量取消授权用户
**URL:** https://linlan.net/eframe_backend/api/admin/role/authUser/cancelAll.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 批量取消授权用户

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
roleId|int64| 角色ID|false|-
adminIds|array| 管理员Ids,[array of int64]|false|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/authUser/cancelAll.do --data 'adminIds=ydwjt9&adminIds=ydwjt9&roleId=457'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "fq49dk",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 批量选择用户授权
**URL:** https://linlan.net/eframe_backend/api/admin/role/authUser/selectAll.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 批量选择用户授权

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
roleId|int64| 角色ID|false|-
adminIds|array| 管理员Ids,[array of int64]|false|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/authUser/selectAll.do --data 'adminIds=lo7cjw&adminIds=lo7cjw&roleId=7'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "yo2to2",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取对应角色部门树列表
**URL:** https://linlan.net/eframe_backend/api/admin/role/deptTree/{roleId}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取对应角色部门树列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
roleId|int64| 角色ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/deptTree/343.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─checkedKeys|array|选中菜单列表|-
└─depts|array|下拉树结构列表|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|节点ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─label|string|节点名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─children|array|子节点|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "checkedKeys": [
      914
    ],
    "depts": [
      {
        "id": 176,
        "label": "pr85bv",
        "children": [
          {
            "$ref": ".."
          }
        ]
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 统一待办读写控制类
### Get PublicUnionTodo list. 获取统一待办列表或分页, 返回PublicUnionTodo对象.
**URL:** https://linlan.net/eframe_backend/api/system/todo/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:52

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get PublicUnionTodo list. 获取统一待办列表或分页, 返回PublicUnionTodo对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|string|记录ID|false|-
appId|string|应用ID|false|-
foreignId|string|站点门户ID|false|-
type|string|类型，外部则为OUT|false|-
bizType|string|业务类型|false|-
todoCreateTime|string|待办创建时间|false|-
todoId|string|单据编号|false|-
todoType|string|单据类型|false|-
todoName|string|单据主题|false|-
todoAbstract|string|单据摘要|false|-
todoAccountId|string|待办应用账户ID|false|-
todoAccountName|string|待办应用系统或账户名称|false|-
todoModuleId|string|待办应用应用ID|false|-
todoModuleName|string|待办应用应用名称|false|-
todoUserId|string|待办应用用户ID|false|-
todoUserName|string|待办应用用户名称|false|-
todoOrganId|string|待办应用机构ID|false|-
todoOrganName|string|待办应用机构名称|false|-
todoProcessName|string|待办流程节点名称|false|-
todoProcessStatus|string|待办流程节点状态码|false|-
todoProcessInfo|string|待办流程节点信息|false|-
todoCurrInfo|string|待办业务当前信息|false|-
todoNextInfo|string|待办业务下一步信息|false|-
todoUrl|string|待办业务URL|false|-
todoLabels|string|单据业务标签|false|-
todoContent|string|单据其他信息|false|-
status|string|状态，0待办，1在办，10已办，20办结|false|-
opUserId|string|操作人ID|false|-
opTime|string|操作时间|false|-
opOrganId|string|操作单位ID|false|-
opOrganName|string|操作单位名称|false|-
creatorId|string|创建人ID，不使用外键|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/todo/list.do?startTime=2026-11-09 17:56:55&limit=10&spare2=leyx0y&todoId=25&creatorId=25&description=jnw1bs&bizType=g9qn61&foreignId=25&q=ix3bv6&page=1&id=25&todoOrganId=25&todoAccountId=25&todoModuleName=carola.harvey&todoType=4w9vwa&todoName=carola.harvey&todoUserName=carola.harvey&todoUserId=25&todoUrl=www.hank-okon.com&spare1=mgsijf&opUserId=25&opOrganId=25&status=7s7akr&appId=25&todoCurrInfo=27ukb0&opTime=2026-11-09 17:58:03&opOrganName=carola.harvey&endTime=2026-11-09 17:56:55&todoContent=4t75m5&todoProcessStatus=xk2ugr&todoLabels=q0x13q&todoCreateTime=2026-11-09 17:58:03&todoModuleId=25&todoProcessName=carola.harvey&todoProcessInfo=6vkkx9&todoNextInfo=ux6orq&todoAbstract=qytc1z&todoAccountName=carola.harvey&todoOrganName=carola.harvey&type=zhug2u&orderBy=922
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|记录ID|-
└─appId|string|应用ID|-
└─foreignId|string|站点门户ID|-
└─type|string|类型，外部则为OUT|-
└─bizType|string|业务类型|-
└─todoCreateTime|string|待办创建时间|-
└─todoId|string|单据编号|-
└─todoType|string|单据类型|-
└─todoName|string|单据主题|-
└─todoAbstract|string|单据摘要|-
└─todoAccountId|string|待办应用账户ID|-
└─todoAccountName|string|待办应用系统或账户名称|-
└─todoModuleId|string|待办应用应用ID|-
└─todoModuleName|string|待办应用应用名称|-
└─todoUserId|string|待办应用用户ID|-
└─todoUserName|string|待办应用用户名称|-
└─todoOrganId|string|待办应用机构ID|-
└─todoOrganName|string|待办应用机构名称|-
└─todoProcessName|string|待办流程节点名称|-
└─todoProcessStatus|string|待办流程节点状态码|-
└─todoProcessInfo|string|待办流程节点信息|-
└─todoCurrInfo|string|待办业务当前信息|-
└─todoNextInfo|string|待办业务下一步信息|-
└─todoUrl|string|待办业务URL|-
└─todoLabels|string|单据业务标签|-
└─todoContent|string|单据其他信息|-
└─status|string|状态，0待办，1在办，10已办，20办结|-
└─opUserId|string|操作人ID|-
└─opTime|string|操作时间|-
└─opOrganId|string|操作单位ID|-
└─opOrganName|string|操作单位名称|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:03",
      "lastTime": "2026-11-09 17:58:03",
      "id": "25",
      "appId": "25",
      "foreignId": "25",
      "type": "2kxnc9",
      "bizType": "jyxaxj",
      "todoCreateTime": "2026-11-09 17:58:03",
      "todoId": "25",
      "todoType": "kuh75k",
      "todoName": "carola.harvey",
      "todoAbstract": "ovo0p8",
      "todoAccountId": "25",
      "todoAccountName": "carola.harvey",
      "todoModuleId": "25",
      "todoModuleName": "carola.harvey",
      "todoUserId": "25",
      "todoUserName": "carola.harvey",
      "todoOrganId": "25",
      "todoOrganName": "carola.harvey",
      "todoProcessName": "carola.harvey",
      "todoProcessStatus": "arv9v3",
      "todoProcessInfo": "5yj73g",
      "todoCurrInfo": "v2h1bq",
      "todoNextInfo": "jq5vco",
      "todoUrl": "www.hank-okon.com",
      "todoLabels": "5pbkkg",
      "todoContent": "pb4oun",
      "status": "aafc7v",
      "opUserId": "25",
      "opTime": "2026-11-09 17:58:03",
      "opOrganId": "25",
      "opOrganName": "carola.harvey",
      "description": "93xz3x",
      "spare1": "dw23nx",
      "spare2": "d6am16"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicUnionTodo Operation. PublicUnionTodo数据操作逻辑，导出操作.
**URL:** https://linlan.net/eframe_backend/api/system/todo/export.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:52

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** PublicUnionTodo Operation. PublicUnionTodo数据操作逻辑，导出操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|string|记录ID|false|-
appId|string|应用ID|false|-
foreignId|string|站点门户ID|false|-
type|string|类型，外部则为OUT|false|-
bizType|string|业务类型|false|-
todoCreateTime|string|待办创建时间|false|-
todoId|string|单据编号|false|-
todoType|string|单据类型|false|-
todoName|string|单据主题|false|-
todoAbstract|string|单据摘要|false|-
todoAccountId|string|待办应用账户ID|false|-
todoAccountName|string|待办应用系统或账户名称|false|-
todoModuleId|string|待办应用应用ID|false|-
todoModuleName|string|待办应用应用名称|false|-
todoUserId|string|待办应用用户ID|false|-
todoUserName|string|待办应用用户名称|false|-
todoOrganId|string|待办应用机构ID|false|-
todoOrganName|string|待办应用机构名称|false|-
todoProcessName|string|待办流程节点名称|false|-
todoProcessStatus|string|待办流程节点状态码|false|-
todoProcessInfo|string|待办流程节点信息|false|-
todoCurrInfo|string|待办业务当前信息|false|-
todoNextInfo|string|待办业务下一步信息|false|-
todoUrl|string|待办业务URL|false|-
todoLabels|string|单据业务标签|false|-
todoContent|string|单据其他信息|false|-
status|string|状态，0待办，1在办，10已办，20办结|false|-
opUserId|string|操作人ID|false|-
opTime|string|操作时间|false|-
opOrganId|string|操作单位ID|false|-
opOrganName|string|操作单位名称|false|-
creatorId|string|创建人ID，不使用外键|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/todo/export.do --data 'opOrganId=25&bufferSize=10&q=2viqvl&creatorId=25&todoAccountName=carola.harvey&status=w0f5ek&todoOrganName=carola.harvey&writer.writeBuffer=z&writer.writeBuffer=z&opOrganName=carola.harvey&writer.psOut.formatter.zero=2&writer.psOut.textOut.nChars=246&todoName=carola.harvey&startTime=2026-11-09 17:56:55&todoAccountId=25&todoModuleName=carola.harvey&spare1=wv39v3&todoNextInfo=qi1zu7&spare2=tchx5s&characterEncoding=u60jm1&page=1&todoOrganId=25&todoModuleId=25&status=798&committed=true&writer.autoFlush=true&todoAbstract=pp6dk9&todoUserName=carola.harvey&todoProcessStatus=4tx9bf&todoUrl=www.hank-okon.com&endTime=2026-11-09 17:56:55&appId=25&writer.trouble=true&writer.psOut.autoFlush=true&todoId=25&todoContent=wcjyeq&opUserId=25&todoType=1jg3uj&todoProcessName=carola.harvey&bizType=kixd3i&writer.psOut.textOut.nextChar=204&todoCreateTime=2026-11-09 17:58:03&todoUserId=25&todoProcessInfo=hkzftr&contentType=a1d83f&id=25&todoCurrInfo=cd8wjf&writer.psOut.closing=true&writer.formatter.zero=f&writer.psOut.closed=true&foreignId=25&limit=10&type=nd6wat&orderBy=779&todoLabels=losqa2&description=s6jwba&writer.formatter.lastException.detailMessage=success&writer.psOut.trouble=true&opTime=2026-11-09 17:58:03'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "55sz2s",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get PublicUnionTodo by id. 主键获取统一待办详细信息.
**URL:** https://linlan.net/eframe_backend/api/system/todo/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-11-19 14:58:52

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get PublicUnionTodo by id. 主键获取统一待办详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|主键ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/todo/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|记录ID|-
└─appId|string|应用ID|-
└─foreignId|string|站点门户ID|-
└─type|string|类型，外部则为OUT|-
└─bizType|string|业务类型|-
└─todoCreateTime|string|待办创建时间|-
└─todoId|string|单据编号|-
└─todoType|string|单据类型|-
└─todoName|string|单据主题|-
└─todoAbstract|string|单据摘要|-
└─todoAccountId|string|待办应用账户ID|-
└─todoAccountName|string|待办应用系统或账户名称|-
└─todoModuleId|string|待办应用应用ID|-
└─todoModuleName|string|待办应用应用名称|-
└─todoUserId|string|待办应用用户ID|-
└─todoUserName|string|待办应用用户名称|-
└─todoOrganId|string|待办应用机构ID|-
└─todoOrganName|string|待办应用机构名称|-
└─todoProcessName|string|待办流程节点名称|-
└─todoProcessStatus|string|待办流程节点状态码|-
└─todoProcessInfo|string|待办流程节点信息|-
└─todoCurrInfo|string|待办业务当前信息|-
└─todoNextInfo|string|待办业务下一步信息|-
└─todoUrl|string|待办业务URL|-
└─todoLabels|string|单据业务标签|-
└─todoContent|string|单据其他信息|-
└─status|string|状态，0待办，1在办，10已办，20办结|-
└─opUserId|string|操作人ID|-
└─opTime|string|操作时间|-
└─opOrganId|string|操作单位ID|-
└─opOrganName|string|操作单位名称|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:03",
    "lastTime": "2026-11-09 17:58:03",
    "id": "25",
    "appId": "25",
    "foreignId": "25",
    "type": "03lxjb",
    "bizType": "89lzhk",
    "todoCreateTime": "2026-11-09 17:58:03",
    "todoId": "25",
    "todoType": "2a9ttn",
    "todoName": "carola.harvey",
    "todoAbstract": "ozx192",
    "todoAccountId": "25",
    "todoAccountName": "carola.harvey",
    "todoModuleId": "25",
    "todoModuleName": "carola.harvey",
    "todoUserId": "25",
    "todoUserName": "carola.harvey",
    "todoOrganId": "25",
    "todoOrganName": "carola.harvey",
    "todoProcessName": "carola.harvey",
    "todoProcessStatus": "o853nl",
    "todoProcessInfo": "pa8bhu",
    "todoCurrInfo": "hyyoe5",
    "todoNextInfo": "jybttj",
    "todoUrl": "www.hank-okon.com",
    "todoLabels": "f0sz2k",
    "todoContent": "2luvet",
    "status": "s0tobu",
    "opUserId": "25",
    "opTime": "2026-11-09 17:58:03",
    "opOrganId": "25",
    "opOrganName": "carola.harvey",
    "description": "3j16t0",
    "spare1": "fvgdi1",
    "spare2": "ar05s2"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicUnionTodo Operation. 新增统一待办数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/system/todo/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:52

**Content-Type:** application/json; charset=utf-8

**Description:** PublicUnionTodo Operation. 新增统一待办数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|记录ID|false|-
appId|string|应用ID|false|-
foreignId|string|站点门户ID|false|-
type|string|类型，外部则为OUT|false|-
bizType|string|业务类型|false|-
todoCreateTime|string|待办创建时间|false|-
todoId|string|单据编号|false|-
todoType|string|单据类型|false|-
todoName|string|单据主题|false|-
todoAbstract|string|单据摘要|false|-
todoAccountId|string|待办应用账户ID|false|-
todoAccountName|string|待办应用系统或账户名称|false|-
todoModuleId|string|待办应用应用ID|false|-
todoModuleName|string|待办应用应用名称|false|-
todoUserId|string|待办应用用户ID|false|-
todoUserName|string|待办应用用户名称|false|-
todoOrganId|string|待办应用机构ID|false|-
todoOrganName|string|待办应用机构名称|false|-
todoProcessName|string|待办流程节点名称|false|-
todoProcessStatus|string|待办流程节点状态码|false|-
todoProcessInfo|string|待办流程节点信息|false|-
todoCurrInfo|string|待办业务当前信息|false|-
todoNextInfo|string|待办业务下一步信息|false|-
todoUrl|string|待办业务URL|false|-
todoLabels|string|单据业务标签|false|-
todoContent|string|单据其他信息|false|-
status|string|状态，0待办，1在办，10已办，20办结|false|-
opUserId|string|操作人ID|false|-
opTime|string|操作时间|false|-
opOrganId|string|操作单位ID|false|-
opOrganName|string|操作单位名称|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/todo/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:03",
  "lastTime": "2026-11-09 17:58:03",
  "id": "25",
  "appId": "25",
  "foreignId": "25",
  "type": "5pc21v",
  "bizType": "nxw1fo",
  "todoCreateTime": "2026-11-09 17:58:03",
  "todoId": "25",
  "todoType": "iybnwx",
  "todoName": "carola.harvey",
  "todoAbstract": "l3f3h1",
  "todoAccountId": "25",
  "todoAccountName": "carola.harvey",
  "todoModuleId": "25",
  "todoModuleName": "carola.harvey",
  "todoUserId": "25",
  "todoUserName": "carola.harvey",
  "todoOrganId": "25",
  "todoOrganName": "carola.harvey",
  "todoProcessName": "carola.harvey",
  "todoProcessStatus": "ym9haz",
  "todoProcessInfo": "6olsek",
  "todoCurrInfo": "scdqin",
  "todoNextInfo": "jjm2no",
  "todoUrl": "www.hank-okon.com",
  "todoLabels": "s6mtde",
  "todoContent": "iyes7w",
  "status": "ch5ty1",
  "opUserId": "25",
  "opTime": "2026-11-09 17:58:03",
  "opOrganId": "25",
  "opOrganName": "carola.harvey",
  "description": "83ehcw",
  "spare1": "xhrjee",
  "spare2": "pwvkxp"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "qwhkjj",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicUnionTodo Operation. 修改统一待办数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/system/todo/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:52

**Content-Type:** application/json; charset=utf-8

**Description:** PublicUnionTodo Operation. 修改统一待办数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|记录ID|false|-
appId|string|应用ID|false|-
foreignId|string|站点门户ID|false|-
type|string|类型，外部则为OUT|false|-
bizType|string|业务类型|false|-
todoCreateTime|string|待办创建时间|false|-
todoId|string|单据编号|false|-
todoType|string|单据类型|false|-
todoName|string|单据主题|false|-
todoAbstract|string|单据摘要|false|-
todoAccountId|string|待办应用账户ID|false|-
todoAccountName|string|待办应用系统或账户名称|false|-
todoModuleId|string|待办应用应用ID|false|-
todoModuleName|string|待办应用应用名称|false|-
todoUserId|string|待办应用用户ID|false|-
todoUserName|string|待办应用用户名称|false|-
todoOrganId|string|待办应用机构ID|false|-
todoOrganName|string|待办应用机构名称|false|-
todoProcessName|string|待办流程节点名称|false|-
todoProcessStatus|string|待办流程节点状态码|false|-
todoProcessInfo|string|待办流程节点信息|false|-
todoCurrInfo|string|待办业务当前信息|false|-
todoNextInfo|string|待办业务下一步信息|false|-
todoUrl|string|待办业务URL|false|-
todoLabels|string|单据业务标签|false|-
todoContent|string|单据其他信息|false|-
status|string|状态，0待办，1在办，10已办，20办结|false|-
opUserId|string|操作人ID|false|-
opTime|string|操作时间|false|-
opOrganId|string|操作单位ID|false|-
opOrganName|string|操作单位名称|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/todo/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:03",
  "lastTime": "2026-11-09 17:58:03",
  "id": "25",
  "appId": "25",
  "foreignId": "25",
  "type": "65uki3",
  "bizType": "yura12",
  "todoCreateTime": "2026-11-09 17:58:03",
  "todoId": "25",
  "todoType": "u5ht6g",
  "todoName": "carola.harvey",
  "todoAbstract": "j1x6y3",
  "todoAccountId": "25",
  "todoAccountName": "carola.harvey",
  "todoModuleId": "25",
  "todoModuleName": "carola.harvey",
  "todoUserId": "25",
  "todoUserName": "carola.harvey",
  "todoOrganId": "25",
  "todoOrganName": "carola.harvey",
  "todoProcessName": "carola.harvey",
  "todoProcessStatus": "eegjlu",
  "todoProcessInfo": "dhbtb7",
  "todoCurrInfo": "pv548f",
  "todoNextInfo": "ofpuzt",
  "todoUrl": "www.hank-okon.com",
  "todoLabels": "fvzler",
  "todoContent": "zy49r8",
  "status": "bivf64",
  "opUserId": "25",
  "opTime": "2026-11-09 17:58:03",
  "opOrganId": "25",
  "opOrganName": "carola.harvey",
  "description": "b6ciqo",
  "spare1": "jejhbm",
  "spare2": "yz44gg"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "la7v7t",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### PublicUnionTodo Operation. 删除统一待办数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/system/todo/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-11-19 14:58:52

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** PublicUnionTodo Operation. 删除统一待办数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|主键ID:null;1;1,2,3,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/todo/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "cizutg",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 行政区划管理读写控制类
### Get BaseXzqh list. 获取行政区划管理列表或分页, 返回BaseXzqh对象.
**URL:** https://linlan.net/eframe_backend/api/system/xzqh/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-12-16 16:04:14

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get BaseXzqh list. 获取行政区划管理列表或分页, 返回BaseXzqh对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
parentId|int64|行政区划父节点|false|-
countryId|string|国家或地区编号|false|-
areatypeId|string|地域级别ID|false|-
lft|int32|树左边|false|-
rgt|int32|树右边|false|-
code|string|行政区划代码|false|-
name|string|行政区划名称|false|-
nameTotal|string|行政区划完整名称|false|-
sname|string|行政区划简洁名称|false|-
nameEn|string|名称英文|false|-
searchCode|string|快速码|false|-
isDisplay|boolean|是否显示(1显示0不显示)|false|-
hasContent|boolean|是否有内容(1有内容，编号单位等)|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|描述|false|-
parentIds|array|父节点集合|false|-
areatypeIds|array|父节点集合|false|-
likeQuery|string|父节点集合|false|-
deleteTime|string|删除时间|false|-
ids|array|id集合|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/xzqh/list.do?code=12647&name=carola.harvey&delFlag=5&q=3dsbfs&lft=803&sname=carola.harvey&deleteTime=2026-11-09 17:56:55&likeQuery=qucalx&startTime=2026-11-09 17:56:55&nameEn=3eawjp&countryId=25&orderBy=685&ids=4knmud&ids=4knmud&nameTotal=x67rdp&searchCode=12647&isDisplay=true&areatypeId=25&page=1&limit=10&rgt=625&parentId=191&parentIds=m91yqf&parentIds=m91yqf&areatypeIds=zfz46a&areatypeIds=zfz46a&description=s7kdck&endTime=2026-11-09 17:56:55&hasContent=true
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|行政区划编号|-
└─parentId|int64|行政区划父节点|-
└─countryId|string|国家或地区编号|-
└─areatypeId|string|地域级别ID|-
└─lft|int32|树左边|-
└─rgt|int32|树右边|-
└─code|string|行政区划代码|-
└─name|string|行政区划名称|-
└─nameTotal|string|行政区划完整名称|-
└─sname|string|行政区划简洁名称|-
└─nameEn|string|名称英文|-
└─searchCode|string|快速码|-
└─isDisplay|boolean|是否显示(1显示0不显示)|-
└─hasContent|boolean|是否有内容(1有内容，编号单位等)|-
└─priority|int32|排序|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─deleteTime|string|删除时间|-
└─description|string|描述|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:10",
      "lastTime": "2026-11-09 17:58:10",
      "id": 870,
      "parentId": 817,
      "countryId": "25",
      "areatypeId": "25",
      "lft": 786,
      "rgt": 592,
      "code": "12647",
      "name": "carola.harvey",
      "nameTotal": "8846ey",
      "sname": "carola.harvey",
      "nameEn": "vlmohf",
      "searchCode": "12647",
      "isDisplay": true,
      "hasContent": true,
      "priority": 544,
      "delFlag": 5,
      "deleteTime": "2026-11-09 17:58:10",
      "description": "b2sao2"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### BaseXzqh Operation. BaseXzqh数据操作逻辑，导出操作.
**URL:** https://linlan.net/eframe_backend/api/system/xzqh/export.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-12-16 16:04:14

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** BaseXzqh Operation. BaseXzqh数据操作逻辑，导出操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
parentId|int64|行政区划父节点|false|-
countryId|string|国家或地区编号|false|-
areatypeId|string|地域级别ID|false|-
lft|int32|树左边|false|-
rgt|int32|树右边|false|-
code|string|行政区划代码|false|-
name|string|行政区划名称|false|-
nameTotal|string|行政区划完整名称|false|-
sname|string|行政区划简洁名称|false|-
nameEn|string|名称英文|false|-
searchCode|string|快速码|false|-
isDisplay|boolean|是否显示(1显示0不显示)|false|-
hasContent|boolean|是否有内容(1有内容，编号单位等)|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|描述|false|-
parentIds|array|父节点集合|false|-
areatypeIds|array|父节点集合|false|-
likeQuery|string|父节点集合|false|-
deleteTime|string|删除时间|false|-
ids|array|id集合|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/xzqh/export.do --data 'code=12647&deleteTime=2026-11-09 17:56:55&committed=true&areatypeIds=cq5s4r&areatypeIds=cq5s4r&writer.formatter.zero=3&writer.psOut.closed=true&writer.writeBuffer=w&writer.writeBuffer=w&endTime=2026-11-09 17:56:55&nameTotal=ggkqcc&q=ed4xio&writer.psOut.formatter.zero=u&writer.psOut.textOut.nChars=554&countryId=25&parentIds=horldr&parentIds=horldr&areatypeId=25&isDisplay=true&rgt=128&hasContent=true&ids=rqtolh&ids=rqtolh&lft=827&bufferSize=10&description=tyr96t&likeQuery=jv8w5s&writer.autoFlush=true&writer.psOut.closing=true&writer.psOut.trouble=true&page=1&startTime=2026-11-09 17:56:55&limit=10&status=919&writer.psOut.textOut.nextChar=168&writer.formatter.lastException.detailMessage=success&searchCode=12647&writer.psOut.autoFlush=true&delFlag=5&name=carola.harvey&writer.trouble=true&contentType=2415bb&orderBy=422&nameEn=hfc77y&characterEncoding=97kdt4&sname=carola.harvey&parentId=419'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "x8qic7",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get BaseXzqh by id. 主键获取行政区划管理详细信息.
**URL:** https://linlan.net/eframe_backend/api/system/xzqh/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-12-16 16:04:14

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get BaseXzqh by id. 主键获取行政区划管理详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|int64|行政区划编号|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/xzqh/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|行政区划编号|-
└─parentId|int64|行政区划父节点|-
└─countryId|string|国家或地区编号|-
└─areatypeId|string|地域级别ID|-
└─lft|int32|树左边|-
└─rgt|int32|树右边|-
└─code|string|行政区划代码|-
└─name|string|行政区划名称|-
└─nameTotal|string|行政区划完整名称|-
└─sname|string|行政区划简洁名称|-
└─nameEn|string|名称英文|-
└─searchCode|string|快速码|-
└─isDisplay|boolean|是否显示(1显示0不显示)|-
└─hasContent|boolean|是否有内容(1有内容，编号单位等)|-
└─priority|int32|排序|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─deleteTime|string|删除时间|-
└─description|string|描述|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:10",
    "lastTime": "2026-11-09 17:58:10",
    "id": 236,
    "parentId": 648,
    "countryId": "25",
    "areatypeId": "25",
    "lft": 106,
    "rgt": 174,
    "code": "12647",
    "name": "carola.harvey",
    "nameTotal": "3e7ri7",
    "sname": "carola.harvey",
    "nameEn": "ncnaow",
    "searchCode": "12647",
    "isDisplay": true,
    "hasContent": true,
    "priority": 63,
    "delFlag": 5,
    "deleteTime": "2026-11-09 17:58:10",
    "description": "crvmmf"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### BaseXzqh Operation. 新增行政区划管理数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/system/xzqh/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-12-16 16:04:14

**Content-Type:** application/json; charset=utf-8

**Description:** BaseXzqh Operation. 新增行政区划管理数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|行政区划编号|false|-
parentId|int64|行政区划父节点|false|-
countryId|string|国家或地区编号|false|-
areatypeId|string|地域级别ID|false|-
lft|int32|树左边|false|-
rgt|int32|树右边|false|-
code|string|行政区划代码|false|-
name|string|行政区划名称|false|-
nameTotal|string|行政区划完整名称|false|-
sname|string|行政区划简洁名称|false|-
nameEn|string|名称英文|false|-
searchCode|string|快速码|false|-
isDisplay|boolean|是否显示(1显示0不显示)|false|-
hasContent|boolean|是否有内容(1有内容，编号单位等)|false|-
priority|int32|排序|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
deleteTime|string|删除时间|false|-
description|string|描述|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/xzqh/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:10",
  "lastTime": "2026-11-09 17:58:10",
  "id": 942,
  "parentId": 908,
  "countryId": "25",
  "areatypeId": "25",
  "lft": 607,
  "rgt": 980,
  "code": "12647",
  "name": "carola.harvey",
  "nameTotal": "r1vq0s",
  "sname": "carola.harvey",
  "nameEn": "s26n8f",
  "searchCode": "12647",
  "isDisplay": true,
  "hasContent": true,
  "priority": 16,
  "delFlag": 5,
  "deleteTime": "2026-11-09 17:58:10",
  "description": "41jrse"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "ticfdo",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### BaseXzqh Operation. 修改行政区划管理数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/system/xzqh/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-12-16 16:04:14

**Content-Type:** application/json; charset=utf-8

**Description:** BaseXzqh Operation. 修改行政区划管理数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|行政区划编号|false|-
parentId|int64|行政区划父节点|false|-
countryId|string|国家或地区编号|false|-
areatypeId|string|地域级别ID|false|-
lft|int32|树左边|false|-
rgt|int32|树右边|false|-
code|string|行政区划代码|false|-
name|string|行政区划名称|false|-
nameTotal|string|行政区划完整名称|false|-
sname|string|行政区划简洁名称|false|-
nameEn|string|名称英文|false|-
searchCode|string|快速码|false|-
isDisplay|boolean|是否显示(1显示0不显示)|false|-
hasContent|boolean|是否有内容(1有内容，编号单位等)|false|-
priority|int32|排序|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
deleteTime|string|删除时间|false|-
description|string|描述|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/xzqh/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:10",
  "lastTime": "2026-11-09 17:58:10",
  "id": 28,
  "parentId": 70,
  "countryId": "25",
  "areatypeId": "25",
  "lft": 176,
  "rgt": 560,
  "code": "12647",
  "name": "carola.harvey",
  "nameTotal": "g4bhou",
  "sname": "carola.harvey",
  "nameEn": "u9yzhr",
  "searchCode": "12647",
  "isDisplay": true,
  "hasContent": true,
  "priority": 18,
  "delFlag": 5,
  "deleteTime": "2026-11-09 17:58:10",
  "description": "8v3ffq"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "vqrgav",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### BaseXzqh Operation. 删除行政区划管理数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/system/xzqh/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-12-16 16:04:14

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** BaseXzqh Operation. 删除行政区划管理数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|行政区划编号:null;1;1,2,3,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/xzqh/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "r1wy8l",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 角色分类读写控制类
### Get CoreRoletype list. 获取角色分类列表或分页, 返回CoreRoletype对象.
**URL:** https://linlan.net/eframe_backend/api/system/roletype/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-12-16 10:47:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get CoreRoletype list. 获取角色分类列表或分页, 返回CoreRoletype对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
name|string|角色名称|false|-
type|string|角色类型0全局角色1系统管理角色2应用会员角色|false|-
code|string|角色编码，角色代码|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|角色描述|false|-
existKey|string|existKey|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/roletype/list.do?orderBy=21&type=mswevf&endTime=2026-11-09 17:56:55&q=gubc3y&code=12647&startTime=2026-11-09 17:56:55&page=1&name=carola.harvey&description=9r7txa&existKey=ipxn8g&limit=10&delFlag=5
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|角色分类ID|-
└─name|string|角色名称|-
└─type|string|角色类型0全局角色1系统管理角色2应用会员角色|-
└─code|string|角色编码，角色代码|-
└─priority|int32|重点优先级|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─description|string|角色描述|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:12",
      "lastTime": "2026-11-09 17:58:12",
      "id": "25",
      "name": "carola.harvey",
      "type": "m71rw8",
      "code": "12647",
      "priority": 526,
      "delFlag": 5,
      "description": "h7875h"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreRoletype Operation. CoreRoletype数据操作逻辑，导出操作.
**URL:** https://linlan.net/eframe_backend/api/system/roletype/export.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-12-16 10:47:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** CoreRoletype Operation. CoreRoletype数据操作逻辑，导出操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
name|string|角色名称|false|-
type|string|角色类型0全局角色1系统管理角色2应用会员角色|false|-
code|string|角色编码，角色代码|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|角色描述|false|-
existKey|string|existKey|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/roletype/export.do --data 'writer.autoFlush=true&orderBy=243&name=carola.harvey&writer.formatter.zero=i&writer.trouble=true&writer.formatter.lastException.detailMessage=success&writer.writeBuffer=1&writer.writeBuffer=1&writer.psOut.closing=true&writer.psOut.closed=true&characterEncoding=8flc3c&type=j7o4ir&writer.psOut.autoFlush=true&contentType=5s50d7&writer.psOut.textOut.nextChar=167&page=1&bufferSize=10&writer.psOut.textOut.nChars=189&writer.psOut.trouble=true&limit=10&delFlag=5&description=ydon0n&writer.psOut.formatter.zero=l&existKey=l0o2ed&q=d46xxj&status=505&committed=true&code=12647&endTime=2026-11-09 17:56:55&startTime=2026-11-09 17:56:55'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "4flkph",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get CoreRoletype by id. 主键获取角色分类详细信息.
**URL:** https://linlan.net/eframe_backend/api/system/roletype/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2024-12-16 10:47:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get CoreRoletype by id. 主键获取角色分类详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|角色分类ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/roletype/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|角色分类ID|-
└─name|string|角色名称|-
└─type|string|角色类型0全局角色1系统管理角色2应用会员角色|-
└─code|string|角色编码，角色代码|-
└─priority|int32|重点优先级|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─description|string|角色描述|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:12",
    "lastTime": "2026-11-09 17:58:12",
    "id": "25",
    "name": "carola.harvey",
    "type": "ew3050",
    "code": "12647",
    "priority": 218,
    "delFlag": 5,
    "description": "8xghjm"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreRoletype Operation. 新增角色分类数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/system/roletype/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-12-16 10:47:36

**Content-Type:** application/json; charset=utf-8

**Description:** CoreRoletype Operation. 新增角色分类数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|角色分类ID|false|-
name|string|角色名称|false|-
type|string|角色类型0全局角色1系统管理角色2应用会员角色|false|-
code|string|角色编码，角色代码|false|-
priority|int32|重点优先级|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|角色描述|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/roletype/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:12",
  "lastTime": "2026-11-09 17:58:12",
  "id": "25",
  "name": "carola.harvey",
  "type": "d7j0a7",
  "code": "12647",
  "priority": 556,
  "delFlag": 5,
  "description": "th1xa0"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "wdgslo",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreRoletype Operation. 修改角色分类数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/system/roletype/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-12-16 10:47:36

**Content-Type:** application/json; charset=utf-8

**Description:** CoreRoletype Operation. 修改角色分类数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|角色分类ID|false|-
name|string|角色名称|false|-
type|string|角色类型0全局角色1系统管理角色2应用会员角色|false|-
code|string|角色编码，角色代码|false|-
priority|int32|重点优先级|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|角色描述|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/roletype/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:12",
  "lastTime": "2026-11-09 17:58:12",
  "id": "25",
  "name": "carola.harvey",
  "type": "fiwalf",
  "code": "12647",
  "priority": 486,
  "delFlag": 5,
  "description": "w1o64x"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "kdllz8",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### CoreRoletype Operation. 删除角色分类数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/system/roletype/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2024-12-16 10:47:36

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** CoreRoletype Operation. 删除角色分类数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|角色分类ID:null;1;1,2,3,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/roletype/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "eknli7",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 键值配置信息操作处理
### 获取键值配置列表
**URL:** https://linlan.net/eframe_backend/api/system/parts/list.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取键值配置列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
cfgKey|string|配置项名称|false|-
cfgValue|string|配置项值|false|-
ids|array|数组|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/parts/list.do?cfgValue=lh8ggw&startTime=2026-11-09 17:56:55&page=1&ids=sssflk&ids=sssflk&endTime=2026-11-09 17:56:55&q=7wndfm&cfgKey=vewu5z&orderBy=222&limit=10
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─totalCount|int32|总记录数 the total count|-
└─pageSize|int32|每页记录数 the page size|-
└─totalPage|int32|总页数 the total page|-
└─currPage|int32|当前页数 the current page|-
└─list|array|列表数据 the list|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cfgKey|string|配置项名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cfgValue|string|配置项值|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "totalCount": 480,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "cfgKey": "sz5j26",
        "cfgValue": "pll16a"
      }
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 键值配置导出
**URL:** https://linlan.net/eframe_backend/api/system/parts/export.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 键值配置导出

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
cfgKey|string|配置项名称|false|-
cfgValue|string|配置项值|false|-
ids|array|数组|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/parts/export.do --data 'writer.writeBuffer=3&writer.writeBuffer=3&writer.formatter.lastException.detailMessage=success&page=1&cfgValue=dde9z5&writer.psOut.formatter.zero=e&writer.psOut.textOut.nextChar=841&limit=10&q=rx6zrn&writer.psOut.closed=true&bufferSize=10&writer.psOut.trouble=true&writer.psOut.closing=true&writer.psOut.autoFlush=true&status=847&cfgKey=q8z6wa&ids=31mp4b&ids=31mp4b&endTime=2026-11-09 17:56:55&committed=true&writer.trouble=true&writer.psOut.textOut.nChars=119&contentType=mj80vg&startTime=2026-11-09 17:56:55&orderBy=763&characterEncoding=4as29f&writer.formatter.zero=w&writer.autoFlush=true'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "6m30u8",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据参数编号获取详细信息
**URL:** https://linlan.net/eframe_backend/api/system/parts/{cfgKey}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据参数编号获取详细信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
cfgKey|string|   配置KEY|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/parts/narbsk.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─cfgKey|string|配置项名称|-
└─cfgValue|string|配置项值|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "cfgKey": "ukcbqx",
    "cfgValue": "06whgl"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增参数配置
**URL:** https://linlan.net/eframe_backend/api/system/parts/save.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 新增参数配置

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
cfgKey|string|配置项名称|false|-
cfgValue|string|配置项值|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/parts/save.do --data '{
  "cfgKey": "zsuae5",
  "cfgValue": "3cenvf"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "h4wd26",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改参数配置
**URL:** https://linlan.net/eframe_backend/api/system/parts/update.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 修改参数配置

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
cfgKey|string|配置项名称|false|-
cfgValue|string|配置项值|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/parts/update.do --data '{
  "cfgKey": "aplizm",
  "cfgValue": "8148po"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "bhggtw",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除参数配置
**URL:** https://linlan.net/eframe_backend/api/system/parts/delete/{cfgKeys}.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除参数配置

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
cfgKeys|array| 配置Keys,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/parts/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "b19bpq",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 刷新参数缓存
**URL:** https://linlan.net/eframe_backend/api/system/config/refreshCache.do

**Type:** DELETE

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 刷新参数缓存

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/config/refreshCache.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "2uvi8g",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 验证码读取操作处理
### 获取验证码
**URL:** https://linlan.net/eframe_backend/api/open/captcha/get.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取验证码

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/api/open/captcha/get.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─captchaEnabled|boolean|是否开启|-
└─uuid|string|UUID|-
└─img|string|图片验证码|-
└─code|string|No comments found.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "captchaEnabled": true,
    "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86",
    "img": "yos1lj",
    "code": "12647"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取消息验证码
**URL:** https://linlan.net/eframe_backend/api/open/message/captcha/get.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取消息验证码

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/api/open/message/captcha/get.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─captchaEnabled|boolean|是否开启|-
└─uuid|string|UUID|-
└─img|string|图片验证码|-
└─code|string|No comments found.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "captchaEnabled": true,
    "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86",
    "img": "69gw3l",
    "code": "12647"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

# 平台扩展接口API
## 代码生成操作处理
### 查询代码生成列表
**URL:** https://linlan.net/eframe_backend/api/tool/gen/list.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 查询代码生成列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
tableId|int64|编号|false|-
tableName|string|表名称|true|-
tableComment|string|表描述|true|-
subTableName|string|关联父表的表名|false|-
subTableFkName|string|本表关联父表的外键名|false|-
className|string|实体类名称(首字母大写)|true|-
tplCategory|string|使用的模板（crud单表操作 tree树表操作 sub主子表操作）|false|-
tplWebType|string|前端类型（element-ui模版 element-plus模版）|false|-
packageName|string|生成包路径|true|-
moduleName|string|生成模块名|true|-
businessName|string|生成业务名|true|-
functionName|string|生成功能名|true|-
functionAuthor|string|生成作者|true|-
formColNum|int32|表单布局，单列 双列 三列|false|-
genType|string|生成代码方式（0zip压缩包 1自定义路径）|false|-
genPath|string|生成路径（不填默认项目路径）|false|-
pkColumn|object|主键信息|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─columnId|int64|编号|false|-
└─tableId|int64|归属表编号|false|-
└─columnName|string|列名称|false|-
└─columnComment|string|列描述|false|-
└─columnType|string|列类型|false|-
└─javaType|string|JAVA类型|false|-
└─javaField|string|JAVA字段名|true|-
└─isPk|string|是否主键（1是）|false|-
└─isIncrement|string|是否自增（1是）|false|-
└─isRequired|string|是否必填（1是）|false|-
└─isInsert|string|是否为插入字段（1是）|false|-
└─isEdit|string|是否编辑字段（1是）|false|-
└─isList|string|是否列表字段（1是）|false|-
└─isQuery|string|是否查询字段（1是）|false|-
└─queryType|string|查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围）|false|-
└─htmlType|string|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）|false|-
└─dictType|string|字典类型|false|-
└─priority|int32|排序|false|-
columns|array|表列信息|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─columnId|int64|编号|false|-
└─tableId|int64|归属表编号|false|-
└─columnName|string|列名称|false|-
└─columnComment|string|列描述|false|-
└─columnType|string|列类型|false|-
└─javaType|string|JAVA类型|false|-
└─javaField|string|JAVA字段名|true|-
└─isPk|string|是否主键（1是）|false|-
└─isIncrement|string|是否自增（1是）|false|-
└─isRequired|string|是否必填（1是）|false|-
└─isInsert|string|是否为插入字段（1是）|false|-
└─isEdit|string|是否编辑字段（1是）|false|-
└─isList|string|是否列表字段（1是）|false|-
└─isQuery|string|是否查询字段（1是）|false|-
└─queryType|string|查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围）|false|-
└─htmlType|string|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）|false|-
└─dictType|string|字典类型|false|-
└─priority|int32|排序|false|-
optionLists|string|其它生成选项|false|-
treeCode|string|树编码字段|false|-
treeParentCode|string|树父编码字段|false|-
treeName|string|树名称字段|false|-
parentMenuId|int64|上级菜单ID字段|false|-
parentMenuName|string|上级菜单名称字段|false|-
Description|string|备注|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
params|map|请求参数|false|-
└─any object|object|any object.|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/list.do?pkColumn.priority=626&pkColumn.isEdit=93clof&tableComment=byh1t1&subTable.subTable.functionName=carola.harvey&tableId=605&pkColumn.isList=l68diz&subTable.subTable.functionAuthor=Leesa Jacobi&subTable.subTable.treeParentCode=12647&subTable.columns[0].columnName=carola.harvey&subTable.columns[0].queryType=co5gpi&columns[0].createTime=2026-11-09 17:58:15&subTable.optionLists=0pgu5d&tableName=carola.harvey&subTable.parentMenuName=carola.harvey&subTable.columns[0].creatorId=25&subTable.limit=10&columns[0].javaField=1bvbsz&pkColumn.tableId=198&genType=tyo26a&subTable.businessName=carola.harvey&businessName=carola.harvey&genPath=v0zuyw&subTable.pkColumn.dictType=6t9445&columns[0].isIncrement=e9xsw3&subTable.pkColumn.priority=701&subTable.pkColumn.createTime=2026-11-09 17:58:15&subTable.subTable.parentMenuId=901&pkColumn.isIncrement=9gb35x&subTable.columns[0].createTime=2026-11-09 17:58:15&subTable.columns[0].tableId=456&subTable.subTableName=carola.harvey&tplWebType=miuqr8&pkColumn.isRequired=w6rv8g&pkColumn.htmlType=j87ody&pkColumn.creatorId=25&subTable.pkColumn.isIncrement=zdqu42&subTable.columns[0].dictType=ewsred&subTable.packageName=carola.harvey&subTable.subTable.treeCode=12647&subTable.pkColumn.tableId=421&pkColumn.columnName=carola.harvey&subTable.columns[0].priority=693&columns[0].creatorId=25&pkColumn.isPk=quml34&lastTime=2026-11-09 17:58:15&functionAuthor=Leesa Jacobi&subTableName=carola.harvey&subTable.moduleName=carola.harvey&subTable.lastTime=2026-11-09 17:58:15&pkColumn.javaType=1ms60w&subTable.pkColumn.isInsert=djyd3a&subTable.treeName=carola.harvey&functionName=carola.harvey&subTable.columns[0].lastTime=2026-11-09 17:58:15&columns[0].columnId=77&tplCategory=vny8np&subTable.subTable.tableComment=by7d1q&subTable.subTable.optionLists=fcjssa&className=carola.harvey&subTable.pkColumn.isRequired=s1fi65&subTable.pkColumn.isList=8dv74h&columns[0].isEdit=a7chrm&subTable.pkColumn.isPk=6ir8wl&subTable.columns[0].isList=fi4kog&creatorId=25&subTable.subTable.lastTime=2026-11-09 17:58:15&subTable.subTable.moduleName=carola.harvey&pkColumn.isInsert=c81naa&subTable.subTable.tplWebType=bm5vmh&subTable.subTable.Description=34p1su&subTable.tplWebType=e1pht8&subTable.subTable.limit=10&subTable.columns[0].isRequired=3b5iii&subTable.columns[0].isEdit=fz35qy&pkColumn.dictType=g2rrwa&columns[0].htmlType=vbzlw0&subTable.columns[0].htmlType=4hhsrf&columns[0].columnType=4x31ok&pkColumn.columnComment=lhal9c&subTable.subTable.tableName=carola.harvey&columns[0].javaType=vt299r&subTable.genPath=yy7812&subTable.subTable.createTime=2026-11-09 17:58:15&pkColumn.lastTime=2026-11-09 17:58:15&subTable.functionAuthor=Leesa Jacobi&subTable.genType=3olqcm&subTable.pkColumn.javaType=r7de17&subTable.columns[0].javaField=2kdwkc&pkColumn.createTime=2026-11-09 17:58:15&subTable.pkColumn.isQuery=9a1ga4&subTable.pkColumn.htmlType=0qrmy2&subTable.subTable.creatorId=25&subTable.columns[0].isIncrement=w75vtk&subTable.treeCode=12647&subTable.subTable.businessName=carola.harvey&subTable.page=1&subTable.subTable.subTableFkName=carola.harvey&subTable.subTable.genType=uomfm1&subTable.subTable.genPath=nk38kj&columns[0].isQuery=lm1u6e&moduleName=carola.harvey&subTable.createTime=2026-11-09 17:58:15&subTable.pkColumn.columnName=carola.harvey&subTable.formColNum=263&pkColumn.javaField=o6a95f&subTable.subTable.treeName=carola.harvey&subTable.functionName=carola.harvey&treeParentCode=12647&packageName=carola.harvey&subTable.subTable.packageName=carola.harvey&subTable.pkColumn.creatorId=25&subTable.columns[0].javaType=eh42wb&subTable.subTable.page=1&treeCode=12647&subTable.subTable.formColNum=66&subTable.subTableFkName=carola.harvey&parentMenuId=82&page=1&pkColumn.isQuery=7gm94o&subTable.pkColumn.queryType=wwd23z&subTable.columns[0].columnType=zpkeer&subTable.subTable.tplCategory=twd8qg&subTable.columns[0].isPk=ohzu3q&columns[0].columnComment=i1fzc0&pkColumn.columnId=671&columns[0].lastTime=2026-11-09 17:58:15&subTable.tableComment=u28mjd&subTable.className=carola.harvey&subTable.pkColumn.isEdit=yyj94y&subTable.columns[0].isQuery=ocayhr&columns[0].dictType=d14lg8&subTable.pkColumn.lastTime=2026-11-09 17:58:15&subTableFkName=carola.harvey&subTable.tableId=278&pkColumn.queryType=ebn1yy&columns[0].columnName=carola.harvey&columns[0].isPk=vyonvu&columns[0].isInsert=2j3ixp&columns[0].isList=mvrm6h&subTable.creatorId=25&subTable.pkColumn.javaField=59csbw&subTable.pkColumn.columnType=4by31f&subTable.subTable.parentMenuName=carola.harvey&columns[0].isRequired=825ddg&subTable.tplCategory=dgiwwj&optionLists=z70w9r&limit=10&subTable.columns[0].isInsert=r27k0r&columns[0].queryType=bhs0ln&columns[0].tableId=835&Description=3gothk&subTable.subTable.tableId=946&subTable.pkColumn.columnComment=cmoqva&formColNum=280&subTable.subTable.subTableName=carola.harvey&subTable.columns[0].columnComment=hea2qd&subTable.pkColumn.columnId=386&subTable.columns[0].columnId=177&subTable.treeParentCode=12647&pkColumn.columnType=27mkpa&subTable.parentMenuId=805&createTime=2026-11-09 17:58:15&columns[0].priority=955&treeName=carola.harvey&subTable.subTable.className=carola.harvey&subTable.tableName=carola.harvey&parentMenuName=carola.harvey&subTable.Description=tc6x49
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─tableId|int64|编号|-
└─tableName|string|表名称|-
└─tableComment|string|表描述|-
└─subTableName|string|关联父表的表名|-
└─subTableFkName|string|本表关联父表的外键名|-
└─className|string|实体类名称(首字母大写)|-
└─tplCategory|string|使用的模板（crud单表操作 tree树表操作 sub主子表操作）|-
└─tplWebType|string|前端类型（element-ui模版 element-plus模版）|-
└─packageName|string|生成包路径|-
└─moduleName|string|生成模块名|-
└─businessName|string|生成业务名|-
└─functionName|string|生成功能名|-
└─functionAuthor|string|生成作者|-
└─formColNum|int32|表单布局，单列 双列 三列|-
└─genType|string|生成代码方式（0zip压缩包 1自定义路径）|-
└─genPath|string|生成路径（不填默认项目路径）|-
└─pkColumn|object|主键信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─columnId|int64|编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─tableId|int64|归属表编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─columnName|string|列名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─columnComment|string|列描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─columnType|string|列类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─javaType|string|JAVA类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─javaField|string|JAVA字段名|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isPk|string|是否主键（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isIncrement|string|是否自增（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isRequired|string|是否必填（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isInsert|string|是否为插入字段（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isEdit|string|是否编辑字段（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isList|string|是否列表字段（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isQuery|string|是否查询字段（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─queryType|string|查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─htmlType|string|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dictType|string|字典类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序|-
└─columns|array|表列信息|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─creatorId|string|创建人id|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastTime|string|最后修改时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─columnId|int64|编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─tableId|int64|归属表编号|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─columnName|string|列名称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─columnComment|string|列描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─columnType|string|列类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─javaType|string|JAVA类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─javaField|string|JAVA字段名|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isPk|string|是否主键（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isIncrement|string|是否自增（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isRequired|string|是否必填（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isInsert|string|是否为插入字段（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isEdit|string|是否编辑字段（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isList|string|是否列表字段（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─isQuery|string|是否查询字段（1是）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─queryType|string|查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─htmlType|string|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dictType|string|字典类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序|-
└─optionLists|string|其它生成选项|-
└─treeCode|string|树编码字段|-
└─treeParentCode|string|树父编码字段|-
└─treeName|string|树名称字段|-
└─parentMenuId|int64|上级菜单ID字段|-
└─parentMenuName|string|上级菜单名称字段|-
└─Description|string|备注|-
└─page|int32|分页信息：默认第1页|-
└─limit|int32|分页每页条数，默认10条|-
└─params|map|请求参数|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:15",
      "lastTime": "2026-11-09 17:58:15",
      "tableId": 439,
      "tableName": "carola.harvey",
      "tableComment": "3n0bzo",
      "subTableName": "carola.harvey",
      "subTableFkName": "carola.harvey",
      "className": "carola.harvey",
      "tplCategory": "ab4fqt",
      "tplWebType": "eaq1k9",
      "packageName": "carola.harvey",
      "moduleName": "carola.harvey",
      "businessName": "carola.harvey",
      "functionName": "carola.harvey",
      "functionAuthor": "Leesa Jacobi",
      "formColNum": 607,
      "genType": "w6ejc5",
      "genPath": "d7qick",
      "pkColumn": {
        "creatorId": "25",
        "createTime": "2026-11-09 17:58:15",
        "lastTime": "2026-11-09 17:58:15",
        "columnId": 86,
        "tableId": 249,
        "columnName": "carola.harvey",
        "columnComment": "g53jvg",
        "columnType": "r9fmq1",
        "javaType": "xhzvjm",
        "javaField": "zd4anz",
        "isPk": "il6mzz",
        "isIncrement": "n68k6h",
        "isRequired": "i2fync",
        "isInsert": "bflxbw",
        "isEdit": "vcpr54",
        "isList": "eclh2y",
        "isQuery": "8my98w",
        "queryType": "3xpc4o",
        "htmlType": "3p6ndz",
        "dictType": "qd4khi",
        "priority": 121
      },
      "subTable": {
        "$ref": "..."
      },
      "columns": [
        {
          "creatorId": "25",
          "createTime": "2026-11-09 17:58:15",
          "lastTime": "2026-11-09 17:58:15",
          "columnId": 734,
          "tableId": 709,
          "columnName": "carola.harvey",
          "columnComment": "gb0hko",
          "columnType": "n0vb2c",
          "javaType": "3kunqz",
          "javaField": "ljfixm",
          "isPk": "tiljkb",
          "isIncrement": "esx3l8",
          "isRequired": "2nkvo9",
          "isInsert": "alb2di",
          "isEdit": "kzj1ds",
          "isList": "xd1xd5",
          "isQuery": "e9ijdl",
          "queryType": "miidkq",
          "htmlType": "9m77ok",
          "dictType": "sffk45",
          "priority": 756
        }
      ],
      "optionLists": "jepvd0",
      "treeCode": "12647",
      "treeParentCode": "12647",
      "treeName": "carola.harvey",
      "parentMenuId": 394,
      "parentMenuName": "carola.harvey",
      "Description": "ow4e82",
      "page": 1,
      "limit": 10,
      "params": {
        "mapKey": {}
      }
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 查询某个表的全部字段
**URL:** https://linlan.net/eframe_backend/api/tool/gen/{tableId}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 查询某个表的全部字段

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
tableId|int64|表对象ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/735.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─any object|object|any object.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "mapKey": {
      "waring": "You may use java.util.Object for Map value; doc-generate can't be handle."
    }
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 查询数据库分页
**URL:** https://linlan.net/eframe_backend/api/tool/gen/db/list.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 查询数据库分页

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
tableId|int64|编号|false|-
tableName|string|表名称|true|-
tableComment|string|表描述|true|-
subTableName|string|关联父表的表名|false|-
subTableFkName|string|本表关联父表的外键名|false|-
className|string|实体类名称(首字母大写)|true|-
tplCategory|string|使用的模板（crud单表操作 tree树表操作 sub主子表操作）|false|-
tplWebType|string|前端类型（element-ui模版 element-plus模版）|false|-
packageName|string|生成包路径|true|-
moduleName|string|生成模块名|true|-
businessName|string|生成业务名|true|-
functionName|string|生成功能名|true|-
functionAuthor|string|生成作者|true|-
formColNum|int32|表单布局，单列 双列 三列|false|-
genType|string|生成代码方式（0zip压缩包 1自定义路径）|false|-
genPath|string|生成路径（不填默认项目路径）|false|-
pkColumn|object|主键信息|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─columnId|int64|编号|false|-
└─tableId|int64|归属表编号|false|-
└─columnName|string|列名称|false|-
└─columnComment|string|列描述|false|-
└─columnType|string|列类型|false|-
└─javaType|string|JAVA类型|false|-
└─javaField|string|JAVA字段名|true|-
└─isPk|string|是否主键（1是）|false|-
└─isIncrement|string|是否自增（1是）|false|-
└─isRequired|string|是否必填（1是）|false|-
└─isInsert|string|是否为插入字段（1是）|false|-
└─isEdit|string|是否编辑字段（1是）|false|-
└─isList|string|是否列表字段（1是）|false|-
└─isQuery|string|是否查询字段（1是）|false|-
└─queryType|string|查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围）|false|-
└─htmlType|string|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）|false|-
└─dictType|string|字典类型|false|-
└─priority|int32|排序|false|-
columns|array|表列信息|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─columnId|int64|编号|false|-
└─tableId|int64|归属表编号|false|-
└─columnName|string|列名称|false|-
└─columnComment|string|列描述|false|-
└─columnType|string|列类型|false|-
└─javaType|string|JAVA类型|false|-
└─javaField|string|JAVA字段名|true|-
└─isPk|string|是否主键（1是）|false|-
└─isIncrement|string|是否自增（1是）|false|-
└─isRequired|string|是否必填（1是）|false|-
└─isInsert|string|是否为插入字段（1是）|false|-
└─isEdit|string|是否编辑字段（1是）|false|-
└─isList|string|是否列表字段（1是）|false|-
└─isQuery|string|是否查询字段（1是）|false|-
└─queryType|string|查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围）|false|-
└─htmlType|string|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）|false|-
└─dictType|string|字典类型|false|-
└─priority|int32|排序|false|-
optionLists|string|其它生成选项|false|-
treeCode|string|树编码字段|false|-
treeParentCode|string|树父编码字段|false|-
treeName|string|树名称字段|false|-
parentMenuId|int64|上级菜单ID字段|false|-
parentMenuName|string|上级菜单名称字段|false|-
Description|string|备注|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
params|map|请求参数|false|-
└─any object|object|any object.|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/db/list.do?columns[0].tableId=590&Description=ubz98e&lastTime=2026-11-09 17:58:15&pkColumn.javaType=wjogoa&subTable.genPath=6iqm3b&subTable.pkColumn.createTime=2026-11-09 17:58:15&subTable.pkColumn.columnComment=ygypiy&subTable.subTable.limit=10&subTable.columns[0].javaField=kab1cx&pkColumn.htmlType=x494p7&pkColumn.columnId=689&columns[0].isIncrement=d6b4mw&columns[0].isQuery=pgnujh&subTable.subTable.Description=qjysjo&formColNum=212&pkColumn.isList=fnvu46&subTable.tableComment=z5ki4n&columns[0].javaField=r2ssph&subTable.tplWebType=w0c4hs&subTable.pkColumn.isInsert=09d7xa&subTable.subTable.parentMenuId=134&columns[0].isPk=35u4qx&subTable.page=1&treeName=carola.harvey&columns[0].dictType=1s6a38&subTable.columns[0].isEdit=bwdtyn&subTable.columns[0].isQuery=68irzf&columns[0].javaType=5zky9o&subTable.columns[0].isInsert=pkgg9m&parentMenuId=835&page=1&pkColumn.javaField=g2wbd5&subTable.subTable.businessName=carola.harvey&subTable.columns[0].tableId=494&subTable.pkColumn.columnName=carola.harvey&packageName=carola.harvey&pkColumn.columnComment=iq0mh2&pkColumn.priority=394&subTable.tableId=230&subTable.pkColumn.lastTime=2026-11-09 17:58:15&columns[0].queryType=sbww7v&treeCode=12647&subTable.tplCategory=uwh7cg&subTable.pkColumn.dictType=5oh0bn&subTable.pkColumn.isEdit=33weel&columns[0].columnComment=kbhxk9&subTable.columns[0].isList=2wx4zg&subTable.subTable.className=carola.harvey&subTable.columns[0].createTime=2026-11-09 17:58:15&subTableFkName=carola.harvey&subTable.subTable.createTime=2026-11-09 17:58:15&subTable.subTable.lastTime=2026-11-09 17:58:15&pkColumn.isRequired=p08s94&subTable.subTable.tableName=carola.harvey&pkColumn.queryType=lwo6xs&subTable.limit=10&pkColumn.createTime=2026-11-09 17:58:15&columns[0].isEdit=cmhjla&subTable.columns[0].isIncrement=fvj5my&subTable.tableName=carola.harvey&functionAuthor=Leesa Jacobi&subTable.subTable.tableId=66&subTable.subTable.functionAuthor=Leesa Jacobi&pkColumn.columnType=nz2qg9&subTable.subTable.tplCategory=j83qji&subTable.parentMenuName=carola.harvey&tableId=678&subTable.genType=unutla&subTable.lastTime=2026-11-09 17:58:15&subTable.functionName=carola.harvey&pkColumn.lastTime=2026-11-09 17:58:15&subTable.pkColumn.isIncrement=36jyn0&pkColumn.dictType=8jxq1g&subTable.subTable.creatorId=25&subTable.subTable.moduleName=carola.harvey&subTable.columns[0].creatorId=25&columns[0].createTime=2026-11-09 17:58:15&columns[0].isList=zxdk9d&subTable.subTable.subTableFkName=carola.harvey&subTable.columns[0].columnName=carola.harvey&creatorId=25&tableComment=xv8uk6&subTable.subTable.genPath=x4a9wq&columns[0].priority=325&optionLists=5e7j9p&className=carola.harvey&subTable.pkColumn.columnType=916dit&pkColumn.isInsert=yeix6m&parentMenuName=carola.harvey&subTable.optionLists=nfzwh1&pkColumn.isEdit=e8kmrt&subTable.columns[0].columnType=he7erp&subTable.columns[0].dictType=hi2z2e&columns[0].columnId=979&subTable.pkColumn.columnId=175&subTable.subTable.functionName=carola.harvey&subTable.subTable.treeName=carola.harvey&subTable.columns[0].priority=418&columns[0].columnType=bhvwum&subTable.subTable.parentMenuName=carola.harvey&moduleName=carola.harvey&subTable.Description=ole5mc&columns[0].lastTime=2026-11-09 17:58:15&subTable.columns[0].isPk=b9azy1&subTable.columns[0].columnId=905&subTable.columns[0].queryType=wkphx4&subTable.columns[0].javaType=m10thd&tableName=carola.harvey&tplCategory=mhboe5&subTable.businessName=carola.harvey&genType=1ubikr&subTable.pkColumn.javaType=3j5k7d&subTable.pkColumn.queryType=7hnww3&genPath=4hv2wq&subTable.treeName=carola.harvey&columns[0].htmlType=8rmmz7&subTable.packageName=carola.harvey&pkColumn.columnName=carola.harvey&subTable.subTableName=carola.harvey&subTable.creatorId=25&subTable.className=carola.harvey&subTable.pkColumn.isRequired=s23f95&subTable.pkColumn.creatorId=25&subTable.subTable.treeCode=12647&subTable.functionAuthor=Leesa Jacobi&subTable.pkColumn.isPk=ssqof4&subTable.treeParentCode=12647&subTableName=carola.harvey&functionName=carola.harvey&subTable.formColNum=791&pkColumn.creatorId=25&subTable.subTable.genType=t0m3ic&subTable.columns[0].lastTime=2026-11-09 17:58:15&subTable.subTableFkName=carola.harvey&subTable.pkColumn.javaField=iwsist&subTable.moduleName=carola.harvey&subTable.pkColumn.isList=c0pcs8&columns[0].creatorId=25&subTable.subTable.packageName=carola.harvey&columns[0].columnName=carola.harvey&treeParentCode=12647&columns[0].isInsert=56gpuv&subTable.columns[0].columnComment=x1uftg&tplWebType=kjer58&subTable.treeCode=12647&subTable.subTable.treeParentCode=12647&createTime=2026-11-09 17:58:15&subTable.subTable.subTableName=carola.harvey&subTable.pkColumn.priority=894&subTable.pkColumn.isQuery=sbnl73&pkColumn.isPk=09jzb3&pkColumn.isQuery=lj7meg&businessName=carola.harvey&limit=10&subTable.subTable.tplWebType=z89pk2&subTable.subTable.formColNum=654&columns[0].isRequired=48zinx&subTable.subTable.tableComment=r7oehz&subTable.pkColumn.tableId=850&subTable.subTable.optionLists=okumx9&subTable.parentMenuId=368&pkColumn.tableId=947&subTable.createTime=2026-11-09 17:58:15&subTable.subTable.page=1&subTable.columns[0].isRequired=jjfmd1&pkColumn.isIncrement=4tksxk&subTable.pkColumn.htmlType=4yv0bm&subTable.columns[0].htmlType=39ejlg
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─size|int32|No comments found.|-
└─pageNum|int32|No comments found.|-
└─pageSize|int32|No comments found.|-
└─startRow|int64|No comments found.|-
└─endRow|int64|No comments found.|-
└─total|int64|No comments found.|-
└─pages|int32|No comments found.|-
└─count|boolean|No comments found.|-
└─reasonable|boolean|No comments found.|-
└─pageSizeZero|boolean|No comments found.|-
└─countColumn|string|No comments found.|-
└─orderBy|string|No comments found.|-
└─orderByOnly|boolean|No comments found.|-
└─boundSqlInterceptor|object|No comments found.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "size": 10,
    "pageNum": 382,
    "pageSize": 10,
    "startRow": 811,
    "endRow": 116,
    "total": 613,
    "pages": 625,
    "count": true,
    "reasonable": true,
    "pageSizeZero": true,
    "countColumn": "khbwfm",
    "orderBy": "j622ch",
    "orderByOnly": true,
    "boundSqlInterceptor": {}
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 查询数据表字段列表
**URL:** https://linlan.net/eframe_backend/api/tool/gen/column/{tableId}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 查询数据表字段列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
tableId|int64|表对象ID|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/column/{tableId}.do?tableId=392
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─columnId|int64|编号|-
└─tableId|int64|归属表编号|-
└─columnName|string|列名称|-
└─columnComment|string|列描述|-
└─columnType|string|列类型|-
└─javaType|string|JAVA类型|-
└─javaField|string|JAVA字段名|-
└─isPk|string|是否主键（1是）|-
└─isIncrement|string|是否自增（1是）|-
└─isRequired|string|是否必填（1是）|-
└─isInsert|string|是否为插入字段（1是）|-
└─isEdit|string|是否编辑字段（1是）|-
└─isList|string|是否列表字段（1是）|-
└─isQuery|string|是否查询字段（1是）|-
└─queryType|string|查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围）|-
└─htmlType|string|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）|-
└─dictType|string|字典类型|-
└─priority|int32|排序|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:15",
      "lastTime": "2026-11-09 17:58:15",
      "columnId": 550,
      "tableId": 584,
      "columnName": "carola.harvey",
      "columnComment": "juxv30",
      "columnType": "29ftg5",
      "javaType": "avhoik",
      "javaField": "eeggq1",
      "isPk": "7h84x1",
      "isIncrement": "ubukmk",
      "isRequired": "q1h8uy",
      "isInsert": "ik78ts",
      "isEdit": "fuu5sf",
      "isList": "ab3rlu",
      "isQuery": "22trbv",
      "queryType": "yndjnb",
      "htmlType": "8qiyhp",
      "dictType": "ggc7cd",
      "priority": 737
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 导入表结构（保存）
**URL:** https://linlan.net/eframe_backend/api/tool/gen/importTable.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 导入表结构（保存）

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
tables|string|表名称前缀|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/importTable.do --data 'tables=nsi4bw'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "hfjclw",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 创建表结构（保存）
**URL:** https://linlan.net/eframe_backend/api/tool/gen/createTable.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 创建表结构（保存）

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
sql|string|  SQL脚本|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/createTable.do --data 'sql=ob60w8'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "2qnk4o",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改保存代码生成业务
**URL:** https://linlan.net/eframe_backend/api/tool/gen.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 修改保存代码生成业务

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
tableId|int64|编号|false|-
tableName|string|表名称|true|-
tableComment|string|表描述|true|-
subTableName|string|关联父表的表名|false|-
subTableFkName|string|本表关联父表的外键名|false|-
className|string|实体类名称(首字母大写)|true|-
tplCategory|string|使用的模板（crud单表操作 tree树表操作 sub主子表操作）|false|-
tplWebType|string|前端类型（element-ui模版 element-plus模版）|false|-
packageName|string|生成包路径|true|-
moduleName|string|生成模块名|true|-
businessName|string|生成业务名|true|-
functionName|string|生成功能名|true|-
functionAuthor|string|生成作者|true|-
formColNum|int32|表单布局，单列 双列 三列|false|-
genType|string|生成代码方式（0zip压缩包 1自定义路径）|false|-
genPath|string|生成路径（不填默认项目路径）|false|-
pkColumn|object|主键信息|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─columnId|int64|编号|false|-
└─tableId|int64|归属表编号|false|-
└─columnName|string|列名称|false|-
└─columnComment|string|列描述|false|-
└─columnType|string|列类型|false|-
└─javaType|string|JAVA类型|false|-
└─javaField|string|JAVA字段名|true|-
└─isPk|string|是否主键（1是）|false|-
└─isIncrement|string|是否自增（1是）|false|-
└─isRequired|string|是否必填（1是）|false|-
└─isInsert|string|是否为插入字段（1是）|false|-
└─isEdit|string|是否编辑字段（1是）|false|-
└─isList|string|是否列表字段（1是）|false|-
└─isQuery|string|是否查询字段（1是）|false|-
└─queryType|string|查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围）|false|-
└─htmlType|string|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）|false|-
└─dictType|string|字典类型|false|-
└─priority|int32|排序|false|-
columns|array|表列信息|false|-
└─creatorId|string|创建人id|false|-
└─createTime|string|创建时间|false|-
└─lastTime|string|最后修改时间|false|-
└─columnId|int64|编号|false|-
└─tableId|int64|归属表编号|false|-
└─columnName|string|列名称|false|-
└─columnComment|string|列描述|false|-
└─columnType|string|列类型|false|-
└─javaType|string|JAVA类型|false|-
└─javaField|string|JAVA字段名|true|-
└─isPk|string|是否主键（1是）|false|-
└─isIncrement|string|是否自增（1是）|false|-
└─isRequired|string|是否必填（1是）|false|-
└─isInsert|string|是否为插入字段（1是）|false|-
└─isEdit|string|是否编辑字段（1是）|false|-
└─isList|string|是否列表字段（1是）|false|-
└─isQuery|string|是否查询字段（1是）|false|-
└─queryType|string|查询方式（EQ等于、NE不等于、GT大于、LT小于、LIKE模糊、BETWEEN范围）|false|-
└─htmlType|string|显示类型（input文本框、textarea文本域、select下拉框、checkbox复选框、radio单选框、datetime日期控件、image图片上传控件、upload文件上传控件、editor富文本控件）|false|-
└─dictType|string|字典类型|false|-
└─priority|int32|排序|false|-
optionLists|string|其它生成选项|false|-
treeCode|string|树编码字段|false|-
treeParentCode|string|树父编码字段|false|-
treeName|string|树名称字段|false|-
parentMenuId|int64|上级菜单ID字段|false|-
parentMenuName|string|上级菜单名称字段|false|-
Description|string|备注|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
params|map|请求参数|false|-
└─any object|object|any object.|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:15",
  "lastTime": "2026-11-09 17:58:15",
  "tableId": 732,
  "tableName": "carola.harvey",
  "tableComment": "78bg87",
  "subTableName": "carola.harvey",
  "subTableFkName": "carola.harvey",
  "className": "carola.harvey",
  "tplCategory": "mx0jud",
  "tplWebType": "9yfauo",
  "packageName": "carola.harvey",
  "moduleName": "carola.harvey",
  "businessName": "carola.harvey",
  "functionName": "carola.harvey",
  "functionAuthor": "Leesa Jacobi",
  "formColNum": 455,
  "genType": "qs6dzi",
  "genPath": "r1xvz7",
  "pkColumn": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:15",
    "lastTime": "2026-11-09 17:58:15",
    "columnId": 302,
    "tableId": 64,
    "columnName": "carola.harvey",
    "columnComment": "eqrqk8",
    "columnType": "ss7svi",
    "javaType": "0kn643",
    "javaField": "ncqael",
    "isPk": "2kd9w5",
    "isIncrement": "ek2cmx",
    "isRequired": "8ptneq",
    "isInsert": "am587u",
    "isEdit": "02aw3y",
    "isList": "t2d20f",
    "isQuery": "mn5sf8",
    "queryType": "a6munq",
    "htmlType": "rb7se2",
    "dictType": "xkcaci",
    "priority": 709
  },
  "subTable": {
    "$ref": "..."
  },
  "columns": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:15",
      "lastTime": "2026-11-09 17:58:15",
      "columnId": 668,
      "tableId": 581,
      "columnName": "carola.harvey",
      "columnComment": "odpgyh",
      "columnType": "ibvqg3",
      "javaType": "jydzdf",
      "javaField": "xmc5ad",
      "isPk": "9bah0c",
      "isIncrement": "xp8qez",
      "isRequired": "89lqty",
      "isInsert": "39ik5z",
      "isEdit": "0xui67",
      "isList": "ds0dg0",
      "isQuery": "csomqz",
      "queryType": "5ezu8u",
      "htmlType": "hw87ec",
      "dictType": "35u2n1",
      "priority": 244
    }
  ],
  "optionLists": "sqkffq",
  "treeCode": "12647",
  "treeParentCode": "12647",
  "treeName": "carola.harvey",
  "parentMenuId": 417,
  "parentMenuName": "carola.harvey",
  "Description": "k9e66o",
  "page": 1,
  "limit": 10,
  "params": {
    "mapKey": {}
  }
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "34rbem",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除代码生成
**URL:** https://linlan.net/eframe_backend/api/tool/gen/{tableIds}.do

**Type:** DELETE

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除代码生成

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
tableIds|array| 表名Ids,[array of int64]|true|

**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "gzddwo",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 预览代码
**URL:** https://linlan.net/eframe_backend/api/tool/gen/preview/{tableId}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 预览代码

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
tableId|int64|表对象ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/preview/925.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "mapKey1": "9xmc8b",
    "mapKey2": "tu7xtn"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 生成代码（下载方式）
**URL:** https://linlan.net/eframe_backend/api/tool/gen/download/{tableName}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 生成代码（下载方式）

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
tableName|string|表名称|true|-

**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/download/carola.harvey.do?writer.psOut.trouble=true&writer.psOut.closing=true&characterEncoding=3cu0t1&committed=true&status=910&writer.autoFlush=true&writer.psOut.formatter.zero=n&writer.psOut.textOut.nChars=562&writer.trouble=true&contentType=fb7bvw&writer.writeBuffer=t&writer.writeBuffer=t&writer.psOut.autoFlush=true&bufferSize=10&writer.formatter.lastException.detailMessage=success&writer.formatter.zero=2&writer.psOut.closed=true&writer.psOut.textOut.nextChar=93
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "3tljvh",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 生成代码（自定义路径）
**URL:** https://linlan.net/eframe_backend/api/tool/gen/genCode/{tableName}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 生成代码（自定义路径）

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
tableName|string|表名称|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/genCode/carola.harvey.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "o5rrvj",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 同步数据库
**URL:** https://linlan.net/eframe_backend/api/tool/gen/synchDb/{tableName}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 同步数据库

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
tableName|string|表名称|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/synchDb/carola.harvey.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "ogr9zz",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 批量生成代码
**URL:** https://linlan.net/eframe_backend/api/tool/gen/batchGenCode.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 批量生成代码

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
tables|string|   表名称前缀|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/batchGenCode.do?writer.psOut.closing=true&writer.psOut.trouble=true&tables=m0kypx&characterEncoding=ffbgsh&writer.formatter.zero=f&writer.formatter.lastException.detailMessage=success&writer.psOut.textOut.nChars=121&writer.autoFlush=true&writer.psOut.closed=true&writer.psOut.autoFlush=true&bufferSize=10&writer.trouble=true&status=741&committed=true&writer.writeBuffer=z&writer.writeBuffer=z&writer.psOut.formatter.zero=y&writer.psOut.textOut.nextChar=7&contentType=kxmop8
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "84u4cf",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 会员用户令牌读写控制类
### Get ThirdMemberToken list. 获取会员用户令牌列表或分页, 返回ThirdMemberToken对象.
**URL:** https://linlan.net/eframe_backend/api/third/token/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get ThirdMemberToken list. 获取会员用户令牌列表或分页, 返回ThirdMemberToken对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|int64|主键ID|false|-
token|string|令牌TOKEN|false|-
foreignId|string|前台应用或站点ID|false|-
username|string|用户名|false|-
loginIp|string|登录IP|false|-
updateTime|string|更新时间|false|-
expireTime|string|过期时间|false|-
description|string|备注|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/token/list.do?orderBy=79&description=klrfgo&startTime=2026-11-09 17:56:55&q=cth875&endTime=2026-11-09 17:56:55&username=carola.harvey&loginIp=79.62.69.121&token=5a9o60&page=1&foreignId=25&updateTime=2026-11-09 17:58:01&limit=10&id=817&expireTime=2026-11-09 17:58:01
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|主键ID|-
└─userId|string|用户ID|-
└─token|string|令牌TOKEN|-
└─foreignId|string|前台应用或站点ID|-
└─username|string|用户名|-
└─loginIp|string|登录IP|-
└─updateTime|string|更新时间|-
└─expireTime|string|过期时间|-
└─description|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:01",
      "lastTime": "2026-11-09 17:58:01",
      "id": 556,
      "userId": "25",
      "token": "lf7bll",
      "foreignId": "25",
      "username": "carola.harvey",
      "loginIp": "79.62.69.121",
      "updateTime": "2026-11-09 17:58:01",
      "expireTime": "2026-11-09 17:58:01",
      "description": "j7xe31"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### ThirdMemberToken Operation. 删除会员用户令牌数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/third/token/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** ThirdMemberToken Operation. 删除会员用户令牌数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|主键ID:null;1;1,2,3,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/token/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "y4arym",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 短信发送记录读写控制类
### Get SmsSendRecord list. 获取短信发送记录列表或分页, 返回SmsSendRecord对象.
**URL:** https://linlan.net/eframe_backend/api/store/smssendrecord/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-15 14:07:47

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get SmsSendRecord list. 获取短信发送记录列表或分页, 返回SmsSendRecord对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|int64|主键ID|false|-
appId|string|应用ID|false|-
providerId|string|短信提供商ID，平台ID|false|-
providerName|string|短信提供商名称，平台名称|false|-
foreignId|string|外键ID|false|-
receiverMobile|string|接收人手机号|false|-
receiverName|string|接收人|false|-
bizType|string|消息类型|false|-
bizSubtype|string|信息子类型|false|-
content|string|信息内容|false|-
msgUrl|string|信息链接，链接平台内地址，可点击访问|false|-
status|string|信息状态|false|-
sendTime|string|发送时间|false|-
sendStatus|string|发送状态(0草稿1已发)|false|-
returnTime|string|返回时间|false|-
returnInfo|string|返回结果|false|-
creatorId|string|创建者ID|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/store/smssendrecord/list.do?msgUrl=www.hank-okon.com&returnTime=2026-11-09 17:57:59&bizSubtype=99rwro&foreignId=25&receiverName=carola.harvey&q=txzprx&sendStatus=y6earn&description=mari0q&bizType=25mwrx&spare2=li3oi7&spare1=inh9gs&content=om9xo1&status=w370ai&creatorId=25&receiverMobile=337-229-9034&appId=25&startTime=2026-11-09 17:56:55&providerId=25&orderBy=80&providerName=carola.harvey&page=1&id=659&returnInfo=ez95em&sendTime=2026-11-09&delFlag=5&limit=10&endTime=2026-11-09 17:56:55
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|主键ID|-
└─appId|string|应用ID|-
└─providerId|string|短信提供商ID，平台ID|-
└─providerName|string|短信提供商名称，平台名称|-
└─foreignId|string|外键ID|-
└─receiverMobile|string|接收人手机号|-
└─receiverName|string|接收人|-
└─bizType|string|消息类型|-
└─bizSubtype|string|信息子类型|-
└─content|string|信息内容|-
└─msgUrl|string|信息链接，链接平台内地址，可点击访问|-
└─status|string|信息状态|-
└─sendTime|string|发送时间|-
└─sendStatus|string|发送状态(0草稿1已发)|-
└─returnTime|string|返回时间|-
└─returnInfo|string|返回结果|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:00",
      "lastTime": "2026-11-09 17:58:00",
      "id": 150,
      "appId": "25",
      "providerId": "25",
      "providerName": "carola.harvey",
      "foreignId": "25",
      "receiverMobile": "337-229-9034",
      "receiverName": "carola.harvey",
      "bizType": "ioyg1m",
      "bizSubtype": "m3v5gr",
      "content": "d20phr",
      "msgUrl": "www.hank-okon.com",
      "status": "33v5gz",
      "sendTime": "2026-11-09",
      "sendStatus": "vefpok",
      "returnTime": "2026-11-09 17:58:00",
      "returnInfo": "2s1yex",
      "delFlag": 5,
      "description": "jo28g7",
      "spare1": "fkfott",
      "spare2": "op9a3m"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get SmsSendRecord by id. 主键获取短信发送记录详细信息.
**URL:** https://linlan.net/eframe_backend/api/store/smssendrecord/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-15 14:07:47

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get SmsSendRecord by id. 主键获取短信发送记录详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|int64|主键ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/store/smssendrecord/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|主键ID|-
└─appId|string|应用ID|-
└─providerId|string|短信提供商ID，平台ID|-
└─providerName|string|短信提供商名称，平台名称|-
└─foreignId|string|外键ID|-
└─receiverMobile|string|接收人手机号|-
└─receiverName|string|接收人|-
└─bizType|string|消息类型|-
└─bizSubtype|string|信息子类型|-
└─content|string|信息内容|-
└─msgUrl|string|信息链接，链接平台内地址，可点击访问|-
└─status|string|信息状态|-
└─sendTime|string|发送时间|-
└─sendStatus|string|发送状态(0草稿1已发)|-
└─returnTime|string|返回时间|-
└─returnInfo|string|返回结果|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:00",
    "lastTime": "2026-11-09 17:58:00",
    "id": 498,
    "appId": "25",
    "providerId": "25",
    "providerName": "carola.harvey",
    "foreignId": "25",
    "receiverMobile": "337-229-9034",
    "receiverName": "carola.harvey",
    "bizType": "l46v5f",
    "bizSubtype": "jma61z",
    "content": "qdlphz",
    "msgUrl": "www.hank-okon.com",
    "status": "n36vnh",
    "sendTime": "2026-11-09",
    "sendStatus": "kcd0zw",
    "returnTime": "2026-11-09 17:58:00",
    "returnInfo": "x9jkke",
    "delFlag": 5,
    "description": "aj4qvw",
    "spare1": "3ebdjw",
    "spare2": "pmqbjf"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### SmsSendRecord Operation. 新增短信发送记录数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/store/smssendrecord/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-15 14:07:47

**Content-Type:** application/json; charset=utf-8

**Description:** SmsSendRecord Operation. 新增短信发送记录数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|主键ID|false|-
appId|string|应用ID|false|-
providerId|string|短信提供商ID，平台ID|false|-
providerName|string|短信提供商名称，平台名称|false|-
foreignId|string|外键ID|false|-
receiverMobile|string|接收人手机号|false|-
receiverName|string|接收人|false|-
bizType|string|消息类型|false|-
bizSubtype|string|信息子类型|false|-
content|string|信息内容|false|-
msgUrl|string|信息链接，链接平台内地址，可点击访问|false|-
status|string|信息状态|false|-
sendTime|string|发送时间|false|-
sendStatus|string|发送状态(0草稿1已发)|false|-
returnTime|string|返回时间|false|-
returnInfo|string|返回结果|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/store/smssendrecord/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:00",
  "lastTime": "2026-11-09 17:58:00",
  "id": 341,
  "appId": "25",
  "providerId": "25",
  "providerName": "carola.harvey",
  "foreignId": "25",
  "receiverMobile": "337-229-9034",
  "receiverName": "carola.harvey",
  "bizType": "9ne2cq",
  "bizSubtype": "5abdc6",
  "content": "px1bhy",
  "msgUrl": "www.hank-okon.com",
  "status": "6bpagk",
  "sendTime": "2026-11-09",
  "sendStatus": "fy2l5g",
  "returnTime": "2026-11-09 17:58:00",
  "returnInfo": "ygiy89",
  "delFlag": 5,
  "description": "x80wq2",
  "spare1": "ndrhpv",
  "spare2": "9on6t3"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "s6mx7s",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### SmsSendRecord Operation. 修改短信发送记录数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/store/smssendrecord/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-15 14:07:47

**Content-Type:** application/json; charset=utf-8

**Description:** SmsSendRecord Operation. 修改短信发送记录数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|主键ID|false|-
appId|string|应用ID|false|-
providerId|string|短信提供商ID，平台ID|false|-
providerName|string|短信提供商名称，平台名称|false|-
foreignId|string|外键ID|false|-
receiverMobile|string|接收人手机号|false|-
receiverName|string|接收人|false|-
bizType|string|消息类型|false|-
bizSubtype|string|信息子类型|false|-
content|string|信息内容|false|-
msgUrl|string|信息链接，链接平台内地址，可点击访问|false|-
status|string|信息状态|false|-
sendTime|string|发送时间|false|-
sendStatus|string|发送状态(0草稿1已发)|false|-
returnTime|string|返回时间|false|-
returnInfo|string|返回结果|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/store/smssendrecord/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:00",
  "lastTime": "2026-11-09 17:58:00",
  "id": 420,
  "appId": "25",
  "providerId": "25",
  "providerName": "carola.harvey",
  "foreignId": "25",
  "receiverMobile": "337-229-9034",
  "receiverName": "carola.harvey",
  "bizType": "xxwohx",
  "bizSubtype": "vcunmb",
  "content": "sf72kq",
  "msgUrl": "www.hank-okon.com",
  "status": "olci4t",
  "sendTime": "2026-11-09",
  "sendStatus": "o5l74p",
  "returnTime": "2026-11-09 17:58:00",
  "returnInfo": "w7dhs6",
  "delFlag": 5,
  "description": "d328z2",
  "spare1": "zppycr",
  "spare2": "4m2p73"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "hg068u",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### SmsSendRecord Operation. 删除短信发送记录数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/store/smssendrecord/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-15 14:07:47

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** SmsSendRecord Operation. 删除短信发送记录数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|主键ID:null;1;1,2,3,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/store/smssendrecord/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "zwggaf",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 短信邮箱登录验证
### 短信邮箱登录方法
**URL:** https://linlan.net/eframe_backend/login/sms.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 短信邮箱登录方法

**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
mobile|string|手机号码|false|-
code|string|验证码|false|-
uuid|string|唯一标识|false|-
appId|string|所在应用ID|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -i https://linlan.net/eframe_backend/login/sms.do --data '{
  "mobile": "337-229-9034",
  "code": "12647",
  "uuid": "1e3a83fa-00ad-4dec-9d63-bc67649e3d86",
  "appId": "25"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─userId|string|用户ID|-
└─token|string|令牌TOKEN|-
└─updateTime|string|更新时间|-
└─expireTime|string|过期时间|-
└─mobileConfirm|boolean|是否有手机号码|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "userId": "25",
    "token": "xqcgb0",
    "updateTime": "2026-11-09 17:57:59",
    "expireTime": "2026-11-09 17:57:59",
    "mobileConfirm": true
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 登录发送短信验证码
**URL:** https://linlan.net/eframe_backend/login/otp/send.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 登录发送短信验证码

**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
mobile|string|手机号码|false|-

**Request-example:**
```
curl -X POST -k -i https://linlan.net/eframe_backend/login/otp/send.do --data 'mobile=337-229-9034'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "jrneo6",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 发送邮件
**URL:** https://linlan.net/eframe_backend/login/mail/send.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 发送邮件

**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|int64|主键ID|false|-
platform|int32|平台|false|-
mailFormat|string|邮件格式|false|-
mailFrom|string|发件人邮箱|false|-
formAlias|string|发件人昵称|false|-
mailTos|string|接收人邮箱|false|-
receiversName|string|收件人列表|false|-
templateName|string|模板名|false|-
tagName|string|标签名|false|-
subject|string|邮件主题|false|-
content|string|邮件正文|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -i https://linlan.net/eframe_backend/login/mail/send.do --data '{
  "id": 170,
  "platform": 873,
  "mailFormat": "8aplpz",
  "mailFrom": "byiie6",
  "formAlias": "wptexx",
  "mailTos": "pmf2rg",
  "receiversName": "carola.harvey",
  "templateName": "carola.harvey",
  "tagName": "carola.harvey",
  "subject": "a8971j",
  "content": "wsje5f"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "wwugrs",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 邮箱账号注册
**URL:** https://linlan.net/eframe_backend/login/mail/register.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 邮箱账号注册

**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
email|string|邮箱|true|-
code|string|验证码|true|-
password|string|密码|true|-
nickname|string|昵称|true|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -i https://linlan.net/eframe_backend/login/mail/register.do --data '{
  "email": "afton.goyette@gmail.com",
  "code": "12647",
  "password": "qupt38",
  "nickname": "crysta.feeney"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": true,
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据邮箱修改密码
**URL:** https://linlan.net/eframe_backend/login/mail/email/forgot.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 根据邮箱修改密码

**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
email|string|邮箱|true|-
code|string|验证码|true|-
password|string|密码|true|-
nickname|string|昵称|true|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -i https://linlan.net/eframe_backend/login/mail/email/forgot.do --data '{
  "email": "afton.goyette@gmail.com",
  "code": "12647",
  "password": "s3sz1p",
  "nickname": "crysta.feeney"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": true,
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 第三方用户读写控制类
### Get ThirdMember list. 获取第三方用户列表或分页, 返回ThirdMember对象.
**URL:** https://linlan.net/eframe_backend/api/third/member/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get ThirdMember list. 获取第三方用户列表或分页, 返回ThirdMember对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|int64|主键ID|false|-
organId|string|机构ID|false|-
foreignId|string|外键ID，人口库ID|false|-
accountId|string|身份提供商ID|false|-
serverType|string|开放平台认证平台类型|false|-
unionId|string|三方全局D|false|-
openId|string|开放平台ID|false|-
email|string|邮箱|false|-
areaCode|string|手机号对应的国家号|false|-
mobile|string|电话号码|false|-
nickName|string|昵称|false|-
avatarUrl|string|头像|false|-
additionInfo|string|附加信息|false|-
creatorId|string|创建人ID|false|-
delFlag|int32|删除标记，0未删除1已删除|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/member/list.do?startTime=2026-11-09 17:56:55&unionId=25&creatorId=25&email=afton.goyette@gmail.com&areaCode=12647&accountId=25&foreignId=25&spare1=0fst6l&delFlag=5&avatarUrl=www.hank-okon.com&additionInfo=g7xqzb&organId=25&endTime=2026-11-09 17:56:55&q=g0333x&page=1&limit=10&nickName=crysta.feeney&spare2=rll5ex&orderBy=599&id=483&openId=25&description=xj07ac&mobile=337-229-9034&serverType=5b20gz
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|主键ID|-
└─userId|string|用户ID|-
└─organId|string|机构ID|-
└─foreignId|string|外键ID，人口库ID|-
└─accountId|string|身份提供商ID|-
└─accountType|string|开放平台认证平台类型|-
└─unionId|string|三方全局D|-
└─openId|string|开放平台ID|-
└─email|string|邮箱|-
└─areaCode|string|手机号对应的国家号|-
└─mobile|string|电话号码|-
└─nickName|string|昵称|-
└─avatarUrl|string|头像|-
└─additionInfo|string|附加信息|-
└─delFlag|int32|删除标记，0未删除1已删除|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:01",
      "lastTime": "2026-11-09 17:58:01",
      "id": 98,
      "userId": "25",
      "organId": "25",
      "foreignId": "25",
      "accountId": "25",
      "accountType": "ys3qih",
      "unionId": "25",
      "openId": "25",
      "email": "afton.goyette@gmail.com",
      "areaCode": "12647",
      "mobile": "337-229-9034",
      "nickName": "crysta.feeney",
      "avatarUrl": "www.hank-okon.com",
      "additionInfo": "rafyni",
      "delFlag": 5,
      "description": "9odnby",
      "spare1": "6xjcgc",
      "spare2": "4glz8j"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get ThirdMember by id. 主键获取第三方用户详细信息.
**URL:** https://linlan.net/eframe_backend/api/third/member/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get ThirdMember by id. 主键获取第三方用户详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|int64|主键ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/member/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|主键ID|-
└─userId|string|用户ID|-
└─organId|string|机构ID|-
└─foreignId|string|外键ID，人口库ID|-
└─accountId|string|身份提供商ID|-
└─accountType|string|开放平台认证平台类型|-
└─unionId|string|三方全局D|-
└─openId|string|开放平台ID|-
└─email|string|邮箱|-
└─areaCode|string|手机号对应的国家号|-
└─mobile|string|电话号码|-
└─nickName|string|昵称|-
└─avatarUrl|string|头像|-
└─additionInfo|string|附加信息|-
└─delFlag|int32|删除标记，0未删除1已删除|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:01",
    "lastTime": "2026-11-09 17:58:01",
    "id": 475,
    "userId": "25",
    "organId": "25",
    "foreignId": "25",
    "accountId": "25",
    "accountType": "derbv3",
    "unionId": "25",
    "openId": "25",
    "email": "afton.goyette@gmail.com",
    "areaCode": "12647",
    "mobile": "337-229-9034",
    "nickName": "crysta.feeney",
    "avatarUrl": "www.hank-okon.com",
    "additionInfo": "odxypi",
    "delFlag": 5,
    "description": "lng4gb",
    "spare1": "am8ol3",
    "spare2": "thkmxm"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### ThirdMember Operation. 新增第三方用户数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/third/member/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/json; charset=utf-8

**Description:** ThirdMember Operation. 新增第三方用户数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|主键ID|false|-
userId|string|用户ID|false|-
organId|string|机构ID|false|-
foreignId|string|外键ID，人口库ID|false|-
accountId|string|身份提供商ID|false|-
accountType|string|开放平台认证平台类型|false|-
unionId|string|三方全局D|false|-
openId|string|开放平台ID|false|-
email|string|邮箱|false|-
areaCode|string|手机号对应的国家号|false|-
mobile|string|电话号码|false|-
nickName|string|昵称|false|-
avatarUrl|string|头像|false|-
additionInfo|string|附加信息|false|-
delFlag|int32|删除标记，0未删除1已删除|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/member/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:01",
  "lastTime": "2026-11-09 17:58:01",
  "id": 823,
  "userId": "25",
  "organId": "25",
  "foreignId": "25",
  "accountId": "25",
  "accountType": "t0zvny",
  "unionId": "25",
  "openId": "25",
  "email": "afton.goyette@gmail.com",
  "areaCode": "12647",
  "mobile": "337-229-9034",
  "nickName": "crysta.feeney",
  "avatarUrl": "www.hank-okon.com",
  "additionInfo": "97b2ao",
  "delFlag": 5,
  "description": "c6ydgy",
  "spare1": "x2u360",
  "spare2": "c34cna"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "tffjyk",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### ThirdMember Operation. 修改第三方用户数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/third/member/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/json; charset=utf-8

**Description:** ThirdMember Operation. 修改第三方用户数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|主键ID|false|-
userId|string|用户ID|false|-
organId|string|机构ID|false|-
foreignId|string|外键ID，人口库ID|false|-
accountId|string|身份提供商ID|false|-
accountType|string|开放平台认证平台类型|false|-
unionId|string|三方全局D|false|-
openId|string|开放平台ID|false|-
email|string|邮箱|false|-
areaCode|string|手机号对应的国家号|false|-
mobile|string|电话号码|false|-
nickName|string|昵称|false|-
avatarUrl|string|头像|false|-
additionInfo|string|附加信息|false|-
delFlag|int32|删除标记，0未删除1已删除|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/member/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:01",
  "lastTime": "2026-11-09 17:58:01",
  "id": 278,
  "userId": "25",
  "organId": "25",
  "foreignId": "25",
  "accountId": "25",
  "accountType": "bwp1oa",
  "unionId": "25",
  "openId": "25",
  "email": "afton.goyette@gmail.com",
  "areaCode": "12647",
  "mobile": "337-229-9034",
  "nickName": "crysta.feeney",
  "avatarUrl": "www.hank-okon.com",
  "additionInfo": "j3buom",
  "delFlag": 5,
  "description": "ladqhw",
  "spare1": "gbsu7t",
  "spare2": "6ut06f"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "hvnv56",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### ThirdMember Operation. 删除第三方用户数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/third/member/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** ThirdMember Operation. 删除第三方用户数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|主键ID:null;1;1,2,3,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/member/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "gfq3oh",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 第三方用户身份提供商绑定读写控制类
### Get ThirdMemberBind list. 获取用户身份提供商绑定列表或分页, 返回ThirdMemberBind对象.
**URL:** https://linlan.net/eframe_backend/api/third/memberbind/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get ThirdMemberBind list. 获取用户身份提供商绑定列表或分页, 返回ThirdMemberBind对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|string|主键ID|false|-
memberId|int64|会员ID|false|-
userId|string|用户ID|false|-
username|string|系统用户名，手机号|false|-
accountId|string|身份提供商ID|false|-
accountKey|string|第三方账号KEY，市民云、微信等的UnionId或OpenId|false|-
bindTime|string|绑定时间|false|-
additionInfo|string|附加信息|false|-
creatorId|string|创建人ID|false|-
delFlag|int32|删除标记，0未删除1已删除|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/memberbind/list.do?orderBy=364&startTime=2026-11-09 17:56:55&bindTime=2026-11-09 17:58:01&endTime=2026-11-09 17:56:55&additionInfo=6t4ukj&creatorId=25&username=carola.harvey&description=a0v2i6&spare2=joksz8&userId=25&id=25&accountId=25&accountKey=7gnqrz&spare1=6r6a1q&limit=10&memberId=402&page=1&delFlag=5&q=s65bdy
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|主键ID|-
└─memberId|int64|会员ID|-
└─userId|string|用户ID|-
└─username|string|系统用户名，手机号|-
└─accountId|string|身份提供商ID|-
└─accountKey|string|第三方账号KEY，市民云、微信等的UnionId或OpenId|-
└─bindTime|string|绑定时间|-
└─additionInfo|string|附加信息|-
└─delFlag|int32|删除标记，0未删除1已删除|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
└─openType|string|第三方平台|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:01",
      "lastTime": "2026-11-09 17:58:01",
      "id": "25",
      "memberId": 33,
      "userId": "25",
      "username": "carola.harvey",
      "accountId": "25",
      "accountKey": "94kbe4",
      "bindTime": "2026-11-09 17:58:01",
      "additionInfo": "ccr72f",
      "delFlag": 5,
      "description": "fjdyec",
      "spare1": "5xieke",
      "spare2": "jk0qf3",
      "openType": "6hkv5k"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get ThirdMemberBind by id. 主键获取用户身份提供商绑定详细信息.
**URL:** https://linlan.net/eframe_backend/api/third/memberbind/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get ThirdMemberBind by id. 主键获取用户身份提供商绑定详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|string|主键ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/memberbind/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|主键ID|-
└─memberId|int64|会员ID|-
└─userId|string|用户ID|-
└─username|string|系统用户名，手机号|-
└─accountId|string|身份提供商ID|-
└─accountKey|string|第三方账号KEY，市民云、微信等的UnionId或OpenId|-
└─bindTime|string|绑定时间|-
└─additionInfo|string|附加信息|-
└─delFlag|int32|删除标记，0未删除1已删除|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:01",
    "lastTime": "2026-11-09 17:58:01",
    "id": "25",
    "memberId": 235,
    "userId": "25",
    "username": "carola.harvey",
    "accountId": "25",
    "accountKey": "w9i0st",
    "bindTime": "2026-11-09 17:58:01",
    "additionInfo": "2zo0dx",
    "delFlag": 5,
    "description": "yj2ypm",
    "spare1": "lqvb08",
    "spare2": "91ow0h"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### ThirdMemberBind Operation. 新增用户身份提供商绑定数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/third/memberbind/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/json; charset=utf-8

**Description:** ThirdMemberBind Operation. 新增用户身份提供商绑定数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|主键ID|false|-
memberId|int64|会员ID|false|-
userId|string|用户ID|false|-
username|string|系统用户名，手机号|false|-
accountId|string|身份提供商ID|false|-
accountKey|string|第三方账号KEY，市民云、微信等的UnionId或OpenId|false|-
bindTime|string|绑定时间|false|-
additionInfo|string|附加信息|false|-
delFlag|int32|删除标记，0未删除1已删除|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/memberbind/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:01",
  "lastTime": "2026-11-09 17:58:01",
  "id": "25",
  "memberId": 355,
  "userId": "25",
  "username": "carola.harvey",
  "accountId": "25",
  "accountKey": "e7gavh",
  "bindTime": "2026-11-09 17:58:01",
  "additionInfo": "5ijwqb",
  "delFlag": 5,
  "description": "z6m4mv",
  "spare1": "9hsixv",
  "spare2": "6ifijy"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "ggo98c",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### ThirdMemberBind Operation. 修改用户身份提供商绑定数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/third/memberbind/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/json; charset=utf-8

**Description:** ThirdMemberBind Operation. 修改用户身份提供商绑定数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|string|主键ID|false|-
memberId|int64|会员ID|false|-
userId|string|用户ID|false|-
username|string|系统用户名，手机号|false|-
accountId|string|身份提供商ID|false|-
accountKey|string|第三方账号KEY，市民云、微信等的UnionId或OpenId|false|-
bindTime|string|绑定时间|false|-
additionInfo|string|附加信息|false|-
delFlag|int32|删除标记，0未删除1已删除|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/memberbind/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:58:01",
  "lastTime": "2026-11-09 17:58:01",
  "id": "25",
  "memberId": 319,
  "userId": "25",
  "username": "carola.harvey",
  "accountId": "25",
  "accountKey": "v4f10h",
  "bindTime": "2026-11-09 17:58:01",
  "additionInfo": "fw1wqx",
  "delFlag": 5,
  "description": "9nsb64",
  "spare1": "rkaouw",
  "spare2": "rkxi6t"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "fcia5b",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除用户身份提供商绑定数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/third/memberbind/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除用户身份提供商绑定数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|主键ID:null;1;1,2,3,[array of string]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/memberbind/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "h9o41y",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取我的绑定列表或分页, 返回ThirdMemberBind对象.
**URL:** https://linlan.net/eframe_backend/api/third/memberbind/mylist.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-13 16:58:20

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取我的绑定列表或分页, 返回ThirdMemberBind对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|string|主键ID|false|-
memberId|int64|会员ID|false|-
userId|string|用户ID|false|-
username|string|系统用户名，手机号|false|-
accountId|string|身份提供商ID|false|-
accountKey|string|第三方账号KEY，市民云、微信等的UnionId或OpenId|false|-
bindTime|string|绑定时间|false|-
additionInfo|string|附加信息|false|-
creatorId|string|创建人ID|false|-
delFlag|int32|删除标记，0未删除1已删除|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/memberbind/mylist.do?endTime=2026-11-09 17:56:55&delFlag=5&limit=10&additionInfo=e48dc4&bindTime=2026-11-09 17:58:01&id=25&q=7kcc72&memberId=354&userId=25&username=carola.harvey&orderBy=979&accountId=25&creatorId=25&spare1=likmyy&spare2=gcrc82&description=r1ogrq&page=1&accountKey=cemyco&startTime=2026-11-09 17:56:55
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|string|主键ID|-
└─memberId|int64|会员ID|-
└─userId|string|用户ID|-
└─username|string|系统用户名，手机号|-
└─accountId|string|身份提供商ID|-
└─accountKey|string|第三方账号KEY，市民云、微信等的UnionId或OpenId|-
└─bindTime|string|绑定时间|-
└─additionInfo|string|附加信息|-
└─delFlag|int32|删除标记，0未删除1已删除|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
└─openType|string|第三方平台|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:01",
      "lastTime": "2026-11-09 17:58:01",
      "id": "25",
      "memberId": 522,
      "userId": "25",
      "username": "carola.harvey",
      "accountId": "25",
      "accountKey": "khr27i",
      "bindTime": "2026-11-09 17:58:01",
      "additionInfo": "r36th6",
      "delFlag": 5,
      "description": "eelwpf",
      "spare1": "z405dr",
      "spare2": "m7l2y1",
      "openType": "jjeoju"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 第三方社交平台登录验证管理体系管理用户登录，覆盖系统管理员、各个角色岗位管理人员，执行第一步、第二步、第三步，无需进行人员信息添加，只需验证人员信息（暂时不考虑）会员体系管理用户登录，覆盖服务商工作人员、各类分组WEB端人员，执行第一步、第二步、第三步，无需进行人员信息添加，只需验证人员信息会员体系门户用户，覆盖网站一般用户、大屏一般用户、移动端一般用户，执行第一步、第二步、第四步、第三步，需要提前执行第四步，完成人员绑定
### 根据类型，获取授权请求，第一步
**URL:** https://linlan.net/eframe_backend/login/social/render/{source}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据类型，获取授权请求，第一步

**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
source|string|来源类型，dingtalk|true|-

**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/login/social/render/其他.do?writer.psOut.closing=true&writer.formatter.zero=s&writer.autoFlush=true&writer.psOut.textOut.nextChar=948&status=727&contentType=qp8ouq&writer.psOut.trouble=true&committed=true&writer.writeBuffer=0&writer.writeBuffer=0&writer.trouble=true&writer.psOut.closed=true&writer.psOut.autoFlush=true&writer.psOut.formatter.zero=f&characterEncoding=itr8xf&writer.formatter.lastException.detailMessage=success&bufferSize=10&writer.psOut.textOut.nChars=297
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "8odfs7",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据类型，获取授权请求，第二步
**URL:** https://linlan.net/eframe_backend/login/social/callback/{source}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据类型，获取授权请求，第二步

**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
source|string|来源类型，dingtalk|true|-

**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
code|string|No comments found.|false|-
auth_code|string|No comments found.|false|-
state|string|No comments found.|false|-
authorization_code|string|No comments found.|false|-
oauth_token|string|No comments found.|false|-
oauth_verifier|string|No comments found.|false|-

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/login/social/callback/其他.do?oauth_verifier=a1l8yr&authorization_code=12647&auth_code=12647&oauth_token=oinvv4&code=12647&state=ufbms9
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─view|object|No comments found.|-
└─model|object|No comments found.|-
└─status|object|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─5xxServerError|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─4xxClientError|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─3xxRedirection|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─2xxSuccessful|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─1xxInformational|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─error|boolean|No comments found.|-
└─cleared|boolean|No comments found.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{"success":true,"code":0,"msg":"正常","data":Forward or redirect to a page view.,"requestId":"25","timestamp":"2026-11-09 17:56:55"}
```

### 社交平台登录方法，第三步
**URL:** https://linlan.net/eframe_backend/login/social.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 社交平台登录方法，第三步

**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
platformType|string|开放平台类型|false|-
code|string|开放平台Code|false|-
state|string|state|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -i https://linlan.net/eframe_backend/login/social.do --data '{
  "platformType": "50qnse",
  "code": "12647",
  "state": "fz6jy8"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─userId|string|用户ID|-
└─token|string|令牌TOKEN|-
└─updateTime|string|更新时间|-
└─expireTime|string|过期时间|-
└─mobileConfirm|boolean|是否有手机号码|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "userId": "25",
    "token": "22n337",
    "updateTime": "2026-11-09 17:58:00",
    "expireTime": "2026-11-09 17:58:00",
    "mobileConfirm": true
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 第三方社交平台账号绑定，第四步
**URL:** https://linlan.net/eframe_backend/login/social/bind.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 第三方社交平台账号绑定，第四步

**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
platformType|string|开放平台类型|false|-
code|string|开放平台Code|false|-
state|string|状态信息|false|-
bindFrom|string|绑定来自，关联BindFromEnum, admin_work:管理WEB端;web:门户前台;h5:移动端前台;web_work:门户工作;h5_work:移动端工作;other:其他|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -i https://linlan.net/eframe_backend/login/social/bind.do --data '{
  "platformType": "i694p3",
  "code": "12647",
  "state": "n2hs13",
  "bindFrom": "xsct1t"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "3n1bhn",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 第三方社交平台账号解绑
**URL:** https://linlan.net/eframe_backend/login/social/unBind.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 第三方社交平台账号解绑

**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
platformType|string|开放平台类型|false|-
code|string|开放平台Code|false|-
state|string|状态信息|false|-
bindFrom|string|绑定来自，关联BindFromEnum, admin_work:管理WEB端;web:门户前台;h5:移动端前台;web_work:门户工作;h5_work:移动端工作;other:其他|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -i https://linlan.net/eframe_backend/login/social/unBind.do --data '{
  "platformType": "g5g06s",
  "code": "12647",
  "state": "0kr03n",
  "bindFrom": "fdixkp"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "bvaitc",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据来源类型，回收授权信息
**URL:** https://linlan.net/eframe_backend/login/social/revoke/{source}/{uuid}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据来源类型，回收授权信息

**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
source|string|来源类型，dingtalk|true|-
uuid|string|第三方用户ID|true|-

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/login/social/revoke/其他/1e3a83fa-00ad-4dec-9d63-bc67649e3d86.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "waring": "You may have used non-display generics."
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据来源类型，刷新access_token信息
**URL:** https://linlan.net/eframe_backend/login/social/refresh/{source}/{uuid}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据来源类型，刷新access_token信息

**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
source|string|来源类型，dingtalk|true|-
uuid|string|第三方用户ID|true|-

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/login/social/refresh/其他/1e3a83fa-00ad-4dec-9d63-bc67649e3d86.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─any object|object|any object.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {},
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 查看当前第三方授权用户列表
**URL:** https://linlan.net/eframe_backend/login/social/getAuthUsers.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 查看当前第三方授权用户列表

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/login/social/getAuthUsers.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─view|object|No comments found.|-
└─model|object|No comments found.|-
└─status|object|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─5xxServerError|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─4xxClientError|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─3xxRedirection|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─2xxSuccessful|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─1xxInformational|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─error|boolean|No comments found.|-
└─cleared|boolean|No comments found.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{"success":true,"code":0,"msg":"正常","data":Forward or redirect to a page view.,"requestId":"25","timestamp":"2026-11-09 17:56:55"}
```

### 获取通用用户信息
**URL:** https://linlan.net/eframe_backend/login/social/userInfo.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取通用用户信息

**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
source|string|   用户来源|true|-

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/login/social/userInfo.do?source=kbxw8v
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─user|object|当前用户|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|用户ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─userId|string|用户UUID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─xzqhId|int64|行政区划编号，用户来源地|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─source|string|创建来源类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─username|string|用户名，城市APP市民云的用户名|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─mobile|string|手机号码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─email|string|电子邮箱|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─password|string|密码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─foreignId|string|外键ID，人口库ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─accountId|string|身份提供商ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─accountType|string|开放平台认证平台类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─unionId|string|三方全局D|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─openId|string|开放平台ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nickName|string|昵称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─avatarUrl|string|头像|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─registerTime|string|注册时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastLoginTime|string|最后登录时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastLoginIp|string|最后登录IP|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─loginCount|int32|登录次数|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lockTime|string|锁定时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─activation|boolean|是否激活0否1是，是否需要更改密码0否1是|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─activationCode|string|激活代码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare1|string|备用1，第三方的平台的用户名，如随申办统一身份体系的用户名|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare2|string|备用2，第三方用户ID，OpenId|-
└─roles|array|角色集合|-
└─permissions|array|权限集合|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "user": {
      "id": 988,
      "userId": "25",
      "xzqhId": 205,
      "source": "sjyjfy",
      "username": "carola.harvey",
      "mobile": "337-229-9034",
      "email": "afton.goyette@gmail.com",
      "password": "22xvr8",
      "organId": "25",
      "foreignId": "25",
      "accountId": "25",
      "accountType": "009bin",
      "unionId": "25",
      "openId": "25",
      "nickName": "crysta.feeney",
      "avatarUrl": "www.hank-okon.com",
      "registerTime": "2026-11-09 17:58:00",
      "lastLoginTime": "2026-11-09 17:58:00",
      "lastLoginIp": "79.62.69.121",
      "loginCount": 482,
      "lockTime": "2026-11-09 17:58:00",
      "activation": true,
      "activationCode": "12647",
      "priority": 879,
      "createTime": "2026-11-09 17:58:00",
      "delFlag": 5,
      "description": "9dt06e",
      "spare1": "71v507",
      "spare2": "r1lsj4"
    },
    "roles": [
      867
    ],
    "permissions": [
      "a8x2oh"
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取工作用户信息，包含用户权限菜单和角色
**URL:** https://linlan.net/eframe_backend/login/social/workUserInfo.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取工作用户信息，包含用户权限菜单和角色

**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
source|string|   用户来源|true|-

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/login/social/workUserInfo.do?source=tozqtt
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─user|object|当前用户|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─id|int64|用户ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─userId|string|用户UUID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─xzqhId|int64|行政区划编号，用户来源地|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─source|string|创建来源类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─username|string|用户名，城市APP市民云的用户名|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─mobile|string|手机号码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─email|string|电子邮箱|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─password|string|密码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─organId|string|机构ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─foreignId|string|外键ID，人口库ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─accountId|string|身份提供商ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─accountType|string|开放平台认证平台类型|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─unionId|string|三方全局D|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─openId|string|开放平台ID|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nickName|string|昵称|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─avatarUrl|string|头像|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─registerTime|string|注册时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastLoginTime|string|最后登录时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastLoginIp|string|最后登录IP|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─loginCount|int32|登录次数|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lockTime|string|锁定时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─activation|boolean|是否激活0否1是，是否需要更改密码0否1是|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─activationCode|string|激活代码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─priority|int32|排序|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─createTime|string|创建时间|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─description|string|描述|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare1|string|备用1，第三方的平台的用户名，如随申办统一身份体系的用户名|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─spare2|string|备用2，第三方用户ID，OpenId|-
└─roles|array|角色集合|-
└─permissions|array|权限集合|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "user": {
      "id": 240,
      "userId": "25",
      "xzqhId": 277,
      "source": "tai82d",
      "username": "carola.harvey",
      "mobile": "337-229-9034",
      "email": "afton.goyette@gmail.com",
      "password": "z0tzoy",
      "organId": "25",
      "foreignId": "25",
      "accountId": "25",
      "accountType": "s9lhkr",
      "unionId": "25",
      "openId": "25",
      "nickName": "crysta.feeney",
      "avatarUrl": "www.hank-okon.com",
      "registerTime": "2026-11-09 17:58:00",
      "lastLoginTime": "2026-11-09 17:58:00",
      "lastLoginIp": "79.62.69.121",
      "loginCount": 600,
      "lockTime": "2026-11-09 17:58:00",
      "activation": true,
      "activationCode": "12647",
      "priority": 287,
      "createTime": "2026-11-09 17:58:00",
      "delFlag": 5,
      "description": "gffeu3",
      "spare1": "ay51nz",
      "spare2": "5szfnj"
    },
    "roles": [
      302
    ],
    "permissions": [
      "w5ixci"
    ]
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 调度任务信息操作处理
### 查询定时任务列表
**URL:** https://linlan.net/eframe_backend/api/monitor/job/list.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 查询定时任务列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
jobId|int64|任务ID|false|-
jobName|string|任务名称|false|-
jobGroup|string|任务组名|false|-
invokeTarget|string|调用目标字符串|false|-
cronExpression|string|cron执行表达式|false|-
misfirePolicy|string|cron计划策略|false|-
concurrent|string|是否并发执行（0允许 1禁止）|false|-
status|int32|任务状态（0正常 1暂停）|false|-
remark|string|备注|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/job/list.do?jobName=carola.harvey&status=557&invokeTarget=gyzjax&jobGroup=euv1ho&jobId=503&misfirePolicy=gu5y15&cronExpression=39g44w&concurrent=ricytw&remark=lrz43l
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─jobId|string|任务ID|-
└─jobName|string|任务名称|-
└─jobGroup|string|任务组名|-
└─invokeTarget|string|调用目标字符串|-
└─cronExpression|string|cron执行表达式|-
└─misfirePolicy|string|cron计划策略|-
└─concurrent|string|是否并发执行（0允许 1禁止）|-
└─status|int32|任务状态（0正常 1暂停）|-
└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "jobId": "25",
      "jobName": "carola.harvey",
      "jobGroup": "nmzs0i",
      "invokeTarget": "br1qmb",
      "cronExpression": "q8s66j",
      "misfirePolicy": "giags0",
      "concurrent": "z5zbf4",
      "status": 57,
      "remark": "rma2wm"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 导出定时任务列表
**URL:** https://linlan.net/eframe_backend/api/monitor/job/export.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 导出定时任务列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
jobId|int64|任务ID|false|-
jobName|string|任务名称|false|-
jobGroup|string|任务组名|false|-
invokeTarget|string|调用目标字符串|false|-
cronExpression|string|cron执行表达式|false|-
misfirePolicy|string|cron计划策略|false|-
concurrent|string|是否并发执行（0允许 1禁止）|false|-
status|int32|任务状态（0正常 1暂停）|false|-
remark|string|备注|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/job/export.do --data 'writer.psOut.closed=true&writer.psOut.textOut.nextChar=991&writer.psOut.trouble=true&writer.formatter.lastException.detailMessage=success&bufferSize=10&committed=true&writer.writeBuffer=5&writer.writeBuffer=5&writer.autoFlush=true&jobId=229&invokeTarget=fcuksw&contentType=lzthuw&cronExpression=57q7ew&status=733&writer.psOut.closing=true&writer.formatter.zero=7&status=421&jobName=carola.harvey&writer.psOut.autoFlush=true&misfirePolicy=e72hbg&concurrent=qi2cj0&jobGroup=kq9q38&writer.psOut.formatter.zero=r&remark=pjmp23&writer.psOut.textOut.nChars=563&characterEncoding=v71ekl&writer.trouble=true'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "4c39jm",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 获取定时任务详细信息
**URL:** https://linlan.net/eframe_backend/api/monitor/job/{jobId}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 获取定时任务详细信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
jobId|string|    任务ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/job/25.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─jobId|string|任务ID|-
└─jobName|string|任务名称|-
└─jobGroup|string|任务组名|-
└─invokeTarget|string|调用目标字符串|-
└─cronExpression|string|cron执行表达式|-
└─misfirePolicy|string|cron计划策略|-
└─concurrent|string|是否并发执行（0允许 1禁止）|-
└─status|int32|任务状态（0正常 1暂停）|-
└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "jobId": "25",
    "jobName": "carola.harvey",
    "jobGroup": "6v8w4f",
    "invokeTarget": "sb352q",
    "cronExpression": "ghvhem",
    "misfirePolicy": "6o10ua",
    "concurrent": "naiiad",
    "status": 839,
    "remark": "jjhjor"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 新增定时任务
**URL:** https://linlan.net/eframe_backend/api/monitor/job/save.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 新增定时任务

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
jobId|string|任务ID|false|-
jobName|string|任务名称|false|-
jobGroup|string|任务组名|false|-
invokeTarget|string|调用目标字符串|false|-
cronExpression|string|cron执行表达式|false|-
misfirePolicy|string|cron计划策略|false|-
concurrent|string|是否并发执行（0允许 1禁止）|false|-
status|int32|任务状态（0正常 1暂停）|false|-
remark|string|备注|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/job/save.do --data '{
  "jobId": "25",
  "jobName": "carola.harvey",
  "jobGroup": "qlhrju",
  "invokeTarget": "l8z3qc",
  "cronExpression": "fsoffl",
  "misfirePolicy": "2oe5ob",
  "concurrent": "wgfuou",
  "status": 30,
  "remark": "526v8j"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "i5donl",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 修改定时任务
**URL:** https://linlan.net/eframe_backend/api/monitor/job/update.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 修改定时任务

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
jobId|string|任务ID|false|-
jobName|string|任务名称|false|-
jobGroup|string|任务组名|false|-
invokeTarget|string|调用目标字符串|false|-
cronExpression|string|cron执行表达式|false|-
misfirePolicy|string|cron计划策略|false|-
concurrent|string|是否并发执行（0允许 1禁止）|false|-
status|int32|任务状态（0正常 1暂停）|false|-
remark|string|备注|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/job/update.do --data '{
  "jobId": "25",
  "jobName": "carola.harvey",
  "jobGroup": "ol007v",
  "invokeTarget": "32vosm",
  "cronExpression": "46zsqu",
  "misfirePolicy": "l5cmq3",
  "concurrent": "taxssv",
  "status": 643,
  "remark": "27i7rs"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "i9ind0",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 定时任务状态修改
**URL:** https://linlan.net/eframe_backend/api/monitor/job/changeStatus.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 定时任务状态修改

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
jobId|string|任务ID|false|-
jobName|string|任务名称|false|-
jobGroup|string|任务组名|false|-
invokeTarget|string|调用目标字符串|false|-
cronExpression|string|cron执行表达式|false|-
misfirePolicy|string|cron计划策略|false|-
concurrent|string|是否并发执行（0允许 1禁止）|false|-
status|int32|任务状态（0正常 1暂停）|false|-
remark|string|备注|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/job/changeStatus.do --data '{
  "jobId": "25",
  "jobName": "carola.harvey",
  "jobGroup": "udbhny",
  "invokeTarget": "h6q08k",
  "cronExpression": "u8uhpu",
  "misfirePolicy": "is1bbb",
  "concurrent": "q0rmrm",
  "status": 101,
  "remark": "61hodp"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "lrafgo",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 定时任务立即执行一次
**URL:** https://linlan.net/eframe_backend/api/monitor/job/run.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/json; charset=utf-8

**Description:** 定时任务立即执行一次

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
jobId|string|任务ID|false|-
jobName|string|任务名称|false|-
jobGroup|string|任务组名|false|-
invokeTarget|string|调用目标字符串|false|-
cronExpression|string|cron执行表达式|false|-
misfirePolicy|string|cron计划策略|false|-
concurrent|string|是否并发执行（0允许 1禁止）|false|-
status|int32|任务状态（0正常 1暂停）|false|-
remark|string|备注|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/job/run.do --data '{
  "jobId": "25",
  "jobName": "carola.harvey",
  "jobGroup": "damxw4",
  "invokeTarget": "vstobo",
  "cronExpression": "tzigei",
  "misfirePolicy": "7vtky5",
  "concurrent": "h9v92b",
  "status": 666,
  "remark": "pvfmic"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "wiv8ys",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除定时任务
**URL:** https://linlan.net/eframe_backend/api/monitor/job/{jobIds}.do

**Type:** DELETE

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除定时任务

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
jobIds|array|   任务Ids,[array of string]|true|

**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/job/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "il0doz",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 调度日志操作处理
### 查询定时任务调度日志列表
**URL:** https://linlan.net/eframe_backend/api/monitor/joblog/list.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 查询定时任务调度日志列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
jobLogId|int64|ID|false|-
jobId|string|No comments found.|false|-
jobName|string|任务名称|false|-
jobGroup|string|任务组名|false|-
invokeTarget|string|调用目标字符串|false|-
jobMessage|string|日志信息|false|-
status|int32|执行状态（0正常 1失败）|false|-
exceptionInfo|string|异常信息|false|-
startTime|string|开始时间|false|-
stopTime|string|停止时间|false|-
remark|string|备注|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/joblog/list.do?status=93&invokeTarget=zoext8&createTime=2026-11-09 17:58:01&exceptionInfo=rf68rj&stopTime=2026-11-09 17:58:01&jobLogId=423&lastTime=2026-11-09 17:58:01&jobId=25&jobMessage=success&startTime=2026-11-09 17:58:01&jobGroup=45bk4a&remark=ah3wlg&creatorId=25&jobName=carola.harvey
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─jobLogId|string|ID|-
└─jobId|string|No comments found.|-
└─jobMessage|string|日志信息|-
└─status|int32|执行状态（0正常 1失败）|-
└─exceptionInfo|string|异常信息|-
└─startTime|string|开始时间|-
└─stopTime|string|停止时间|-
└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:58:01",
      "lastTime": "2026-11-09 17:58:01",
      "jobLogId": "25",
      "jobId": "25",
      "jobMessage": "success",
      "status": 85,
      "exceptionInfo": "e4axkz",
      "startTime": "2026-11-09 17:58:01",
      "stopTime": "2026-11-09 17:58:01",
      "remark": "x2s6ci"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 导出定时任务调度日志列表
**URL:** https://linlan.net/eframe_backend/api/monitor/joblog/export.do

**Type:** POST

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 导出定时任务调度日志列表

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
trailerFields|object|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
bufferSize|int32|No comments found.|false|-
writer|object|No comments found.|false|-
└─writeBuffer|array|No comments found.|false|-
└─lock|object|No comments found.|false|-
└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
└─autoFlush|boolean|No comments found.|false|-
└─trouble|boolean|No comments found.|false|-
└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─detailMessage|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cause|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─stackTrace|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─suppressedExceptions|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closed|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closeLock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─a|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─l|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lastException|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─zero|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─textOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─cb|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nChars|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─nextChar|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─charOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─se|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─closing|boolean|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
jobLogId|int64|ID|false|-
jobId|string|No comments found.|false|-
jobName|string|任务名称|false|-
jobGroup|string|任务组名|false|-
invokeTarget|string|调用目标字符串|false|-
jobMessage|string|日志信息|false|-
status|int32|执行状态（0正常 1失败）|false|-
exceptionInfo|string|异常信息|false|-
startTime|string|开始时间|false|-
stopTime|string|停止时间|false|-
remark|string|备注|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/joblog/export.do --data 'jobGroup=uw4z89&writer.writeBuffer=r&writer.writeBuffer=r&writer.trouble=true&committed=true&stopTime=2026-11-09 17:58:01&writer.formatter.zero=5&creatorId=25&writer.formatter.lastException.detailMessage=success&contentType=m53pdi&createTime=2026-11-09 17:58:01&writer.psOut.closed=true&lastTime=2026-11-09 17:58:01&writer.psOut.textOut.nChars=778&jobId=25&characterEncoding=wj8hay&status=14&writer.psOut.formatter.zero=5&jobName=carola.harvey&exceptionInfo=udlp30&startTime=2026-11-09 17:58:01&jobLogId=394&writer.psOut.textOut.nextChar=120&jobMessage=success&invokeTarget=31gqg9&writer.psOut.trouble=true&remark=0u8yz4&status=890&writer.psOut.closing=true&bufferSize=10&writer.autoFlush=true&writer.psOut.autoFlush=true'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "x88k5b",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 根据调度编号获取详细信息
**URL:** https://linlan.net/eframe_backend/api/monitor/joblog/{jobLogId}.do

**Type:** GET

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 根据调度编号获取详细信息

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
jobLogId|string|    任务日志ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/joblog/25.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─jobLogId|string|ID|-
└─jobId|string|No comments found.|-
└─jobMessage|string|日志信息|-
└─status|int32|执行状态（0正常 1失败）|-
└─exceptionInfo|string|异常信息|-
└─startTime|string|开始时间|-
└─stopTime|string|停止时间|-
└─remark|string|备注|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:58:02",
    "lastTime": "2026-11-09 17:58:02",
    "jobLogId": "25",
    "jobId": "25",
    "jobMessage": "success",
    "status": 178,
    "exceptionInfo": "enhp7z",
    "startTime": "2026-11-09 17:58:02",
    "stopTime": "2026-11-09 17:58:02",
    "remark": "gsijbj"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### 删除定时任务调度日志
**URL:** https://linlan.net/eframe_backend/api/monitor/joblog/{jobLogIds}.do

**Type:** DELETE

**Author:** Linlan

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** 删除定时任务调度日志

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
jobLogIds|array|    任务日志Ids,[array of string]|true|

**Request-example:**
```
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/joblog/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "509jwc",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 邮件发送记录读写控制类
### Get MailSendRecord list. 获取邮件发送记录列表或分页, 返回MailSendRecord对象.
**URL:** https://linlan.net/eframe_backend/api/store/mailsendrecord/list.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-15 14:09:40

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get MailSendRecord list. 获取邮件发送记录列表或分页, 返回MailSendRecord对象.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Query-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
q|string|关键字：查询输入条件q，可匹配name、title、keywords等文本信息|false|-
orderBy|int32|排序，默认主键倒序|false|-
startTime|string|开始时间|false|-
endTime|string|结束时间|false|-
page|int32|分页信息：默认第1页|false|-
limit|int32|分页每页条数，默认10条|false|-
id|int64|主键ID|false|-
appId|string|应用ID|false|-
providerId|string|邮件提供商ID，平台ID|false|-
providerName|string|邮件提供商名称，平台名称|false|-
foreignId|string|外键ID|false|-
senderName|string|发送信息者名称，后台用户则管理员，会员则会员名称，企业会员则号名称|false|-
receiverEmail|string|接收人ID，邮箱地址|false|-
receiverName|string|接收人|false|-
bizType|string|业务类型|false|-
title|string|信息标题，主题|false|-
content|string|信息内容|false|-
msgUrl|string|信息链接，链接平台内地址，可点击访问|false|-
status|string|信息状态|false|-
sendTime|string|发送时间|false|-
sendStatus|string|发送状态(0草稿1已发)|false|-
readTime|string|阅读时间|false|-
readStatus|string|信息状态(0未读1已读2全组已读)|false|-
creatorId|string|创建者ID|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/store/mailsendrecord/list.do?spare2=u5soiy&receiverEmail=afton.goyette@gmail.com&providerName=carola.harvey&bizType=i48vek&readTime=2026-11-09 17:57:59&readStatus=ylc1s8&orderBy=135&spare1=8e9n6w&sendTime=2026-11-09&page=1&sendStatus=cuh42k&msgUrl=www.hank-okon.com&limit=10&delFlag=5&endTime=2026-11-09 17:56:55&appId=25&status=3ae9uf&providerId=25&description=pl1dpq&receiverName=carola.harvey&creatorId=25&startTime=2026-11-09 17:56:55&senderName=carola.harvey&content=27ljoo&id=683&foreignId=25&title=nruepv&q=kgqfxr
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|array|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|主键ID|-
└─appId|string|应用ID|-
└─providerId|string|邮件提供商ID，平台ID|-
└─providerName|string|邮件提供商名称，平台名称|-
└─foreignId|string|外键ID|-
└─senderName|string|发送信息者名称，后台用户则管理员，会员则会员名称，企业会员则号名称|-
└─receiverEmail|string|接收人ID，邮箱地址|-
└─receiverName|string|接收人|-
└─bizType|string|业务类型|-
└─title|string|信息标题，主题|-
└─content|string|信息内容|-
└─msgUrl|string|信息链接，链接平台内地址，可点击访问|-
└─status|string|信息状态|-
└─sendTime|string|发送时间|-
└─sendStatus|string|发送状态(0草稿1已发)|-
└─readTime|string|阅读时间|-
└─readStatus|string|信息状态(0未读1已读2全组已读)|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": [
    {
      "creatorId": "25",
      "createTime": "2026-11-09 17:57:59",
      "lastTime": "2026-11-09 17:57:59",
      "id": 501,
      "appId": "25",
      "providerId": "25",
      "providerName": "carola.harvey",
      "foreignId": "25",
      "senderName": "carola.harvey",
      "receiverEmail": "afton.goyette@gmail.com",
      "receiverName": "carola.harvey",
      "bizType": "c8ev2v",
      "title": "8wxb7f",
      "content": "ivjeam",
      "msgUrl": "www.hank-okon.com",
      "status": "25glaq",
      "sendTime": "2026-11-09",
      "sendStatus": "nrsauc",
      "readTime": "2026-11-09 17:57:59",
      "readStatus": "e0g6qq",
      "delFlag": 5,
      "description": "2zpskk",
      "spare1": "q7j2vz",
      "spare2": "u5a8ll"
    }
  ],
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### Get MailSendRecord by id. 主键获取邮件发送记录详细信息.
**URL:** https://linlan.net/eframe_backend/api/store/mailsendrecord/{id}.do

**Type:** GET

**Author:** Linlan
CreateTime 2025-10-15 14:09:40

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** Get MailSendRecord by id. 主键获取邮件发送记录详细信息.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
id|int64|主键ID|true|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/store/mailsendrecord/1.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
└─creatorId|string|创建人id|-
└─createTime|string|创建时间|-
└─lastTime|string|最后修改时间|-
└─id|int64|主键ID|-
└─appId|string|应用ID|-
└─providerId|string|邮件提供商ID，平台ID|-
└─providerName|string|邮件提供商名称，平台名称|-
└─foreignId|string|外键ID|-
└─senderName|string|发送信息者名称，后台用户则管理员，会员则会员名称，企业会员则号名称|-
└─receiverEmail|string|接收人ID，邮箱地址|-
└─receiverName|string|接收人|-
└─bizType|string|业务类型|-
└─title|string|信息标题，主题|-
└─content|string|信息内容|-
└─msgUrl|string|信息链接，链接平台内地址，可点击访问|-
└─status|string|信息状态|-
└─sendTime|string|发送时间|-
└─sendStatus|string|发送状态(0草稿1已发)|-
└─readTime|string|阅读时间|-
└─readStatus|string|信息状态(0未读1已读2全组已读)|-
└─delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|-
└─description|string|备注|-
└─spare1|string|备用1|-
└─spare2|string|备用2|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": {
    "creatorId": "25",
    "createTime": "2026-11-09 17:57:59",
    "lastTime": "2026-11-09 17:57:59",
    "id": 299,
    "appId": "25",
    "providerId": "25",
    "providerName": "carola.harvey",
    "foreignId": "25",
    "senderName": "carola.harvey",
    "receiverEmail": "afton.goyette@gmail.com",
    "receiverName": "carola.harvey",
    "bizType": "0ltb82",
    "title": "p3kyio",
    "content": "19r2oz",
    "msgUrl": "www.hank-okon.com",
    "status": "pzxufc",
    "sendTime": "2026-11-09",
    "sendStatus": "0f17ak",
    "readTime": "2026-11-09 17:57:59",
    "readStatus": "devpvo",
    "delFlag": 5,
    "description": "r1cov9",
    "spare1": "umrbby",
    "spare2": "2tjseh"
  },
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### MailSendRecord Operation. 新增邮件发送记录数据操作逻辑，根据操作类型，执行新增操作.
**URL:** https://linlan.net/eframe_backend/api/store/mailsendrecord/save.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-15 14:09:40

**Content-Type:** application/json; charset=utf-8

**Description:** MailSendRecord Operation. 新增邮件发送记录数据操作逻辑，根据操作类型，执行新增操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|主键ID|false|-
appId|string|应用ID|false|-
providerId|string|邮件提供商ID，平台ID|false|-
providerName|string|邮件提供商名称，平台名称|false|-
foreignId|string|外键ID|false|-
senderName|string|发送信息者名称，后台用户则管理员，会员则会员名称，企业会员则号名称|false|-
receiverEmail|string|接收人ID，邮箱地址|false|-
receiverName|string|接收人|false|-
bizType|string|业务类型|false|-
title|string|信息标题，主题|false|-
content|string|信息内容|false|-
msgUrl|string|信息链接，链接平台内地址，可点击访问|false|-
status|string|信息状态|false|-
sendTime|string|发送时间|false|-
sendStatus|string|发送状态(0草稿1已发)|false|-
readTime|string|阅读时间|false|-
readStatus|string|信息状态(0未读1已读2全组已读)|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/store/mailsendrecord/save.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:57:59",
  "lastTime": "2026-11-09 17:57:59",
  "id": 744,
  "appId": "25",
  "providerId": "25",
  "providerName": "carola.harvey",
  "foreignId": "25",
  "senderName": "carola.harvey",
  "receiverEmail": "afton.goyette@gmail.com",
  "receiverName": "carola.harvey",
  "bizType": "z8zx92",
  "title": "g69i2v",
  "content": "d0k3g2",
  "msgUrl": "www.hank-okon.com",
  "status": "pau3h8",
  "sendTime": "2026-11-09",
  "sendStatus": "kd5u7l",
  "readTime": "2026-11-09 17:57:59",
  "readStatus": "i2145b",
  "delFlag": 5,
  "description": "68a6sf",
  "spare1": "poedmb",
  "spare2": "75pvb2"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "tednro",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### MailSendRecord Operation. 修改邮件发送记录数据操作逻辑，根据操作类型，执行修改操作.
**URL:** https://linlan.net/eframe_backend/api/store/mailsendrecord/update.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-15 14:09:40

**Content-Type:** application/json; charset=utf-8

**Description:** MailSendRecord Operation. 修改邮件发送记录数据操作逻辑，根据操作类型，执行修改操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Body-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
creatorId|string|创建人id|false|-
createTime|string|创建时间|false|-
lastTime|string|最后修改时间|false|-
id|int64|主键ID|false|-
appId|string|应用ID|false|-
providerId|string|邮件提供商ID，平台ID|false|-
providerName|string|邮件提供商名称，平台名称|false|-
foreignId|string|外键ID|false|-
senderName|string|发送信息者名称，后台用户则管理员，会员则会员名称，企业会员则号名称|false|-
receiverEmail|string|接收人ID，邮箱地址|false|-
receiverName|string|接收人|false|-
bizType|string|业务类型|false|-
title|string|信息标题，主题|false|-
content|string|信息内容|false|-
msgUrl|string|信息链接，链接平台内地址，可点击访问|false|-
status|string|信息状态|false|-
sendTime|string|发送时间|false|-
sendStatus|string|发送状态(0草稿1已发)|false|-
readTime|string|阅读时间|false|-
readStatus|string|信息状态(0未读1已读2全组已读)|false|-
delFlag|int32|删除标记0正常1已删除2应用内受限3回收站|false|-
description|string|备注|false|-
spare1|string|备用1|false|-
spare2|string|备用2|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/store/mailsendrecord/update.do --data '{
  "creatorId": "25",
  "createTime": "2026-11-09 17:57:59",
  "lastTime": "2026-11-09 17:57:59",
  "id": 785,
  "appId": "25",
  "providerId": "25",
  "providerName": "carola.harvey",
  "foreignId": "25",
  "senderName": "carola.harvey",
  "receiverEmail": "afton.goyette@gmail.com",
  "receiverName": "carola.harvey",
  "bizType": "y2xsvt",
  "title": "7mexlz",
  "content": "fw3zae",
  "msgUrl": "www.hank-okon.com",
  "status": "sa1ozk",
  "sendTime": "2026-11-09",
  "sendStatus": "ltph1i",
  "readTime": "2026-11-09 17:57:59",
  "readStatus": "akb8a2",
  "delFlag": 5,
  "description": "jar9x3",
  "spare1": "9b7p2i",
  "spare2": "hwf1ee"
}'
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "9z1fid",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

### MailSendRecord Operation. 删除邮件发送记录数据操作逻辑，根据操作类型，执行删除操作.
**URL:** https://linlan.net/eframe_backend/api/store/mailsendrecord/delete/{ids}.do

**Type:** POST

**Author:** Linlan
CreateTime 2025-10-15 14:09:40

**Content-Type:** application/x-www-form-urlencoded;charset=utf-8

**Description:** MailSendRecord Operation. 删除邮件发送记录数据操作逻辑，根据操作类型，执行删除操作.

**Request-headers:**

Header | Type|Description|Required|Since
---|---|---|---|----
token|string|令牌|true|-


**Path-parameters:**

Parameter | Type|Description|Required|Since
---|---|---|---|---
ids|array|主键ID:null;1;1,2,3,[array of int64]|true|

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/store/mailsendrecord/delete/.do
```
**Response-fields:**

Field | Type|Description|Since
---|---|---|---
success|boolean|成功标记:正常为true,错误为false|-
code|int32|返回状态码:正常状态为0|-
msg|string|返回消息|-
data|object|返回数据对象|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{
  "success": true,
  "code": 0,
  "msg": "正常",
  "data": "0prtux",
  "requestId": "25",
  "timestamp": "2026-11-09 17:56:55"
}
```

## 错误码列表
Error code |Description
---|---
3100700|Token Error[TOKEN信息错误]
3100701|Input Error Code[信息传入有误(code)]
3100702|Input Error Source[信息传入有误(source)]
3100703|Account Not Exist[对接平台账户不存在]
3100704|Channel Not Exist[该栏目版面不存在]
3100705|Parameter Error[传递参数信息错误]
3100706|Network Error[网络异常，请联系系统管理员]
3100721|Third Info Error[第三方数据信息验证失败]
3100731|IP Whitelist Error[白名单校验失败]
3100741|Info Send Fail[消息推送失败]
3101001|Error User Info[用户数据信息验证失败]
3101002|Error User SSO[SSO用户数据信息验证失败]
3101003|Error User APP[APP用户数据信息验证失败]
3101004|Error User APP Step1[APP用户在调取第三方接口时失败]
3101005|Error User APP Step2[APP用户数据调取第三方接口成功但是返回的数据不正确]
3101006|Error User Out[外部用户数据信息验证失败]
3101011|Error User Key[用户关键信息错误]
3101012|Error User Password[用户密码信息错误]
3101013|Error User Real Name[需要实名认证绑定]
3101014|Error User Need Login[请用户重新登录]
3101015|Error User Need Face[需要人脸识别二次认证]
3101016|Error User Identity[认证失败，请重新认证]
3101017|Error User Face[人脸识别信息与系统不一致]
3101018|Error User Need Reg[用户信息未注册，请注册]
3101019|Error Params Mate[传参不匹配]
3101020|Error Return Many[查询出多条数据]
3101021|Error Number Format[数字格式转换异常]
3101022|Error Data Duplicate[数据重复]
3101023|Error Data Format[数据格式错误]
3101024|Error Data[数据错误]
3101101|Error Address Invalid[无效访问地址]
3101102|Error With Upload[上传出现错误，请联系管理员]
3101103|Error With Input填写信息错误，请检查]
3101104|Error With Password[密码必须为大小写字母,数字,特殊字符中的至少3种且8位-20位之内]
3101201|Error With Enterprise Info[企业关键信息错误]
3101202|Error With Not Initial[关键信息未初始化]
3101301|Error Template Info[模板信息错误]

## 数据字典
### 目录树结构字典

Code |Type|Description
---|---|---
ROLE|string|角色树
MENU|string|菜单树
ALL_POSITION|string|全部岗位树
POSITION|string|岗位树
SINGLE_POSITION|string|单表岗位树
ALL_MENU|string|全部菜单树
ALL_DEPT|string|全部部门树
BASE_XZQH|string|行政区划树
COM_DIC_ECOINDUSTRY|string|所属行业树
CORE_DEPTTYPE|string|条线部门树
CORE_ORGTYPE|string|机构分类树
