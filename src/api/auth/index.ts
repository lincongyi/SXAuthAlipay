import request from '@/utils/request'
/**
  * 校验certToken 或 userId 是否有绑定用户的信息
 */
interface ICertToken {
  certToken: string;
}
interface ICheckIdentityInfoData extends ICertToken {
  loginToken: string;
}
interface IAlipayAuthInitData extends ICertToken {
  fullName: string;
  idNum: string;
}
export function checkIdentityInfo(data:ICheckIdentityInfoData) {
  return request({
    url: '/checkIdentityInfo',
    method: 'post',
    data
  })
}

/**
  * 根据certToken获取认证前提示
 */
export function getBeforeAuthTips(data:ICertToken) {
  return request({
    url: '/getBeforeAuthTips',
    method: 'post',
    data
  })
}

/**
  * 获取调起支付宝刷脸url
 */
export function alipayAuthInit(data) {
  return request({
    url: '/alipayAuthInit',
    method: 'post',
    data
  })
}

/**
  * 刷脸认证后，通过后台获取支付宝认证结果
 */
export function alipayAuthQuery(data) {
  return request({
    url: '/alipayAuthQuery',
    method: 'post',
    data
  })
}