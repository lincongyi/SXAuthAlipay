
<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <van-button type="success" @click="toDemo">跳转到demo</van-button>
  <van-button type="primary" @click="setParams">webView传参</van-button>
  <van-button type="primary" @click="handleBack">小程序返回</van-button>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup lang="ts"> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
const toDemo = () => {
  window.location.href = './demo.html'
}

let isAlipay = navigator.userAgent.indexOf('AliApp') > -1 // 是否支付宝环境
let globalEnv = isAlipay ? my : wx.miniProgram // h5 with 小程序通讯，获取实例对象

let url = window.location.href
const queryString = url.substring(url.indexOf('?')+1)
const params = new URLSearchParams(queryString)
console.log('name', params.get('name'))
console.log('age', params.get('age'))


const setParams = () => {
  console.log(globalEnv)
  globalEnv.postMessage({data: '测试webview通讯'})
}
const handleBack = () => {
  globalEnv.postMessage({data: '小程序返回'})
  globalEnv.navigateBack({delta: 1})
}
// 网页向小程序 postMessage 消息
// my.postMessage({name: '测试web-view'})
// 接收来自小程序的消息。
// my.onMessage = function(e) {
//   console.log(e) // {'sendToWebView': '1'}
// }
// 判断是否运行在小程序环境里
// my.getEnv(function(res) {
//   console.log(res.miniprogram) // true
// })
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>