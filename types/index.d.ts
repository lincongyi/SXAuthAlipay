declare interface Window {
  AlipayJSBridge: any
}

declare const my: object

declare const wx: {
  miniProgram: object
}

declare const dd: {
  getAuthCode: ({ corpId }: { corpId?: string }) => Promise
  getConfig: () => Promise
}

interface ImportMetaEnv extends ViteEnv {
  __: unknown
}

declare interface ViteEnv {
  MODE: 'development' | 'production'
  VITE_AUTH_BASE_URL: string
  VITE_PROXY_AUTH_BASE_URL?: string
  VITE_DEMO_BASE_URL: string
  VITE_PROXY_DEMO_BASE_URL?: string
  VITE_V3_BASE_URL: string
  VITE_PROXY_V3_BASE_URL?: string
  VITE_CLIENT_ID: 'dabby_dev_al'
  VITE_CLIENT_SECRET: 'dabby_dev_al'
  VITE_SERVICE_AGREEMENT: string
}

declare type TResponse = {
  retCode: number
  retMessage: string
}

declare type TV3Response = {
  code: number
  data: string
  msg: string
  requestId: string
  sign: string
  timestamp: number
}
