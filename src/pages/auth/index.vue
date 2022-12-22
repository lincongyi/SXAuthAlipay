<template>
  <div class="form-wrap">
    <van-form @submit="handleSubmit">
      <van-cell-group inset>
        <van-field
          model-value="第二代居民身份证"
          readonly
          name="证件类型"
          label="证件类型"
        />
        <template v-if="isFilledFullName">
          <van-field
            v-model="fullNameFormat"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            readonly
            maxlength="18"
          />
        </template>
        <template v-else>
          <van-field
            v-model="fullName"
            name="用户名"
            label="用户名"
            placeholder="用户名"
            clearable
            maxlength="18"
            :rules="[{ required: true, message: '请填写用户名' }]"
          />
        </template>
        <template v-if="isFilledIdNum">
          <van-field
            v-model="idNumFormat"
            name="证件号码"
            label="证件号码"
            readonly
            maxlength="18"
            placeholder="证件号码"
          />
        </template>
        <template v-else>
          <van-field
            v-model="idNum"
            name="证件号码"
            label="证件号码"
            maxlength="18"
            placeholder="证件号码"
            :rules="[{ required: true, message: '请填写证件号码' }]"
          />
        </template>
        <template v-if="expirationDateMode.includes(mode)">
          <template v-if="isFilledExpirationDate">
            <van-field
              v-model="startDate"
              name="起始日期"
              label="起始日期"
              placeholder="起始日期"
              readonly
              maxlength="18"
            />
            <van-field
              v-model="endDate"
              name="起始日期"
              label="起始日期"
              placeholder="起始日期"
              readonly
              maxlength="18"
            />
          </template>
          <template v-else>
            <van-field
              v-model="datePickerStartDateToString"
              readonly
              is-link
              name="起始日期"
              label="起始日期"
              @click="dateType = 0; showDatePicker = true"
            />
            <van-field
              v-model="datePickerEndDateToString"
              readonly
              is-link
              name="截止日期"
              label="截止日期"
              @click="dateType = 1; showDatePicker = true"
            />
          </template>
        </template>
      </van-cell-group>

      <van-popup v-model:show="showDatePicker" round position="bottom">
        <van-datetime-picker
          v-model="[datePickerStartDate,datePickerEndDate][dateType]"
          title="选择日期"
          type="date"
          :min-date="currentRange[0]"
          :max-date="currentRange[1]"
          :formatter="formatterDate"
          @confirm="onConfirmDate"
        />
      </van-popup>

      <div style="margin: 16px;">
        <van-button square block type="primary" :disabled="!isFilled" native-type="submit">提交</van-button>
      </div>
      <div class="auth-logo">
        <van-image :src="getImageUrl('auth-logo')">
          <template v-slot:error>加载失败</template>
        </van-image>
      </div>
    </van-form>
  </div>
  <van-action-sheet v-model:show="isActionSheetShow" title="认证授权">
    <div class="content">
      <div class="upper-tips" v-html="beforeAuth"></div>
      <template v-if="!([16, 64].includes(mode))">
        <div class="center-tips">本次认证需要通过人脸识别验证身份信息</div>
      </template>
      <van-divider />
      <div class="lower-tips">
        <van-checkbox v-model="isChecked" shape="square"></van-checkbox>
        <p class="text" @click="isChecked=!isChecked">
          <span v-html="beforeProtocol"></span>
          查看
          <a class="service-link" @click.stop="toProtocols" v-html="protocols.name"></a>
        </p>
      </div>
      <div class="btn-group">
        <van-button block square type="primary" @click="toAuthorize">确认授权</van-button>
      </div>
    </div>
  </van-action-sheet>
</template>

<script setup lang="ts">
import { checkIdentityInfo, getBeforeAuthTips, alipayAuthInit, alipayAuthQuery} from '@/api/auth/index'
import { Toast, Dialog } from 'vant'
import { hideCode, getImageUrl } from '@/utils/index'
import { loadEnv, formatDate } from '@/utils/index'

const backPageUrl = ref('') // 用户关闭认证授权面板，返回的url地址
const fullName = ref('') // 用户名
const fullNameFormat = ref('')
const isFilledFullName = ref(false) // 是否在第三方页面已经录入姓名
const idNum = ref('') // 证件号码
const idNumFormat = ref('')
const isFilledIdNum = ref(false) // 是否在第三方页面已经录入证件号码
const isFilledExpirationDate = ref(false) // 是否在第三方页面已经录入证件有效期

