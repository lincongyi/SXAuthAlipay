import{d,r as m,o as g,c as h,a as e,t as p,F as v,p as w,b as B,e as a,f as C,g as l,w as c,h as D,B as F}from"./normalize.729e6abb.js";import{_ as V}from"./logo.9e2f423b.js";var x=(t,n)=>{const s=t.__vccOpts||t;for(const[o,r]of n)s[o]=r;return s};const _=t=>(w("data-v-f2bba476"),t=t(),B(),t),A=_(()=>e("p",null,[a(" Recommended IDE setup: "),e("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VS Code"),a(" + "),e("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),E=_(()=>e("p",null,[e("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),a(" | "),e("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1)),S=_(()=>e("p",null,[a(" Edit "),e("code",null,"components/HelloWorld.vue"),a(" to test hot module replacement. ")],-1)),I=d({props:{msg:String},setup(t){const n=m(0);return(s,o)=>(g(),h(v,null,[e("h1",null,p(t.msg),1),A,E,e("button",{type:"button",onClick:o[0]||(o[0]=r=>n.value++)},"count is: "+p(n.value),1),S],64))}});var $=x(I,[["__scopeId","data-v-f2bba476"]]);const H=e("img",{alt:"Vue logo",src:V},null,-1),j=a("\u8DF3\u8F6C\u5230demo"),N=a("webView\u4F20\u53C2"),O=a("\u5C0F\u7A0B\u5E8F\u8FD4\u56DE"),P=d({setup(t){const n=()=>{window.location.href="./demo.html"};let s=navigator.userAgent.indexOf("AliApp")>-1,o;try{o=s?my:wx.miniProgram}catch(i){console.log(i)}let r=window.location.href;const f=r.substring(r.indexOf("?")+1),b=new URLSearchParams(f);m(b.get("certToken"));const y=()=>{o.postMessage({data:"\u6D4B\u8BD5webview\u901A\u8BAF"})},k=()=>{o.postMessage({data:"\u5C0F\u7A0B\u5E8F\u8FD4\u56DE"}),o.navigateBack({delta:1})};return(i,W)=>{const u=C("van-button");return g(),h(v,null,[H,l($,{msg:"Hello Vue 3 + Vite"}),l(u,{type:"success",onClick:n},{default:c(()=>[j]),_:1}),l(u,{type:"primary",onClick:y},{default:c(()=>[N]),_:1}),l(u,{type:"primary",onClick:k},{default:c(()=>[O]),_:1})],64)}}});D(P).use(F).mount("#app");
