import request from '@/utils/request'

// 查询操作日志列表
export function listCommlog(query) {
  return request({
    url: '/api/monitor/commlog/list',
    method: 'get',
    params: query
  })
}

// 删除操作日志
export function delCommlog(operId) {
  return request({
    url: '/api/monitor/commlog/' + operId,
    method: 'delete'
  })
}

// 清空操作日志
export function cleanCommlog() {
  return request({
    url: '/api/monitor/commlog/clean',
    method: 'delete'
  })
}

// 导出操作日志
export function exportCommlog(query) {
  return request({
    url: '/api/monitor/commlog/export',
    method: 'get',
    params: query
  })
}