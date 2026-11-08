import request from '@/utils/request'

// 查询字典类型列表
export function listType(query) {
    return request({
        url: '/api/system/dictype/list',
        method: 'get',
        params: query
    })
}

// 查询字典类型详细
export function getType(dictId) {
    return request({
        url: '/api/system/dictype/' + dictId,
        method: 'get'
    })
}

// 新增字典类型
export function addType(data) {
    return request({
        url: '/api/system/dictype',
        method: 'post',
        data: data
    })
}

// 修改字典类型
export function updateType(data) {
    return request({
        url: '/api/system/dictype',
        method: 'put',
        data: data
    })
}

// 删除字典类型
export function delType(dictId) {
    return request({
        url: '/api/system/dictype/' + dictId,
        method: 'delete'
    })
}

// 刷新字典缓存
export function refreshCache() {
    return request({
        url: '/api/system/dictype/refreshCache',
        method: 'delete'
    })
}

// 获取字典选择框列表
export function optionSelect() {
    return request({
        url: '/api/system/dictype/option/select',
        method: 'get'
    })
}
