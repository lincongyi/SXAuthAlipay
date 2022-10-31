<template>
  <div class="loading-wrap">
    <van-loading color="#0094ff" size="40px" vertical>加载中...</van-loading>
  </div>
</template>

<script setup lang="ts">
import { Dialog } from 'vant'
import { loadEnv } from '@/utils/index'

// 判断当前浏览器环境
let userAgent = window.navigator.userAgent
let navigatorMode = 0
if (/micromessenger/.test(userAgent.toLowerCase())){
  navigatorMode = 1
} else if (/AlipayClient/.test(window.navigator.userAgent)){
  navigatorMode = 2
}
if (!navigatorMode){
  Dialog.alert({
    title: '温馨提示',
    message: '请在微信或支付宝app进行访问',
  }).then(() => {
    window.history.go(-1)
  })
} else {
  let href = decodeURIComponent(window.location.href)
  let query = href.substring(href.indexOf('?') + 1)
  const urlParams = new URLSearchParams(query)
  const foreBackUrl = urlParams.get('foreBackUrl')
  if (foreBackUrl) { // 小程序认证后返回，指定跳转回第三方h5页面
    let url = query.substring(query.indexOf('foreBackUrl')).replace(/foreBackUrl=/g, '')
    window.location.href = url
  } else { // 跳转认证小程序
    const env = urlParams.get('env') || ''
    const certToken = urlParams.get('certToken') || ''

    let authModeList = ['H5', 'MINI'] as const
    let authMode = authModeList.findIndex((item) => item === env)

    if (navigatorMode === 1){
      if (authMode){ // 跳转微信小程序

      } else { // 跳转微信公众号

      }
    } else {
      if (authMode){ // 跳转支付宝小程序
        let schemeQuery = `certToken=${certToken}&env=${env}`
        const encodeSchemeQuery = encodeURIComponent(schemeQuery)
        const baseScheme = 'alipays://platformapi/startapp?appId=2021003128635520&page=pages/login/index'
        const scheme = encodeURIComponent(`${baseScheme}&query=${encodeSchemeQuery}`)
        window.location.href = `https://ds.alipay.com/?scheme=${scheme}`
      } else { // 跳转支付宝生活号
        const { MODE, VITE_AUTH_BASE_URL, VITE_PROXY_AUTH_BASE_URL} = loadEnv()
        let url = `${MODE === 'production' ? VITE_AUTH_BASE_URL : VITE_PROXY_AUTH_BASE_URL}/auth?certToken=${certToken}`
        window.location.href = url
      }
    }
  }
}
</script>

<style lang="scss">
#app {
  max-width: 600px;
  margin: 0 auto;
  margin-top: 20px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
h1{
  text-align: center;
}
.loading-wrap{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
}
</style>