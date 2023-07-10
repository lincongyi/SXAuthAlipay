import{i as R,A as ge,z as _,T as ye,M as le,d as L,g as t,J as Be,K as Ce,I as $e,$ as be,L as xe,a6 as Ge,l as ne,Z as qe,G as ue,j as ke,n as W,V as Re,m as H,r as f,W as Je,Y as je,at as Qe,al as We,am as Ye,ak as Ze,au as Xe,aj as et,ap as tt,q as at,f as A,o as F,c as G,a as E,w as K,F as j,x as Q,s as M,v as fe,y as he,av as lt,e as Y,h as nt,B as ut}from"./normalize.4c5ed6a5.js";import{b as ot,d as st,s as Z,T as te,C as it,D as rt}from"./index.a5b6f4c2.js";import{p as ct,e as dt,P as De,b as we,a as mt,D as vt}from"./certification-successful.68958ccd.js";import{h as pe,g as ft,f as O,l as ht}from"./index.744d72b7.js";import{F as pt,a as gt,D as yt}from"./index.4bd9a360.js";import{I as Bt}from"./index.f3204d73.js";import"./logo.9e2f423b.js";const[Ct,w]=R("action-sheet"),bt=ge({},ct,{title:String,round:_,actions:ye(),closeIcon:le("cross"),closeable:_,cancelText:String,description:String,closeOnPopstate:_,closeOnClickAction:Boolean,safeAreaInsetBottom:_}),xt=[...dt,"round","closeOnPopstate","safeAreaInsetBottom"];var kt=L({name:Ct,props:bt,emits:["select","cancel","update:show"],setup(e,{slots:n,emit:u}){const s=c=>u("update:show",c),B=()=>{s(!1),u("cancel")},p=()=>{if(e.title)return t("div",{class:w("header")},[e.title,e.closeable&&t($e,{name:e.closeIcon,class:[w("close"),be],onClick:B},null)])},b=()=>{if(n.cancel||e.cancelText)return[t("div",{class:w("gap")},null),t("button",{type:"button",class:w("cancel"),onClick:B},[n.cancel?n.cancel():e.cancelText])]},i=(c,d)=>c.loading?t(xe,{class:w("loading-icon")},null):n.action?n.action({action:c,index:d}):[t("span",{class:w("name")},[c.name]),c.subname&&t("div",{class:w("subname")},[c.subname])],h=(c,d)=>{const{color:y,loading:V,callback:x,disabled:l,className:r}=c,m=()=>{l||V||(x&&x(c),e.closeOnClickAction&&s(!1),Ge(()=>u("select",c,d)))};return t("button",{type:"button",style:{color:y},class:[w("item",{loading:V,disabled:l}),r],onClick:m},[i(c,d)])},g=()=>{if(e.description||n.description){const c=n.description?n.description():e.description;return t("div",{class:w("description")},[c])}};return()=>t(De,Be({class:w(),position:"bottom","onUpdate:show":s},Ce(e,xt)),{default:()=>{var c;return[p(),g(),t("div",{class:w("content")},[e.actions.map(h),(c=n.default)==null?void 0:c.call(n)]),b()]}})}});const Dt=ne(kt),[Ve,wt]=R("checkbox-group"),Vt={max:W,disabled:Boolean,iconSize:W,direction:String,modelValue:ye(),checkedColor:String},Ae=Symbol(Ve);L({name:Ve,props:Vt,emits:["change","update:modelValue"],setup(e,{emit:n,slots:u}){const{children:s,linkChildren:B}=qe(Ae),p=i=>n("update:modelValue",i),b=(i={})=>{typeof i=="boolean"&&(i={checked:i});const{checked:h,skipDisabled:g}=i,d=s.filter(y=>y.props.bindGroup?y.props.disabled&&g?y.checked.value:h!=null?h:!y.checked.value:!1).map(y=>y.name);p(d)};return ue(()=>e.modelValue,i=>n("change",i)),we({toggleAll:b}),ke(()=>e.modelValue),B({props:e,updateValue:p}),()=>{var i;return t("div",{class:wt([e.direction])},[(i=u.default)==null?void 0:i.call(u)])}}});const[At,Et]=R("checkbox"),_t=ge({},ot,{bindGroup:_});var Ft=L({name:At,props:_t,emits:["change","update:modelValue"],setup(e,{emit:n,slots:u}){const{parent:s}=Re(Ae),B=i=>{const{name:h}=e,{max:g,modelValue:c}=s.props,d=c.slice();if(i)!(g&&d.length>=g)&&!d.includes(h)&&(d.push(h),e.bindGroup&&s.updateValue(d));else{const y=d.indexOf(h);y!==-1&&(d.splice(y,1),e.bindGroup&&s.updateValue(d))}},p=H(()=>s&&e.bindGroup?s.props.modelValue.indexOf(e.name)!==-1:!!e.modelValue),b=(i=!p.value)=>{s&&e.bindGroup?B(i):n("update:modelValue",i)};return ue(()=>e.modelValue,i=>n("change",i)),we({toggle:b,props:e,checked:p}),ke(()=>e.modelValue),()=>t(st,Be({bem:Et,role:"checkbox",parent:s,checked:p.value,onToggle:b},e),Ce(u,["default","icon"]))}});const St=ne(Ft),[Tt,q]=R("key"),Pt=t("svg",{class:q("collapse-icon"),viewBox:"0 0 30 24"},[t("path",{d:"M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",fill:"currentColor"},null)]),It=t("svg",{class:q("delete-icon"),viewBox:"0 0 32 22"},[t("path",{d:"M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",fill:"currentColor"},null)]);var ae=L({name:Tt,props:{type:String,text:W,color:String,wider:Boolean,large:Boolean,loading:Boolean},emits:["press"],setup(e,{emit:n,slots:u}){const s=f(!1),B=mt(),p=g=>{B.start(g),s.value=!0},b=g=>{B.move(g),B.direction.value&&(s.value=!1)},i=g=>{s.value&&(u.default||Je(g),s.value=!1,n("press",e.text,e.type))},h=()=>{if(e.loading)return t(xe,{class:q("loading-icon")},null);const g=u.default?u.default():e.text;switch(e.type){case"delete":return g||It;case"extra":return g||Pt;default:return g}};return()=>t("div",{class:q("wrapper",{wider:e.wider}),onTouchstart:p,onTouchmove:b,onTouchend:i,onTouchcancel:i},[t("div",{role:"button",tabindex:0,class:q([e.color,{large:e.large,active:s.value,delete:e.type==="delete"}])},[h()])])}});const[zt,S]=R("number-keyboard"),Nt={show:Boolean,title:String,theme:le("default"),zIndex:W,teleport:[String,Object],maxlength:je(1/0),modelValue:le(""),transition:_,blurOnClose:_,showDeleteKey:_,randomKeyOrder:Boolean,closeButtonText:String,deleteButtonText:String,closeButtonLoading:Boolean,hideOnClickOutside:_,safeAreaInsetBottom:_,extraKey:{type:[String,Array],default:""}};function Kt(e){for(let n=e.length-1;n>0;n--){const u=Math.floor(Math.random()*(n+1)),s=e[n];e[n]=e[u],e[u]=s}return e}var Ut=L({name:zt,props:Nt,emits:["show","hide","blur","input","close","delete","update:modelValue"],setup(e,{emit:n,slots:u}){const s=f(),B=()=>{const l=Array(9).fill("").map((r,m)=>({text:m+1}));return e.randomKeyOrder&&Kt(l),l},p=()=>[...B(),{text:e.extraKey,type:"extra"},{text:0},{text:e.showDeleteKey?e.deleteButtonText:"",type:e.showDeleteKey?"delete":""}],b=()=>{const l=B(),{extraKey:r}=e,m=Array.isArray(r)?r:[r];return m.length===1?l.push({text:0,wider:!0},{text:m[0],type:"extra"}):m.length===2&&l.push({text:m[0],type:"extra"},{text:0},{text:m[1],type:"extra"}),l},i=H(()=>e.theme==="custom"?b():p()),h=()=>{e.show&&n("blur")},g=()=>{n("close"),e.blurOnClose&&h()},c=()=>n(e.show?"show":"hide"),d=(l,r)=>{if(l===""){r==="extra"&&h();return}const m=e.modelValue;r==="delete"?(n("delete"),n("update:modelValue",m.slice(0,m.length-1))):r==="close"?g():m.length<e.maxlength&&(n("input",l),n("update:modelValue",m+l))},y=()=>{const{title:l,theme:r,closeButtonText:m}=e,T=u["title-left"],U=m&&r==="default";if(!!(l||U||T))return t("div",{class:S("header")},[T&&t("span",{class:S("title-left")},[T()]),l&&t("h2",{class:S("title")},[l]),U&&t("button",{type:"button",class:[S("close"),be],onClick:g},[m])])},V=()=>i.value.map(l=>{const r={};return l.type==="delete"&&(r.default=u.delete),l.type==="extra"&&(r.default=u["extra-key"]),t(ae,{key:l.text,text:l.text,type:l.type,wider:l.wider,color:l.color,onPress:d},r)}),x=()=>{if(e.theme==="custom")return t("div",{class:S("sidebar")},[e.showDeleteKey&&t(ae,{large:!0,text:e.deleteButtonText,type:"delete",onPress:d},{delete:u.delete}),t(ae,{large:!0,text:e.closeButtonText,type:"close",color:"blue",loading:e.closeButtonLoading,onPress:d},null)])};return ue(()=>e.show,l=>{e.transition||n(l?"show":"hide")}),e.hideOnClickOutside&&Qe(s,h,{eventName:"touchstart"}),()=>{const l=y(),r=t(et,{name:e.transition?"van-slide-up":""},{default:()=>[We(t("div",{ref:s,style:Ze(e.zIndex),class:S({unfit:!e.safeAreaInsetBottom,"with-title":!!l}),onTouchstart:Xe,onAnimationend:c,onWebkitAnimationEnd:c},[l,t("div",{class:S("body")},[t("div",{class:S("keys")},[V()]),x()])]),[[Ye,e.show]])]});return e.teleport?t(tt,{to:e.teleport},{default:()=>[r]}):r}}});const Mt=ne(Ut);function Ot(e){return Z({url:"/checkIdentityInfo",method:"post",data:e})}function Ht(e){return Z({url:"/getBeforeAuthTips",method:"post",data:e})}function Lt(e){return Z({url:"/alipayAuthInit",method:"post",data:e})}function $t(e){return Z({url:"/alipayAuthQuery",method:"post",data:e})}const Gt={class:"form-wrap"},qt={style:{margin:"16px"}},Rt=Y("\u63D0\u4EA4"),Jt={class:"auth-logo"},jt=Y("\u52A0\u8F7D\u5931\u8D25"),Qt={class:"content"},Wt=["innerHTML"],Yt={key:0,class:"center-tips"},Zt={class:"lower-tips"},Xt=["innerHTML"],ea=Y(" \u67E5\u770B "),ta=["onClick","innerHTML"],aa={class:"btn-group"},la=Y("\u786E\u8BA4\u6388\u6743"),na=L({setup(e){const n=f(""),u=f(""),s=f(""),B=f(!1),p=f(""),b=f(""),i=f(!1),h=f(!1),g=[new Date(2e3,0,1),new Date],c=[new Date,new Date(2050,11,31)],d=[16,18],y=f(0),V=f(!1),x=f(""),l=f(""),r=f(new Date(2e3,0,1)),m=f(new Date(2030,0,1)),T=H(()=>r.value.toLocaleDateString()),U=H(()=>m.value.toLocaleDateString()),P=f(!1),I=f(!1),oe=H(()=>[g,c][y.value]),Ee=H(()=>u.value&&p.value),X=window.location.href;X.includes("&")||(vt.alert({message:"\u8DEF\u5F84\u53C2\u6570\u6709\u9519\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6"}),setTimeout(()=>{window.history.go(-1)},1500));const _e=X.substring(X.indexOf("?")+1),se=new URLSearchParams(_e),J=se.get("loginToken")||"",$=se.get("certToken")||"",k=f(0),ie=f(""),re=f(""),ee=f({url:"",name:""}),ce=f(""),de=f("");at(async()=>{const{data:o}=await Ot({loginToken:J,certToken:$});if(k.value=o.mode,n.value=o.foreBackUrl,o.userStatus!==2){if(u.value=o.fullName,s.value=pe(u.value,0,u.value.length-1),p.value=o.idNum,b.value=pe(p.value,3,2),d.includes(k.value)){let{idStartDate:C,idEndDate:z}=o;C&&z&&(x.value=o.idStartDate,l.value=o.idEndDate,h.value=!0)}if(B.value=i.value=!0,u.value&&p.value){let{idStartDate:C,idEndDate:z}=o;d.includes(k.value)&&(!C||!z)?P.value=!1:P.value=!0}}const{data:a}=await Ht({certToken:$});ie.value=a.beforeAuth,re.value=a.beforeProtocol,ee.value=JSON.parse(a.protocols)[0]});const Fe=o=>{y.value?m.value=o:r.value=o,V.value=!1},{VITE_SERVICE_AGREEMENT:Se}=ht(),Te=()=>{window.location.href=ee.value.url||Se},Pe=()=>{I.value=!1,te("\u7528\u6237\u53D6\u6D88\u8BA4\u8BC1"),setTimeout(()=>{window.location.replace(n.value)},1e3)},Ie=()=>{P.value=!0},ze=async()=>{if(!I.value)return te("\u8BF7\u540C\u610F\u300A\u670D\u52A1\u534F\u8BAE\u300B");if([16,64].includes(k.value)){let o={loginToken:J,certToken:$,fullName:u.value,idNum:p.value,mode:k.value};d.includes(k.value)&&(o.idStartDate=h.value?x.value:O(r.value),o.idEndDate=h.value?l.value:O(m.value)),me(o)}else{let o={loginToken:J,certToken:$,fullName:u.value,idNum:p.value};d.includes(k.value)&&(o.idStartDate=h.value?x.value:O(r.value),o.idEndDate=h.value?l.value:O(m.value));let{data:a}=await Lt(o);de.value=a.certifyId||"",ce.value=a.certifyUrl||"",P.value=!1,I.value=!1,Ne(de.value,ce.value)}},Ne=(o,a)=>{function C(D){window.AlipayJSBridge?D&&D():document.addEventListener("AlipayJSBridgeReady",D,!1)}function z(D,N){window.AlipayJSBridge.call("startBizService",{name:"open-certify",param:JSON.stringify(D)},N)}C(function(){z({certifyId:o,url:a},async D=>{if(!D.result)Pe();else{te(D.resultStatus==="9000"?"\u8BA4\u8BC1\u901A\u8FC7":"\u8BA4\u8BC1\u5931\u8D25");let N={loginToken:J,certToken:$,fullName:u.value,idNum:p.value,mode:k.value,certifyId:D.result.certifyId};d.includes(k.value)&&(N.idStartDate=h.value?x.value:O(r.value),N.idEndDate=h.value?l.value:O(m.value)),me(N)}})})},me=async o=>{let{data:a}=await $t(o);setTimeout(()=>{window.location.replace(a.foreBackUrl)},1e3)},Ke=(o,a)=>o==="year"?`${a}\u5E74`:o==="month"?`${a}\u6708`:o==="day"?`${a}\u65E5`:a;return(o,a)=>{const C=A("van-field"),z=A("van-cell-group"),D=A("van-datetime-picker"),N=A("van-popup"),ve=A("van-button"),Ue=A("van-image"),Me=A("van-form"),Oe=A("van-divider"),He=A("van-checkbox"),Le=A("van-action-sheet");return F(),G(j,null,[E("div",Gt,[t(Me,null,{default:K(()=>[t(z,{inset:""},{default:K(()=>[t(C,{"model-value":"\u7B2C\u4E8C\u4EE3\u5C45\u6C11\u8EAB\u4EFD\u8BC1",readonly:"",name:"\u8BC1\u4EF6\u7C7B\u578B",label:"\u8BC1\u4EF6\u7C7B\u578B"}),B.value?(F(),Q(C,{key:0,modelValue:s.value,"onUpdate:modelValue":a[0]||(a[0]=v=>s.value=v),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",readonly:"",maxlength:"18"},null,8,["modelValue"])):(F(),Q(C,{key:1,modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=v=>u.value=v),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",clearable:"",maxlength:"18",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"])),i.value?(F(),Q(C,{key:2,modelValue:b.value,"onUpdate:modelValue":a[2]||(a[2]=v=>b.value=v),name:"\u8BC1\u4EF6\u53F7\u7801",label:"\u8BC1\u4EF6\u53F7\u7801",readonly:"",maxlength:"18",placeholder:"\u8BC1\u4EF6\u53F7\u7801"},null,8,["modelValue"])):(F(),Q(C,{key:3,modelValue:p.value,"onUpdate:modelValue":a[3]||(a[3]=v=>p.value=v),name:"\u8BC1\u4EF6\u53F7\u7801",label:"\u8BC1\u4EF6\u53F7\u7801",maxlength:"18",placeholder:"\u8BC1\u4EF6\u53F7\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u8BC1\u4EF6\u53F7\u7801"}]},null,8,["modelValue"])),d.includes(k.value)?(F(),G(j,{key:4},[h.value?(F(),G(j,{key:0},[t(C,{modelValue:x.value,"onUpdate:modelValue":a[4]||(a[4]=v=>x.value=v),name:"\u8D77\u59CB\u65E5\u671F",label:"\u8D77\u59CB\u65E5\u671F",placeholder:"\u8D77\u59CB\u65E5\u671F",readonly:"",maxlength:"18"},null,8,["modelValue"]),t(C,{modelValue:l.value,"onUpdate:modelValue":a[5]||(a[5]=v=>l.value=v),name:"\u622A\u6B62\u65E5\u671F",label:"\u622A\u6B62\u65E5\u671F",placeholder:"\u622A\u6B62\u65E5\u671F",readonly:"",maxlength:"18"},null,8,["modelValue"])],64)):(F(),G(j,{key:1},[t(C,{modelValue:M(T),"onUpdate:modelValue":a[6]||(a[6]=v=>fe(T)?T.value=v:null),readonly:"","is-link":"",name:"\u8D77\u59CB\u65E5\u671F",label:"\u8D77\u59CB\u65E5\u671F",onClick:a[7]||(a[7]=()=>{y.value=0,V.value=!0})},null,8,["modelValue"]),t(C,{modelValue:M(U),"onUpdate:modelValue":a[8]||(a[8]=v=>fe(U)?U.value=v:null),readonly:"","is-link":"",name:"\u622A\u6B62\u65E5\u671F",label:"\u622A\u6B62\u65E5\u671F",onClick:a[9]||(a[9]=()=>{y.value=1,V.value=!0})},null,8,["modelValue"])],64))],64)):he("",!0)]),_:1}),t(N,{show:V.value,"onUpdate:show":a[11]||(a[11]=v=>V.value=v),round:"",position:"bottom"},{default:K(()=>[t(D,{modelValue:[r.value,m.value][y.value],"onUpdate:modelValue":a[10]||(a[10]=v=>[r.value,m.value][y.value]=v),title:"\u9009\u62E9\u65E5\u671F",type:"date","min-date":M(oe)[0],"max-date":M(oe)[1],formatter:Ke,onConfirm:Fe},null,8,["modelValue","min-date","max-date"])]),_:1},8,["show"]),E("div",qt,[t(ve,{square:"",block:"",type:"primary",disabled:!M(Ee),onClick:Ie},{default:K(()=>[Rt]),_:1},8,["disabled"])]),E("div",Jt,[t(Ue,{src:M(ft)("auth-logo")},{error:K(()=>[jt]),_:1},8,["src"])])]),_:1})]),t(Le,{show:P.value,"onUpdate:show":a[14]||(a[14]=v=>P.value=v),title:"\u8BA4\u8BC1\u6388\u6743"},{default:K(()=>[E("div",Qt,[E("div",{class:"upper-tips",innerHTML:ie.value},null,8,Wt),[16,64].includes(k.value)?he("",!0):(F(),G("div",Yt,"\u672C\u6B21\u8BA4\u8BC1\u9700\u8981\u901A\u8FC7\u4EBA\u8138\u8BC6\u522B\u9A8C\u8BC1\u8EAB\u4EFD\u4FE1\u606F")),t(Oe),E("div",Zt,[t(He,{modelValue:I.value,"onUpdate:modelValue":a[12]||(a[12]=v=>I.value=v),shape:"square"},null,8,["modelValue"]),E("p",{class:"text",onClick:a[13]||(a[13]=v=>I.value=!I.value)},[E("span",{innerHTML:re.value},null,8,Xt),ea,E("a",{class:"service-link",onClick:lt(Te,["stop"]),innerHTML:ee.value.name},null,8,ta)])]),E("div",aa,[t(ve,{block:"",square:"",type:"primary",onClick:ze},{default:K(()=>[la]),_:1})])])]),_:1},8,["show"])],64)}}});nt(na).use(ut).use(pt).use(gt).use(it).use(Mt).use(Dt).use(rt).use(St).use(Bt).use(De).use(yt).mount("#app");
