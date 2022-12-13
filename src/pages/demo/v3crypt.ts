import { v4 as uuidv4 } from 'uuid'
import qs from 'qs'
import { sm4Encrypt, sm2Encrypt, HexToBase64, sm2Sign, sm2VerifySign, keyToHex } from './utils'

/**
 *
 * @param {object} params 原始数据
 * @param {string} clientId 账号
 * @returns {object} 加密后返回的数据格式
 */
export const v3Encrypt = (params:object, clientId:string) => {

  const sm4Key = uuidv4().replaceAll('-', '') // 原始sm4Key：32位16进制字符串
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
  const str = formatterToString(encryptData)
  // const str2 = qs.stringify(encryptData, { sort: (a, b) => a.localeCompare(b) }).replaceAll('%2F', '\/').replaceAll('%2B', '+')
  // console.log('比对字符串：', str===str2)
  const sign = (sm2Sign(str))
  // const test = qs.stringify({ a: 'asdf/asd+222/2223++/4' })
  // let result = test.replaceAll(\%2f\,)
  // console.log(result)
  // return { ...encryptData, sign }
  const signData = sm2Sign('123')
  const signValue = 'MEQCICDBKgxmVlX1vdRYTxFhy2Ciy5lSs5mvlfQ7oPygE346AiBDWSWdFn3wtnPJtEs+P48zY7BhhdJjJLSwpZEP9CYXIw=='
  console.log('signData', signData)
  console.log('signValue', keyToHex(signValue))
  console.log('验签结果：', sm2VerifySign('123', keyToHex(signValue)))
}

function formatterToString(data:Record<string, string|number>) {
  let result = ''
  // const keys = Object.keys(data)
  for (const item in data) {
    result += `${item}=${data[item]}&`
  }
  return result.substring(0, result.length-1)
}