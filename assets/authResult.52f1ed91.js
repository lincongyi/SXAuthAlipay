import{r as u,O as f,Q as T,e as g,o as c,c as i,a as l,f as h,u as d,w as y,t as k,F as w,as as L,aq as N,d as x,g as V,_ as A,B as C}from"./normalize.9ed2938e.js";import{D}from"./index.6da00043.js";import{a as S,c as q,I as E}from"./index.1b676ec0.js";import{V as F}from"./vconsole.min.b6d0b4d7.js";const R=l("h1",null,"PAGE AUTHRESULT",-1),U={class:"container"},M={class:"auth-result"},O=x("\u52A0\u8F7D\u5931\u8D25"),X={class:"description"},z=x("\u8FD4\u56DE"),G={setup(H){const b=[{mode:[16,64],type:1},{mode:[18,66],type:2}],m=[{resultTxt:"\u8BA4\u8BC1\u6210\u529F",resultImage:S},{resultTxt:"\u8BA4\u8BC1\u5931\u8D25",resultImage:q}],n=u(0),r=u(""),_=f(()=>{let t=[{key:"\u5B9E\u540D\u6821\u9A8C",value:2},{key:"\u4EBA\u50CF\u6BD4\u5BF9",value:2}];if(n.value){let{type:a}=b.find(e=>e.mode.includes(n.value)),s=r.value.slice(0,a);for(let e=0;e<s.length;e++){let o=Number(s[e])===0?1:0;t[e].value=o}}return t}),p=f(()=>r.value&&_.value.find(a=>!a.value)?1:0),v=u(""),I=()=>{!v.value||(window.location.href=v.value)};return T(()=>{console.log(window.location.href.substring(window.location.href.indexOf("?")+1));let t="mode=66&data=00XX";t.includes("&")||D.alert({message:"\u8DEF\u5F84\u53C2\u6570\u6709\u9519\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6"});const a=t.split("&");n.value=Number(a[0].replace(/mode=/g,"")),r.value=a[1].replace(/data=/g,"")}),(t,a)=>{const s=g("van-image"),e=g("van-button");return c(),i(w,null,[R,l("div",U,[l("div",M,[h(s,{class:"result-image",src:m[d(p)].resultImage},{error:y(()=>[O]),_:1},8,["src"]),l("div",X,k(m[d(p)].resultTxt),1)]),(c(!0),i(w,null,L(d(_),(o,B)=>(c(),i("div",{key:B,class:N(["step",["failed","successful"][o.value]])},k(o.key),3))),128)),h(e,{type:"primary",block:"",onClick:I},{default:y(()=>[z]),_:1})])],64)}}};new F;V(G).use(A).use(E).use(C).mount("#app");
