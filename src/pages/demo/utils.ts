import { sm2 } from 'sm-crypto'
import { sm4 } from 'sm-crypto'

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
export const base64ToHex = (base64:string) => {
  return arrayToHex(base64_decode(base64))
}

const publicKey = base64ToHex(keypair.publicKey) // 公钥-用于sm2验签
const privateKey = base64ToHex(keypair.privateKey) // 私钥-用于sm2签名
const publicKeyPlatform = base64ToHex('BF1bKDid/tOtJP71NlkwkvszkfdPkjpNGj2Z35IVM14qijMyuvlp3ohCAqWZ0J6h7UeAKRe/scFGhHosqfzzCng=') // 平台公钥-用于sm2加密sm4key

/**
 * sm4加密明文
 * @param {string} data 需要加密的明文数据
 * @return {string} sm4加密后的明文数据
 */
export const sm4Encrypt = (data:string, sm4Key:string) => sm4.encrypt(data, sm4Key)

/**
 * sm4解密数据
 * @param {string} data 需要解密的数据
 * @return {string} sm4解密后的数据
 */
export const sm4Decrypt = (data:string, sm4Key:string) => sm4.decrypt(data, sm4Key)

/**
 * sm2加密密钥
 * @param {string} sm4Key 需要加密的sm4Key
 * @return {string} sm2加密后的密钥数据
 */
export const sm2Encrypt = (sm4Key:string) => `04${sm2.doEncrypt(sm4Key, publicKeyPlatform, cipherMode)}`

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
function base64_decode (input:string){
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
function arrayToHex (arr: number[] | ''){
  if (!arr) return ''
  return arr.map(item => {
    const itemToString = item.toString(16)
    return itemToString.length === 1 ? '0' + itemToString : itemToString
  }).join('')
}

/**
 * 16进制数转base64
 */
export function HexToBase64 (hex:string) {
  const digits = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
  let base64_rep = ''
  let ascv
  let bit_arr = 0
  let bit_num = 0

  for (let n = 0; n < hex.length; ++n) {
    if (hex[n] >= 'A' && hex[n] <= 'Z') {
      ascv = hex.charCodeAt(n) - 55
    } else if (hex[n] >= 'a' && hex[n] <= 'z') {
      ascv = hex.charCodeAt(n) - 87
    } else {
      ascv = hex.charCodeAt(n) - 48
    }

    bit_arr = (bit_arr << 4) | ascv
    bit_num += 4
    if (bit_num >= 6) {
      bit_num -= 6

      base64_rep += digits[bit_arr >>> bit_num]
      bit_arr &= ~ (-1 << bit_num)
    }
  }

  if (bit_num > 0) {
    bit_arr <<= 6 - bit_num
    base64_rep += digits[bit_arr]
  }
  const padding = base64_rep.length % 4

  if (padding > 0) {
    for (let m = 0; m < 4 - padding; ++m) {
      base64_rep += '='
    }
  }
  return base64_rep
}