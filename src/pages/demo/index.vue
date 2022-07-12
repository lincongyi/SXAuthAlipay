<template>
  <!-- <h1>PAGE DEMO</h1> -->
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
      <van-radio-group class="radio-box" v-model="authModeChecked" direction="horizontal">
        <van-radio name="H5">公众号or生活号</van-radio>
        <van-radio name="MINI">MINI PROGRAM</van-radio>
      </van-radio-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">提交</van-button>
      </div>
    </van-form>
  </div>
</template>

<script setup>
import {getAccessToken, getCertToken} from '@/api/demo/index'
const clientId = ref(import.meta.env.VITE_CLIENT_ID) || ref('') // 账号
const clientSecret = ref(import.meta.env.VITE_CLIENT_SECRET) || ref('') // 密码
const mode = ref(66) // 认证模式
const username = process.env.NODE_ENV === 'production' ? ref('') : ref('') // 姓名
const idNum = process.env.NODE_ENV === 'production' ? ref('') : ref('') // 证件号码
const authModeChecked = ref('MINI') // 选择跳转目的地:h5（生活号公众号） or mini（小程序）

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

  let env = authModeChecked.value || 'MINI'

  // let url = `${import.meta.env.VITE_PROXY_AUTH_BASE_URL}/auth?certToken=${certToken}` // 跳转生活号
  let url = `${import.meta.env.NODE_ENV === 'production' ? import.meta.env.VITE_DEMO_BASE_URL : 'http://gat.shaanxi.gov.cn/auth'}/authgzh/auth2?certToken=${certToken}&env=${env}`
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
</style>