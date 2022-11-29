window.DEV = {
  // uploadUrl: 'https://videoliveness.cloudwalk.com:20046/liveness/action/video', // 上传视频的URL
  uploadUrl: 'https://videoliveness.cloudwalk.com:20046/liveness/silence/video', // 上传视频的URL
  actionNum: 2, // 动作个数 1-3
  uploadParameter: {
    // 上传的参数配置
    app_id: 'system',
    app_secret: '12345'
  },
  successUrl: encodeURIComponent('/'), // 成功的回调地址, 可通过url传参方式传入, url传参方式优先级高于配置文件
  successDelayTime: 2000, // 检测成功之后延迟多久跳转
  failedUrl: encodeURIComponent('/'), // 失败的回调地址, 可通过url传参方式传入, url传参方式优先级高于配置文件
  returnUrl: encodeURIComponent('/'), // 返回的URL, 可通过url传参方式传入, url传参方式优先级高于配置文件
  recordTime: 5000, // 默认5000毫秒, 建议大于1000 小于10000
  errorTelphone: '123456' // 出问题的联系电话
}

window.env = 'DEV' // 当前的环境
window.config = window[window.env || 'DEV']
