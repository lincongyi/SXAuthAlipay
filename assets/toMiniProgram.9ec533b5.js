import{d as p,f,o as m,c as _,g,w as h,e as w,h as v,L as B}from"./normalize.729e6abb.js";import{D as E}from"./certification-successful.6420e1bd.js";import{l as A}from"./index.cc4679aa.js";import"./logo.9e2f423b.js";const U={class:"loading-wrap"},k=w("\u52A0\u8F7D\u4E2D..."),x=p({setup(y){let u=window.navigator.userAgent,t=0;if(/micromessenger/.test(u.toLowerCase())?t=1:/AlipayClient/.test(window.navigator.userAgent)&&(t=2),!t)E.alert({title:"\u6E29\u99A8\u63D0\u793A",message:"\u8BF7\u5728\u5FAE\u4FE1\u6216\u652F\u4ED8\u5B9Dapp\u8FDB\u884C\u8BBF\u95EE"}).then(()=>{window.history.go(-1)});else{let s=decodeURIComponent(window.location.href),n=s.substring(s.indexOf("?")+1);const e=new URLSearchParams(n);if(e.get("foreBackUrl")){let a=n.substring(n.indexOf("foreBackUrl")).replace(/foreBackUrl=/g,"");window.location.href=a}else{const a=e.get("env")||"",c=e.get("certToken")||"";let d=["H5","MINI"].findIndex(o=>o===a);if(t!==1)if(d){let o=`certToken=${c}&env=${a}`;const r=encodeURIComponent(o),i=encodeURIComponent(`alipays://platformapi/startapp?appId=2021003128635520&page=pages/login/index&query=${r}`);window.location.href=`https://ds.alipay.com/?scheme=${i}`}else{const{MODE:o,VITE_AUTH_BASE_URL:r,VITE_PROXY_AUTH_BASE_URL:l}=A();let i=`${o==="production"?r:l}/auth?certToken=${c}`;window.location.href=i}}}return(s,n)=>{const e=f("van-loading");return m(),_("div",U,[g(e,{color:"#0094ff",size:"40px",vertical:""},{default:h(()=>[k]),_:1})])}}});v(x).use(B).mount("#app");