const startDateRange = [new Date(2000, 0, 1), new Date()]
const endDateRange = [new Date(), new Date(2050, 11, 31)]
const expirationDateMode = [16, 18] // 16，18模式需要提供证件有效期
const dateType = ref(0) // 日期类型：0-起始日期；1-截止日期
const showDatePicker = ref(false) // 日期选择器弹出层
const startDate = ref('') // 单纯用于展示的证件有效期起始日期
const endDate = ref('') // 单纯用于展示的证件有效期截止日期
const datePickerStartDate = ref(new Date(2000, 0, 1)) // 日期选择器选中的起始日期
const datePickerEndDate = ref(new Date(2030, 0, 1)) // 日期选择器选中的截止日期
// 格式化日期
const datePickerStartDateToString = computed(() => datePickerStartDate.value.toLocaleDateString())
const datePickerEndDateToString = computed(() => datePickerEndDate.value.toLocaleDateString())

const isActionSheetShow = ref(false) // 控制认证授权底部弹出框显示隐藏
const isChecked = ref(false) // 是否同意身份核验
const currentRange = computed(() => [startDateRange, endDateRange][dateType.value])
const isFilled = computed(() => fullName.value && idNum.value) // 用户名和证件号都填好才能提交


let url = window.location.href
if (!url.includes('&')){
  Dialog.alert({
    message: '路径参数有错，请重新获取'
  })
  setTimeout(() => {
    window.history.go(-1)
  }, 1500)
}
const query = url.substring(url.indexOf('?') + 1)
const urlParams = new URLSearchParams(query)
const loginToken = urlParams.get('loginToken') || ''
const certToken = urlParams.get('certToken') || ''

const mode = ref(0) // 认证模式

const beforeAuth = ref('')
const beforeProtocol = ref('')
const protocols = ref({url: '', name: ''})

const certifyUrl = ref('')
const certifyId = ref('')

onMounted(async() => {
  // 校验certToken 或 userId 是否有绑定用户的信息
  let { data: identityInfo } = await checkIdentityInfo({ loginToken, certToken })

  mode.value = identityInfo.mode
  // 用户状态（0：已登录 1：certToken中包含身份信息 2：certToken中不包含身份信息）
  backPageUrl.value = identityInfo.foreBackUrl
  if (identityInfo.userStatus!==2){
    fullName.value = identityInfo.fullName
    fullNameFormat.value = hideCode(fullName.value, 0, fullName.value.length - 1) // 姓名脱敏处理
    idNum.value = identityInfo.idNum
    idNumFormat.value = hideCode(idNum.value, 3, 2) // 证件号码脱敏处理

    if (expirationDateMode.includes(mode.value)){ // 如果是16，18模式，需要反显或录入证件有效期
      let {idStartDate, idEndDate} = identityInfo
      if (idStartDate && idEndDate) {
        startDate.value = identityInfo.idStartDate
        endDate.value = identityInfo.idEndDate
        isFilledExpirationDate.value = true
      }
    }

    isFilledFullName.value = isFilledIdNum.value = true
    if (fullName.value && idNum.value){
      let {idStartDate, idEndDate} = identityInfo
      if (expirationDateMode.includes(mode.value) && (!idStartDate || !idEndDate)) return
      else isActionSheetShow.value = true
    }
  }

  // 根据certToken获取认证前提示
  let {data: authTips} = await getBeforeAuthTips({certToken})
  beforeAuth.value = authTips.beforeAuth
  beforeProtocol.value = authTips.beforeProtocol
  protocols.value = JSON.parse(authTips.protocols)[0]

})

// 选择日期
const onConfirmDate = (value:Date) => {
  if (!dateType.value) datePickerStartDate.value = value
  else datePickerEndDate.value = value
  showDatePicker.value = false
}

const { VITE_SERVICE_AGREEMENT } = loadEnv()
const toProtocols = () => {
  window.location.href = protocols.value.url || VITE_SERVICE_AGREEMENT // 服务协议地址
}

// 取消授权
const toCancelAuthorize = () => {
  isChecked.value = false
  Toast('用户取消认证')
  setTimeout(() => {
    window.location.replace(backPageUrl.value)
  }, 1000)
}

const handleSubmit = () => {
  isActionSheetShow.value = true
}

type authorizeParams = {
  loginToken: string
  certToken: string
  fullName: string
  idNum: string
  mode?: number
  idStartDate?: string
  idEndDate?: string
}

