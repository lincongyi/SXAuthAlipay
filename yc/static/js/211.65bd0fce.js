(self["webpackChunklive_demo"]=self["webpackChunklive_demo"]||[]).push([[211],{6987:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return z}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"wrap-top"},[1===t.recordStatus||3===t.recordStatus?e("div",{staticClass:"tip-title"},[t._v("请面向屏幕开始录制视频")]):t._e(),2===t.recordStatus?e("div",{staticClass:"tip-title"}):t._e(),4===t.recordStatus?e("div",{staticClass:"tip-title"},[t._v("正在检测中...")]):t._e(),e("cw-video",{ref:"cwVideoRef",attrs:{showDefaultImg:!t.isOpenVideo,loading:t.loading},scopedSlots:t._u([{key:"imgSlot",fn:function(){return[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpenVideo,expression:"isOpenVideo"}],staticClass:"video-wrap",attrs:{id:"video-box"}},[e("video",{attrs:{id:"videoPlay",playinline:"",autoplay:""}})])]},proxy:!0}])})],1),e("div",{staticClass:"wrap-bottom"},[t.isShowInfo?e("TipInfo"):t._e(),t.isShowBtn?e("div",{staticClass:"op-btn"},[e("CwButton",{attrs:{loading:t.btnLoading},on:{click:t.openCamera}},[t._v("开始录制视频")])],1):t._e()],1),e("CwNativeCameraPopup",{attrs:{titles:t.titles},on:{nativeRecord:t.nativeRecord,cancelClick:t.nativeCancelClick},model:{value:t.showNativeCamera,callback:function(e){t.showNativeCamera=e},expression:"showNativeCamera"}}),e("CwRsultPopup",{on:{reRecord:t.reRecord,cancelClick:t.cancelClick},model:{value:t.showResult,callback:function(e){t.showResult=e},expression:"showResult"}})],1)},o=[];function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}n(3948),n(8862),n(1637);var c=function(){var t=this,e=t._self._c;return e("van-button",t._g(t._b({staticClass:"cw-button",attrs:{type:"primary",size:"large",color:"linear-gradient(135deg, #4C60BF 0%, #4C60BF 100%)",block:""}},"van-button",t.$attrs,!1),t.$listeners),[t._t("default")],2)},l=[],u={},p=u,h=n(1001),d=(0,h.Z)(p,c,l,!1,null,"a314852e",null),v=d.exports,f=n(338),w=function(){var t=this,e=t._self._c;return e("van-popup",t._g(t._b({staticClass:"cw-popup",attrs:{position:"bottom",round:"","close-on-click-overlay":!1}},"van-popup",t.$attrs,!1),t.$listeners),[e("div",{staticClass:"popup-content"},[e("div",{staticClass:"popup-title"},[t._v("请上传视频")]),e("div",{staticClass:"popup-text"},[t._v("请面向屏幕做以下动作:"+t._s(t.titles))]),e("div",{staticClass:"start-btn"},[e("CwButton",{on:{click:t.nativeRecord}},[t._v("开始录制")])],1),e("div",{staticClass:"cancel-btn",on:{click:function(e){return t.$emit("cancelClick")}}},[t._v("退出")])])])},g=[],m={props:{titles:{type:String,default:""}},components:{CwButton:v},methods:{nativeRecord(){this.$emit("nativeRecord")}}},C=m,b=(0,h.Z)(C,w,g,!1,null,"f9713bf6",null),y=b.exports,k=function(){var t=this,e=t._self._c;return e("van-popup",t._g(t._b({staticClass:"cw-popup",attrs:{position:"bottom",round:"","close-on-click-overlay":!1}},"van-popup",t.$attrs,!1),t.$listeners),[e("div",{staticClass:"popup-content"},[e("div",{staticClass:"popup-title"},[t._v("验证失败")]),e("div",{staticClass:"popup-text"},[t._v("请避免一下问题：")]),e("div",{staticClass:"popup-text"},[t._v("忘记眨眼、遮挡人脸、关照不均、手机摇晃")]),e("div",{staticClass:"popup-text"},[t._v(" 如有疑问，请联系客服 "),e("span",{staticClass:"text-tel"},[t._v(t._s(t.telphone))])]),e("div",{staticClass:"start-btn"},[e("CwButton",{on:{click:t.reRecord}},[t._v("重新录制")])],1),e("div",{staticClass:"cancel-btn",on:{click:function(e){return t.$emit("cancelClick")}}},[t._v("退出")])])])},R=[],S={components:{CwButton:v},data(){return{telphone:""}},mounted(){this.telphone=window.config.errorTelphone},methods:{reRecord(){this.$emit("reRecord")}}},_=S,x=(0,h.Z)(_,k,R,!1,null,"3fb88528",null),O=x.exports,U=n(6265),P=n.n(U),L=function(){var t=this,e=t._self._c;return e("div",{staticClass:"static-tip-warp"},t._l(t.staticTip,(function(n){return e("div",{key:n.text,staticClass:"static-tip"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:n.img}})]),e("div",{staticClass:"text"},[t._v(" "+t._s(n.text)+" ")])])})),0)},j=[],A=n.p+"static/img/tip-screen.80e38ae3.png",I=n.p+"static/img/tip-outline.02999415.png",B=n.p+"static/img/tip-light.52df7583.png",F={data(){return{staticTip:[{img:A,text:"正对屏幕"},{img:I,text:"轮廓清晰"},{img:B,text:"亮度均匀"}]}}},N=F,T=(0,h.Z)(N,L,j,!1,null,"2eb850c1",null),$=T.exports;const E=window.config.uploadUrl,V=window.config.actionNum||2;var D={components:{CwButton:v,CwVideo:f.Z,CwNativeCameraPopup:y,CwRsultPopup:O,TipInfo:$},data(){return{showNativeCamera:!1,showResult:!1,videoInstance:null,isSupport:!0,btnLoading:!1,recordStatus:1,activeActions:[],isUploadFinish:!1,actionsArr:[{title:"眨眨眼",action:"1"},{title:"张张嘴",action:"2"},{title:"摇摇头",action:"5"}]}},computed:{isOpenVideo(){return this.isSupport&&2===this.recordStatus},isShowInfo(){return 1===this.recordStatus||3===this.recordStatus},isShowBtn(){return 1===this.recordStatus||3===this.recordStatus},loading(){return 4===this.recordStatus&&!this.isUploadFinish},titles(){const t=this.activeActions.map((t=>t.title));return t.join("、")},actions(){const t=this.activeActions.map((t=>t.action));return t.join(",")}},mounted(){this.initFs(),this.initVideo(),console.log("my",my);const t=navigator.userAgent;console.log(t)},methods:{initFs(){if(1===V){const t=Math.floor(Math.random()*(this.actionsArr.length-1)+1);this.activeActions=this.actionsArr.filter(((e,n)=>n===t-1))}else if(2===V){const t=Math.floor(Math.random()*(this.actionsArr.length-1)+1);this.activeActions=this.actionsArr.filter(((e,n)=>n!==t-1))}else this.activeActions=[...this.actionsArr]},openCamera(){const t=this;t.isSupport?(t.btnLoading=!0,t.videoInstance.openCamera({onError(){console.warn("不支持"),t.showNativeCamera=!0,t.isSupport=!1,t.recordStatus=3,t.btnLoading=!1},onSuccess(){console.warn("支持"),t.recordStatus=2,t.startCollect(),t.btnLoading=!1}})):t.showNativeCamera=!0},startCollect(){const t=(window.config.recordTime||5e3)/1e3;let e=!0;const n=this;n.videoInstance.startCollect({time:t,timeCallback(i){e&&(e=!1,n.$refs.cwVideoRef.start(t)),console.warn(i),i<=0&&(n.recordStatus=4)}})},initVideo(){this.recordStatus=1;const t=this;this.videoInstance=new CWMediaCollector({webmWasmPath:"./static/webm-wasm.wasm",webmWorkerPath:"./static/webm-worker.js",el:document.getElementById("video-box"),height:480,width:480,autoOpenNativeCamera:!1,mode:1,maxFileSize:10,frameRate:10,isFrontCamera:!0,mimeType:"video/webm;codecs=h264",onInitSuccess(e){20002===e.code?t.isSupport=!1:t.isSupport=!0},onSuccess:function(e){console.log("recordingEnd==",e),2e4===e.code?(console.log("录制结束了————————"),e.data?(t.postBlob(e.data),console.warn("录取的数据",e.data),t.recordStatus=4,t.showNativeCamera=!1):(console.warn("录制的数据为0"),t.showResult=!0)):t.showResult=!0},onError:function(e){console.log("🚀 ~ html ~ initVideo ~ res",e,e.code,"--",e.message),console.log(e.message),t.showResult=!0}})},setResult(t){localStorage.setItem("result",JSON.stringify(t))},postBlob(t){const e=this;CWMediaCollector.blobToBase64(t,(function(t){console.warn("录制的文件",t),console.warn("文件大小Byte",t.length),e.checkFace(t,(function(n){if(n.isAlive&&n.image){const i=window.location.href;console.log("MiniProgramUrl",i);const o=i.substring(i.indexOf("?")+1),s=new URLSearchParams(o),r=s.get("certToken");console.log("certToken",r),e.setResult({result:!0,size:t.length,image:"data:image/jpeg;base64,"+n.image,res:n,certToken:r}),e.$router.push({path:"/result"})}else(n.isAlive||0!==n.result)&&(n.isAlive||0===n.result)||(e.showResult=!0)}))}))},checkFace(t,e){const n=a(a({},window.config.uploadParameter||{}),{},{video:t,action:0});this.isUploadFinish=!1,P().post(E,n).then((t=>{200===t.status?e(t.data):console.warn("失败status !== 200:",t.status)})).catch((t=>{console.warn("请求出错:",t)})).finally((()=>{this.isUploadFinish=!0}))},reRecord(){console.warn("重新录制功能"),this.showResult=!1,this.$refs.cwVideoRef.init(),this.initFs(),this.initVideo()},nativeRecord(){this.videoInstance&&this.videoInstance.openNativeCamera()},onClickLeft(){console.warn("点击了返回键盘");const t=window.config.returnUrl;location.href=t},cancelClick(){console.warn("点击了失败的退出功能");const t=window.config.failedUrl;location.href=t},nativeCancelClick(){const t=window.config.returnUrl;location.href=t}}},M=D,Z=(0,h.Z)(M,i,o,!1,null,"19cc3d02",null),z=Z.exports},590:function(t,e,n){var i=n(7293),o=n(5112),s=n(1913),r=o("iterator");t.exports=!i((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,n="";return t.pathname="c%20d",e.forEach((function(t,i){e["delete"]("b"),n+=i+t})),s&&!t.toJSON||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[r]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},5556:function(t,e,n){"use strict";n(6992);var i=n(2109),o=n(7854),s=n(6916),r=n(1702),a=n(9781),c=n(590),l=n(8052),u=n(9190),p=n(8003),h=n(4994),d=n(9909),v=n(5787),f=n(614),w=n(2597),g=n(9974),m=n(648),C=n(9670),b=n(111),y=n(1340),k=n(30),R=n(9114),S=n(8554),_=n(1246),x=n(8053),O=n(5112),U=n(4362),P=O("iterator"),L="URLSearchParams",j=L+"Iterator",A=d.set,I=d.getterFor(L),B=d.getterFor(j),F=Object.getOwnPropertyDescriptor,N=function(t){if(!a)return o[t];var e=F(o,t);return e&&e.value},T=N("fetch"),$=N("Request"),E=N("Headers"),V=$&&$.prototype,D=E&&E.prototype,M=o.RegExp,Z=o.TypeError,z=o.decodeURIComponent,q=o.encodeURIComponent,W=r("".charAt),Q=r([].join),G=r([].push),J=r("".replace),H=r([].shift),K=r([].splice),X=r("".split),Y=r("".slice),tt=/\+/g,et=Array(4),nt=function(t){return et[t-1]||(et[t-1]=M("((?:%[\\da-f]{2}){"+t+"})","gi"))},it=function(t){try{return z(t)}catch(e){return t}},ot=function(t){var e=J(t,tt," "),n=4;try{return z(e)}catch(i){while(n)e=J(e,nt(n--),it);return e}},st=/[!'()~]|%20/g,rt={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},at=function(t){return rt[t]},ct=function(t){return J(q(t),st,at)},lt=h((function(t,e){A(this,{type:j,iterator:S(I(t).entries),kind:e})}),"Iterator",(function(){var t=B(this),e=t.kind,n=t.iterator.next(),i=n.value;return n.done||(n.value="keys"===e?i.key:"values"===e?i.value:[i.key,i.value]),n}),!0),ut=function(t){this.entries=[],this.url=null,void 0!==t&&(b(t)?this.parseObject(t):this.parseQuery("string"==typeof t?"?"===W(t,0)?Y(t,1):t:y(t)))};ut.prototype={type:L,bindURL:function(t){this.url=t,this.update()},parseObject:function(t){var e,n,i,o,r,a,c,l=_(t);if(l){e=S(t,l),n=e.next;while(!(i=s(n,e)).done){if(o=S(C(i.value)),r=o.next,(a=s(r,o)).done||(c=s(r,o)).done||!s(r,o).done)throw Z("Expected sequence with length 2");G(this.entries,{key:y(a.value),value:y(c.value)})}}else for(var u in t)w(t,u)&&G(this.entries,{key:u,value:y(t[u])})},parseQuery:function(t){if(t){var e,n,i=X(t,"&"),o=0;while(o<i.length)e=i[o++],e.length&&(n=X(e,"="),G(this.entries,{key:ot(H(n)),value:ot(Q(n,"="))}))}},serialize:function(){var t,e=this.entries,n=[],i=0;while(i<e.length)t=e[i++],G(n,ct(t.key)+"="+ct(t.value));return Q(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var pt=function(){v(this,ht);var t=arguments.length>0?arguments[0]:void 0;A(this,new ut(t))},ht=pt.prototype;if(u(ht,{append:function(t,e){x(arguments.length,2);var n=I(this);G(n.entries,{key:y(t),value:y(e)}),n.updateURL()},delete:function(t){x(arguments.length,1);var e=I(this),n=e.entries,i=y(t),o=0;while(o<n.length)n[o].key===i?K(n,o,1):o++;e.updateURL()},get:function(t){x(arguments.length,1);for(var e=I(this).entries,n=y(t),i=0;i<e.length;i++)if(e[i].key===n)return e[i].value;return null},getAll:function(t){x(arguments.length,1);for(var e=I(this).entries,n=y(t),i=[],o=0;o<e.length;o++)e[o].key===n&&G(i,e[o].value);return i},has:function(t){x(arguments.length,1);var e=I(this).entries,n=y(t),i=0;while(i<e.length)if(e[i++].key===n)return!0;return!1},set:function(t,e){x(arguments.length,1);for(var n,i=I(this),o=i.entries,s=!1,r=y(t),a=y(e),c=0;c<o.length;c++)n=o[c],n.key===r&&(s?K(o,c--,1):(s=!0,n.value=a));s||G(o,{key:r,value:a}),i.updateURL()},sort:function(){var t=I(this);U(t.entries,(function(t,e){return t.key>e.key?1:-1})),t.updateURL()},forEach:function(t){var e,n=I(this).entries,i=g(t,arguments.length>1?arguments[1]:void 0),o=0;while(o<n.length)e=n[o++],i(e.value,e.key,this)},keys:function(){return new lt(this,"keys")},values:function(){return new lt(this,"values")},entries:function(){return new lt(this,"entries")}},{enumerable:!0}),l(ht,P,ht.entries,{name:"entries"}),l(ht,"toString",(function(){return I(this).serialize()}),{enumerable:!0}),p(pt,L),i({global:!0,constructor:!0,forced:!c},{URLSearchParams:pt}),!c&&f(E)){var dt=r(D.has),vt=r(D.set),ft=function(t){if(b(t)){var e,n=t.body;if(m(n)===L)return e=t.headers?new E(t.headers):new E,dt(e,"content-type")||vt(e,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),k(t,{body:R(0,y(n)),headers:R(0,e)})}return t};if(f(T)&&i({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(t){return T(t,arguments.length>1?ft(arguments[1]):{})}}),f($)){var wt=function(t){return v(this,V),new $(t,arguments.length>1?ft(arguments[1]):{})};V.constructor=wt,wt.prototype=V,i({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:wt})}}t.exports={URLSearchParams:pt,getState:I}},1637:function(t,e,n){n(5556)}}]);
//# sourceMappingURL=211.65bd0fce.js.map