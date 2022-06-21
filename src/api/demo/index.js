import request from '@/utils/request'
/**
  * 获取accessToken
 */
export function getAccessToken(params) {
  return request({
    baseURL: import.meta.env.VITE_DEMO_BASE_URL,
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
    baseURL: import.meta.env.VITE_DEMO_BASE_URL,
    url: '/authreq',
    method: 'post',
    data
  })
}