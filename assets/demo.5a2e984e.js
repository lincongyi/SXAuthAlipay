import{r as s,e as u,o as R,c as U,f as a,w as o,u as k,i as w,a as g,d as _,g as T,B as $}from"./normalize.07298e93.js";import{s as y}from"./index.2e83570f.js";import{F as z,a as B,C}from"./index.8ab36336.js";import{R as M,a as S}from"./index.ffd36224.js";import"./index.0e8fd7f3.js";function q(d){return y({baseURL:"https://sfrz.wsbs.shxga.gov.cn",url:"/getaccesstoken",method:"get",params:d})}function G(d){return y({baseURL:"https://sfrz.wsbs.shxga.gov.cn",url:"/authreq",method:"post",data:d})}const A={class:"form-wrap"},F=g("div",{class:"radio-title"},"\u76F4\u63A5\u8DF3\u8F6C",-1),L=_("\u751F\u6D3B\u53F7"),P=g("div",{class:"radio-title"},"\u8DF3\u8F6C\u7A7A\u767D\u9875\u9762\u540E\u91CD\u5B9A\u5411",-1),j=_("\u751F\u6D3B\u53F7"),E=_("MINI PROGRAM"),H={style:{margin:"16px"}},O=_("\u63D0\u4EA4"),D={setup(d){const v=s("dabby_dev_al"),f=s("dabby_dev_al"),h=s(66),m=s(""),i=s(""),I=["H5","MINI"],b=s("2"),N=async()=>{let{accessToken:V}=await q({clientId:v.value,clientSecret:f.value}),e={accessToken:V,authType:"GzhRegular",mode:h.value,extraParams:{foreBackUrl:location.href},businessInfo:{subject:"\u8EAB\u4EFD\u9A8C\u8BC1"},idInfo:{fullName:m.value,idNum:i.value}},{tokenInfo:l}=await G(e),{certToken:c}=l,n=Number(b.value),r;if(n){let p=I[n-1];r=`https://sfrz.wsbs.shxga.gov.cn/authgzh/auth?certToken=${c}&env=${p}`}else r=`https://sfrz.wsbs.shxga.gov.cn/authlife/auth?certToken=${c}`;window.location.replace(r)};return(V,e)=>{const l=u("van-field"),c=u("van-cell-group"),n=u("van-radio"),r=u("van-radio-group"),p=u("van-button"),x=u("van-form");return R(),U("div",A,[a(x,{onSubmit:N},{default:o(()=>[a(c,{inset:""},{default:o(()=>[a(l,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=t=>v.value=t),name:"\u8D26\u53F7",label:"\u8D26\u53F7",placeholder:"\u8D26\u53F7",clearable:"",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u8D26\u53F7"}]},null,8,["modelValue"]),a(l,{modelValue:f.value,"onUpdate:modelValue":e[1]||(e[1]=t=>f.value=t),type:"clientSecret",name:"\u5BC6\u7801",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",clearable:"",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"]),a(l,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=t=>h.value=t),name:"\u8BA4\u8BC1\u6A21\u5F0F",label:"\u8BA4\u8BC1\u6A21\u5F0F",placeholder:"\u8BA4\u8BC1\u6A21\u5F0F",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u8BA4\u8BC1\u6A21\u5F0F"}]},null,8,["modelValue"]),a(l,{modelValue:k(m),"onUpdate:modelValue":e[3]||(e[3]=t=>w(m)?m.value=t:null),name:"\u59D3\u540D",label:"\u59D3\u540D",maxlength:"18",placeholder:"\u59D3\u540D"},null,8,["modelValue"]),a(l,{modelValue:k(i),"onUpdate:modelValue":e[4]||(e[4]=t=>w(i)?i.value=t:null),name:"\u8BC1\u4EF6\u53F7\u7801",label:"\u8BC1\u4EF6\u53F7\u7801",maxlength:"18",placeholder:"\u8BC1\u4EF6\u53F7\u7801"},null,8,["modelValue"])]),_:1}),a(r,{class:"radio-box",modelValue:b.value,"onUpdate:modelValue":e[5]||(e[5]=t=>b.value=t)},{default:o(()=>[F,a(n,{name:"0"},{default:o(()=>[L]),_:1}),P,a(n,{name:"1"},{default:o(()=>[j]),_:1}),a(n,{name:"2"},{default:o(()=>[E]),_:1})]),_:1},8,["modelValue"]),g("div",H,[a(p,{round:"",block:"",type:"primary","native-type":"submit"},{default:o(()=>[O]),_:1})])]),_:1})])}}};T(D).use($).use(z).use(B).use(C).use(M).use(S).mount("#app");
