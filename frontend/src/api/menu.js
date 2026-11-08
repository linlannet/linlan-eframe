import request from '/src/utils/request'

// 获取首页路由
export const getIndexRouters = () => {
  return request({
    url: '/appIndexInfo',
    method: 'get'
  })
}