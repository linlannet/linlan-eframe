export function validatePhoneNumber(str) {
    const reg = /^1[3456789]\d{9}$/
    return reg.test(str)
}
/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUsername(str) {
  const valid_map = ['admin', 'editor']
  return valid_map.indexOf(str.trim()) >= 0
}

/**
 * @param {string} url
 * @returns {Boolean}
 */
export function validURL(url) {
  const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return reg.test(url)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function validAlphabets(str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}

/**
 * @param {string} email
 * @returns {Boolean}
 */
export function validEmail(email) {
  const reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return reg.test(email)
}

/**
 * @param {string} str
 * @returns {Boolean}
 */
export function isString(str) {
  if (typeof str === 'string' || str instanceof String) {
    return true
  }
  return false
}

/**
 * @param {Array} arg
 * @returns {Boolean}
 */
export function isArray(arg) {
  if (typeof Array.isArray === 'undefined') {
    return Object.prototype.toString.call(arg) === '[object Array]'
  }
  return Array.isArray(arg)
}
//��ֵ��ΧУ��
export function checkNumber(rule, value, callback) {
  if (!value) {
    return callback(new Error('���벻����Ϊ��'));
  }
  setTimeout(() => {
    if (!Number(value)) {
    } else {
      if (value < 1 || value > 64) {
        callback(new Error('��ֵ��ΧΪ1-64'));
      } else {
        callback();
      }
    }
  }, 100);
}
export function checkNumberAddr(rule, value, callback) {
  if (!value) {
    return callback(new Error('���벻����Ϊ��'));
  }
  setTimeout(() => {
    if (!Number(value)) {
    } else {
      if (value < 1 || value > 65536) {
        callback(new Error('��ֵ��ΧΪ1-65536'));
      } else {
        callback();
      }
    }
  }, 100);
}

/**
 * 密码强度验证
 * @param {*} rule 
 * @param {string} value 
 * @param {Function} callback 
 */
export function validatePassword(rule, value, callback) {
  if (!value) {
    return callback(new Error('请输入密码'));
  }
  
  // 密码长度要求：8-20位
  if (value.length < 8 || value.length > 20) {
    return callback(new Error('密码长度应为8-20位'));
  }
  
  // 密码复杂度要求：必须包含字母和数字
  const hasLetter = /[a-zA-Z]/.test(value);
  const hasNumber = /\d/.test(value);
  
  if (!hasLetter || !hasNumber) {
    return callback(new Error('密码必须包含字母和数字'));
  }
  
  // 可选：特殊字符检查（可根据需求开启）
  // const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(value);
  // if (!hasSpecialChar) {
  //   return callback(new Error('密码必须包含特殊字符'));
  // }
  
  callback();
}
