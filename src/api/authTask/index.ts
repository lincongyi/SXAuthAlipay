import request from '@/utils/request'
import { loadEnv } from '@/utils/index'
import { AxiosPromise } from 'axios'
const baseURL = 'https://sfrz.wsbs.shxga.gov.cn'

const { VITE_DEMO_BASE_URL } = loadEnv()
/**
 * 获取certToken
 */
type TCertToken = {
  data: {
    img: string
    cert_token: string
  }
}
export function getCertToken(data?: object): Promise<TCertToken> {
  let url = `${process.env.NODE_ENV === 'production' ? VITE_DEMO_BASE_URL : baseURL}/fama/demo/getcerttoken`
  return request.post(url, data)
}

/**
 * 获取用户信息
 */
type TGetCertTokenImg = {
  authInfo: {
    authType: string
  }
  img: string
  userInfo: {
    phoneNum: string
  }
}
export function getCertTokenImg(data?: object): Promise<TGetCertTokenImg> {
  let url = `${process.env.NODE_ENV === 'production' ? VITE_DEMO_BASE_URL : baseURL}/fama/demo/getcerttokenimg`
  return request.post(url, data)
}