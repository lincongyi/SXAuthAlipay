import axios from 'axios'
import { Dialog } from 'vant'

axios.defaults.headers['Content-Type'] = 'application/json;charset=utf-8'
// 创建axios实例
const service = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: `${import.meta.env.VITE_AUTH_BASE_URL}`,
  // baseURL: '/bpi',
  // 超时
  timeout: 10000
})

// 响应拦截器
service.interceptors.response.use(
  (res) => {
    const retCode = res.data.retCode
    if (retCode !== 200) {
      if (!retCode) return res.data
      Dialog.alert({
        message: res.data.retMessage
      })
      return Promise.reject('error')
    } else {
      return res.data
    }
  },
  (error) => {
    console.log(error)
    Dialog.alert({
      message: error.message
    })
    return Promise.reject(error)
  }
)

export default service
