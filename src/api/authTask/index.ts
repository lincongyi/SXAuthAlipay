import request from '@/utils/request'
import { loadEnv } from '@/utils/index'
const baseURL = 'https://sfrz.wsbs.shxga.gov.cn'

const { VITE_DEMO_BASE_URL } = loadEnv()
/**
 * 获取certToken
 */
export function getCertToken(data?:object) {
  return request({
    baseURL:
      process.env.NODE_ENV === 'production' ? VITE_DEMO_BASE_URL : baseURL,
    url: '/fama/demo/getcerttoken',
    method: 'post',
    data,
  })
}

/**
 * 获取用户信息
 */
export function getCertTokenImg(data?:object) {
  return request({
    baseURL:
      process.env.NODE_ENV === 'production' ? VITE_DEMO_BASE_URL : baseURL,
    url: '/fama/demo/getcerttokenimg',
    method: 'post',
    data,
  })
}
