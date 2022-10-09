<template>
  <div class="container">
    <div class="title">
      <van-image
        class="logo"
        width="40px"
        height="40px"
        fit="contain"
        :src="authTaskLogo"
      />
      陕西实人认证
    </div>
    <div class="content">
      <van-image
        width="280px"
        height="280px"
        fit="contain"
        :src="qrcodeImage"
      />
      <div class="refresh" @click="handleRefresh">
        <van-icon name="replay" />
        刷新or生成二维码
      </div>
      <van-radio-group v-model="authMode.mode" direction="horizontal" @change="refreshQrcode">
        <van-radio name="64">实名</van-radio>
        <van-radio name="66">实名+实人</van-radio>
      </van-radio-group>
      <div class="tips">请使用陕西公民实人认证小程序扫码认证</div>
    </div>
  </div>
  <van-overlay :show="isOverlayShow">
    <div class="overlay-content">
      <div class="overlay-container">
        <div class="section">
          <div class="card">
            <div class="card-title">身份信息</div>
            <div class="cell mgt10">
              <div class="cell-title">照片：</div>
              <div class="cell-value">
                <van-image
                  width="120px"
                  height="160px"
                  fit="contain"
                  :src="userImage"
                />
              </div>
            </div>
            <div class="cell">
              <div class="cell-title">姓名：</div>
              <div class="cell-value">{{userData.name}}</div>
            </div>
            <div class="cell">
              <div class="cell-title">身份号码：</div>
              <div class="cell-value">{{userData.idNum}}</div>
            </div>
            <div class="cell">
              <div class="cell-title">警号/工号：</div>
              <div class="cell-value"></div>
            </div>
            <div class="cell">
              <div class="cell-title">单位：</div>
              <div class="cell-value"></div>
            </div>
            <div class="cell">
              <div class="cell-title">手机号：</div>
              <div class="cell-value">{{userData.phoneNum}}</div>
            </div>
            <div class="cell">
              <div class="cell-title">网证标识：</div>
              <div class="cell-value"></div>
            </div>
          </div>
        </div>

        <div class="section">
          <div class="card">
            <div class="card-title">认证信息</div>
            <div class="cell">
              <div class="cell-title">认证平台：</div>
              <div class="cell-value">陕西省实人认证平台</div>
            </div>
            <div class="cell">
              <div class="cell-title">认证模式：</div>
              <div class="cell-value">{{userData.mode}}</div>
            </div>
            <div class="cell">
              <div class="cell-title">认证类型：</div>
              <div class="cell-value">{{userData.authType}}</div>
            </div>
            <div class="cell">
              <div class="cell-title">认证等级：</div>
              <div class="cell-value">{{authLevel}}</div>
            </div>
          </div>
          <van-divider />

          <div class="card">
            <div class="card-title">终端信息</div>
            <div class="cell">
              <div class="cell-title">终端系统/版本：</div>
              <div class="cell-value">{{`${browser}/${version}`}}</div>
            </div>
            <div class="cell">
              <div class="cell-title">终端单位：</div>
              <div class="cell-value">{{terminalUnit}}</div>
            </div>
            <div class="cell">
              <div class="cell-title">终端Mac地址：</div>
              <div class="cell-value"></div>
            </div>
            <div class="cell">
              <div class="cell-title">终端ip地址：</div>
              <div class="cell-value"></div>
            </div>
          </div>
          <van-divider />

          <div class="card">
            <div class="card-title">手机信息</div>
            <div class="cell">
              <div class="cell-title">设备ID(IMEI/UUID)：</div>
              <div class="cell-value"></div>
            </div>
            <div class="cell">
              <div class="cell-title">手机厂家/型号：</div>
              <div class="cell-value"></div>
            </div>
            <div class="cell">
              <div class="cell-title">系统类别/版本：</div>
              <div class="cell-value"></div>
            </div>
            <div class="cell">
              <div class="cell-title">上网方式：</div>
              <div class="cell-value"></div>
            </div>
            <div class="cell">
              <div class="cell-title">认证软件/版本：</div>
              <div class="cell-value"></div>
            </div>
          </div>
          <van-divider />

          <div class="card">
            <div class="card-title">时空信息</div>
            <div class="cell">
              <div class="cell-title">认证时间：</div>
              <div class="cell-value">{{userData.time}}</div>
            </div>
            <div class="cell">
              <div class="cell-title">地理位置：</div>
              <div class="cell-value"></div>
            </div>
          </div>
        </div>
      </div>
      <van-divider />
      <div class="btn-wrap">
        <van-button type="primary" block plain @click="isOverlayShow = false">关闭</van-button>
      </div>
    </div>
  </van-overlay>
