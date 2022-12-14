import { v4 as uuidv4 } from 'uuid'
import qs from 'qs'
import { sm4Encrypt, sm2Encrypt, HexToBase64, sm2Sign, sm2VerifySign, keyToHex } from './utils'

/**
 * 格式化字符串用作签名
 * @param {object} params 需要排序&格式化的数据
 * @returns {string} 排序后，格式化后的数据
 */
const sortParams = (params:object) => {
  return qs.stringify(params, { sort: (a, b) => a.localeCompare(b), charset: 'utf-8' }).replaceAll('%2F', '/').replaceAll('%2B', '+')
}

let sm4Key:string // 原始sm4Key：32位16进制字符串

/**
 * 返回等候签名的数据
 * @param {object} params 原始数据
 * @param {string} clientId 账号
 * @returns {object} 加密后返回的数据格式
 */
export const v3Sign = (params:object, clientId:string) => {
  sm4Key = uuidv4().replaceAll('-', '') // 原始sm4Key：32位16进制字符串
  const sm4EncryptKey = sm2Encrypt(sm4Key) // 加密后的sm4Key
  const data = sm4Encrypt(JSON.stringify(params), sm4Key) // 加密明文数据
  const requestId = uuidv4().replaceAll('-', '') // 请求标识：32位16进制字符串
  const timestamp = Date.now() // 当前时间戳

  const encryptData = {
    clientId,
    data,
    requestId,
    sm4Key: HexToBase64(sm4EncryptKey),
    timestamp,
  }
  const formatterEncryptData = sortParams(encryptData)
  console.log('encryptData', encryptData)
  const sign = HexToBase64(sm2Sign(formatterEncryptData))
  return { ...encryptData, sign }
}

/**
 * 验签
 * @param {object} params 已签名的内容
 * @param {string} sign 已签名的内容
 * @returns {boolean} 验签结果
 */
export const v3VertifySign = (params:object, sign: string) => {
  console.log('all params', {...params, clientId: 'dabby_test', sm4Key: HexToBase64(sm4Key)})
  const formatterParams = sortParams({...params, clientId: 'dabby_test', sm4Key: HexToBase64(sm4Key)}).replaceAll('%3D', '=')
  console.log('formatterParams', formatterParams)
  const isVertified = sm2VerifySign(formatterParams, keyToHex(sign))

  return isVertified
}