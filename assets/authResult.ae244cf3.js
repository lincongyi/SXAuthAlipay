import{r as n,P as u,h as m,e as f,o as p,c as v,f as _,w as g,d as h,g as w,a2 as x,B as k}from"./normalize.b27cdea1.js";import{D as y}from"./index.6505f9ff.js";import{I as B}from"./index.f0ddd39a.js";import{V as b}from"./vconsole.min.b6d0b4d7.js";const N={class:"loading-wrap"},P=h("\u52A0\u8F7D\u4E2D..."),U={setup(V){const i=[{mode:[16,64],type:1},{mode:[18,66],type:2}],r=n(0),s=n(""),c=u(()=>{let e=[{key:"\u5B9E\u540D\u6821\u9A8C",value:2},{key:"\u4EBA\u50CF\u6BD4\u5BF9",value:2}];if(r.value){let{type:o}=i.find(t=>t.mode.includes(r.value)),a=s.value.slice(0,o);for(let t=0;t<a.length;t++){let d=Number(a[t])===0?1:0;e[t].value=d}}return e});u(()=>s.value&&c.value.find(o=>!o.value)?1:0);const l=n("");return m(()=>{let e=window.location.href.substring(window.location.href.indexOf("?")+1);if(!e.includes("&"))return y.alert({message:"\u8DEF\u5F84\u53C2\u6570\u6709\u9519\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6"});const a=e.substring(0,e.indexOf("&foreBackUrl")).split("&");r.value=Number(a[0].replace(/mode=/g,"")),s.value=a[1].replace(/resStr=/g,""),l.value=e.substring(e.indexOf("foreBackUrl")).replace(/foreBackUrl=/g,""),window.location.href=l.value}),(e,o)=>{const a=f("van-loading");return p(),v("div",N,[_(a,{color:"#0094ff",size:"40px",vertical:""},{default:g(()=>[P]),_:1})])}}};new b;w(U).use(x).use(B).use(k).mount("#app");