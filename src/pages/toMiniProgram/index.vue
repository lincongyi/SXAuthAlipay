<template>
  <h1>PAGE TOMINIPROGRAM</h1>
  <div class="loading-wrap">
    <van-loading color="#0094ff" size="40px" vertical>加载中...</van-loading>
  </div>
</template>

<script setup>
import { Dialog } from 'vant'

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
  // 跳转到小程序
  const certToken = window.location.href.substring(window.location.href.indexOf('?')+1)
  const encodeCertToken = encodeURIComponent(certToken)
  const scheme = encodeURIComponent(`alipays://platformapi/startapp?appId=2021003128635520&page=pages/login/index&query=${encodeCertToken}`)
  window.location.href = `https://ds.alipay.com/?scheme=${scheme}`
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