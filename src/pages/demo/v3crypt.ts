import { v4 as uuidv4 } from 'uuid'
import { sm4Encrypt, sm4Decrypt, sm2Encrypt, HexToBase64, sm2Sign, sm2VerifySign, base64ToHex } from './utils'

/**
 * 格式化数据
 * @param {object} obj 待处理的数据
 * @returns {string} 格式化后的数据
 */
const formatterFn = (obj:Record<string, any>) => {
  const map = new Map()
  const keyList = Object.keys(obj)
  keyList.sort()
  keyList.forEach((item) => map.set(item, obj[item]))
  let result = ''
  map.forEach((value, key) => result+=`${key}=${value}&`)
  return result.slice(0, -1)
}

let sm4Key:string // 原始sm4Key：32位16进制字符串
let sm4EncryptKey:string // 加密后的sm4Key

/**
 * 返回格式化数据+签名内容
 * @param {object} params 原始数据
 * @param {string} clientId 账号
 * @returns {object} 加密后返回的数据格式
 */
export const v3Sign = (params:object, clientId:string) => {
  sm4Key = uuidv4().replaceAll('-', '') // 原始sm4Key：32位16进制字符串
  sm4EncryptKey = sm2Encrypt(sm4Key) // 加密后的sm4Key
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
  const formatterEncryptData = formatterFn(encryptData)
  const sign = HexToBase64(sm2Sign(formatterEncryptData))
  return { ...encryptData, sign }
}

type v3Response = {
  code:number
  data:string
  msg:string
  requestId:string
  sign:string
  timestamp:number
}
/**
 * 验签
 * @param {object} params 已签名的内容
 * @returns {boolean} 验签结果
 */
export const v3VertifySign = (params:v3Response) => {
  const {sign, ...rest} = params
  // console.log('params', params)
  // console.log('formatterParams', formatterFn(params))
  const isVertified = sm2VerifySign(formatterFn(rest), base64ToHex(sign))

  return isVertified
}

/**
 * 解密
 * @param {string} data 已签名的内容
 * @returns {object} 解密后的结果
 */
export const v3Decrypt=(data:string) => sm4Decrypt(data, sm4Key)