import{e as p,o as f,c as g,f as h,w as m,d as u,g as _,a2 as w}from"./normalize.8d0c5acc.js";import{D as v}from"./index.30870c90.js";const k={class:"loading-wrap"},x=u("\u52A0\u8F7D\u4E2D..."),y={setup(U){let c=window.navigator.userAgent,o=0;if(/micromessenger/.test(c.toLowerCase())?o=1:/AlipayClient/.test(window.navigator.userAgent)&&(o=2),!o)v.alert({title:"\u6E29\u99A8\u63D0\u793A",message:"\u8BF7\u5728\u5FAE\u4FE1\u6216\u652F\u4ED8\u5B9Dapp\u8FDB\u884C\u8BBF\u95EE"}).then(()=>{window.history.go(-1)});else{let s=decodeURIComponent(window.location.href),n=s.substring(s.indexOf("?")+1);const e=new URLSearchParams(n);if(e.get("foreBackUrl")){let a=n.substring(n.indexOf("foreBackUrl")).replace(/foreBackUrl=/g,"");window.location.href=a}else{const a=e.get("env")||"",r=e.get("certToken")||"";let i=["H5","MINI"].findIndex(t=>t===a);if(o!==1)if(i){let t=`certToken=${r}&env=${a}`;const l=encodeURIComponent(t),d=encodeURIComponent(`alipays://platformapi/startapp?appId=2021003128635520&page=pages/login/index&query=${l}`);window.location.href=`https://ds.alipay.com/?scheme=${d}`}else{let t=`https://sfrz.wsbs.shxga.gov.cn/authlife/auth?certToken=${r}`;window.location.href=t}}}return(s,n)=>{const e=p("van-loading");return f(),g("div",k,[h(e,{color:"#0094ff",size:"40px",vertical:""},{default:m(()=>[x]),_:1})])}}};_(y).use(w).mount("#app");
