(self["webpackChunklive_demo"]=self["webpackChunklive_demo"]||[]).push([[82],{7379:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return H}});var i=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("div",{staticClass:"wrap-top"},[1===t.recordStatus||3===t.recordStatus?e("div",{staticClass:"tip-title"},[t._v("请面向屏幕开始录制视频")]):t._e(),2===t.recordStatus?e("div",{staticClass:"tip-title"}):t._e(),4===t.recordStatus?e("div",{staticClass:"tip-title"},[t._v("正在检测中...")]):t._e(),e("cw-video",{ref:"cwVideoRef",attrs:{showDefaultImg:!t.isOpenVideo,loading:t.loading},scopedSlots:t._u([{key:"imgSlot",fn:function(){return[e("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpenVideo,expression:"isOpenVideo"}],staticClass:"video-wrap",attrs:{id:"video-box"}},[e("video",{attrs:{id:"videoPlay",playinline:"",autoplay:""}})])]},proxy:!0}])})],1),e("div",{staticClass:"wrap-bottom"},[t.isShowInfo?e("TipInfo"):t._e(),t.isShowBtn?e("div",{staticClass:"op-btn"},[e("CwButton",{attrs:{loading:t.btnLoading},on:{click:t.openCamera}},[t._v("开始录制视频")])],1):t._e()],1),e("CwNativeCameraPopup",{attrs:{titles:t.titles},on:{nativeRecord:t.nativeRecord,cancelClick:t.nativeCancelClick},model:{value:t.showNativeCamera,callback:function(e){t.showNativeCamera=e},expression:"showNativeCamera"}}),e("CwRsultPopup",{on:{reRecord:t.reRecord,cancelClick:t.cancelClick},model:{value:t.showResult,callback:function(e){t.showResult=e},expression:"showResult"}})],1)},r=[];n(7941),n(2526),n(7327),n(1539),n(5003),n(9554),n(4747),n(9337),n(3321),n(9070);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function l(t){if(Array.isArray(t))return c(t)}n(1817),n(2165),n(8783),n(3948),n(1038);function u(t){if("undefined"!==typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}n(7042),n(4916),n(7601);function h(t,e){if(t){if("string"===typeof t)return c(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?c(t,e):void 0}}n(1703),n(6647);function p(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function f(t){return l(t)||u(t)||h(t)||p()}n(1249),n(9600),n(8862),n(2772),n(1637);var d=function(){var t=this,e=t._self._c;return e("van-button",t._g(t._b({staticClass:"cw-button",attrs:{type:"primary",size:"large",color:"linear-gradient(135deg, #4C60BF 0%, #4C60BF 100%)",block:""}},"van-button",t.$attrs,!1),t.$listeners),[t._t("default")],2)},v=[],w={},g=w,m=n(1001),y=(0,m.Z)(g,d,v,!1,null,"a314852e",null),b=y.exports,C=n(338),S=function(){var t=this,e=t._self._c;return e("van-popup",t._g(t._b({staticClass:"cw-popup",attrs:{position:"bottom",round:"","close-on-click-overlay":!1}},"van-popup",t.$attrs,!1),t.$listeners),[e("div",{staticClass:"popup-content"},[e("div",{staticClass:"popup-title"},[t._v("请上传视频")]),e("div",{staticClass:"popup-text"},[t._v("请面向屏幕做以下动作:"+t._s(t.titles))]),e("div",{staticClass:"start-btn"},[e("CwButton",{on:{click:t.nativeRecord}},[t._v("开始录制")])],1),e("div",{staticClass:"cancel-btn",on:{click:function(e){return t.$emit("cancelClick")}}},[t._v("退出")])])])},k=[],R={props:{titles:{type:String,default:""}},components:{CwButton:b},methods:{nativeRecord:function(){this.$emit("nativeRecord")}}},_=R,x=(0,m.Z)(_,S,k,!1,null,"f9713bf6",null),O=x.exports,U=function(){var t=this,e=t._self._c;return e("van-popup",t._g(t._b({staticClass:"cw-popup",attrs:{position:"bottom",round:"","close-on-click-overlay":!1}},"van-popup",t.$attrs,!1),t.$listeners),[e("div",{staticClass:"popup-content"},[e("div",{staticClass:"popup-title"},[t._v("验证失败")]),e("div",{staticClass:"popup-text"},[t._v("请避免一下问题：")]),e("div",{staticClass:"popup-text"},[t._v("忘记眨眼、遮挡人脸、关照不均、手机摇晃")]),e("div",{staticClass:"popup-text"},[t._v(" 如有疑问，请联系客服 "),e("span",{staticClass:"text-tel"},[t._v(t._s(t.telphone))])]),e("div",{staticClass:"start-btn"},[e("CwButton",{on:{click:t.reRecord}},[t._v("重新录制")])],1),e("div",{staticClass:"cancel-btn",on:{click:function(e){return t.$emit("cancelClick")}}},[t._v("退出")])])])},A=[],P={components:{CwButton:b},data:function(){return{telphone:""}},mounted:function(){this.telphone=window.config.errorTelphone},methods:{reRecord:function(){this.$emit("reRecord")}}},j=P,L=(0,m.Z)(j,U,A,!1,null,"3fb88528",null),I=L.exports,B=n(6265),F=n.n(B),N=function(){var t=this,e=t._self._c;return e("div",{staticClass:"static-tip-warp"},t._l(t.staticTip,(function(n){return e("div",{key:n.text,staticClass:"static-tip"},[e("div",{staticClass:"img"},[e("img",{attrs:{src:n.img}})]),e("div",{staticClass:"text"},[t._v(" "+t._s(n.text)+" ")])])})),0)},$=[],E=n.p+"static/img/tip-screen.80e38ae3.png",T=n.p+"static/img/tip-outline.02999415.png",V=n.p+"static/img/tip-light.52df7583.png",D={data:function(){return{staticTip:[{img:E,text:"正对屏幕"},{img:T,text:"轮廓清晰"},{img:V,text:"亮度均匀"}]}}},M=D,Z=(0,m.Z)(M,N,$,!1,null,"2eb850c1",null),z=Z.exports,q=window.config.uploadUrl,W=window.config.actionNum||2,Q={components:{CwButton:b,CwVideo:C.Z,CwNativeCameraPopup:O,CwRsultPopup:I,TipInfo:z},data:function(){return{showNativeCamera:!1,showResult:!1,videoInstance:null,isSupport:!0,btnLoading:!1,recordStatus:1,activeActions:[],isUploadFinish:!1,actionsArr:[{title:"眨眨眼",action:"1"},{title:"张张嘴",action:"2"},{title:"摇摇头",action:"5"}]}},computed:{isOpenVideo:function(){return this.isSupport&&2===this.recordStatus},isShowInfo:function(){return 1===this.recordStatus||3===this.recordStatus},isShowBtn:function(){return 1===this.recordStatus||3===this.recordStatus},loading:function(){return 4===this.recordStatus&&!this.isUploadFinish},titles:function(){var t=this.activeActions.map((function(t){return t.title}));return t.join("、")},actions:function(){var t=this.activeActions.map((function(t){return t.action}));return t.join(",")}},mounted:function(){this.initFs(),this.initVideo(),console.log("my",my);var t=navigator.userAgent;console.log(t)},methods:{initFs:function(){if(1===W){var t=Math.floor(Math.random()*(this.actionsArr.length-1)+1);this.activeActions=this.actionsArr.filter((function(e,n){return n===t-1}))}else if(2===W){var e=Math.floor(Math.random()*(this.actionsArr.length-1)+1);this.activeActions=this.actionsArr.filter((function(t,n){return n!==e-1}))}else this.activeActions=f(this.actionsArr)},openCamera:function(){var t=this;t.isSupport?(t.btnLoading=!0,t.videoInstance.openCamera({onError:function(){console.warn("不支持"),t.showNativeCamera=!0,t.isSupport=!1,t.recordStatus=3,t.btnLoading=!1},onSuccess:function(){console.warn("支持"),t.recordStatus=2,t.startCollect(),t.btnLoading=!1}})):t.showNativeCamera=!0},startCollect:function(){var t=(window.config.recordTime||5e3)/1e3,e=!0,n=this;n.videoInstance.startCollect({time:t,timeCallback:function(i){e&&(e=!1,n.$refs.cwVideoRef.start(t)),console.warn(i),i<=0&&(n.recordStatus=4)}})},initVideo:function(){this.recordStatus=1;var t=this;this.videoInstance=new CWMediaCollector({webmWasmPath:"./static/webm-wasm.wasm",webmWorkerPath:"./static/webm-worker.js",el:document.getElementById("video-box"),height:480,width:480,autoOpenNativeCamera:!1,mode:1,maxFileSize:10,frameRate:10,isFrontCamera:!0,mimeType:"video/webm;codecs=h264",onInitSuccess:function(e){20002===e.code?t.isSupport=!1:t.isSupport=!0},onSuccess:function(e){console.log("recordingEnd==",e),2e4===e.code?(console.log("录制结束了————————"),e.data?(t.postBlob(e.data),console.warn("录取的数据",e.data),t.recordStatus=4,t.showNativeCamera=!1):(console.warn("录制的数据为0"),t.showResult=!0)):t.showResult=!0},onError:function(e){console.log("🚀 ~ html ~ initVideo ~ res",e,e.code,"--",e.message),console.log(e.message),t.showResult=!0}})},setResult:function(t){localStorage.setItem("result",JSON.stringify(t))},postBlob:function(t){var e=this;CWMediaCollector.blobToBase64(t,(function(t){console.warn("录制的文件",t),console.warn("文件大小Byte",t.length),e.checkFace(t,(function(n){if(n.isAlive&&n.image){var i=window.location.href,r=i.substring(i.indexOf("?")+1),o=new URLSearchParams(r),a=o.get("certToken");console.log(a),e.setResult({result:!0,size:t.length,image:"data:image/jpeg;base64,"+n.image,res:n,certToken:a}),e.$router.push({path:"/result"})}else(n.isAlive||0!==n.result)&&(n.isAlive||0===n.result)||(e.showResult=!0)}))}))},checkFace:function(t,e){var n=this,i=s(s({},window.config.uploadParameter||{}),{},{video:t,action:0});this.isUploadFinish=!1,F().post(q,i).then((function(t){200===t.status?e(t.data):console.warn("失败status !== 200:",t.status)})).catch((function(t){console.warn("请求出错:",t)})).finally((function(){n.isUploadFinish=!0}))},reRecord:function(){console.warn("重新录制功能"),this.showResult=!1,this.$refs.cwVideoRef.init(),this.initFs(),this.initVideo()},nativeRecord:function(){this.videoInstance&&this.videoInstance.openNativeCamera()},onClickLeft:function(){console.warn("点击了返回键盘");var t=window.config.returnUrl;location.href=t},cancelClick:function(){console.warn("点击了失败的退出功能");var t=window.config.failedUrl;location.href=t},nativeCancelClick:function(){var t=window.config.returnUrl;location.href=t}}},G=Q,J=(0,m.Z)(G,i,r,!1,null,"2c99efa3",null),H=J.exports},8457:function(t,e,n){"use strict";var i=n(9974),r=n(6916),o=n(7908),a=n(3411),s=n(7659),c=n(4411),l=n(6244),u=n(6135),h=n(8554),p=n(1246),f=Array;t.exports=function(t){var e=o(t),n=c(this),d=arguments.length,v=d>1?arguments[1]:void 0,w=void 0!==v;w&&(v=i(v,d>2?arguments[2]:void 0));var g,m,y,b,C,S,k=p(e),R=0;if(!k||this===f&&s(k))for(g=l(e),m=n?new this(g):f(g);g>R;R++)S=w?v(e[R],R):e[R],u(m,R,S);else for(b=h(e,k),C=b.next,m=n?new this:[];!(y=r(C,b)).done;R++)S=w?a(b,v,[y.value,R],!0):y.value,u(m,R,S);return m.length=R,m}},3411:function(t,e,n){var i=n(9670),r=n(9212);t.exports=function(t,e,n,o){try{return o?e(i(n)[0],n[1]):e(n)}catch(a){r(t,"throw",a)}}},590:function(t,e,n){var i=n(7293),r=n(5112),o=n(1913),a=r("iterator");t.exports=!i((function(){var t=new URL("b?a=1&b=2&c=3","http://a"),e=t.searchParams,n="";return t.pathname="c%20d",e.forEach((function(t,i){e["delete"]("b"),n+=i+t})),o&&!t.toJSON||!e.sort||"http://a/c%20d?a=1&c=3"!==t.href||"3"!==e.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!e[a]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},1038:function(t,e,n){var i=n(2109),r=n(8457),o=n(7072),a=!o((function(t){Array.from(t)}));i({target:"Array",stat:!0,forced:a},{from:r})},9337:function(t,e,n){var i=n(2109),r=n(9781),o=n(3887),a=n(5656),s=n(1236),c=n(6135);i({target:"Object",stat:!0,sham:!r},{getOwnPropertyDescriptors:function(t){var e,n,i=a(t),r=s.f,l=o(i),u={},h=0;while(l.length>h)n=r(i,e=l[h++]),void 0!==n&&c(u,e,n);return u}})},5556:function(t,e,n){"use strict";n(6992);var i=n(2109),r=n(7854),o=n(6916),a=n(1702),s=n(9781),c=n(590),l=n(8052),u=n(9190),h=n(8003),p=n(4994),f=n(9909),d=n(5787),v=n(614),w=n(2597),g=n(9974),m=n(648),y=n(9670),b=n(111),C=n(1340),S=n(30),k=n(9114),R=n(8554),_=n(1246),x=n(8053),O=n(5112),U=n(4362),A=O("iterator"),P="URLSearchParams",j=P+"Iterator",L=f.set,I=f.getterFor(P),B=f.getterFor(j),F=Object.getOwnPropertyDescriptor,N=function(t){if(!s)return r[t];var e=F(r,t);return e&&e.value},$=N("fetch"),E=N("Request"),T=N("Headers"),V=E&&E.prototype,D=T&&T.prototype,M=r.RegExp,Z=r.TypeError,z=r.decodeURIComponent,q=r.encodeURIComponent,W=a("".charAt),Q=a([].join),G=a([].push),J=a("".replace),H=a([].shift),K=a([].splice),X=a("".split),Y=a("".slice),tt=/\+/g,et=Array(4),nt=function(t){return et[t-1]||(et[t-1]=M("((?:%[\\da-f]{2}){"+t+"})","gi"))},it=function(t){try{return z(t)}catch(e){return t}},rt=function(t){var e=J(t,tt," "),n=4;try{return z(e)}catch(i){while(n)e=J(e,nt(n--),it);return e}},ot=/[!'()~]|%20/g,at={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},st=function(t){return at[t]},ct=function(t){return J(q(t),ot,st)},lt=p((function(t,e){L(this,{type:j,iterator:R(I(t).entries),kind:e})}),"Iterator",(function(){var t=B(this),e=t.kind,n=t.iterator.next(),i=n.value;return n.done||(n.value="keys"===e?i.key:"values"===e?i.value:[i.key,i.value]),n}),!0),ut=function(t){this.entries=[],this.url=null,void 0!==t&&(b(t)?this.parseObject(t):this.parseQuery("string"==typeof t?"?"===W(t,0)?Y(t,1):t:C(t)))};ut.prototype={type:P,bindURL:function(t){this.url=t,this.update()},parseObject:function(t){var e,n,i,r,a,s,c,l=_(t);if(l){e=R(t,l),n=e.next;while(!(i=o(n,e)).done){if(r=R(y(i.value)),a=r.next,(s=o(a,r)).done||(c=o(a,r)).done||!o(a,r).done)throw Z("Expected sequence with length 2");G(this.entries,{key:C(s.value),value:C(c.value)})}}else for(var u in t)w(t,u)&&G(this.entries,{key:u,value:C(t[u])})},parseQuery:function(t){if(t){var e,n,i=X(t,"&"),r=0;while(r<i.length)e=i[r++],e.length&&(n=X(e,"="),G(this.entries,{key:rt(H(n)),value:rt(Q(n,"="))}))}},serialize:function(){var t,e=this.entries,n=[],i=0;while(i<e.length)t=e[i++],G(n,ct(t.key)+"="+ct(t.value));return Q(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var ht=function(){d(this,pt);var t=arguments.length>0?arguments[0]:void 0;L(this,new ut(t))},pt=ht.prototype;if(u(pt,{append:function(t,e){x(arguments.length,2);var n=I(this);G(n.entries,{key:C(t),value:C(e)}),n.updateURL()},delete:function(t){x(arguments.length,1);var e=I(this),n=e.entries,i=C(t),r=0;while(r<n.length)n[r].key===i?K(n,r,1):r++;e.updateURL()},get:function(t){x(arguments.length,1);for(var e=I(this).entries,n=C(t),i=0;i<e.length;i++)if(e[i].key===n)return e[i].value;return null},getAll:function(t){x(arguments.length,1);for(var e=I(this).entries,n=C(t),i=[],r=0;r<e.length;r++)e[r].key===n&&G(i,e[r].value);return i},has:function(t){x(arguments.length,1);var e=I(this).entries,n=C(t),i=0;while(i<e.length)if(e[i++].key===n)return!0;return!1},set:function(t,e){x(arguments.length,1);for(var n,i=I(this),r=i.entries,o=!1,a=C(t),s=C(e),c=0;c<r.length;c++)n=r[c],n.key===a&&(o?K(r,c--,1):(o=!0,n.value=s));o||G(r,{key:a,value:s}),i.updateURL()},sort:function(){var t=I(this);U(t.entries,(function(t,e){return t.key>e.key?1:-1})),t.updateURL()},forEach:function(t){var e,n=I(this).entries,i=g(t,arguments.length>1?arguments[1]:void 0),r=0;while(r<n.length)e=n[r++],i(e.value,e.key,this)},keys:function(){return new lt(this,"keys")},values:function(){return new lt(this,"values")},entries:function(){return new lt(this,"entries")}},{enumerable:!0}),l(pt,A,pt.entries,{name:"entries"}),l(pt,"toString",(function(){return I(this).serialize()}),{enumerable:!0}),h(ht,P),i({global:!0,constructor:!0,forced:!c},{URLSearchParams:ht}),!c&&v(T)){var ft=a(D.has),dt=a(D.set),vt=function(t){if(b(t)){var e,n=t.body;if(m(n)===P)return e=t.headers?new T(t.headers):new T,ft(e,"content-type")||dt(e,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),S(t,{body:k(0,C(n)),headers:k(0,e)})}return t};if(v($)&&i({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(t){return $(t,arguments.length>1?vt(arguments[1]):{})}}),v(E)){var wt=function(t){return d(this,V),new E(t,arguments.length>1?vt(arguments[1]):{})};V.constructor=wt,wt.prototype=V,i({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:wt})}}t.exports={URLSearchParams:ht,getState:I}},1637:function(t,e,n){n(5556)}}]);
//# sourceMappingURL=82-legacy.a8f0d8d4.js.map