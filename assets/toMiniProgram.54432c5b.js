import{e as p,o as h,c as m,f as _,w as f,d as g,g as u,aj as w}from"./normalize.07298e93.js";import{D as v}from"./index.0e8fd7f3.js";import{V as x}from"./vconsole.min.b6d0b4d7.js";const y={class:"loading-wrap"},I=g("\u52A0\u8F7D\u4E2D..."),A={setup(C){let r=window.navigator.userAgent,o=0;if(/micromessenger/.test(r.toLowerCase())?o=1:/AlipayClient/.test(window.navigator.userAgent)&&(o=2),!o)v.alert({title:"\u6E29\u99A8\u63D0\u793A",message:"\u8BF7\u5728\u5FAE\u4FE1\u6216\u652F\u4ED8\u5B9Dapp\u8FDB\u884C\u8BBF\u95EE"}).then(()=>{window.history.go(-1)});else{let n=decodeURIComponent(window.location.href).substring(window.location.href.indexOf("?")+1);alert(window.location.href);const t=new URLSearchParams(n),a=t.get("env")||"",s=t.get("certToken")||"";let c=["H5","MINI"].findIndex(e=>e===a);if(o!==1)if(c){let e=`certToken=${s}&env=${a}`;const l=encodeURIComponent(e),d=encodeURIComponent(`alipays://platformapi/startapp?appId=2021003128635520&page=pages/login/index&query=${l}`);window.location.href=`https://ds.alipay.com/?scheme=${d}`}else{let e=`${{}.NODE_ENV==="production"?"https://sfrz.wsbs.shxga.gov.cn/authlife":{}.VITE_PROXY_AUTH_BASE_URL}/auth?certToken=${s}`;window.location.href=e}}return(i,n)=>{const t=p("van-loading");return h(),m("div",y,[_(t,{color:"#0094ff",size:"40px",vertical:""},{default:f(()=>[I]),_:1})])}}};new x;u(A).use(w).mount("#app");
