import { service as request, v3Service } from '@/utils/request'
import { loadEnv } from '@/utils/index'

const { VITE_DEMO_BASE_URL, VITE_V3_BASE_URL } = loadEnv()

/**
 * 获取accessToken
 */
export function getAccessToken(params?:object) {
  return request({
    baseURL: VITE_DEMO_BASE_URL,
    url: '/getaccesstoken',
    method: 'get',
    params,
  })
}

/**
 * 获取certToken
 */
export function getCertToken(data?: object) {
  return request({
    baseURL: VITE_DEMO_BASE_URL,
    url: '/authreq',
    method: 'post',
    data,
  })
}

/**
 * 获取网证标识
 */
export function simpauth(data: object) {
  return v3Service({
    baseURL: VITE_V3_BASE_URL,
    url: '/simpauth',
    method: 'post',
    data
  }) as unknown as TV3Response
}

/**
 * 获取认证凭证
 */
export function gawzauthreq(data: object) {
  return v3Service({
    baseURL: VITE_V3_BASE_URL,
    url: '/gawzauthreq',
    method: 'post',
    data
  }) as unknown as TV3Response
}

/**
 * 获取认证凭证（无网证标识）
 */
export function nogawzauthreq(data: object) {
  return v3Service({
    baseURL: VITE_V3_BASE_URL,
    url: '/nogawzauthreq',
    method: 'post',
    data
  }) as unknown as TV3Response
}