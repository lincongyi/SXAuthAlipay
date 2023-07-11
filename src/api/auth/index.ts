import { service as request } from '@/utils/request'
import { AxiosPromise } from 'axios'

/**
 * 校验certToken 或 userId 是否有绑定用户的信息
 */
export function checkIdentityInfo (data?: object) {
  return request({
    url: '/checkIdentityInfo',
    method: 'post',
    data
  })
}

/**
 * 根据certToken获取认证前提示
 */
export function getBeforeAuthTips (data?: object) {
  return request({
    url: '/getBeforeAuthTips',
    method: 'post',
    data
  })
}

export type TAuthorizeParams = {
  loginToken: string
  certToken: string
  fullName: string
  idNum: string
  certifyId?: string
  mode?: number
  idStartDate?: string
  idEndDate?: string
}

type TAlipayAuthInit = {
  certifyId: string // 认证id
  certifyUrl: string // 网关 url
}

/**
 * 获取调起支付宝刷脸url
 */
export function alipayAuthInit (
  data: TAuthorizeParams
): AxiosPromise<TAlipayAuthInit> {
  return request({
    url: '/alipayAuthInit',
    method: 'post',
    data
  })
}

export type TAlipayAuthQuery = {
  foreBackUrl: string
}

/**
 * 刷脸认证后，通过后台获取支付宝认证结果
 */
export function alipayAuthQuery (
  data: TAuthorizeParams
): AxiosPromise<TAlipayAuthQuery> {
  return request({
    url: '/alipayAuthQuery',
    method: 'post',
    data
  })
}
