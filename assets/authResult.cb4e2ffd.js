import{d as C,r as c,m as v,q as w,f as g,o as i,c as d,a as m,g as h,s as u,w as B,t as y,F as b,ax as A,ay as I,e as D,h as E,L,B as N}from"./normalize.4c5ed6a5.js";import{D as S,d as T,c as U}from"./certification-successful.68958ccd.js";import{I as O}from"./index.f3204d73.js";const P={class:"container"},V={class:"auth-result"},q=D("\u52A0\u8F7D\u5931\u8D25"),M={class:"description"},R={class:"btn-wrap"},z=D("\u8FD4\u56DE"),j=C({setup(G){const k=[{mode:[16,64],type:1},{mode:[18,66],type:2}],_=[{resultTxt:"\u8BA4\u8BC1\u6210\u529F",resultImage:T},{resultTxt:"\u8BA4\u8BC1\u5931\u8D25",resultImage:U}],n=c(0),l=c(""),f=v(()=>{let e=[{key:"\u5B9E\u540D\u6821\u9A8C",value:2},{key:"\u4EBA\u50CF\u6BD4\u5BF9",value:2}];if(n.value){let a=k.find(t=>t.mode.includes(n.value)),s=l.value.slice(0,a==null?void 0:a.type);for(let t=0;t<s.length;t++){let o=Number(s[t])===0?1:0;e[t].value=o}}return e}),p=v(()=>l.value&&f.value.find(a=>!a.value)?1:0),r=c(""),F=()=>{!r.value||(window.location.href=r.value)};return w(()=>{let e=window.location.href.substring(window.location.href.indexOf("?")+1);if(!e.includes("&"))return S.alert({message:"\u8DEF\u5F84\u53C2\u6570\u6709\u9519\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6"});const s=e.substring(0,e.indexOf("&foreBackUrl")).split("&");n.value=Number(s[0].replace(/mode=/g,"")),l.value=s[1].replace(/resStr=/g,""),r.value=e.substring(e.indexOf("foreBackUrl")).replace(/foreBackUrl=/g,""),window.location.href=r.value}),(e,a)=>{const s=g("van-image"),t=g("van-button");return i(),d("div",P,[m("div",V,[h(s,{class:"result-image",src:u(_)[u(p)].resultImage},{error:B(()=>[q]),_:1},8,["src"]),m("div",M,y(u(_)[u(p)].resultTxt),1)]),(i(!0),d(b,null,A(u(f),(o,x)=>(i(),d("div",{key:x,class:I(["step",["failed","successful"][o.value]])},y(o.key),3))),128)),m("div",R,[h(t,{type:"primary",block:"",onClick:F},{default:B(()=>[z]),_:1})])])}}});E(j).use(L).use(O).use(N).mount("#app");
