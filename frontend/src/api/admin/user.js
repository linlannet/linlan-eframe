import request from '@/utils/request';
import { parseStrEmpty } from '@/utils/common';

// 查询列表
export function listUser(query) {
  return request({
    url: '/api/admin/user/list',
    method: 'get',
    params: query,
  });
}

// 查询用户详细
export function getUser(adminId) {
  return request({
    url: '/api/admin/user/' + parseStrEmpty(adminId),
    method: 'get',
  });
}

// 新增用户
export function addUser(data) {
  return request({
    url: '/api/admin/user/save',
    method: 'post',
    data: data,
  });
}

// 修改用户
export function updateUser(data) {
  return request({
    url: '/api/admin/user/update',
    method: 'post',
    data: data,
  });
}

// 删除用户
export function delUser(adminId) {
  return request({
    url: '/api/admin/user/delete' + adminId,
    method: 'post',
  });
}

// 用户密码重置
export function resetUserPwd(adminId, password) {
  const data = {
    adminId,
    password,
  };
  return request({
    url: '/api/admin/user/resetPwd',
    method: 'put',
    data: data,
  });
}

// 用户状态修改
export function changeUserStatus(adminId, status) {
  const data = {
    adminId,
    status,
  };
  return request({
    url: '/api/admin/user/changeStatus',
    method: 'put',
    data: data,
  });
}

// 查询用户个人信息
export function getUserProfile() {
  return request({
    url: '/api/admin/user/profile',
    method: 'get',
  });
}

// 修改用户个人信息
export function updateUserProfile(data) {
  return request({
    url: '/api/admin/user/profile',
    method: 'put',
    data: data,
  });
}

// 用户密码重置
export function updateUserPwd(oldPassword, newPassword) {
  const data = {
    oldPassword,
    newPassword,
  };
  return request({
    url: '/api/admin/user/updatePwd',
    method: 'put',
    params: data,
  });
}

// 用户头像上传
export function uploadImagePath(data) {
  return request({
    url: '/api/admin/user/imagePath',
    method: 'post',
    data: data,
  });
}

// 查询授权角色
export function getAuthRole(adminId) {
  return request({
    url: '/api/admin/user/authRole/' + adminId,
    method: 'get',
  });
}

// 保存授权角色
export function updateAuthRole(data) {
  return request({
    url: '/api/admin/user/authRole',
    method: 'put',
    params: data,
  });
}

