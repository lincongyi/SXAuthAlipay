/**
 * 关键信息隐藏
 * @param str 字符串
 * @param frontLen 字符串前面保留位数
 * @param endLen 字符串后面保留位数
 * @returns string
 */
export function hideCode(
  str: string,
  frontLen: number,
  endLen: number
): string {
  if (!str) {
    return ''
  }
  const len = str.length - frontLen - endLen
  let xing = ''
  for (let i = 0; i < len; i++) {
    xing += '*'
  }
  return str.substring(0, frontLen) + xing + str.substring(str.length - endLen)
}

/**
 * 引入静态图片
 */
export function getImageUrl<T>(name: T) {
  return new URL(`/src/assets/${name}.png`, import.meta.url).href
}

/**
 * 环境变量
 */
export const loadEnv = (): ViteEnv => import.meta.env as ViteEnv

/**
 * 格式化日期（yyyy-MM-dd）
 */
export const formatDate = (date:Date): string => {
  const year = date.getFullYear()
  let month = `${date.getMonth() + 1}`
  let day = `${date.getDate()}`
  if (Number(month)<10) month = `0${month}`
  if (Number(day)<10) day = `0${day}`
  return `${year}${month}${day}`
}
