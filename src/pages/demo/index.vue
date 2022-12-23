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
          name="密码"
          label="密码"
          placeholder="密码"
          clearable
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="mode"
          readonly
          is-link
          name="认证模式"
          label="认证模式"
          placeholder="认证模式"
          @click="showPicker = true"
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
        <template v-if="[16,18].includes(Number(mode))">
          <van-divider content-position="left">证件有效期</van-divider>
          <van-field
            v-model="startDateToString"
            readonly
            is-link
            name="起始日期"
            label="起始日期"
            @click="dateType = 0; showDatePicker = true"
          />
          <van-field
            v-model="endDateToString"
            readonly
            is-link
            name="截止日期"
            label="截止日期"
            @click="dateType = 1; showDatePicker = true"
          />
        </template>
      </van-cell-group>
      <van-radio-group class="radio-box" v-model="authModeChecked">
        <div class="radio-title">直接跳转</div>
        <van-radio name="0">生活号</van-radio>

        <div class="radio-title">跳转空白页面后重定向</div>
        <van-radio name="1">生活号</van-radio>
        <van-radio name="2">MINI PROGRAM</van-radio>

      </van-radio-group>
      <div style="margin: 16px;">
        <van-button round block type="primary" native-type="submit">提交</van-button><br/>
        <van-button round block type="primary" @click="handleV3">v3 token</van-button>
      </div>

      <van-popup v-model:show="showPicker" round position="bottom">
        <van-picker
          :columns="modeRange"
          :defaultIndex="defaultIndex"
          @cancel="showPicker = false"
          @confirm="onConfirmMode"
        />
      </van-popup>

      <van-popup v-model:show="showDatePicker" round position="bottom">
        <van-datetime-picker
          v-model="[startDate,endDate][dateType]"
          title="选择日期"
          type="date"
          :min-date="currentRange[0]"
          :max-date="currentRange[1]"
          :formatter="formatterDate"
          @confirm="onConfirmDate"
        />
      </van-popup>
    </van-form>
  </div>
</template>

<script setup lang="ts">
import { getAccessToken, getCertToken, simpauth, gawzauthreq, nogawzauthreq } from '@/api/demo/index'
import { Toast } from 'vant'
import { loadEnv, formatDate } from '@/utils/index'
import { v3Sign, handleV3Event } from './v3crypt'

const { VITE_CLIENT_ID, VITE_CLIENT_SECRET} = loadEnv()
const clientId = ref(VITE_CLIENT_ID) // 账号
const clientSecret = ref(VITE_CLIENT_SECRET) // 密码
const showPicker = ref(false) // 认证模式弹出层
const modeRange = [16, 18, 64, 66] // 认证模式范围
const mode = ref<number|string>(16) // 认证模式
const defaultIndex = ref(modeRange.findIndex((item) => item===mode.value)) // 默认认证模式index
const username = ref('') // 姓名
const idNum = ref('') // 证件号码
const showDatePicker = ref(false) // 日期选择器弹出层

const dateType = ref(0) // 日期类型：0-起始日期；1-截止日期
const startDateRange = [new Date(2000, 0, 1), new Date()]
const endDateRange = [new Date(), new Date(2050, 11, 31)]
const startDate = ref(new Date(2000, 0, 1))
const endDate = ref(new Date(2030, 0, 1))

const authModeList = ['H5', 'MINI'] as const // H5（生活号） or MINI（小程序）
const authModeChecked = ref('2') // 选择跳转目的地

// 选择模式
const onConfirmMode = (data:number) => {
  mode.value = data
  showPicker.value = false
}

// 选择日期
const onConfirmDate = (value:Date) => {
  if (!dateType.value) startDate.value = value
  else endDate.value = value
  showDatePicker.value = false
}

// 格式化日期
const startDateToString = computed(() => startDate.value.toLocaleDateString())
const endDateToString = computed(() => endDate.value.toLocaleDateString())
const currentRange = computed(() => [startDateRange, endDateRange][dateType.value])

