import Cookies from 'js-cookie'
import { createCookieStorage, createTokenManager } from '@linlannet/lib-vue-base/core'

const TokenKey = 'Admin-Token'

const tokenManager = createTokenManager({
  storageKey: TokenKey,
  headerName: 'Authorization',
  scheme: 'Linlan',
  storage: createCookieStorage()
})

export function getToken() {
  return tokenManager.getToken()
}

export function setToken(token) {
  tokenManager.setToken(token)
  return token
}

export function removeToken() {
  tokenManager.removeToken()
}

export function buildAuthorization() {
  return tokenManager.buildAuthorization()
}

const UserId = 'userId'
export function getUserId() {
    return Cookies.get(UserId)
}

export function setUserId(userId) {
    return Cookies.set(UserId, userId)
}

export function removeUserId() {
    return Cookies.remove(UserId)
}