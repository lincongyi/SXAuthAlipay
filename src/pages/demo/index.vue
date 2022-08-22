<template>
  <div class="form-wrap">
    <van-form @submit="handleSubmit">
      <van-cell-group inset>
        <van-field
          v-model="clientId"
          name="账号"
          label="账号"
          placeholder="账号"
          clearable
          :rules="[{ required: true, message: '请填写账号' }]"
        />
        <van-field
          v-model="clientSecret"
          type="clientSecret"
          name="密码"
          label="密码"
          placeholder="密码"
          clearable
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="mode"
          name="认证模式"
          label="认证模式"
          placeholder="认证模式"
          :rules="[{ required: true, message: '请填写认证模式' }]"
        />
        <van-field
          v-model="username"
          name="姓名"
          label="姓名"
          maxlength="18"
          placeholder="姓名"
        />
        <van-field
          v-model="idNum"
          name="证件号码"
          label="证件号码"
          maxlength="18"
          placeholder="证件号码"
        />
      </van-cell-group>
      <van-radio-group class="radio-box" v-model="authModeChecked">
        <div class="radio-title">直接跳转</div>
        <van-radio name="0">生活号</van-radio>

        <div class="radio-title">跳转空白页面后重定向</div>
        <van-radio name="1">生活号</van-radio>
        <van-radio name="2">MINI PROGRAM</van-radio>

      </van-radio-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import {getAccessToken, getCertToken} from '@/api/demo/index'
const clientId = ref(import.meta.env.VITE_CLIENT_ID) // 账号
const clientSecret = ref(import.meta.env.VITE_CLIENT_SECRET) // 密码
const mode = ref(66) // 认证模式
const username = process.env.NODE_ENV === 'production' ? ref('') : ref('') // 姓名
const idNum = process.env.NODE_ENV === 'production' ? ref('') : ref('') // 证件号码
const authModeList = ['H5', 'MINI'] // H5（生活号） or MINI（小程序）
const authModeChecked = ref('2') // 选择跳转目的地

const handleSubmit = async () => {
  let {accessToken} = await getAccessToken({clientId: clientId.value, clientSecret: clientSecret.value})

  let params = {
    accessToken,
    authType: 'GzhRegular',
    mode: mode.value,
    extraParams: {
      foreBackUrl: location.href
    },
    businessInfo: {
      subject: '身份验证'
    },
    idInfo: {
      fullName: username.value,
      idNum: idNum.value
    }
  }

  let {tokenInfo} = await getCertToken(params)
  let {certToken} = tokenInfo

  let target = Number(authModeChecked.value)
  let url
  if (target) { // 通过空白引导页指引跳转生活号或者小程序
    let env = authModeList[target - 1]
    let domain = `${import.meta.env.MODE === 'production' ? import.meta.env.VITE_DEMO_BASE_URL : 'https://sfrz.wsbs.shxga.gov.cn'}`
    url = `${domain}/authgzh/auth?certToken=${certToken}&env=${env}`
  } else { // 直接跳转生活号
    let domain = `${import.meta.env.MODE === 'production' ? import.meta.env.VITE_AUTH_BASE_URL : import.meta.env.VITE_PROXY_AUTH_BASE_URL}`
    url = `${domain}/auth?certToken=${certToken}`
  }
  alert(url)
  window.location.replace(url)
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
.radio-box{
  padding: 10px 30px
}
.radio-title{
  font-size: 14px;
  color: #666;
  padding: 10px 0;
}
.van-radio{
  padding: 10px 0;
}
</style>