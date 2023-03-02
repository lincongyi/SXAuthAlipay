import { service as request } from '@/utils/request'

/**
 * 校验certToken 或 userId 是否有绑定用户的信息
 */
export function checkIdentityInfo(data?: object) {
  return request({
    url: '/checkIdentityInfo',
    method: 'post',
    data,
  })
}

/**
 * 根据certToken获取认证前提示
 */
export function getBeforeAuthTips(data?: object) {
  return request({
    url: '/getBeforeAuthTips',
    method: 'post',
    data,
  })
}

/**
 * 获取调起支付宝刷脸url
 */
export function alipayAuthInit(data?: object) {
  return request({
    url: '/alipayAuthInit',
    method: 'post',
    data,
  })
}

/**
 * 刷脸认证后，通过后台获取支付宝认证结果
 */
export function alipayAuthQuery(data?: object) {
  return request({
    url: '/alipayAuthQuery',
    method: 'post',
    data,
  })
}