const handleSubmit = async () => {
  let {accessToken} = await getAccessToken({clientId: clientId.value, clientSecret: clientSecret.value}) as unknown as {accessToken: string}
  let foreBackUrl = location.href.indexOf('?') === -1 ? location.href:location.href.substring(0, location.href.indexOf('?'))
  let params = {
    accessToken,
    authType: 'GzhRegular',
    mode: mode.value,
    extraParams: {
      foreBackUrl
    },
    businessInfo: {
      subject: '身份验证'
    },
    idInfo: {
      fullName: username.value,
      idNum: idNum.value
    }
  }

  let {tokenInfo} = await getCertToken(params) as unknown as {tokenInfo: {certToken: string}}
  let {certToken} = tokenInfo

  let target = Number(authModeChecked.value)
  let url: string
  if (target) { // 通过空白引导页指引跳转生活号或者小程序
    let env = authModeList[target - 1]
    const { MODE, VITE_DEMO_BASE_URL } = loadEnv()
    let domain = `${MODE === 'production' ? VITE_DEMO_BASE_URL : 'https://sfrz.wsbs.shxga.gov.cn'}`
    url = `${domain}/authgzh/auth?certToken=${certToken}&env=${env}`
  } else { // 直接跳转生活号
    const { MODE, VITE_AUTH_BASE_URL, VITE_PROXY_AUTH_BASE_URL } = loadEnv()
    let domain = `${MODE === 'production' ? VITE_AUTH_BASE_URL : VITE_PROXY_AUTH_BASE_URL}`
    url = `${domain}/auth?certToken=${certToken}`
  }
  window.location.replace(url)
}

// 网证标识
const handleV3 = async () => {
  // let foreBackUrl = location.href.indexOf('?') === -1 ? location.href:location.href.substring(0, location.href.indexOf('?'))
  let foreBackUrl = 'https://sfrz.wsbs.shxga.gov.cn/sit/shanxiauthweb/transfer.html'
  let certToken = ''
  if (!username.value || !idNum.value) { // 不存在用户录入的明文信息
    let encryptParams = v3Sign({
      mode: mode.value,
      authType: 'GzhRegular',
      businessInfo: {
        subject: '身份验证'
      },
      extraParams: {
        foreBackUrl
      }
    }, clientId.value) // 1.数据签名
    let resData = await nogawzauthreq(encryptParams) // 2.提交签名后的数据
    let result = handleV3Event(resData) // 统一处理后续操作
    certToken = result.certToken
  } else {
    let encryptParams = v3Sign({
      authData: {
        mode: 64,
        idInfo: {
          fullName: username.value,
          idNum: idNum.value
        }
      }
    }, clientId.value) // 1.数据签名
    let resData = await simpauth(encryptParams) // 2.提交签名后的数据
    let result = handleV3Event(resData) // 统一处理后续操作
    const gawzbz = result.gawzbz // 3.获得公安网证标识

    encryptParams = v3Sign({
      mode: mode.value,
      authType: 'GzhRegular',
      idInfo: {
        gawzbz,
        idStartDate: (username.value&&idNum.value) ? formatDate(startDate.value) : '', // 没有录入用户信息，不传证件有效期
        idEndDate: (username.value&&idNum.value) ? formatDate(endDate.value): ''
      },
      businessInfo: {
        subject: '身份验证'
      },
      extraParams: {
        foreBackUrl
      }
    }, clientId.value) // 5.数据签名
    resData = await gawzauthreq(encryptParams) // 4.提交签名后的数据
    result = handleV3Event(resData) // 统一处理后续操作
    certToken = result.certToken // 5.获得certToken
  }

  let domain = `${
    import.meta.env.MODE === 'production'
      ? import.meta.env.VITE_AUTH_BASE_URL
      : import.meta.env.VITE_PROXY_AUTH_BASE_URL
  }`
  return window.location.href = `${domain}/auth?certToken=${certToken}`
}

// 格式化日期选择器显示
const formatterDate = (type:string, value:string) => {
  if (type === 'year') {
    return `${value}年`
  }
  if (type === 'month') {
    return `${value}月`
  }
  if (type === 'day') {
    return `${value}日`
  }
  return value
}

onMounted(() => {
  let href = decodeURIComponent(window.location.href)
  let query = href.substring(href.indexOf('?') + 1)
  const urlParams = new URLSearchParams(query)
  const errorMsg = urlParams.get('errorMsg')
  if (errorMsg) return Toast({
    message: `认证${errorMsg}`,
    forbidClick: true,
  })
})

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