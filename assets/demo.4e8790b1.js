import{r as s,e as u,o as U,c as T,f as a,w as l,u as k,i as x,a as b,d as p,g as w,B}from"./normalize.07298e93.js";import{s as y}from"./index.e53281d6.js";import{F as C,a as M,C as S}from"./index.8ab36336.js";import{R as $,a as q}from"./index.960d347d.js";import"./index.0e8fd7f3.js";function G(d){return y({baseURL:"http://gat.shaanxi.gov.cn/auth/k8s/v2/api",url:"/getaccesstoken",method:"get",params:d})}function z(d){return y({baseURL:"http://gat.shaanxi.gov.cn/auth/k8s/v2/api",url:"/authreq",method:"post",data:d})}const A={class:"form-wrap"},E=b("div",{class:"radio-title"},"\u76F4\u63A5\u8DF3\u8F6C",-1),F=p("\u751F\u6D3B\u53F7"),L=b("div",{class:"radio-title"},"\u8DF3\u8F6C\u7A7A\u767D\u9875\u9762\u540E\u91CD\u5B9A\u5411",-1),O=p("\u516C\u4F17\u53F7or\u751F\u6D3B\u53F7"),P=p("MINI PROGRAM"),j={style:{margin:"16px"}},D=p("\u63D0\u4EA4"),H={setup(d){const v=s("dabby_dev_al"),_=s("dabby_dev_al"),h=s(66),i=s(""),m=s(""),N=["H5","MINI"],f=s("2"),I=async()=>{let{accessToken:V}=await G({clientId:v.value,clientSecret:_.value}),e={accessToken:V,authType:"GzhRegular",mode:h.value,extraParams:{foreBackUrl:location.href},businessInfo:{subject:"\u8EAB\u4EFD\u9A8C\u8BC1"},idInfo:{fullName:i.value,idNum:m.value}},{tokenInfo:o}=await z(e),{certToken:c}=o,n=Number(f.value),r;if(n){let g=N[n-1];r=`${{}.NODE_ENV==="production"?"http://gat.shaanxi.gov.cn/auth/k8s/v2/api":"https://sfrz.shxga.gov.cn"}/authgzh/auth?certToken=${c}&env=${g}`}else r=`http://gat.shaanxi.gov.cn/auth/k8s/v2/api/auth?certToken=${c}`;window.location.replace(r)};return(V,e)=>{const o=u("van-field"),c=u("van-cell-group"),n=u("van-radio"),r=u("van-radio-group"),g=u("van-button"),R=u("van-form");return U(),T("div",A,[a(R,{onSubmit:I},{default:l(()=>[a(c,{inset:""},{default:l(()=>[a(o,{modelValue:v.value,"onUpdate:modelValue":e[0]||(e[0]=t=>v.value=t),name:"\u8D26\u53F7",label:"\u8D26\u53F7",placeholder:"\u8D26\u53F7",clearable:"",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u8D26\u53F7"}]},null,8,["modelValue"]),a(o,{modelValue:_.value,"onUpdate:modelValue":e[1]||(e[1]=t=>_.value=t),type:"clientSecret",name:"\u5BC6\u7801",label:"\u5BC6\u7801",placeholder:"\u5BC6\u7801",clearable:"",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u5BC6\u7801"}]},null,8,["modelValue"]),a(o,{modelValue:h.value,"onUpdate:modelValue":e[2]||(e[2]=t=>h.value=t),name:"\u8BA4\u8BC1\u6A21\u5F0F",label:"\u8BA4\u8BC1\u6A21\u5F0F",placeholder:"\u8BA4\u8BC1\u6A21\u5F0F",rules:[{required:!0,message:"\u8BF7\u586B\u5199\u8BA4\u8BC1\u6A21\u5F0F"}]},null,8,["modelValue"]),a(o,{modelValue:k(i),"onUpdate:modelValue":e[3]||(e[3]=t=>x(i)?i.value=t:null),name:"\u59D3\u540D",label:"\u59D3\u540D",maxlength:"18",placeholder:"\u59D3\u540D"},null,8,["modelValue"]),a(o,{modelValue:k(m),"onUpdate:modelValue":e[4]||(e[4]=t=>x(m)?m.value=t:null),name:"\u8BC1\u4EF6\u53F7\u7801",label:"\u8BC1\u4EF6\u53F7\u7801",maxlength:"18",placeholder:"\u8BC1\u4EF6\u53F7\u7801"},null,8,["modelValue"])]),_:1}),a(r,{class:"radio-box",modelValue:f.value,"onUpdate:modelValue":e[5]||(e[5]=t=>f.value=t)},{default:l(()=>[E,a(n,{name:"0"},{default:l(()=>[F]),_:1}),L,a(n,{name:"1"},{default:l(()=>[O]),_:1}),a(n,{name:"2"},{default:l(()=>[P]),_:1})]),_:1},8,["modelValue"]),b("div",j,[a(g,{round:"",block:"",type:"primary","native-type":"submit"},{default:l(()=>[D]),_:1})])]),_:1})])}}};w(H).use(B).use(C).use(M).use(S).use($).use(q).mount("#app");
