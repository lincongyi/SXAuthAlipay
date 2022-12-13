import { sm2 } from 'sm-crypto'
import { sm4 } from 'sm-crypto'
import { v4 as uuidv4 } from 'uuid'

const cipherMode = 0 // 加密模式： 1-C1C3C2，0-C1C2C3，默认为1

// let keypair = sm2.generateKeyPairHex(); // 生成密钥对
const keypair = {
  privateKey:
  'AMPADS+BSbpTPdgX+/yduAxH4ys5lONk4zPgB/NYSlAZ',
  publicKey:
  'BDzop8PNh8mH/Iifslhrc86Z14mxbUKGNUR5VR34F9E8PmEDcYqIdRaoG2gpzHVgcCHE8jl9YVVFGvu89do0pps='
}

/**
  * base64转16进制字符串
  * @param {string} base64 base64
  * @return {string} 16进制字符串
 */
export const keyToHex = (base64:string) => {
  return arrayToHex(base64_decode(base64))
}

const publicKey = keyToHex(keypair.publicKey) // 公钥-用于sm2验签
const privateKey = keyToHex(keypair.privateKey) // 私钥-用于sm2签名
const publicKeyPlatform = keyToHex('BF1bKDid/tOtJP71NlkwkvszkfdPkjpNGj2Z35IVM14qijMyuvlp3ohCAqWZ0J6h7UeAKRe/scFGhHosqfzzCng=') // 平台公钥-用于sm2加密sm4key

const sm4Key = uuidv4().replaceAll('-', '') // sm4Key

/**
 * sm4加密明文
 * @param {string} data 需要加密的明文数据
 * @return {string} sm4加密后的明文数据
 */
export const sm4Encrypt = (data:string) => sm4.encrypt(data, sm4Key)

/**
 * sm2加密密钥
 * @param {string} data 需要加密的sm4Key
 * @return {string} sm2加密后的密钥数据
 */
const sm2Encrypt = () => `04${sm2.doEncrypt(sm4Key, publicKeyPlatform, cipherMode)}`

export const sm4EncryptKey = sm2Encrypt() // 加密后的sm4Key

/**
 * sm2解密密钥
 * @param {string} encryptData 加密的sm4Key
 * @return {string} sm2解密后的密钥数据
 */
export const sm2Decrypt = (encryptData: string) => sm2.doDecrypt(encryptData, privateKey, cipherMode)

/**
 * sm2签名
 * @param {string} data 需要签名的数据
 * @return {string} 签名后的数据
 */
export const sm2Sign = (data: string) => sm2.doSignature(data, privateKey, { hash: true, publicKey, der: true })

/**
 * sm2验签
 * @param {string} data 原始字符串
 * @param {string} sigValueHex 签名后的字符串
 * @return {string} 验签后的结果
 */
export const sm2VerifySign = (data: string, sigValueHex: string) => sm2.doVerifySignature(data, sigValueHex, publicKey, { hash: true, publicKey, der: true })

/**
 * base64转16进制数组
 */
const base64_decode = (input:string) => {
  const output = []
  let chr1, chr2, chr3
  let enc1, enc2, enc3, enc4
  let i = 0

  const orig_input = input
  input = input.replace(/[^A-Za-z0-9\+\/\=]/g, '')
  if (orig_input !== input)
    alert ('Warning! Characters outside Base64 range in input string ignored.')
  if (input.length % 4) {
    alert ('Error: Input length is not a multiple of 4 bytes.')
    return ''
  }

  let j=0
  const keyStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/='
  while (i < input.length) {

    enc1 = keyStr.indexOf(input.charAt(i++))
    enc2 = keyStr.indexOf(input.charAt(i++))
    enc3 = keyStr.indexOf(input.charAt(i++))
    enc4 = keyStr.indexOf(input.charAt(i++))

    chr1 = (enc1 << 2) | (enc2 >> 4)
    chr2 = ((enc2 & 15) << 4) | (enc3 >> 2)
    chr3 = ((enc3 & 3) << 6) | enc4

    output[j++] = chr1
    if (enc3 !== 64)
      output[j++] = chr2
    if (enc4 !== 64)
      output[j++] = chr3

  }
  return output
}

/**
 * 字节数组转成16进制串
 */
const arrayToHex = (arr: number[] | '') => {
  if (!arr) return ''
  return arr.map(item => {
    const itemToString = item.toString(16)
    return itemToString.length === 1 ? '0' + item : item
  }).join('')
}