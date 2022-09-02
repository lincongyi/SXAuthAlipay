import{G as ue,a5 as D,j as A,s as _,z as de,f as c,k as P,y as z,m as k,K as fe,q as ve,v as me,O as he,P as H,B as F,n as p,l as Y,r as O,a6 as ye,a7 as q,a8 as ge,Q as M,a9 as Ce,C as Q,aa as J,ab as Be,x as ee,ac as te,ad as ne,L as R,R as we,ae as be,h as Oe,af as ke,U as xe,ag as Se,F as Pe,V as j,ah as Ie,I as pe,g as Te,N as oe,$ as Ae,T as _e,ai as ze,aj as Ee,ak as $e,H as Re,a3 as De}from"./normalize.b27cdea1.js";function ae(e,{args:t=[],done:n,canceled:a}){if(e){const o=e.apply(null,t);ue(o)?o.then(s=>{s?n():a&&a()}).catch(D):o?n():a&&a()}else n()}const[le,Le]=A("action-bar"),se=Symbol(le),Ke={safeAreaInsetBottom:P};var Ne=_({name:le,props:Ke,setup(e,{slots:t}){const{linkChildren:n}=de(se);return n(),()=>{var a;return c("div",{class:[Le(),{"van-safe-area-bottom":e.safeAreaInsetBottom}]},[(a=t.default)==null?void 0:a.call(t)])}}});const He=z(Ne);function U(e){const t=fe();t&&k(t.proxy,e)}const[Fe,Ye]=A("action-bar-button"),Me=k({},ve,{type:String,text:String,icon:String,color:String,loading:Boolean,disabled:Boolean});var je=_({name:Fe,props:Me,setup(e,{slots:t}){const n=me(),{parent:a,index:o}=he(se),s=H(()=>{if(a){const i=a.children[o.value-1];return!(i&&"isButton"in i)}}),u=H(()=>{if(a){const i=a.children[o.value+1];return!(i&&"isButton"in i)}});return U({isButton:!0}),()=>{const{type:i,icon:f,text:h,color:S,loading:y,disabled:m}=e;return c(F,{class:Ye([i,{last:u.value,first:s.value}]),size:"large",type:i,icon:f,color:S,loading:y,disabled:m,onClick:n},{default:()=>[t.default?t.default():h]})}}});const V=z(je),X={show:Boolean,zIndex:p,overlay:P,duration:p,teleport:[String,Object],lockScroll:P,lazyRender:P,beforeClose:Function,overlayStyle:Object,overlayClass:Y,transitionAppear:Boolean,closeOnClickOverlay:P},Ue=Object.keys(X);function Xe(e,t){return e>t?"horizontal":t>e?"vertical":""}function Ve(){const e=O(0),t=O(0),n=O(0),a=O(0),o=O(0),s=O(0),u=O(""),i=()=>u.value==="vertical",f=()=>u.value==="horizontal",h=()=>{n.value=0,a.value=0,o.value=0,s.value=0,u.value=""};return{move:m=>{const C=m.touches[0];n.value=(C.clientX<0?0:C.clientX)-e.value,a.value=C.clientY-t.value,o.value=Math.abs(n.value),s.value=Math.abs(a.value);const B=10;(!u.value||o.value<B&&s.value<B)&&(u.value=Xe(o.value,s.value))},start:m=>{h(),e.value=m.touches[0].clientX,t.value=m.touches[0].clientY},reset:h,startX:e,startY:t,deltaX:n,deltaY:a,offsetX:o,offsetY:s,direction:u,isVertical:i,isHorizontal:f}}let I=0;const G="van-overflow-hidden";function Ge(e,t){const n=Ve(),a=f=>{n.move(f);const h=n.deltaY.value>0?"10":"01",S=Ce(f.target,e.value),{scrollHeight:y,offsetHeight:m,scrollTop:C}=S;let B="11";C===0?B=m>=y?"00":"01":C+m>=y&&(B="10"),B!=="11"&&n.isVertical()&&!(parseInt(B,2)&parseInt(h,2))&&Q(f,!0)},o=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",a,{passive:!1}),I||document.body.classList.add(G),I++},s=()=>{I&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",a),I--,I||document.body.classList.remove(G))},u=()=>t()&&o(),i=()=>t()&&s();ye(u),q(i),ge(i),M(t,f=>{f?o():s()})}function ce(e){const t=O(!1);return M(e,n=>{n&&(t.value=n)},{immediate:!0}),n=>()=>t.value?n():null}const We=Symbol(),[Ze,qe]=A("overlay"),Qe={show:Boolean,zIndex:p,duration:p,className:Y,lockScroll:P,lazyRender:P,customStyle:Object};var Je=_({name:Ze,props:Qe,setup(e,{slots:t}){const n=ce(()=>e.show||!e.lazyRender),a=s=>{Q(s,!0)},o=n(()=>{var s;const u=k(Be(e.zIndex),e.customStyle);return ee(e.duration)&&(u.animationDuration=`${e.duration}s`),te(c("div",{style:u,class:[qe(),e.className],onTouchmove:e.lockScroll?a:D},[(s=t.default)==null?void 0:s.call(t)]),[[ne,e.show]])});return()=>c(J,{name:"van-fade",appear:!0},{default:o})}});const et=z(Je),tt=k({},X,{round:Boolean,position:R("center"),closeIcon:R("cross"),closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,closeIconPosition:R("top-right"),safeAreaInsetTop:Boolean,safeAreaInsetBottom:Boolean}),[nt,W]=A("popup");let Z=2e3;var ot=_({name:nt,inheritAttrs:!1,props:tt,emits:["open","close","opened","closed","keydown","update:show","click-overlay","click-close-icon"],setup(e,{emit:t,attrs:n,slots:a}){let o,s;const u=O(),i=O(),f=ce(()=>e.show||!e.lazyRender),h=H(()=>{const r={zIndex:u.value};if(ee(e.duration)){const g=e.position==="center"?"animationDuration":"transitionDuration";r[g]=`${e.duration}s`}return r}),S=()=>{o||(e.zIndex!==void 0&&(Z=+e.zIndex),o=!0,u.value=++Z,t("open"))},y=()=>{o&&ae(e.beforeClose,{done(){o=!1,t("close"),t("update:show",!1)}})},m=r=>{t("click-overlay",r),e.closeOnClickOverlay&&y()},C=()=>{if(e.overlay)return c(et,{show:e.show,class:e.overlayClass,zIndex:u.value,duration:e.duration,customStyle:e.overlayStyle,onClick:m},{default:a["overlay-content"]})},B=r=>{t("click-close-icon",r),y()},L=()=>{if(e.closeable)return c(pe,{role:"button",tabindex:0,name:e.closeIcon,class:[W("close-icon",e.closeIconPosition),Ie],classPrefix:e.iconPrefix,onClick:B},null)},K=()=>t("opened"),l=()=>t("closed"),v=r=>t("keydown",r),x=f(()=>{var r;const{round:g,position:E,safeAreaInsetTop:N,safeAreaInsetBottom:ie}=e;return te(c("div",j({ref:i,style:h.value,class:[W({round:g,[E]:E}),{"van-safe-area-top":N,"van-safe-area-bottom":ie}],onKeydown:v},n),[(r=a.default)==null?void 0:r.call(a),L()]),[[ne,e.show]])}),w=()=>{const{position:r,transition:g,transitionAppear:E}=e,N=r==="center"?"van-fade":`van-popup-slide-${r}`;return c(J,{name:g||N,appear:E,onAfterEnter:K,onAfterLeave:l},{default:x})};return M(()=>e.show,r=>{r&&!o&&(S(),n.tabindex===0&&we(()=>{var g;(g=i.value)==null||g.focus()})),!r&&o&&(o=!1,t("close"))}),U({popupRef:i}),Ge(i,()=>e.show&&e.lockScroll),be("popstate",()=>{e.closeOnPopstate&&(y(),s=!1)}),Oe(()=>{e.show&&S()}),ke(()=>{s&&(t("update:show",!0),s=!1)}),q(()=>{e.show&&(y(),s=!0)}),xe(We,()=>e.show),()=>e.teleport?c(Se,{to:e.teleport},{default:()=>[C(),w()]}):c(Pe,null,[C(),w()])}});const at=z(ot);function lt(){const e=oe({show:!1}),t=o=>{e.show=o},n=o=>{k(e,o,{transitionAppear:!0}),t(!0)},a=()=>t(!1);return U({open:n,close:a,toggle:t}),{open:n,close:a,state:e,toggle:t}}function st(e){const t=Te(e),n=document.createElement("div");return document.body.appendChild(n),{instance:t.mount(n),unmount(){t.unmount(),document.body.removeChild(n)}}}const[ct,b,$]=A("dialog"),rt=k({},X,{title:String,theme:String,width:p,message:[String,Function],callback:Function,allowHtml:Boolean,className:Y,transition:R("van-dialog-bounce"),messageAlign:String,closeOnPopstate:P,showCancelButton:Boolean,cancelButtonText:String,cancelButtonColor:String,confirmButtonText:String,confirmButtonColor:String,showConfirmButton:P,closeOnClickOverlay:Boolean}),it=[...Ue,"transition","closeOnPopstate"];var re=_({name:ct,props:rt,emits:["confirm","cancel","keydown","update:show"],setup(e,{emit:t,slots:n}){const a=O(),o=oe({confirm:!1,cancel:!1}),s=l=>t("update:show",l),u=l=>{var v;s(!1),(v=e.callback)==null||v.call(e,l)},i=l=>()=>{!e.show||(t(l),e.beforeClose?(o[l]=!0,ae(e.beforeClose,{args:[l],done(){u(l),o[l]=!1},canceled(){o[l]=!1}})):u(l))},f=i("cancel"),h=i("confirm"),S=ze(l=>{var v,x;if(l.target!==((x=(v=a.value)==null?void 0:v.popupRef)==null?void 0:x.value))return;({Enter:e.showConfirmButton?h:D,Escape:e.showCancelButton?f:D})[l.key](),t("keydown",l)},["enter","esc"]),y=()=>{const l=n.title?n.title():e.title;if(l)return c("div",{class:b("header",{isolated:!e.message&&!n.default})},[l])},m=l=>{const{message:v,allowHtml:x,messageAlign:w}=e,r=b("message",{"has-title":l,[w]:w}),g=Re(v)?v():v;return x&&typeof g=="string"?c("div",{class:r,innerHTML:g},null):c("div",{class:r},[g])},C=()=>{if(n.default)return c("div",{class:b("content")},[n.default()]);const{title:l,message:v,allowHtml:x}=e;if(v){const w=!!(l||n.title);return c("div",{key:x?1:0,class:b("content",{isolated:!w})},[m(w)])}},B=()=>c("div",{class:[$e,b("footer")]},[e.showCancelButton&&c(F,{size:"large",text:e.cancelButtonText||$("cancel"),class:b("cancel"),style:{color:e.cancelButtonColor},loading:o.cancel,onClick:f},null),e.showConfirmButton&&c(F,{size:"large",text:e.confirmButtonText||$("confirm"),class:[b("confirm"),{[Ee]:e.showCancelButton}],style:{color:e.confirmButtonColor},loading:o.confirm,onClick:h},null)]),L=()=>c(He,{class:b("footer")},{default:()=>[e.showCancelButton&&c(V,{type:"warning",text:e.cancelButtonText||$("cancel"),class:b("cancel"),color:e.cancelButtonColor,loading:o.cancel,onClick:f},null),e.showConfirmButton&&c(V,{type:"danger",text:e.confirmButtonText||$("confirm"),class:b("confirm"),color:e.confirmButtonColor,loading:o.confirm,onClick:h},null)]}),K=()=>n.footer?n.footer():e.theme==="round-button"?L():B();return()=>{const{width:l,title:v,theme:x,message:w,className:r}=e;return c(at,j({ref:a,role:"dialog",class:[b([x]),r],style:{width:_e(l)},tabindex:0,"aria-labelledby":v||w,onKeydown:S,"onUpdate:show":s},Ae(e,it)),{default:()=>[y(),C(),K()]})}}});let T;function ut(){({instance:T}=st({setup(){const{state:t,toggle:n}=lt();return()=>c(re,j(t,{"onUpdate:show":n}),null)}}))}function d(e){return De?new Promise((t,n)=>{T||ut(),T.open(k({},d.currentOptions,e,{callback:a=>{(a==="confirm"?t:n)(a)}}))}):Promise.resolve()}d.defaultOptions={title:"",width:"",theme:null,message:"",overlay:!0,callback:null,teleport:"body",className:"",allowHtml:!1,lockScroll:!0,transition:void 0,beforeClose:null,overlayClass:"",overlayStyle:void 0,messageAlign:"",cancelButtonText:"",cancelButtonColor:null,confirmButtonText:"",confirmButtonColor:null,showConfirmButton:!0,showCancelButton:!1,closeOnPopstate:!0,closeOnClickOverlay:!1};d.currentOptions=k({},d.defaultOptions);d.alert=d;d.confirm=e=>d(k({showCancelButton:!0},e));d.close=()=>{T&&T.toggle(!1)};d.setDefaultOptions=e=>{k(d.currentOptions,e)};d.resetDefaultOptions=()=>{d.currentOptions=k({},d.defaultOptions)};d.Component=z(re);d.install=e=>{e.use(d.Component),e.config.globalProperties.$dialog=d};export{d as D,et as O,at as P,lt as a,Ue as b,Ve as c,st as m,X as p,U as u};
