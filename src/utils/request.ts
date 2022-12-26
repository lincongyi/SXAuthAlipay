import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { Dialog } from 'vant'

// 创建axios实例
const service:AxiosInstance = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: `${import.meta.env.VITE_AUTH_BASE_URL}`,
  // 超时
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 响应拦截器
service.interceptors.response.use(
  (res: AxiosResponse<TResponse>) => {
    const {retCode} = res.data
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
  (error:AxiosError) => {
    Dialog.alert({
      message: error.message
    })
    return Promise.reject(error)
  }
)

// 创建axios实例
const v3Service:AxiosInstance = axios.create({
  // axios中请求配置有baseURL选项，表示请求URL公共部分
  baseURL: `${import.meta.env.VITE_AUTH_BASE_URL}`,
  // 超时
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 响应拦截器
v3Service.interceptors.response.use(
  (res: AxiosResponse<TV3Response>) => {
    const {code} = res.data
    if (code !== 200) {
      if (!code) return res.data
      Dialog.alert({
        message: res.data.msg
      })
      return Promise.reject('error')
    } else {
      return res.data
    }
  },
  (error:AxiosError) => {
    Dialog.alert({
      message: error.message
    })
    return Promise.reject(error)
  }
)

export {service, v3Service }
