import request from '@/utils/request'
/**
  * 获取accessToken
 */
export function getAccessToken(params) {
  return request({
    baseURL: process.env.NODE_ENV === 'production' ? import.meta.env.VITE_DEMO_BASE_URL : import.meta.env.VITE_DEMO_BASE_URL,
    url: '/getaccesstoken',
    method: 'get',
    params
  })
}

/**
  * 获取certToken
 */
export function getCertToken(data) {
  return request({
    baseURL: process.env.NODE_ENV === 'production' ? import.meta.env.VITE_AUTH_BASE_URL : import.meta.env.VITE_DEMO_BASE_URL,
    url: '/authreq',
    method: 'post',
    data
  })
}