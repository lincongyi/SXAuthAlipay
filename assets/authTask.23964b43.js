var P=Object.defineProperty,j=Object.defineProperties;var q=Object.getOwnPropertyDescriptors;var U=Object.getOwnPropertySymbols;var Q=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var D=(t,s,l)=>s in t?P(t,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[s]=l,L=(t,s)=>{for(var l in s||(s={}))Q.call(s,l)&&D(t,l,s[l]);if(U)for(var l of U(s))W.call(s,l)&&D(t,l,s[l]);return t},O=(t,s)=>j(t,q(s));import{r as m,M as $,O as X,Q as K,ap as Y,e as u,o as Z,c as ee,a as e,f as o,u as a,w as p,F as se,d as f,t as r,g as te,aj as le,B as oe,I as ce}from"./normalize.07298e93.js";import{s as F}from"./index.2e83570f.js";import{O as ae}from"./index.0e8fd7f3.js";import{a as ie,T as ne,D as de}from"./index.286c7249.js";import{I as re}from"./index.fecaba0f.js";import{a as ve,R as _e}from"./index.ffd36224.js";function ue(t){return F({baseURL:"https://sfrz.wsbs.shxga.gov.cn",url:"/fama/demo/getcerttoken",method:"post",data:t})}function he(t){return F({baseURL:"https://sfrz.wsbs.shxga.gov.cn",url:"/fama/demo/getcerttokenimg",method:"post",data:t})}let me=navigator.userAgent,pe=/(msie\s|trident.*rv:)([\w.]+)/,fe=/(firefox)\/([\w.]+)/,ge=/(opera).+version\/([\w.]+)/,we=/(chrome)\/([\w.]+)/,xe=/version\/([\w.]+).*(safari)/;function Ie(){return be(me.toLowerCase())}function be(t){var s=pe.exec(t);if(s!==null)return{browser:"IE",version:s[2]||"0"};if(s=fe.exec(t),s!==null)return{browser:s[1]||"",version:s[2]||"0"};if(s=ge.exec(t),s!==null)return{browser:s[1]||"",version:s[2]||"0"};if(s=we.exec(t),s!==null)return{browser:s[1]||"",version:s[2]||"0"};if(s=xe.exec(t),s!==null)return{browser:s[2]||"",version:s[1]||"0"};if(s!==null)return{browser:"",version:"0"}}const ye={class:"container"},ke={class:"title"},Te=f(" \u9655\u897F\u5B9E\u4EBA\u8BA4\u8BC1 "),Ee={class:"content"},Ce=f(" \u5237\u65B0or\u751F\u6210\u4E8C\u7EF4\u7801 "),Ne=f("\u5B9E\u540D"),Re=f("\u5B9E\u540D+\u5B9E\u4EBA"),Me=e("div",{class:"tips"},"\u8BF7\u4F7F\u7528\u9655\u897F\u516C\u6C11\u5B9E\u4EBA\u8BA4\u8BC1\u5C0F\u7A0B\u5E8F\u626B\u7801\u8BA4\u8BC1",-1),Se={class:"overlay-content"},Ue={class:"overlay-container"},De={class:"section"},Le={class:"card"},Oe=e("div",{class:"card-title"},"\u8EAB\u4EFD\u4FE1\u606F",-1),$e={class:"cell mgt10"},Fe=e("div",{class:"cell-title"},"\u7167\u7247\uFF1A",-1),Ve={class:"cell-value"},Be={class:"cell"},ze=e("div",{class:"cell-title"},"\u59D3\u540D\uFF1A",-1),Ae={class:"cell-value"},Je={class:"cell"},Ge=e("div",{class:"cell-title"},"\u8EAB\u4EFD\u53F7\u7801\uFF1A",-1),He={class:"cell-value"},Pe=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u8B66\u53F7/\u5DE5\u53F7\uFF1A"),e("div",{class:"cell-value"})],-1),je=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u5355\u4F4D\uFF1A"),e("div",{class:"cell-value"})],-1),qe={class:"cell"},Qe=e("div",{class:"cell-title"},"\u624B\u673A\u53F7\uFF1A",-1),We={class:"cell-value"},Xe=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u7F51\u8BC1\u6807\u8BC6\uFF1A"),e("div",{class:"cell-value"})],-1),Ke={class:"section"},Ye={class:"card"},Ze=e("div",{class:"card-title"},"\u8BA4\u8BC1\u4FE1\u606F",-1),es=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u8BA4\u8BC1\u5E73\u53F0\uFF1A"),e("div",{class:"cell-value"},"\u9655\u897F\u7701\u5B9E\u4EBA\u8BA4\u8BC1\u5E73\u53F0")],-1),ss={class:"cell"},ts=e("div",{class:"cell-title"},"\u8BA4\u8BC1\u6A21\u5F0F\uFF1A",-1),ls={class:"cell-value"},os={class:"cell"},cs=e("div",{class:"cell-title"},"\u8BA4\u8BC1\u7C7B\u578B\uFF1A",-1),as={class:"cell-value"},is={class:"cell"},ns=e("div",{class:"cell-title"},"\u8BA4\u8BC1\u7B49\u7EA7\uFF1A",-1),ds={class:"cell-value"},rs={class:"card"},vs=e("div",{class:"card-title"},"\u7EC8\u7AEF\u4FE1\u606F",-1),_s={class:"cell"},us=e("div",{class:"cell-title"},"\u7EC8\u7AEF\u7CFB\u7EDF/\u7248\u672C\uFF1A",-1),hs={class:"cell-value"},ms=e("div",{class:"cell-title"},"\u7EC8\u7AEF\u5355\u4F4D\uFF1A",-1),ps=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u7EC8\u7AEFMac\u5730\u5740\uFF1A"),e("div",{class:"cell-value"})],-1),fs=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u7EC8\u7AEFip\u5730\u5740\uFF1A"),e("div",{class:"cell-value"})],-1),gs=e("div",{class:"card"},[e("div",{class:"card-title"},"\u624B\u673A\u4FE1\u606F"),e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u8BBE\u5907ID(IMEI/UUID)\uFF1A"),e("div",{class:"cell-value"})]),e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u624B\u673A\u5382\u5BB6/\u578B\u53F7\uFF1A"),e("div",{class:"cell-value"})]),e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u7CFB\u7EDF\u7C7B\u522B/\u7248\u672C\uFF1A"),e("div",{class:"cell-value"})]),e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u4E0A\u7F51\u65B9\u5F0F\uFF1A"),e("div",{class:"cell-value"})]),e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u8BA4\u8BC1\u8F6F\u4EF6/\u7248\u672C\uFF1A"),e("div",{class:"cell-value"})])],-1),ws={class:"card"},xs=e("div",{class:"card-title"},"\u65F6\u7A7A\u4FE1\u606F",-1),Is={class:"cell"},bs=e("div",{class:"cell-title"},"\u8BA4\u8BC1\u65F6\u95F4\uFF1A",-1),ys={class:"cell-value"},ks=e("div",{class:"cell"},[e("div",{class:"cell-title"},"\u5730\u7406\u4F4D\u7F6E\uFF1A"),e("div",{class:"cell-value"})],-1),Ts={class:"btn-wrap"},Es=f("\u5173\u95ED"),Cs={setup(t){const l=m(!1),V=m(""),T=m(""),I=m(!1),E=m(""),C="\u5927\u767D\u4E92\u8054\u7F51\u79D1\u6280\u6709\u9650\u516C\u53F8";let c=$({}),g=$({certAnnexType:0,mode:"66"});const B=[{mode:64,level:"D"},{mode:66,level:"C"}],z=X(()=>{let _=Number(g.mode),{level:i}=B.find(d=>d.mode===_);return i});let{browser:N,version:R}=Ie();const M=async _=>{let i=await ue(O(L({},g),{businessExtraInfo:JSON.stringify({terminalUnit:C,system:`${N}/${R}`})})),{img:d,cert_token:n}=i.data;V.value=n,T.value=`data:image/png;base64,${d}`,J(n),_&&_()};let b,v;const A=30,J=_=>{const i="wss://sfrz.shxga.gov.cn/socket/conn";v=new WebSocket(i),v.onopen=()=>{v.send(JSON.stringify({flag:"getCertCode",cert_token:_})),b=setInterval(()=>{v.send("{}")},A*1e3)},v.onmessage=async({data:d})=>{let n=JSON.parse(d);c.name=n.full_name,c.idNum=n.id_no,c.mode=n.mode,c.time=n.createdTime;let w=n.cert_token,x=await he({certToken:w});console.log(x);let{authInfo:h,businessInfo:S,img:y,tokenInfo:k,userInfo:H}=x;c.authType=h.authType,c.phoneNum=H.phoneNum,E.value=`data:image/png;base64,${y}`,I.value=!0},v.onclose=()=>{clearInterval(b),b=null}},G=()=>{if(l.value)return ne({message:"\u8BF7\u52FF\u9891\u7E41\u5237\u65B0\u4E8C\u7EF4\u7801",forbidClick:!0});l.value=!0,M(()=>{setTimeout(()=>{l.value=!1},3*1e3)})};return K(()=>{M()}),Y(()=>{v.close()}),(_,i)=>{const d=u("van-image"),n=u("van-icon"),w=u("van-radio"),x=u("van-radio-group"),h=u("van-divider"),S=u("van-button"),y=u("van-overlay");return Z(),ee(se,null,[e("div",ye,[e("div",ke,[o(d,{class:"logo",width:"40px",height:"40px",fit:"contain",src:a(ie)},null,8,["src"]),Te]),e("div",Ee,[o(d,{width:"280px",height:"280px",fit:"contain",src:T.value},null,8,["src"]),e("div",{class:"refresh",onClick:G},[o(n,{name:"replay"}),Ce]),o(x,{modelValue:a(g).mode,"onUpdate:modelValue":i[0]||(i[0]=k=>a(g).mode=k),direction:"horizontal"},{default:p(()=>[o(w,{name:"64"},{default:p(()=>[Ne]),_:1}),o(w,{name:"66"},{default:p(()=>[Re]),_:1})]),_:1},8,["modelValue"]),Me])]),o(y,{show:I.value},{default:p(()=>[e("div",Se,[e("div",Ue,[e("div",De,[e("div",Le,[Oe,e("div",$e,[Fe,e("div",Ve,[o(d,{width:"120px",height:"160px",fit:"contain",src:E.value},null,8,["src"])])]),e("div",Be,[ze,e("div",Ae,r(a(c).name),1)]),e("div",Je,[Ge,e("div",He,r(a(c).idNum),1)]),Pe,je,e("div",qe,[Qe,e("div",We,r(a(c).phone),1)]),Xe])]),e("div",Ke,[e("div",Ye,[Ze,es,e("div",ss,[ts,e("div",ls,r(a(c).mode),1)]),e("div",os,[cs,e("div",as,r(a(c).authType),1)]),e("div",is,[ns,e("div",ds,r(a(z)),1)])]),o(h),e("div",rs,[vs,e("div",_s,[us,e("div",hs,r(`${a(N)}/${a(R)}`),1)]),e("div",{class:"cell"},[ms,e("div",{class:"cell-value"},r(C))]),ps,fs]),o(h),gs,o(h),e("div",ws,[xs,e("div",Is,[bs,e("div",ys,r(a(c).time),1)]),ks])])]),o(h),e("div",Ts,[o(S,{type:"primary",block:"",plain:"",onClick:i[1]||(i[1]=k=>I.value=!1)},{default:p(()=>[Es]),_:1})])])]),_:1},8,["show"])],64)}}};te(Cs).use(le).use(re).use(oe).use(ce).use(ve).use(_e).use(ae).use(de).mount("#app");
