import{j as D,n as T,k as O,l as _,m as Z,q as be,s as N,v as ve,f as r,x as I,I as M,y as z,z as ye,A as p,C as j,D as Se,E as Ce,G as we,H as xe,J as ke,K as Pe,L as R,M as Ie,N as Te,r as U,O as Ve,P as A,Q as Be,h as Ee,R as $,S as Fe,T as Me,U as Le,V as ee,d as Ae,W as $e,X as Y,Y as _e,Z as Re,F as Oe}from"./normalize.8d0c5acc.js";import{u as te}from"./index.30870c90.js";const[De,F]=D("cell"),ne={icon:String,size:String,title:T,value:T,label:T,center:Boolean,isLink:Boolean,border:O,required:Boolean,iconPrefix:String,valueClass:_,labelClass:_,titleClass:_,titleStyle:null,arrowDirection:String,clickable:{type:Boolean,default:null}},Ne=Z({},ne,be);var ze=N({name:De,props:Ne,setup(e,{slots:n}){const l=ve(),c=()=>{if(n.label||I(e.label))return r("div",{class:[F("label"),e.labelClass]},[n.label?n.label():e.label])},o=()=>{if(n.title||I(e.title))return r("div",{class:[F("title"),e.titleClass],style:e.titleStyle},[n.title?n.title():r("span",null,[e.title]),c()])},d=()=>{const f=n.value||n.default;if(f||I(e.value)){const C=n.title||I(e.title);return r("div",{class:[F("value",{alone:!C}),e.valueClass]},[f?f():r("span",null,[e.value])])}},x=()=>{if(n.icon)return n.icon();if(e.icon)return r(M,{name:e.icon,class:F("left-icon"),classPrefix:e.iconPrefix},null)},h=()=>{if(n["right-icon"])return n["right-icon"]();if(e.isLink){const f=e.arrowDirection?`arrow-${e.arrowDirection}`:"arrow";return r(M,{name:f,class:F("right-icon")},null)}};return()=>{var f,g;const{size:C,center:k,border:V,isLink:w,required:B}=e,a=(f=e.clickable)!=null?f:w,u={center:k,required:B,clickable:a,borderless:!V};return C&&(u[C]=!!C),r("div",{class:F(u),role:a?"button":void 0,tabindex:a?0:void 0,onClick:l},[x(),o(),d(),h(),(g=n.extra)==null?void 0:g.call(n)])}}});const We=z(ze),[qe,je]=D("form"),Ge={colon:Boolean,disabled:Boolean,readonly:Boolean,showError:Boolean,labelWidth:T,labelAlign:String,inputAlign:String,scrollToError:Boolean,validateFirst:Boolean,submitOnEnter:O,showErrorMessage:O,errorMessageAlign:String,validateTrigger:{type:[String,Array],default:"onBlur"}};var He=N({name:qe,props:Ge,emits:["submit","failed"],setup(e,{emit:n,slots:l}){const{children:c,linkChildren:o}=ye(p),d=a=>a?c.filter(u=>a.includes(u.name)):c,x=a=>new Promise((u,m)=>{const S=[];d(a).reduce((W,E)=>W.then(()=>{if(!S.length)return E.validate().then(L=>{L&&S.push(L)})}),Promise.resolve()).then(()=>{S.length?m(S):u()})}),h=a=>new Promise((u,m)=>{const S=d(a);Promise.all(S.map(b=>b.validate())).then(b=>{b=b.filter(Boolean),b.length?m(b):u()})}),f=a=>{const u=c.find(m=>m.name===a);return u?new Promise((m,S)=>{u.validate().then(b=>{b?S(b):m()})}):Promise.reject()},g=a=>typeof a=="string"?f(a):e.validateFirst?x(a):h(a),C=a=>{typeof a=="string"&&(a=[a]),d(a).forEach(m=>{m.resetValidation()})},k=(a,u)=>{c.some(m=>m.name===a?(m.$el.scrollIntoView(u),!0):!1)},V=()=>c.reduce((a,u)=>(a[u.name]=u.formValue.value,a),{}),w=()=>{const a=V();g().then(()=>n("submit",a)).catch(u=>{n("failed",{values:a,errors:u}),e.scrollToError&&u[0].name&&k(u[0].name)})},B=a=>{j(a),w()};return o({props:e}),te({submit:w,validate:g,getValues:V,scrollToField:k,resetValidation:C}),()=>{var a;return r("form",{class:je(),onSubmit:B},[(a=l.default)==null?void 0:a.call(l)])}}});const ut=z(He);function Ke(e){return Array.isArray(e)?!e.length:e===0?!1:!e}function Ue(e,n){return!(n.required&&Ke(e)||n.pattern&&!n.pattern.test(String(e)))}function Ye(e,n){return new Promise(l=>{const c=n.validator(e,n);if(we(c)){c.then(l);return}l(c)})}function J(e,n){const{message:l}=n;return xe(l)?l(e,n):l||""}function Je({target:e}){e.composing=!0}function Q({target:e}){e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}function Qe(e,n){const l=Se();e.style.height="auto";let c=e.scrollHeight;if(ke(n)){const{maxHeight:o,minHeight:d}=n;o!==void 0&&(c=Math.min(c,o)),d!==void 0&&(c=Math.max(c,d))}c&&(e.style.height=`${c}px`,Ce(l))}function Xe(e){return e==="number"?{type:"text",inputmode:"decimal"}:e==="digit"?{type:"tel",inputmode:"numeric"}:{type:e}}function q(e){return[...e].length}function Ze(e,n){return[...e].slice(0,n).join("")}let pe=0;function et(){const e=Pe(),{name:n="unknown"}=(e==null?void 0:e.type)||{};return`${n}-${++pe}`}const[tt,y]=D("field"),nt={id:String,name:String,leftIcon:String,rightIcon:String,autofocus:Boolean,clearable:Boolean,maxlength:T,formatter:Function,clearIcon:R("clear"),modelValue:Ie(""),inputAlign:String,placeholder:String,autocomplete:String,errorMessage:String,enterkeyhint:String,clearTrigger:R("focus"),formatTrigger:R("onChange"),error:{type:Boolean,default:null},disabled:{type:Boolean,default:null},readonly:{type:Boolean,default:null}},at=Z({},ne,nt,{rows:T,type:R("text"),rules:Array,autosize:[Boolean,Object],labelWidth:T,labelClass:_,labelAlign:String,showWordLimit:Boolean,errorMessageAlign:String,colon:{type:Boolean,default:null}});var lt=N({name:tt,props:at,emits:["blur","focus","clear","keypress","click-input","click-left-icon","click-right-icon","update:modelValue"],setup(e,{emit:n,slots:l}){const c=et(),o=Te({focused:!1,validateFailed:!1,validateMessage:""}),d=U(),x=U(),{parent:h}=Ve(p),f=()=>{var t;return String((t=e.modelValue)!=null?t:"")},g=t=>{if(I(e[t]))return e[t];if(h&&I(h.props[t]))return h.props[t]},C=A(()=>{const t=g("readonly");if(e.clearable&&!t){const i=f()!=="",s=e.clearTrigger==="always"||e.clearTrigger==="focus"&&o.focused;return i&&s}return!1}),k=A(()=>x.value&&l.input?x.value():e.modelValue),V=t=>t.reduce((i,s)=>i.then(()=>{if(o.validateFailed)return;let{value:v}=k;if(s.formatter&&(v=s.formatter(v,s)),!Ue(v,s)){o.validateFailed=!0,o.validateMessage=J(v,s);return}if(s.validator)return Ye(v,s).then(P=>{P&&typeof P=="string"?(o.validateFailed=!0,o.validateMessage=P):P===!1&&(o.validateFailed=!0,o.validateMessage=J(v,s))})}),Promise.resolve()),w=()=>{o.validateFailed&&(o.validateFailed=!1,o.validateMessage="")},B=(t=e.rules)=>new Promise(i=>{w(),t?V(t).then(()=>{o.validateFailed?i({name:e.name,message:o.validateMessage}):i()}):i()}),a=t=>{if(h&&e.rules){const{validateTrigger:i}=h.props,s=Y(i).includes(t),v=e.rules.filter(P=>P.trigger?Y(P.trigger).includes(t):s);v.length&&B(v)}},u=t=>{const{maxlength:i}=e;if(I(i)&&q(t)>i){const s=f();return s&&q(s)===+i?s:Ze(t,+i)}return t},m=(t,i="onChange")=>{if(t=u(t),e.type==="number"||e.type==="digit"){const s=e.type==="number";t=Fe(t,s,s)}e.formatter&&i===e.formatTrigger&&(t=e.formatter(t)),d.value&&d.value.value!==t&&(d.value.value=t),t!==e.modelValue&&n("update:modelValue",t)},S=t=>{t.target.composing||m(t.target.value)},b=()=>{var t;return(t=d.value)==null?void 0:t.blur()},W=()=>{var t;return(t=d.value)==null?void 0:t.focus()},E=()=>{const t=d.value;e.type==="textarea"&&e.autosize&&t&&Qe(t,e.autosize)},L=t=>{o.focused=!0,n("focus",t),$(E),g("readonly")&&b()},ae=t=>{g("readonly")||(o.focused=!1,m(f(),"onBlur"),n("blur",t),a("onBlur"),$(E),_e())},G=t=>n("click-input",t),le=t=>n("click-left-icon",t),ie=t=>n("click-right-icon",t),re=t=>{j(t),n("update:modelValue",""),n("clear",t)},H=A(()=>{if(typeof e.error=="boolean")return e.error;if(h&&h.props.showError&&o.validateFailed)return!0}),oe=A(()=>{const t=g("labelWidth");if(t)return{width:Me(t)}}),ce=t=>{t.keyCode===13&&(!(h&&h.props.submitOnEnter)&&e.type!=="textarea"&&j(t),e.type==="search"&&b()),n("keypress",t)},K=()=>e.id||`${c}-input`,se=()=>{const t=y("control",[g("inputAlign"),{error:H.value,custom:!!l.input,"min-height":e.type==="textarea"&&!e.autosize}]);if(l.input)return r("div",{class:t,onClick:G},[l.input()]);const i={id:K(),ref:d,name:e.name,rows:e.rows!==void 0?+e.rows:void 0,class:t,value:e.modelValue,disabled:g("disabled"),readonly:g("readonly"),autofocus:e.autofocus,placeholder:e.placeholder,autocomplete:e.autocomplete,enterkeyhint:e.enterkeyhint,"aria-labelledby":e.label?`${c}-label`:void 0,onBlur:ae,onFocus:L,onInput:S,onClick:G,onChange:Q,onKeypress:ce,onCompositionend:Q,onCompositionstart:Je};return e.type==="textarea"?r("textarea",i,null):r("input",ee(Xe(e.type),i),null)},ue=()=>{const t=l["left-icon"];if(e.leftIcon||t)return r("div",{class:y("left-icon"),onClick:le},[t?t():r(M,{name:e.leftIcon,classPrefix:e.iconPrefix},null)])},de=()=>{const t=l["right-icon"];if(e.rightIcon||t)return r("div",{class:y("right-icon"),onClick:ie},[t?t():r(M,{name:e.rightIcon,classPrefix:e.iconPrefix},null)])},fe=()=>{if(e.showWordLimit&&e.maxlength){const t=q(f());return r("div",{class:y("word-limit")},[r("span",{class:y("word-num")},[t]),Ae("/"),e.maxlength])}},ge=()=>{if(h&&h.props.showErrorMessage===!1)return;const t=e.errorMessage||o.validateMessage;if(t){const i=l["error-message"],s=g("errorMessageAlign");return r("div",{class:y("error-message",s)},[i?i({message:t}):t])}},me=()=>{const t=g("colon")?":":"";if(l.label)return[l.label(),t];if(e.label)return r("label",{id:`${c}-label`,for:K()},[e.label+t])},he=()=>[r("div",{class:y("body")},[se(),C.value&&r(M,{name:e.clearIcon,class:y("clear"),onTouchstart:re},null),de(),l.button&&r("div",{class:y("button")},[l.button()])]),fe(),ge()];return te({blur:b,focus:W,validate:B,formValue:k,resetValidation:w}),Le($e,{customValue:x,resetValidation:w,validateWithTrigger:a}),Be(()=>e.modelValue,()=>{m(f()),w(),a("onChange"),$(E)}),Ee(()=>{m(f(),e.formatTrigger),$(E)}),()=>{const t=g("disabled"),i=g("labelAlign"),s=me(),v=ue();return r(We,{size:e.size,icon:e.leftIcon,class:y({error:H.value,disabled:t,[`label-${i}`]:i}),center:e.center,border:e.border,isLink:e.isLink,clickable:e.clickable,titleStyle:oe.value,valueClass:y("value"),titleClass:[y("label",[i,{required:e.required}]),e.labelClass],arrowDirection:e.arrowDirection},{icon:v?()=>v:null,title:s?()=>s:null,value:he,extra:l.extra})}}});const dt=z(lt),[it,X]=D("cell-group"),rt={title:String,inset:Boolean,border:O};var ot=N({name:it,inheritAttrs:!1,props:rt,setup(e,{slots:n,attrs:l}){const c=()=>{var d;return r("div",ee({class:[X({inset:e.inset}),{[Re]:e.border&&!e.inset}]},l),[(d=n.default)==null?void 0:d.call(n)])},o=()=>r("div",{class:X("title",{inset:e.inset})},[n.title?n.title():e.title]);return()=>e.title||n.title?r(Oe,null,[o(),c()]):c()}});const ft=z(ot);export{ft as C,ut as F,dt as a};
