// Placeholder API for info module
import request from '@/api/req'

export const getInfo = (data) => request.get('/admin/info', { params: data })
export const addInfo = (data) => request.post('/admin/info', data)
export const updateInfo = (data) => request.put('/admin/info', data)
export const delInfo = (data) => request.delete('/admin/info', { data })
export const listInfo = (data) => request.get('/admin/info/list', { params: data })
