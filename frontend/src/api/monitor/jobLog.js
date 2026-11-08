import request from '@/utils/request'

// 查询调度日志列表
export function listJobLog(query) {
  return request({
    url: '/api/monitor/joblog/list',
    method: 'get',
    params: query
  })
}

// 删除调度日志
export function delJobLog(jobLogId) {
  return request({
    url: '/api/monitor/joblog/' + jobLogId,
    method: 'delete'
  })
}

// 清空调度日志
export function cleanJobLog() {
  return request({
    url: '/api/monitor/joblog/clean',
    method: 'delete'
  })
}

// 导出调度日志
export function exportJobLog(query) {
  return request({
    url: '/api/monitor/joblog/export',
    method: 'get',
    params: query
  })
}