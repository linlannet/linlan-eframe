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
any object|object|any object.|false|-

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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/list.do?fileSize=940&fileExtension=0bkzvl&refId=68&key=8g05qs&page=1&startTime=2026-09-04 00:07:57&fileIsvalid=true&limit=10&appId=68&resclassId=68&fileName=damien.dietrich&orderBy=216&refType=4elda5&endTime=2026-09-04 00:07:57&q=fuci4z
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
    "totalCount": 617,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "id": "68",
        "resclassId": "68",
        "fileName": "damien.dietrich",
        "fileIsvalid": true,
        "createTime": "2026-09-04 00:09:24",
        "fileExtension": "p6y3ka",
        "ids": [
          "z5b630"
        ]
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/export.do --data 'characterEncoding=j7nobh&writer.psOut.closed=true&q=z0uchr&fileSize=663&resclassId=68&refId=68&contentType=5fhq6v&writer.psOut.trouble=true&writer.formatter.lastException.detailMessage=success&writer.psOut.closing=true&fileName=damien.dietrich&writer.formatter.zero=3&writer.psOut.textOut.nextChar=979&startTime=2026-09-04 00:07:57&appId=68&writer.autoFlush=true&committed=true&limit=10&writer.writeBuffer=2&writer.writeBuffer=2&writer.trouble=true&endTime=2026-09-04 00:07:57&orderBy=15&writer.psOut.autoFlush=true&writer.psOut.formatter.zero=s&fileExtension=m9t8iu&refType=1duqko&bufferSize=10&key=sflnde&status=537&fileIsvalid=true&page=1&writer.psOut.textOut.nChars=935'
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
  "data": "rcs9ya",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/info.do?id=68
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
    "id": "68",
    "resclassId": "68",
    "fileName": "damien.dietrich",
    "fileIsvalid": true,
    "createTime": "2026-09-04 00:09:24",
    "fileExtension": "83id0k",
    "ids": [
      "6hji32"
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "id": "68",
  "resclassId": "68",
  "fileName": "damien.dietrich",
  "fileIsvalid": true,
  "createTime": "2026-09-04 00:09:24",
  "fileExtension": "00752j",
  "ids": [
    "o5i25i"
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
  "data": "nzlft2",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "id": "68",
  "resclassId": "68",
  "fileName": "damien.dietrich",
  "fileIsvalid": true,
  "createTime": "2026-09-04 00:09:24",
  "fileExtension": "m4spz6",
  "ids": [
    "p25j4l"
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
  "data": "wksw31",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "id": "68",
  "resclassId": "68",
  "fileName": "damien.dietrich",
  "fileIsvalid": true,
  "createTime": "2026-09-04 00:09:24",
  "fileExtension": "iakvy4",
  "ids": [
    "kjle9s"
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
  "data": "tg5czn",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "1guf86",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
method|string|No comments found.|false|-
parts|array|No comments found.|false|-
headerNames|object|No comments found.|false|-
session|object|No comments found.|false|-
└─id|string|No comments found.|false|-
└─creationTime|int64|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─lastAccessedTime|int64|No comments found.|false|-
└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
└─new|boolean|No comments found.|false|-
└─maxInactiveInterval|int32|No comments found.|false|-
userPrincipal|object|No comments found.|false|-
└─name|string|No comments found.|false|-
trailerFields|map|No comments found.|false|-
└─any object|object|any object.|false|-
cookies|array|No comments found.|false|-
└─name|string|No comments found.|false|-
└─value|string|No comments found.|false|-
└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
queryString|string|No comments found.|false|-
authType|string|No comments found.|false|-
contextPath|string|No comments found.|false|-
requestURI|string|No comments found.|false|-
pathTranslated|string|No comments found.|false|-
servletPath|string|No comments found.|false|-
pathInfo|string|No comments found.|false|-
remoteUser|string|No comments found.|false|-
requestURL|object|No comments found.|false|-
└─empty|boolean|No comments found.|false|-
└─value|array|No comments found.|false|-
└─coder|int8|No comments found.|false|-
└─count|int32|No comments found.|false|-
requestedSessionId|string|No comments found.|false|-
requestedSessionIdFromCookie|boolean|No comments found.|false|-
requestedSessionIdValid|boolean|No comments found.|false|-
httpServletMapping|object|No comments found.|false|-
└─pattern|string|No comments found.|false|-
└─mappingMatch|enum|null<br/>CONTEXT_ROOT<br/>DEFAULT<br/>EXACT<br/>EXTENSION<br/>PATH<br/>|false|-
└─servletName|string|No comments found.|false|-
└─matchValue|string|No comments found.|false|-
requestedSessionIdFromURL|boolean|No comments found.|false|-
trailerFieldsReady|boolean|No comments found.|false|-
scheme|string|No comments found.|false|-
inputStream|object|No comments found.|false|-
protocol|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentLength|int32|No comments found.|false|-
contentLengthLong|int64|No comments found.|false|-
contentType|string|No comments found.|false|-
localName|string|No comments found.|false|-
attributeNames|object|No comments found.|false|-
parameterMap|map|No comments found.|false|-
└─any object|object|any object.|false|-
parameterNames|object|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
remotePort|int32|No comments found.|false|-
localPort|int32|No comments found.|false|-
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
secure|boolean|No comments found.|false|-
locales|object|No comments found.|false|-
localAddr|string|No comments found.|false|-
servletContext|object|No comments found.|false|-
└─classLoader|object|No comments found.|false|-
└─majorVersion|int32|No comments found.|false|-
└─minorVersion|int32|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─sessionTimeout|int32|No comments found.|false|-
└─contextPath|string|No comments found.|false|-
└─serverInfo|string|No comments found.|false|-
└─effectiveMinorVersion|int32|No comments found.|false|-
└─initParameterNames|object|No comments found.|false|-
└─effectiveMajorVersion|int32|No comments found.|false|-
└─servletContextName|string|No comments found.|false|-
└─defaultSessionTrackingModes|array|No comments found.|false|-
└─effectiveSessionTrackingModes|array|No comments found.|false|-
└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
└─requestCharacterEncoding|string|No comments found.|false|-
└─virtualServerName|string|No comments found.|false|-
└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─responseCharacterEncoding|string|No comments found.|false|-
└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
remoteHost|string|No comments found.|false|-
serverPort|int32|No comments found.|false|-
serverName|string|No comments found.|false|-
remoteAddr|string|No comments found.|false|-
asyncStarted|boolean|No comments found.|false|-
asyncSupported|boolean|No comments found.|false|-
asyncContext|object|No comments found.|false|-
└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─scheme|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─inputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLength|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLengthLong|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterMap|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remotePort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localPort|int32|No comments found.|false|-
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locales|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteHost|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncStarted|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncSupported|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─timeout|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolRequestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletConnection|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─connectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolConnectionId|string|No comments found.|false|-
└─timeout|int64|No comments found.|false|-
└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─outputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writer|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bufferSize|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─committed|boolean|No comments found.|false|-
dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
requestId|string|No comments found.|false|-
protocolRequestId|string|No comments found.|false|-
servletConnection|object|No comments found.|false|-
└─protocol|string|No comments found.|false|-
└─secure|boolean|No comments found.|false|-
└─connectionId|string|No comments found.|false|-
└─protocolConnectionId|string|No comments found.|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/download.do?servletContext.sessionCookieConfig.name=damien.dietrich&dispatcherType=FORWARD&servletPath=9gbcsn&serverName=damien.dietrich&asyncContext.request.servletContext.majorVersion=808&requestURL.empty=true&requestedSessionId=68&session.servletContext.sessionCookieConfig.domain=blanda.info&contentType=41szs3&session.servletContext.effectiveMajorVersion=624&asyncContext.request.localName=damien.dietrich&userPrincipal.name=damien.dietrich&servletContext.sessionCookieConfig.httpOnly=true&asyncContext.request.reader.readAheadLimit=10&requestedSessionIdFromURL=true&asyncContext.response.writer.autoFlush=true&servletContext.sessionCookieConfig.domain=blanda.info&asyncContext.response.contentType=ob08ms&asyncContext.request.servletConnection.connectionId=68&writer.psOut.closing=true&session.servletContext.sessionCookieConfig.httpOnly=true&asyncContext.request.servletConnection.protocol=qilc3s&servletConnection.protocol=cpm3hj&asyncContext.request.remoteHost=x6doh4&asyncContext.response.committed=true&session.servletContext.requestCharacterEncoding=s0vgle&session.servletContext.sessionCookieConfig.maxAge=23&servletContext.virtualServerName=damien.dietrich&asyncContext.request.reader.skipLF=true&session.servletContext.servletContextName=damien.dietrich&asyncContext.request.localAddr=63nrne&requestedSessionIdValid=true&asyncContext.request.servletContext.virtualServerName=damien.dietrich&servletContext.contextPath=n4phaw&session.servletContext.sessionCookieConfig.name=damien.dietrich&httpServletMapping.mappingMatch=CONTEXT_ROOT&servletContext.requestCharacterEncoding=rq1k7x&bufferSize=10&remoteHost=kpvqgn&writer.writeBuffer=w&writer.writeBuffer=w&contextPath=fjye4p&reader.readAheadLimit=10&session.servletContext.sessionCookieConfig.secure=true&writer.psOut.autoFlush=true&asyncContext.request.remotePort=737&asyncContext.request.reader.markedSkipLF=true&asyncContext.response.bufferSize=10&reader.markedSkipLF=true&trailerFieldsReady=true&servletContext.responseCharacterEncoding=42f6h5&asyncContext.request.asyncSupported=true&fileName=damien.dietrich&session.servletContext.contextPath=797d6q&localAddr=z0qpuj&asyncContext.request.serverName=damien.dietrich&writer.psOut.textOut.nChars=277&httpServletMapping.matchValue=bfi7wz&servletContext.effectiveMajorVersion=847&servletConnection.connectionId=68&asyncContext.request.contentType=9uhw5y&method=tb54nq&session.lastAccessedTime=1788451677551&queryString=y5nstp&authType=286e9r&serverPort=166&asyncContext.request.servletContext.effectiveMajorVersion=345&asyncContext.request.remoteAddr=yst7yo&cookies.=damien.dietrich&cookies.=damien.dietrich&servletContext.minorVersion=319&requestedSessionIdFromCookie=true&requestId=68&writer.autoFlush=true&asyncContext.request.asyncContext.timeout=351&httpServletMapping.pattern=9izeox&characterEncoding=lz4kva&asyncContext.request.asyncStarted=true&servletConnection.protocolConnectionId=68&requestURL.count=306&scheme=acc9so&servletContext.majorVersion=570&session.servletContext.sessionTimeout=412&requestURL.value=45&requestURL.value=45&reader.cb=n&reader.cb=n&servletContext.sessionCookieConfig.path=mz2h8n&contentLengthLong=361&session.servletContext.effectiveMinorVersion=379&asyncContext.request.characterEncoding=8g36yb&writer.formatter.zero=c&asyncContext.request.servletContext.responseCharacterEncoding=nvopde&asyncContext.request.protocolRequestId=68&servletContext.sessionTimeout=686&reader.nextChar=683&asyncContext.request.servletContext.sessionTimeout=959&writer.psOut.closed=true&session.creationTime=1788451677551&session.servletContext.serverInfo=t5etb3&pathTranslated=4ggn3j&asyncContext.response.writer.trouble=true&asyncContext.request.servletContext.effectiveMinorVersion=248&asyncContext.request.servletConnection.secure=true&asyncContext.request.dispatcherType=FORWARD&delete=true&asyncStarted=true&writer.trouble=true&protocol=lldd4n&asyncContext.request.contentLengthLong=40&localName=damien.dietrich&session.new=true&asyncContext.request.secure=true&reader.skipLF=true&remoteAddr=5n8j6w&servletContext.effectiveMinorVersion=471&asyncContext.request.servletContext.requestCharacterEncoding=vt9jwf&secure=true&session.servletContext.sessionCookieConfig.comment=glikb1&asyncContext.request.scheme=tb2l8t&asyncContext.request.serverPort=299&session.servletContext.responseCharacterEncoding=6npj77&session.maxInactiveInterval=579&asyncContext.request.reader.nextChar=277&servletContext.serverInfo=s1h7u3&asyncContext.request.servletContext.serverInfo=e8yniy&remotePort=547&reader.nChars=97&status=83&requestURI=ktxozc&pathInfo=otn2dq&session.servletContext.majorVersion=214&remoteUser=rz4j2v&localPort=262&reader.markedChar=58&servletContext.servletContextName=damien.dietrich&writer.psOut.textOut.nextChar=760&asyncContext.request.servletContext.contextPath=toadwd&asyncContext.request.reader.nChars=420&asyncContext.response.characterEncoding=ye6ciu&writer.psOut.formatter.zero=8&writer.psOut.trouble=true&servletContext.sessionCookieConfig.comment=k4u70j&asyncContext.request.localPort=577&asyncContext.request.requestId=68&session.id=68&session.servletContext.minorVersion=452&reader.skipBuffer=q&reader.skipBuffer=q&session.servletContext.virtualServerName=damien.dietrich&requestURL.coder=113&writer.formatter.lastException.detailMessage=success&servletContext.sessionCookieConfig.maxAge=23&servletConnection.secure=true&servletContext.sessionCookieConfig.secure=true&asyncContext.request.servletContext.minorVersion=237&asyncContext.timeout=831&committed=true&asyncSupported=true&asyncContext.request.protocol=xhzlct&asyncContext.request.contentLength=361&session.servletContext.sessionCookieConfig.path=en0frt&httpServletMapping.servletName=damien.dietrich&asyncContext.request.reader.markedChar=923&contentLength=608&asyncContext.request.servletContext.servletContextName=damien.dietrich&protocolRequestId=68&asyncContext.request.servletConnection.protocolConnectionId=68
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
  "data": "ll5lf4",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
method|string|No comments found.|false|-
parts|array|No comments found.|false|-
headerNames|object|No comments found.|false|-
session|object|No comments found.|false|-
└─id|string|No comments found.|false|-
└─creationTime|int64|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─lastAccessedTime|int64|No comments found.|false|-
└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
└─new|boolean|No comments found.|false|-
└─maxInactiveInterval|int32|No comments found.|false|-
userPrincipal|object|No comments found.|false|-
└─name|string|No comments found.|false|-
trailerFields|map|No comments found.|false|-
└─any object|object|any object.|false|-
cookies|array|No comments found.|false|-
└─name|string|No comments found.|false|-
└─value|string|No comments found.|false|-
└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
queryString|string|No comments found.|false|-
authType|string|No comments found.|false|-
contextPath|string|No comments found.|false|-
requestURI|string|No comments found.|false|-
pathTranslated|string|No comments found.|false|-
servletPath|string|No comments found.|false|-
pathInfo|string|No comments found.|false|-
remoteUser|string|No comments found.|false|-
requestURL|object|No comments found.|false|-
└─empty|boolean|No comments found.|false|-
└─value|array|No comments found.|false|-
└─coder|int8|No comments found.|false|-
└─count|int32|No comments found.|false|-
requestedSessionId|string|No comments found.|false|-
requestedSessionIdFromCookie|boolean|No comments found.|false|-
requestedSessionIdValid|boolean|No comments found.|false|-
httpServletMapping|object|No comments found.|false|-
└─pattern|string|No comments found.|false|-
└─mappingMatch|enum|null<br/>CONTEXT_ROOT<br/>DEFAULT<br/>EXACT<br/>EXTENSION<br/>PATH<br/>|false|-
└─servletName|string|No comments found.|false|-
└─matchValue|string|No comments found.|false|-
requestedSessionIdFromURL|boolean|No comments found.|false|-
trailerFieldsReady|boolean|No comments found.|false|-
scheme|string|No comments found.|false|-
inputStream|object|No comments found.|false|-
protocol|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentLength|int32|No comments found.|false|-
contentLengthLong|int64|No comments found.|false|-
contentType|string|No comments found.|false|-
localName|string|No comments found.|false|-
attributeNames|object|No comments found.|false|-
parameterMap|map|No comments found.|false|-
└─any object|object|any object.|false|-
parameterNames|object|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
remotePort|int32|No comments found.|false|-
localPort|int32|No comments found.|false|-
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
secure|boolean|No comments found.|false|-
locales|object|No comments found.|false|-
localAddr|string|No comments found.|false|-
servletContext|object|No comments found.|false|-
└─classLoader|object|No comments found.|false|-
└─majorVersion|int32|No comments found.|false|-
└─minorVersion|int32|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─sessionTimeout|int32|No comments found.|false|-
└─contextPath|string|No comments found.|false|-
└─serverInfo|string|No comments found.|false|-
└─effectiveMinorVersion|int32|No comments found.|false|-
└─initParameterNames|object|No comments found.|false|-
└─effectiveMajorVersion|int32|No comments found.|false|-
└─servletContextName|string|No comments found.|false|-
└─defaultSessionTrackingModes|array|No comments found.|false|-
└─effectiveSessionTrackingModes|array|No comments found.|false|-
└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
└─requestCharacterEncoding|string|No comments found.|false|-
└─virtualServerName|string|No comments found.|false|-
└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─responseCharacterEncoding|string|No comments found.|false|-
└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
remoteHost|string|No comments found.|false|-
serverPort|int32|No comments found.|false|-
serverName|string|No comments found.|false|-
remoteAddr|string|No comments found.|false|-
asyncStarted|boolean|No comments found.|false|-
asyncSupported|boolean|No comments found.|false|-
asyncContext|object|No comments found.|false|-
└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─scheme|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─inputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLength|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLengthLong|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterMap|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remotePort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localPort|int32|No comments found.|false|-
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locales|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteHost|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncStarted|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncSupported|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─timeout|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolRequestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletConnection|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─connectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolConnectionId|string|No comments found.|false|-
└─timeout|int64|No comments found.|false|-
└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─outputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writer|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bufferSize|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─committed|boolean|No comments found.|false|-
dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
requestId|string|No comments found.|false|-
protocolRequestId|string|No comments found.|false|-
servletConnection|object|No comments found.|false|-
└─protocol|string|No comments found.|false|-
└─secure|boolean|No comments found.|false|-
└─connectionId|string|No comments found.|false|-
└─protocolConnectionId|string|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/upload.do --data 'servletContext.effectiveMinorVersion=192&servletContext.serverInfo=8sb3yd&reader.readAheadLimit=10&asyncContext.request.reader.markedSkipLF=true&asyncContext.request.asyncSupported=true&writer.psOut.formatter.zero=g&pathInfo=4y49yn&servletContext.sessionTimeout=238&session.lastAccessedTime=1788451677551&localName=damien.dietrich&asyncContext.request.contentLength=622&writer.writeBuffer=5&writer.writeBuffer=5&asyncContext.request.reader.readAheadLimit=10&asyncContext.request.servletContext.serverInfo=jw07el&writer.formatter.zero=z&status=629&writer.formatter.lastException.detailMessage=success&cookies.=ef17qr&cookies.=ef17qr&remotePort=368&servletContext.responseCharacterEncoding=deh7zp&httpServletMapping.mappingMatch=CONTEXT_ROOT&reader.skipBuffer=1&reader.skipBuffer=1&asyncContext.request.servletContext.effectiveMajorVersion=195&asyncContext.request.dispatcherType=FORWARD&servletConnection.secure=true&writer.psOut.textOut.nChars=531&session.servletContext.sessionCookieConfig.name=damien.dietrich&servletContext.sessionCookieConfig.comment=y5h72n&asyncContext.request.servletConnection.connectionId=68&remoteAddr=pohtqy&asyncContext.request.servletContext.virtualServerName=damien.dietrich&requestURL.count=421&characterEncoding=uh9m43&contentType=yhmfay&asyncStarted=true&writer.psOut.autoFlush=true&session.servletContext.responseCharacterEncoding=ltjz2a&servletContext.virtualServerName=damien.dietrich&reader.markedChar=407&protocolRequestId=68&httpServletMapping.pattern=u6n14m&secure=true&contentLengthLong=323&writer.psOut.textOut.nextChar=618&asyncContext.response.committed=true&reader.markedSkipLF=true&session.servletContext.servletContextName=damien.dietrich&asyncContext.request.secure=true&localAddr=th0bfy&servletContext.minorVersion=69&asyncContext.request.contentLengthLong=184&asyncContext.request.reader.nChars=173&asyncContext.request.servletConnection.secure=true&asyncContext.request.localName=damien.dietrich&asyncContext.timeout=726&requestedSessionId=68&servletContext.servletContextName=damien.dietrich&asyncContext.response.writer.autoFlush=true&session.servletContext.requestCharacterEncoding=p34c49&asyncContext.request.servletContext.effectiveMinorVersion=645&asyncContext.request.servletConnection.protocolConnectionId=68&characterEncoding=y15qnh&httpServletMapping.matchValue=b2jgrr&servletContext.sessionCookieConfig.maxAge=23&asyncContext.request.reader.skipLF=true&requestURL.empty=true&requestedSessionIdFromCookie=true&asyncContext.request.scheme=znku7o&servletContext.contextPath=irrpxu&asyncContext.request.asyncStarted=true&writer.trouble=true&asyncContext.request.contentType=a7588j&servletContext.sessionCookieConfig.path=2kho9m&asyncContext.response.contentType=6k6ruc&session.servletContext.sessionCookieConfig.comment=rdh3f9&session.servletContext.sessionCookieConfig.secure=true&contextPath=noeebc&serverName=damien.dietrich&cookies.=damien.dietrich&cookies.=damien.dietrich&requestURI=dzldkc&requestURL.value=73&requestURL.value=73&reader.nChars=936&servletContext.sessionCookieConfig.name=damien.dietrich&userPrincipal.name=damien.dietrich&servletPath=clpf44&servletContext.sessionCookieConfig.secure=true&session.maxInactiveInterval=392&asyncContext.request.protocolRequestId=68&pathTranslated=iop2bw&session.servletContext.contextPath=v44atb&session.servletContext.sessionCookieConfig.domain=blanda.info&localPort=844&queryString=buz1yk&reader.cb=b&reader.cb=b&servletContext.majorVersion=610&asyncContext.request.reader.nextChar=247&asyncContext.request.protocol=yxh24h&method=370pjj&session.servletContext.sessionCookieConfig.httpOnly=true&session.creationTime=1788451677551&session.new=true&asyncContext.request.remotePort=561&session.servletContext.minorVersion=249&trailerFieldsReady=true&asyncContext.request.servletContext.responseCharacterEncoding=dtw97g&asyncContext.request.remoteHost=xjaljl&servletConnection.protocol=ui3dlw&servletConnection.protocolConnectionId=68&bufferSize=10&asyncContext.response.writer.trouble=true&protocol=tlump0&authType=qy8n4z&asyncContext.request.serverPort=201&session.servletContext.virtualServerName=damien.dietrich&asyncContext.response.bufferSize=10&writer.autoFlush=true&asyncContext.request.asyncContext.timeout=998&session.servletContext.sessionCookieConfig.maxAge=23&asyncSupported=true&session.servletContext.serverInfo=w6uvu1&session.servletContext.sessionCookieConfig.path=qbuosp&requestedSessionIdFromURL=true&httpServletMapping.servletName=damien.dietrich&servletContext.sessionCookieConfig.domain=blanda.info&servletContext.sessionCookieConfig.httpOnly=true&asyncContext.request.localAddr=gr1gqk&asyncContext.request.servletContext.sessionTimeout=366&asyncContext.request.servletConnection.protocol=gurnqk&asyncContext.response.characterEncoding=9hq5nf&requestId=68&asyncContext.request.serverName=damien.dietrich&contentType=2yf76c&writer.psOut.closed=true&remoteHost=dcpqik&asyncContext.request.servletContext.servletContextName=damien.dietrich&writer.psOut.trouble=true&dispatcherType=FORWARD&session.servletContext.effectiveMajorVersion=88&writer.psOut.closing=true&asyncContext.request.servletContext.contextPath=6c1mxm&servletContext.effectiveMajorVersion=558&session.servletContext.majorVersion=867&asyncContext.request.servletContext.requestCharacterEncoding=ksnlpg&asyncContext.request.requestId=68&session.id=68&session.servletContext.sessionTimeout=188&session.servletContext.effectiveMinorVersion=598&asyncContext.request.characterEncoding=k92b9x&asyncContext.request.servletContext.majorVersion=178&asyncContext.request.servletContext.minorVersion=807&reader.skipLF=true&asyncContext.request.remoteAddr=hd7pvs&asyncContext.request.reader.markedChar=500&scheme=8k1ogd&reader.nextChar=462&asyncContext.request.localPort=958&servletConnection.connectionId=68&requestedSessionIdValid=true&contentLength=411&serverPort=797&committed=true&servletContext.requestCharacterEncoding=pghh2c&requestURL.coder=30&remoteUser=yexxog'
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
    "originFilename": "damien.dietrich",
    "filename": "damien.dietrich",
    "fileType": "jsvur7",
    "fileUrl": "www.evie-walter.net",
    "fileHttpUrl": "www.evie-walter.net",
    "statusCode": "23522"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
method|string|No comments found.|false|-
parts|array|No comments found.|false|-
headerNames|object|No comments found.|false|-
session|object|No comments found.|false|-
└─id|string|No comments found.|false|-
└─creationTime|int64|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─lastAccessedTime|int64|No comments found.|false|-
└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
└─new|boolean|No comments found.|false|-
└─maxInactiveInterval|int32|No comments found.|false|-
userPrincipal|object|No comments found.|false|-
└─name|string|No comments found.|false|-
trailerFields|map|No comments found.|false|-
└─any object|object|any object.|false|-
cookies|array|No comments found.|false|-
└─name|string|No comments found.|false|-
└─value|string|No comments found.|false|-
└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
queryString|string|No comments found.|false|-
authType|string|No comments found.|false|-
contextPath|string|No comments found.|false|-
requestURI|string|No comments found.|false|-
pathTranslated|string|No comments found.|false|-
servletPath|string|No comments found.|false|-
pathInfo|string|No comments found.|false|-
remoteUser|string|No comments found.|false|-
requestURL|object|No comments found.|false|-
└─empty|boolean|No comments found.|false|-
└─value|array|No comments found.|false|-
└─coder|int8|No comments found.|false|-
└─count|int32|No comments found.|false|-
requestedSessionId|string|No comments found.|false|-
requestedSessionIdFromCookie|boolean|No comments found.|false|-
requestedSessionIdValid|boolean|No comments found.|false|-
httpServletMapping|object|No comments found.|false|-
└─pattern|string|No comments found.|false|-
└─mappingMatch|enum|null<br/>CONTEXT_ROOT<br/>DEFAULT<br/>EXACT<br/>EXTENSION<br/>PATH<br/>|false|-
└─servletName|string|No comments found.|false|-
└─matchValue|string|No comments found.|false|-
requestedSessionIdFromURL|boolean|No comments found.|false|-
trailerFieldsReady|boolean|No comments found.|false|-
scheme|string|No comments found.|false|-
inputStream|object|No comments found.|false|-
protocol|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentLength|int32|No comments found.|false|-
contentLengthLong|int64|No comments found.|false|-
contentType|string|No comments found.|false|-
localName|string|No comments found.|false|-
attributeNames|object|No comments found.|false|-
parameterMap|map|No comments found.|false|-
└─any object|object|any object.|false|-
parameterNames|object|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
remotePort|int32|No comments found.|false|-
localPort|int32|No comments found.|false|-
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
secure|boolean|No comments found.|false|-
locales|object|No comments found.|false|-
localAddr|string|No comments found.|false|-
servletContext|object|No comments found.|false|-
└─classLoader|object|No comments found.|false|-
└─majorVersion|int32|No comments found.|false|-
└─minorVersion|int32|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─sessionTimeout|int32|No comments found.|false|-
└─contextPath|string|No comments found.|false|-
└─serverInfo|string|No comments found.|false|-
└─effectiveMinorVersion|int32|No comments found.|false|-
└─initParameterNames|object|No comments found.|false|-
└─effectiveMajorVersion|int32|No comments found.|false|-
└─servletContextName|string|No comments found.|false|-
└─defaultSessionTrackingModes|array|No comments found.|false|-
└─effectiveSessionTrackingModes|array|No comments found.|false|-
└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
└─requestCharacterEncoding|string|No comments found.|false|-
└─virtualServerName|string|No comments found.|false|-
└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─responseCharacterEncoding|string|No comments found.|false|-
└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
remoteHost|string|No comments found.|false|-
serverPort|int32|No comments found.|false|-
serverName|string|No comments found.|false|-
remoteAddr|string|No comments found.|false|-
asyncStarted|boolean|No comments found.|false|-
asyncSupported|boolean|No comments found.|false|-
asyncContext|object|No comments found.|false|-
└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─scheme|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─inputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLength|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLengthLong|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterMap|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remotePort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localPort|int32|No comments found.|false|-
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locales|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteHost|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncStarted|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncSupported|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─timeout|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolRequestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletConnection|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─connectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolConnectionId|string|No comments found.|false|-
└─timeout|int64|No comments found.|false|-
└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─outputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writer|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bufferSize|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─committed|boolean|No comments found.|false|-
dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
requestId|string|No comments found.|false|-
protocolRequestId|string|No comments found.|false|-
servletConnection|object|No comments found.|false|-
└─protocol|string|No comments found.|false|-
└─secure|boolean|No comments found.|false|-
└─connectionId|string|No comments found.|false|-
└─protocolConnectionId|string|No comments found.|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: multipart/form-data' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/uploads.do --data 'asyncContext.request.reader.nextChar=625&characterEncoding=vib9lc&asyncContext.request.asyncSupported=true&session.servletContext.sessionCookieConfig.httpOnly=true&servletContext.sessionCookieConfig.secure=true&asyncContext.request.protocolRequestId=68&asyncContext.request.servletContext.serverInfo=64mepa&servletContext.effectiveMinorVersion=513&asyncContext.request.servletContext.servletContextName=damien.dietrich&requestId=68&asyncContext.response.writer.autoFlush=true&asyncContext.request.servletContext.virtualServerName=damien.dietrich&asyncContext.request.servletContext.responseCharacterEncoding=rzy2m8&contentLength=320&asyncContext.request.reader.nChars=147&session.new=true&localPort=901&pathInfo=wjrnnh&asyncContext.request.requestId=68&method=nje0mp&asyncContext.request.reader.markedChar=956&reader.nChars=863&asyncContext.request.characterEncoding=ckqfe7&servletConnection.protocolConnectionId=68&servletContext.sessionCookieConfig.httpOnly=true&requestedSessionIdFromCookie=true&asyncContext.request.asyncContext.timeout=710&servletConnection.protocol=2fz0gd&trailerFieldsReady=true&scheme=ze4r6s&requestedSessionIdValid=true&protocolRequestId=68&asyncContext.request.reader.skipLF=true&asyncContext.request.contentLength=919&session.maxInactiveInterval=487&requestURL.empty=true&servletContext.majorVersion=159&reader.markedSkipLF=true&contextPath=u6n5sl&session.servletContext.serverInfo=zuwj0g&servletPath=7rkf0g&session.servletContext.requestCharacterEncoding=tzz4py&requestURL.count=689&httpServletMapping.mappingMatch=CONTEXT_ROOT&requestURL.value=33&requestURL.value=33&asyncContext.request.dispatcherType=FORWARD&remoteAddr=nrppzo&requestURI=bp2kvu&servletContext.minorVersion=761&asyncContext.request.servletConnection.connectionId=68&cookies.=4f4wv0&cookies.=4f4wv0&servletContext.sessionCookieConfig.comment=wxmckz&asyncContext.request.scheme=bepox6&httpServletMapping.servletName=damien.dietrich&requestURL.coder=7&protocol=giuzfn&servletContext.requestCharacterEncoding=m2558c&httpServletMapping.matchValue=70wqhn&asyncContext.request.localName=damien.dietrich&asyncContext.request.asyncStarted=true&servletContext.responseCharacterEncoding=4cbqxe&reader.markedChar=776&session.servletContext.effectiveMinorVersion=600&session.servletContext.majorVersion=674&servletConnection.secure=true&session.servletContext.contextPath=97nwzk&session.servletContext.sessionTimeout=385&asyncContext.request.reader.markedSkipLF=true&queryString=s54892&asyncContext.request.servletContext.contextPath=uw9hpd&asyncContext.request.servletConnection.protocolConnectionId=68&contentLengthLong=770&asyncContext.request.secure=true&asyncContext.request.protocol=0vwhvf&session.servletContext.sessionCookieConfig.domain=blanda.info&reader.cb=b&reader.cb=b&asyncContext.request.servletContext.majorVersion=221&asyncContext.request.serverName=damien.dietrich&servletContext.serverInfo=kezmc9&asyncContext.request.servletContext.requestCharacterEncoding=p10b44&session.servletContext.sessionCookieConfig.path=qr62o0&servletContext.effectiveMajorVersion=946&authType=h7bq9m&userPrincipal.name=damien.dietrich&secure=true&asyncContext.request.remotePort=282&session.servletContext.sessionCookieConfig.maxAge=23&asyncContext.request.servletContext.effectiveMajorVersion=593&asyncContext.request.remoteHost=zmsbvo&reader.readAheadLimit=10&asyncContext.response.characterEncoding=x378hy&reader.nextChar=404&asyncContext.response.writer.trouble=true&asyncContext.request.contentType=7ct17h&asyncContext.response.bufferSize=10&asyncContext.response.contentType=z5hrnt&servletContext.contextPath=a84omf&servletContext.sessionCookieConfig.maxAge=23&servletConnection.connectionId=68&servletContext.virtualServerName=damien.dietrich&servletContext.servletContextName=damien.dietrich&session.servletContext.responseCharacterEncoding=9z1o0t&session.servletContext.sessionCookieConfig.comment=ap06pj&asyncContext.request.reader.readAheadLimit=10&cookies.=damien.dietrich&cookies.=damien.dietrich&remoteHost=5rnc5e&session.servletContext.sessionCookieConfig.name=damien.dietrich&servletContext.sessionCookieConfig.name=damien.dietrich&servletContext.sessionTimeout=964&session.servletContext.effectiveMajorVersion=64&localName=damien.dietrich&servletContext.sessionCookieConfig.domain=blanda.info&asyncContext.timeout=42&asyncContext.request.localPort=27&asyncContext.request.servletContext.minorVersion=526&dispatcherType=FORWARD&httpServletMapping.pattern=67l4tr&session.servletContext.virtualServerName=damien.dietrich&session.lastAccessedTime=1788451677551&servletContext.sessionCookieConfig.path=h61avr&serverName=damien.dietrich&asyncSupported=true&asyncContext.request.servletContext.sessionTimeout=348&contentType=vfbhwt&requestedSessionId=68&asyncContext.request.servletConnection.protocol=gv6yei&asyncContext.response.committed=true&session.id=68&asyncStarted=true&reader.skipLF=true&session.creationTime=1788451677551&requestedSessionIdFromURL=true&session.servletContext.servletContextName=damien.dietrich&remoteUser=uy2o86&session.servletContext.minorVersion=292&session.servletContext.sessionCookieConfig.secure=true&serverPort=878&reader.skipBuffer=z&reader.skipBuffer=z&asyncContext.request.contentLengthLong=713&asyncContext.request.remoteAddr=ewyx0w&localAddr=mhsz95&asyncContext.request.servletContext.effectiveMinorVersion=519&asyncContext.request.serverPort=939&remotePort=209&pathTranslated=sdz7ef&asyncContext.request.localAddr=eqxks3&asyncContext.request.servletConnection.secure=true'
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
      "originFilename": "damien.dietrich",
      "filename": "damien.dietrich",
      "fileType": "818246",
      "fileUrl": "www.evie-walter.net",
      "fileHttpUrl": "www.evie-walter.net",
      "statusCode": "23522"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
method|string|No comments found.|false|-
parts|array|No comments found.|false|-
headerNames|object|No comments found.|false|-
session|object|No comments found.|false|-
└─id|string|No comments found.|false|-
└─creationTime|int64|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─lastAccessedTime|int64|No comments found.|false|-
└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
└─new|boolean|No comments found.|false|-
└─maxInactiveInterval|int32|No comments found.|false|-
userPrincipal|object|No comments found.|false|-
└─name|string|No comments found.|false|-
trailerFields|map|No comments found.|false|-
└─any object|object|any object.|false|-
cookies|array|No comments found.|false|-
└─name|string|No comments found.|false|-
└─value|string|No comments found.|false|-
└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
queryString|string|No comments found.|false|-
authType|string|No comments found.|false|-
contextPath|string|No comments found.|false|-
requestURI|string|No comments found.|false|-
pathTranslated|string|No comments found.|false|-
servletPath|string|No comments found.|false|-
pathInfo|string|No comments found.|false|-
remoteUser|string|No comments found.|false|-
requestURL|object|No comments found.|false|-
└─empty|boolean|No comments found.|false|-
└─value|array|No comments found.|false|-
└─coder|int8|No comments found.|false|-
└─count|int32|No comments found.|false|-
requestedSessionId|string|No comments found.|false|-
requestedSessionIdFromCookie|boolean|No comments found.|false|-
requestedSessionIdValid|boolean|No comments found.|false|-
httpServletMapping|object|No comments found.|false|-
└─pattern|string|No comments found.|false|-
└─mappingMatch|enum|null<br/>CONTEXT_ROOT<br/>DEFAULT<br/>EXACT<br/>EXTENSION<br/>PATH<br/>|false|-
└─servletName|string|No comments found.|false|-
└─matchValue|string|No comments found.|false|-
requestedSessionIdFromURL|boolean|No comments found.|false|-
trailerFieldsReady|boolean|No comments found.|false|-
scheme|string|No comments found.|false|-
inputStream|object|No comments found.|false|-
protocol|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentLength|int32|No comments found.|false|-
contentLengthLong|int64|No comments found.|false|-
contentType|string|No comments found.|false|-
localName|string|No comments found.|false|-
attributeNames|object|No comments found.|false|-
parameterMap|map|No comments found.|false|-
└─any object|object|any object.|false|-
parameterNames|object|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
remotePort|int32|No comments found.|false|-
localPort|int32|No comments found.|false|-
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
secure|boolean|No comments found.|false|-
locales|object|No comments found.|false|-
localAddr|string|No comments found.|false|-
servletContext|object|No comments found.|false|-
└─classLoader|object|No comments found.|false|-
└─majorVersion|int32|No comments found.|false|-
└─minorVersion|int32|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─sessionTimeout|int32|No comments found.|false|-
└─contextPath|string|No comments found.|false|-
└─serverInfo|string|No comments found.|false|-
└─effectiveMinorVersion|int32|No comments found.|false|-
└─initParameterNames|object|No comments found.|false|-
└─effectiveMajorVersion|int32|No comments found.|false|-
└─servletContextName|string|No comments found.|false|-
└─defaultSessionTrackingModes|array|No comments found.|false|-
└─effectiveSessionTrackingModes|array|No comments found.|false|-
└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
└─requestCharacterEncoding|string|No comments found.|false|-
└─virtualServerName|string|No comments found.|false|-
└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─responseCharacterEncoding|string|No comments found.|false|-
└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
remoteHost|string|No comments found.|false|-
serverPort|int32|No comments found.|false|-
serverName|string|No comments found.|false|-
remoteAddr|string|No comments found.|false|-
asyncStarted|boolean|No comments found.|false|-
asyncSupported|boolean|No comments found.|false|-
asyncContext|object|No comments found.|false|-
└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─scheme|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─inputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLength|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLengthLong|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterMap|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remotePort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localPort|int32|No comments found.|false|-
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locales|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteHost|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncStarted|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncSupported|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─timeout|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolRequestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletConnection|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─connectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolConnectionId|string|No comments found.|false|-
└─timeout|int64|No comments found.|false|-
└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─outputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writer|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bufferSize|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─committed|boolean|No comments found.|false|-
dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
requestId|string|No comments found.|false|-
protocolRequestId|string|No comments found.|false|-
servletConnection|object|No comments found.|false|-
└─protocol|string|No comments found.|false|-
└─secure|boolean|No comments found.|false|-
└─connectionId|string|No comments found.|false|-
└─protocolConnectionId|string|No comments found.|false|-
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/file/download/resource.do?asyncStarted=true&asyncContext.request.reader.skipLF=true&servletConnection.secure=true&writer.autoFlush=true&reader.nChars=959&servletContext.requestCharacterEncoding=btk8mq&asyncContext.request.servletContext.responseCharacterEncoding=1g3kx5&reader.markedSkipLF=true&serverPort=576&writer.psOut.formatter.zero=1&requestId=68&asyncContext.request.serverPort=396&writer.psOut.closing=true&servletContext.virtualServerName=damien.dietrich&session.servletContext.sessionTimeout=197&servletContext.sessionCookieConfig.maxAge=23&session.servletContext.effectiveMajorVersion=359&asyncContext.request.servletContext.sessionTimeout=839&session.servletContext.contextPath=abqqyn&reader.readAheadLimit=10&asyncContext.response.contentType=jsj3w6&writer.trouble=true&asyncContext.request.scheme=5cc5i0&writer.psOut.textOut.nextChar=365&session.servletContext.responseCharacterEncoding=tcy8na&servletContext.serverInfo=638356&writer.psOut.trouble=true&servletContext.effectiveMajorVersion=19&resource=iiumaf&session.servletContext.sessionCookieConfig.name=damien.dietrich&asyncContext.timeout=821&serverName=damien.dietrich&cookies.=t81eg2&cookies.=t81eg2&servletContext.responseCharacterEncoding=rck9tw&asyncContext.request.servletConnection.protocol=uiee4u&asyncContext.request.localPort=958&session.servletContext.sessionCookieConfig.comment=mnvars&session.servletContext.virtualServerName=damien.dietrich&requestedSessionIdFromURL=true&asyncContext.request.asyncSupported=true&asyncContext.response.committed=true&session.servletContext.sessionCookieConfig.path=yvo951&httpServletMapping.matchValue=bcgwzk&authType=b030eo&contentType=ebtsqz&reader.nextChar=890&asyncContext.request.servletContext.effectiveMinorVersion=754&asyncContext.request.servletContext.minorVersion=301&asyncContext.request.servletContext.servletContextName=damien.dietrich&writer.writeBuffer=n&writer.writeBuffer=n&httpServletMapping.mappingMatch=CONTEXT_ROOT&servletContext.majorVersion=916&requestURI=l691n4&requestURL.coder=90&asyncContext.request.reader.readAheadLimit=10&asyncContext.request.reader.nextChar=517&scheme=war0kj&servletConnection.connectionId=68&servletConnection.protocol=dqj27p&userPrincipal.name=damien.dietrich&asyncContext.request.servletConnection.connectionId=68&asyncContext.request.servletConnection.protocolConnectionId=68&protocolRequestId=68&reader.skipBuffer=1&reader.skipBuffer=1&servletContext.effectiveMinorVersion=443&contentLength=870&writer.psOut.autoFlush=true&requestURL.value=54&requestURL.value=54&session.maxInactiveInterval=268&characterEncoding=y5gf8m&reader.skipLF=true&asyncContext.request.servletConnection.secure=true&session.lastAccessedTime=1788451677551&asyncContext.request.contentLengthLong=765&asyncContext.request.asyncContext.timeout=889&queryString=skc51e&asyncContext.request.protocolRequestId=68&writer.formatter.zero=j&servletContext.sessionCookieConfig.comment=wn094m&pathInfo=nlgpti&asyncSupported=true&asyncContext.request.remoteAddr=ycxuae&servletContext.sessionTimeout=695&asyncContext.request.reader.markedSkipLF=true&asyncContext.request.dispatcherType=FORWARD&session.servletContext.sessionCookieConfig.maxAge=23&servletContext.servletContextName=damien.dietrich&secure=true&bufferSize=10&committed=true&asyncContext.request.protocol=3wiot1&remoteAddr=4lhdp2&session.creationTime=1788451677551&session.id=68&session.servletContext.effectiveMinorVersion=163&servletContext.sessionCookieConfig.name=damien.dietrich&asyncContext.response.bufferSize=10&asyncContext.request.requestId=68&reader.cb=5&reader.cb=5&dispatcherType=FORWARD&asyncContext.request.characterEncoding=vay8qa&asyncContext.request.localAddr=s96ei9&asyncContext.request.servletContext.requestCharacterEncoding=3dxfh0&servletContext.sessionCookieConfig.secure=true&session.servletContext.sessionCookieConfig.httpOnly=true&localPort=866&servletConnection.protocolConnectionId=68&asyncContext.response.writer.trouble=true&status=219&reader.markedChar=96&remotePort=739&session.servletContext.serverInfo=cewq72&session.servletContext.sessionCookieConfig.secure=true&asyncContext.request.contentType=p9tkjz&asyncContext.response.writer.autoFlush=true&servletPath=hhw5jb&servletContext.sessionCookieConfig.path=ym26s7&asyncContext.request.contentLength=343&httpServletMapping.pattern=5xxaiv&servletContext.sessionCookieConfig.domain=blanda.info&session.servletContext.requestCharacterEncoding=0cof1v&httpServletMapping.servletName=damien.dietrich&asyncContext.request.reader.markedChar=175&session.servletContext.minorVersion=289&pathTranslated=4f2voe&protocol=nbc6k0&asyncContext.request.servletContext.virtualServerName=damien.dietrich&session.servletContext.sessionCookieConfig.domain=blanda.info&requestURL.empty=true&requestedSessionId=68&trailerFieldsReady=true&session.new=true&asyncContext.request.servletContext.effectiveMajorVersion=901&session.servletContext.servletContextName=damien.dietrich&requestURL.count=748&writer.psOut.closed=true&requestedSessionIdFromCookie=true&servletContext.minorVersion=600&asyncContext.request.servletContext.contextPath=ledunc&servletContext.sessionCookieConfig.httpOnly=true&remoteHost=dm2ymy&session.servletContext.majorVersion=800&servletContext.contextPath=ryczap&method=mchw96&localAddr=dwsq92&contentLengthLong=270&asyncContext.request.localName=damien.dietrich&asyncContext.request.remotePort=462&asyncContext.request.servletContext.majorVersion=642&asyncContext.request.remoteHost=3xts9e&asyncContext.request.serverName=damien.dietrich&asyncContext.request.asyncStarted=true&contextPath=bnztkc&remoteUser=xyg92q&requestedSessionIdValid=true&localName=damien.dietrich&writer.formatter.lastException.detailMessage=success&writer.psOut.textOut.nChars=396&asyncContext.request.secure=true&asyncContext.response.characterEncoding=ffz552&asyncContext.request.servletContext.serverInfo=awgyyp&asyncContext.request.reader.nChars=435
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
  "data": "jjl6p8",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/configwhole/list.do?q=kqw3iu&orderBy=502&configKey=dbp9gh&remark=acxjhx&startTime=2026-09-04 00:07:57&isDisabled=true&page=1&limit=10&configValue=j10lyg&endTime=2026-09-04 00:07:57
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
    "totalCount": 172,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "configId": "68",
        "configKey": "w1hi78",
        "configValue": "ogjnjx",
        "isDisabled": true,
        "remark": "gc00tq"
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/configwhole/export.do --data 'q=y2elj7&writer.psOut.trouble=true&writer.formatter.zero=p&writer.psOut.textOut.nextChar=806&endTime=2026-09-04 00:07:57&writer.trouble=true&configValue=mpilk9&remark=ghqw2o&characterEncoding=d5nedw&writer.psOut.autoFlush=true&writer.psOut.textOut.nChars=463&writer.psOut.closed=true&writer.psOut.formatter.zero=x&contentType=he322u&status=22&bufferSize=10&writer.formatter.lastException.detailMessage=success&writer.writeBuffer=q&writer.writeBuffer=q&startTime=2026-09-04 00:07:57&writer.autoFlush=true&isDisabled=true&writer.psOut.closing=true&orderBy=882&committed=true&page=1&limit=10&configKey=p02kof'
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
  "data": "hoh2sg",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/configwhole/68.do
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
    "configId": "68",
    "configKey": "rvumja",
    "configValue": "fd17zx",
    "isDisabled": true,
    "remark": "2c1o96"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/configwhole/configKey/s8t2zb.do
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
    "configId": "68",
    "configKey": "j02kid",
    "configValue": "685hob",
    "isDisabled": true,
    "remark": "ckh9x7"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "configId": "68",
  "configKey": "rime4s",
  "configValue": "eyuvci",
  "isDisabled": true,
  "remark": "rvsnrr"
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
  "data": "ct046y",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "configId": "68",
  "configKey": "otv4ve",
  "configValue": "q060u3",
  "isDisabled": true,
  "remark": "qo8kuq"
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
  "data": "eq19ke",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "zodpcs",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "5b1ra4",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/online/list.do?username=damien.dietrich&ipaddr=4hiavu
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
      "tokenId": "68",
      "deptName": "damien.dietrich",
      "username": "damien.dietrich",
      "ipaddr": "1j97bh",
      "loginLocation": "dqio3l",
      "browser": "mefcwa",
      "os": "t32b40",
      "loginTime": 1788451677551
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/online/68.do
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
  "data": "1rs4zn",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/baseuserext/list.do?ids=clt0dg&ids=clt0dg&idMobile=205.573.4959&address=Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441&homeTel=6x5a6a&spare1=9g2jhk&q=26btlz&idNum=gdspuh&endTime=2026-09-04 00:07:57&intro=g6w82h&spare3=ceutz2&keywords=vv26lk&nameEn=6u2gwg&birthday=2026-09-04 00:09:22&familyAddress=Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441&qqNo=tb2bhk&searchCode=23522&emergencePhone=(718) 541-6787&orderBy=446&nativePlace=3qvyn0&weixinId=68&page=1&idType=c0n3dy&spareMobile=205.573.4959&postCode=23522&namePy=azuxay&limit=10&startTime=2026-09-04 00:07:57&nickname=cicely.medhurst&sname=damien.dietrich&spare2=84rd75&spare4=hw9os7&sex=5eqgaf&name=damien.dietrich&comefrom=umtuwx&isMobileConfirm=true
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:22",
      "lastTime": "2026-09-04 00:09:22",
      "id": "68",
      "nickname": "cicely.medhurst",
      "idName": "damien.dietrich",
      "idNum": "x3x6k0",
      "idMobile": "205.573.4959",
      "idType": "hihtc3",
      "namePy": "442z0f",
      "sname": "damien.dietrich",
      "nameEn": "08966z",
      "searchCode": "23522",
      "sex": "8c3jlf",
      "birthday": "2026-09-04 00:09:22",
      "postCode": "23522",
      "address": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
      "nativePlace": "pi5y6r",
      "familyAddress": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
      "homeTel": "eizc8a",
      "qqNo": "v01v3a",
      "weixinId": "68",
      "weiboId": "68",
      "spareMobile": "205.573.4959",
      "isMobileConfirm": true,
      "emergencePhone": "(718) 541-6787",
      "keywords": "tra416",
      "intro": "w2635n",
      "comefrom": "vplzkh",
      "imagePath": "y855iu",
      "userSignature": "ifi594",
      "ipRange": "s9zl9u",
      "macCode": "23522",
      "resume": "8wq4bs",
      "spare1": "qq1yuq",
      "spare2": "ewq8d8",
      "spare3": "w4qupr",
      "spare4": "jr3yi2"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:23",
    "lastTime": "2026-09-04 00:09:23",
    "id": "68",
    "nickname": "cicely.medhurst",
    "idName": "damien.dietrich",
    "idNum": "n3mkez",
    "idMobile": "205.573.4959",
    "idType": "kf6gln",
    "namePy": "p5qjyn",
    "sname": "damien.dietrich",
    "nameEn": "7llcjb",
    "searchCode": "23522",
    "sex": "havgxz",
    "birthday": "2026-09-04 00:09:23",
    "postCode": "23522",
    "address": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
    "nativePlace": "z6iese",
    "familyAddress": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
    "homeTel": "7wnfk9",
    "qqNo": "3gdfiu",
    "weixinId": "68",
    "weiboId": "68",
    "spareMobile": "205.573.4959",
    "isMobileConfirm": true,
    "emergencePhone": "(718) 541-6787",
    "keywords": "7miotl",
    "intro": "3rskdk",
    "comefrom": "9zncxw",
    "imagePath": "0a32bh",
    "userSignature": "bevmjq",
    "ipRange": "0gmx83",
    "macCode": "23522",
    "resume": "khiazx",
    "spare1": "c71ntm",
    "spare2": "hptdtp",
    "spare3": "a3frpf",
    "spare4": "msqwnw"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:23",
  "lastTime": "2026-09-04 00:09:23",
  "id": "68",
  "nickname": "cicely.medhurst",
  "idName": "damien.dietrich",
  "idNum": "1tx7he",
  "idMobile": "205.573.4959",
  "idType": "net4mz",
  "namePy": "stvxhj",
  "sname": "damien.dietrich",
  "nameEn": "ev8ivg",
  "searchCode": "23522",
  "sex": "a0ltfr",
  "birthday": "2026-09-04 00:09:23",
  "postCode": "23522",
  "address": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
  "nativePlace": "e507qm",
  "familyAddress": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
  "homeTel": "4m1gk6",
  "qqNo": "8kknsj",
  "weixinId": "68",
  "weiboId": "68",
  "spareMobile": "205.573.4959",
  "isMobileConfirm": true,
  "emergencePhone": "(718) 541-6787",
  "keywords": "abdtye",
  "intro": "yljm3n",
  "comefrom": "gctlv5",
  "imagePath": "dfw0jp",
  "userSignature": "sdmwpv",
  "ipRange": "1idv26",
  "macCode": "23522",
  "resume": "dbvcn2",
  "spare1": "ihhpu0",
  "spare2": "n6sh5o",
  "spare3": "xj1802",
  "spare4": "brgea2"
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
  "data": "hl4ejy",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:23",
  "lastTime": "2026-09-04 00:09:23",
  "id": "68",
  "nickname": "cicely.medhurst",
  "idName": "damien.dietrich",
  "idNum": "sq3anx",
  "idMobile": "205.573.4959",
  "idType": "xujkqw",
  "namePy": "mbqt9h",
  "sname": "damien.dietrich",
  "nameEn": "3svu3b",
  "searchCode": "23522",
  "sex": "h9opbv",
  "birthday": "2026-09-04 00:09:23",
  "postCode": "23522",
  "address": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
  "nativePlace": "jux3eh",
  "familyAddress": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
  "homeTel": "vhd425",
  "qqNo": "km15kt",
  "weixinId": "68",
  "weiboId": "68",
  "spareMobile": "205.573.4959",
  "isMobileConfirm": true,
  "emergencePhone": "(718) 541-6787",
  "keywords": "zozcr2",
  "intro": "ii6pml",
  "comefrom": "c22rwx",
  "imagePath": "dr63sp",
  "userSignature": "r5jwcq",
  "ipRange": "5dwipw",
  "macCode": "23522",
  "resume": "0z9u4q",
  "spare1": "eqw6ji",
  "spare2": "skb3qy",
  "spare3": "0ejz6p",
  "spare4": "5q9ggz"
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
  "data": "ze5220",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "fk1kv4",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/baseuser/list.do?email=rudy.vandervort@hotmail.com&workUserId=68&q=px0u0q&xzqhId=572&isBindFrontUser=2rloko&ids=q57xax&ids=q57xax&delFlag=2&description=8ia5xx&createType=267&startTime=2026-09-04 00:07:57&key=33bpkn&mobile=205.573.4959&createTime=2026-09-04 00:07:57&limit=10&registerTime=2026-09-04 00:09:22&username=damien.dietrich&bindOrganType=uvza12&searchCode=23522&lastAppId=68&endTime=2026-09-04 00:07:57&srcCode=773&source=353&spare1=kc2w73&bindOrganId=68&page=1&spare2=s87dv5&orderBy=132
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:22",
      "lastTime": "2026-09-04 00:09:22",
      "id": "68",
      "xzqhId": 801,
      "source": "s0a4iz",
      "createType": 790,
      "username": "damien.dietrich",
      "mobile": "205.573.4959",
      "email": "rudy.vandervort@hotmail.com",
      "password": "12rw6n",
      "salt": "2el58g",
      "srcCode": 648,
      "registerTime": "2026-09-04 00:09:22",
      "registerIp": "24.62.148.61",
      "currentLoginTime": "2026-09-04 00:09:22",
      "currentLoginIp": "24.62.148.61",
      "lastAppId": "68",
      "lastLoginTime": "2026-09-04 00:09:22",
      "lastLoginIp": "24.62.148.61",
      "lastLogoutTime": "2026-09-04 00:09:22",
      "loginCount": 401,
      "resetKey": "aobmy7",
      "resetPwd": "5gdusv",
      "lastResetTime": "2026-09-04 00:09:22",
      "errorTime": "2026-09-04 00:09:22",
      "errorCount": 303,
      "errorIp": "24.62.148.61",
      "lockTime": "2026-09-04 00:09:22",
      "activation": true,
      "activationCode": "23522",
      "priority": 970,
      "delFlag": 2,
      "deleteTime": "2026-09-04 00:09:22",
      "description": "4sey8n",
      "spare1": "dvb1hf",
      "spare2": "yty25m",
      "newPassword": "jjyu3n"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:22",
    "lastTime": "2026-09-04 00:09:22",
    "id": "68",
    "xzqhId": 738,
    "source": "hlprr0",
    "createType": 730,
    "username": "damien.dietrich",
    "mobile": "205.573.4959",
    "email": "rudy.vandervort@hotmail.com",
    "password": "5mlu8f",
    "salt": "j7ef3e",
    "srcCode": 937,
    "registerTime": "2026-09-04 00:09:22",
    "registerIp": "24.62.148.61",
    "currentLoginTime": "2026-09-04 00:09:22",
    "currentLoginIp": "24.62.148.61",
    "lastAppId": "68",
    "lastLoginTime": "2026-09-04 00:09:22",
    "lastLoginIp": "24.62.148.61",
    "lastLogoutTime": "2026-09-04 00:09:22",
    "loginCount": 449,
    "resetKey": "78dkzk",
    "resetPwd": "se8uwf",
    "lastResetTime": "2026-09-04 00:09:22",
    "errorTime": "2026-09-04 00:09:22",
    "errorCount": 887,
    "errorIp": "24.62.148.61",
    "lockTime": "2026-09-04 00:09:22",
    "activation": true,
    "activationCode": "23522",
    "priority": 38,
    "delFlag": 2,
    "deleteTime": "2026-09-04 00:09:22",
    "description": "ubaz7n",
    "spare1": "vycv1y",
    "spare2": "71cnja",
    "newPassword": "digwhk"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:22",
  "lastTime": "2026-09-04 00:09:22",
  "id": "68",
  "xzqhId": 784,
  "source": "kc4lso",
  "createType": 253,
  "username": "damien.dietrich",
  "mobile": "205.573.4959",
  "email": "rudy.vandervort@hotmail.com",
  "password": "pgufat",
  "salt": "qgxzqk",
  "srcCode": 479,
  "registerTime": "2026-09-04 00:09:22",
  "registerIp": "24.62.148.61",
  "currentLoginTime": "2026-09-04 00:09:22",
  "currentLoginIp": "24.62.148.61",
  "lastAppId": "68",
  "lastLoginTime": "2026-09-04 00:09:22",
  "lastLoginIp": "24.62.148.61",
  "lastLogoutTime": "2026-09-04 00:09:22",
  "loginCount": 720,
  "resetKey": "iatg99",
  "resetPwd": "mfyf0p",
  "lastResetTime": "2026-09-04 00:09:22",
  "errorTime": "2026-09-04 00:09:22",
  "errorCount": 211,
  "errorIp": "24.62.148.61",
  "lockTime": "2026-09-04 00:09:22",
  "activation": true,
  "activationCode": "23522",
  "priority": 233,
  "delFlag": 2,
  "deleteTime": "2026-09-04 00:09:22",
  "description": "teul35",
  "spare1": "dlr31d",
  "spare2": "0d7d16",
  "newPassword": "m2vysz"
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
  "data": "dqo5h2",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:22",
  "lastTime": "2026-09-04 00:09:22",
  "id": "68",
  "xzqhId": 97,
  "source": "8d1tep",
  "createType": 284,
  "username": "damien.dietrich",
  "mobile": "205.573.4959",
  "email": "rudy.vandervort@hotmail.com",
  "password": "jyv7uv",
  "salt": "bz0kva",
  "srcCode": 239,
  "registerTime": "2026-09-04 00:09:22",
  "registerIp": "24.62.148.61",
  "currentLoginTime": "2026-09-04 00:09:22",
  "currentLoginIp": "24.62.148.61",
  "lastAppId": "68",
  "lastLoginTime": "2026-09-04 00:09:22",
  "lastLoginIp": "24.62.148.61",
  "lastLogoutTime": "2026-09-04 00:09:22",
  "loginCount": 694,
  "resetKey": "wfdjnd",
  "resetPwd": "ek3vuz",
  "lastResetTime": "2026-09-04 00:09:22",
  "errorTime": "2026-09-04 00:09:22",
  "errorCount": 687,
  "errorIp": "24.62.148.61",
  "lockTime": "2026-09-04 00:09:22",
  "activation": true,
  "activationCode": "23522",
  "priority": 166,
  "delFlag": 2,
  "deleteTime": "2026-09-04 00:09:22",
  "description": "2kgfjv",
  "spare1": "bsorof",
  "spare2": "xy6qnu",
  "newPassword": "fp9ugf"
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
  "data": "i6j8uk",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "t6l3vl",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/baseuserext/list.do?nameEn=tvz8ov&address=Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441&isMobileConfirm=true&weixinId=68&limit=10&q=stxr5h&qqNo=ezvpr8&name=damien.dietrich&idMobile=205.573.4959&spare3=g53zad&page=1&ids=xply55&ids=xply55&keywords=o1glg0&intro=aye5cg&startTime=2026-09-04 00:07:57&endTime=2026-09-04 00:07:57&emergencePhone=(718) 541-6787&spare4=84entg&spareMobile=205.573.4959&namePy=u2r997&birthday=2026-09-04 00:09:22&spare1=hwv1y8&sname=damien.dietrich&nickname=cicely.medhurst&idType=no1rru&searchCode=23522&idNum=gmen8l&orderBy=191&nativePlace=rv0t54&familyAddress=Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441&homeTel=v85q6p&comefrom=forxiu&sex=csbdp7&postCode=23522&spare2=6fjwjs
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:22",
      "lastTime": "2026-09-04 00:09:22",
      "id": "68",
      "nickname": "cicely.medhurst",
      "idName": "damien.dietrich",
      "idNum": "ehwh20",
      "idMobile": "205.573.4959",
      "idType": "29i6dx",
      "namePy": "3757fp",
      "sname": "damien.dietrich",
      "nameEn": "r2gete",
      "searchCode": "23522",
      "sex": "ki4iku",
      "birthday": "2026-09-04 00:09:22",
      "postCode": "23522",
      "address": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
      "nativePlace": "otvkw2",
      "familyAddress": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
      "homeTel": "cjs65m",
      "qqNo": "nsuxv1",
      "weixinId": "68",
      "weiboId": "68",
      "spareMobile": "205.573.4959",
      "isMobileConfirm": true,
      "emergencePhone": "(718) 541-6787",
      "keywords": "4f1ee0",
      "intro": "3ofb07",
      "comefrom": "s9irha",
      "imagePath": "zzbk6j",
      "userSignature": "we69vx",
      "ipRange": "p4n7jr",
      "macCode": "23522",
      "resume": "rpm5c3",
      "spare1": "yl3c64",
      "spare2": "78yrm7",
      "spare3": "c04291",
      "spare4": "lt1l58"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:22",
    "lastTime": "2026-09-04 00:09:22",
    "id": "68",
    "nickname": "cicely.medhurst",
    "idName": "damien.dietrich",
    "idNum": "k4kyai",
    "idMobile": "205.573.4959",
    "idType": "1zig7q",
    "namePy": "917ku2",
    "sname": "damien.dietrich",
    "nameEn": "4m68fs",
    "searchCode": "23522",
    "sex": "x3m2li",
    "birthday": "2026-09-04 00:09:22",
    "postCode": "23522",
    "address": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
    "nativePlace": "7kli65",
    "familyAddress": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
    "homeTel": "0mll0w",
    "qqNo": "wkihxg",
    "weixinId": "68",
    "weiboId": "68",
    "spareMobile": "205.573.4959",
    "isMobileConfirm": true,
    "emergencePhone": "(718) 541-6787",
    "keywords": "4utjfq",
    "intro": "5iy2pi",
    "comefrom": "vpqlt5",
    "imagePath": "vt4b20",
    "userSignature": "2ytcez",
    "ipRange": "i771f7",
    "macCode": "23522",
    "resume": "qs6zhh",
    "spare1": "hei8yy",
    "spare2": "nyf6wz",
    "spare3": "1dvbyi",
    "spare4": "wd936d"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:22",
  "lastTime": "2026-09-04 00:09:22",
  "id": "68",
  "nickname": "cicely.medhurst",
  "idName": "damien.dietrich",
  "idNum": "p69000",
  "idMobile": "205.573.4959",
  "idType": "ezgg3w",
  "namePy": "i9m0gk",
  "sname": "damien.dietrich",
  "nameEn": "d5gblo",
  "searchCode": "23522",
  "sex": "pnd8tw",
  "birthday": "2026-09-04 00:09:22",
  "postCode": "23522",
  "address": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
  "nativePlace": "vw1pfs",
  "familyAddress": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
  "homeTel": "5zawvs",
  "qqNo": "2bhd96",
  "weixinId": "68",
  "weiboId": "68",
  "spareMobile": "205.573.4959",
  "isMobileConfirm": true,
  "emergencePhone": "(718) 541-6787",
  "keywords": "wtzosk",
  "intro": "bxxwa3",
  "comefrom": "4banwb",
  "imagePath": "m189ya",
  "userSignature": "6v3r55",
  "ipRange": "xyou1a",
  "macCode": "23522",
  "resume": "cs6x1b",
  "spare1": "sqwu91",
  "spare2": "nlvuyz",
  "spare3": "6xmc7o",
  "spare4": "pfzwn5"
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
  "data": "1io9nq",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:22",
  "lastTime": "2026-09-04 00:09:22",
  "id": "68",
  "nickname": "cicely.medhurst",
  "idName": "damien.dietrich",
  "idNum": "tm7i4k",
  "idMobile": "205.573.4959",
  "idType": "m9zbn1",
  "namePy": "grp5a6",
  "sname": "damien.dietrich",
  "nameEn": "69otjk",
  "searchCode": "23522",
  "sex": "sqcs5m",
  "birthday": "2026-09-04 00:09:22",
  "postCode": "23522",
  "address": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
  "nativePlace": "cy22kl",
  "familyAddress": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
  "homeTel": "q18ug5",
  "qqNo": "yajg08",
  "weixinId": "68",
  "weiboId": "68",
  "spareMobile": "205.573.4959",
  "isMobileConfirm": true,
  "emergencePhone": "(718) 541-6787",
  "keywords": "oiud1a",
  "intro": "pqq5vt",
  "comefrom": "7impg5",
  "imagePath": "8sy7p2",
  "userSignature": "bs909o",
  "ipRange": "qvk2jw",
  "macCode": "23522",
  "resume": "xrzt48",
  "spare1": "zuekel",
  "spare2": "swb7sc",
  "spare3": "ehxng4",
  "spare4": "649lod"
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
  "data": "9t9q2c",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "i6ovnd",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/list.do?foreignId=68&page=1&recvGroupId=68&msgUrl=www.evie-walter.net&recvOrganId=68&startTime=2026-09-04 00:07:57&type=900&limit=10&title=28v23r&content=l4j9oi&recvMemberId=68&imagePath=t43yv2&orderBy=659&status=530&readStatus=j48r23&creatorId=68&updatorId=68&description=q4o8zk&updateTime=2026-09-04 00:09:15&appId=68&endTime=2026-09-04 00:07:57&q=p7uq0x&id=681&recvTargetid=68&organId=68&iconStyle=imy5ir&bizType=ixw3ps
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:15",
      "lastTime": "2026-09-04 00:09:15",
      "id": 170,
      "appId": "68",
      "organId": "68",
      "bizType": "jaeo04",
      "type": 993,
      "title": "zw1280",
      "content": "6m7k76",
      "msgUrl": "www.evie-walter.net",
      "foreignId": "68",
      "imagePath": "epotqe",
      "iconStyle": "rbkrib",
      "recvMemberId": "68",
      "recvGroupId": "68",
      "recvOrganId": "68",
      "recvTargetid": "68",
      "status": 33,
      "updatorId": "68",
      "updateTime": "2026-09-04 00:09:15",
      "description": "g6lw41"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/list/myself.do?bizType=h3tmw8&updateTime=2026-09-04 00:09:15&creatorId=68&orderBy=631&type=478&organId=68&limit=10&foreignId=68&status=295&endTime=2026-09-04 00:07:57&readStatus=deibb4&appId=68&msgUrl=www.evie-walter.net&recvTargetid=68&content=2gss9v&iconStyle=vfuo9o&startTime=2026-09-04 00:07:57&page=1&imagePath=sq7nm5&recvOrganId=68&title=qb9e6g&updatorId=68&q=wqhck0&recvMemberId=68&id=546&description=ydk9u7&recvGroupId=68
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:15",
      "lastTime": "2026-09-04 00:09:15",
      "id": 685,
      "appId": "68",
      "organId": "68",
      "bizType": "zmz33c",
      "type": 707,
      "title": "tcnw8x",
      "content": "c2ng8h",
      "msgUrl": "www.evie-walter.net",
      "foreignId": "68",
      "imagePath": "604muf",
      "iconStyle": "26nzrg",
      "recvMemberId": "68",
      "recvGroupId": "68",
      "recvOrganId": "68",
      "recvTargetid": "68",
      "status": 462,
      "updatorId": "68",
      "updateTime": "2026-09-04 00:09:15",
      "description": "fx3m15"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/notice/export.do --data 'q=gkdy0r&writer.psOut.closing=true&content=028lig&status=810&readStatus=x9kosj&writer.psOut.textOut.nChars=333&foreignId=68&updateTime=2026-09-04 00:09:15&type=478&contentType=wrecf6&recvMemberId=68&description=9m3vad&writer.psOut.textOut.nextChar=571&page=1&title=v4kdtb&orderBy=893&imagePath=mbysr4&recvGroupId=68&bizType=q3bz9r&appId=68&writer.formatter.zero=1&endTime=2026-09-04 00:07:57&writer.psOut.formatter.zero=9&characterEncoding=zcfip9&id=172&recvOrganId=68&writer.formatter.lastException.detailMessage=success&startTime=2026-09-04 00:07:57&msgUrl=www.evie-walter.net&updatorId=68&limit=10&status=612&bufferSize=10&writer.writeBuffer=5&writer.writeBuffer=5&writer.psOut.autoFlush=true&recvTargetid=68&writer.autoFlush=true&committed=true&organId=68&writer.trouble=true&creatorId=68&writer.psOut.closed=true&writer.psOut.trouble=true&iconStyle=0uxhl3'
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
  "data": "67bxjr",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:15",
    "lastTime": "2026-09-04 00:09:15",
    "id": 533,
    "appId": "68",
    "organId": "68",
    "bizType": "wbefba",
    "type": 665,
    "title": "xk096i",
    "content": "z6bg22",
    "msgUrl": "www.evie-walter.net",
    "foreignId": "68",
    "imagePath": "9es0b5",
    "iconStyle": "1pphes",
    "recvMemberId": "68",
    "recvGroupId": "68",
    "recvOrganId": "68",
    "recvTargetid": "68",
    "status": 725,
    "updatorId": "68",
    "updateTime": "2026-09-04 00:09:15",
    "description": "q90rxn"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:15",
  "lastTime": "2026-09-04 00:09:15",
  "id": 707,
  "appId": "68",
  "organId": "68",
  "bizType": "36zdwl",
  "type": 115,
  "title": "drahpi",
  "content": "bhvpsq",
  "msgUrl": "www.evie-walter.net",
  "foreignId": "68",
  "imagePath": "tnhdrr",
  "iconStyle": "m8ux27",
  "recvMemberId": "68",
  "recvGroupId": "68",
  "recvOrganId": "68",
  "recvTargetid": "68",
  "status": 770,
  "updatorId": "68",
  "updateTime": "2026-09-04 00:09:15",
  "description": "iph5x3"
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
  "data": "415ziz",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:15",
  "lastTime": "2026-09-04 00:09:15",
  "id": 197,
  "appId": "68",
  "organId": "68",
  "bizType": "q93zhm",
  "type": 879,
  "title": "ogft81",
  "content": "hldwsr",
  "msgUrl": "www.evie-walter.net",
  "foreignId": "68",
  "imagePath": "v9lc7q",
  "iconStyle": "k5syht",
  "recvMemberId": "68",
  "recvGroupId": "68",
  "recvOrganId": "68",
  "recvTargetid": "68",
  "status": 70,
  "updatorId": "68",
  "updateTime": "2026-09-04 00:09:15",
  "description": "kspkry"
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
  "data": "echv84",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "njebso",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "pclvua",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "s5z6da",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "8ra2u8",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "mapKey1": "uwuvsa",
    "mapKey2": "bcmwhm"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/account/list.do?isDisabled=true&status=326&confLimit=10&spare2=ke28xm&spare1=d029y0&name=damien.dietrich&appId=68&endTime=2026-09-04 00:07:57&type=698&serverIp=24.62.148.61&serverType=omw0p8&serverUrl=www.evie-walter.net&clientId=68&serverConf1=6ijam1&aesIvKey=09mtdc&id=68&organId=68&description=3e7a9l&aesKey=1oh06o&q=seyfct&orderBy=116&serverConf3=t9cetu&isSingle=true&clientSecret=7s55bg&serverConf2=c4d2cv&limit=10&startTime=2026-09-04 00:07:57&inoutMode=542&cname=damien.dietrich&currCount=153&page=1&organName=damien.dietrich&isAdmin=true
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:25",
      "lastTime": "2026-09-04 00:09:25",
      "id": "68",
      "organId": "68",
      "appId": "68",
      "organName": "damien.dietrich",
      "inoutMode": 838,
      "name": "damien.dietrich",
      "cname": "damien.dietrich",
      "type": 59,
      "clientId": "68",
      "clientSecret": "ajdyh0",
      "aesKey": "v3qysd",
      "aesIvKey": "09rsu2",
      "serverIp": "24.62.148.61",
      "serverType": "9e511s",
      "serverUrl": "www.evie-walter.net",
      "serverConf1": "elll82",
      "serverConf2": "i7x9lv",
      "serverConf3": "vr45ax",
      "currCount": 828,
      "confLimit": 10,
      "isAdmin": true,
      "isSingle": true,
      "isDisabled": true,
      "status": 138,
      "description": "3w2s86",
      "spare1": "7tl7d9",
      "spare2": "rvbjnc",
      "inOrganName": "damien.dietrich",
      "userName": "damien.dietrich",
      "appName": "damien.dietrich",
      "inoutModeName": "damien.dietrich",
      "typeName": "damien.dietrich"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/account/getClientSecret.do?clientId=68
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:25",
      "lastTime": "2026-09-04 00:09:25",
      "id": "68",
      "organId": "68",
      "appId": "68",
      "organName": "damien.dietrich",
      "inoutMode": 551,
      "name": "damien.dietrich",
      "cname": "damien.dietrich",
      "type": 87,
      "clientId": "68",
      "clientSecret": "7vt74x",
      "aesKey": "4fzc38",
      "aesIvKey": "sruzc8",
      "serverIp": "24.62.148.61",
      "serverType": "2msoap",
      "serverUrl": "www.evie-walter.net",
      "serverConf1": "osm17h",
      "serverConf2": "0k0m7p",
      "serverConf3": "n23s26",
      "currCount": 116,
      "confLimit": 10,
      "isAdmin": true,
      "isSingle": true,
      "isDisabled": true,
      "status": 813,
      "description": "c1tef9",
      "spare1": "6xa9u0",
      "spare2": "me8ufj",
      "inOrganName": "damien.dietrich",
      "userName": "damien.dietrich",
      "appName": "damien.dietrich",
      "inoutModeName": "damien.dietrich",
      "typeName": "damien.dietrich"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/account/getKeyParity.do?id=68
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:25",
      "lastTime": "2026-09-04 00:09:25",
      "id": "68",
      "organId": "68",
      "appId": "68",
      "organName": "damien.dietrich",
      "inoutMode": 315,
      "name": "damien.dietrich",
      "cname": "damien.dietrich",
      "type": 32,
      "clientId": "68",
      "clientSecret": "hrax6z",
      "aesKey": "vnk8gv",
      "aesIvKey": "ewi8ul",
      "serverIp": "24.62.148.61",
      "serverType": "50j83y",
      "serverUrl": "www.evie-walter.net",
      "serverConf1": "nftyv3",
      "serverConf2": "f3dovo",
      "serverConf3": "i3rgil",
      "currCount": 15,
      "confLimit": 10,
      "isAdmin": true,
      "isSingle": true,
      "isDisabled": true,
      "status": 985,
      "description": "xihlc9",
      "spare1": "rl9khs",
      "spare2": "ww4tk5",
      "inOrganName": "damien.dietrich",
      "userName": "damien.dietrich",
      "appName": "damien.dietrich",
      "inoutModeName": "damien.dietrich",
      "typeName": "damien.dietrich"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
{"success":true,"code":0,"msg":"正常","data":Error restful return.,"requestId":"68","timestamp":"2026-09-04 00:07:57"}
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
  "data": "ca0aad",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "j800f0",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "wyxx4u",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/account/authlist.do?status=629&isSingle=true&isAdmin=true&serverConf1=v2wcas&id=68&organName=damien.dietrich&name=damien.dietrich&cname=damien.dietrich&type=405&clientSecret=qzin4c&appId=68&spare2=1fv9i6&serverType=z9mhlg&inoutMode=14&endTime=2026-09-04 00:07:57&limit=10&isDisabled=true&serverConf2=yvh51b&aesIvKey=ayprro&page=1&organId=68&spare1=x1rsn6&aesKey=xh0zyn&serverIp=24.62.148.61&orderBy=179&q=kcfg6o&startTime=2026-09-04 00:07:57&clientId=68&serverUrl=www.evie-walter.net&description=piya2h&currCount=421&serverConf3=2uzw41&confLimit=10
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:25",
      "lastTime": "2026-09-04 00:09:25",
      "id": "68",
      "organId": "68",
      "appId": "68",
      "organName": "damien.dietrich",
      "inoutMode": 85,
      "name": "damien.dietrich",
      "cname": "damien.dietrich",
      "type": 313,
      "clientId": "68",
      "clientSecret": "vaegx0",
      "aesKey": "m5bjfw",
      "aesIvKey": "2p75vr",
      "serverIp": "24.62.148.61",
      "serverType": "2b1xly",
      "serverUrl": "www.evie-walter.net",
      "serverConf1": "axukbf",
      "serverConf2": "ugb5fh",
      "serverConf3": "0zz3m8",
      "currCount": 700,
      "confLimit": 10,
      "isAdmin": true,
      "isSingle": true,
      "isDisabled": true,
      "status": 991,
      "description": "254vrq",
      "spare1": "aicab2",
      "spare2": "wad5wz",
      "inOrganName": "damien.dietrich",
      "userName": "damien.dietrich",
      "appName": "damien.dietrich",
      "inoutModeName": "damien.dietrich",
      "typeName": "damien.dietrich"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "ydzolw",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/index/application.do?q=vcxxah&startTime=2026-09-04 00:07:57&endTime=2026-09-04 00:07:57&limit=10&orderBy=514&page=1
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
      "organNum": "blbnpu",
      "deptNum": "wn0p0g",
      "peopleNum": "1seh8v",
      "roleNum": "cntd74",
      "dicTypeNum": "zovvw3",
      "appNum": "gvdkps",
      "fileNum": "6asmpi",
      "paramNum": "vw26jt"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/index/element.do?endTime=2026-09-04 00:07:57&startTime=2026-09-04 00:07:57&page=1&orderBy=781&limit=10&q=9vj8ug
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
      "objectNum": "m1km2t",
      "modelNum": "e7yk5l"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/index/manage.do?orderBy=489&startTime=2026-09-04 00:07:57&limit=10&endTime=2026-09-04 00:07:57&q=a82382&page=1
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
      "appNum": "m8ot2e",
      "accountNum": "1si8we",
      "serviceOrganNum": "sx1z5n"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/selectList.do?description=0ai5ge&mode=956&path=c19l5x&orderBy=458&domainId=68&limit=10&q=e3yrxh&status=14&name=damien.dietrich&startTime=2026-09-04 00:07:57&isDisabled=true&appType=gmq6bf&isSite=true&ftpId=68&isMobileApp=true&existKey=tlay4y&endTime=2026-09-04 00:07:57&ids=6xlu6w&ids=6xlu6w&organId=68&sertypeId=68&delFlag=2&page=1&xzqhId=791
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:19",
      "lastTime": "2026-09-04 00:09:19",
      "id": "68",
      "ftpId": "68",
      "domainId": "68",
      "organId": "68",
      "xzqhId": 153,
      "sertypeId": "68",
      "name": "damien.dietrich",
      "path": "r4x633",
      "appType": "1cely0",
      "isSite": true,
      "isDisabled": true,
      "isMobileApp": true,
      "status": 3,
      "priority": 474,
      "delFlag": 2,
      "deleteTime": "2026-09-04 00:09:19",
      "description": "a32ce9",
      "spare1": "x9r5sn",
      "spare2": "fwubom",
      "xzqhName": "damien.dietrich"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/list.do?name=damien.dietrich&domainId=68&organId=68&delFlag=2&existKey=f5cws6&xzqhId=252&path=3vco81&ids=4tjlxv&ids=4tjlxv&orderBy=230&q=9nzlj5&isDisabled=true&status=239&limit=10&isSite=true&description=1nb05k&page=1&isMobileApp=true&sertypeId=68&startTime=2026-09-04 00:07:57&mode=634&appType=piawc5&ftpId=68&idArr=cr32ac&endTime=2026-09-04 00:07:57
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
    "totalCount": 609,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:19",
        "lastTime": "2026-09-04 00:09:19",
        "id": "68",
        "ftpId": "68",
        "domainId": "68",
        "organId": "68",
        "xzqhId": 505,
        "sertypeId": "68",
        "name": "damien.dietrich",
        "path": "hyfwqd",
        "appType": "0n2ypi",
        "isSite": true,
        "isDisabled": true,
        "isMobileApp": true,
        "status": 828,
        "priority": 57,
        "delFlag": 2,
        "deleteTime": "2026-09-04 00:09:19",
        "description": "z9lwso",
        "spare1": "u8am3y",
        "spare2": "ruthyo",
        "xzqhName": "damien.dietrich"
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/export.do --data 'xzqhId=598&status=85&writer.formatter.lastException.detailMessage=success&writer.psOut.autoFlush=true&characterEncoding=ie6fyd&committed=true&organId=68&description=mvvxva&writer.psOut.trouble=true&appType=xnrrmf&existKey=vckt9k&q=0a10wf&writer.autoFlush=true&path=znujcu&status=984&isSite=true&mode=377&idArr=raczu4&writer.psOut.textOut.nChars=967&sertypeId=68&isMobileApp=true&writer.writeBuffer=t&writer.writeBuffer=t&writer.formatter.zero=q&bufferSize=10&startTime=2026-09-04 00:07:57&name=damien.dietrich&delFlag=2&writer.psOut.closed=true&limit=10&ftpId=68&writer.trouble=true&contentType=l4vsow&writer.psOut.formatter.zero=n&writer.psOut.textOut.nextChar=294&endTime=2026-09-04 00:07:57&page=1&isDisabled=true&writer.psOut.closing=true&domainId=68&ids=d8urq4&ids=d8urq4&orderBy=549'
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
  "data": "d1lsmj",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/68.do
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:19",
    "lastTime": "2026-09-04 00:09:19",
    "id": "68",
    "ftpId": "68",
    "domainId": "68",
    "organId": "68",
    "xzqhId": 916,
    "sertypeId": "68",
    "name": "damien.dietrich",
    "path": "2hns1i",
    "appType": "6xnqmr",
    "isSite": true,
    "isDisabled": true,
    "isMobileApp": true,
    "status": 895,
    "priority": 580,
    "delFlag": 2,
    "deleteTime": "2026-09-04 00:09:19",
    "description": "wvniar",
    "spare1": "lr9c75",
    "spare2": "er0idu",
    "xzqhName": "damien.dietrich",
    "ftpName": "damien.dietrich",
    "sertypeName": "damien.dietrich",
    "domainName": "damien.dietrich",
    "organName": "damien.dietrich"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "id": "68",
  "ftpId": "68",
  "ftpName": "damien.dietrich",
  "domainId": "68",
  "domainName": "damien.dietrich",
  "organId": "68",
  "organName": "damien.dietrich",
  "xzqhId": 578,
  "xzqhName": "damien.dietrich",
  "sertypeId": "68",
  "name": "damien.dietrich",
  "path": "33gjuk",
  "appType": "3pchae",
  "isSite": true,
  "isOpen": true,
  "isMobileApp": true,
  "status": 922,
  "statusName": "damien.dietrich",
  "priority": 232,
  "createTime": "2026-09-04 00:09:19",
  "description": "eos2t2",
  "spare1": "xrx3q0",
  "statusMap": {
    "mapKey": "oz366a"
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
  "data": "1ajzz9",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "id": "68",
  "ftpId": "68",
  "ftpName": "damien.dietrich",
  "domainId": "68",
  "domainName": "damien.dietrich",
  "organId": "68",
  "organName": "damien.dietrich",
  "xzqhId": 627,
  "xzqhName": "damien.dietrich",
  "sertypeId": "68",
  "name": "damien.dietrich",
  "path": "2v6ch7",
  "appType": "fa8ykl",
  "isSite": true,
  "isOpen": true,
  "isMobileApp": true,
  "status": 794,
  "statusName": "damien.dietrich",
  "priority": 416,
  "createTime": "2026-09-04 00:09:19",
  "description": "sawdy3",
  "spare1": "ao7hsv",
  "statusMap": {
    "mapKey": "t3lakj"
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
  "data": "wpxuin",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "xjrtki",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X POST -k -H 'Content-Type: application/json; charset=utf-8' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/init/68.do --data '{
  "id": "68",
  "menuJsons": {
    "size": 10
  },
  "initJson": {},
  "username": "damien.dietrich",
  "password": "z6c9xe",
  "initPath": "v4aov6"
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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "83hat6",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/xzqh/list.do?delFlag=2&countryId=68&startTime=2026-09-04 00:07:57&areatypeId=68&description=aqjr3g&limit=10&areatypeIds=ls3bh8&areatypeIds=ls3bh8&endTime=2026-09-04 00:07:57&nameEn=xg8la7&q=cm3ykv&code=23522&parentIds=vwszlk&parentIds=vwszlk&searchCode=23522&lft=882&name=damien.dietrich&ids=857oas&ids=857oas&orderBy=406&parentId=617&sname=damien.dietrich&page=1&likeQuery=gf5vxi&nameTotal=eh4wak&isDisplay=true&rgt=184&hasContent=true&deleteTime=2026-09-04 00:07:57
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
    "totalCount": 806,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:20",
        "lastTime": "2026-09-04 00:09:20",
        "id": 154,
        "parentId": 219,
        "countryId": "68",
        "areatypeId": "68",
        "lft": 424,
        "rgt": 635,
        "code": "23522",
        "name": "damien.dietrich",
        "nameTotal": "pqbuc9",
        "sname": "damien.dietrich",
        "nameEn": "0qgfkv",
        "searchCode": "23522",
        "isDisplay": true,
        "hasContent": true,
        "priority": 61,
        "delFlag": 2,
        "deleteTime": "2026-09-04 00:09:20",
        "description": "oscljk",
        "countryName": "damien.dietrich",
        "parentName": "damien.dietrich",
        "areatypeName": "damien.dietrich"
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/app/organ/list.do?page=1&limit=10&endTime=2026-09-04 00:07:57&startTime=2026-09-04 00:07:57&orgtypeId=68&unionCode=23522&createType=918&spare2=kcivt1&delFlag=2&name=damien.dietrich&spare1=0hmwlv&key=oawb7m&source=52&organCode=23522&ids=d16gyc&ids=d16gyc&xzqhId=634&organName=damien.dietrich&orderBy=898&isOrganWork=l68clj&description=yxqsx7&q=w8kchj
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
    "totalCount": 258,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:20",
        "lastTime": "2026-09-04 00:09:20",
        "cmsKey": "y14nr0",
        "cmsValue": "krm4aj"
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictionary/list.do?listClass=iu7zj4&isDefault=k8szib&typeCode=23522&status=flpwk1&startTime=2026-09-04 00:07:57&endTime=2026-09-04 00:07:57&remark=blpviz&key=v43kvt&cddValue=4iabvh&orderBy=186&limit=10&searchCode=23522&dictSort=312&dictLabel=m2qtc0&parentId=255&q=jy3cqj&page=1&cddId=489&name=damien.dietrich&cssClass=lvkehs
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
    "totalCount": 441,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "cddId": 9,
        "typeCode": "23522",
        "parentId": 239,
        "name": "damien.dietrich",
        "sname": "damien.dietrich",
        "cddValue": "8w3jdr",
        "searchCode": "23522",
        "priority": 885,
        "createTime": "2026-09-04 00:09:21",
        "remark": "4uaxb5",
        "dictLabel": "ix70rp",
        "typeCodeName": "damien.dietrich",
        "parentName": "damien.dietrich"
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictionary/export.do --data 'typeCode=23522&name=damien.dietrich&writer.psOut.autoFlush=true&bufferSize=10&writer.formatter.lastException.detailMessage=success&writer.psOut.trouble=true&writer.psOut.closing=true&startTime=2026-09-04 00:07:57&writer.writeBuffer=u&writer.writeBuffer=u&q=k8o8s0&page=1&cddValue=t6606u&listClass=kuc0mx&isDefault=3f6xc7&searchCode=23522&parentId=625&writer.psOut.formatter.zero=l&key=wbvwd2&endTime=2026-09-04 00:07:57&writer.autoFlush=true&status=elcho4&cssClass=pswhh3&writer.psOut.textOut.nChars=830&dictLabel=oax7qh&status=727&dictSort=88&orderBy=133&contentType=2e7j4d&writer.psOut.closed=true&remark=33iy93&writer.trouble=true&writer.psOut.textOut.nextChar=382&cddId=590&characterEncoding=mz22ae&writer.formatter.zero=m&committed=true&limit=10'
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
  "data": "46nftg",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictionary/172.do
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
    "cddId": 923,
    "typeCode": "23522",
    "parentId": 555,
    "name": "damien.dietrich",
    "sname": "damien.dietrich",
    "cddValue": "yjo8y6",
    "searchCode": "23522",
    "priority": 950,
    "createTime": "2026-09-04 00:09:21",
    "remark": "v8j3rx",
    "dictLabel": "85zrlk",
    "typeCodeName": "damien.dietrich",
    "parentName": "damien.dietrich"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictionary/type/8c8ugc.do?typeCode=23522&roletypeId=68&zparentId=68&parentId=68
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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "cddId": 641,
  "typeCode": "23522",
  "parentId": 408,
  "name": "damien.dietrich",
  "sname": "damien.dietrich",
  "cddValue": "x32hed",
  "searchCode": "23522",
  "priority": 827,
  "createTime": "2026-09-04 00:09:21",
  "remark": "1rhd9v",
  "dictLabel": "gfjt2g",
  "typeCodeName": "damien.dietrich",
  "parentName": "damien.dietrich"
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
  "data": "jir528",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "cddId": 299,
  "typeCode": "23522",
  "parentId": 411,
  "name": "damien.dietrich",
  "sname": "damien.dietrich",
  "cddValue": "m89ltb",
  "searchCode": "23522",
  "priority": 762,
  "createTime": "2026-09-04 00:09:21",
  "remark": "o4jn7m",
  "dictLabel": "6yptsa",
  "typeCodeName": "damien.dietrich",
  "parentName": "damien.dietrich"
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
  "data": "rx0aqx",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "33bge8",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/comm/tree.do?startTime=2026-09-04 00:07:57&type=ms466x&refType=3scsh6&groupId=68&parentId=68&roleId=68&metaId=68&limit=10&wlType=hs8lix&positionType=wagdkr&showButton=9ytugp&organId=68&refresh=q6w2b5&page=1&appId=68&q=wmb06y&positionId=68&gnType=2chqfz&orderBy=73&subType=f9dphq&roletypeId=68&key=8cuyz1&status=12jzcr&endTime=2026-09-04 00:07:57
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
      "id": "68",
      "label": "vmkb1f",
      "shortName": "damien.dietrich",
      "organId": "68",
      "areaId": 685,
      "searchCode": "23522",
      "childNum": 120,
      "checked": true,
      "entity": 19,
      "show": true,
      "showIcon": true,
      "parentId": "68",
      "children": [
        {
          "$ref": ".."
        }
      ]
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictionary/tree.do?page=1&cddValue=a6brse&delFlag=2&startTime=2026-09-04 00:07:57&typeCode=23522&sname=damien.dietrich&dispFlag=vlr7m3&key=cfm94j&typeCodes=j3lcgv&typeCodes=j3lcgv&endTime=2026-09-04 00:07:57&ids=trafzx&ids=trafzx&q=dv4wdj&limit=10&existKey=sybi2p&cddLevel=vn4dwy&orderBy=564&parentId=475&searchCode=23522&typeMode=2nrw5r&description=j1c1zs&name=damien.dietrich&isAllChild=rgvn6y
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:21",
      "lastTime": "2026-09-04 00:09:21",
      "id": 118,
      "typeCode": "23522",
      "parentId": 478,
      "name": "damien.dietrich",
      "sname": "damien.dietrich",
      "cddValue": "byb7ap",
      "cddLevel": "r2q83q",
      "searchCode": "23522",
      "dispFlag": "88g7vr",
      "priority": 46,
      "delFlag": 2,
      "deleteTime": "2026-09-04 00:09:21",
      "description": "vqshye",
      "spare1": "vnlwgu",
      "spare2": "2m9fcw",
      "children": [
        {
          "$ref": ".."
        }
      ]
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictype/list.do?typeId=68&q=gaawsc&typeClass=hzwcpe&status=48atj7&startTime=2026-09-04 00:07:57&key=ikq4qd&remark=en0n9q&limit=10&name=damien.dietrich&typeMode=287&page=1&orderBy=977&endTime=2026-09-04 00:07:57
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
    "totalCount": 312,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "typeId": "68",
        "name": "damien.dietrich",
        "typeClass": "u6mgkd",
        "typeRef": "qpt7m5",
        "typeMode": 821,
        "searchCode": "23522",
        "priority": 678,
        "createTime": "2026-09-04 00:09:21",
        "status": 217,
        "remark": "e3qkus"
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictype/export.do --data 'status=209&bufferSize=10&page=1&remark=ubx83u&q=gaejpc&orderBy=439&writer.formatter.zero=c&writer.formatter.lastException.detailMessage=success&typeId=68&writer.psOut.trouble=true&writer.psOut.textOut.nChars=904&writer.autoFlush=true&writer.psOut.closed=true&writer.psOut.textOut.nextChar=177&committed=true&endTime=2026-09-04 00:07:57&writer.psOut.formatter.zero=4&key=elwz2d&writer.psOut.closing=true&startTime=2026-09-04 00:07:57&contentType=nmllgk&status=jtoxom&writer.writeBuffer=p&writer.writeBuffer=p&writer.trouble=true&name=damien.dietrich&typeClass=9x631o&writer.psOut.autoFlush=true&typeMode=407&characterEncoding=f63wpw&limit=10'
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
  "data": "kzfp4i",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/dictype/68.do
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
    "typeId": "68",
    "name": "damien.dietrich",
    "typeClass": "eeyvc4",
    "typeRef": "by2lk9",
    "typeMode": 209,
    "searchCode": "23522",
    "priority": 424,
    "createTime": "2026-09-04 00:09:21",
    "status": 566,
    "remark": "8lbvo0"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "typeId": "68",
  "name": "damien.dietrich",
  "typeClass": "s9sz06",
  "typeRef": "g76bsh",
  "typeMode": 762,
  "searchCode": "23522",
  "priority": 916,
  "createTime": "2026-09-04 00:09:21",
  "status": 599,
  "remark": "qyact5"
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
  "data": "qutx6w",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "typeId": "68",
  "name": "damien.dietrich",
  "typeClass": "04rcp4",
  "typeRef": "b2qvtf",
  "typeMode": 56,
  "searchCode": "23522",
  "priority": 366,
  "createTime": "2026-09-04 00:09:21",
  "status": 517,
  "remark": "rwdqc6"
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
  "data": "sg52x6",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "6wmdhz",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "n7jjpx",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
      "typeId": "68",
      "name": "damien.dietrich",
      "typeClass": "hrvoyw",
      "typeRef": "ea5m9d",
      "typeMode": 898,
      "searchCode": "23522",
      "priority": 685,
      "createTime": "2026-09-04 00:09:21",
      "status": 680,
      "remark": "69yjj9"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
      "cpuNum": 395,
      "total": 71.87,
      "sys": 77.11,
      "used": 17.66,
      "wait": 68.17,
      "free": 56.88
    },
    "mem": {
      "total": 33.78,
      "used": 41.36,
      "free": 69.58
    },
    "jvm": {
      "total": 85.83,
      "max": 87.07,
      "free": 29.29,
      "version": "2.13",
      "home": "plvy1q"
    },
    "sys": {
      "computerName": "damien.dietrich",
      "computerIp": "24.62.148.61",
      "userDir": "v2rdfi",
      "osName": "damien.dietrich",
      "osArch": "rrxv0z"
    },
    "sysFiles": [
      {
        "dirName": "damien.dietrich",
        "sysTypeName": "damien.dietrich",
        "typeName": "damien.dietrich",
        "total": "2r81i8",
        "free": "pnzahg",
        "used": "tpaay9",
        "usage": 47.93
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/righttype/list.do?limit=10&description=2dvev8&page=1&q=kr17jd&delFlag=2&startTime=2026-09-04 00:07:57&endTime=2026-09-04 00:07:57&name=damien.dietrich&sname=damien.dietrich&orderBy=846
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:26",
      "lastTime": "2026-09-04 00:09:26",
      "id": "68",
      "name": "damien.dietrich",
      "sname": "damien.dietrich",
      "priority": 610,
      "delFlag": 2,
      "description": "5lj2cm"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/righttype/export.do --data 'name=damien.dietrich&bufferSize=10&sname=damien.dietrich&writer.formatter.lastException.detailMessage=success&contentType=h6g68i&writer.autoFlush=true&writer.psOut.trouble=true&writer.psOut.closing=true&writer.psOut.autoFlush=true&writer.psOut.textOut.nextChar=452&page=1&limit=10&writer.writeBuffer=j&writer.writeBuffer=j&status=675&writer.trouble=true&writer.psOut.closed=true&writer.psOut.textOut.nChars=194&endTime=2026-09-04 00:07:57&writer.psOut.formatter.zero=r&description=0sl8kr&q=ku03ry&writer.formatter.zero=e&startTime=2026-09-04 00:07:57&characterEncoding=yg7jil&committed=true&orderBy=712&delFlag=2'
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
  "data": "aa6667",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:26",
    "lastTime": "2026-09-04 00:09:26",
    "id": "68",
    "name": "damien.dietrich",
    "sname": "damien.dietrich",
    "priority": 57,
    "delFlag": 2,
    "description": "0uis6o"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:26",
  "lastTime": "2026-09-04 00:09:26",
  "id": "68",
  "name": "damien.dietrich",
  "sname": "damien.dietrich",
  "priority": 366,
  "delFlag": 2,
  "description": "c0e4mw"
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
  "data": "yq59ug",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:26",
  "lastTime": "2026-09-04 00:09:26",
  "id": "68",
  "name": "damien.dietrich",
  "sname": "damien.dietrich",
  "priority": 781,
  "delFlag": 2,
  "description": "ihyvhh"
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
  "data": "kmd1au",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "2zidk2",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/template/list.do?orderBy=954&content=65s1jm&organId=68&subType=1rw6je&providerId=68&page=1&appId=68&q=ogc6f4&description=7ts6h6&type=6vc7ef&id=68&foreignId=68&status=751&spare2=nflnre&providerName=damien.dietrich&endTime=2026-09-04 00:07:57&startTime=2026-09-04 00:07:57&signature=gu50ol&delFlag=2&limit=10&spare1=yiejll&name=damien.dietrich&creatorId=68
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:15",
      "lastTime": "2026-09-04 00:09:15",
      "id": "68",
      "appId": "68",
      "organId": "68",
      "providerId": "68",
      "providerName": "damien.dietrich",
      "foreignId": "68",
      "type": "59miu2",
      "subType": "qb4hsq",
      "name": "damien.dietrich",
      "signature": "sqy6e0",
      "content": "j6fsez",
      "priority": 105,
      "status": 15,
      "delFlag": 2,
      "description": "24nm46",
      "spare1": "ytau44",
      "spare2": "tk4sdy"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:15",
    "lastTime": "2026-09-04 00:09:15",
    "id": "68",
    "appId": "68",
    "organId": "68",
    "providerId": "68",
    "providerName": "damien.dietrich",
    "foreignId": "68",
    "type": "b4pbih",
    "subType": "wxflqz",
    "name": "damien.dietrich",
    "signature": "37ttxj",
    "content": "6xy16q",
    "priority": 256,
    "status": 418,
    "delFlag": 2,
    "description": "s3puo1",
    "spare1": "0os880",
    "spare2": "2fmb7g"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:15",
  "lastTime": "2026-09-04 00:09:15",
  "id": "68",
  "appId": "68",
  "organId": "68",
  "providerId": "68",
  "providerName": "damien.dietrich",
  "foreignId": "68",
  "type": "ivtuxy",
  "subType": "rpnhzs",
  "name": "damien.dietrich",
  "signature": "mwyfks",
  "content": "mlgm8p",
  "priority": 971,
  "status": 260,
  "delFlag": 2,
  "description": "ztz02b",
  "spare1": "w2gpfu",
  "spare2": "0pl8ye"
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
  "data": "653zaw",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:15",
  "lastTime": "2026-09-04 00:09:15",
  "id": "68",
  "appId": "68",
  "organId": "68",
  "providerId": "68",
  "providerName": "damien.dietrich",
  "foreignId": "68",
  "type": "9j6u5x",
  "subType": "cww5sb",
  "name": "damien.dietrich",
  "signature": "n5av30",
  "content": "3uwq4x",
  "priority": 818,
  "status": 322,
  "delFlag": 2,
  "description": "y8mgfe",
  "spare1": "0ibugv",
  "spare2": "ke5xs9"
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
  "data": "gzcd8x",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "rivfcy",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/message/list.do?q=2ejdcs&msgCreateTime=2026-09-04 00:09:16&msgAccountId=68&msgModuleName=damien.dietrich&msgUserId=68&bizType=s21kyj&msgAbstract=6wwm79&msgAccountName=damien.dietrich&msgOrganId=68&opOrganName=damien.dietrich&status=moiolu&msgTitle=pxr66w&msgType=963&opUserId=68&msgUrl=www.evie-walter.net&description=xdhvnc&msgLabels=928ru0&spare2=1qdio4&limit=10&type=vnfl9a&opTime=2026-09-04 00:09:16&startTime=2026-09-04 00:07:57&orderBy=821&endTime=2026-09-04 00:07:57&msgModuleId=68&creatorId=68&msgContent=eyagxx&foreignId=68&page=1&appId=68&msgUserName=damien.dietrich&msgOrganName=damien.dietrich&opOrganId=68&spare1=tme6ch&id=68&msgId=764
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:16",
      "lastTime": "2026-09-04 00:09:16",
      "id": "68",
      "appId": "68",
      "foreignId": "68",
      "type": "u9bu0e",
      "bizType": "lk7gk0",
      "msgCreateTime": "2026-09-04 00:09:16",
      "msgId": 798,
      "msgType": 726,
      "msgTitle": "8gfcec",
      "msgAbstract": "zx42aq",
      "msgAccountId": "68",
      "msgAccountName": "damien.dietrich",
      "msgModuleId": "68",
      "msgModuleName": "damien.dietrich",
      "msgUserId": "68",
      "msgUserName": "damien.dietrich",
      "msgOrganId": "68",
      "msgOrganName": "damien.dietrich",
      "msgUrl": "www.evie-walter.net",
      "msgLabels": "qsicm5",
      "msgContent": "t73heq",
      "status": "2vtne8",
      "opUserId": "68",
      "opTime": "2026-09-04 00:09:16",
      "opOrganId": "68",
      "opOrganName": "damien.dietrich",
      "description": "672659",
      "spare1": "5x6mev",
      "spare2": "h8q2l4"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/message/export.do --data 'orderBy=522&msgAccountId=68&msgOrganId=68&appId=68&bizType=vlldcn&writer.autoFlush=true&msgUserName=damien.dietrich&endTime=2026-09-04 00:07:57&msgCreateTime=2026-09-04 00:09:16&writer.psOut.closing=true&contentType=3epzof&spare1=7kcuvd&writer.formatter.zero=6&msgContent=o5az6f&msgUrl=www.evie-walter.net&limit=10&opUserId=68&creatorId=68&characterEncoding=t5txhh&spare2=zsjkpe&writer.psOut.closed=true&opOrganName=damien.dietrich&q=s3igbh&type=pajifd&msgModuleId=68&msgOrganName=damien.dietrich&writer.writeBuffer=f&writer.writeBuffer=f&msgLabels=hqfhoc&status=417&writer.psOut.autoFlush=true&writer.psOut.textOut.nChars=412&opTime=2026-09-04 00:09:16&committed=true&writer.formatter.lastException.detailMessage=success&msgAbstract=7ba8uo&startTime=2026-09-04 00:07:57&page=1&bufferSize=10&msgAccountName=damien.dietrich&writer.psOut.textOut.nextChar=79&description=ip368c&msgType=658&writer.psOut.trouble=true&msgModuleName=damien.dietrich&msgId=976&opOrganId=68&msgUserId=68&msgTitle=0tm9sf&writer.psOut.formatter.zero=m&foreignId=68&id=68&status=oeya6m&writer.trouble=true'
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
  "data": "hvwgai",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:16",
    "lastTime": "2026-09-04 00:09:16",
    "id": "68",
    "appId": "68",
    "foreignId": "68",
    "type": "it13gg",
    "bizType": "ojfpct",
    "msgCreateTime": "2026-09-04 00:09:16",
    "msgId": 565,
    "msgType": 846,
    "msgTitle": "4yltce",
    "msgAbstract": "ghobqa",
    "msgAccountId": "68",
    "msgAccountName": "damien.dietrich",
    "msgModuleId": "68",
    "msgModuleName": "damien.dietrich",
    "msgUserId": "68",
    "msgUserName": "damien.dietrich",
    "msgOrganId": "68",
    "msgOrganName": "damien.dietrich",
    "msgUrl": "www.evie-walter.net",
    "msgLabels": "dt5qaz",
    "msgContent": "t94ij1",
    "status": "cr8rb0",
    "opUserId": "68",
    "opTime": "2026-09-04 00:09:16",
    "opOrganId": "68",
    "opOrganName": "damien.dietrich",
    "description": "n1ws66",
    "spare1": "zvcraf",
    "spare2": "p0zkjq"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:16",
  "lastTime": "2026-09-04 00:09:16",
  "id": "68",
  "appId": "68",
  "foreignId": "68",
  "type": "h6bl4o",
  "bizType": "h84saa",
  "msgCreateTime": "2026-09-04 00:09:16",
  "msgId": 917,
  "msgType": 564,
  "msgTitle": "r0jqyf",
  "msgAbstract": "xc4mwb",
  "msgAccountId": "68",
  "msgAccountName": "damien.dietrich",
  "msgModuleId": "68",
  "msgModuleName": "damien.dietrich",
  "msgUserId": "68",
  "msgUserName": "damien.dietrich",
  "msgOrganId": "68",
  "msgOrganName": "damien.dietrich",
  "msgUrl": "www.evie-walter.net",
  "msgLabels": "ys9d4l",
  "msgContent": "z9zx88",
  "status": "lhj03r",
  "opUserId": "68",
  "opTime": "2026-09-04 00:09:16",
  "opOrganId": "68",
  "opOrganName": "damien.dietrich",
  "description": "anmc8s",
  "spare1": "ztiltz",
  "spare2": "be5hd5"
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
  "data": "fopump",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:16",
  "lastTime": "2026-09-04 00:09:16",
  "id": "68",
  "appId": "68",
  "foreignId": "68",
  "type": "8ej2e5",
  "bizType": "00j0ww",
  "msgCreateTime": "2026-09-04 00:09:16",
  "msgId": 5,
  "msgType": 661,
  "msgTitle": "p6pazd",
  "msgAbstract": "wr0zwa",
  "msgAccountId": "68",
  "msgAccountName": "damien.dietrich",
  "msgModuleId": "68",
  "msgModuleName": "damien.dietrich",
  "msgUserId": "68",
  "msgUserName": "damien.dietrich",
  "msgOrganId": "68",
  "msgOrganName": "damien.dietrich",
  "msgUrl": "www.evie-walter.net",
  "msgLabels": "mnfy9e",
  "msgContent": "na38s5",
  "status": "iuz3u5",
  "opUserId": "68",
  "opTime": "2026-09-04 00:09:16",
  "opOrganId": "68",
  "opOrganName": "damien.dietrich",
  "description": "18wx67",
  "spare1": "n9xcqt",
  "spare2": "28emf2"
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
  "data": "5pgzo6",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "kl836x",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/message/read/9xssrs.do
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
  "data": "frd2v0",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/preset/list.do?keyWords=obt1el&limit=10&page=1&appId=68&q=0tfjkb&status=915&syncMode=5gvg1u&groupId=703&positionId=68&organId=68&endTime=2026-09-04 00:07:57&startTime=2026-09-04 00:07:57&areaId=896&type=og3aik&batchId=68&orderBy=143
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
    "totalCount": 917,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:14",
        "lastTime": "2026-09-04 00:09:14",
        "id": 784,
        "appId": "68",
        "saveSource": "7k29vz",
        "unitName": "damien.dietrich",
        "name": "damien.dietrich",
        "idNum": "hbdsjt",
        "duty": "04cosc",
        "telephone": "(718) 541-6787",
        "mobile": "205.573.4959",
        "extInfo1": "kgzn54",
        "extInfo2": "us0srp",
        "extInfo3": "nrw7uy",
        "needInitUser": true,
        "userId": "68",
        "needInitOrgan": true,
        "organId": "68",
        "type": "4ecdec",
        "foreignUrl": "www.evie-walter.net",
        "bizType": 628,
        "bizOrganId": "68",
        "bizAreaId": 363,
        "bizGroupId": 156,
        "bizPower": "lq0ki6",
        "bizMultiInfo": "i4t340",
        "needSetOrgan": true,
        "needSetArea": true,
        "needSetGroup": true,
        "needSetPower": true,
        "opUserId": "68",
        "opOrganId": "68",
        "opTime": "2026-09-04 00:09:14",
        "opInfo": "tt7lv9",
        "priority": 901,
        "status": 766,
        "delFlag": 2,
        "dataBatch": "tayi2f",
        "dataVersion": 106,
        "updateTime": "2026-09-04 00:09:14",
        "syncMode": "gvmo19",
        "syncTime": "2026-09-04 00:09:14",
        "description": "dli9p4",
        "groupName": "damien.dietrich",
        "positionName": "damien.dietrich",
        "bizPowerName": "damien.dietrich",
        "subdistrictName": "damien.dietrich",
        "communityName": "damien.dietrich"
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/preset/export.do --data 'writer.formatter.lastException.detailMessage=success&appId=68&characterEncoding=zarrmw&writer.psOut.textOut.nextChar=755&writer.psOut.trouble=true&writer.writeBuffer=a&writer.writeBuffer=a&syncMode=kcibn3&limit=10&writer.trouble=true&organId=68&writer.autoFlush=true&status=512&groupId=799&page=1&positionId=68&contentType=w4ujxl&writer.psOut.textOut.nChars=786&writer.formatter.zero=h&type=e40hih&areaId=37&keyWords=w4bh9i&endTime=2026-09-04 00:07:57&writer.psOut.closing=true&q=oe3nz2&startTime=2026-09-04 00:07:57&batchId=68&committed=true&orderBy=733&writer.psOut.closed=true&writer.psOut.autoFlush=true&writer.psOut.formatter.zero=f&bufferSize=10&status=682'
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
  "data": "m7spbo",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/preset/40.do
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:15",
    "lastTime": "2026-09-04 00:09:15",
    "id": 831,
    "appId": "68",
    "saveSource": "wdgqms",
    "unitName": "damien.dietrich",
    "name": "damien.dietrich",
    "idNum": "nyqxtr",
    "duty": "vzdoqk",
    "telephone": "(718) 541-6787",
    "mobile": "205.573.4959",
    "extInfo1": "y6athf",
    "extInfo2": "58yn5q",
    "extInfo3": "athpay",
    "needInitUser": true,
    "userId": "68",
    "needInitOrgan": true,
    "organId": "68",
    "type": "g1bl4v",
    "foreignUrl": "www.evie-walter.net",
    "bizType": 57,
    "bizOrganId": "68",
    "bizAreaId": 823,
    "bizGroupId": 659,
    "bizPower": "2l4poa",
    "bizMultiInfo": "4jyyao",
    "needSetOrgan": true,
    "needSetArea": true,
    "needSetGroup": true,
    "needSetPower": true,
    "opUserId": "68",
    "opOrganId": "68",
    "opTime": "2026-09-04 00:09:15",
    "opInfo": "0jse0o",
    "priority": 917,
    "status": 964,
    "delFlag": 2,
    "dataBatch": "h216rs",
    "dataVersion": 338,
    "updateTime": "2026-09-04 00:09:15",
    "syncMode": "qyg5fx",
    "syncTime": "2026-09-04 00:09:15",
    "description": "7llyey",
    "groupName": "damien.dietrich",
    "positionName": "damien.dietrich",
    "bizPowerName": "damien.dietrich",
    "subdistrictName": "damien.dietrich",
    "communityName": "damien.dietrich"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:15",
  "lastTime": "2026-09-04 00:09:15",
  "id": 207,
  "appId": "68",
  "saveSource": "faiovg",
  "unitName": "damien.dietrich",
  "name": "damien.dietrich",
  "idNum": "dz89bs",
  "duty": "dyu1hz",
  "telephone": "(718) 541-6787",
  "mobile": "205.573.4959",
  "extInfo1": "mqsh8i",
  "extInfo2": "d271n1",
  "extInfo3": "jrahz7",
  "needInitUser": true,
  "userId": "68",
  "needInitOrgan": true,
  "organId": "68",
  "type": "6srnvx",
  "foreignUrl": "www.evie-walter.net",
  "bizType": 369,
  "bizOrganId": "68",
  "bizAreaId": 829,
  "bizGroupId": 261,
  "bizPower": "i3dd0v",
  "bizMultiInfo": "nyd707",
  "needSetOrgan": true,
  "needSetArea": true,
  "needSetGroup": true,
  "needSetPower": true,
  "opUserId": "68",
  "opOrganId": "68",
  "opTime": "2026-09-04 00:09:15",
  "opInfo": "ol6j1b",
  "priority": 264,
  "status": 689,
  "delFlag": 2,
  "dataBatch": "kpvwkr",
  "dataVersion": 654,
  "updateTime": "2026-09-04 00:09:15",
  "syncMode": "thcgqv",
  "syncTime": "2026-09-04 00:09:15",
  "description": "3rs62v"
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
  "data": "bewgx2",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:15",
  "lastTime": "2026-09-04 00:09:15",
  "id": 789,
  "appId": "68",
  "saveSource": "osfjbl",
  "unitName": "damien.dietrich",
  "name": "damien.dietrich",
  "idNum": "9qanm5",
  "duty": "8swut9",
  "telephone": "(718) 541-6787",
  "mobile": "205.573.4959",
  "extInfo1": "juu40n",
  "extInfo2": "iumc8t",
  "extInfo3": "pwsu2s",
  "needInitUser": true,
  "userId": "68",
  "needInitOrgan": true,
  "organId": "68",
  "type": "0pqiru",
  "foreignUrl": "www.evie-walter.net",
  "bizType": 534,
  "bizOrganId": "68",
  "bizAreaId": 913,
  "bizGroupId": 303,
  "bizPower": "pe8a94",
  "bizMultiInfo": "spur25",
  "needSetOrgan": true,
  "needSetArea": true,
  "needSetGroup": true,
  "needSetPower": true,
  "opUserId": "68",
  "opOrganId": "68",
  "opTime": "2026-09-04 00:09:15",
  "opInfo": "9deftm",
  "priority": 829,
  "status": 481,
  "delFlag": 2,
  "dataBatch": "tlhdq9",
  "dataVersion": 770,
  "updateTime": "2026-09-04 00:09:15",
  "syncMode": "9madfu",
  "syncTime": "2026-09-04 00:09:15",
  "description": "skso5g"
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
  "data": "upoayu",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "5zkxce",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "e9fvxd",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "username": "damien.dietrich",
  "password": "zv7sa4",
  "code": "23522",
  "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52",
  "appId": "68"
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
  "data": "bmwy1r",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/loginlog/list.do?ipaddr=bo32bm&q=bucabm&loginTime=2026-09-04 00:09:17&msg=v4mftw&orderBy=801&username=damien.dietrich&browser=3lickw&limit=10&startTime=2026-09-04 00:07:57&page=1&os=trcvj5&endTime=2026-09-04 00:07:57&infoId=717&status=yy3htm
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
    "totalCount": 469,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "infoId": 401,
        "username": "damien.dietrich",
        "status": "9c80dn",
        "ipaddr": "nc8xdu",
        "loginLocation": "ph1bef",
        "browser": "yextjs",
        "os": "qu0q3o",
        "msg": "awvkgf",
        "loginTime": "2026-09-04 00:09:17",
        "remark": "u8d20p"
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/loginlog/export.do --data 'status=861&writer.formatter.lastException.detailMessage=success&startTime=2026-09-04 00:07:57&writer.psOut.trouble=true&writer.psOut.closing=true&writer.psOut.textOut.nextChar=98&characterEncoding=mz3ri1&q=ihrqqq&page=1&writer.formatter.zero=p&contentType=w7ii1l&writer.psOut.closed=true&writer.psOut.formatter.zero=n&msg=um5s83&writer.autoFlush=true&committed=true&ipaddr=657urd&os=9gkj5b&bufferSize=10&status=e6seuk&writer.writeBuffer=q&writer.writeBuffer=q&writer.trouble=true&limit=10&writer.psOut.autoFlush=true&orderBy=226&infoId=833&writer.psOut.textOut.nChars=558&username=damien.dietrich&browser=62pmr8&loginTime=2026-09-04 00:09:17&endTime=2026-09-04 00:07:57'
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
  "data": "xvv0ha",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "fdytvy",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "k4bx1f",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/loginlog/unlock/damien.dietrich.do
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
  "data": "u9qysi",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/list.do?username=damien.dietrich&startTime=2026-09-04 00:07:57&q=j9z7i8&adminId=427&organId=68&deptId=478&status=4dfh1h&endTime=2026-09-04 00:07:57&email=rudy.vandervort@hotmail.com&delFlag=2&page=1&orderBy=465&limit=10&nickName=cicely.medhurst&mobile=205.573.4959&userId=68
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:11",
      "lastTime": "2026-09-04 00:09:11",
      "id": 777,
      "userId": "68",
      "deptId": 820,
      "deptName": "damien.dietrich",
      "organId": "68",
      "organName": "damien.dietrich",
      "name": "damien.dietrich",
      "username": "damien.dietrich",
      "nickName": "cicely.medhurst",
      "email": "rudy.vandervort@hotmail.com",
      "mobile": "205.573.4959",
      "imagePath": "n0qt3x",
      "password": "0c35a8",
      "isSuperAdmin": true,
      "isAuditAdmin": true,
      "isSelfAdmin": true,
      "status": 14,
      "delFlag": 2,
      "lastLoginIp": "24.62.148.61",
      "lastLoginTime": "2026-09-04 00:09:11",
      "description": "4wbuj3",
      "dept": {
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:11",
        "lastTime": "2026-09-04 00:09:11",
        "id": 586,
        "organId": "68",
        "parentId": 249,
        "appId": "68",
        "depttypeId": 332,
        "foreignId": "68",
        "createType": 115,
        "type": "bf9hlu",
        "name": "damien.dietrich",
        "sname": "damien.dietrich",
        "areaCode": "23522",
        "organLeader": "qsyqkk",
        "leaderId": "68",
        "leaderMobile": "205.573.4959",
        "isOrganLevel": true,
        "isVirtual": true,
        "isLeaf": true,
        "isDisabled": true,
        "searchCode": "23522",
        "imagePath": "rcqj0i",
        "priority": 352,
        "status": 289,
        "delFlag": 2,
        "description": "2v2qfc",
        "spare1": "kd7wik",
        "spare2": "zvkd9r",
        "children": [
          {
            "$ref": ".."
          }
        ]
      },
      "roles": [
        {
          "creatorId": "68",
          "createTime": "2026-09-04 00:09:11",
          "lastTime": "2026-09-04 00:09:11",
          "id": 353,
          "roletypeId": "68",
          "appId": "68",
          "name": "damien.dietrich",
          "code": "23522",
          "priority": 259,
          "isRegular": true,
          "isSuper": true,
          "isPublic": true,
          "status": 156,
          "description": "8jfgp5",
          "areaType": "etskc5"
        }
      ],
      "roleIds": [
        645
      ],
      "positionIds": [
        "lygyb0"
      ],
      "roleId": 45,
      "userRoleList": [
        {
          "id": 369,
          "deptId": 507,
          "deptName": "damien.dietrich",
          "organId": "68",
          "organName": "damien.dietrich",
          "roleId": 687,
          "roleName": "damien.dietrich",
          "adminId": 51
        }
      ],
      "code": "23522",
      "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/[user/150].do
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:11",
      "lastTime": "2026-09-04 00:09:11",
      "id": 88,
      "userId": "68",
      "deptId": 972,
      "deptName": "damien.dietrich",
      "organId": "68",
      "organName": "damien.dietrich",
      "name": "damien.dietrich",
      "username": "damien.dietrich",
      "nickName": "cicely.medhurst",
      "email": "rudy.vandervort@hotmail.com",
      "mobile": "205.573.4959",
      "imagePath": "3ns5q1",
      "password": "bkwhjt",
      "isSuperAdmin": true,
      "isAuditAdmin": true,
      "isSelfAdmin": true,
      "status": 479,
      "delFlag": 2,
      "lastLoginIp": "24.62.148.61",
      "lastLoginTime": "2026-09-04 00:09:11",
      "description": "qs3r2m",
      "dept": {
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:11",
        "lastTime": "2026-09-04 00:09:11",
        "id": 146,
        "organId": "68",
        "parentId": 423,
        "appId": "68",
        "depttypeId": 347,
        "foreignId": "68",
        "createType": 623,
        "type": "mso6vn",
        "name": "damien.dietrich",
        "sname": "damien.dietrich",
        "areaCode": "23522",
        "organLeader": "qv25b2",
        "leaderId": "68",
        "leaderMobile": "205.573.4959",
        "isOrganLevel": true,
        "isVirtual": true,
        "isLeaf": true,
        "isDisabled": true,
        "searchCode": "23522",
        "imagePath": "7to5ia",
        "priority": 80,
        "status": 871,
        "delFlag": 2,
        "description": "9hrqw9",
        "spare1": "kry19n",
        "spare2": "2sg77i",
        "children": [
          {
            "$ref": ".."
          }
        ]
      },
      "roles": [
        {
          "creatorId": "68",
          "createTime": "2026-09-04 00:09:11",
          "lastTime": "2026-09-04 00:09:11",
          "id": 935,
          "roletypeId": "68",
          "appId": "68",
          "name": "damien.dietrich",
          "code": "23522",
          "priority": 32,
          "isRegular": true,
          "isSuper": true,
          "isPublic": true,
          "status": 464,
          "description": "jck9zz",
          "areaType": "ryqqpe"
        }
      ],
      "roleIds": [
        891
      ],
      "positionIds": [
        "trccmm"
      ],
      "roleId": 87,
      "userRoleList": [
        {
          "id": 480,
          "deptId": 195,
          "deptName": "damien.dietrich",
          "organId": "68",
          "organName": "damien.dietrich",
          "roleId": 304,
          "roleName": "damien.dietrich",
          "adminId": 971
        }
      ],
      "code": "23522",
      "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52"
    },
    "roles": [
      {
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:11",
        "lastTime": "2026-09-04 00:09:11",
        "roleId": 86,
        "roleName": "damien.dietrich",
        "roleKey": "df2joj",
        "roleSort": 420,
        "menuCheckStrictly": true,
        "deptCheckStrictly": true,
        "status": 260,
        "flag": true,
        "menuIds": [
          768
        ],
        "deptIds": [
          736
        ],
        "permissions": [
          "n38cqi"
        ],
        "remark": "wz0kix",
        "parentName": "damien.dietrich",
        "appName": "damien.dietrich",
        "roletypeId": "68",
        "roletypeName": "damien.dietrich",
        "priority": 519,
        "isSuper": true
      }
    ],
    "roleList": [
      {
        "id": 760,
        "roleId": 920,
        "adminId": 726,
        "deptId": 625,
        "deptName": "damien.dietrich",
        "organId": "68",
        "organName": "damien.dietrich",
        "roleName": "damien.dietrich"
      }
    ],
    "positions": [
      {
        "postId": "68",
        "postCode": "23522",
        "postName": "damien.dietrich",
        "postSort": 541,
        "status": 659,
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:11",
        "lastTime": "2026-09-04 00:09:11",
        "delFlag": 2,
        "remark": "5raxn8",
        "ids": [
          "6ka5sx"
        ],
        "positionId": "68",
        "flag": true
      }
    ],
    "roleIds": [
      131
    ],
    "positionIds": [
      "mi3kz7"
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/deptTree.do?foreignId=68&leaderId=68&isVirtual=true&searchCode=23522&status=773&name=damien.dietrich&description=o49blx&isDisabled=true&delFlag=2&appId=68&isLeaf=true&sname=damien.dietrich&type=eprm56&orderBy=77&limit=10&imagePath=s4yf8h&q=5b3oel&startTime=2026-09-04 00:07:57&organId=68&page=1&areaCode=23522&depttypeId=11&createType=940&deptId=577&organLeader=fbyt80&parentId=77&creatorId=68&spare2=4kdr3y&spare1=vsirut&isOrganLevel=true&leaderMobile=205.573.4959&endTime=2026-09-04 00:07:57
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
      "id": 945,
      "label": "3bi8rc",
      "children": [
        {
          "$ref": ".."
        }
      ]
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:11",
  "lastTime": "2026-09-04 00:09:11",
  "id": 660,
  "userId": "68",
  "deptId": 437,
  "deptName": "damien.dietrich",
  "organId": "68",
  "organName": "damien.dietrich",
  "name": "damien.dietrich",
  "username": "damien.dietrich",
  "nickName": "cicely.medhurst",
  "email": "rudy.vandervort@hotmail.com",
  "mobile": "205.573.4959",
  "imagePath": "1afbi5",
  "password": "dsi2l1",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "status": 765,
  "delFlag": 2,
  "lastLoginIp": "24.62.148.61",
  "lastLoginTime": "2026-09-04 00:09:11",
  "description": "rs46md",
  "dept": {
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:11",
    "lastTime": "2026-09-04 00:09:11",
    "id": 81,
    "organId": "68",
    "parentId": 19,
    "appId": "68",
    "depttypeId": 874,
    "foreignId": "68",
    "createType": 830,
    "type": "peztmo",
    "name": "damien.dietrich",
    "sname": "damien.dietrich",
    "areaCode": "23522",
    "organLeader": "qc2pto",
    "leaderId": "68",
    "leaderMobile": "205.573.4959",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "23522",
    "imagePath": "nl9mym",
    "priority": 15,
    "status": 455,
    "delFlag": 2,
    "description": "7tkk1t",
    "spare1": "rdrn89",
    "spare2": "euc5d5",
    "children": [
      {
        "$ref": ".."
      }
    ]
  },
  "roles": [
    {
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:11",
      "lastTime": "2026-09-04 00:09:11",
      "id": 944,
      "roletypeId": "68",
      "appId": "68",
      "name": "damien.dietrich",
      "code": "23522",
      "priority": 170,
      "isRegular": true,
      "isSuper": true,
      "isPublic": true,
      "status": 912,
      "description": "ft3gzw",
      "areaType": "y68q73"
    }
  ],
  "roleIds": [
    658
  ],
  "positionIds": [
    "5e0a8o"
  ],
  "roleId": 757,
  "userRoleList": [
    {
      "id": 228,
      "deptId": 234,
      "deptName": "damien.dietrich",
      "organId": "68",
      "organName": "damien.dietrich",
      "roleId": 531,
      "roleName": "damien.dietrich",
      "adminId": 680
    }
  ],
  "code": "23522",
  "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52"
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
  "data": "f2jbjc",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:11",
  "lastTime": "2026-09-04 00:09:11",
  "id": 792,
  "userId": "68",
  "deptId": 696,
  "deptName": "damien.dietrich",
  "organId": "68",
  "organName": "damien.dietrich",
  "name": "damien.dietrich",
  "username": "damien.dietrich",
  "nickName": "cicely.medhurst",
  "email": "rudy.vandervort@hotmail.com",
  "mobile": "205.573.4959",
  "imagePath": "rbcrfe",
  "password": "crpod1",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "status": 939,
  "delFlag": 2,
  "lastLoginIp": "24.62.148.61",
  "lastLoginTime": "2026-09-04 00:09:11",
  "description": "pv4wfh",
  "dept": {
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:11",
    "lastTime": "2026-09-04 00:09:11",
    "id": 888,
    "organId": "68",
    "parentId": 224,
    "appId": "68",
    "depttypeId": 864,
    "foreignId": "68",
    "createType": 864,
    "type": "ylthaw",
    "name": "damien.dietrich",
    "sname": "damien.dietrich",
    "areaCode": "23522",
    "organLeader": "mdjwfi",
    "leaderId": "68",
    "leaderMobile": "205.573.4959",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "23522",
    "imagePath": "7moexj",
    "priority": 51,
    "status": 47,
    "delFlag": 2,
    "description": "lkroz9",
    "spare1": "bc2yzj",
    "spare2": "ieicfo",
    "children": [
      {
        "$ref": ".."
      }
    ]
  },
  "roles": [
    {
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:11",
      "lastTime": "2026-09-04 00:09:11",
      "id": 723,
      "roletypeId": "68",
      "appId": "68",
      "name": "damien.dietrich",
      "code": "23522",
      "priority": 391,
      "isRegular": true,
      "isSuper": true,
      "isPublic": true,
      "status": 767,
      "description": "nzikh1",
      "areaType": "lxc2kk"
    }
  ],
  "roleIds": [
    903
  ],
  "positionIds": [
    "a3qz0r"
  ],
  "roleId": 989,
  "userRoleList": [
    {
      "id": 779,
      "deptId": 172,
      "deptName": "damien.dietrich",
      "organId": "68",
      "organName": "damien.dietrich",
      "roleId": 722,
      "roleName": "damien.dietrich",
      "adminId": 598
    }
  ],
  "code": "23522",
  "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52"
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
  "data": "x86xh8",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:11",
  "lastTime": "2026-09-04 00:09:11",
  "id": 867,
  "userId": "68",
  "organId": "68",
  "deptId": 543,
  "createType": 376,
  "name": "damien.dietrich",
  "username": "damien.dietrich",
  "mobile": "205.573.4959",
  "email": "rudy.vandervort@hotmail.com",
  "password": "17ngp9",
  "salt": "43a9g0",
  "imagePath": "80hio4",
  "adminType": "n3pxgx",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "adminRange": "jvjl7q",
  "adminPerms": "vbezg3",
  "lastAppId": "68",
  "lastLoginTime": "2026-09-04 00:09:11",
  "lastLoginIp": "24.62.148.61",
  "loginCount": 501,
  "status": 293,
  "delFlag": 2,
  "spare1": "98snps",
  "spare2": "97nwz7",
  "roleIds": [
    968
  ],
  "positionIds": [
    "agnzxk"
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
  "data": "1pin9a",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:11",
  "lastTime": "2026-09-04 00:09:11",
  "id": 987,
  "userId": "68",
  "deptId": 801,
  "deptName": "damien.dietrich",
  "organId": "68",
  "organName": "damien.dietrich",
  "name": "damien.dietrich",
  "username": "damien.dietrich",
  "nickName": "cicely.medhurst",
  "email": "rudy.vandervort@hotmail.com",
  "mobile": "205.573.4959",
  "imagePath": "1mfk7j",
  "password": "9o0ufs",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "status": 539,
  "delFlag": 2,
  "lastLoginIp": "24.62.148.61",
  "lastLoginTime": "2026-09-04 00:09:11",
  "description": "70y7ar",
  "dept": {
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:11",
    "lastTime": "2026-09-04 00:09:11",
    "id": 951,
    "organId": "68",
    "parentId": 379,
    "appId": "68",
    "depttypeId": 157,
    "foreignId": "68",
    "createType": 590,
    "type": "ofpllt",
    "name": "damien.dietrich",
    "sname": "damien.dietrich",
    "areaCode": "23522",
    "organLeader": "joe99v",
    "leaderId": "68",
    "leaderMobile": "205.573.4959",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "23522",
    "imagePath": "skkn1o",
    "priority": 830,
    "status": 373,
    "delFlag": 2,
    "description": "gbc9fs",
    "spare1": "mjtzgc",
    "spare2": "y37e4w",
    "children": [
      {
        "$ref": ".."
      }
    ]
  },
  "roles": [
    {
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:11",
      "lastTime": "2026-09-04 00:09:11",
      "id": 816,
      "roletypeId": "68",
      "appId": "68",
      "name": "damien.dietrich",
      "code": "23522",
      "priority": 518,
      "isRegular": true,
      "isSuper": true,
      "isPublic": true,
      "status": 834,
      "description": "r7gmru",
      "areaType": "uduv1j"
    }
  ],
  "roleIds": [
    914
  ],
  "positionIds": [
    "fkd0ui"
  ],
  "roleId": 327,
  "userRoleList": [
    {
      "id": 34,
      "deptId": 319,
      "deptName": "damien.dietrich",
      "organId": "68",
      "organName": "damien.dietrich",
      "roleId": 717,
      "roleName": "damien.dietrich",
      "adminId": 575
    }
  ],
  "code": "23522",
  "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52"
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
  "data": "ojniw7",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "49oocs",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/export.do --data 'writer.psOut.closed=true&writer.psOut.formatter.zero=r&nickName=cicely.medhurst&page=1&committed=true&writer.psOut.closing=true&orderBy=157&status=ivyrij&bufferSize=10&delFlag=2&writer.psOut.textOut.nextChar=882&writer.trouble=true&writer.formatter.zero=2&writer.autoFlush=true&characterEncoding=i6p1ur&writer.psOut.trouble=true&writer.psOut.textOut.nChars=510&deptId=692&q=4nq02h&contentType=fsbl8p&userId=68&status=748&email=rudy.vandervort@hotmail.com&writer.formatter.lastException.detailMessage=success&adminId=562&startTime=2026-09-04 00:07:57&writer.writeBuffer=7&writer.writeBuffer=7&writer.psOut.autoFlush=true&organId=68&limit=10&username=damien.dietrich&endTime=2026-09-04 00:07:57&mobile=205.573.4959'
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
  "data": "ynnsgz",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "iuuaxc",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-

**Request-example:**
```
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/importTemplate.do --data 'status=807&bufferSize=10&writer.psOut.autoFlush=true&writer.autoFlush=true&writer.psOut.formatter.zero=0&writer.formatter.lastException.detailMessage=success&writer.psOut.closing=true&writer.psOut.textOut.nextChar=260&writer.formatter.zero=n&writer.psOut.trouble=true&writer.writeBuffer=9&writer.writeBuffer=9&writer.trouble=true&writer.psOut.closed=true&writer.psOut.textOut.nChars=300&characterEncoding=4pa4ur&committed=true&contentType=c3o49k'
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
  "data": "y0aldi",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:11",
  "lastTime": "2026-09-04 00:09:11",
  "id": 52,
  "userId": "68",
  "deptId": 364,
  "deptName": "damien.dietrich",
  "organId": "68",
  "organName": "damien.dietrich",
  "name": "damien.dietrich",
  "username": "damien.dietrich",
  "nickName": "cicely.medhurst",
  "email": "rudy.vandervort@hotmail.com",
  "mobile": "205.573.4959",
  "imagePath": "1c01t0",
  "password": "l3td0i",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "status": 802,
  "delFlag": 2,
  "lastLoginIp": "24.62.148.61",
  "lastLoginTime": "2026-09-04 00:09:11",
  "description": "bvw970",
  "dept": {
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:11",
    "lastTime": "2026-09-04 00:09:11",
    "id": 521,
    "organId": "68",
    "parentId": 650,
    "appId": "68",
    "depttypeId": 401,
    "foreignId": "68",
    "createType": 216,
    "type": "thk0rb",
    "name": "damien.dietrich",
    "sname": "damien.dietrich",
    "areaCode": "23522",
    "organLeader": "6torcc",
    "leaderId": "68",
    "leaderMobile": "205.573.4959",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "23522",
    "imagePath": "vcmexd",
    "priority": 345,
    "status": 989,
    "delFlag": 2,
    "description": "d2xyxz",
    "spare1": "xhtht1",
    "spare2": "s7wev2",
    "children": [
      {
        "$ref": ".."
      }
    ]
  },
  "roles": [
    {
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:11",
      "lastTime": "2026-09-04 00:09:11",
      "id": 158,
      "roletypeId": "68",
      "appId": "68",
      "name": "damien.dietrich",
      "code": "23522",
      "priority": 941,
      "isRegular": true,
      "isSuper": true,
      "isPublic": true,
      "status": 744,
      "description": "2bmu9k",
      "areaType": "jp9i01"
    }
  ],
  "roleIds": [
    189
  ],
  "positionIds": [
    "35wy3x"
  ],
  "roleId": 528,
  "userRoleList": [
    {
      "id": 761,
      "deptId": 390,
      "deptName": "damien.dietrich",
      "organId": "68",
      "organName": "damien.dietrich",
      "roleId": 455,
      "roleName": "damien.dietrich",
      "adminId": 851
    }
  ],
  "code": "23522",
  "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52"
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
  "data": "kjthhk",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:11",
  "lastTime": "2026-09-04 00:09:11",
  "id": 623,
  "userId": "68",
  "deptId": 191,
  "deptName": "damien.dietrich",
  "organId": "68",
  "organName": "damien.dietrich",
  "name": "damien.dietrich",
  "username": "damien.dietrich",
  "nickName": "cicely.medhurst",
  "email": "rudy.vandervort@hotmail.com",
  "mobile": "205.573.4959",
  "imagePath": "e0grad",
  "password": "quqyih",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "status": 774,
  "delFlag": 2,
  "lastLoginIp": "24.62.148.61",
  "lastLoginTime": "2026-09-04 00:09:11",
  "description": "o652i7",
  "dept": {
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:11",
    "lastTime": "2026-09-04 00:09:11",
    "id": 242,
    "organId": "68",
    "parentId": 675,
    "appId": "68",
    "depttypeId": 492,
    "foreignId": "68",
    "createType": 940,
    "type": "rs5j0v",
    "name": "damien.dietrich",
    "sname": "damien.dietrich",
    "areaCode": "23522",
    "organLeader": "fz9wwi",
    "leaderId": "68",
    "leaderMobile": "205.573.4959",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "23522",
    "imagePath": "rhg7vo",
    "priority": 396,
    "status": 250,
    "delFlag": 2,
    "description": "z94d2q",
    "spare1": "w4h103",
    "spare2": "pucvak",
    "children": [
      {
        "$ref": ".."
      }
    ]
  },
  "roles": [
    {
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:11",
      "lastTime": "2026-09-04 00:09:11",
      "id": 858,
      "roletypeId": "68",
      "appId": "68",
      "name": "damien.dietrich",
      "code": "23522",
      "priority": 611,
      "isRegular": true,
      "isSuper": true,
      "isPublic": true,
      "status": 649,
      "description": "fwn1nr",
      "areaType": "5rk5iq"
    }
  ],
  "roleIds": [
    820
  ],
  "positionIds": [
    "e3dx8e"
  ],
  "roleId": 911,
  "userRoleList": [
    {
      "id": 676,
      "deptId": 947,
      "deptName": "damien.dietrich",
      "organId": "68",
      "organName": "damien.dietrich",
      "roleId": 421,
      "roleName": "damien.dietrich",
      "adminId": 237
    }
  ],
  "code": "23522",
  "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52"
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
  "data": "6i1bc8",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/authRole/738.do
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
  "data": "7sxb50",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/authRole.do --data 'adminId=769&roleIds=x6zf8u&roleIds=x6zf8u'
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
  "data": "g8p0st",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─username|string|用户名|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─password|string|密码|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─authorities|array|No comments found.|-
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
      "username": "damien.dietrich",
      "password": "74bj81",
      "authorities": [
        {
          "object": "any object"
        }
      ],
      "userId": "68",
      "userLid": 213,
      "appId": "68",
      "deptId": 9,
      "organId": "68",
      "token": "s0bssl",
      "viewName": "damien.dietrich",
      "needChangePassword": true,
      "email": "rudy.vandervort@hotmail.com",
      "mobile": "205.573.4959",
      "imagePath": "uxzf8j",
      "loginCount": 844,
      "loginIp": "24.62.148.61",
      "lastUpdatePasswordTime": "2026-09-04 00:09:12",
      "lastTime": "2026-09-04 00:09:12",
      "foreignId": "68",
      "expireTime": "2026-09-04 00:09:12",
      "loginTime": "2026-09-04 00:09:12",
      "userType": "65w3uh",
      "isSuperAdmin": true,
      "loginBrowse": "w79vue",
      "loginOs": "wibh3i",
      "perms": [
        "fgirc4"
      ]
    },
    "roleGroup": "v41pzj",
    "positionGroup": "po95em"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:12",
    "lastTime": "2026-09-04 00:09:12",
    "id": 71,
    "userId": "68",
    "deptId": 67,
    "deptName": "damien.dietrich",
    "organId": "68",
    "organName": "damien.dietrich",
    "name": "damien.dietrich",
    "username": "damien.dietrich",
    "nickName": "cicely.medhurst",
    "email": "rudy.vandervort@hotmail.com",
    "mobile": "205.573.4959",
    "imagePath": "g7fj7g",
    "password": "8gbfs6",
    "isSuperAdmin": true,
    "isAuditAdmin": true,
    "isSelfAdmin": true,
    "status": 390,
    "delFlag": 2,
    "lastLoginIp": "24.62.148.61",
    "lastLoginTime": "2026-09-04 00:09:12",
    "description": "fwf6k3",
    "dept": {
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:12",
      "lastTime": "2026-09-04 00:09:12",
      "id": 978,
      "organId": "68",
      "parentId": 887,
      "appId": "68",
      "depttypeId": 150,
      "foreignId": "68",
      "createType": 548,
      "type": "bz0yyn",
      "name": "damien.dietrich",
      "sname": "damien.dietrich",
      "areaCode": "23522",
      "organLeader": "o4p3cb",
      "leaderId": "68",
      "leaderMobile": "205.573.4959",
      "isOrganLevel": true,
      "isVirtual": true,
      "isLeaf": true,
      "isDisabled": true,
      "searchCode": "23522",
      "imagePath": "jqqais",
      "priority": 495,
      "status": 870,
      "delFlag": 2,
      "description": "h45e2d",
      "spare1": "eo148d",
      "spare2": "cmoubu",
      "children": [
        {
          "$ref": ".."
        }
      ]
    },
    "roles": [
      {
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:12",
        "lastTime": "2026-09-04 00:09:12",
        "id": 910,
        "roletypeId": "68",
        "appId": "68",
        "name": "damien.dietrich",
        "code": "23522",
        "priority": 928,
        "isRegular": true,
        "isSuper": true,
        "isPublic": true,
        "status": 969,
        "description": "a83ung",
        "areaType": "3mrcuw"
      }
    ],
    "roleIds": [
      377
    ],
    "positionIds": [
      "shty29"
    ],
    "roleId": 761,
    "userRoleList": [
      {
        "id": 727,
        "deptId": 443,
        "deptName": "damien.dietrich",
        "organId": "68",
        "organName": "damien.dietrich",
        "roleId": 548,
        "roleName": "damien.dietrich",
        "adminId": 363
      }
    ],
    "code": "23522",
    "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:12",
  "lastTime": "2026-09-04 00:09:12",
  "id": 738,
  "userId": "68",
  "deptId": 573,
  "deptName": "damien.dietrich",
  "organId": "68",
  "organName": "damien.dietrich",
  "name": "damien.dietrich",
  "username": "damien.dietrich",
  "nickName": "cicely.medhurst",
  "email": "rudy.vandervort@hotmail.com",
  "mobile": "205.573.4959",
  "imagePath": "6gszoh",
  "password": "6c6dc6",
  "isSuperAdmin": true,
  "isAuditAdmin": true,
  "isSelfAdmin": true,
  "status": 657,
  "delFlag": 2,
  "lastLoginIp": "24.62.148.61",
  "lastLoginTime": "2026-09-04 00:09:12",
  "description": "ay1ctk",
  "dept": {
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:12",
    "lastTime": "2026-09-04 00:09:12",
    "id": 971,
    "organId": "68",
    "parentId": 830,
    "appId": "68",
    "depttypeId": 536,
    "foreignId": "68",
    "createType": 358,
    "type": "tqbh9o",
    "name": "damien.dietrich",
    "sname": "damien.dietrich",
    "areaCode": "23522",
    "organLeader": "7kduk1",
    "leaderId": "68",
    "leaderMobile": "205.573.4959",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "23522",
    "imagePath": "wl2eul",
    "priority": 194,
    "status": 270,
    "delFlag": 2,
    "description": "or1324",
    "spare1": "wt7zlz",
    "spare2": "i815lo",
    "children": [
      {
        "$ref": ".."
      }
    ]
  },
  "roles": [
    {
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:12",
      "lastTime": "2026-09-04 00:09:12",
      "id": 604,
      "roletypeId": "68",
      "appId": "68",
      "name": "damien.dietrich",
      "code": "23522",
      "priority": 393,
      "isRegular": true,
      "isSuper": true,
      "isPublic": true,
      "status": 504,
      "description": "57wfua",
      "areaType": "uyf6ka"
    }
  ],
  "roleIds": [
    695
  ],
  "positionIds": [
    "5iqtcj"
  ],
  "roleId": 194,
  "userRoleList": [
    {
      "id": 350,
      "deptId": 721,
      "deptName": "damien.dietrich",
      "organId": "68",
      "organName": "damien.dietrich",
      "roleId": 100,
      "roleName": "damien.dietrich",
      "adminId": 585
    }
  ],
  "code": "23522",
  "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52"
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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "oldPassword": "gc9bf2",
  "newPassword": "eqiw2z"
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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
method|string|No comments found.|false|-
parts|array|No comments found.|false|-
headerNames|object|No comments found.|false|-
session|object|No comments found.|false|-
└─id|string|No comments found.|false|-
└─creationTime|int64|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─lastAccessedTime|int64|No comments found.|false|-
└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
└─new|boolean|No comments found.|false|-
└─maxInactiveInterval|int32|No comments found.|false|-
userPrincipal|object|No comments found.|false|-
└─name|string|No comments found.|false|-
trailerFields|map|No comments found.|false|-
└─any object|object|any object.|false|-
cookies|array|No comments found.|false|-
└─name|string|No comments found.|false|-
└─value|string|No comments found.|false|-
└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
queryString|string|No comments found.|false|-
authType|string|No comments found.|false|-
contextPath|string|No comments found.|false|-
requestURI|string|No comments found.|false|-
pathTranslated|string|No comments found.|false|-
servletPath|string|No comments found.|false|-
pathInfo|string|No comments found.|false|-
remoteUser|string|No comments found.|false|-
requestURL|object|No comments found.|false|-
└─empty|boolean|No comments found.|false|-
└─value|array|No comments found.|false|-
└─coder|int8|No comments found.|false|-
└─count|int32|No comments found.|false|-
requestedSessionId|string|No comments found.|false|-
requestedSessionIdFromCookie|boolean|No comments found.|false|-
requestedSessionIdValid|boolean|No comments found.|false|-
httpServletMapping|object|No comments found.|false|-
└─pattern|string|No comments found.|false|-
└─mappingMatch|enum|null<br/>CONTEXT_ROOT<br/>DEFAULT<br/>EXACT<br/>EXTENSION<br/>PATH<br/>|false|-
└─servletName|string|No comments found.|false|-
└─matchValue|string|No comments found.|false|-
requestedSessionIdFromURL|boolean|No comments found.|false|-
trailerFieldsReady|boolean|No comments found.|false|-
scheme|string|No comments found.|false|-
inputStream|object|No comments found.|false|-
protocol|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentLength|int32|No comments found.|false|-
contentLengthLong|int64|No comments found.|false|-
contentType|string|No comments found.|false|-
localName|string|No comments found.|false|-
attributeNames|object|No comments found.|false|-
parameterMap|map|No comments found.|false|-
└─any object|object|any object.|false|-
parameterNames|object|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
remotePort|int32|No comments found.|false|-
localPort|int32|No comments found.|false|-
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
secure|boolean|No comments found.|false|-
locales|object|No comments found.|false|-
localAddr|string|No comments found.|false|-
servletContext|object|No comments found.|false|-
└─classLoader|object|No comments found.|false|-
└─majorVersion|int32|No comments found.|false|-
└─minorVersion|int32|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─sessionTimeout|int32|No comments found.|false|-
└─contextPath|string|No comments found.|false|-
└─serverInfo|string|No comments found.|false|-
└─effectiveMinorVersion|int32|No comments found.|false|-
└─initParameterNames|object|No comments found.|false|-
└─effectiveMajorVersion|int32|No comments found.|false|-
└─servletContextName|string|No comments found.|false|-
└─defaultSessionTrackingModes|array|No comments found.|false|-
└─effectiveSessionTrackingModes|array|No comments found.|false|-
└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
└─requestCharacterEncoding|string|No comments found.|false|-
└─virtualServerName|string|No comments found.|false|-
└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─responseCharacterEncoding|string|No comments found.|false|-
└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
remoteHost|string|No comments found.|false|-
serverPort|int32|No comments found.|false|-
serverName|string|No comments found.|false|-
remoteAddr|string|No comments found.|false|-
asyncStarted|boolean|No comments found.|false|-
asyncSupported|boolean|No comments found.|false|-
asyncContext|object|No comments found.|false|-
└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─scheme|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─inputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLength|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLengthLong|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterMap|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remotePort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localPort|int32|No comments found.|false|-
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locales|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteHost|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncStarted|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncSupported|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─timeout|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolRequestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletConnection|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─connectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolConnectionId|string|No comments found.|false|-
└─timeout|int64|No comments found.|false|-
└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─outputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writer|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bufferSize|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─committed|boolean|No comments found.|false|-
dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
requestId|string|No comments found.|false|-
protocolRequestId|string|No comments found.|false|-
servletConnection|object|No comments found.|false|-
└─protocol|string|No comments found.|false|-
└─secure|boolean|No comments found.|false|-
└─connectionId|string|No comments found.|false|-
└─protocolConnectionId|string|No comments found.|false|-

**Request-example:**
```
curl -X POST -k -H 'Content-Type: multipart/form-data' -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/user/imagePath.do --data 'session.creationTime=1788451677551&asyncContext.request.localPort=665&asyncContext.request.remotePort=2&session.servletContext.contextPath=5028jq&protocol=53qr2b&servletConnection.secure=true&asyncContext.request.serverName=damien.dietrich&asyncSupported=true&pathTranslated=hb1qwr&asyncStarted=true&reader.nChars=728&asyncContext.request.reader.nChars=639&asyncContext.request.dispatcherType=FORWARD&asyncContext.timeout=241&contentLength=789&servletConnection.protocol=fzz1co&asyncContext.request.reader.markedSkipLF=true&localName=damien.dietrich&asyncContext.request.localAddr=rfw0gv&asyncContext.request.servletContext.servletContextName=damien.dietrich&asyncContext.request.servletContext.responseCharacterEncoding=3pvfr5&protocolRequestId=68&requestedSessionIdFromURL=true&session.servletContext.responseCharacterEncoding=cocjol&session.servletContext.sessionCookieConfig.domain=blanda.info&scheme=1gpkz4&asyncContext.request.scheme=547dv2&asyncContext.request.servletConnection.connectionId=68&servletContext.servletContextName=damien.dietrich&session.servletContext.servletContextName=damien.dietrich&servletContext.sessionCookieConfig.domain=blanda.info&queryString=hajbwm&session.servletContext.sessionCookieConfig.path=wvdicz&session.servletContext.sessionCookieConfig.comment=81rx4y&remoteUser=3alyn4&reader.skipBuffer=4&reader.skipBuffer=4&asyncContext.request.reader.markedChar=599&asyncContext.request.remoteAddr=cjlnxj&remoteHost=heob0a&asyncContext.request.secure=true&asyncContext.request.servletContext.minorVersion=58&reader.markedChar=904&asyncContext.request.asyncContext.timeout=705&asyncContext.request.requestId=68&serverPort=384&servletContext.contextPath=g3bwff&asyncContext.request.contentLengthLong=904&requestURL.coder=115&asyncContext.response.bufferSize=10&servletContext.sessionCookieConfig.name=damien.dietrich&session.maxInactiveInterval=191&session.servletContext.minorVersion=81&localAddr=nn7x9w&session.servletContext.virtualServerName=damien.dietrich&asyncContext.request.characterEncoding=2pcel7&asyncContext.request.remoteHost=i0cnwa&servletConnection.connectionId=68&session.servletContext.sessionCookieConfig.maxAge=23&asyncContext.request.servletConnection.protocolConnectionId=68&asyncContext.response.characterEncoding=4g8fb5&requestedSessionIdFromCookie=true&servletContext.minorVersion=314&session.servletContext.effectiveMinorVersion=130&reader.nextChar=938&authType=rhm2sd&pathInfo=2lael3&asyncContext.request.servletContext.effectiveMinorVersion=772&reader.skipLF=true&servletContext.sessionCookieConfig.httpOnly=true&method=0em8t3&servletContext.sessionCookieConfig.comment=5rggip&asyncContext.request.contentType=m2zfoo&asyncContext.response.committed=true&requestURL.count=600&session.servletContext.requestCharacterEncoding=psupc3&httpServletMapping.pattern=awv531&servletContext.sessionCookieConfig.path=dy000v&session.servletContext.sessionCookieConfig.name=damien.dietrich&asyncContext.request.contentLength=884&asyncContext.request.servletConnection.secure=true&servletContext.effectiveMajorVersion=422&reader.readAheadLimit=10&reader.cb=r&reader.cb=r&servletContext.sessionCookieConfig.maxAge=23&asyncContext.request.protocol=ucovmz&reader.markedSkipLF=true&asyncContext.request.servletContext.serverInfo=sct350&asyncContext.request.asyncSupported=true&session.servletContext.sessionCookieConfig.secure=true&session.new=true&cookies.=vnx3zm&cookies.=vnx3zm&asyncContext.request.asyncStarted=true&asyncContext.request.protocolRequestId=68&session.id=68&requestedSessionIdValid=true&httpServletMapping.matchValue=gu2a53&asyncContext.request.servletConnection.protocol=9t1bqv&characterEncoding=meog3p&servletContext.responseCharacterEncoding=cc7phu&asyncContext.request.servletContext.majorVersion=522&asyncContext.request.servletContext.requestCharacterEncoding=fwabog&session.servletContext.sessionTimeout=322&trailerFieldsReady=true&httpServletMapping.mappingMatch=CONTEXT_ROOT&asyncContext.request.servletContext.contextPath=qz7bif&contentType=bsvnpq&contextPath=n86l1k&asyncContext.request.servletContext.effectiveMajorVersion=442&dispatcherType=FORWARD&session.servletContext.sessionCookieConfig.httpOnly=true&asyncContext.request.reader.nextChar=324&servletContext.serverInfo=ms7w75&asyncContext.request.servletContext.virtualServerName=damien.dietrich&servletContext.sessionCookieConfig.secure=true&remotePort=648&secure=true&asyncContext.request.servletContext.sessionTimeout=96&asyncContext.response.writer.autoFlush=true&requestURI=wfduun&serverName=damien.dietrich&asyncContext.request.reader.skipLF=true&asyncContext.response.writer.trouble=true&session.lastAccessedTime=1788451677551&requestId=68&contentLengthLong=118&session.servletContext.effectiveMajorVersion=11&cookies.=damien.dietrich&cookies.=damien.dietrich&asyncContext.request.serverPort=189&servletContext.sessionTimeout=373&servletContext.requestCharacterEncoding=xb1f2p&localPort=712&requestURL.value=96&requestURL.value=96&servletContext.majorVersion=35&requestedSessionId=68&asyncContext.request.localName=damien.dietrich&servletContext.effectiveMinorVersion=451&asyncContext.request.reader.readAheadLimit=10&httpServletMapping.servletName=damien.dietrich&session.servletContext.serverInfo=ogexwl&remoteAddr=0kjvtk&userPrincipal.name=damien.dietrich&session.servletContext.majorVersion=643&servletPath=b7plyo&servletContext.virtualServerName=damien.dietrich&requestURL.empty=true&asyncContext.response.contentType=bd30ep&servletConnection.protocolConnectionId=68'
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
    "imageUrl": "www.evie-walter.net"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/position/list.do?startTime=2026-09-04 00:07:57&name=damien.dietrich&endTime=2026-09-04 00:07:57&createTime=2026-09-04 00:07:57&posFunction=byn1c3&limit=10&code=23522&officePhone=(718) 541-6787&description=tymjw3&posRank=734&groupId=68&sname=damien.dietrich&mobilePhone=(718) 541-6787&ids=yta2jd&ids=yta2jd&positionId=68&id=68&roletypeId=68&q=na8xu1&status=492&postypeId=68&parentId=68&isPub=true&delFlag=2&orderBy=938&page=1&oname=damien.dietrich&posType=61frfk
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
    "totalCount": 789,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "postId": "68",
        "postCode": "23522",
        "postName": "damien.dietrich",
        "postSort": 784,
        "status": 400,
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:13",
        "lastTime": "2026-09-04 00:09:13",
        "delFlag": 2,
        "remark": "vqluft",
        "ids": [
          "7j44t2"
        ],
        "positionId": "68",
        "flag": true
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/position/export.do --data 'writer.formatter.lastException.detailMessage=success&contentType=5gdqs0&status=64&writer.writeBuffer=k&writer.writeBuffer=k&writer.psOut.formatter.zero=h&startTime=2026-09-04 00:07:57&postName=damien.dietrich&status=64&writer.psOut.textOut.nChars=373&endTime=2026-09-04 00:07:57&writer.psOut.trouble=true&q=5bwxks&writer.trouble=true&characterEncoding=jt210s&committed=true&limit=10&writer.psOut.textOut.nextChar=420&writer.psOut.closing=true&writer.psOut.autoFlush=true&writer.autoFlush=true&page=1&delFlag=2&writer.formatter.zero=e&bufferSize=10&writer.psOut.closed=true&postCode=23522&orderBy=91'
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
  "data": "0bc4o0",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/position/68.do
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:14",
    "lastTime": "2026-09-04 00:09:14",
    "id": "68",
    "parentId": "68",
    "postypeId": "68",
    "roletypeId": "68",
    "userId": "68",
    "name": "damien.dietrich",
    "sname": "damien.dietrich",
    "code": "23522",
    "oname": "damien.dietrich",
    "posFunction": "p88nub",
    "posRank": 906,
    "posType": "fv8z34",
    "editorType": "dx6uzn",
    "isEditorCreate": true,
    "status": 429,
    "isPub": true,
    "isAgent": true,
    "isLeader": true,
    "leaderId": "68",
    "manageDeptids": "cnzrwj",
    "isBigContact": true,
    "isSmallContact": true,
    "mobilePhone": "(718) 541-6787",
    "officePhone": "(718) 541-6787",
    "buildingId": "68",
    "roomNo": "00j2nv",
    "extQmType": "jlnnsm",
    "extQmTypePhoto": "8gf7iv",
    "extPosName": "damien.dietrich",
    "extOrganName": "damien.dietrich",
    "priority": 658,
    "priorityInOrgan": 549,
    "priorityInDomain": 136,
    "updaterId": "68",
    "updateTime": "2026-09-04 00:09:14",
    "delFlag": 2,
    "description": "pupxhz",
    "remark": "y1oyee"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:14",
  "lastTime": "2026-09-04 00:09:14",
  "id": "68",
  "parentId": "68",
  "postypeId": "68",
  "roletypeId": "68",
  "userId": "68",
  "name": "damien.dietrich",
  "sname": "damien.dietrich",
  "code": "23522",
  "oname": "damien.dietrich",
  "posFunction": "n4828z",
  "posRank": 892,
  "posType": "xjihzv",
  "editorType": "3k1084",
  "isEditorCreate": true,
  "status": 474,
  "isPub": true,
  "isAgent": true,
  "isLeader": true,
  "leaderId": "68",
  "manageDeptids": "uoucfv",
  "isBigContact": true,
  "isSmallContact": true,
  "mobilePhone": "(718) 541-6787",
  "officePhone": "(718) 541-6787",
  "buildingId": "68",
  "roomNo": "90g49d",
  "extQmType": "sg42je",
  "extQmTypePhoto": "ezvoc3",
  "extPosName": "damien.dietrich",
  "extOrganName": "damien.dietrich",
  "priority": 711,
  "priorityInOrgan": 633,
  "priorityInDomain": 131,
  "updaterId": "68",
  "updateTime": "2026-09-04 00:09:14",
  "delFlag": 2,
  "description": "gmb210",
  "remark": "u87tsd",
  "parentName": "damien.dietrich",
  "roletypeName": "damien.dietrich",
  "postypeName": "damien.dietrich"
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
  "data": "l1hqwz",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:14",
  "lastTime": "2026-09-04 00:09:14",
  "id": "68",
  "parentId": "68",
  "postypeId": "68",
  "roletypeId": "68",
  "userId": "68",
  "name": "damien.dietrich",
  "sname": "damien.dietrich",
  "code": "23522",
  "oname": "damien.dietrich",
  "posFunction": "qt3f9j",
  "posRank": 348,
  "posType": "cu3kpx",
  "editorType": "hcrzl0",
  "isEditorCreate": true,
  "status": 799,
  "isPub": true,
  "isAgent": true,
  "isLeader": true,
  "leaderId": "68",
  "manageDeptids": "chq8ow",
  "isBigContact": true,
  "isSmallContact": true,
  "mobilePhone": "(718) 541-6787",
  "officePhone": "(718) 541-6787",
  "buildingId": "68",
  "roomNo": "pezic8",
  "extQmType": "oforfw",
  "extQmTypePhoto": "ha0k4v",
  "extPosName": "damien.dietrich",
  "extOrganName": "damien.dietrich",
  "priority": 106,
  "priorityInOrgan": 458,
  "priorityInDomain": 910,
  "updaterId": "68",
  "updateTime": "2026-09-04 00:09:14",
  "delFlag": 2,
  "description": "nuv64f",
  "remark": "x0yy3l",
  "parentName": "damien.dietrich",
  "roletypeName": "damien.dietrich",
  "postypeName": "damien.dietrich"
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
  "data": "zygn2x",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "lpz3da",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "postId": "68",
  "postCode": "23522",
  "postName": "damien.dietrich",
  "postSort": 252,
  "status": 864,
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:14",
  "lastTime": "2026-09-04 00:09:14",
  "delFlag": 2,
  "remark": "39ertz",
  "ids": [
    "idmsr7"
  ],
  "positionId": "68",
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
  "data": "uxzhdl",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "id": 26,
  "roleId": 881,
  "positionId": "68",
  "status": 825,
  "beginTime": "2026-09-04",
  "endTime": "2026-09-04"
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
  "data": "9sl6qx",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
      "postId": "68",
      "postCode": "23522",
      "postName": "damien.dietrich",
      "postSort": 838,
      "status": 894,
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:14",
      "lastTime": "2026-09-04 00:09:14",
      "delFlag": 2,
      "remark": "7qt2tv",
      "ids": [
        "0dkvjc"
      ],
      "positionId": "68",
      "flag": true
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/commlog/list.do?username=damien.dietrich&time=1788451677551&srcCode=958&userId=68&page=1&operation=sv6z6x&startTime=2026-09-04 00:07:57&orderBy=344&method=zd6y2f&createTime=2026-09-04 00:09:17&limit=10&endTime=2026-09-04 00:07:57&appId=68&ip=24.62.148.61&q=ux3ew0&category=749
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
    "totalCount": 527,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "operId": 281,
        "title": "6s53ed",
        "businessType": 410,
        "businessTypeName": "damien.dietrich",
        "businessTypes": [
          288
        ],
        "method": "wkl112",
        "requestMethod": "s60hhz",
        "operatorType": 998,
        "operName": "damien.dietrich",
        "deptName": "damien.dietrich",
        "operUrl": "www.evie-walter.net",
        "operIp": "24.62.148.61",
        "operLocation": "cir2ix",
        "operParam": "glnvr7",
        "jsonResult": "3a9ssd",
        "status": 980,
        "errorMsg": "2nlowq",
        "operTime": "2026-09-04 00:09:18",
        "costTime": 1788451677551,
        "remark": "h5ph4y"
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/commlog/export.do --data 'endTime=2026-09-04 00:07:57&writer.formatter.lastException.detailMessage=success&bufferSize=10&writer.psOut.closing=true&title=ivmzt8&q=gzhggt&characterEncoding=ee2jou&orderBy=322&operId=85&limit=10&operatorType=891&writer.autoFlush=true&operName=damien.dietrich&committed=true&writer.psOut.closed=true&writer.psOut.formatter.zero=r&writer.psOut.textOut.nextChar=114&operTime=2026-09-04 00:09:18&status=95&writer.writeBuffer=3&writer.writeBuffer=3&writer.psOut.autoFlush=true&operIp=24.62.148.61&status=916&writer.formatter.zero=r&contentType=sty7px&writer.psOut.trouble=true&writer.trouble=true&startTime=2026-09-04 00:07:57&deptName=damien.dietrich&remark=5qc5eq&page=1&businessType=21&writer.psOut.textOut.nChars=10'
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
  "data": "8lvkyv",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "hcvn16",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/organ/list.do?delFlag=2&page=1&organName=damien.dietrich&wlType=73y0jc&q=hd47x0&endTime=2026-09-04 00:07:57&orderBy=262&limit=10&startTime=2026-09-04 00:07:57&organId=68
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
        "if0dny"
      ],
      "organId": "68",
      "organName": "damien.dietrich",
      "organSName": "damien.dietrich",
      "organCode": "23522",
      "address": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
      "wlType": "lr5vqh",
      "wlTypeName": "damien.dietrich",
      "priority": 724,
      "delFlag": 2,
      "createTime": "2026-09-04 00:09:26",
      "lastTime": "2026-09-04 00:09:26",
      "contactName": "damien.dietrich",
      "contactEmail": "rudy.vandervort@hotmail.com",
      "contactMobile": "205.573.4959",
      "description": "5562ei",
      "tel": "qz9nuc"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
      "rn8g9n"
    ],
    "organId": "68",
    "organName": "damien.dietrich",
    "organSName": "damien.dietrich",
    "organCode": "23522",
    "address": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
    "wlType": "vhrthf",
    "wlTypeName": "damien.dietrich",
    "priority": 913,
    "delFlag": 2,
    "createTime": "2026-09-04 00:09:26",
    "lastTime": "2026-09-04 00:09:26",
    "contactName": "damien.dietrich",
    "contactEmail": "rudy.vandervort@hotmail.com",
    "contactMobile": "205.573.4959",
    "description": "j70a59",
    "tel": "5nw8f0"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "ya3aat"
  ],
  "organId": "68",
  "organName": "damien.dietrich",
  "organSName": "damien.dietrich",
  "organCode": "23522",
  "address": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
  "wlType": "dm1qy4",
  "wlTypeName": "damien.dietrich",
  "priority": 351,
  "delFlag": 2,
  "createTime": "2026-09-04 00:09:26",
  "lastTime": "2026-09-04 00:09:26",
  "contactName": "damien.dietrich",
  "contactEmail": "rudy.vandervort@hotmail.com",
  "contactMobile": "205.573.4959",
  "description": "jeopnv",
  "tel": "hyi4bt"
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
  "data": "1s6gvh",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "0y4u7g"
  ],
  "organId": "68",
  "organName": "damien.dietrich",
  "organSName": "damien.dietrich",
  "organCode": "23522",
  "address": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
  "wlType": "jltwz0",
  "wlTypeName": "damien.dietrich",
  "priority": 16,
  "delFlag": 2,
  "createTime": "2026-09-04 00:09:26",
  "lastTime": "2026-09-04 00:09:26",
  "contactName": "damien.dietrich",
  "contactEmail": "rudy.vandervort@hotmail.com",
  "contactMobile": "205.573.4959",
  "description": "6qkctx",
  "tel": "a92ski"
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
  "data": "xxs7ap",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "f5jeqk",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "nygs1b"
  ],
  "organId": "68",
  "organName": "damien.dietrich",
  "organSName": "damien.dietrich",
  "organCode": "23522",
  "address": "Suite 971 2035 Vasiliki Curve， Toddbury， OK 51441",
  "wlType": "yjn1t8",
  "wlTypeName": "damien.dietrich",
  "priority": 464,
  "delFlag": 2,
  "createTime": "2026-09-04 00:09:26",
  "lastTime": "2026-09-04 00:09:26",
  "contactName": "damien.dietrich",
  "contactEmail": "rudy.vandervort@hotmail.com",
  "contactMobile": "205.573.4959",
  "description": "0j3whg",
  "tel": "muj936"
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
  "data": "p3aj7o",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/list.do?createType=981&isLeaf=true&delFlag=2&imagePath=5y3h0f&name=damien.dietrich&spare2=krjfq3&orderBy=166&endTime=2026-09-04 00:07:57&deptId=404&sname=damien.dietrich&organId=68&leaderId=68&startTime=2026-09-04 00:07:57&creatorId=68&foreignId=68&type=l72ezl&parentId=844&isOrganLevel=true&leaderMobile=205.573.4959&q=a0jdnl&depttypeId=914&appId=68&status=761&limit=10&isDisabled=true&description=yzyxwu&organLeader=nflgwv&searchCode=23522&areaCode=23522&spare1=4gjsue&page=1&isVirtual=true
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
    "pageNum": 977,
    "pageSize": 10,
    "startRow": 557,
    "endRow": 548,
    "total": 743,
    "pages": 978,
    "count": true,
    "reasonable": true,
    "pageSizeZero": true,
    "countColumn": "1gbn9s",
    "orderBy": "4fhz5d",
    "orderByOnly": true,
    "boundSqlInterceptor": {}
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/page.do?foreignId=68&status=605&limit=10&spare2=zd1nm6&depttypeId=344&appId=68&page=1&startTime=2026-09-04 00:07:57&isVirtual=true&creatorId=68&parentId=383&sname=damien.dietrich&deptId=985&q=vaof8v&type=9e8zh3&isDisabled=true&searchCode=23522&spare1=02vs63&areaCode=23522&delFlag=2&createType=326&organLeader=4cn240&leaderMobile=205.573.4959&isOrganLevel=true&name=damien.dietrich&endTime=2026-09-04 00:07:57&description=vzmcc9&isLeaf=true&imagePath=416svp&leaderId=68&orderBy=424&organId=68
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
    "pageNum": 269,
    "pageSize": 10,
    "startRow": 312,
    "endRow": 485,
    "total": 154,
    "pages": 699,
    "count": true,
    "reasonable": true,
    "pageSizeZero": true,
    "countColumn": "kx0ndl",
    "orderBy": "i4uohu",
    "orderByOnly": true,
    "boundSqlInterceptor": {}
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/list/exclude/83.do
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
      "id": 423,
      "organId": "68",
      "organName": "damien.dietrich",
      "parentId": 226,
      "appId": "68",
      "depttypeId": 184,
      "foreignId": "68",
      "createType": 48,
      "type": "a5abqu",
      "name": "damien.dietrich",
      "sname": "damien.dietrich",
      "areaCode": "23522",
      "organLeader": "isgqhv",
      "leaderId": "68",
      "leaderMobile": "205.573.4959",
      "isOrganLevel": true,
      "isVirtual": true,
      "isLeaf": true,
      "isDisabled": true,
      "searchCode": "23522",
      "imagePath": "efwp5a",
      "priority": 441,
      "status": 673,
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:10",
      "lastTime": "2026-09-04 00:09:10",
      "delFlag": 2,
      "description": "790ftm",
      "spare1": "hpicgo",
      "spare2": "stk523",
      "parentName": "damien.dietrich",
      "childNum": "aqzlmw"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/364.do
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
    "id": 723,
    "organId": "68",
    "organName": "damien.dietrich",
    "parentId": 50,
    "appId": "68",
    "depttypeId": 225,
    "foreignId": "68",
    "createType": 835,
    "type": "dvigi9",
    "name": "damien.dietrich",
    "sname": "damien.dietrich",
    "areaCode": "23522",
    "organLeader": "z2k7mb",
    "leaderId": "68",
    "leaderMobile": "205.573.4959",
    "isOrganLevel": true,
    "isVirtual": true,
    "isLeaf": true,
    "isDisabled": true,
    "searchCode": "23522",
    "imagePath": "jbgbsi",
    "priority": 958,
    "status": 580,
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:10",
    "lastTime": "2026-09-04 00:09:10",
    "delFlag": 2,
    "description": "zhl2wy",
    "spare1": "h4vpb7",
    "spare2": "6cfgu1",
    "parentName": "damien.dietrich",
    "childNum": "6ft6dc"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/dept/tree.do?delFlag=2&deptId=204&organLeader=neobyy&isLeaf=true&leaderId=68&endTime=2026-09-04 00:07:57&limit=10&leaderMobile=205.573.4959&isVirtual=true&creatorId=68&name=damien.dietrich&q=y9vgb3&page=1&foreignId=68&organId=68&parentId=241&isDisabled=true&spare2=gn075o&startTime=2026-09-04 00:07:57&description=e7wxgp&orderBy=94&appId=68&type=ofdosw&createType=98&imagePath=m44a4c&sname=damien.dietrich&status=422&searchCode=23522&spare1=fg6oro&areaCode=23522&isOrganLevel=true&depttypeId=420
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
      "title": "0t0utx",
      "id": "68",
      "parentId": "68",
      "extId": "68",
      "href": "g8yu2k",
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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:10",
  "lastTime": "2026-09-04 00:09:10",
  "id": 52,
  "organId": "68",
  "parentId": 932,
  "appId": "68",
  "depttypeId": 294,
  "foreignId": "68",
  "createType": 577,
  "type": "azvnu0",
  "name": "damien.dietrich",
  "sname": "damien.dietrich",
  "areaCode": "23522",
  "organLeader": "3qfnsb",
  "leaderId": "68",
  "leaderMobile": "205.573.4959",
  "isOrganLevel": true,
  "isVirtual": true,
  "isLeaf": true,
  "isDisabled": true,
  "searchCode": "23522",
  "imagePath": "mzp7vs",
  "priority": 216,
  "status": 67,
  "delFlag": 2,
  "description": "jqz4jr",
  "spare1": "5kir74",
  "spare2": "t0x7pk",
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
  "data": "rh7y5h",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:11",
  "lastTime": "2026-09-04 00:09:11",
  "id": 236,
  "organId": "68",
  "parentId": 502,
  "appId": "68",
  "depttypeId": 554,
  "foreignId": "68",
  "createType": 903,
  "type": "hm1zol",
  "name": "damien.dietrich",
  "sname": "damien.dietrich",
  "areaCode": "23522",
  "organLeader": "6gvswq",
  "leaderId": "68",
  "leaderMobile": "205.573.4959",
  "isOrganLevel": true,
  "isVirtual": true,
  "isLeaf": true,
  "isDisabled": true,
  "searchCode": "23522",
  "imagePath": "hsse9g",
  "priority": 537,
  "status": 160,
  "delFlag": 2,
  "description": "5l9crr",
  "spare1": "y39dvn",
  "spare2": "pdspow",
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
  "data": "07vsbv",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "ahd9fv",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:11",
  "lastTime": "2026-09-04 00:09:11",
  "id": 221,
  "organId": "68",
  "parentId": 506,
  "appId": "68",
  "depttypeId": 539,
  "foreignId": "68",
  "createType": 515,
  "type": "t1233z",
  "name": "damien.dietrich",
  "sname": "damien.dietrich",
  "areaCode": "23522",
  "organLeader": "pbp8bb",
  "leaderId": "68",
  "leaderMobile": "205.573.4959",
  "isOrganLevel": true,
  "isVirtual": true,
  "isLeaf": true,
  "isDisabled": true,
  "searchCode": "23522",
  "imagePath": "ni3tzi",
  "priority": 633,
  "status": 650,
  "delFlag": 2,
  "description": "le92r2",
  "spare1": "os86e8",
  "spare2": "jldnoz",
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
  "data": "0hk3jp",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "username": "damien.dietrich",
  "password": "ujfh62",
  "code": "23522",
  "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52",
  "appId": "68"
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
    "userId": "68",
    "token": "7wh8yo",
    "updateTime": "2026-09-04 00:09:12",
    "expireTime": "2026-09-04 00:09:12",
    "mobileConfirm": true
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:12",
      "lastTime": "2026-09-04 00:09:12",
      "id": 457,
      "userId": "68",
      "deptId": 905,
      "deptName": "damien.dietrich",
      "organId": "68",
      "organName": "damien.dietrich",
      "name": "damien.dietrich",
      "username": "damien.dietrich",
      "nickName": "cicely.medhurst",
      "email": "rudy.vandervort@hotmail.com",
      "mobile": "205.573.4959",
      "imagePath": "smffq5",
      "password": "rk8898",
      "isSuperAdmin": true,
      "isAuditAdmin": true,
      "isSelfAdmin": true,
      "status": 11,
      "delFlag": 2,
      "lastLoginIp": "24.62.148.61",
      "lastLoginTime": "2026-09-04 00:09:12",
      "description": "e1n5jp",
      "dept": {
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:12",
        "lastTime": "2026-09-04 00:09:12",
        "id": 954,
        "organId": "68",
        "parentId": 894,
        "appId": "68",
        "depttypeId": 875,
        "foreignId": "68",
        "createType": 727,
        "type": "r2dy1k",
        "name": "damien.dietrich",
        "sname": "damien.dietrich",
        "areaCode": "23522",
        "organLeader": "6qzhvi",
        "leaderId": "68",
        "leaderMobile": "205.573.4959",
        "isOrganLevel": true,
        "isVirtual": true,
        "isLeaf": true,
        "isDisabled": true,
        "searchCode": "23522",
        "imagePath": "ajessc",
        "priority": 279,
        "status": 515,
        "delFlag": 2,
        "description": "ciifsa",
        "spare1": "8og58c",
        "spare2": "8lqs6v",
        "children": [
          {
            "$ref": ".."
          }
        ]
      },
      "roles": [
        {
          "creatorId": "68",
          "createTime": "2026-09-04 00:09:12",
          "lastTime": "2026-09-04 00:09:12",
          "id": 526,
          "roletypeId": "68",
          "appId": "68",
          "name": "damien.dietrich",
          "code": "23522",
          "priority": 922,
          "isRegular": true,
          "isSuper": true,
          "isPublic": true,
          "status": 404,
          "description": "gaq3x0",
          "areaType": "pbc0i7"
        }
      ],
      "roleIds": [
        958
      ],
      "positionIds": [
        "02dx43"
      ],
      "roleId": 693,
      "userRoleList": [
        {
          "id": 759,
          "deptId": 529,
          "deptName": "damien.dietrich",
          "organId": "68",
          "organName": "damien.dietrich",
          "roleId": 670,
          "roleName": "damien.dietrich",
          "adminId": 275
        }
      ],
      "code": "23522",
      "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52"
    },
    "roles": [
      "7smcfj"
    ],
    "permissions": [
      "dqa5kq"
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "accountId": "68",
    "areaId": 171,
    "groupId": 641,
    "positionId": "68",
    "tplSolution": "cgwfed",
    "menuList": [
      {
        "id": 643,
        "parentId": 219,
        "name": "damien.dietrich",
        "ename": "damien.dietrich",
        "type": "a9ajk2",
        "perms": "ac9as4",
        "menuLevel": 824,
        "urlType": "jtdko9",
        "url": "www.evie-walter.net",
        "menuSeq": "w3g3gf",
        "icon": "2k54yi",
        "imagePath": "d56mcd",
        "css": "yzaszt",
        "description": "ghzrqp",
        "todoTotalApi": "5lgbjj"
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
method|string|No comments found.|false|-
parts|array|No comments found.|false|-
headerNames|object|No comments found.|false|-
session|object|No comments found.|false|-
└─id|string|No comments found.|false|-
└─creationTime|int64|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─lastAccessedTime|int64|No comments found.|false|-
└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
└─new|boolean|No comments found.|false|-
└─maxInactiveInterval|int32|No comments found.|false|-
userPrincipal|object|No comments found.|false|-
└─name|string|No comments found.|false|-
trailerFields|map|No comments found.|false|-
└─any object|object|any object.|false|-
cookies|array|No comments found.|false|-
└─name|string|No comments found.|false|-
└─value|string|No comments found.|false|-
└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
queryString|string|No comments found.|false|-
authType|string|No comments found.|false|-
contextPath|string|No comments found.|false|-
requestURI|string|No comments found.|false|-
pathTranslated|string|No comments found.|false|-
servletPath|string|No comments found.|false|-
pathInfo|string|No comments found.|false|-
remoteUser|string|No comments found.|false|-
requestURL|object|No comments found.|false|-
└─empty|boolean|No comments found.|false|-
└─value|array|No comments found.|false|-
└─coder|int8|No comments found.|false|-
└─count|int32|No comments found.|false|-
requestedSessionId|string|No comments found.|false|-
requestedSessionIdFromCookie|boolean|No comments found.|false|-
requestedSessionIdValid|boolean|No comments found.|false|-
httpServletMapping|object|No comments found.|false|-
└─pattern|string|No comments found.|false|-
└─mappingMatch|enum|null<br/>CONTEXT_ROOT<br/>DEFAULT<br/>EXACT<br/>EXTENSION<br/>PATH<br/>|false|-
└─servletName|string|No comments found.|false|-
└─matchValue|string|No comments found.|false|-
requestedSessionIdFromURL|boolean|No comments found.|false|-
trailerFieldsReady|boolean|No comments found.|false|-
scheme|string|No comments found.|false|-
inputStream|object|No comments found.|false|-
protocol|string|No comments found.|false|-
locale|object|No comments found.|false|-
contentLength|int32|No comments found.|false|-
contentLengthLong|int64|No comments found.|false|-
contentType|string|No comments found.|false|-
localName|string|No comments found.|false|-
attributeNames|object|No comments found.|false|-
parameterMap|map|No comments found.|false|-
└─any object|object|any object.|false|-
parameterNames|object|No comments found.|false|-
characterEncoding|string|No comments found.|false|-
remotePort|int32|No comments found.|false|-
localPort|int32|No comments found.|false|-
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
secure|boolean|No comments found.|false|-
locales|object|No comments found.|false|-
localAddr|string|No comments found.|false|-
servletContext|object|No comments found.|false|-
└─classLoader|object|No comments found.|false|-
└─majorVersion|int32|No comments found.|false|-
└─minorVersion|int32|No comments found.|false|-
└─attributeNames|object|No comments found.|false|-
└─sessionTimeout|int32|No comments found.|false|-
└─contextPath|string|No comments found.|false|-
└─serverInfo|string|No comments found.|false|-
└─effectiveMinorVersion|int32|No comments found.|false|-
└─initParameterNames|object|No comments found.|false|-
└─effectiveMajorVersion|int32|No comments found.|false|-
└─servletContextName|string|No comments found.|false|-
└─defaultSessionTrackingModes|array|No comments found.|false|-
└─effectiveSessionTrackingModes|array|No comments found.|false|-
└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─name|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─path|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributes|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─comment|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─domain|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─maxAge|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─httpOnly|boolean|No comments found.|false|-
└─requestCharacterEncoding|string|No comments found.|false|-
└─virtualServerName|string|No comments found.|false|-
└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
└─responseCharacterEncoding|string|No comments found.|false|-
└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─taglibs|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspPropertyGroups|array|No comments found.|false|-
remoteHost|string|No comments found.|false|-
serverPort|int32|No comments found.|false|-
serverName|string|No comments found.|false|-
remoteAddr|string|No comments found.|false|-
asyncStarted|boolean|No comments found.|false|-
asyncSupported|boolean|No comments found.|false|-
asyncContext|object|No comments found.|false|-
└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─scheme|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─inputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLength|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentLengthLong|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterMap|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─parameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remotePort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localPort|int32|No comments found.|false|-
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locales|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─localAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─classLoader|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─majorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─minorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─attributeNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionTimeout|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contextPath|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverInfo|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMinorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─initParameterNames|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveMajorVersion|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletContextName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─defaultSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─effectiveSessionTrackingModes|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─sessionCookieConfig|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─virtualServerName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─filterRegistrations|map|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─any object|object|any object.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─responseCharacterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─jspConfigDescriptor|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteHost|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverPort|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─serverName|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─remoteAddr|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncStarted|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncSupported|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─asyncContext|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─request|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─timeout|int64|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─requestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolRequestId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─servletConnection|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocol|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─secure|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─connectionId|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─protocolConnectionId|string|No comments found.|false|-
└─timeout|int64|No comments found.|false|-
└─response|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─locale|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─contentType|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─outputStream|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writer|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─writeBuffer|array|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─lock|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─out|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─autoFlush|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─trouble|boolean|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─formatter|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─psOut|object|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─characterEncoding|string|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─bufferSize|int32|No comments found.|false|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─committed|boolean|No comments found.|false|-
dispatcherType|enum|null<br/>FORWARD<br/>INCLUDE<br/>REQUEST<br/>ASYNC<br/>ERROR<br/>|false|-
requestId|string|No comments found.|false|-
protocolRequestId|string|No comments found.|false|-
servletConnection|object|No comments found.|false|-
└─protocol|string|No comments found.|false|-
└─secure|boolean|No comments found.|false|-
└─connectionId|string|No comments found.|false|-
└─protocolConnectionId|string|No comments found.|false|-

**Request-example:**
```
curl -X POST -k -i https://linlan.net/eframe_backend/platLogin.do --data 'requestedSessionIdValid=true&session.servletContext.effectiveMajorVersion=820&asyncContext.request.reader.nextChar=774&asyncContext.request.servletContext.effectiveMinorVersion=347&asyncContext.request.servletConnection.protocolConnectionId=68&session.servletContext.virtualServerName=damien.dietrich&session.servletContext.sessionCookieConfig.maxAge=23&asyncContext.request.servletConnection.connectionId=68&servletContext.minorVersion=184&asyncContext.request.servletConnection.secure=true&scheme=aygz06&authType=fyfv3o&reader.markedSkipLF=true&asyncContext.request.servletContext.virtualServerName=damien.dietrich&servletContext.sessionCookieConfig.domain=blanda.info&asyncContext.request.asyncStarted=true&asyncContext.request.servletContext.responseCharacterEncoding=sumow9&session.servletContext.sessionCookieConfig.path=n7xaxh&session.servletContext.minorVersion=843&queryString=u6vmbc&servletContext.contextPath=5d4oi5&remotePort=614&asyncContext.request.localPort=213&session.servletContext.serverInfo=untza6&asyncContext.response.writer.autoFlush=true&reader.skipLF=true&serverPort=39&asyncSupported=true&asyncContext.request.contentLength=763&localPort=617&reader.cb=2&reader.cb=2&asyncContext.request.serverName=damien.dietrich&asyncContext.request.protocol=i7i8xz&asyncContext.response.bufferSize=10&protocolRequestId=68&asyncContext.request.reader.readAheadLimit=10&session.id=68&asyncContext.request.servletContext.contextPath=uyna0b&requestURL.value=23&requestURL.value=23&cookies.=damien.dietrich&cookies.=damien.dietrich&characterEncoding=6x58mk&servletConnection.connectionId=68&asyncContext.request.servletContext.effectiveMajorVersion=86&asyncContext.request.servletContext.servletContextName=damien.dietrich&httpServletMapping.mappingMatch=CONTEXT_ROOT&servletContext.responseCharacterEncoding=gsfb36&dispatcherType=FORWARD&httpServletMapping.pattern=kroay6&requestedSessionIdFromURL=true&asyncContext.request.scheme=6g80dr&contentLength=133&asyncContext.request.servletContext.requestCharacterEncoding=aaac1q&reader.nextChar=999&servletContext.sessionCookieConfig.secure=true&servletContext.requestCharacterEncoding=3jw0iz&asyncContext.timeout=896&secure=true&asyncContext.request.secure=true&remoteAddr=dfvr6k&asyncStarted=true&asyncContext.request.servletContext.serverInfo=548geh&session.servletContext.servletContextName=damien.dietrich&servletConnection.protocolConnectionId=68&session.servletContext.sessionCookieConfig.secure=true&servletContext.majorVersion=696&servletContext.sessionCookieConfig.path=jtv0ef&session.servletContext.sessionCookieConfig.httpOnly=true&session.servletContext.sessionCookieConfig.comment=l40mya&asyncContext.request.requestId=68&session.creationTime=1788451677551&servletPath=yy004p&servletContext.sessionCookieConfig.name=damien.dietrich&serverName=damien.dietrich&asyncContext.request.dispatcherType=FORWARD&asyncContext.request.remoteHost=nbtlgi&asyncContext.response.characterEncoding=ltbb32&userPrincipal.name=damien.dietrich&requestedSessionIdFromCookie=true&servletContext.sessionCookieConfig.comment=yp9blk&asyncContext.response.committed=true&requestURL.count=225&session.servletContext.effectiveMinorVersion=482&asyncContext.request.reader.markedChar=582&asyncContext.request.reader.markedSkipLF=true&servletContext.virtualServerName=damien.dietrich&session.servletContext.sessionCookieConfig.name=damien.dietrich&localName=damien.dietrich&session.servletContext.contextPath=62j9ja&servletContext.effectiveMinorVersion=501&servletContext.effectiveMajorVersion=793&session.servletContext.majorVersion=520&localAddr=ieet2i&asyncContext.request.reader.nChars=291&asyncContext.request.reader.skipLF=true&pathTranslated=8tyelo&asyncContext.request.localAddr=urjazc&asyncContext.request.servletContext.sessionTimeout=570&remoteUser=fd0vhs&protocol=f4c7t5&contentLengthLong=680&servletContext.sessionTimeout=2&session.servletContext.responseCharacterEncoding=yz3h8b&session.maxInactiveInterval=875&reader.markedChar=89&cookies.=rmt43a&cookies.=rmt43a&asyncContext.request.serverPort=539&asyncContext.request.contentType=11zc7q&asyncContext.request.characterEncoding=53q3lk&asyncContext.request.remotePort=498&session.servletContext.sessionCookieConfig.domain=blanda.info&reader.skipBuffer=1&reader.skipBuffer=1&asyncContext.request.protocolRequestId=68&requestedSessionId=68&servletContext.serverInfo=z4m4vl&asyncContext.request.asyncContext.timeout=356&session.servletContext.sessionTimeout=445&contentType=5osiy6&asyncContext.response.contentType=olsoy2&reader.nChars=71&remoteHost=p93l36&asyncContext.request.localName=damien.dietrich&pathInfo=xyukjw&method=vyqj1c&httpServletMapping.matchValue=e7z0mw&servletContext.servletContextName=damien.dietrich&asyncContext.request.contentLengthLong=252&asyncContext.request.servletContext.minorVersion=281&asyncContext.request.remoteAddr=kdnmrv&requestId=68&servletContext.sessionCookieConfig.httpOnly=true&asyncContext.request.servletConnection.protocol=l36ffw&servletConnection.secure=true&trailerFieldsReady=true&reader.readAheadLimit=10&requestURL.coder=96&httpServletMapping.servletName=damien.dietrich&servletConnection.protocol=ci5b1k&asyncContext.request.asyncSupported=true&session.new=true&servletContext.sessionCookieConfig.maxAge=23&asyncContext.request.servletContext.majorVersion=273&requestURL.empty=true&contextPath=y1jb4y&asyncContext.response.writer.trouble=true&session.lastAccessedTime=1788451677551&requestURI=8ayvjp&session.servletContext.requestCharacterEncoding=66ws18'
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
    "id": "68",
    "isAdmin": true,
    "isEncryt": true,
    "publicKey": "z6ro9x",
    "aesKey": "lq54dp",
    "clientId": "68",
    "serverUrl": "www.evie-walter.net",
    "serverConf1": "1loql0",
    "appConf": {
      "siteId": 175,
      "appId": "68",
      "topXzqhId": "68",
      "appConfJson": {
        "mapKey": "2l3j23"
      }
    },
    "isWork": true,
    "workConfig": {
      "layout": "ikv8ta",
      "siteInfo": {
        "id": 235,
        "appId": "68",
        "areaCode": "23522",
        "path": "2tk7qd",
        "name": "damien.dietrich",
        "sname": "damien.dietrich",
        "layout": "omv1ck",
        "logoUrl": "www.evie-walter.net",
        "cdnUrl": "www.evie-walter.net"
      }
    }
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "username": "damien.dietrich",
  "password": "72qd3m",
  "code": "23522",
  "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52",
  "appId": "68"
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
    "userId": "68",
    "token": "uzmclv",
    "updateTime": "2026-09-04 00:09:13",
    "expireTime": "2026-09-04 00:09:13",
    "mobileConfirm": true
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -i https://linlan.net/eframe_backend/captcha/verify.do?code=23522&uuid=ed342e94-fa4c-4609-a974-baa432eb7d52
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
  "data": "g0zz89",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
      "cacheName": "damien.dietrich",
      "cacheKey": "jednrx",
      "cacheValue": "26c00k",
      "remark": "e4izxo"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/cache/getKeys/damien.dietrich.do
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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/cache/getValue/damien.dietrich/5y8cb4.do
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
    "cacheName": "damien.dietrich",
    "cacheKey": "j0rwim",
    "cacheValue": "vkgo3s",
    "remark": "zchsp0"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/cache/clearCacheName/damien.dietrich.do
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
  "data": "i7jdrn",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X DELETE -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/cache/clearCacheKey/7l54mg.do
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
  "data": "wsa2xr",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "1ix9xm",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/list.do?menuId=538&orderBy=805&limit=10&currAppId=68&q=23mf2g&parentId=116&startTime=2026-09-04 00:07:57&menuType=77np49&page=1&visible=m5lk93&delFlag=5g314g&menuName=damien.dietrich&status=knq0qb&endTime=2026-09-04 00:07:57
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
      "menuId": 501,
      "menuName": "damien.dietrich",
      "type": "xuzznb",
      "typeName": "damien.dietrich",
      "parentName": "damien.dietrich",
      "parentId": 569,
      "priority": 259,
      "path": "v59li2",
      "component": "r8rpif",
      "query": "69p1nm",
      "routeName": "damien.dietrich",
      "isFrame": "co55fg",
      "isCache": "5i5p3z",
      "menuType": "lubckk",
      "menuTypeName": "damien.dietrich",
      "visible": "lape75",
      "status": "jswkdf",
      "perms": "mpwzgt",
      "icon": "hgurxq",
      "imagePath": "rbfvm9",
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:13",
      "lastTime": "2026-09-04 00:09:13",
      "children": [
        {
          "$ref": ".."
        }
      ],
      "childNum": 844,
      "description": "05gppy",
      "listJson": "bgbfjz",
      "delFlag": 2,
      "permsList": [
        {
          "permsName": "damien.dietrich",
          "permsStr": "8uslxu"
        }
      ],
      "buttonMenuList": [
        {
          "id": "68",
          "parentId": "68",
          "code": "23522",
          "name": "damien.dietrich"
        }
      ]
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/page.do?status=ixo08p&orderBy=969&currAppId=68&page=1&visible=wiikyw&q=a6knqj&delFlag=yzje47&endTime=2026-09-04 00:07:57&limit=10&menuId=652&menuName=damien.dietrich&parentId=818&menuType=wh213f&startTime=2026-09-04 00:07:57
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
    "pageNum": 455,
    "pageSize": 10,
    "startRow": 213,
    "endRow": 12,
    "total": 898,
    "pages": 186,
    "count": true,
    "reasonable": true,
    "pageSizeZero": true,
    "countColumn": "sa5pcc",
    "orderBy": "5ej6qh",
    "orderByOnly": true,
    "boundSqlInterceptor": {}
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/218.do
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
    "menuId": 667,
    "menuName": "damien.dietrich",
    "type": "r8ehzo",
    "typeName": "damien.dietrich",
    "parentName": "damien.dietrich",
    "parentId": 763,
    "priority": 672,
    "path": "7m8scc",
    "component": "roys0i",
    "query": "33pf6w",
    "routeName": "damien.dietrich",
    "isFrame": "x8ynk2",
    "isCache": "cmmy03",
    "menuType": "el8lsk",
    "menuTypeName": "damien.dietrich",
    "visible": "w9wlme",
    "status": "t18x7b",
    "perms": "dztr4k",
    "icon": "okd495",
    "imagePath": "acyiyw",
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:13",
    "lastTime": "2026-09-04 00:09:13",
    "children": [
      {
        "$ref": ".."
      }
    ],
    "childNum": 855,
    "description": "niekdo",
    "listJson": "88ppf5",
    "delFlag": 2,
    "permsList": [
      {
        "permsName": "damien.dietrich",
        "permsStr": "fyywbc"
      }
    ],
    "buttonMenuList": [
      {
        "id": "68",
        "parentId": "68",
        "code": "23522",
        "name": "damien.dietrich"
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/treeselect.do?endTime=2026-09-04 00:07:57&status=utibkk&delFlag=3e82yn&orderBy=129&limit=10&menuName=damien.dietrich&q=adzgvc&parentId=439&menuType=e93wqn&menuId=784&currAppId=68&page=1&visible=nqw5t3&startTime=2026-09-04 00:07:57
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
      435
    ],
    "menus": [
      {
        "id": 644,
        "label": "v6qix7",
        "children": [
          {
            "$ref": ".."
          }
        ]
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/treeInit.do?orderBy=390&parentRoot=gl5u1g&appIds=amny1z&appIds=amny1z&code=23522&q=pr0exp&menuLevel=495&parentId=555&isMenuAll=u2izpn&menuIds=wt20qm&menuIds=wt20qm&isDisplay=true&spare1=7qbgp7&popPosition=852&imagePath=pgvcu8&delFlag=2&spare2=b2g20z&offset=1&page=1&icon=wrgrb2&shortCut=xl0rvw&typeNoButton=u4de8a&startTime=2026-09-04 00:07:57&url=www.evie-walter.net&isCheck=true&description=jyxtao&parentNull=xrmcdz&limit=10&isDisabled=true&isProtect=true&urlType=vln489&appId=68&name=damien.dietrich&createTime=2026-09-04 00:07:57&endTime=2026-09-04 00:07:57&type=4r9ouj&subCount=178
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
      "title": "hbbkzv",
      "id": "68",
      "parentId": "68",
      "extId": "68",
      "href": "jofudb",
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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/menu/roleMenuTreeselect/170.do
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
      338
    ],
    "menus": [
      {
        "id": 617,
        "label": "p6sl0w",
        "children": [
          {
            "$ref": ".."
          }
        ]
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "menuId": 741,
  "menuName": "damien.dietrich",
  "type": "htlc5s",
  "typeName": "damien.dietrich",
  "parentName": "damien.dietrich",
  "parentId": 216,
  "priority": 979,
  "path": "e9afym",
  "component": "zx8lr2",
  "query": "ouhup8",
  "routeName": "damien.dietrich",
  "isFrame": "0ducra",
  "isCache": "mv4n4t",
  "menuType": "hhs6zo",
  "menuTypeName": "damien.dietrich",
  "visible": "dhdl8o",
  "status": "2lps95",
  "perms": "silzg6",
  "icon": "r5cwjh",
  "imagePath": "klxlap",
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:13",
  "lastTime": "2026-09-04 00:09:13",
  "children": [
    {
      "$ref": ".."
    }
  ],
  "childNum": 662,
  "description": "kibwjl",
  "listJson": "sq2960",
  "delFlag": 2,
  "permsList": [
    {
      "permsName": "damien.dietrich",
      "permsStr": "fam8ah"
    }
  ],
  "buttonMenuList": [
    {
      "id": "68",
      "parentId": "68",
      "code": "23522",
      "name": "damien.dietrich"
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
  "data": "l6n693",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "menuId": 191,
  "menuName": "damien.dietrich",
  "type": "9cbxpa",
  "typeName": "damien.dietrich",
  "parentName": "damien.dietrich",
  "parentId": 754,
  "priority": 112,
  "path": "of2m9r",
  "component": "gmlz0t",
  "query": "nnwx97",
  "routeName": "damien.dietrich",
  "isFrame": "dtb9hd",
  "isCache": "trcutl",
  "menuType": "odrxa7",
  "menuTypeName": "damien.dietrich",
  "visible": "jjh39t",
  "status": "u42o6v",
  "perms": "69ot6e",
  "icon": "71qeoc",
  "imagePath": "hswms1",
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:13",
  "lastTime": "2026-09-04 00:09:13",
  "children": [
    {
      "$ref": ".."
    }
  ],
  "childNum": 960,
  "description": "e448fj",
  "listJson": "25ibra",
  "delFlag": 2,
  "permsList": [
    {
      "permsName": "damien.dietrich",
      "permsStr": "cbb2w7"
    }
  ],
  "buttonMenuList": [
    {
      "id": "68",
      "parentId": "68",
      "code": "23522",
      "name": "damien.dietrich"
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
  "data": "3wau6m",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "menuId": 191,
  "menuName": "damien.dietrich",
  "type": "0akpqt",
  "typeName": "damien.dietrich",
  "parentName": "damien.dietrich",
  "parentId": 662,
  "priority": 518,
  "path": "z3vqg4",
  "component": "s5ge15",
  "query": "cnbrtw",
  "routeName": "damien.dietrich",
  "isFrame": "xuhsvx",
  "isCache": "vostl7",
  "menuType": "nn3tjv",
  "menuTypeName": "damien.dietrich",
  "visible": "tgyr68",
  "status": "wscexe",
  "perms": "qctjdb",
  "icon": "1n2lem",
  "imagePath": "8umjyj",
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:13",
  "lastTime": "2026-09-04 00:09:13",
  "children": [
    {
      "$ref": ".."
    }
  ],
  "childNum": 781,
  "description": "dxzg1v",
  "listJson": "fjotch",
  "delFlag": 2,
  "permsList": [
    {
      "permsName": "damien.dietrich",
      "permsStr": "97mhb1"
    }
  ],
  "buttonMenuList": [
    {
      "id": "68",
      "parentId": "68",
      "code": "23522",
      "name": "damien.dietrich"
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
  "data": "yo836b",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "menuId": 248,
  "menuName": "damien.dietrich",
  "type": "9g6kt1",
  "typeName": "damien.dietrich",
  "parentName": "damien.dietrich",
  "parentId": 439,
  "priority": 840,
  "path": "30knni",
  "component": "fmf8nd",
  "query": "xfiul8",
  "routeName": "damien.dietrich",
  "isFrame": "tqydf0",
  "isCache": "z9kqkv",
  "menuType": "rk76ej",
  "menuTypeName": "damien.dietrich",
  "visible": "mfl0b1",
  "status": "apc98d",
  "perms": "s5h5n5",
  "icon": "245avn",
  "imagePath": "vdle48",
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:13",
  "lastTime": "2026-09-04 00:09:13",
  "children": [
    {
      "$ref": ".."
    }
  ],
  "childNum": 252,
  "description": "mptyrl",
  "listJson": "nv3n03",
  "delFlag": 2,
  "permsList": [
    {
      "permsName": "damien.dietrich",
      "permsStr": "qn9p9l"
    }
  ],
  "buttonMenuList": [
    {
      "id": "68",
      "parentId": "68",
      "code": "23522",
      "name": "damien.dietrich"
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
  "data": "kvquiv",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "710enz",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:13",
  "lastTime": "2026-09-04 00:09:13",
  "id": 953,
  "parentId": 949,
  "appId": "68",
  "name": "damien.dietrich",
  "ename": "damien.dietrich",
  "sname": "damien.dietrich",
  "isProtect": true,
  "type": "8fgj07",
  "userId": "68",
  "code": "23522",
  "menuLevel": 120,
  "subCount": 778,
  "perms": "qa9pho",
  "urlType": "d8dahs",
  "url": "www.evie-walter.net",
  "icon": "77q2tr",
  "popPosition": 988,
  "imagePath": "r69udp",
  "css": "o1t0iy",
  "jsEvent": "c6wluu",
  "menuSeq": "a7rfjt",
  "shortCut": "mkm44b",
  "isLeaf": true,
  "isDisplay": true,
  "isDisabled": true,
  "isCheck": true,
  "priority": 491,
  "delFlag": 2,
  "deleteTime": "2026-09-04 00:09:13",
  "description": "fh7vkq",
  "spare1": "sp0bpm",
  "spare2": "ex07kc",
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
  "data": "xw4oou",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/list.do?startTime=2026-09-04 00:07:57&status=73&limit=10&page=1&endTime=2026-09-04 00:07:57&roleId=402&q=1z9f2a&roleName=damien.dietrich&roleKey=8ehvy9&orderBy=625
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:14",
      "lastTime": "2026-09-04 00:09:14",
      "roleId": 440,
      "roleName": "damien.dietrich",
      "roleKey": "u6kyzn",
      "roleSort": 10,
      "menuCheckStrictly": true,
      "deptCheckStrictly": true,
      "status": 447,
      "flag": true,
      "menuIds": [
        554
      ],
      "deptIds": [
        585
      ],
      "permissions": [
        "urjurl"
      ],
      "remark": "ld96ff",
      "parentName": "damien.dietrich",
      "appName": "damien.dietrich",
      "roletypeId": "68",
      "roletypeName": "damien.dietrich",
      "priority": 289,
      "isSuper": true
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/export.do --data 'writer.formatter.lastException.detailMessage=success&contentType=f0tibq&q=fimz6e&status=674&writer.psOut.closed=true&writer.autoFlush=true&startTime=2026-09-04 00:07:57&endTime=2026-09-04 00:07:57&writer.psOut.textOut.nChars=460&writer.psOut.autoFlush=true&writer.psOut.textOut.nextChar=190&committed=true&writer.writeBuffer=p&writer.writeBuffer=p&writer.formatter.zero=8&writer.psOut.formatter.zero=h&roleKey=ahlqqf&characterEncoding=16f3lp&writer.psOut.closing=true&limit=10&roleName=damien.dietrich&status=584&writer.trouble=true&orderBy=259&page=1&writer.psOut.trouble=true&bufferSize=10&roleId=356'
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
  "data": "r9ua1m",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/166.do
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:14",
    "lastTime": "2026-09-04 00:09:14",
    "roleId": 183,
    "roleName": "damien.dietrich",
    "roleKey": "l209wo",
    "roleSort": 73,
    "menuCheckStrictly": true,
    "deptCheckStrictly": true,
    "status": 981,
    "flag": true,
    "menuIds": [
      331
    ],
    "deptIds": [
      526
    ],
    "permissions": [
      "oaxqwg"
    ],
    "remark": "sm6aof",
    "parentName": "damien.dietrich",
    "appName": "damien.dietrich",
    "roletypeId": "68",
    "roletypeName": "damien.dietrich",
    "priority": 855,
    "isSuper": true
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:14",
  "lastTime": "2026-09-04 00:09:14",
  "roleId": 145,
  "roleName": "damien.dietrich",
  "roleKey": "10z56t",
  "roleSort": 922,
  "menuCheckStrictly": true,
  "deptCheckStrictly": true,
  "status": 802,
  "flag": true,
  "menuIds": [
    887
  ],
  "deptIds": [
    778
  ],
  "permissions": [
    "9zv745"
  ],
  "remark": "hs74fr",
  "parentName": "damien.dietrich",
  "appName": "damien.dietrich",
  "roletypeId": "68",
  "roletypeName": "damien.dietrich",
  "priority": 453,
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
  "data": "goythq",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:14",
  "lastTime": "2026-09-04 00:09:14",
  "roleId": 101,
  "roleName": "damien.dietrich",
  "roleKey": "3wxqsm",
  "roleSort": 302,
  "menuCheckStrictly": true,
  "deptCheckStrictly": true,
  "status": 675,
  "flag": true,
  "menuIds": [
    685
  ],
  "deptIds": [
    289
  ],
  "permissions": [
    "c6qo29"
  ],
  "remark": "3m1ix7",
  "parentName": "damien.dietrich",
  "appName": "damien.dietrich",
  "roletypeId": "68",
  "roletypeName": "damien.dietrich",
  "priority": 773,
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
  "data": "y7id6v",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:14",
  "lastTime": "2026-09-04 00:09:14",
  "roleId": 851,
  "roleName": "damien.dietrich",
  "roleKey": "uubctb",
  "roleSort": 466,
  "menuCheckStrictly": true,
  "deptCheckStrictly": true,
  "status": 958,
  "flag": true,
  "menuIds": [
    109
  ],
  "deptIds": [
    25
  ],
  "permissions": [
    "3f6evd"
  ],
  "remark": "46nnx0",
  "parentName": "damien.dietrich",
  "appName": "damien.dietrich",
  "roletypeId": "68",
  "roletypeName": "damien.dietrich",
  "priority": 440,
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
  "data": "qrtjp8",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:14",
  "lastTime": "2026-09-04 00:09:14",
  "roleId": 987,
  "roleName": "damien.dietrich",
  "roleKey": "mw4lac",
  "roleSort": 192,
  "menuCheckStrictly": true,
  "deptCheckStrictly": true,
  "status": 8,
  "flag": true,
  "menuIds": [
    937
  ],
  "deptIds": [
    537
  ],
  "permissions": [
    "bonmmt"
  ],
  "remark": "077zsw",
  "parentName": "damien.dietrich",
  "appName": "damien.dietrich",
  "roletypeId": "68",
  "roletypeName": "damien.dietrich",
  "priority": 333,
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
  "data": "ktln9p",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "2i3sb9",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:14",
  "lastTime": "2026-09-04 00:09:14",
  "id": 80,
  "roletypeId": "68",
  "appId": "68",
  "name": "damien.dietrich",
  "code": "23522",
  "priority": 91,
  "isRegular": true,
  "isSuper": true,
  "isPublic": true,
  "status": 760,
  "description": "vxw79j",
  "areaType": "yvjlc1"
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
  "data": "1ot335",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:14",
  "lastTime": "2026-09-04 00:09:14",
  "roleId": 273,
  "roleName": "damien.dietrich",
  "roleKey": "e11hg5",
  "roleSort": 168,
  "menuCheckStrictly": true,
  "deptCheckStrictly": true,
  "status": 816,
  "flag": true,
  "menuIds": [
    43
  ],
  "deptIds": [
    946
  ],
  "permissions": [
    "7q6kck"
  ],
  "remark": "12txe4",
  "parentName": "damien.dietrich",
  "appName": "damien.dietrich",
  "roletypeId": "68",
  "roletypeName": "damien.dietrich",
  "priority": 969,
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
  "data": "xinysm",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:14",
  "lastTime": "2026-09-04 00:09:14",
  "roleId": 893,
  "roleName": "damien.dietrich",
  "roleKey": "zzilqp",
  "roleSort": 151,
  "menuCheckStrictly": true,
  "deptCheckStrictly": true,
  "status": 941,
  "flag": true,
  "menuIds": [
    282
  ],
  "deptIds": [
    210
  ],
  "permissions": [
    "amj9iu"
  ],
  "remark": "12qcfo",
  "parentName": "damien.dietrich",
  "appName": "damien.dietrich",
  "roletypeId": "68",
  "roletypeName": "damien.dietrich",
  "priority": 860,
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
  "data": "2nkkb9",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:14",
      "lastTime": "2026-09-04 00:09:14",
      "roleId": 233,
      "roleName": "damien.dietrich",
      "roleKey": "a5tw3n",
      "roleSort": 660,
      "menuCheckStrictly": true,
      "deptCheckStrictly": true,
      "status": 953,
      "flag": true,
      "menuIds": [
        134
      ],
      "deptIds": [
        372
      ],
      "permissions": [
        "mlsz3n"
      ],
      "remark": "lgl33i",
      "parentName": "damien.dietrich",
      "appName": "damien.dietrich",
      "roletypeId": "68",
      "roletypeName": "damien.dietrich",
      "priority": 96,
      "isSuper": true
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/authUser/allocatedList.do?orderBy=370&username=damien.dietrich&deptId=1&adminId=705&nickName=cicely.medhurst&email=rudy.vandervort@hotmail.com&page=1&status=q3g9la&endTime=2026-09-04 00:07:57&userId=68&q=ovckmu&limit=10&organId=68&startTime=2026-09-04 00:07:57&delFlag=2&mobile=205.573.4959
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:14",
      "lastTime": "2026-09-04 00:09:14",
      "id": 978,
      "userId": "68",
      "deptId": 459,
      "deptName": "damien.dietrich",
      "organId": "68",
      "organName": "damien.dietrich",
      "name": "damien.dietrich",
      "username": "damien.dietrich",
      "nickName": "cicely.medhurst",
      "email": "rudy.vandervort@hotmail.com",
      "mobile": "205.573.4959",
      "imagePath": "u4srm5",
      "password": "qdbjb0",
      "isSuperAdmin": true,
      "isAuditAdmin": true,
      "isSelfAdmin": true,
      "status": 156,
      "delFlag": 2,
      "lastLoginIp": "24.62.148.61",
      "lastLoginTime": "2026-09-04 00:09:14",
      "description": "veqsrz",
      "dept": {
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:14",
        "lastTime": "2026-09-04 00:09:14",
        "id": 566,
        "organId": "68",
        "parentId": 452,
        "appId": "68",
        "depttypeId": 777,
        "foreignId": "68",
        "createType": 768,
        "type": "raakzy",
        "name": "damien.dietrich",
        "sname": "damien.dietrich",
        "areaCode": "23522",
        "organLeader": "bdsr0n",
        "leaderId": "68",
        "leaderMobile": "205.573.4959",
        "isOrganLevel": true,
        "isVirtual": true,
        "isLeaf": true,
        "isDisabled": true,
        "searchCode": "23522",
        "imagePath": "qyryta",
        "priority": 8,
        "status": 727,
        "delFlag": 2,
        "description": "fvreke",
        "spare1": "3a3744",
        "spare2": "34o8v3",
        "children": [
          {
            "$ref": ".."
          }
        ]
      },
      "roles": [
        {
          "creatorId": "68",
          "createTime": "2026-09-04 00:09:14",
          "lastTime": "2026-09-04 00:09:14",
          "id": 588,
          "roletypeId": "68",
          "appId": "68",
          "name": "damien.dietrich",
          "code": "23522",
          "priority": 30,
          "isRegular": true,
          "isSuper": true,
          "isPublic": true,
          "status": 777,
          "description": "nxb0so",
          "areaType": "2et614"
        }
      ],
      "roleIds": [
        858
      ],
      "positionIds": [
        "dy6pjc"
      ],
      "roleId": 169,
      "userRoleList": [
        {
          "id": 349,
          "deptId": 506,
          "deptName": "damien.dietrich",
          "organId": "68",
          "organName": "damien.dietrich",
          "roleId": 677,
          "roleName": "damien.dietrich",
          "adminId": 173
        }
      ],
      "code": "23522",
      "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/authUser/unallocatedList.do?adminId=204&organId=68&username=damien.dietrich&endTime=2026-09-04 00:07:57&mobile=205.573.4959&nickName=cicely.medhurst&startTime=2026-09-04 00:07:57&userId=68&email=rudy.vandervort@hotmail.com&limit=10&orderBy=519&deptId=644&status=79k169&delFlag=2&page=1&q=4kppd8
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:14",
      "lastTime": "2026-09-04 00:09:14",
      "id": 742,
      "userId": "68",
      "deptId": 515,
      "deptName": "damien.dietrich",
      "organId": "68",
      "organName": "damien.dietrich",
      "name": "damien.dietrich",
      "username": "damien.dietrich",
      "nickName": "cicely.medhurst",
      "email": "rudy.vandervort@hotmail.com",
      "mobile": "205.573.4959",
      "imagePath": "3j6ii3",
      "password": "1p6pj2",
      "isSuperAdmin": true,
      "isAuditAdmin": true,
      "isSelfAdmin": true,
      "status": 103,
      "delFlag": 2,
      "lastLoginIp": "24.62.148.61",
      "lastLoginTime": "2026-09-04 00:09:14",
      "description": "5k9ugz",
      "dept": {
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:14",
        "lastTime": "2026-09-04 00:09:14",
        "id": 274,
        "organId": "68",
        "parentId": 88,
        "appId": "68",
        "depttypeId": 308,
        "foreignId": "68",
        "createType": 299,
        "type": "mbs4ev",
        "name": "damien.dietrich",
        "sname": "damien.dietrich",
        "areaCode": "23522",
        "organLeader": "anmt1x",
        "leaderId": "68",
        "leaderMobile": "205.573.4959",
        "isOrganLevel": true,
        "isVirtual": true,
        "isLeaf": true,
        "isDisabled": true,
        "searchCode": "23522",
        "imagePath": "voz7yt",
        "priority": 142,
        "status": 270,
        "delFlag": 2,
        "description": "ak5cpe",
        "spare1": "8lc726",
        "spare2": "y3hl9j",
        "children": [
          {
            "$ref": ".."
          }
        ]
      },
      "roles": [
        {
          "creatorId": "68",
          "createTime": "2026-09-04 00:09:14",
          "lastTime": "2026-09-04 00:09:14",
          "id": 145,
          "roletypeId": "68",
          "appId": "68",
          "name": "damien.dietrich",
          "code": "23522",
          "priority": 179,
          "isRegular": true,
          "isSuper": true,
          "isPublic": true,
          "status": 379,
          "description": "tohnsc",
          "areaType": "1avge4"
        }
      ],
      "roleIds": [
        419
      ],
      "positionIds": [
        "jh3sa1"
      ],
      "roleId": 970,
      "userRoleList": [
        {
          "id": 509,
          "deptId": 296,
          "deptName": "damien.dietrich",
          "organId": "68",
          "organName": "damien.dietrich",
          "roleId": 699,
          "roleName": "damien.dietrich",
          "adminId": 316
        }
      ],
      "code": "23522",
      "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "id": 259,
  "roleId": 517,
  "adminId": 45
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
  "data": "w9r0v6",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/authUser/cancelAll.do --data 'adminIds=ea9uq8&adminIds=ea9uq8&roleId=476'
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
  "data": "q564vd",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/authUser/selectAll.do --data 'adminIds=pwl1uk&adminIds=pwl1uk&roleId=218'
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
  "data": "m6d3lz",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/admin/role/deptTree/81.do
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
      283
    ],
    "depts": [
      {
        "id": 37,
        "label": "k0avs3",
        "children": [
          {
            "$ref": ".."
          }
        ]
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/todo/list.do?todoAbstract=szo1yj&opOrganId=68&todoProcessStatus=idr8wk&todoAccountName=damien.dietrich&todoType=qgp220&todoModuleId=68&todoUserId=68&creatorId=68&todoId=68&orderBy=835&page=1&opUserId=68&spare1=n94nrt&appId=68&startTime=2026-09-04 00:07:57&opTime=2026-09-04 00:09:16&bizType=xbn0n0&todoOrganName=damien.dietrich&endTime=2026-09-04 00:07:57&todoOrganId=68&todoCurrInfo=5r38bv&spare2=h2s6on&todoLabels=zvnj8t&todoCreateTime=2026-09-04 00:09:16&todoNextInfo=5ewqo3&todoContent=g6v3dn&q=8461i0&opOrganName=damien.dietrich&type=t5ur0x&todoName=damien.dietrich&status=ua30os&limit=10&todoProcessInfo=onxwx8&foreignId=68&todoUrl=www.evie-walter.net&id=68&todoUserName=damien.dietrich&description=hrtq62&todoAccountId=68&todoProcessName=damien.dietrich&todoModuleName=damien.dietrich
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:17",
      "lastTime": "2026-09-04 00:09:17",
      "id": "68",
      "appId": "68",
      "foreignId": "68",
      "type": "73nnh2",
      "bizType": "axcmhj",
      "todoCreateTime": "2026-09-04 00:09:17",
      "todoId": "68",
      "todoType": "fsyenz",
      "todoName": "damien.dietrich",
      "todoAbstract": "ltm8oc",
      "todoAccountId": "68",
      "todoAccountName": "damien.dietrich",
      "todoModuleId": "68",
      "todoModuleName": "damien.dietrich",
      "todoUserId": "68",
      "todoUserName": "damien.dietrich",
      "todoOrganId": "68",
      "todoOrganName": "damien.dietrich",
      "todoProcessName": "damien.dietrich",
      "todoProcessStatus": "fd8yu1",
      "todoProcessInfo": "28sjk3",
      "todoCurrInfo": "x76igt",
      "todoNextInfo": "wsy4xw",
      "todoUrl": "www.evie-walter.net",
      "todoLabels": "hvqqb0",
      "todoContent": "ynu77m",
      "status": "cmal9p",
      "opUserId": "68",
      "opTime": "2026-09-04 00:09:17",
      "opOrganId": "68",
      "opOrganName": "damien.dietrich",
      "description": "f7l3sn",
      "spare1": "wlnz4t",
      "spare2": "bgjddh"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/todo/export.do --data 'status=231&todoId=68&status=b2rsso&todoUserId=68&todoAccountName=damien.dietrich&appId=68&todoModuleId=68&todoLabels=o3hsf2&todoName=damien.dietrich&startTime=2026-09-04 00:07:57&q=fwem9e&opOrganId=68&todoModuleName=damien.dietrich&orderBy=337&todoProcessName=damien.dietrich&todoCurrInfo=91kswk&todoOrganId=68&spare1=wni6b8&writer.trouble=true&todoType=6cmf51&writer.formatter.lastException.detailMessage=success&todoUserName=damien.dietrich&todoCreateTime=2026-09-04 00:09:17&bizType=36zz5z&todoUrl=www.evie-walter.net&opUserId=68&writer.autoFlush=true&limit=10&writer.formatter.zero=g&writer.psOut.closed=true&spare2=ipmrr5&characterEncoding=zd6tns&todoOrganName=damien.dietrich&bufferSize=10&todoNextInfo=0v2voz&todoProcessInfo=2u8pv4&writer.writeBuffer=f&writer.writeBuffer=f&writer.psOut.textOut.nextChar=188&type=zuy66u&todoAbstract=43br0y&foreignId=68&page=1&creatorId=68&writer.psOut.formatter.zero=k&todoAccountId=68&opOrganName=damien.dietrich&writer.psOut.textOut.nChars=342&opTime=2026-09-04 00:09:17&endTime=2026-09-04 00:07:57&todoContent=roqfob&id=68&writer.psOut.autoFlush=true&description=61zbbf&writer.psOut.closing=true&writer.psOut.trouble=true&todoProcessStatus=wo76xz&committed=true&contentType=m20za2'
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
  "data": "tqfpve",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:17",
    "lastTime": "2026-09-04 00:09:17",
    "id": "68",
    "appId": "68",
    "foreignId": "68",
    "type": "8j8gvl",
    "bizType": "qwl5gi",
    "todoCreateTime": "2026-09-04 00:09:17",
    "todoId": "68",
    "todoType": "6rzkav",
    "todoName": "damien.dietrich",
    "todoAbstract": "bwg219",
    "todoAccountId": "68",
    "todoAccountName": "damien.dietrich",
    "todoModuleId": "68",
    "todoModuleName": "damien.dietrich",
    "todoUserId": "68",
    "todoUserName": "damien.dietrich",
    "todoOrganId": "68",
    "todoOrganName": "damien.dietrich",
    "todoProcessName": "damien.dietrich",
    "todoProcessStatus": "voq83u",
    "todoProcessInfo": "wyr3rp",
    "todoCurrInfo": "jaee5g",
    "todoNextInfo": "579jsp",
    "todoUrl": "www.evie-walter.net",
    "todoLabels": "twecw1",
    "todoContent": "qqjr7a",
    "status": "mz6new",
    "opUserId": "68",
    "opTime": "2026-09-04 00:09:17",
    "opOrganId": "68",
    "opOrganName": "damien.dietrich",
    "description": "i6za6x",
    "spare1": "d66kof",
    "spare2": "0ylvta"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:17",
  "lastTime": "2026-09-04 00:09:17",
  "id": "68",
  "appId": "68",
  "foreignId": "68",
  "type": "j9mxgk",
  "bizType": "4zdx21",
  "todoCreateTime": "2026-09-04 00:09:17",
  "todoId": "68",
  "todoType": "q4b79y",
  "todoName": "damien.dietrich",
  "todoAbstract": "utxke7",
  "todoAccountId": "68",
  "todoAccountName": "damien.dietrich",
  "todoModuleId": "68",
  "todoModuleName": "damien.dietrich",
  "todoUserId": "68",
  "todoUserName": "damien.dietrich",
  "todoOrganId": "68",
  "todoOrganName": "damien.dietrich",
  "todoProcessName": "damien.dietrich",
  "todoProcessStatus": "bmawm8",
  "todoProcessInfo": "oazjwq",
  "todoCurrInfo": "4batus",
  "todoNextInfo": "4cirzm",
  "todoUrl": "www.evie-walter.net",
  "todoLabels": "s1dgoc",
  "todoContent": "zwfpx7",
  "status": "2hzqyj",
  "opUserId": "68",
  "opTime": "2026-09-04 00:09:17",
  "opOrganId": "68",
  "opOrganName": "damien.dietrich",
  "description": "dw3kjr",
  "spare1": "mse4rg",
  "spare2": "2cwkwd"
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
  "data": "9wr8ws",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:17",
  "lastTime": "2026-09-04 00:09:17",
  "id": "68",
  "appId": "68",
  "foreignId": "68",
  "type": "7jqnvz",
  "bizType": "nqrc7d",
  "todoCreateTime": "2026-09-04 00:09:17",
  "todoId": "68",
  "todoType": "5p6ire",
  "todoName": "damien.dietrich",
  "todoAbstract": "tke8lq",
  "todoAccountId": "68",
  "todoAccountName": "damien.dietrich",
  "todoModuleId": "68",
  "todoModuleName": "damien.dietrich",
  "todoUserId": "68",
  "todoUserName": "damien.dietrich",
  "todoOrganId": "68",
  "todoOrganName": "damien.dietrich",
  "todoProcessName": "damien.dietrich",
  "todoProcessStatus": "ro0b1i",
  "todoProcessInfo": "vtaodt",
  "todoCurrInfo": "994vk0",
  "todoNextInfo": "q7x8z7",
  "todoUrl": "www.evie-walter.net",
  "todoLabels": "hhmday",
  "todoContent": "6tey04",
  "status": "63ud36",
  "opUserId": "68",
  "opTime": "2026-09-04 00:09:17",
  "opOrganId": "68",
  "opOrganName": "damien.dietrich",
  "description": "2t8cxa",
  "spare1": "dt7gki",
  "spare2": "pvryb2"
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
  "data": "3j3sqv",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "ory3z6",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/xzqh/list.do?code=23522&parentIds=qmf6fe&parentIds=qmf6fe&lft=234&hasContent=true&countryId=68&delFlag=2&nameTotal=g8nxzv&areatypeIds=gxjka5&areatypeIds=gxjka5&isDisplay=true&startTime=2026-09-04 00:07:57&parentId=895&endTime=2026-09-04 00:07:57&name=damien.dietrich&sname=damien.dietrich&page=1&deleteTime=2026-09-04 00:07:57&rgt=88&likeQuery=9ornke&ids=s7j95w&ids=s7j95w&orderBy=486&q=cmcyqk&limit=10&areatypeId=68&searchCode=23522&nameEn=12dlxs&description=5jiaz9
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:23",
      "lastTime": "2026-09-04 00:09:23",
      "id": 450,
      "parentId": 556,
      "countryId": "68",
      "areatypeId": "68",
      "lft": 906,
      "rgt": 389,
      "code": "23522",
      "name": "damien.dietrich",
      "nameTotal": "g5quct",
      "sname": "damien.dietrich",
      "nameEn": "h5ve5u",
      "searchCode": "23522",
      "isDisplay": true,
      "hasContent": true,
      "priority": 689,
      "delFlag": 2,
      "deleteTime": "2026-09-04 00:09:23",
      "description": "3tww6g"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/xzqh/export.do --data 'characterEncoding=becrj0&nameTotal=utmf6y&description=lgrmh0&writer.formatter.zero=p&writer.psOut.closing=true&startTime=2026-09-04 00:07:57&parentIds=4lzjca&parentIds=4lzjca&sname=damien.dietrich&ids=cdqq5s&ids=cdqq5s&status=228&committed=true&likeQuery=pi5n8c&writer.psOut.trouble=true&nameEn=2hjo88&rgt=224&countryId=68&writer.psOut.autoFlush=true&isDisplay=true&writer.writeBuffer=3&writer.writeBuffer=3&areatypeIds=f9l27z&areatypeIds=f9l27z&endTime=2026-09-04 00:07:57&deleteTime=2026-09-04 00:07:57&writer.trouble=true&limit=10&writer.psOut.textOut.nextChar=901&contentType=u96m3r&parentId=293&writer.formatter.lastException.detailMessage=success&orderBy=618&lft=369&searchCode=23522&q=qbwwon&page=1&hasContent=true&writer.psOut.textOut.nChars=74&writer.psOut.closed=true&areatypeId=68&writer.autoFlush=true&bufferSize=10&code=23522&writer.psOut.formatter.zero=4&name=damien.dietrich&delFlag=2'
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
  "data": "u6egvi",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:23",
    "lastTime": "2026-09-04 00:09:23",
    "id": 707,
    "parentId": 429,
    "countryId": "68",
    "areatypeId": "68",
    "lft": 817,
    "rgt": 129,
    "code": "23522",
    "name": "damien.dietrich",
    "nameTotal": "rfoecx",
    "sname": "damien.dietrich",
    "nameEn": "4c4m84",
    "searchCode": "23522",
    "isDisplay": true,
    "hasContent": true,
    "priority": 557,
    "delFlag": 2,
    "deleteTime": "2026-09-04 00:09:23",
    "description": "yk5aoh"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:23",
  "lastTime": "2026-09-04 00:09:23",
  "id": 69,
  "parentId": 57,
  "countryId": "68",
  "areatypeId": "68",
  "lft": 141,
  "rgt": 637,
  "code": "23522",
  "name": "damien.dietrich",
  "nameTotal": "67nc63",
  "sname": "damien.dietrich",
  "nameEn": "p0elcc",
  "searchCode": "23522",
  "isDisplay": true,
  "hasContent": true,
  "priority": 785,
  "delFlag": 2,
  "deleteTime": "2026-09-04 00:09:23",
  "description": "v4jmua"
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
  "data": "luoem4",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:23",
  "lastTime": "2026-09-04 00:09:23",
  "id": 639,
  "parentId": 375,
  "countryId": "68",
  "areatypeId": "68",
  "lft": 664,
  "rgt": 410,
  "code": "23522",
  "name": "damien.dietrich",
  "nameTotal": "8yjwvp",
  "sname": "damien.dietrich",
  "nameEn": "p84y3d",
  "searchCode": "23522",
  "isDisplay": true,
  "hasContent": true,
  "priority": 237,
  "delFlag": 2,
  "deleteTime": "2026-09-04 00:09:23",
  "description": "kg9x0q"
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
  "data": "i3fs7c",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "r7e5yi",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/roletype/list.do?limit=10&code=23522&startTime=2026-09-04 00:07:57&endTime=2026-09-04 00:07:57&delFlag=2&q=10t457&page=1&name=damien.dietrich&description=vfvtyq&orderBy=328&type=i2sw3z&existKey=72mqvk
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:26",
      "lastTime": "2026-09-04 00:09:26",
      "id": "68",
      "name": "damien.dietrich",
      "type": "m01h4f",
      "code": "23522",
      "priority": 584,
      "delFlag": 2,
      "description": "wgpt9q"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/roletype/export.do --data 'writer.formatter.lastException.detailMessage=success&writer.psOut.autoFlush=true&writer.psOut.closing=true&code=23522&writer.autoFlush=true&bufferSize=10&existKey=6cog5j&writer.psOut.formatter.zero=z&characterEncoding=gy7wyc&writer.writeBuffer=r&writer.writeBuffer=r&writer.trouble=true&writer.formatter.zero=s&writer.psOut.trouble=true&committed=true&type=s8b8ga&writer.psOut.textOut.nChars=105&writer.psOut.closed=true&writer.psOut.textOut.nextChar=685&delFlag=2&description=98h3fu&startTime=2026-09-04 00:07:57&orderBy=341&q=pih1pe&endTime=2026-09-04 00:07:57&limit=10&page=1&status=364&name=damien.dietrich&contentType=5sqn80'
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
  "data": "yji3l4",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:27",
    "lastTime": "2026-09-04 00:09:27",
    "id": "68",
    "name": "damien.dietrich",
    "type": "57mu5i",
    "code": "23522",
    "priority": 103,
    "delFlag": 2,
    "description": "8cprjb"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:27",
  "lastTime": "2026-09-04 00:09:27",
  "id": "68",
  "name": "damien.dietrich",
  "type": "xv4k9h",
  "code": "23522",
  "priority": 235,
  "delFlag": 2,
  "description": "rhctb1"
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
  "data": "mt8uv9",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:27",
  "lastTime": "2026-09-04 00:09:27",
  "id": "68",
  "name": "damien.dietrich",
  "type": "91zdu7",
  "code": "23522",
  "priority": 505,
  "delFlag": 2,
  "description": "u0t3hl"
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
  "data": "l22n07",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "ffi0pe",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/parts/list.do?limit=10&q=jftms4&orderBy=174&cfgValue=qi4uat&endTime=2026-09-04 00:07:57&page=1&startTime=2026-09-04 00:07:57&ids=1d9uh5&ids=1d9uh5&cfgKey=bgodb7
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
    "totalCount": 615,
    "pageSize": 10,
    "totalPage": 1,
    "currPage": 1,
    "list": [
      {
        "cfgKey": "coqk1q",
        "cfgValue": "a3qpnn"
      }
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/parts/export.do --data 'writer.psOut.textOut.nextChar=586&limit=10&ids=h63990&ids=h63990&writer.writeBuffer=c&writer.writeBuffer=c&cfgValue=tv18i6&writer.psOut.closed=true&writer.psOut.trouble=true&orderBy=81&writer.psOut.formatter.zero=z&bufferSize=10&endTime=2026-09-04 00:07:57&contentType=b6hyb6&writer.autoFlush=true&writer.trouble=true&writer.psOut.textOut.nChars=594&writer.psOut.closing=true&status=821&characterEncoding=ypgrlk&page=1&cfgKey=18ayi7&startTime=2026-09-04 00:07:57&writer.formatter.zero=d&writer.formatter.lastException.detailMessage=success&writer.psOut.autoFlush=true&committed=true&q=z0rfn2'
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
  "data": "b767gt",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/system/parts/8gg50o.do
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
    "cfgKey": "fzkfno",
    "cfgValue": "dzl5vw"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "cfgKey": "mdnpmw",
  "cfgValue": "ifocx5"
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
  "data": "p8cncg",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "cfgKey": "rgpkgf",
  "cfgValue": "66rqxz"
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
  "data": "j18gt2",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "b24f89",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "h9aom7",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52",
    "img": "7s4p5e",
    "code": "23522"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52",
    "img": "ubmx5b",
    "code": "23522"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/list.do?subTable.subTableFkName=damien.dietrich&subTable.page=1&pkColumn.tableId=624&subTable.pkColumn.isInsert=94hvs6&columns[0].isInsert=pyhgor&subTable.pkColumn.creatorId=68&columns[0].isList=qqj5lq&subTable.pkColumn.tableId=203&subTable.subTable.subTableFkName=damien.dietrich&subTable.pkColumn.javaType=0ojxh5&pkColumn.createTime=2026-09-04 00:09:27&subTable.tableName=damien.dietrich&subTable.subTable.functionName=damien.dietrich&packageName=damien.dietrich&subTable.businessName=damien.dietrich&limit=10&subTable.columns[0].queryType=0yuzxf&subTable.pkColumn.columnComment=srg2qj&tplCategory=rjk6r9&subTable.subTable.lastTime=2026-09-04 00:09:27&subTable.pkColumn.isIncrement=4v192c&subTable.columns[0].isList=vo4pwc&subTable.subTable.packageName=damien.dietrich&columns[0].tableId=606&columns[0].isIncrement=sscm3a&subTable.subTable.tableComment=d19mf4&subTable.subTable.optionLists=b4gfpa&subTable.subTable.tplCategory=sxdeo5&subTable.columns[0].priority=975&subTable.pkColumn.isRequired=t1lbsd&pkColumn.htmlType=yfruei&moduleName=damien.dietrich&pkColumn.javaField=bvuklf&subTable.pkColumn.lastTime=2026-09-04 00:09:27&businessName=damien.dietrich&genPath=ylddb3&subTable.pkColumn.dictType=m4zyx5&subTable.subTable.className=damien.dietrich&subTable.subTable.tplWebType=c84rbk&subTable.subTable.moduleName=damien.dietrich&subTable.subTable.Description=r04c1z&subTable.columns[0].tableId=584&subTable.columns[0].isPk=js1rw0&subTable.optionLists=9eumbt&functionName=damien.dietrich&subTable.columns[0].dictType=z29uwe&tableName=damien.dietrich&pkColumn.lastTime=2026-09-04 00:09:27&subTable.tableId=446&subTable.subTable.parentMenuName=damien.dietrich&subTable.treeParentCode=23522&subTable.pkColumn.htmlType=k7n2kh&columns[0].columnName=damien.dietrich&columns[0].javaField=vqhi5h&className=damien.dietrich&subTable.parentMenuId=532&columns[0].isEdit=nyx6sf&tableId=683&pkColumn.columnId=898&columns[0].creatorId=68&subTable.treeCode=23522&treeName=damien.dietrich&columns[0].dictType=hw25xg&page=1&pkColumn.columnComment=0iq8i9&subTable.creatorId=68&subTable.createTime=2026-09-04 00:09:27&subTable.subTableName=damien.dietrich&subTable.pkColumn.isEdit=o41acu&subTable.subTable.genType=a05v3g&subTable.columns[0].lastTime=2026-09-04 00:09:27&subTable.columns[0].columnName=damien.dietrich&subTable.pkColumn.isQuery=1w7a0g&subTable.columns[0].htmlType=7et68g&pkColumn.isInsert=7azon9&treeCode=23522&subTable.pkColumn.createTime=2026-09-04 00:09:27&pkColumn.isList=es1dqq&subTable.subTable.creatorId=68&subTable.columns[0].isRequired=8ehqk7&subTable.columns[0].isEdit=v9aij6&pkColumn.queryType=j6icjf&columns[0].lastTime=2026-09-04 00:09:27&subTable.subTable.page=1&parentMenuId=469&pkColumn.priority=288&subTable.functionName=damien.dietrich&subTable.subTable.businessName=damien.dietrich&optionLists=c14wka&columns[0].isRequired=9yw66p&subTable.moduleName=damien.dietrich&subTable.columns[0].isInsert=bcs84z&subTable.treeName=damien.dietrich&subTable.subTable.functionAuthor=Cody Lind&subTable.subTable.treeCode=23522&pkColumn.columnType=cn6c95&treeParentCode=23522&pkColumn.creatorId=68&subTableFkName=damien.dietrich&subTable.pkColumn.columnName=damien.dietrich&pkColumn.javaType=nnn56p&subTable.subTable.parentMenuId=51&columns[0].queryType=2yt7qv&subTable.pkColumn.columnType=lslf76&subTable.columns[0].isQuery=c5vqzd&subTable.subTable.tableName=damien.dietrich&subTable.subTable.formColNum=973&subTable.columns[0].isIncrement=nwbdxj&creatorId=68&pkColumn.isEdit=9qzq9b&columns[0].isPk=fh5ho9&subTable.columns[0].columnType=998c54&subTable.pkColumn.isList=27syfe&subTable.tplWebType=i9bhmt&subTable.lastTime=2026-09-04 00:09:27&subTable.pkColumn.isPk=zpf3jj&tableComment=vyi2w6&subTable.packageName=damien.dietrich&subTable.subTable.genPath=wap176&subTable.genType=a4xm54&subTable.Description=lhlfwc&subTable.functionAuthor=Cody Lind&subTableName=damien.dietrich&subTable.pkColumn.queryType=gei9xk&subTable.subTable.limit=10&subTable.pkColumn.javaField=9w1uxl&createTime=2026-09-04 00:09:27&subTable.pkColumn.columnId=701&columns[0].htmlType=fvtfbi&subTable.columns[0].columnComment=5fgjsi&columns[0].columnId=248&subTable.limit=10&formColNum=871&pkColumn.isRequired=h6gurl&subTable.columns[0].javaType=vy3ads&functionAuthor=Cody Lind&pkColumn.columnName=damien.dietrich&columns[0].columnType=v4jeaz&pkColumn.dictType=by659i&subTable.formColNum=864&tplWebType=18njue&subTable.subTable.tableId=285&subTable.subTable.createTime=2026-09-04 00:09:27&subTable.parentMenuName=damien.dietrich&columns[0].columnComment=qcouxt&columns[0].javaType=rncm8a&columns[0].priority=474&subTable.subTable.treeParentCode=23522&genType=z9rj5e&Description=g94fo4&pkColumn.isPk=t63o83&subTable.columns[0].createTime=2026-09-04 00:09:27&parentMenuName=damien.dietrich&pkColumn.isIncrement=9sn60x&lastTime=2026-09-04 00:09:27&pkColumn.isQuery=3ilfe2&subTable.pkColumn.priority=553&subTable.subTable.treeName=damien.dietrich&subTable.className=damien.dietrich&subTable.genPath=ympjqs&columns[0].isQuery=1s4a95&subTable.subTable.subTableName=damien.dietrich&subTable.columns[0].creatorId=68&columns[0].createTime=2026-09-04 00:09:27&subTable.tplCategory=cgjp3h&subTable.columns[0].columnId=964&subTable.tableComment=tfo70p&subTable.columns[0].javaField=8fxyix
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:27",
      "lastTime": "2026-09-04 00:09:27",
      "tableId": 187,
      "tableName": "damien.dietrich",
      "tableComment": "1a8z0l",
      "subTableName": "damien.dietrich",
      "subTableFkName": "damien.dietrich",
      "className": "damien.dietrich",
      "tplCategory": "yeueh3",
      "tplWebType": "n4mgeh",
      "packageName": "damien.dietrich",
      "moduleName": "damien.dietrich",
      "businessName": "damien.dietrich",
      "functionName": "damien.dietrich",
      "functionAuthor": "Cody Lind",
      "formColNum": 218,
      "genType": "8maxwp",
      "genPath": "6rp2rx",
      "pkColumn": {
        "creatorId": "68",
        "createTime": "2026-09-04 00:09:27",
        "lastTime": "2026-09-04 00:09:27",
        "columnId": 496,
        "tableId": 996,
        "columnName": "damien.dietrich",
        "columnComment": "ihtkna",
        "columnType": "mpqjfa",
        "javaType": "teeha3",
        "javaField": "l8jp5q",
        "isPk": "9bfw3d",
        "isIncrement": "gs1mjc",
        "isRequired": "5yx5xl",
        "isInsert": "84fzpi",
        "isEdit": "7nd1bi",
        "isList": "b6x14a",
        "isQuery": "947emr",
        "queryType": "lao22v",
        "htmlType": "j4mvzl",
        "dictType": "bqg12w",
        "priority": 67
      },
      "subTable": {
        "$ref": "..."
      },
      "columns": [
        {
          "creatorId": "68",
          "createTime": "2026-09-04 00:09:27",
          "lastTime": "2026-09-04 00:09:27",
          "columnId": 337,
          "tableId": 315,
          "columnName": "damien.dietrich",
          "columnComment": "yyi1cr",
          "columnType": "uds4rv",
          "javaType": "g7jqe0",
          "javaField": "cqx8ww",
          "isPk": "0thu32",
          "isIncrement": "xje46c",
          "isRequired": "6pkszo",
          "isInsert": "7dkucs",
          "isEdit": "7c5igf",
          "isList": "la1xf4",
          "isQuery": "85hnxj",
          "queryType": "1bcaks",
          "htmlType": "fmb856",
          "dictType": "h59ffk",
          "priority": 296
        }
      ],
      "optionLists": "bjrd2u",
      "treeCode": "23522",
      "treeParentCode": "23522",
      "treeName": "damien.dietrich",
      "parentMenuId": 174,
      "parentMenuName": "damien.dietrich",
      "Description": "xjcj07",
      "page": 1,
      "limit": 10,
      "params": {
        "mapKey": {}
      }
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/235.do
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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/db/list.do?columns[0].columnName=damien.dietrich&createTime=2026-09-04 00:09:27&subTable.page=1&subTable.className=damien.dietrich&subTable.pkColumn.isQuery=00gmp0&columns[0].columnComment=takk71&subTable.pkColumn.isEdit=lt6wxc&subTable.subTable.treeName=damien.dietrich&subTable.treeParentCode=23522&pkColumn.priority=836&columns[0].htmlType=5x2epw&tplCategory=x0p9vk&subTable.subTable.creatorId=68&subTable.pkColumn.isList=hxp381&subTable.subTable.tableComment=93z6ro&subTable.tplWebType=9w8o26&subTable.pkColumn.dictType=9xo3ht&lastTime=2026-09-04 00:09:27&pkColumn.columnId=429&subTable.moduleName=damien.dietrich&subTable.columns[0].columnName=damien.dietrich&columns[0].isPk=vue298&columns[0].isQuery=wun3hn&columns[0].dictType=0g5cvw&subTable.tableComment=xgb4q3&moduleName=damien.dietrich&pkColumn.isPk=3tb1dq&subTable.pkColumn.tableId=706&subTable.pkColumn.columnType=lqrus6&subTableFkName=damien.dietrich&tableName=damien.dietrich&columns[0].queryType=aw4g6r&subTable.subTable.page=1&columns[0].columnId=493&subTable.subTable.genPath=rz5xm8&subTable.tplCategory=cnddgx&creatorId=68&pkColumn.isEdit=qsj4bp&subTable.subTable.tableId=422&subTable.columns[0].columnComment=lpr3co&columns[0].isIncrement=9yyxbk&subTable.subTableName=damien.dietrich&parentMenuName=damien.dietrich&subTable.pkColumn.creatorId=68&subTable.columns[0].lastTime=2026-09-04 00:09:27&subTable.columns[0].queryType=5bni9j&subTable.columns[0].priority=780&subTable.limit=10&subTable.columns[0].createTime=2026-09-04 00:09:27&tableComment=rdnbbd&subTable.pkColumn.columnComment=d4r9hk&subTable.subTable.tplWebType=kl6ibq&subTable.createTime=2026-09-04 00:09:27&subTable.columns[0].javaType=qgrokj&pkColumn.javaType=ivnuc8&subTable.pkColumn.isRequired=uh6ssr&subTable.subTable.subTableFkName=damien.dietrich&parentMenuId=556&columns[0].isInsert=z6bqdt&subTable.pkColumn.isInsert=fa4d15&subTable.tableName=damien.dietrich&pkColumn.creatorId=68&subTable.subTable.moduleName=damien.dietrich&subTable.columns[0].javaField=9avnxu&functionName=damien.dietrich&subTable.treeCode=23522&subTable.subTable.tableName=damien.dietrich&subTable.subTable.businessName=damien.dietrich&packageName=damien.dietrich&subTable.optionLists=2o28c1&subTable.subTable.functionName=damien.dietrich&columns[0].isEdit=0lb02v&pkColumn.createTime=2026-09-04 00:09:27&pkColumn.dictType=6hwao1&page=1&subTable.subTable.functionAuthor=Cody Lind&subTable.pkColumn.priority=755&subTable.genPath=lw6fcw&pkColumn.isIncrement=i52sd0&subTable.genType=qc3dho&subTable.pkColumn.htmlType=0jau9u&subTable.functionAuthor=Cody Lind&subTable.pkColumn.columnId=836&pkColumn.htmlType=oiswx2&pkColumn.tableId=601&subTable.tableId=784&pkColumn.queryType=vs8nge&subTable.pkColumn.queryType=4nhn3j&subTable.packageName=damien.dietrich&subTable.formColNum=100&subTable.subTable.treeParentCode=23522&functionAuthor=Cody Lind&subTable.columns[0].isIncrement=ghfl24&subTable.columns[0].isList=61cgg3&treeName=damien.dietrich&subTable.functionName=damien.dietrich&subTable.pkColumn.isPk=vhwrfy&subTable.subTable.parentMenuName=damien.dietrich&subTable.treeName=damien.dietrich&className=damien.dietrich&optionLists=qzwwd9&genPath=kgn667&subTable.columns[0].isRequired=oy2mvb&columns[0].lastTime=2026-09-04 00:09:27&subTable.subTable.formColNum=941&subTable.Description=kgsjlq&formColNum=15&subTable.subTable.optionLists=aypbq3&subTable.subTable.limit=10&pkColumn.isList=m9o9lb&columns[0].priority=315&treeParentCode=23522&columns[0].creatorId=68&subTable.lastTime=2026-09-04 00:09:27&subTable.creatorId=68&subTable.pkColumn.lastTime=2026-09-04 00:09:27&subTable.subTable.createTime=2026-09-04 00:09:27&subTable.parentMenuName=damien.dietrich&columns[0].columnType=96x3pf&pkColumn.javaField=zt0z3f&subTable.pkColumn.columnName=damien.dietrich&limit=10&businessName=damien.dietrich&subTable.subTable.subTableName=damien.dietrich&columns[0].javaType=yu8xtn&pkColumn.columnComment=ilmk0x&pkColumn.isQuery=45p193&subTable.columns[0].dictType=dwt9wf&pkColumn.columnType=9aeons&subTable.subTable.packageName=damien.dietrich&subTable.subTable.parentMenuId=754&subTable.subTable.genType=mc1tpw&tplWebType=624984&columns[0].isList=vu5bkz&subTable.columns[0].htmlType=m3fsfh&genType=92sj8j&subTable.subTable.tplCategory=26z48s&treeCode=23522&pkColumn.isInsert=dus87p&columns[0].javaField=gw8skc&pkColumn.lastTime=2026-09-04 00:09:27&subTable.pkColumn.isIncrement=4z0vsn&subTable.subTable.className=damien.dietrich&tableId=968&subTable.columns[0].isInsert=qo52de&subTable.businessName=damien.dietrich&subTable.columns[0].creatorId=68&subTable.pkColumn.javaType=eqnqaj&subTable.pkColumn.javaField=bc2v21&subTable.subTable.lastTime=2026-09-04 00:09:27&columns[0].tableId=332&pkColumn.columnName=damien.dietrich&subTable.pkColumn.createTime=2026-09-04 00:09:27&subTable.subTable.treeCode=23522&subTable.parentMenuId=680&subTable.subTable.Description=6vxvw6&subTable.columns[0].isEdit=tz2dgu&subTable.columns[0].columnId=636&columns[0].isRequired=o83xji&pkColumn.isRequired=tt3ynm&subTable.columns[0].tableId=148&subTable.columns[0].columnType=bol99v&columns[0].createTime=2026-09-04 00:09:27&subTable.subTableFkName=damien.dietrich&Description=1pspj1&subTable.columns[0].isPk=2f5haq&subTable.columns[0].isQuery=i8o3n9&subTableName=damien.dietrich
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
    "pageNum": 447,
    "pageSize": 10,
    "startRow": 151,
    "endRow": 868,
    "total": 544,
    "pages": 675,
    "count": true,
    "reasonable": true,
    "pageSizeZero": true,
    "countColumn": "weyw67",
    "orderBy": "uljldu",
    "orderByOnly": true,
    "boundSqlInterceptor": {}
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/column/{tableId}.do?tableId=638
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:27",
      "lastTime": "2026-09-04 00:09:27",
      "columnId": 785,
      "tableId": 737,
      "columnName": "damien.dietrich",
      "columnComment": "xj3dz4",
      "columnType": "a9xg85",
      "javaType": "rnb4fj",
      "javaField": "134b7v",
      "isPk": "xji1hj",
      "isIncrement": "a9ppkq",
      "isRequired": "1uiucp",
      "isInsert": "yky1gw",
      "isEdit": "o0x3yo",
      "isList": "hzilxw",
      "isQuery": "6m3fse",
      "queryType": "65h7s0",
      "htmlType": "fise9x",
      "dictType": "t593y7",
      "priority": 456
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/importTable.do --data 'tables=uzwx6x'
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
  "data": "i1sosz",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/createTable.do --data 'sql=92q35x'
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
  "data": "y2ut7b",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:27",
  "lastTime": "2026-09-04 00:09:27",
  "tableId": 230,
  "tableName": "damien.dietrich",
  "tableComment": "7do5xs",
  "subTableName": "damien.dietrich",
  "subTableFkName": "damien.dietrich",
  "className": "damien.dietrich",
  "tplCategory": "gyv9vy",
  "tplWebType": "5w5h83",
  "packageName": "damien.dietrich",
  "moduleName": "damien.dietrich",
  "businessName": "damien.dietrich",
  "functionName": "damien.dietrich",
  "functionAuthor": "Cody Lind",
  "formColNum": 387,
  "genType": "39yzfo",
  "genPath": "lwdk05",
  "pkColumn": {
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:27",
    "lastTime": "2026-09-04 00:09:27",
    "columnId": 527,
    "tableId": 206,
    "columnName": "damien.dietrich",
    "columnComment": "c3i6l0",
    "columnType": "a0wzyl",
    "javaType": "y6a165",
    "javaField": "shkbz2",
    "isPk": "f94v2v",
    "isIncrement": "kjg441",
    "isRequired": "iyy4xm",
    "isInsert": "tbt61h",
    "isEdit": "gkgz0t",
    "isList": "hj9vkl",
    "isQuery": "zrai9b",
    "queryType": "vceje5",
    "htmlType": "9oqbkf",
    "dictType": "80d0s0",
    "priority": 724
  },
  "subTable": {
    "$ref": "..."
  },
  "columns": [
    {
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:27",
      "lastTime": "2026-09-04 00:09:27",
      "columnId": 164,
      "tableId": 331,
      "columnName": "damien.dietrich",
      "columnComment": "8rizga",
      "columnType": "dgifw0",
      "javaType": "5ezej3",
      "javaField": "i2i0ew",
      "isPk": "uaz3hq",
      "isIncrement": "4a16nv",
      "isRequired": "slsoa3",
      "isInsert": "bvjioi",
      "isEdit": "wnaz7l",
      "isList": "h5nl32",
      "isQuery": "arnxic",
      "queryType": "08zpsr",
      "htmlType": "gzcf26",
      "dictType": "tm2x9c",
      "priority": 484
    }
  ],
  "optionLists": "zkb6gn",
  "treeCode": "23522",
  "treeParentCode": "23522",
  "treeName": "damien.dietrich",
  "parentMenuId": 94,
  "parentMenuName": "damien.dietrich",
  "Description": "952j3r",
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
  "data": "pvkr58",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "u0mmds",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/preview/472.do
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
    "mapKey1": "qdhw5u",
    "mapKey2": "loxa83"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/download/damien.dietrich.do?status=164&writer.autoFlush=true&writer.psOut.closing=true&writer.psOut.textOut.nChars=296&writer.psOut.textOut.nextChar=135&writer.psOut.autoFlush=true&characterEncoding=b6ibcf&bufferSize=10&contentType=hxj8t7&committed=true&writer.writeBuffer=d&writer.writeBuffer=d&writer.trouble=true&writer.psOut.formatter.zero=l&writer.formatter.lastException.detailMessage=success&writer.psOut.trouble=true&writer.formatter.zero=j&writer.psOut.closed=true
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
  "data": "xcxuxs",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/genCode/damien.dietrich.do
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
  "data": "1av6sj",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/synchDb/damien.dietrich.do
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
  "data": "jjud2g",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
tables|string|   表名称前缀|false|-

**Request-example:**
```
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/tool/gen/batchGenCode.do?status=44&writer.psOut.formatter.zero=5&contentType=hcmbl3&writer.formatter.zero=b&writer.psOut.autoFlush=true&writer.psOut.trouble=true&writer.psOut.textOut.nChars=533&characterEncoding=ohmvu4&committed=true&tables=v2vbtd&writer.writeBuffer=h&writer.writeBuffer=h&writer.psOut.textOut.nextChar=147&writer.trouble=true&writer.psOut.closed=true&writer.autoFlush=true&writer.formatter.lastException.detailMessage=success&writer.psOut.closing=true&bufferSize=10
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
  "data": "mhsg1g",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/token/list.do?q=6supsh&updateTime=2026-09-04 00:09:09&foreignId=68&orderBy=90&description=vma1r7&token=2tily1&startTime=2026-09-04 00:07:57&endTime=2026-09-04 00:07:57&limit=10&username=damien.dietrich&page=1&id=936&expireTime=2026-09-04 00:09:09&loginIp=24.62.148.61
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:09",
      "lastTime": "2026-09-04 00:09:09",
      "id": 632,
      "userId": "68",
      "token": "6bkyqo",
      "foreignId": "68",
      "username": "damien.dietrich",
      "loginIp": "24.62.148.61",
      "updateTime": "2026-09-04 00:09:09",
      "expireTime": "2026-09-04 00:09:09",
      "description": "peub15"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "5ix12a",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/store/smssendrecord/list.do?limit=10&providerName=damien.dietrich&description=t6kpcs&delFlag=2&msgUrl=www.evie-walter.net&bizSubtype=0ptr0z&providerId=68&spare1=dbxq6m&spare2=pjhfrd&startTime=2026-09-04 00:07:57&status=cd3amu&foreignId=68&page=1&sendStatus=desufg&q=ihawtv&orderBy=317&id=121&content=wl9ms8&sendTime=2026-09-04&receiverMobile=205.573.4959&receiverName=damien.dietrich&appId=68&bizType=y1gy4a&endTime=2026-09-04 00:07:57&returnInfo=9qmjnw&returnTime=2026-09-04 00:09:08&creatorId=68
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:08",
      "lastTime": "2026-09-04 00:09:08",
      "id": 737,
      "appId": "68",
      "providerId": "68",
      "providerName": "damien.dietrich",
      "foreignId": "68",
      "receiverMobile": "205.573.4959",
      "receiverName": "damien.dietrich",
      "bizType": "espl1r",
      "bizSubtype": "t1lz62",
      "content": "i5l0c7",
      "msgUrl": "www.evie-walter.net",
      "status": "mx04o8",
      "sendTime": "2026-09-04",
      "sendStatus": "489rz6",
      "returnTime": "2026-09-04 00:09:08",
      "returnInfo": "lwa5ez",
      "delFlag": 2,
      "description": "y7gmxd",
      "spare1": "7mosm6",
      "spare2": "3woeps"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:08",
    "lastTime": "2026-09-04 00:09:08",
    "id": 949,
    "appId": "68",
    "providerId": "68",
    "providerName": "damien.dietrich",
    "foreignId": "68",
    "receiverMobile": "205.573.4959",
    "receiverName": "damien.dietrich",
    "bizType": "pwz6sg",
    "bizSubtype": "3s8p44",
    "content": "oe3fti",
    "msgUrl": "www.evie-walter.net",
    "status": "f6sawh",
    "sendTime": "2026-09-04",
    "sendStatus": "61saaq",
    "returnTime": "2026-09-04 00:09:08",
    "returnInfo": "78d8j4",
    "delFlag": 2,
    "description": "yiu95q",
    "spare1": "a46skj",
    "spare2": "tghf00"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:08",
  "lastTime": "2026-09-04 00:09:08",
  "id": 364,
  "appId": "68",
  "providerId": "68",
  "providerName": "damien.dietrich",
  "foreignId": "68",
  "receiverMobile": "205.573.4959",
  "receiverName": "damien.dietrich",
  "bizType": "vk3z83",
  "bizSubtype": "emjc0x",
  "content": "kbptml",
  "msgUrl": "www.evie-walter.net",
  "status": "ec8xwf",
  "sendTime": "2026-09-04",
  "sendStatus": "upppla",
  "returnTime": "2026-09-04 00:09:08",
  "returnInfo": "4izh9c",
  "delFlag": 2,
  "description": "e8uwh9",
  "spare1": "x90tl2",
  "spare2": "kk91md"
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
  "data": "ue8tay",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:08",
  "lastTime": "2026-09-04 00:09:08",
  "id": 715,
  "appId": "68",
  "providerId": "68",
  "providerName": "damien.dietrich",
  "foreignId": "68",
  "receiverMobile": "205.573.4959",
  "receiverName": "damien.dietrich",
  "bizType": "0ywg1c",
  "bizSubtype": "wajmr1",
  "content": "5ae5jh",
  "msgUrl": "www.evie-walter.net",
  "status": "jrkwas",
  "sendTime": "2026-09-04",
  "sendStatus": "6kbb5c",
  "returnTime": "2026-09-04 00:09:08",
  "returnInfo": "2cr9fc",
  "delFlag": 2,
  "description": "b2gi4j",
  "spare1": "sdlht1",
  "spare2": "zgmsrn"
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
  "data": "xtshlr",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "rzetr8",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "mobile": "205.573.4959",
  "code": "23522",
  "uuid": "ed342e94-fa4c-4609-a974-baa432eb7d52",
  "appId": "68"
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
    "userId": "68",
    "token": "bvomra",
    "updateTime": "2026-09-04 00:09:08",
    "expireTime": "2026-09-04 00:09:08",
    "mobileConfirm": true
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X POST -k -i https://linlan.net/eframe_backend/login/otp/send.do --data 'mobile=205.573.4959'
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
  "data": "gdkby3",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "id": 663,
  "platform": 500,
  "mailFormat": "4j0js6",
  "mailFrom": "xoitsw",
  "formAlias": "fg43l1",
  "mailTos": "aaiuor",
  "receiversName": "damien.dietrich",
  "templateName": "damien.dietrich",
  "tagName": "damien.dietrich",
  "subject": "edh2h4",
  "content": "n36qwb"
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
  "data": "stbm5l",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "email": "rudy.vandervort@hotmail.com",
  "code": "23522",
  "password": "z10pwr",
  "nickname": "cicely.medhurst"
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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "email": "rudy.vandervort@hotmail.com",
  "code": "23522",
  "password": "hd8nbg",
  "nickname": "cicely.medhurst"
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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/member/list.do?limit=10&description=443owm&spare1=iswb5f&endTime=2026-09-04 00:07:57&accountId=68&spare2=jmbjw3&creatorId=68&organId=68&avatarUrl=www.evie-walter.net&openId=68&q=2arx32&orderBy=88&startTime=2026-09-04 00:07:57&page=1&email=rudy.vandervort@hotmail.com&id=490&serverType=nbv9a1&unionId=68&mobile=205.573.4959&delFlag=2&additionInfo=6xn0d7&foreignId=68&areaCode=23522&nickName=cicely.medhurst
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:09",
      "lastTime": "2026-09-04 00:09:09",
      "id": 174,
      "userId": "68",
      "organId": "68",
      "foreignId": "68",
      "accountId": "68",
      "accountType": "c2fpe6",
      "unionId": "68",
      "openId": "68",
      "email": "rudy.vandervort@hotmail.com",
      "areaCode": "23522",
      "mobile": "205.573.4959",
      "nickName": "cicely.medhurst",
      "avatarUrl": "www.evie-walter.net",
      "additionInfo": "df8j4z",
      "delFlag": 2,
      "description": "ry0p9w",
      "spare1": "teaw6u",
      "spare2": "c3ngfy"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:09",
    "lastTime": "2026-09-04 00:09:09",
    "id": 30,
    "userId": "68",
    "organId": "68",
    "foreignId": "68",
    "accountId": "68",
    "accountType": "1eb4n4",
    "unionId": "68",
    "openId": "68",
    "email": "rudy.vandervort@hotmail.com",
    "areaCode": "23522",
    "mobile": "205.573.4959",
    "nickName": "cicely.medhurst",
    "avatarUrl": "www.evie-walter.net",
    "additionInfo": "mge55s",
    "delFlag": 2,
    "description": "p0xh2d",
    "spare1": "ew72j7",
    "spare2": "esmjwf"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:09",
  "lastTime": "2026-09-04 00:09:09",
  "id": 524,
  "userId": "68",
  "organId": "68",
  "foreignId": "68",
  "accountId": "68",
  "accountType": "a733b2",
  "unionId": "68",
  "openId": "68",
  "email": "rudy.vandervort@hotmail.com",
  "areaCode": "23522",
  "mobile": "205.573.4959",
  "nickName": "cicely.medhurst",
  "avatarUrl": "www.evie-walter.net",
  "additionInfo": "fcj2nq",
  "delFlag": 2,
  "description": "evrzos",
  "spare1": "pc4u95",
  "spare2": "tdqauv"
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
  "data": "g6cyti",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:09",
  "lastTime": "2026-09-04 00:09:09",
  "id": 940,
  "userId": "68",
  "organId": "68",
  "foreignId": "68",
  "accountId": "68",
  "accountType": "6y3c0j",
  "unionId": "68",
  "openId": "68",
  "email": "rudy.vandervort@hotmail.com",
  "areaCode": "23522",
  "mobile": "205.573.4959",
  "nickName": "cicely.medhurst",
  "avatarUrl": "www.evie-walter.net",
  "additionInfo": "sjnpsp",
  "delFlag": 2,
  "description": "oevmmy",
  "spare1": "wg4lmx",
  "spare2": "if08or"
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
  "data": "j5574v",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "vkya19",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/memberbind/list.do?accountKey=lxwiyi&delFlag=2&spare2=i9c3xw&limit=10&id=68&q=ifjv2e&accountId=68&description=gqbg5n&additionInfo=r3xcf7&startTime=2026-09-04 00:07:57&endTime=2026-09-04 00:07:57&page=1&orderBy=850&bindTime=2026-09-04 00:09:09&memberId=726&userId=68&spare1=g19wv3&username=damien.dietrich&creatorId=68
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:09",
      "lastTime": "2026-09-04 00:09:09",
      "id": "68",
      "memberId": 608,
      "userId": "68",
      "username": "damien.dietrich",
      "accountId": "68",
      "accountKey": "55rx49",
      "bindTime": "2026-09-04 00:09:09",
      "additionInfo": "mnejax",
      "delFlag": 2,
      "description": "365gzj",
      "spare1": "efain9",
      "spare2": "qzo7vo",
      "openType": "kzooro"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:09",
    "lastTime": "2026-09-04 00:09:09",
    "id": "68",
    "memberId": 256,
    "userId": "68",
    "username": "damien.dietrich",
    "accountId": "68",
    "accountKey": "iludg8",
    "bindTime": "2026-09-04 00:09:09",
    "additionInfo": "0xo6k5",
    "delFlag": 2,
    "description": "lak2rf",
    "spare1": "bcj3et",
    "spare2": "0ssv37"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:09",
  "lastTime": "2026-09-04 00:09:09",
  "id": "68",
  "memberId": 690,
  "userId": "68",
  "username": "damien.dietrich",
  "accountId": "68",
  "accountKey": "j5ieia",
  "bindTime": "2026-09-04 00:09:09",
  "additionInfo": "a500hz",
  "delFlag": 2,
  "description": "qg3q5r",
  "spare1": "qybrzb",
  "spare2": "ib9pmm"
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
  "data": "tdp5uc",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:09",
  "lastTime": "2026-09-04 00:09:09",
  "id": "68",
  "memberId": 229,
  "userId": "68",
  "username": "damien.dietrich",
  "accountId": "68",
  "accountKey": "d5m1ll",
  "bindTime": "2026-09-04 00:09:09",
  "additionInfo": "3oku9c",
  "delFlag": 2,
  "description": "kzjn70",
  "spare1": "5j0u98",
  "spare2": "mcp3wo"
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
  "data": "h0itj1",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "bmfh8n",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/third/memberbind/mylist.do?spare1=667eoa&startTime=2026-09-04 00:07:57&memberId=657&page=1&accountId=68&delFlag=2&spare2=tnqe1j&q=aeav46&accountKey=osm8fh&userId=68&orderBy=874&endTime=2026-09-04 00:07:57&limit=10&username=damien.dietrich&bindTime=2026-09-04 00:09:09&creatorId=68&description=zllg0d&id=68&additionInfo=5t33k3
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:09",
      "lastTime": "2026-09-04 00:09:09",
      "id": "68",
      "memberId": 60,
      "userId": "68",
      "username": "damien.dietrich",
      "accountId": "68",
      "accountKey": "ie164k",
      "bindTime": "2026-09-04 00:09:09",
      "additionInfo": "j51h0l",
      "delFlag": 2,
      "description": "s574d4",
      "spare1": "bzn14z",
      "spare2": "pitk3s",
      "openType": "tb6092"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-

**Request-example:**
```
curl -X GET -k -i https://linlan.net/eframe_backend/login/social/render/其他.do?writer.psOut.formatter.zero=1&bufferSize=10&contentType=1ye9at&writer.trouble=true&writer.formatter.lastException.detailMessage=success&writer.psOut.textOut.nChars=645&writer.psOut.autoFlush=true&writer.formatter.zero=y&writer.writeBuffer=d&writer.writeBuffer=d&writer.psOut.closing=true&writer.autoFlush=true&status=477&writer.psOut.textOut.nextChar=850&characterEncoding=883blh&writer.psOut.closed=true&writer.psOut.trouble=true&committed=true
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
  "data": "yqthlk",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -i https://linlan.net/eframe_backend/login/social/callback/其他.do?code=23522&oauth_verifier=xa0b6c&oauth_token=de1ln2&state=v6f4e2&auth_code=23522&authorization_code=23522
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─error|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─1xxInformational|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─2xxSuccessful|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─4xxClientError|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─3xxRedirection|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─5xxServerError|boolean|No comments found.|-
└─cleared|boolean|No comments found.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{"success":true,"code":0,"msg":"正常","data":Forward or redirect to a page view.,"requestId":"68","timestamp":"2026-09-04 00:07:57"}
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
  "platformType": "64r9rw",
  "code": "23522",
  "state": "anqznk"
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
    "userId": "68",
    "token": "rckkdo",
    "updateTime": "2026-09-04 00:09:08",
    "expireTime": "2026-09-04 00:09:08",
    "mobileConfirm": true
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "platformType": "5gznof",
  "code": "23522",
  "state": "51n2i3",
  "bindFrom": "sp9zfh"
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
  "data": "qrm2bz",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "platformType": "7141us",
  "code": "23522",
  "state": "3ltr62",
  "bindFrom": "mdb7gz"
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
  "data": "xdowlk",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -i https://linlan.net/eframe_backend/login/social/revoke/其他/ed342e94-fa4c-4609-a974-baa432eb7d52.do
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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -i https://linlan.net/eframe_backend/login/social/refresh/其他/ed342e94-fa4c-4609-a974-baa432eb7d52.do
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
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─error|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─1xxInformational|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─2xxSuccessful|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─4xxClientError|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─3xxRedirection|boolean|No comments found.|-
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└─5xxServerError|boolean|No comments found.|-
└─cleared|boolean|No comments found.|-
requestId|string|请求ID|-
timestamp|string|返回时间戳字符串|-

**Response-example:**
```
{"success":true,"code":0,"msg":"正常","data":Forward or redirect to a page view.,"requestId":"68","timestamp":"2026-09-04 00:07:57"}
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
curl -X GET -k -i https://linlan.net/eframe_backend/login/social/userInfo.do?source=kq8c76
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
      "id": 491,
      "userId": "68",
      "xzqhId": 416,
      "source": "0pn70g",
      "username": "damien.dietrich",
      "mobile": "205.573.4959",
      "email": "rudy.vandervort@hotmail.com",
      "password": "l6hhdp",
      "organId": "68",
      "foreignId": "68",
      "accountId": "68",
      "accountType": "0ewhtp",
      "unionId": "68",
      "openId": "68",
      "nickName": "cicely.medhurst",
      "avatarUrl": "www.evie-walter.net",
      "registerTime": "2026-09-04 00:09:09",
      "lastLoginTime": "2026-09-04 00:09:09",
      "lastLoginIp": "24.62.148.61",
      "loginCount": 116,
      "lockTime": "2026-09-04 00:09:09",
      "activation": true,
      "activationCode": "23522",
      "priority": 893,
      "createTime": "2026-09-04 00:09:09",
      "delFlag": 2,
      "description": "0yl80i",
      "spare1": "liokag",
      "spare2": "032lhu"
    },
    "roles": [
      384
    ],
    "permissions": [
      "mhhcez"
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -i https://linlan.net/eframe_backend/login/social/workUserInfo.do?source=hf6k3a
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
      "id": 727,
      "userId": "68",
      "xzqhId": 311,
      "source": "rtw0hn",
      "username": "damien.dietrich",
      "mobile": "205.573.4959",
      "email": "rudy.vandervort@hotmail.com",
      "password": "a4w650",
      "organId": "68",
      "foreignId": "68",
      "accountId": "68",
      "accountType": "fml6oy",
      "unionId": "68",
      "openId": "68",
      "nickName": "cicely.medhurst",
      "avatarUrl": "www.evie-walter.net",
      "registerTime": "2026-09-04 00:09:09",
      "lastLoginTime": "2026-09-04 00:09:09",
      "lastLoginIp": "24.62.148.61",
      "loginCount": 337,
      "lockTime": "2026-09-04 00:09:09",
      "activation": true,
      "activationCode": "23522",
      "priority": 847,
      "createTime": "2026-09-04 00:09:09",
      "delFlag": 2,
      "description": "mthjv6",
      "spare1": "8nnwnw",
      "spare2": "sweg91"
    },
    "roles": [
      69
    ],
    "permissions": [
      "oxz1iw"
    ]
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/job/list.do?concurrent=dh4gry&status=972&jobName=damien.dietrich&invokeTarget=cmwpno&jobGroup=emvtfd&cronExpression=h60wby&misfirePolicy=lgzrdz&jobId=987&remark=yuimj6
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
      "jobId": "68",
      "jobName": "damien.dietrich",
      "jobGroup": "dpmwhc",
      "invokeTarget": "5p2f45",
      "cronExpression": "jpveyy",
      "misfirePolicy": "4qq4n8",
      "concurrent": "bpektq",
      "status": 164,
      "remark": "tgfxc4"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/job/export.do --data 'writer.trouble=true&writer.psOut.autoFlush=true&writer.psOut.trouble=true&status=531&writer.psOut.closing=true&cronExpression=o15knq&jobId=511&jobGroup=im1ysz&writer.psOut.closed=true&jobName=damien.dietrich&writer.psOut.textOut.nextChar=968&bufferSize=10&writer.formatter.zero=q&contentType=kciqp8&writer.autoFlush=true&writer.formatter.lastException.detailMessage=success&characterEncoding=iqoera&concurrent=iu7tmf&writer.psOut.formatter.zero=t&invokeTarget=hcahs0&remark=ig5t44&misfirePolicy=gvmaoz&writer.writeBuffer=u&writer.writeBuffer=u&status=469&committed=true&writer.psOut.textOut.nChars=686'
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
  "data": "25s4p8",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/job/68.do
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
    "jobId": "68",
    "jobName": "damien.dietrich",
    "jobGroup": "duo77u",
    "invokeTarget": "bqjpq5",
    "cronExpression": "ise7tn",
    "misfirePolicy": "zjqfus",
    "concurrent": "o04qe7",
    "status": 499,
    "remark": "pjr917"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "jobId": "68",
  "jobName": "damien.dietrich",
  "jobGroup": "fj31bo",
  "invokeTarget": "vikwcb",
  "cronExpression": "c90mj0",
  "misfirePolicy": "renvcg",
  "concurrent": "quv7gd",
  "status": 276,
  "remark": "nw8fkm"
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
  "data": "q170oe",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "jobId": "68",
  "jobName": "damien.dietrich",
  "jobGroup": "o4jwop",
  "invokeTarget": "25agn3",
  "cronExpression": "6mrayq",
  "misfirePolicy": "jheabc",
  "concurrent": "7x44bq",
  "status": 253,
  "remark": "2fgygh"
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
  "data": "11npx9",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "jobId": "68",
  "jobName": "damien.dietrich",
  "jobGroup": "tiquvs",
  "invokeTarget": "gjes6s",
  "cronExpression": "u0e6fj",
  "misfirePolicy": "a8z9oj",
  "concurrent": "zpzoyo",
  "status": 216,
  "remark": "cf5u7a"
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
  "data": "kn8zhx",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "jobId": "68",
  "jobName": "damien.dietrich",
  "jobGroup": "6xkdjy",
  "invokeTarget": "pqk860",
  "cronExpression": "zgcdkp",
  "misfirePolicy": "tgwef1",
  "concurrent": "2y22va",
  "status": 113,
  "remark": "72uaiv"
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
  "data": "2v8f1m",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "3vaq4t",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/joblog/list.do?jobGroup=y9qcac&invokeTarget=3cemiy&jobMessage=success&status=502&remark=yphnz7&stopTime=2026-09-04 00:09:10&exceptionInfo=r8k0d7&lastTime=2026-09-04 00:09:10&creatorId=68&jobLogId=779&startTime=2026-09-04 00:09:10&createTime=2026-09-04 00:09:10&jobName=damien.dietrich&jobId=68
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:10",
      "lastTime": "2026-09-04 00:09:10",
      "jobLogId": "68",
      "jobId": "68",
      "jobMessage": "success",
      "status": 596,
      "exceptionInfo": "f7ww2v",
      "startTime": "2026-09-04 00:09:10",
      "stopTime": "2026-09-04 00:09:10",
      "remark": "zikv7s"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
headerNames|array|No comments found.|false|-
status|int32|No comments found.|false|-
trailerFields|object|No comments found.|false|-
locale|object|No comments found.|false|-
contentType|string|No comments found.|false|-
outputStream|object|No comments found.|false|-
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
bufferSize|int32|No comments found.|false|-
committed|boolean|No comments found.|false|-
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
curl -X POST -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/joblog/export.do --data 'writer.formatter.lastException.detailMessage=success&jobLogId=881&jobId=68&jobName=damien.dietrich&creatorId=68&invokeTarget=3lg6tc&writer.psOut.autoFlush=true&writer.trouble=true&stopTime=2026-09-04 00:09:10&writer.psOut.formatter.zero=x&writer.autoFlush=true&writer.psOut.closing=true&characterEncoding=ag7q1w&jobMessage=success&writer.psOut.textOut.nChars=198&exceptionInfo=b7yj7a&contentType=gwexan&bufferSize=10&jobGroup=3ksysd&writer.formatter.zero=k&startTime=2026-09-04 00:09:10&writer.psOut.textOut.nextChar=576&writer.psOut.trouble=true&status=781&remark=f5l736&createTime=2026-09-04 00:09:10&status=932&committed=true&lastTime=2026-09-04 00:09:10&writer.writeBuffer=k&writer.writeBuffer=k&writer.psOut.closed=true'
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
  "data": "f93qmq",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/monitor/joblog/68.do
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:10",
    "lastTime": "2026-09-04 00:09:10",
    "jobLogId": "68",
    "jobId": "68",
    "jobMessage": "success",
    "status": 200,
    "exceptionInfo": "eor0lf",
    "startTime": "2026-09-04 00:09:10",
    "stopTime": "2026-09-04 00:09:10",
    "remark": "k7xgv2"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "383nba",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
curl -X GET -k -H 'token:${token}' -i https://linlan.net/eframe_backend/api/store/mailsendrecord/list.do?spare1=cj4003&foreignId=68&description=gr59h4&providerName=damien.dietrich&bizType=cavl4z&title=ojvnn9&readStatus=axwtsu&id=642&status=tdwy0x&delFlag=2&limit=10&q=rct7tm&msgUrl=www.evie-walter.net&startTime=2026-09-04 00:07:57&receiverEmail=rudy.vandervort@hotmail.com&content=jdonox&appId=68&orderBy=306&readTime=2026-09-04 00:09:07&senderName=damien.dietrich&receiverName=damien.dietrich&page=1&spare2=ulupe8&creatorId=68&endTime=2026-09-04 00:07:57&sendTime=2026-09-04&sendStatus=i2qyfn&providerId=68
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
      "creatorId": "68",
      "createTime": "2026-09-04 00:09:07",
      "lastTime": "2026-09-04 00:09:07",
      "id": 522,
      "appId": "68",
      "providerId": "68",
      "providerName": "damien.dietrich",
      "foreignId": "68",
      "senderName": "damien.dietrich",
      "receiverEmail": "rudy.vandervort@hotmail.com",
      "receiverName": "damien.dietrich",
      "bizType": "0cc6ia",
      "title": "tc1h9c",
      "content": "zcd5na",
      "msgUrl": "www.evie-walter.net",
      "status": "r4xxq1",
      "sendTime": "2026-09-04",
      "sendStatus": "03fent",
      "readTime": "2026-09-04 00:09:07",
      "readStatus": "fetp7o",
      "delFlag": 2,
      "description": "yklbeo",
      "spare1": "oyt4n5",
      "spare2": "hezv5a"
    }
  ],
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
    "creatorId": "68",
    "createTime": "2026-09-04 00:09:08",
    "lastTime": "2026-09-04 00:09:08",
    "id": 36,
    "appId": "68",
    "providerId": "68",
    "providerName": "damien.dietrich",
    "foreignId": "68",
    "senderName": "damien.dietrich",
    "receiverEmail": "rudy.vandervort@hotmail.com",
    "receiverName": "damien.dietrich",
    "bizType": "ex9uka",
    "title": "7t9qug",
    "content": "tynjyl",
    "msgUrl": "www.evie-walter.net",
    "status": "v7cuqy",
    "sendTime": "2026-09-04",
    "sendStatus": "jciits",
    "readTime": "2026-09-04 00:09:08",
    "readStatus": "trl0y1",
    "delFlag": 2,
    "description": "ivnyit",
    "spare1": "8g6xqa",
    "spare2": "rxqezy"
  },
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:08",
  "lastTime": "2026-09-04 00:09:08",
  "id": 435,
  "appId": "68",
  "providerId": "68",
  "providerName": "damien.dietrich",
  "foreignId": "68",
  "senderName": "damien.dietrich",
  "receiverEmail": "rudy.vandervort@hotmail.com",
  "receiverName": "damien.dietrich",
  "bizType": "54z7rp",
  "title": "mzuw9m",
  "content": "v9vvzq",
  "msgUrl": "www.evie-walter.net",
  "status": "k8vffs",
  "sendTime": "2026-09-04",
  "sendStatus": "0zm6q3",
  "readTime": "2026-09-04 00:09:08",
  "readStatus": "0os9dv",
  "delFlag": 2,
  "description": "kudy5m",
  "spare1": "bz78cl",
  "spare2": "4otcdk"
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
  "data": "3z7jni",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "creatorId": "68",
  "createTime": "2026-09-04 00:09:08",
  "lastTime": "2026-09-04 00:09:08",
  "id": 186,
  "appId": "68",
  "providerId": "68",
  "providerName": "damien.dietrich",
  "foreignId": "68",
  "senderName": "damien.dietrich",
  "receiverEmail": "rudy.vandervort@hotmail.com",
  "receiverName": "damien.dietrich",
  "bizType": "qgdftq",
  "title": "y3pij7",
  "content": "w2uu58",
  "msgUrl": "www.evie-walter.net",
  "status": "owjvev",
  "sendTime": "2026-09-04",
  "sendStatus": "7e0orl",
  "readTime": "2026-09-04 00:09:08",
  "readStatus": "iclxkn",
  "delFlag": 2,
  "description": "4mo87b",
  "spare1": "o6cfda",
  "spare2": "9niplt"
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
  "data": "6na5bb",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
  "data": "alg566",
  "requestId": "68",
  "timestamp": "2026-09-04 00:07:57"
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
