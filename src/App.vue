<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
  <van-button type="primary" @click="toDemo">跳转到demo</van-button>
  <br />
  <van-button type="primary" plain @click="getAuthCode('')">获取登录授权码（不传租户id）</van-button>
  <van-button type="primary" plain @click="getAuthCode('50696436')">获取登录授权码（传租户id）</van-button>
  <van-button type="primary" plain @click="getConfig">获取配置信息</van-button>
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup lang="ts"> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'

import VConsole from 'vconsole'
new VConsole()

const toDemo = () => (window.location.href = './demo.html')

const isAlipay = navigator.userAgent.indexOf('AliApp') > -1 // 是否支付宝环境
let globalEnv: any
try {
  // eslint-disable-next-line no-undef
  globalEnv = isAlipay ? my : wx.miniProgram // h5 with 小程序通讯，获取实例对象
} catch (error) {
  console.log(error)
}

/**
 * 获取登录授权码
 */
const getAuthCode = (corpId?: string) => {
  try {
    // eslint-disable-next-line no-undef
    dd.getAuthCode({
      corpId
    }).then((res: any) => {
      console.log('res', res)
    })
  } catch (error) {
    console.log(error)
  }
}

/**
 * 获取配置信息
 */
const getConfig = () => {
  try {
    // eslint-disable-next-line no-undef
    dd.getConfig().then((res: any) => {
      console.log(res)
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
