"use strict";(self["webpackChunklive_demo"]=self["webpackChunklive_demo"]||[]).push([[98],{6059:function(t,e,i){i.r(e),i.d(e,{default:function(){return W}});var o=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"wrap-top"},[1===t.recordStatus||3===t.recordStatus?e("div",{staticClass:"tip-title"},[t._v("请面向屏幕开始录制视频")]):t._e(),2===t.recordStatus?e("div",{staticClass:"tip-title"}):t._e(),4===t.recordStatus?e("div",{staticClass:"tip-title"},[t._v("正在检测中...")]):t._e(),e("cw-video",{ref:"cwVideoRef",attrs:{showDefaultImg:!t.isOpenVideo,loading:t.loading},scopedSlots:t._u([{key:"imgSlot",fn:function(){return[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpenVideo,expression:"isOpenVideo"}],staticClass:"video-wrap",attrs:{id:"video-box"}},[e("video",{attrs:{id:"videoPlay",playinline:"",autoplay:""}})])]},proxy:!0}])})],1),e("div",{staticClass:"wrap-bottom"},[t.isShowInfo?e("TipInfo"):t._e(),t.isShowBtn?e("div",{staticClass:"op-btn"},[e("CwButton",{attrs:{loading:t.btnLoading},on:{click:t.openCamera}},[t._v("开始录制视频")])],1):t._e()],1),e("CwNativeCameraPopup",{attrs:{titles:t.titles},on:{nativeRecord:t.nativeRecord,cancelClick:t.nativeCancelClick},model:{value:t.showNativeCamera,callback:function(e){t.showNativeCamera=e},expression:"showNativeCamera"}}),e("CwRsultPopup",{on:{reRecord:t.reRecord,cancelClick:t.cancelClick},model:{value:t.showResult,callback:function(e){t.showResult=e},expression:"showResult"}})],1)},s=[];function n(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function a(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,o)}return i}function r(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?a(Object(i),!0).forEach((function(e){n(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}i(3948),i(8862);var c=function(){var t=this,e=t._self._c;return e("van-button",t._g(t._b({staticClass:"cw-button",attrs:{type:"primary",size:"large",color:"linear-gradient(135deg, #4C60BF 0%, #4C60BF 100%)",block:""}},"van-button",t.$attrs,!1),t.$listeners),[t._t("default")],2)},l=[],u={},p=u,d=i(1001),v=(0,d.Z)(p,c,l,!1,null,"a314852e",null),h=v.exports,w=i(338),m=function(){var t=this,e=t._self._c;return e("van-popup",t._g(t._b({staticClass:"cw-popup",attrs:{position:"bottom",round:"","close-on-click-overlay":!1}},"van-popup",t.$attrs,!1),t.$listeners),[e("div",{staticClass:"popup-content"},[e("div",{staticClass:"popup-title"},[t._v("请上传视频")]),e("div",{staticClass:"popup-text"},[t._v("请面向屏幕做以下动作:"+t._s(t.titles))]),e("div",{staticClass:"start-btn"},[e("CwButton",{on:{click:t.nativeRecord}},[t._v("开始录制")])],1),e("div",{staticClass:"cancel-btn",on:{click:function(e){return t.$emit("cancelClick")}}},[t._v("退出")])])])},f=[],C={props:{titles:{type:String,default:""}},components:{CwButton:h},methods:{nativeRecord(){this.$emit("nativeRecord")}}},g=C,b=(0,d.Z)(g,m,f,!1,null,"f9713bf6",null),_=b.exports,S=function(){var t=this,e=t._self._c;return e("van-popup",t._g(t._b({staticClass:"cw-popup",attrs:{position:"bottom",round:"","close-on-click-overlay":!1}},"van-popup",t.$attrs,!1),t.$listeners),[e("div",{staticClass:"popup-content"},[e("div",{staticClass:"popup-title"},[t._v("验证失败")]),e("div",{staticClass:"popup-text"},[t._v("请避免一下问题：")]),e("div",{staticClass:"popup-text"},[t._v("忘记眨眼、遮挡人脸、关照不均、手机摇晃")]),e("div",{staticClass:"popup-text"},[t._v(" 如有疑问，请联系客服 "),e("span",{staticClass:"text-tel"},[t._v(t._s(t.telphone))])]),e("div",{staticClass:"start-btn"},[e("CwButton",{on:{click:t.reRecord}},[t._v("重新录制")])],1),e("div",{staticClass:"cancel-btn",on:{click:function(e){return t.$emit("cancelClick")}}},[t._v("退出")])])])},k=[],y={components:{CwButton:h},data(){return{telphone:""}},mounted(){this.telphone=window.config.errorTelphone},methods:{reRecord(){this.$emit("reRecord")}}},R=y,O=(0,d.Z)(R,S,k,!1,null,"3fb88528",null),x=O.exports,P=i(6265),j=i.n(P),A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"static-tip-warp"},t._l(t.staticTip,(function(i){return e("div",{key:i.text,staticClass:"static-tip"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:i.img}})]),e("div",{staticClass:"text"},[t._v(" "+t._s(i.text)+" ")])])})),0)},B=[],I=i.p+"static/img/tip-screen.80e38ae3.png",N=i.p+"static/img/tip-outline.02999415.png",F=i.p+"static/img/tip-light.52df7583.png",$={data(){return{staticTip:[{img:I,text:"正对屏幕"},{img:N,text:"轮廓清晰"},{img:F,text:"亮度均匀"}]}}},V=$,T=(0,d.Z)(V,A,B,!1,null,"2eb850c1",null),U=T.exports;const E=window.config.uploadUrl,L=window.config.actionNum||2;var M={components:{CwButton:h,CwVideo:w.Z,CwNativeCameraPopup:_,CwRsultPopup:x,TipInfo:U},data(){return{showNativeCamera:!1,showResult:!1,videoInstance:null,isSupport:!0,btnLoading:!1,recordStatus:1,activeActions:[],isUploadFinish:!1,actionsArr:[{title:"眨眨眼",action:"1"},{title:"张张嘴",action:"2"},{title:"摇摇头",action:"5"}]}},computed:{isOpenVideo(){return this.isSupport&&2===this.recordStatus},isShowInfo(){return 1===this.recordStatus||3===this.recordStatus},isShowBtn(){return 1===this.recordStatus||3===this.recordStatus},loading(){return 4===this.recordStatus&&!this.isUploadFinish},titles(){const t=this.activeActions.map((t=>t.title));return t.join("、")},actions(){const t=this.activeActions.map((t=>t.action));return t.join(",")}},mounted(){this.initFs(),this.initVideo(),console.log("my",my);const t=navigator.userAgent;console.log(t)},methods:{initFs(){if(1===L){const t=Math.floor(Math.random()*(this.actionsArr.length-1)+1);this.activeActions=this.actionsArr.filter(((e,i)=>i===t-1))}else if(2===L){const t=Math.floor(Math.random()*(this.actionsArr.length-1)+1);this.activeActions=this.actionsArr.filter(((e,i)=>i!==t-1))}else this.activeActions=[...this.actionsArr]},openCamera(){const t=this;t.isSupport?(t.btnLoading=!0,t.videoInstance.openCamera({onError(){console.warn("不支持"),t.showNativeCamera=!0,t.isSupport=!1,t.recordStatus=3,t.btnLoading=!1},onSuccess(){console.warn("支持"),t.recordStatus=2,t.startCollect(),t.btnLoading=!1}})):t.showNativeCamera=!0},startCollect(){const t=(window.config.recordTime||5e3)/1e3;let e=!0;const i=this;i.videoInstance.startCollect({time:t,timeCallback(o){e&&(e=!1,i.$refs.cwVideoRef.start(t)),console.warn(o),o<=0&&(i.recordStatus=4)}})},initVideo(){this.recordStatus=1;const t=this;this.videoInstance=new CWMediaCollector({webmWasmPath:"./static/webm-wasm.wasm",webmWorkerPath:"./static/webm-worker.js",el:document.getElementById("video-box"),height:480,width:480,autoOpenNativeCamera:!1,mode:1,maxFileSize:10,frameRate:10,isFrontCamera:!0,mimeType:"video/webm;codecs=h264",onInitSuccess(e){20002===e.code?t.isSupport=!1:t.isSupport=!0},onSuccess:function(e){console.log("recordingEnd==",e),2e4===e.code?(console.log("录制结束了————————"),e.data?(t.postBlob(e.data),console.warn("录取的数据",e.data),t.recordStatus=4,t.showNativeCamera=!1):(console.warn("录制的数据为0"),t.showResult=!0)):t.showResult=!0},onError:function(e){console.log("🚀 ~ html ~ initVideo ~ res",e,e.code,"--",e.message),console.log(e.message),t.showResult=!0}})},setResult(t){localStorage.setItem("result",JSON.stringify(t))},postBlob(t){const e=this;CWMediaCollector.blobToBase64(t,(function(t){console.warn("录制的文件",t),console.warn("文件大小Byte",t.length),e.checkFace(t,(function(i){i.isAlive&&i.image?(e.setResult({result:!0,size:t.length,image:"data:image/jpeg;base64,"+i.image,res:i}),e.$router.push({path:"/result"})):(i.isAlive||0!==i.result)&&(i.isAlive||0===i.result)||(e.showResult=!0)}))}))},checkFace(t,e){const i=r(r({},window.config.uploadParameter||{}),{},{video:t,action:0});this.isUploadFinish=!1,j().post(E,i).then((t=>{200===t.status?e(t.data):console.warn("失败status !== 200:",t.status)})).catch((t=>{console.warn("请求出错:",t)})).finally((()=>{this.isUploadFinish=!0}))},reRecord(){console.warn("重新录制功能"),this.showResult=!1,this.$refs.cwVideoRef.init(),this.initFs(),this.initVideo()},nativeRecord(){this.videoInstance&&this.videoInstance.openNativeCamera()},onClickLeft(){console.warn("点击了返回键盘");const t=window.config.returnUrl;location.href=t},cancelClick(){console.warn("点击了失败的退出功能");const t=window.config.failedUrl;location.href=t},nativeCancelClick(){const t=window.config.returnUrl;location.href=t}}},Z=M,D=(0,d.Z)(Z,o,s,!1,null,"396b911f",null),W=D.exports}}]);
//# sourceMappingURL=98.bc5de13d.js.map