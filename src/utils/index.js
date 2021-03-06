/**
 * 关键信息隐藏
 * @param str 字符串
 * @param frontLen 字符串前面保留位数
 * @param endLen 字符串后面保留位数
 * @returns {string}
 */
export function hideCode(str, frontLen, endLen) {
  if (!str) {
    return ''
  }
  var len = str.length - frontLen - endLen
  var xing = ''
  for (var i = 0; i < len; i++) {
    xing += '*'
  }
  return str.substring(0, frontLen) + xing + str.substring(str.length - endLen)
}

/**
  * 引入静态图片
 */
export function getImageUrl(name) {
  return new URL(`/src/assets/${name}.png`, import.meta.url).href
}