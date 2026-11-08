import axios from 'axios';
import vueStore from '../store/vueStore.js';
import { getToken, removeToken } from '/src/utils/auth';
import errorCode from '/src/utils/errorCode';
import { notification, Modal } from 'ant-design-vue';
import { blobValidate } from '@/utils/common';
import LocalUtil from '@/utils/LocalUtil.js';
import { saveAs } from 'file-saver';
import { createAdminClient } from '@linlannet/lib-vue-base/platforms/admin';

const baseURL = import.meta.env.VITE_API_DOMAIN || '';

const client = createAdminClient({
  axios,
  baseUrl: baseURL,
  timeout: 10000,
  noCache: false,
  pubRange: { enabled: false },
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  token: {
    storageKey: 'Admin-Token',
    headerName: 'Authorization',
    scheme: 'Linlan',
    getToken: () => getToken() || null,
    clearToken: () => removeToken(),
  },
  hooks: {
    onUnauthorized() {
      Modal.warning({
        content: '登录状态已过期，请重新登录！',
        okText: '确定',
        onOk() {
          vueStore.dispatch('LogOut_Action').then(() => {
            location.href = '/index';
          });
        },
      });
    },
    onBusinessError(error) {
      const msg = errorCode[error.code] || error.message || errorCode['default'];
      notification.error({
        message: '请求后端服务失败',
        description: '失败信息：' + msg,
      });
    },
    onHttpError(error) {
      let message = error.message || '请求失败';
      if (error.code === 'network' || message === 'Network Error') {
        message = '后端接口连接异常';
      } else if (error.code === 'timeout' || message.includes('timeout')) {
        message = '系统接口请求超时';
      }
      notification.error({
        message: '请求后端服务失败',
        description: '失败信息：' + message,
      });
    },
  },
});

function appendQuery(url, params) {
  let target = url + '?';
  for (const propName of Object.keys(params)) {
    const value = params[propName];
    const part = encodeURIComponent(propName) + '=';
    if (value !== null && typeof value !== 'undefined') {
      if (typeof value === 'object') {
        for (const key of Object.keys(value)) {
          if (value[key] !== null && typeof value[key] !== 'undefined') {
            const paramsKey = propName + '[' + key + ']';
            const subPart = encodeURIComponent(paramsKey) + '=';
            target += subPart + encodeURIComponent(value[key]) + '&';
          }
        }
      } else {
        target += part + encodeURIComponent(value) + '&';
      }
    }
  }
  return target.slice(0, -1);
}

function normalizeConfig(config) {
  const result = { ...config };
  result.method = String(result.method || 'GET').toUpperCase();
  if (result.headers) {
    result.headers = { ...result.headers };
    if (result.headers.isToken === false) {
      result.withToken = false;
      delete result.headers.isToken;
    }
  }
  if (result.method === 'GET' && result.params) {
    result.url = appendQuery(result.url, result.params);
    result.params = undefined;
  }
  return result;
}

function service(config) {
  return client.request(normalizeConfig(config));
}

service.get = (url, config = {}) => {
  return service({ ...config, url, method: 'GET', params: config.params });
};

service.post = (url, data, config = {}) => {
  return service({ ...config, url, method: 'POST', data });
};

service.put = (url, data, config = {}) => {
  return service({ ...config, url, method: 'PUT', data });
};

service.delete = (url, config = {}) => {
  return service({ ...config, url, method: 'DELETE', params: config.params });
};

service.defaults = {
  baseURL,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
};

export function download(url, params, filename) {
  LocalUtil.messageInfo('开始下载数据，请稍候...');
  return client
    .request({ url, method: 'GET', params, responseType: 'blob' })
    .then(async (data) => {
      const isLogin = await blobValidate(data);
      if (isLogin) {
        const blob = new Blob([data]);
        saveAs(blob, filename);
      } else {
        const resText = await data.text();
        const rspObj = JSON.parse(resText);
        const errMsg = errorCode[rspObj.code] || rspObj.msg || errorCode['default'];
        notification.error({
          message: '请求后端服务失败',
          description: errMsg,
        });
      }
    })
    .catch((r) => {
      console.error(r);
      notification.error({
        message: '请求后端服务失败',
        description: '下载文件出现错误，请联系管理员！',
      });
    });
}

export default service;