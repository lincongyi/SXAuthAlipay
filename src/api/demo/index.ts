import request from '@/utils/request'
import { loadEnv } from '@/utils/index'

const { VITE_DEMO_BASE_URL } = loadEnv()

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
