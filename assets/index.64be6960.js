import{P as L,m as _,c as U}from"./index.999b1229.js";import{h as I,q as T,P,Q as V,ao as q,f as l,V as M,$ as H,K as h,n as S,ap as E,k as x,I as J,aj as K,v as Q,l as v,ah as A,x as B,H as F,r as G,J as R,j as W}from"./normalize.2120392f.js";let f=0;function X(e){e?(f||document.body.classList.add("van-toast--unclickable"),f++):f&&(f--,f||document.body.classList.remove("van-toast--unclickable"))}const[Y,m]=I("toast"),Z=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],ee={icon:String,show:Boolean,type:h("text"),overlay:Boolean,message:S,iconSize:S,duration:E(2e3),position:h("middle"),teleport:[String,Object],className:x,iconPrefix:String,transition:h("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:x,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var $=T({name:Y,props:ee,emits:["update:show"],setup(e,{emit:t}){let n,d=!1;const c=()=>{const s=e.show&&e.forbidClick;d!==s&&(d=s,X(d))},u=s=>t("update:show",s),C=()=>{e.closeOnClick&&u(!1)},g=()=>clearTimeout(n),O=()=>{const{icon:s,type:i,iconSize:w,iconPrefix:j,loadingType:z}=e;if(s||i==="success"||i==="fail")return l(J,{name:s||i,size:w,class:m("icon"),classPrefix:j},null);if(i==="loading")return l(K,{class:m("loading"),size:w,type:z},null)},r=()=>{const{type:s,message:i}=e;if(Q(i)&&i!=="")return s==="html"?l("div",{key:0,class:m("text"),innerHTML:String(i)},null):l("div",{class:m("text")},[i])};return P(()=>[e.show,e.forbidClick],c),P(()=>[e.show,e.type,e.message,e.duration],()=>{g(),e.show&&e.duration>0&&(n=setTimeout(()=>{u(!1)},e.duration))}),V(c),q(c),()=>l(L,M({class:[m([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:C,onClosed:g,"onUpdate:show":u},H(e,Z)),{default:()=>[O(),r()]})}});const D={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let a=[],k=!1,p=v({},D);const y=new Map;function N(e){return F(e)?e:{message:e}}function te(){const{instance:e,unmount:t}=_({setup(){const n=G(""),{open:d,state:c,close:u,toggle:C}=U(),g=()=>{k&&(a=a.filter(r=>r!==e),t())},O=()=>l($,M(c,{onClosed:g,"onUpdate:show":C}),null);return P(n,r=>{c.message=r}),R().render=O,{open:d,clear:u,message:n}}});return e}function ne(){if(!a.length||k){const e=te();a.push(e)}return a[a.length-1]}function o(e={}){if(!A)return{};const t=ne(),n=N(e);return t.open(v({},p,y.get(n.type||p.type),n)),t}const b=e=>t=>o(v({type:e},N(t)));o.loading=b("loading");o.success=b("success");o.fail=b("fail");o.clear=e=>{var t;a.length&&(e?(a.forEach(n=>{n.clear()}),a=[]):k?(t=a.shift())==null||t.clear():a[0].clear())};function ae(e,t){typeof e=="string"?y.set(e,t):v(p,e)}o.setDefaultOptions=ae;o.resetDefaultOptions=e=>{typeof e=="string"?y.delete(e):(p=v({},D),y.clear())};o.allowMultiple=(e=!0)=>{k=e};o.install=e=>{e.use(B($)),e.config.globalProperties.$toast=o};const[oe,se]=I("divider"),ie={dashed:Boolean,hairline:W,contentPosition:h("center")};var le=T({name:oe,props:ie,setup(e,{slots:t}){return()=>{var n;return l("div",{role:"separator",class:se({dashed:e.dashed,hairline:e.hairline,[`content-${e.contentPosition}`]:!!t.default})},[(n=t.default)==null?void 0:n.call(t)])}}});const ue=B(le);var fe="./assets/auth-task-logo.2a440b93.png";export{ue as D,o as T,fe as a};
