import{r as o,e as d,o as x,c as T,f as l,w as f,u as i,i as c,a as k,d as y,g as I,B as N}from"./normalize.9ed2938e.js";import{s as h,F as C,a as U,C as w,N as E}from"./index.35ad0248.js";import"./index.6da00043.js";function B(n){return h({baseURL:"http://gat.shaanxi.gov.cn/auth",url:"/getaccesstoken",method:"get",params:n})}function S(n){return h({baseURL:"http://gat.shaanxi.gov.cn/auth",url:"/authreq",method:"post",data:n})}const R={class:"form-wrap"},q={style:{margin:"16px"}},L=y("\u63D0\u4EA4"),F={setup(n){const u=o({}.VITE_CLIENT_ID)||o(""),s=o({}.VITE_CLIENT_SECRET)||o(""),p=o(66),r=o(""),m=o(""),V=async()=>{let{accessToken:g}=await B({clientId:u.value,clientSecret:s.value}),e={accessToken:g,authType:"GzhRegular",mode:p.value,extraParams:{foreBackUrl:location.href},businessInfo:{subject:"\u8EAB\u4EFD\u9A8C\u8BC1"},idInfo:{fullName:r.value,idNum:m.value}},{tokenInfo:t}=await S(e),{certToken:v}=t,_=`http://gat.shaanxi.gov.cn/auth/authlife/auth/sxauthalipay/toMiniProgram.html?certToken=${v}`;window.location.replace(_)};return(g,e)=>{const t=d("van-field"),v=d("van-cell-group"),_=d("van-button"),b=d("van-form");return x(),T("div",R,[l(b,{onSubmit:V},{default:f(()=>[l(v,{inset:""},{default:f(()=>[l(t,{modelValue:i(u),"onUpdate:modelValue":e[0]||(e[0]=a=>c(u)?u.value=a:null),name:"\u8D26\u53F7",label:"\u8D26\u53F7",placeholder:"\u8D26\u53F7",clearable:"",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u8D26\u53F7"}]},null,8,["modelValue"]),l(t,{modelValue:i(s),"onUpdate:modelValue":e[1]||(e[1]=a=>c(s)?s.value=a:null),type:"clientSecret",name:"\u5BC6\u7801",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",clearable:"",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"]),l(t,{modelValue:p.value,"onUpdate:modelValue":e[2]||(e[2]=a=>p.value=a),name:"\u8BA4\u8BC1\u6A21\u5F0F",label:"\u8BA4\u8BC1\u6A21\u5F0F",placeholder:"\u8BA4\u8BC1\u6A21\u5F0F",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u8BA4\u8BC1\u6A21\u5F0F"}]},null,8,["modelValue"]),l(t,{modelValue:i(r),"onUpdate:modelValue":e[3]||(e[3]=a=>c(r)?r.value=a:null),name:"\u59D3\u540D",label:"\u59D3\u540D",maxlength:"18",placeholder:"\u59D3\u540D"},null,8,["modelValue"]),l(t,{modelValue:i(m),"onUpdate:modelValue":e[4]||(e[4]=a=>c(m)?m.value=a:null),name:"\u8BC1\u4EF6\u53F7\u7801",label:"\u8BC1\u4EF6\u53F7\u7801",maxlength:"18",placeholder:"\u8BC1\u4EF6\u53F7\u7801"},null,8,["modelValue"])]),_:1}),k("div",q,[l(_,{round:"",block:"",type:"primary","native-type":"submit"},{default:f(()=>[L]),_:1})])]),_:1})])}}};I(F).use(N).use(C).use(U).use(w).use(E).mount("#app");
