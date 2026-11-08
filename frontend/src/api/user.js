import request from "/src/utils/request";

// 发送验证码
export function smsSend(phoneNumber) {
    return request({
        url: "/login/otp/send",
        method: "post",
        params: {
            mobile: phoneNumber
        }
    });
}
// 登录方法
export function login(data) {
  return request({
    url: "/login",
    method: "post",
    data: data,
  });
}
// 通过短信登录
/**
 * 通过短信验证码进行登录
 * @param {Object} data - 包含登录所需数据的对象
 * @param {string} data.phone - 手机号码
 * @param {string} data.code - 短信验证码
 * @returns {Promise} 包含登录结果的Promise对象
 */
export function smsLogin(data) {
    return request({
        url: "/login/sms",
        method: "post",
        data: data
    });
}
// 第三方登录
export function socialLogin(data) {
    return request({
        url: "/login/social",
        method: "post",
        data: data
    });
}
// 第三方用户绑定
/**
 * 绑定第三方社交账号
 * @param {Object} data - 包含绑定所需信息的对象
 * @returns {Promise} 返回请求的Promise对象
 */
export function socialBind(data) {
    return request({
        url: "/login/social/bind",
        method: "post",
        data: data
    });
}
// 第三方用户取消绑定
export function socialUnbind(data) {
    return request({
        url: "/login/social/unBind",
        method: "post",
        data: data
    });
}
// 更新用户密码
export function updatePwd(oldPwd, newPwd) {
    return request({
        url: "/api/admin/user/updatePwd",
        method: "post",
        data: {
            oldPassword: oldPwd,
            newPassword: newPwd
        }
    });
}
// 获取用户绑定列表
export const getMyBindList = () => {
  return request({
    url: '/api/third/memberbind/mylist',
    method: 'get'
  })
}
