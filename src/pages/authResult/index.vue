<template>
  <div class="container">
    <div class="auth-result">
      <van-image class="result-image" :src="resultList[authResult].resultImage">
        <template v-slot:error>加载失败</template>
      </van-image>
      <div class="description">{{resultList[authResult].resultTxt}}</div>
    </div>
    <template v-for="(item,index) in authResultStep" :key="index">
      <div :class="['step',['failed','successful'][item.value]]">{{item.key}}</div>
    </template>
    <div class="btn-wrap">
      <van-button type="primary" block @click="handleBack">返回</van-button>
    </div>
  </div>
</template>

<script setup>
import { Dialog } from 'vant'
import certificationSuccessfulImage from '@images/certification-successful.png'
import certificationFailedImage from '@images/certification-failed.png'

// authRes:00XX
// 第一字节：姓名，身份号码，有效期等文本信息比对结果
// 第二字节：人像比对结果
const modeList = [
  {
    mode: [16, 64], // 16,64模式只校验1项
    type: 1
  },
  {
    mode: [18, 66], // 18,66模式校验前2项
    type: 2,
  }
]
const resultList = [
  {
    resultTxt: '认证成功',
    resultImage: certificationSuccessfulImage
  },
  {
    resultTxt: '认证失败',
    resultImage: certificationFailedImage
  },
]
const authMode = ref(0) // 认证模式
const authData = ref('') // 认证结果
// 每项认证步骤的结果
const authResultStep = computed(() => {
  // 认证结果：0-失败；1-成功；2-未校验
  let result = [
    {key: '实名校验', value: 2},
    {key: '人像比对', value: 2}
  ]
  if (authMode.value){
    let {type} = modeList.find((item) => item.mode.includes(authMode.value))
    let data = authData.value.slice(0, type)
    for (let i=0;i<data.length;i++){
      let value = Number(data[i])===0 ? 1:0
      result[i].value = value
    }
  }
  return result
})

// 认证结果：0-失败；1-成功；
const authResult = computed(() => {
  if (!authData.value){
    return 0
  } else {
    let item = authResultStep.value.find((item) => !item.value)
    return item ? 1:0
  }
})

const foreBackUrl = ref('') // 第三方h5页面url

// 返回第三方h5页面
const handleBack = () => {
  if (!foreBackUrl.value) return
  // window.location.href = foreBackUrl.value
  // eslint-disable-next-line no-undef
  AlipayJSBridge.call('closeWebview')
}

onMounted(() => {
  let query = window.location.href.substring(window.location.href.indexOf('?')+1)
  if (!query.includes('&')) return Dialog.alert({ message: '路径参数有错，请重新获取' })

  const authParams = query.substring(0, query.indexOf('&foreBackUrl'))
  const authParamsArr = authParams.split('&')
  authMode.value = Number(authParamsArr[0].replace(/mode=/g, ''))
  authData.value = authParamsArr[1].replace(/resStr=/g, '')

  foreBackUrl.value = query.substring(query.indexOf('foreBackUrl')).replace(/foreBackUrl=/g, '')
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

.auth-result {
  margin: 40px 0;
  text-align: center;

  .result-image {
    margin-bottom: 18px;
    width: 120px;
    height: 120px;
  }

  .description {
    font-size: 40px;
    font-weight: bold;
    color: #333;
  }
}

.step {
  margin-bottom: 20px;
  text-align: center;

  &::before {
    display: inline-block;
    margin-right: 8px;
    width: 28px;
    height: 28px;
    background-size: contain;
    content: "";
    vertical-align: middle;
    background-image: url("https://s2.loli.net/2022/06/01/lXRhVtQTnGCf9Mq.png");
    background-repeat: no-repeat;
  }

  &.failed::before {
    background-image: url("https://s2.loli.net/2022/06/01/7nsJ8BPvbpg46cI.png");
  }

  &.successful::before {
    background-image: url("https://s2.loli.net/2022/06/01/VawqsbHc6RhBAmT.png");
  }
}

.btn-wrap {
  margin: 60px 40px;
}

</style>