const toAuthorize = async() => {
  if (!isChecked.value) return Toast('请同意《服务协议》')
  if ([16, 64].includes(mode.value)) { // 16，64模式无需走活检流程
    let params:authorizeParams = {
      loginToken,
      certToken,
      fullName: fullName.value,
      idNum: idNum.value,
      mode: mode.value,
    }
    if (expirationDateMode.includes(mode.value)){
      params.idStartDate = isFilledExpirationDate.value ? startDate.value : formatDate(datePickerStartDate.value)
      params.idEndDate = isFilledExpirationDate.value ? endDate.value : formatDate(datePickerEndDate.value)
    }

    followUpEvent(params)
  } else {
    // 获取调起支付宝刷脸url
    let params:authorizeParams = {
      loginToken,
      certToken,
      fullName: fullName.value,
      idNum: idNum.value
    }
    if (expirationDateMode.includes(mode.value)){
      params.idStartDate = isFilledExpirationDate.value ? startDate.value : formatDate(datePickerStartDate.value)
      params.idEndDate = isFilledExpirationDate.value ? endDate.value : formatDate(datePickerEndDate.value)
    }

    let {data} = await alipayAuthInit(params)
    certifyId.value = data.certifyId || ''
    certifyUrl.value = data.certifyUrl || ''
    isActionSheetShow.value = false
    isChecked.value = false
    AuthProcess(certifyId.value, certifyUrl.value)
  }
}

// 身份认证文档
// https://opendocs.alipay.com/mini/02osif
const AuthProcess = (certifyId:string, url:string) => {
  /**
    * 支付宝H5页面接入逻辑代码 start
   */
  function ready( callback:()=>void ) {
    // 如果jsbridge已经注入则直接调用
    if ( window.AlipayJSBridge ) {
      callback && callback()
    } else {
      // 如果没有注入则监听注入的事件
      document.addEventListener( 'AlipayJSBridgeReady', callback, false )
    }
  }
  // startBizService 接口仅在支付宝 10.0.15 及以上支持
  // 需要接入者自行做下版本兼容处理 ！！
  function startAPVerify ( options:object, callback:(verifyResult:object)=>Promise<void> ) {
    window.AlipayJSBridge.call( 'startBizService', {
      name: 'open-certify',
      param: JSON.stringify( options ),
    }, callback )
  }
  /**
  * 唤起认证流程
  * 参数: certifyId、url 需要通过支付宝 openapi 开放平台网关接口获取
  * 详细说明可查看文档下方的参数说明
  **/
  ready ( function () {
    // 需要确保在 AlipayJSBridge ready 之后才调用
    startAPVerify ({
      certifyId,
      url,
    }, async (verifyResult: any ) => {
      if (!verifyResult.result){
        toCancelAuthorize()
      } else {
        // 认证结果回调触发, 以下处理逻辑为示例代码，开发者可根据自身业务特性来自行处理
        // 验证成功，接入方在此处处理后续的业务逻辑
        Toast(verifyResult.resultStatus === '9000'?'认证通过':'认证失败')
        let params = {
          loginToken,
          certToken,
          fullName: fullName.value,
          idNum: idNum.value,
          mode: mode.value,
          certifyId: verifyResult.result.certifyId
        }
        followUpEvent(params)
      }
    })
  })
  /**
    * 支付宝H5页面接入逻辑代码 end
   */
}

// 获取认证结果，并根据foreBackUrl返回
const followUpEvent = async (params: object) => {
  let { data } = await alipayAuthQuery(params)
  setTimeout(() => {
    window.location.replace(data.foreBackUrl)
  }, 1000)
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
.content{
  margin: 20px;
  .upper-tips{
    line-height: 1.2;
    margin: 20px 0;
  }
  .center-tips{
    line-height: bold;
  }
  .lower-tips{
    font-size: 14px;
    display: flex;
    margin-bottom: 20px;
    .text{
      font-size: 12px;
      color: #999;
      flex: 1;
      margin: 0;
      margin-left: 10px;
    }
    .service-link{
      color: #0A7AEE;
    }
  }
}
.auth-logo{
  width: 50%;
  margin: 0 auto;
  margin-top: 40px;
}
.btn-group{
  display: flex;
  justify-content: space-around;
  .authorize-btn{
    flex: 1;
  }
  .to-authorize-btn{
    margin-left: 20px;
    opacity: .5;
    &.active{
      opacity: 1;
    }
  }
  .to-cancel-authorize-btn{
    margin-right: 20px;
  }
}
.van-toast{
  background-color: #000;
}
</style>