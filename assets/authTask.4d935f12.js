var H=Object.defineProperty,j=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var L=(t,s,l)=>s in t?H(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l,O=(t,s)=>{for(var l in s||(s={}))Q.call(s,l)&&L(t,l,s[l]);if(D)for(var l of D(s))W.call(s,l)&&L(t,l,s[l]);return t},$=(t,s)=>j(t,q(s));import{r as m,N as F,P as X,h as K,ao as Y,e as u,o as Z,c as ee,a as e,f as o,u as a,w as p,F as se,d as f,t as r,g as te,aj as le,B as oe,I as ce}from"./normalize.fadf59aa.js";import{s as V}from"./index.2eb2a81b.js";import{O as ae}from"./index.5729abc1.js";import{T as ie,a as ne,D as de}from"./index.b4ec665d.js";import{I as re}from"./index.38c7e843.js";import{a as ve,R as _e}from"./index.2fd2a143.js";function ue(t){return V({baseURL:"https://sfrz.wsbs.shxga.gov.cn",url:"/fama/demo/getcerttoken",method:"post",data:t})}function he(t){return V({baseURL:"https://sfrz.wsbs.shxga.gov.cn",url:"/fama/demo/getcerttokenimg",method:"post",data:t})}let me=navigator.userAgent,pe=/(msie\s|trident.*rv:)([\w.]+)/,fe=/(firefox)\/([\w.]+)/,ge=/(opera).+version\/([\w.]+)/,we=/(chrome)\/([\w.]+)/,xe=/version\/([\w.]+).*(safari)/;function be(){return Ie(me.toLowerCase())}function Ie(t){var s=pe.exec(t);if(s!==null)return{browser:"IE",version:s[2]||"0"};if(s=fe.exec(t),s!==null)return{browser:s[1]||"",version:s[2]||"0"};if(s=ge.exec(t),s!==null)return{browser:s[1]||"",version:s[2]||"0"};if(s=we.exec(t),s!==null)return{browser:s[1]||"",version:s[2]||"0"};if(s=xe.exec(t),s!==null)return{browser:s[2]||"",version:s[1]||"0"};if(s!==null)return{browser:"",version:"0"}}const ye={class:"container"},ke={class:"title"},Te=f(" \u9655\u897F\u5B9E\u4EBA\u8BA4\u8BC1 "),Ce={class:"content"},Ee=f(" \u5237\u65B0or\u751F\u6210\u4E8C\u7EF4\u7801 "),Ne=f("\u5B9E\u540D"),Re=f("\u5B9E\u540D+\u5B9E\u4EBA"),Se=e("div",{class:"tips"},"\u8BF7\u4F7F\u7528\u9655\u897F\u516C\u6C11\u5B9E\u4EBA\u8BA4\u8BC1\u5C0F\u7A0B\u5E8F\u626B\u7801\u8BA4\u8BC1",-1),Me={class:"overlay-content"},Ue={class:"overlay-container"},De={class:"section"},Le={class:"card"},Oe=e("div",{class:"card-title"},"\u8EAB\u4EFD\u4FE1\u606F",-1),$e={class:"cell mgt10"},Fe=e("div",{class:"cell-title"},"\u7167\u7247\uFF1A",-1),Ve={class:"cell-value"},Be={class:"cell"},ze=e("div",{class:"cell-title"},"\u59D3\u540D\uFF1A",-1),Ae={class:"cell-value"},Je={class:"cell"},Pe=e("div",{class:"cell-title"},"\u8EAB\u4EFD\u53F7\u7801\uFF1A",-1),Ge={class:"cell-value"},He=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u8B66\u53F7/\u5DE5\u53F7\uFF1A"),e("div",{class:"cell-value"})],-1),je=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u5355\u4F4D\uFF1A"),e("div",{class:"cell-value"})],-1),qe={class:"cell"},Qe=e("div",{class:"cell-title"},"\u624B\u673A\u53F7\uFF1A",-1),We={class:"cell-value"},Xe=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u7F51\u8BC1\u6807\u8BC6\uFF1A"),e("div",{class:"cell-value"})],-1),Ke={class:"section"},Ye={class:"card"},Ze=e("div",{class:"card-title"},"\u8BA4\u8BC1\u4FE1\u606F",-1),es=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u8BA4\u8BC1\u5E73\u53F0\uFF1A"),e("div",{class:"cell-value"},"\u9655\u897F\u7701\u5B9E\u4EBA\u8BA4\u8BC1\u5E73\u53F0")],-1),ss={class:"cell"},ts=e("div",{class:"cell-title"},"\u8BA4\u8BC1\u6A21\u5F0F\uFF1A",-1),ls={class:"cell-value"},os={class:"cell"},cs=e("div",{class:"cell-title"},"\u8BA4\u8BC1\u7C7B\u578B\uFF1A",-1),as={class:"cell-value"},is={class:"cell"},ns=e("div",{class:"cell-title"},"\u8BA4\u8BC1\u7B49\u7EA7\uFF1A",-1),ds={class:"cell-value"},rs={class:"card"},vs=e("div",{class:"card-title"},"\u7EC8\u7AEF\u4FE1\u606F",-1),_s={class:"cell"},us=e("div",{class:"cell-title"},"\u7EC8\u7AEF\u7CFB\u7EDF/\u7248\u672C\uFF1A",-1),hs={class:"cell-value"},ms=e("div",{class:"cell-title"},"\u7EC8\u7AEF\u5355\u4F4D\uFF1A",-1),ps=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u7EC8\u7AEFMac\u5730\u5740\uFF1A"),e("div",{class:"cell-value"})],-1),fs=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u7EC8\u7AEFip\u5730\u5740\uFF1A"),e("div",{class:"cell-value"})],-1),gs=e("div",{class:"card"},[e("div",{class:"card-title"},"\u624B\u673A\u4FE1\u606F"),e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u8BBE\u5907ID(IMEI/UUID)\uFF1A"),e("div",{class:"cell-value"})]),e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u624B\u673A\u5382\u5BB6/\u578B\u53F7\uFF1A"),e("div",{class:"cell-value"})]),e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u7CFB\u7EDF\u7C7B\u522B/\u7248\u672C\uFF1A"),e("div",{class:"cell-value"})]),e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u4E0A\u7F51\u65B9\u5F0F\uFF1A"),e("div",{class:"cell-value"})]),e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u8BA4\u8BC1\u8F6F\u4EF6/\u7248\u672C\uFF1A"),e("div",{class:"cell-value"})])],-1),ws={class:"card"},xs=e("div",{class:"card-title"},"\u65F6\u7A7A\u4FE1\u606F",-1),bs={class:"cell"},Is=e("div",{class:"cell-title"},"\u8BA4\u8BC1\u65F6\u95F4\uFF1A",-1),ys={class:"cell-value"},ks=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u5730\u7406\u4F4D\u7F6E\uFF1A"),e("div",{class:"cell-value"})],-1),Ts={class:"btn-wrap"},Cs=f("\u5173\u95ED"),Es={setup(t){const l=m(!1),B=m(""),T=m(""),x=m(!1),C=m(""),E="\u5927\u767D\u4E92\u8054\u7F51\u79D1\u6280\u6709\u9650\u516C\u53F8";let c=F({}),g=F({certAnnexType:0,mode:"66"});const z=[{mode:64,level:"D"},{mode:66,level:"C"}],A=X(()=>{let _=Number(g.mode),{level:i}=z.find(d=>d.mode===_);return i});let{browser:N,version:R}=be();const S=async _=>{let i=await ue($(O({},g),{businessExtraInfo:JSON.stringify({terminalUnit:E,system:`${N}/${R}`})})),{img:d,cert_token:n}=i.data;B.value=n,T.value=`data:image/png;base64,${d}`,P(n),_&&_()};let b,v;const J=30,P=_=>{const i="wss://sfrz.shxga.gov.cn/socket/conn";v=new WebSocket(i),v.onopen=()=>{v.send(JSON.stringify({flag:"getCertCode",cert_token:_})),b=setInterval(()=>{v.send("{}")},J*1e3)},v.onmessage=async({data:d})=>{let n=JSON.parse(d);c.name=n.full_name,c.idNum=n.id_no,c.mode=n.mode,c.time=n.createdTime;let w=n.cert_token,I=await he({certToken:w}),{authInfo:h,img:y,userInfo:k}=I;c.authType=h.authType,c.phoneNum=k.phoneNum,C.value=`data:image/png;base64,${y}`,x.value=!0},v.onclose=()=>{clearInterval(b),b=null}},M=()=>{l.value=!0,S(()=>{setTimeout(()=>{l.value=!1},3*1e3)})},G=()=>{if(l.value)return ie({message:"\u8BF7\u52FF\u9891\u7E41\u5237\u65B0\u4E8C\u7EF4\u7801",forbidClick:!0});M()};return K(()=>{S()}),Y(()=>{v.close()}),(_,i)=>{const d=u("van-image"),n=u("van-icon"),w=u("van-radio"),I=u("van-radio-group"),h=u("van-divider"),y=u("van-button"),k=u("van-overlay");return Z(),ee(se,null,[e("div",ye,[e("div",ke,[o(d,{class:"logo",width:"40px",height:"40px",fit:"contain",src:a(ne)},null,8,["src"]),Te]),e("div",Ce,[o(d,{width:"280px",height:"280px",fit:"contain",src:T.value},null,8,["src"]),e("div",{class:"refresh",onClick:G},[o(n,{name:"replay"}),Ee]),o(I,{modelValue:a(g).mode,"onUpdate:modelValue":i[0]||(i[0]=U=>a(g).mode=U),direction:"horizontal",onChange:M},{default:p(()=>[o(w,{name:"64"},{default:p(()=>[Ne]),_:1}),o(w,{name:"66"},{default:p(()=>[Re]),_:1})]),_:1},8,["modelValue"]),Se])]),o(k,{show:x.value},{default:p(()=>[e("div",Me,[e("div",Ue,[e("div",De,[e("div",Le,[Oe,e("div",$e,[Fe,e("div",Ve,[o(d,{width:"120px",height:"160px",fit:"contain",src:C.value},null,8,["src"])])]),e("div",Be,[ze,e("div",Ae,r(a(c).name),1)]),e("div",Je,[Pe,e("div",Ge,r(a(c).idNum),1)]),He,je,e("div",qe,[Qe,e("div",We,r(a(c).phone),1)]),Xe])]),e("div",Ke,[e("div",Ye,[Ze,es,e("div",ss,[ts,e("div",ls,r(a(c).mode),1)]),e("div",os,[cs,e("div",as,r(a(c).authType),1)]),e("div",is,[ns,e("div",ds,r(a(A)),1)])]),o(h),e("div",rs,[vs,e("div",_s,[us,e("div",hs,r(`${a(N)}/${a(R)}`),1)]),e("div",{class:"cell"},[ms,e("div",{class:"cell-value"},r(E))]),ps,fs]),o(h),gs,o(h),e("div",ws,[xs,e("div",bs,[Is,e("div",ys,r(a(c).time),1)]),ks])])]),o(h),e("div",Ts,[o(y,{type:"primary",block:"",plain:"",onClick:i[1]||(i[1]=U=>x.value=!1)},{default:p(()=>[Cs]),_:1})])])]),_:1},8,["show"])],64)}}};te(Es).use(le).use(re).use(oe).use(ce).use(ve).use(_e).use(ae).use(de).mount("#app");