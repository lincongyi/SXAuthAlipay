import{q as G,J as ge,I as A,z as ye,K as le,d as M,g as t,a2 as Be,a7 as Ce,T as Le,O as be,M as ke,_ as Ge,Q as ne,L as qe,D as ue,aa as xe,y as j,C as Re,i as H,r as v,E as Je,H as je,as as Qe,ak as We,al as Xe,aj as Ye,at as Ze,ai as et,ao as tt,j as at,f as _,o as T,c as $,a as E,w as N,F as q,au as R,u as O,k as fe,l as he,av as lt,e as Q,h as nt,B as ut}from"./normalize.c453d6e5.js";import{c as ot,a as st,s as W,T as te,D as it}from"./index.f8023e9b.js";import{p as rt,e as ct,P as De,a as we,u as dt,D as mt}from"./certification-successful.d2eaa402.js";import{h as pe,g as vt,f as J,l as ft}from"./index.dd9fe55f.js";import{F as ht,a as pt,C as gt,D as yt}from"./index.8c89d61b.js";import{I as Bt}from"./index.e76d96c5.js";import"./logo.9e2f423b.js";const[Ct,x]=G("action-sheet"),bt=ge({},rt,{title:String,round:A,actions:ye(),closeIcon:le("cross"),closeable:A,cancelText:String,description:String,closeOnPopstate:A,closeOnClickAction:Boolean,safeAreaInsetBottom:A}),kt=[...ct,"round","closeOnPopstate","safeAreaInsetBottom"];var xt=M({name:Ct,props:bt,emits:["select","cancel","update:show"],setup(e,{slots:l,emit:u}){const o=c=>u("update:show",c),C=()=>{o(!1),u("cancel")},f=()=>{if(e.title)return t("div",{class:x("header")},[e.title,e.closeable&&t(Le,{name:e.closeIcon,class:[x("close"),be],onClick:C},null)])},k=()=>{if(l.cancel||e.cancelText)return[t("div",{class:x("gap")},null),t("button",{type:"button",class:x("cancel"),onClick:C},[l.cancel?l.cancel():e.cancelText])]},s=(c,d)=>c.loading?t(ke,{class:x("loading-icon")},null):l.action?l.action({action:c,index:d}):[t("span",{class:x("name")},[c.name]),c.subname&&t("div",{class:x("subname")},[c.subname])],p=(c,d)=>{const{color:y,loading:D,callback:w,disabled:n,className:i}=c,m=()=>{n||D||(w&&w(c),e.closeOnClickAction&&o(!1),Ge(()=>u("select",c,d)))};return t("button",{type:"button",style:{color:y},class:[x("item",{loading:D,disabled:n}),i],onClick:m},[s(c,d)])},g=()=>{if(e.description||l.description){const c=l.description?l.description():e.description;return t("div",{class:x("description")},[c])}};return()=>t(De,Be({class:x(),position:"bottom","onUpdate:show":o},Ce(e,kt)),{default:()=>{var c;return[f(),g(),t("div",{class:x("content")},[e.actions.map(p),(c=l.default)==null?void 0:c.call(l)]),k()]}})}});const Dt=ne(xt),[Ve,wt]=G("checkbox-group"),Vt={max:j,disabled:Boolean,iconSize:j,direction:String,modelValue:ye(),checkedColor:String},_e=Symbol(Ve);M({name:Ve,props:Vt,emits:["change","update:modelValue"],setup(e,{emit:l,slots:u}){const{children:o,linkChildren:C}=qe(_e),f=s=>l("update:modelValue",s),k=(s={})=>{typeof s=="boolean"&&(s={checked:s});const{checked:p,skipDisabled:g}=s,d=o.filter(y=>y.props.bindGroup?y.props.disabled&&g?y.checked.value:p!=null?p:!y.checked.value:!1).map(y=>y.name);f(d)};return ue(()=>e.modelValue,s=>l("change",s)),we({toggleAll:k}),xe(()=>e.modelValue),C({props:e,updateValue:f}),()=>{var s;return t("div",{class:wt([e.direction])},[(s=u.default)==null?void 0:s.call(u)])}}});const[_t,Et]=G("checkbox"),At=ge({},ot,{bindGroup:A});var Ft=M({name:_t,props:At,emits:["change","update:modelValue"],setup(e,{emit:l,slots:u}){const{parent:o}=Re(_e),C=s=>{const{name:p}=e,{max:g,modelValue:c}=o.props,d=c.slice();if(s)!(g&&d.length>=g)&&!d.includes(p)&&(d.push(p),e.bindGroup&&o.updateValue(d));else{const y=d.indexOf(p);y!==-1&&(d.splice(y,1),e.bindGroup&&o.updateValue(d))}},f=H(()=>o&&e.bindGroup?o.props.modelValue.indexOf(e.name)!==-1:!!e.modelValue),k=(s=!f.value)=>{o&&e.bindGroup?C(s):l("update:modelValue",s)};return ue(()=>e.modelValue,s=>l("change",s)),we({toggle:k,props:e,checked:f}),xe(()=>e.modelValue),()=>t(st,Be({bem:Et,role:"checkbox",parent:o,checked:f.value,onToggle:k},e),Ce(u,["default","icon"]))}});const Tt=ne(Ft),[St,L]=G("key"),Pt=t("svg",{class:L("collapse-icon"),viewBox:"0 0 30 24"},[t("path",{d:"M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",fill:"currentColor"},null)]),It=t("svg",{class:L("delete-icon"),viewBox:"0 0 32 22"},[t("path",{d:"M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",fill:"currentColor"},null)]);var ae=M({name:St,props:{type:String,text:j,color:String,wider:Boolean,large:Boolean,loading:Boolean},emits:["press"],setup(e,{emit:l,slots:u}){const o=v(!1),C=dt(),f=g=>{C.start(g),o.value=!0},k=g=>{C.move(g),C.direction.value&&(o.value=!1)},s=g=>{o.value&&(u.default||Je(g),o.value=!1,l("press",e.text,e.type))},p=()=>{if(e.loading)return t(ke,{class:L("loading-icon")},null);const g=u.default?u.default():e.text;switch(e.type){case"delete":return g||It;case"extra":return g||Pt;default:return g}};return()=>t("div",{class:L("wrapper",{wider:e.wider}),onTouchstart:f,onTouchmove:k,onTouchend:s,onTouchcancel:s},[t("div",{role:"button",tabindex:0,class:L([e.color,{large:e.large,active:o.value,delete:e.type==="delete"}])},[p()])])}});const[zt,S]=G("number-keyboard"),Nt={show:Boolean,title:String,theme:le("default"),zIndex:j,teleport:[String,Object],maxlength:je(1/0),modelValue:le(""),transition:A,blurOnClose:A,showDeleteKey:A,randomKeyOrder:Boolean,closeButtonText:String,deleteButtonText:String,closeButtonLoading:Boolean,hideOnClickOutside:A,safeAreaInsetBottom:A,extraKey:{type:[String,Array],default:""}};function Kt(e){for(let l=e.length-1;l>0;l--){const u=Math.floor(Math.random()*(l+1)),o=e[l];e[l]=e[u],e[u]=o}return e}var Ut=M({name:zt,props:Nt,emits:["show","hide","blur","input","close","delete","update:modelValue"],setup(e,{emit:l,slots:u}){const o=v(),C=()=>{const n=Array(9).fill("").map((i,m)=>({text:m+1}));return e.randomKeyOrder&&Kt(n),n},f=()=>[...C(),{text:e.extraKey,type:"extra"},{text:0},{text:e.showDeleteKey?e.deleteButtonText:"",type:e.showDeleteKey?"delete":""}],k=()=>{const n=C(),{extraKey:i}=e,m=Array.isArray(i)?i:[i];return m.length===1?n.push({text:0,wider:!0},{text:m[0],type:"extra"}):m.length===2&&n.push({text:m[0],type:"extra"},{text:0},{text:m[1],type:"extra"}),n},s=H(()=>e.theme==="custom"?k():f()),p=()=>{e.show&&l("blur")},g=()=>{l("close"),e.blurOnClose&&p()},c=()=>l(e.show?"show":"hide"),d=(n,i)=>{if(n===""){i==="extra"&&p();return}const m=e.modelValue;i==="delete"?(l("delete"),l("update:modelValue",m.slice(0,m.length-1))):i==="close"?g():m.length<e.maxlength&&(l("input",n),l("update:modelValue",m+n))},y=()=>{const{title:n,theme:i,closeButtonText:m}=e,P=u["title-left"],K=m&&i==="default";if(!!(n||K||P))return t("div",{class:S("header")},[P&&t("span",{class:S("title-left")},[P()]),n&&t("h2",{class:S("title")},[n]),K&&t("button",{type:"button",class:[S("close"),be],onClick:g},[m])])},D=()=>s.value.map(n=>{const i={};return n.type==="delete"&&(i.default=u.delete),n.type==="extra"&&(i.default=u["extra-key"]),t(ae,{key:n.text,text:n.text,type:n.type,wider:n.wider,color:n.color,onPress:d},i)}),w=()=>{if(e.theme==="custom")return t("div",{class:S("sidebar")},[e.showDeleteKey&&t(ae,{large:!0,text:e.deleteButtonText,type:"delete",onPress:d},{delete:u.delete}),t(ae,{large:!0,text:e.closeButtonText,type:"close",color:"blue",loading:e.closeButtonLoading,onPress:d},null)])};return ue(()=>e.show,n=>{e.transition||l(n?"show":"hide")}),e.hideOnClickOutside&&Qe(o,p,{eventName:"touchstart"}),()=>{const n=y(),i=t(et,{name:e.transition?"van-slide-up":""},{default:()=>[We(t("div",{ref:o,style:Ye(e.zIndex),class:S({unfit:!e.safeAreaInsetBottom,"with-title":!!n}),onTouchstart:Ze,onAnimationend:c,onWebkitAnimationEnd:c},[n,t("div",{class:S("body")},[t("div",{class:S("keys")},[D()]),w()])]),[[Xe,e.show]])]});return e.teleport?t(tt,{to:e.teleport},{default:()=>[i]}):i}}});const Ot=ne(Ut);function Ht(e){return W({url:"/checkIdentityInfo",method:"post",data:e})}function Mt(e){return W({url:"/getBeforeAuthTips",method:"post",data:e})}function $t(e){return W({url:"/alipayAuthInit",method:"post",data:e})}function Lt(e){return W({url:"/alipayAuthQuery",method:"post",data:e})}const Gt={class:"form-wrap"},qt={style:{margin:"16px"}},Rt=Q("\u63D0\u4EA4"),Jt={class:"auth-logo"},jt=Q("\u52A0\u8F7D\u5931\u8D25"),Qt={class:"content"},Wt=["innerHTML"],Xt={key:0,class:"center-tips"},Yt={class:"lower-tips"},Zt=["innerHTML"],ea=Q(" \u67E5\u770B "),ta=["onClick","innerHTML"],aa={class:"btn-group"},la=Q("\u786E\u8BA4\u6388\u6743"),na=M({setup(e){const l=v(""),u=v(""),o=v(""),C=v(!1),f=v(""),k=v(""),s=v(!1),p=v(!1),g=[new Date(2e3,0,1),new Date],c=[new Date,new Date(2050,11,31)],d=[16,18],y=v(0),D=v(!1),w=v(""),n=v(""),i=v(new Date(2e3,0,1)),m=v(new Date(2030,0,1)),P=H(()=>i.value.toLocaleDateString()),K=H(()=>m.value.toLocaleDateString()),U=v(!1),I=v(!1),oe=H(()=>[g,c][y.value]),Ee=H(()=>u.value&&f.value);let X=window.location.href;X.includes("&")||(mt.alert({message:"\u8DEF\u5F84\u53C2\u6570\u6709\u9519\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6"}),setTimeout(()=>{window.history.go(-1)},1500));const Ae=X.substring(X.indexOf("?")+1),se=new URLSearchParams(Ae),Y=se.get("loginToken")||"",Z=se.get("certToken")||"",V=v(0),ie=v(""),re=v(""),ee=v({url:"",name:""}),ce=v(""),de=v("");at(async()=>{let h="9e2f8b0f5efc438e8e5fa6f1d804856b-002",a="6d0727ac-1598-433d-84ab-0595466caff3",{data:B}=await Ht({loginToken:a,certToken:h});if(V.value=B.mode,l.value=B.foreBackUrl,B.userStatus!==2){if(u.value=B.fullName,o.value=pe(u.value,0,u.value.length-1),f.value=B.idNum,k.value=pe(f.value,3,2),d.includes(V.value)){let{idStartDate:b,idEndDate:F}=B;b&&F&&(w.value=B.idStartDate,n.value=B.idEndDate,p.value=!0)}if(C.value=s.value=!0,u.value&&f.value){let{idStartDate:b,idEndDate:F}=B;if(d.includes(V.value)&&(!b||!F))return;U.value=!0}}let{data:z}=await Mt({certToken:h});ie.value=z.beforeAuth,re.value=z.beforeProtocol,ee.value=JSON.parse(z.protocols)[0]});const Fe=h=>{y.value?m.value=h:i.value=h,D.value=!1},{VITE_SERVICE_AGREEMENT:Te}=ft(),Se=()=>{window.location.href=ee.value.url||Te},Pe=()=>{I.value=!1,te("\u7528\u6237\u53D6\u6D88\u8BA4\u8BC1"),setTimeout(()=>{window.location.replace(l.value)},1e3)},Ie=()=>{U.value=!0},ze=async()=>{if(!I.value)return te("\u8BF7\u540C\u610F\u300A\u670D\u52A1\u534F\u8BAE\u300B");if([16,64].includes(V.value)){let h={loginToken:Y,certToken:Z,fullName:u.value,idNum:f.value,mode:V.value};d.includes(V.value)&&(h.idStartDate=p.value?w.value:J(i.value),h.idEndDate=p.value?n.value:J(m.value)),me(h)}else{let h={loginToken:Y,certToken:Z,fullName:u.value,idNum:f.value};d.includes(V.value)&&(h.idStartDate=p.value?w.value:J(i.value),h.idEndDate=p.value?n.value:J(m.value));let{data:a}=await $t(h);de.value=a.certifyId||"",ce.value=a.certifyUrl||"",U.value=!1,I.value=!1,Ne(de.value,ce.value)}},Ne=(h,a)=>{function B(b){window.AlipayJSBridge?b&&b():document.addEventListener("AlipayJSBridgeReady",b,!1)}function z(b,F){window.AlipayJSBridge.call("startBizService",{name:"open-certify",param:JSON.stringify(b)},F)}B(function(){z({certifyId:h,url:a},async b=>{if(!b.result)Pe();else{te(b.resultStatus==="9000"?"\u8BA4\u8BC1\u901A\u8FC7":"\u8BA4\u8BC1\u5931\u8D25");let F={loginToken:Y,certToken:Z,fullName:u.value,idNum:f.value,mode:V.value,certifyId:b.result.certifyId};me(F)}})})},me=async h=>{let{data:a}=await Lt(h);setTimeout(()=>{window.location.replace(a.foreBackUrl)},1e3)},Ke=(h,a)=>h==="year"?`${a}\u5E74`:h==="month"?`${a}\u6708`:h==="day"?`${a}\u65E5`:a;return(h,a)=>{const B=_("van-field"),z=_("van-cell-group"),b=_("van-datetime-picker"),F=_("van-popup"),ve=_("van-button"),Ue=_("van-image"),Oe=_("van-form"),He=_("van-divider"),Me=_("van-checkbox"),$e=_("van-action-sheet");return T(),$(q,null,[E("div",Gt,[t(Oe,{onSubmit:Ie},{default:N(()=>[t(z,{inset:""},{default:N(()=>[t(B,{"model-value":"\u7B2C\u4E8C\u4EE3\u5C45\u6C11\u8EAB\u4EFD\u8BC1",readonly:"",name:"\u8BC1\u4EF6\u7C7B\u578B",label:"\u8BC1\u4EF6\u7C7B\u578B"}),C.value?(T(),R(B,{key:0,modelValue:o.value,"onUpdate:modelValue":a[0]||(a[0]=r=>o.value=r),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",readonly:"",maxlength:"18"},null,8,["modelValue"])):(T(),R(B,{key:1,modelValue:u.value,"onUpdate:modelValue":a[1]||(a[1]=r=>u.value=r),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",clearable:"",maxlength:"18",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"])),s.value?(T(),R(B,{key:2,modelValue:k.value,"onUpdate:modelValue":a[2]||(a[2]=r=>k.value=r),name:"\u8BC1\u4EF6\u53F7\u7801",label:"\u8BC1\u4EF6\u53F7\u7801",readonly:"",maxlength:"18",placeholder:"\u8BC1\u4EF6\u53F7\u7801"},null,8,["modelValue"])):(T(),R(B,{key:3,modelValue:f.value,"onUpdate:modelValue":a[3]||(a[3]=r=>f.value=r),name:"\u8BC1\u4EF6\u53F7\u7801",label:"\u8BC1\u4EF6\u53F7\u7801",maxlength:"18",placeholder:"\u8BC1\u4EF6\u53F7\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u8BC1\u4EF6\u53F7\u7801"}]},null,8,["modelValue"])),d.includes(V.value)?(T(),$(q,{key:4},[p.value?(T(),$(q,{key:0},[t(B,{modelValue:w.value,"onUpdate:modelValue":a[4]||(a[4]=r=>w.value=r),name:"\u8D77\u59CB\u65E5\u671F",label:"\u8D77\u59CB\u65E5\u671F",placeholder:"\u8D77\u59CB\u65E5\u671F",readonly:"",maxlength:"18"},null,8,["modelValue"]),t(B,{modelValue:n.value,"onUpdate:modelValue":a[5]||(a[5]=r=>n.value=r),name:"\u8D77\u59CB\u65E5\u671F",label:"\u8D77\u59CB\u65E5\u671F",placeholder:"\u8D77\u59CB\u65E5\u671F",readonly:"",maxlength:"18"},null,8,["modelValue"])],64)):(T(),$(q,{key:1},[t(B,{modelValue:O(P),"onUpdate:modelValue":a[6]||(a[6]=r=>fe(P)?P.value=r:null),readonly:"","is-link":"",name:"\u8D77\u59CB\u65E5\u671F",label:"\u8D77\u59CB\u65E5\u671F",onClick:a[7]||(a[7]=r=>{y.value=0,D.value=!0})},null,8,["modelValue"]),t(B,{modelValue:O(K),"onUpdate:modelValue":a[8]||(a[8]=r=>fe(K)?K.value=r:null),readonly:"","is-link":"",name:"\u622A\u6B62\u65E5\u671F",label:"\u622A\u6B62\u65E5\u671F",onClick:a[9]||(a[9]=r=>{y.value=1,D.value=!0})},null,8,["modelValue"])],64))],64)):he("",!0)]),_:1}),t(F,{show:D.value,"onUpdate:show":a[11]||(a[11]=r=>D.value=r),round:"",position:"bottom"},{default:N(()=>[t(b,{modelValue:[i.value,m.value][y.value],"onUpdate:modelValue":a[10]||(a[10]=r=>[i.value,m.value][y.value]=r),title:"\u9009\u62E9\u65E5\u671F",type:"date","min-date":O(oe)[0],"max-date":O(oe)[1],formatter:Ke,onConfirm:Fe},null,8,["modelValue","min-date","max-date"])]),_:1},8,["show"]),E("div",qt,[t(ve,{square:"",block:"",type:"primary",disabled:!O(Ee),"native-type":"submit"},{default:N(()=>[Rt]),_:1},8,["disabled"])]),E("div",Jt,[t(Ue,{src:O(vt)("auth-logo")},{error:N(()=>[jt]),_:1},8,["src"])])]),_:1})]),t($e,{show:U.value,"onUpdate:show":a[14]||(a[14]=r=>U.value=r),title:"\u8BA4\u8BC1\u6388\u6743"},{default:N(()=>[E("div",Qt,[E("div",{class:"upper-tips",innerHTML:ie.value},null,8,Wt),[16,64].includes(V.value)?he("",!0):(T(),$("div",Xt,"\u672C\u6B21\u8BA4\u8BC1\u9700\u8981\u901A\u8FC7\u4EBA\u8138\u8BC6\u522B\u9A8C\u8BC1\u8EAB\u4EFD\u4FE1\u606F")),t(He),E("div",Yt,[t(Me,{modelValue:I.value,"onUpdate:modelValue":a[12]||(a[12]=r=>I.value=r),shape:"square"},null,8,["modelValue"]),E("p",{class:"text",onClick:a[13]||(a[13]=r=>I.value=!I.value)},[E("span",{innerHTML:re.value},null,8,Zt),ea,E("a",{class:"service-link",onClick:lt(Se,["stop"]),innerHTML:ee.value.name},null,8,ta)])]),E("div",aa,[t(ve,{block:"",square:"",type:"primary",onClick:ze},{default:N(()=>[la]),_:1})])])]),_:1},8,["show"])],64)}}});nt(na).use(ut).use(ht).use(pt).use(gt).use(Ot).use(Dt).use(it).use(Tt).use(Bt).use(De).use(yt).mount("#app");
