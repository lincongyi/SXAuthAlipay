import{j as $,n as d,k as L,J as P,d as b,r as u,H as k,N as B,O as j,a1 as D,a6 as N,g as a,R as f,s as R,aa as C,ap as T,T as z,P as U,I as _,v as F}from"./normalize.c5bfbc35.js";const[H,o]=$("image"),J={src:String,alt:String,fit:String,position:String,round:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:L,errorIcon:P("photo-fail"),iconPrefix:String,showLoading:L,loadingIcon:P("photo")};var O=b({name:H,props:J,emits:["load","error"],setup(e,{emit:g,slots:s}){const n=u(!1),i=u(!0),l=u(),{$Lazyload:t}=k().proxy,S=B(()=>{const r={width:f(e.width),height:f(e.height)};return R(e.radius)&&(r.overflow="hidden",r.borderRadius=f(e.radius)),r});j(()=>e.src,()=>{n.value=!1,i.value=!0});const v=r=>{i.value=!1,g("load",r)},h=r=>{n.value=!0,i.value=!1,g("error",r)},m=(r,c,y)=>y?y():a(_,{name:r,size:e.iconSize,class:c,classPrefix:e.iconPrefix},null),x=()=>{if(i.value&&e.showLoading)return a("div",{class:o("loading")},[m(e.loadingIcon,o("loading-icon"),s.loading)]);if(n.value&&e.showError)return a("div",{class:o("error")},[m(e.errorIcon,o("error-icon"),s.error)])},E=()=>{if(n.value||!e.src)return;const r={alt:e.alt,class:o("img"),style:{objectFit:e.fit,objectPosition:e.position}};return e.lazyLoad?C(a("img",z({ref:l},r),null),[[T("lazy"),e.src]]):a("img",z({src:e.src,onLoad:v,onError:h},r),null)},w=({el:r})=>{const c=()=>{r===l.value&&i.value&&v()};l.value?c():U(c)},I=({el:r})=>{r===l.value&&!n.value&&h()};return t&&D&&(t.$on("loaded",w),t.$on("error",I),N(()=>{t.$off("loaded",w),t.$off("error",I)})),()=>{var r;return a("div",{class:o({round:e.round}),style:S.value},[E(),x(),(r=s.default)==null?void 0:r.call(s)])}}});const q=F(O);export{q as I};