</template>

<script setup lang="ts">
import './index.scss'
import { getCertToken, getCertTokenImg } from '@/api/authTask'
import { Toast } from 'vant'
import { getExploreInfo } from './index'
import authTaskLogo from '@images/auth-task-logo.png'

const REFRESHTIME = 3 // 限制刷新二维码时间间隔
const isForbidden = ref(false) // 禁止频繁请求接口

const certToken = ref('')
const qrcodeImage = ref('') // 二维码图片

const isOverlayShow = ref(false)
const userImage = ref('') // 用户认证图片

const terminalUnit = '大白互联网科技有限公司'

type TUserData = {
  name?:string;
  idNum?:string;
  mode?:string;
  time?: string;
  authType?: string;
  phoneNum?: string;
}
let userData = reactive<TUserData>({}) // 接收后端返回的用户信息

let authMode = reactive({
  certAnnexType: 0,
  mode: '66'
})

const authLevelList = [ // 认证模式对应的认证等级
  {mode: 64, level: 'D'},
  {mode: 66, level: 'C'}
] as const

const authLevel = computed(() => {
  let mode = Number(authMode.mode)
  let result = authLevelList.find((item) => item.mode === mode)
  return result?.level
})

let {browser, version} = getExploreInfo()

// 获取二维码
const handleGetCertToken = async (cb?: ()=>void) => {
  let result = await getCertToken({
    ...authMode,
    businessExtraInfo: JSON.stringify({
      terminalUnit,
      system: `${browser}/${version}`
    })
  })
  let {img, cert_token} = result.data
  certToken.value = cert_token
  qrcodeImage.value = `data:image/png;base64,${img}`
  getUserData(cert_token)
  cb && cb()
}

// webSocket监听用户是否有认证结果返回
let timer:any // 定时器
let ws:WebSocket // webSocket
const EXPIRETIME = 30 // 后端40s内没接收到任何数据，自动断开链接

const getUserData = (cert_token:string) => {
  const webSocketUrl = 'wss://sfrz.shxga.gov.cn/socket/conn'
  ws = new WebSocket(webSocketUrl)
  ws.onopen = () => {
    ws.send(JSON.stringify({
      flag: 'getCertCode',
      cert_token
    }))
    // 保持webSocket的连接
    timer = setInterval(() => {
      ws.send('{}')
    }, EXPIRETIME*1000)
  }

  ws.onmessage = async ({data}) => {
    let dataParse = JSON.parse(data)

    userData.name = dataParse.full_name // 姓名
    userData.idNum = dataParse.id_no // 身份证号码脱敏
    userData.mode = dataParse.mode // 认证模式
    userData.time = dataParse.createdTime // 认证时间


    let certToken = dataParse.cert_token

    interface IGetCertTokenImg {
      authInfo: {
        authType: string;
      };
      img:string;
      userInfo: {
        phoneNum: string
      }
    }
    let result = await getCertTokenImg({certToken})
    let {authInfo, img, userInfo} = result as unknown as IGetCertTokenImg

    userData.authType = authInfo?.authType // 认证方式
    userData.phoneNum = userInfo?.phoneNum // 手机号码
    userImage.value = `data:image/png;base64,${img}`

    isOverlayShow.value = true
  }

  ws.onclose = () => {
    clearInterval(timer)
    timer = null
  }
}

// radio change
const refreshQrcode = () => {
  isForbidden.value = true
  handleGetCertToken(() => {
    setTimeout(() => {
      isForbidden.value = false
    }, REFRESHTIME*1000)
  })
}

// 刷新二维码
const handleRefresh = () => {
  if (isForbidden.value) {
    return Toast({
      message: '请勿频繁刷新二维码',
      forbidClick: true,
    })
  }
  refreshQrcode()
}

onMounted(() => {
  handleGetCertToken()
})
onUnmounted(() => {
  ws.close()
})
</script>

<style lang="scss">
#app {
  height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding-top: 20px;
  box-sizing: border-box;
  background: linear-gradient(160deg, rgba(0,255,213,.5) 20%,rgba(0,140,255,.5) 80%);
}
</style>