import{d as m,r as i,o as g,c as v,a as e,t as r,F as h,p as B,b as C,e as a,f as D,g as u,w as _,h as F,B as A}from"./normalize.c5bfbc35.js";import{_ as V}from"./logo.9e2f423b.js";var x=(t,n)=>{const l=t.__vccOpts||t;for(const[o,s]of n)l[o]=s;return l};const p=t=>(B("data-v-f2bba476"),t=t(),C(),t),E=p(()=>e("p",null,[a(" Recommended IDE setup: "),e("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VS Code"),a(" + "),e("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),S=p(()=>e("p",null,[e("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),a(" | "),e("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1)),I=p(()=>e("p",null,[a(" Edit "),e("code",null,"components/HelloWorld.vue"),a(" to test hot module replacement. ")],-1)),$=m({props:{msg:String},setup(t){const n=i(0);return(l,o)=>(g(),v(h,null,[e("h1",null,r(t.msg),1),E,S,e("button",{type:"button",onClick:o[0]||(o[0]=s=>n.value++)},"count is: "+r(n.value),1),I],64))}});var H=x($,[["__scopeId","data-v-f2bba476"]]);const j=e("img",{alt:"Vue logo",src:V},null,-1),N=a("\u8DF3\u8F6C\u5230demo"),O=a("webView\u4F20\u53C2"),P=a("\u5C0F\u7A0B\u5E8F\u8FD4\u56DE"),W=m({setup(t){const n=()=>{window.location.href="./demo.html"};let o=navigator.userAgent.indexOf("AliApp")>-1?my:wx.miniProgram,s=window.location.href;const f=s.substring(s.indexOf("?")+1),d=new URLSearchParams(f),b=i(d.get("name")),y=i(d.get("age")),k=()=>{console.log(o),o.postMessage({data:"\u6D4B\u8BD5webview\u901A\u8BAF"})},w=()=>{o.postMessage({data:"\u5C0F\u7A0B\u5E8F\u8FD4\u56DE"}),o.navigateBack({delta:1})};return(M,R)=>{const c=D("van-button");return g(),v(h,null,[j,u(H,{msg:"Hello Vue 3 + Vite"}),u(c,{type:"success",onClick:n},{default:_(()=>[N]),_:1}),u(c,{type:"primary",onClick:k},{default:_(()=>[O]),_:1}),u(c,{type:"primary",onClick:w},{default:_(()=>[P]),_:1}),e("div",null,"name:"+r(b.value),1),e("div",null,"age:"+r(y.value),1)],64)}}});F(W).use(A).mount("#app");