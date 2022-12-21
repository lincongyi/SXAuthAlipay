import{P as z,m as _,c as U}from"./index.5729abc1.js";import{j as I,s as T,Q as b,h as V,ao as q,f as l,V as M,$ as E,L as h,n as S,ap as H,l as x,I as J,aj as K,x as Q,m as v,ah as A,y as B,J as F,r as G,K as R,k as W}from"./normalize.fadf59aa.js";let f=0;function X(e){e?(f||document.body.classList.add("van-toast--unclickable"),f++):f&&(f--,f||document.body.classList.remove("van-toast--unclickable"))}const[Y,m]=I("toast"),Z=["show","overlay","teleport","transition","overlayClass","overlayStyle","closeOnClickOverlay"],ee={icon:String,show:Boolean,type:h("text"),overlay:Boolean,message:S,iconSize:S,duration:H(2e3),position:h("middle"),teleport:[String,Object],className:x,iconPrefix:String,transition:h("van-fade"),loadingType:String,forbidClick:Boolean,overlayClass:x,overlayStyle:Object,closeOnClick:Boolean,closeOnClickOverlay:Boolean};var $=T({name:Y,props:ee,emits:["update:show"],setup(e,{emit:t}){let n,d=!1;const c=()=>{const s=e.show&&e.forbidClick;d!==s&&(d=s,X(d))},u=s=>t("update:show",s),C=()=>{e.closeOnClick&&u(!1)},g=()=>clearTimeout(n),O=()=>{const{icon:s,type:i,iconSize:P,iconPrefix:N,loadingType:j}=e;if(s||i==="success"||i==="fail")return l(J,{name:s||i,size:P,class:m("icon"),classPrefix:N},null);if(i==="loading")return l(K,{class:m("loading"),size:P,type:j},null)},r=()=>{const{type:s,message:i}=e;if(Q(i)&&i!=="")return s==="html"?l("div",{key:0,class:m("text"),innerHTML:String(i)},null):l("div",{class:m("text")},[i])};return b(()=>[e.show,e.forbidClick],c),b(()=>[e.show,e.type,e.message,e.duration],()=>{g(),e.show&&e.duration>0&&(n=setTimeout(()=>{u(!1)},e.duration))}),V(c),q(c),()=>l(z,M({class:[m([e.position,{[e.type]:!e.icon}]),e.className],lockScroll:!1,onClick:C,onClosed:g,"onUpdate:show":u},E(e,Z)),{default:()=>[O(),r()]})}});const D={icon:"",type:"text",message:"",className:"",overlay:!1,onClose:void 0,onOpened:void 0,duration:2e3,teleport:"body",iconSize:void 0,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,overlayClass:"",overlayStyle:void 0,closeOnClick:!1,closeOnClickOverlay:!1};let a=[],k=!1,p=v({},D);const y=new Map;function L(e){return F(e)?e:{message:e}}function te(){const{instance:e,unmount:t}=_({setup(){const n=G(""),{open:d,state:c,close:u,toggle:C}=U(),g=()=>{k&&(a=a.filter(r=>r!==e),t())},O=()=>l($,M(c,{onClosed:g,"onUpdate:show":C}),null);return b(n,r=>{c.message=r}),R().render=O,{open:d,clear:u,message:n}}});return e}function ne(){if(!a.length||k){const e=te();a.push(e)}return a[a.length-1]}function o(e={}){if(!A)return{};const t=ne(),n=L(e);return t.open(v({},p,y.get(n.type||p.type),n)),t}const w=e=>t=>o(v({type:e},L(t)));o.loading=w("loading");o.success=w("success");o.fail=w("fail");o.clear=e=>{var t;a.length&&(e?(a.forEach(n=>{n.clear()}),a=[]):k?(t=a.shift())==null||t.clear():a[0].clear())};function ae(e,t){typeof e=="string"?y.set(e,t):v(p,e)}o.setDefaultOptions=ae;o.resetDefaultOptions=e=>{typeof e=="string"?y.delete(e):(p=v({},D),y.clear())};o.allowMultiple=(e=!0)=>{k=e};o.install=e=>{e.use(B($)),e.config.globalProperties.$toast=o};const[oe,se]=I("divider"),ie={dashed:Boolean,hairline:W,contentPosition:h("center")};var le=T({name:oe,props:ie,setup(e,{slots:t}){return()=>{var n;return l("div",{role:"separator",class:se({dashed:e.dashed,hairline:e.hairline,[`content-${e.contentPosition}`]:!!t.default})},[(n=t.default)==null?void 0:n.call(t)])}}});const ue=B(le);var fe="./assets/auth-task-logo.2a440b93.png";export{ue as D,o as T,fe as a};