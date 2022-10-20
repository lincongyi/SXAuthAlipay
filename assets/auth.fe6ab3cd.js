import{j as K,l as W,k,aj as X,J,d as I,g as t,T as ee,Z as te,I as ye,af as ne,a0 as ae,P as Be,v as j,x as be,O as R,Y as le,n as H,M as Ce,N as Q,r as g,z as xe,K as _e,ak as ke,aa as we,ab as Ae,a9 as Ve,al as Te,a8 as Fe,ae as Se,i as Ee,f as w,o as z,c as Ie,a as x,w as E,F as Pe,am as O,an as Y,ao as De,e as M,h as ze,B as Ne}from"./normalize.c5bfbc35.js";import{c as Ke,a as Oe,s as L,T as G}from"./index.019c7cd7.js";import{p as He,d as Me,P as Le,u as oe,e as Ue,D as $e}from"./certification-successful.95381c7d.js";import{h as Z,g as Ge,l as qe}from"./index.2a7a8f05.js";import{F as Je,a as je,C as Re}from"./index.1817b26e.js";import{D as Qe}from"./index.9071d05e.js";import{I as Ye}from"./index.159389eb.js";import"./logo.9e2f423b.js";const[Ze,C]=K("action-sheet"),We=W({},He,{title:String,round:k,actions:X(),closeIcon:J("cross"),closeable:k,cancelText:String,description:String,closeOnPopstate:k,closeOnClickAction:Boolean,safeAreaInsetBottom:k}),Xe=[...Me,"round","closeOnPopstate","safeAreaInsetBottom"];var et=I({name:Ze,props:We,emits:["select","cancel","update:show"],setup(e,{slots:n,emit:l}){const u=c=>l("update:show",c),f=()=>{u(!1),l("cancel")},d=()=>{if(e.title)return t("div",{class:C("header")},[e.title,e.closeable&&t(ye,{name:e.closeIcon,class:[C("close"),ne],onClick:f},null)])},y=()=>{if(n.cancel||e.cancelText)return[t("div",{class:C("gap")},null),t("button",{type:"button",class:C("cancel"),onClick:f},[n.cancel?n.cancel():e.cancelText])]},o=(c,i)=>c.loading?t(ae,{class:C("loading-icon")},null):n.action?n.action({action:c,index:i}):[t("span",{class:C("name")},[c.name]),c.subname&&t("div",{class:C("subname")},[c.subname])],m=(c,i)=>{const{color:p,loading:V,callback:T,disabled:a,className:r}=c,h=()=>{a||V||(T&&T(c),e.closeOnClickAction&&u(!1),Be(()=>l("select",c,i)))};return t("button",{type:"button",style:{color:p},class:[C("item",{loading:V,disabled:a}),r],onClick:h},[o(c,i)])},s=()=>{if(e.description||n.description){const c=n.description?n.description():e.description;return t("div",{class:C("description")},[c])}};return()=>t(Le,ee({class:C(),position:"bottom","onUpdate:show":u},te(e,Xe)),{default:()=>{var c;return[d(),s(),t("div",{class:C("content")},[e.actions.map(m),(c=n.default)==null?void 0:c.call(n)]),y()]}})}});const tt=j(et),[ue,nt]=K("checkbox-group"),at={max:H,disabled:Boolean,iconSize:H,direction:String,modelValue:X(),checkedColor:String},se=Symbol(ue);I({name:ue,props:at,emits:["change","update:modelValue"],setup(e,{emit:n,slots:l}){const{children:u,linkChildren:f}=be(se),d=o=>n("update:modelValue",o),y=(o={})=>{typeof o=="boolean"&&(o={checked:o});const{checked:m,skipDisabled:s}=o,i=u.filter(p=>p.props.bindGroup?p.props.disabled&&s?p.checked.value:m!=null?m:!p.checked.value:!1).map(p=>p.name);d(i)};return R(()=>e.modelValue,o=>n("change",o)),oe({toggleAll:y}),le(()=>e.modelValue),f({props:e,updateValue:d}),()=>{var o;return t("div",{class:nt([e.direction])},[(o=l.default)==null?void 0:o.call(l)])}}});const[lt,ot]=K("checkbox"),ut=W({},Ke,{bindGroup:k});var st=I({name:lt,props:ut,emits:["change","update:modelValue"],setup(e,{emit:n,slots:l}){const{parent:u}=Ce(se),f=o=>{const{name:m}=e,{max:s,modelValue:c}=u.props,i=c.slice();if(o)!(s&&i.length>=s)&&!i.includes(m)&&(i.push(m),e.bindGroup&&u.updateValue(i));else{const p=i.indexOf(m);p!==-1&&(i.splice(p,1),e.bindGroup&&u.updateValue(i))}},d=Q(()=>u&&e.bindGroup?u.props.modelValue.indexOf(e.name)!==-1:!!e.modelValue),y=(o=!d.value)=>{u&&e.bindGroup?f(o):n("update:modelValue",o)};return R(()=>e.modelValue,o=>n("change",o)),oe({toggle:y,props:e,checked:d}),le(()=>e.modelValue),()=>t(Oe,ee({bem:ot,role:"checkbox",parent:u,checked:d.value,onToggle:y},e),te(l,["default","icon"]))}});const ct=j(st),[it,N]=K("key"),rt=t("svg",{class:N("collapse-icon"),viewBox:"0 0 30 24"},[t("path",{d:"M26 13h-2v2h2v-2zm-8-3h2V8h-2v2zm2-4h2V4h-2v2zm2 4h4V4h-2v4h-2v2zm-7 14 3-3h-6l3 3zM6 13H4v2h2v-2zm16 0H8v2h14v-2zm-12-3h2V8h-2v2zM28 0l1 1 1 1v15l-1 2H1l-1-2V2l1-1 1-1zm0 2H2v15h26V2zM6 4v2H4V4zm10 2h2V4h-2v2zM8 9v1H4V8zm8 0v1h-2V8zm-6-5v2H8V4zm4 0v2h-2V4z",fill:"currentColor"},null)]),dt=t("svg",{class:N("delete-icon"),viewBox:"0 0 32 22"},[t("path",{d:"M28 0a4 4 0 0 1 4 4v14a4 4 0 0 1-4 4H10.4a2 2 0 0 1-1.4-.6L1 13.1c-.6-.5-.9-1.3-.9-2 0-1 .3-1.7.9-2.2L9 .6a2 2 0 0 1 1.4-.6zm0 2H10.4l-8.2 8.3a1 1 0 0 0-.3.7c0 .3.1.5.3.7l8.2 8.4H28a2 2 0 0 0 2-2V4c0-1.1-.9-2-2-2zm-5 4a1 1 0 0 1 .7.3 1 1 0 0 1 0 1.4L20.4 11l3.3 3.3c.2.2.3.5.3.7 0 .3-.1.5-.3.7a1 1 0 0 1-.7.3 1 1 0 0 1-.7-.3L19 12.4l-3.4 3.3a1 1 0 0 1-.6.3 1 1 0 0 1-.7-.3 1 1 0 0 1-.3-.7c0-.2.1-.5.3-.7l3.3-3.3-3.3-3.3A1 1 0 0 1 14 7c0-.3.1-.5.3-.7A1 1 0 0 1 15 6a1 1 0 0 1 .6.3L19 9.6l3.3-3.3A1 1 0 0 1 23 6z",fill:"currentColor"},null)]);var q=I({name:it,props:{type:String,text:H,color:String,wider:Boolean,large:Boolean,loading:Boolean},emits:["press"],setup(e,{emit:n,slots:l}){const u=g(!1),f=Ue(),d=s=>{f.start(s),u.value=!0},y=s=>{f.move(s),f.direction.value&&(u.value=!1)},o=s=>{u.value&&(l.default||xe(s),u.value=!1,n("press",e.text,e.type))},m=()=>{if(e.loading)return t(ae,{class:N("loading-icon")},null);const s=l.default?l.default():e.text;switch(e.type){case"delete":return s||dt;case"extra":return s||rt;default:return s}};return()=>t("div",{class:N("wrapper",{wider:e.wider}),onTouchstart:d,onTouchmove:y,onTouchend:o,onTouchcancel:o},[t("div",{role:"button",tabindex:0,class:N([e.color,{large:e.large,active:u.value,delete:e.type==="delete"}])},[m()])])}});const[mt,A]=K("number-keyboard"),ht={show:Boolean,title:String,theme:J("default"),zIndex:H,teleport:[String,Object],maxlength:_e(1/0),modelValue:J(""),transition:k,blurOnClose:k,showDeleteKey:k,randomKeyOrder:Boolean,closeButtonText:String,deleteButtonText:String,closeButtonLoading:Boolean,hideOnClickOutside:k,safeAreaInsetBottom:k,extraKey:{type:[String,Array],default:""}};function vt(e){for(let n=e.length-1;n>0;n--){const l=Math.floor(Math.random()*(n+1)),u=e[n];e[n]=e[l],e[l]=u}return e}var ft=I({name:mt,props:ht,emits:["show","hide","blur","input","close","delete","update:modelValue"],setup(e,{emit:n,slots:l}){const u=g(),f=()=>{const a=Array(9).fill("").map((r,h)=>({text:h+1}));return e.randomKeyOrder&&vt(a),a},d=()=>[...f(),{text:e.extraKey,type:"extra"},{text:0},{text:e.showDeleteKey?e.deleteButtonText:"",type:e.showDeleteKey?"delete":""}],y=()=>{const a=f(),{extraKey:r}=e,h=Array.isArray(r)?r:[r];return h.length===1?a.push({text:0,wider:!0},{text:h[0],type:"extra"}):h.length===2&&a.push({text:h[0],type:"extra"},{text:0},{text:h[1],type:"extra"}),a},o=Q(()=>e.theme==="custom"?y():d()),m=()=>{e.show&&n("blur")},s=()=>{n("close"),e.blurOnClose&&m()},c=()=>n(e.show?"show":"hide"),i=(a,r)=>{if(a===""){r==="extra"&&m();return}const h=e.modelValue;r==="delete"?(n("delete"),n("update:modelValue",h.slice(0,h.length-1))):r==="close"?s():h.length<e.maxlength&&(n("input",a),n("update:modelValue",h+a))},p=()=>{const{title:a,theme:r,closeButtonText:h}=e,F=l["title-left"],P=h&&r==="default";if(!!(a||P||F))return t("div",{class:A("header")},[F&&t("span",{class:A("title-left")},[F()]),a&&t("h2",{class:A("title")},[a]),P&&t("button",{type:"button",class:[A("close"),ne],onClick:s},[h])])},V=()=>o.value.map(a=>{const r={};return a.type==="delete"&&(r.default=l.delete),a.type==="extra"&&(r.default=l["extra-key"]),t(q,{key:a.text,text:a.text,type:a.type,wider:a.wider,color:a.color,onPress:i},r)}),T=()=>{if(e.theme==="custom")return t("div",{class:A("sidebar")},[e.showDeleteKey&&t(q,{large:!0,text:e.deleteButtonText,type:"delete",onPress:i},{delete:l.delete}),t(q,{large:!0,text:e.closeButtonText,type:"close",color:"blue",loading:e.closeButtonLoading,onPress:i},null)])};return R(()=>e.show,a=>{e.transition||n(a?"show":"hide")}),e.hideOnClickOutside&&ke(u,m,{eventName:"touchstart"}),()=>{const a=p(),r=t(Fe,{name:e.transition?"van-slide-up":""},{default:()=>[we(t("div",{ref:u,style:Ve(e.zIndex),class:A({unfit:!e.safeAreaInsetBottom,"with-title":!!a}),onTouchstart:Te,onAnimationend:c,onWebkitAnimationEnd:c},[a,t("div",{class:A("body")},[t("div",{class:A("keys")},[V()]),T()])]),[[Ae,e.show]])]});return e.teleport?t(Se,{to:e.teleport},{default:()=>[r]}):r}}});const pt=j(ft);function gt(e){return L({url:"/checkIdentityInfo",method:"post",data:e})}function yt(e){return L({url:"/getBeforeAuthTips",method:"post",data:e})}function Bt(e){return L({url:"/alipayAuthInit",method:"post",data:e})}function bt(e){return L({url:"/alipayAuthQuery",method:"post",data:e})}const Ct={class:"form-wrap"},xt={style:{margin:"16px"}},_t=M("\u63D0\u4EA4"),kt={class:"auth-logo"},wt=M("\u52A0\u8F7D\u5931\u8D25"),At={class:"content"},Vt=["innerHTML"],Tt=x("div",{class:"center-tips"},"\u672C\u6B21\u8BA4\u8BC1\u9700\u8981\u901A\u8FC7\u4EBA\u8138\u8BC6\u522B\u9A8C\u8BC1\u8EAB\u4EFD\u4FE1\u606F",-1),Ft={class:"lower-tips"},St=["innerHTML"],Et=M(" \u67E5\u770B "),It=["onClick","innerHTML"],Pt={class:"btn-group"},Dt=M("\u786E\u8BA4\u6388\u6743"),zt=I({setup(e){const n=g(""),l=g(""),u=g(""),f=g(!1),d=g(""),y=g(!1),o=g(""),m=g(!1),s=g(!1),c=Q(()=>l.value&&d.value);let i=window.location.href;i.includes("&")||($e.alert({message:"\u8DEF\u5F84\u53C2\u6570\u6709\u9519\uFF0C\u8BF7\u91CD\u65B0\u83B7\u53D6"}),setTimeout(()=>{window.history.go(-1)},1500));const p=i.substring(i.indexOf("?")+1),V=new URLSearchParams(p),T=V.get("loginToken")||"",a=V.get("certToken")||"",r=g(""),h=g(""),F=g({url:"",name:""}),P=g(""),U=g("");Ee(async()=>{let{data:_}=await gt({loginToken:T,certToken:a});n.value=_.foreBackUrl,_.userStatus!==2&&(l.value=_.fullName,u.value=Z(l.value,0,l.value.length-1),d.value=_.idNum,o.value=Z(d.value,3,2),f.value=y.value=!0,l.value&&d.value&&(m.value=!0));let{data:v}=await yt({certToken:a});r.value=v.beforeAuth,h.value=v.beforeProtocol,F.value=JSON.parse(v.protocols)[0]});const{VITE_SERVICE_AGREEMENT:ce}=qe(),ie=()=>{window.location.href=F.value.url||ce},re=()=>{s.value=!1,G("\u7528\u6237\u53D6\u6D88\u8BA4\u8BC1"),setTimeout(()=>{window.location.replace(n.value)},1e3)},de=()=>{m.value=!0},me=async()=>{if(!s.value)return G("\u8BF7\u540C\u610F\u300A\u670D\u52A1\u534F\u8BAE\u300B");let{data:_}=await Bt({certToken:a,fullName:l.value,idNum:d.value});U.value=_.certifyId,P.value=_.certifyUrl,m.value=!1,s.value=!1,he(U.value,P.value)},he=(_,v)=>{function S(B){window.AlipayJSBridge?B&&B():document.addEventListener("AlipayJSBridgeReady",B,!1)}function $(B,D){window.AlipayJSBridge.call("startBizService",{name:"open-certify",param:JSON.stringify(B)},D)}S(function(){$({certifyId:_,url:v},async B=>{if(!B.result)re();else{G(B.resultStatus==="9000"?"\u8BA4\u8BC1\u901A\u8FC7":"\u8BA4\u8BC1\u5931\u8D25");let{data:D}=await bt({loginToken:T,certToken:a,fullName:l.value,idNum:d.value,certifyId:B.result.certifyId});setTimeout(()=>{window.location.replace(D.foreBackUrl)},1e3)}})})};return(_,v)=>{const S=w("van-field"),$=w("van-cell-group"),B=w("van-button"),D=w("van-image"),ve=w("van-form"),fe=w("van-divider"),pe=w("van-checkbox"),ge=w("van-action-sheet");return z(),Ie(Pe,null,[x("div",Ct,[t(ve,{onSubmit:de},{default:E(()=>[t($,{inset:""},{default:E(()=>[t(S,{"model-value":"\u7B2C\u4E8C\u4EE3\u5C45\u6C11\u8EAB\u4EFD\u8BC1",readonly:"",name:"\u8BC1\u4EF6\u7C7B\u578B",label:"\u8BC1\u4EF6\u7C7B\u578B"}),f.value?(z(),O(S,{key:0,modelValue:u.value,"onUpdate:modelValue":v[0]||(v[0]=b=>u.value=b),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",readonly:"",maxlength:"18"},null,8,["modelValue"])):(z(),O(S,{key:1,modelValue:l.value,"onUpdate:modelValue":v[1]||(v[1]=b=>l.value=b),name:"\u7528\u6237\u540D",label:"\u7528\u6237\u540D",placeholder:"\u7528\u6237\u540D",clearable:"",maxlength:"18",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u7528\u6237\u540D"}]},null,8,["modelValue"])),y.value?(z(),O(S,{key:2,modelValue:o.value,"onUpdate:modelValue":v[2]||(v[2]=b=>o.value=b),name:"\u8BC1\u4EF6\u53F7\u7801",label:"\u8BC1\u4EF6\u53F7\u7801",readonly:"",maxlength:"18",placeholder:"\u8BC1\u4EF6\u53F7\u7801"},null,8,["modelValue"])):(z(),O(S,{key:3,modelValue:d.value,"onUpdate:modelValue":v[3]||(v[3]=b=>d.value=b),name:"\u8BC1\u4EF6\u53F7\u7801",label:"\u8BC1\u4EF6\u53F7\u7801",maxlength:"18",placeholder:"\u8BC1\u4EF6\u53F7\u7801",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u8BC1\u4EF6\u53F7\u7801"}]},null,8,["modelValue"]))]),_:1}),x("div",xt,[t(B,{square:"",block:"",type:"primary",disabled:!Y(c),"native-type":"submit"},{default:E(()=>[_t]),_:1},8,["disabled"])]),x("div",kt,[t(D,{src:Y(Ge)("auth-logo")},{error:E(()=>[wt]),_:1},8,["src"])])]),_:1})]),t(ge,{show:m.value,"onUpdate:show":v[6]||(v[6]=b=>m.value=b),title:"\u8BA4\u8BC1\u6388\u6743"},{default:E(()=>[x("div",At,[x("div",{class:"upper-tips",innerHTML:r.value},null,8,Vt),Tt,t(fe),x("div",Ft,[t(pe,{modelValue:s.value,"onUpdate:modelValue":v[4]||(v[4]=b=>s.value=b),shape:"square"},null,8,["modelValue"]),x("p",{class:"text",onClick:v[5]||(v[5]=b=>s.value=!s.value)},[x("span",{innerHTML:h.value},null,8,St),Et,x("a",{class:"service-link",onClick:De(ie,["stop"]),innerHTML:F.value.name},null,8,It)])]),x("div",Pt,[t(B,{block:"",square:"",type:"primary",onClick:me},{default:E(()=>[Dt]),_:1})])])]),_:1},8,["show"])],64)}}});ze(zt).use(Ne).use(Je).use(je).use(Re).use(pt).use(tt).use(Qe).use(ct).use(Ye).mount("#app");
