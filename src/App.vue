<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <van-button type="primary" @click="toDemo">跳转到demo</van-button>
  <van-button type="primary" plain @click="getAuthCode">获取登录授权码</van-button>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup lang="ts"> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

const toDemo = () => (window.location.href = './demo.html')

const isAlipay = navigator.userAgent.indexOf('AliApp') > -1 // 是否支付宝环境
let globalEnv: any
try {
  console.log(isAlipay)
  // eslint-disable-next-line no-undef
  globalEnv = isAlipay ? my : wx.miniProgram // h5 with 小程序通讯，获取实例对象
} catch (error) {
  console.log(error)
}

/**
 * 获取登录授权码
 */
const getAuthCode = () => {
  try {
    console.log('dd', dd)
    dd.getAuthCode({
      corpId: ''
    }).then(res => {
      console.log('res', res)
    })
  } catch (error) {
    console.log(error)
  }
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
