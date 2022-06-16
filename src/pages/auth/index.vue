<template>
  <!-- <h1>PAGE AUTH</h1> -->
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
            clearable
            maxlength="18"
            :rules="[{ required: true, message: '请填写用户名' }]"
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
      </van-cell-group>
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
        <van-button square plain type="primary" class="authorize-btn to-cancel-authorize-btn" @click="toCancelAuthorize">取消授权11</van-button>
        <van-button square type="primary" :class="['to-authorize-btn', 'authorize-btn', {'active':isChecked}]" @click="toAuthorize">确认授权22</van-button>
      </div>
    </div>
  </van-action-sheet>
</template>

<script setup>
import { checkIdentityInfo, getBeforeAuthTips, alipayAuthInit, alipayAuthQuery} from '@/api/auth/index'
import { Toast, Dialog } from 'vant'
import { hideCode, getImageUrl } from '@/utils/index'

const backPageUrl = ref('') // 用户关闭认证授权面板，返回的url地址
const fullName = ref('') // 用户名
const fullNameFormat = ref('')
const isFilledFullName = ref(false) // 是否在第三方页面已经录入姓名
const idNum = ref('') // 证件号码
const isFilledIdNum = ref(false) // 是否在第三方页面已经录入证件号码
const idNumFormat = ref('')

const isActionSheetShow = ref(false) // 控制认证授权底部弹出框显示隐藏
const isChecked = ref(false) // 是否同意身份核验
const isFilled = computed(() => fullName.value && idNum.value) // 用户名和证件号都填好才能提交

const query = window.location.href.substring(window.location.href.indexOf('?')+1)
if (!query.includes('&')){
  Dialog.alert({
    message: '路径参数有错，请重新获取'
  })
  setTimeout(() => {
    window.history.go(-1)
  }, 1500)
}

const queryArr = query.split('&')
const loginToken = queryArr[0].replace(/loginToken=/g, '')
const certToken = queryArr[1].replace(/certToken=/g, '')

const beforeAuth = ref('')
const beforeProtocol = ref('')
const protocols = ref({})

const certifyUrl = ref('')
const certifyId = ref('')

onMounted(async() => {
  // 校验certToken 或 userId 是否有绑定用户的信息
  let {data: identityInfo} = await checkIdentityInfo({loginToken, certToken})
  // 用户状态（0：已登录 1：certToken中包含身份信息 2：certToken中不包含身份信息）
  backPageUrl.value = identityInfo.foreBackUrl
  if (identityInfo.userStatus!==2){
    fullName.value = identityInfo.fullName
    fullNameFormat.value = hideCode(fullName.value, 0, fullName.value.length - 1) // 姓名脱敏
    idNum.value = identityInfo.idNum
    idNumFormat.value = hideCode(idNum.value, 3, 2) // 证件号码脱敏处理
    isFilledFullName.value = isFilledIdNum.value = true
    if (fullName.value && idNum.value) isActionSheetShow.value = true
  }

  // 根据certToken获取认证前提示
  let {data: authTips} = await getBeforeAuthTips({certToken})
  beforeAuth.value = authTips.beforeAuth
  beforeProtocol.value = authTips.beforeProtocol
  protocols.value = JSON.parse(authTips.protocols)[0]

})

const serviceAgreement = import.meta.env.VITE_SERVICE_AGREEMENT // 服务协议地址
const toProtocols = () => {
  window.location.href = protocols.value.url || serviceAgreement
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

const toAuthorize = async() => {
  if (!isChecked.value) return Toast('请同意《服务协议》')
  // 获取调起支付宝刷脸url
  let {data} = await alipayAuthInit({certToken, fullName: fullName.value, idNum: idNum.value})
  certifyId.value = data.certifyId
  certifyUrl.value = data.certifyUrl
  isActionSheetShow.value = false
  isChecked.value = false
  AuthProcess(certifyId.value, certifyUrl.value)
}

// 由于业务逻辑改动。这块暂时用不到了。
const AuthProcess = (certifyId, url) => {
  /**
    * 支付宝H5页面接入逻辑代码 start
   */
  console.log(window.AlipayJSBridge)
  function ready( callback ) {
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
  function startAPVerify ( options, callback ) {
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
  // ready ( function () {
  //   // 需要确保在 AlipayJSBridge ready 之后才调用
  //   startAPVerify ({
  //     certifyId,
  //     url,
  //   }, async ( verifyResult ) => {
  //     if (!verifyResult.result){
  //       toCancelAuthorize()
  //     } else {
  //       // 认证结果回调触发, 以下处理逻辑为示例代码，开发者可根据自身业务特性来自行处理
  //       // 验证成功，接入方在此处处理后续的业务逻辑
  //       Toast(verifyResult.resultStatus === '9000'?'认证通过':'认证失败')
  //       let {data} = await alipayAuthQuery({loginToken, certToken, fullName: fullName.value, idNum: idNum.value, certifyId: verifyResult.result.certifyId})
  //       setTimeout(() => {
  //         window.location.replace(data.foreBackUrl)
  //       }, 1000)
  //     }
  //   })
  // })
  /**
    * 支付宝H5页面接入逻辑代码 end
   */
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
    margin: 20px 0;
  }
  .lower-tips{
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
  text-align: center;
  margin-top: 40px;
  transform: scale(.8)
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

</style>