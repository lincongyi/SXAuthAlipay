import{d,r as y,o as m,c as g,a as t,t as i,F as h,p as k,b as w,e as a,f as B,g as u,w as c,h as C,B as D}from"./normalize.b90c4f19.js";import{_ as F}from"./logo.9e2f423b.js";var V=(e,s)=>{const n=e.__vccOpts||e;for(const[o,r]of s)n[o]=r;return n};const _=e=>(k("data-v-f2bba476"),e=e(),w(),e),x=_(()=>t("p",null,[a(" Recommended IDE setup: "),t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VS Code"),a(" + "),t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),A=_(()=>t("p",null,[t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),a(" | "),t("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1)),E=_(()=>t("p",null,[a(" Edit "),t("code",null,"components/HelloWorld.vue"),a(" to test hot module replacement. ")],-1)),S=d({props:{msg:String},setup(e){const s=y(0);return(n,o)=>(m(),g(h,null,[t("h1",null,i(e.msg),1),x,A,t("button",{type:"button",onClick:o[0]||(o[0]=r=>s.value++)},"count is: "+i(s.value),1),E],64))}});var I=V(S,[["__scopeId","data-v-f2bba476"]]);const $=t("img",{alt:"Vue logo",src:F},null,-1),H=a("\u8DF3\u8F6C\u5230demo"),j=a("webView\u4F20\u53C2"),N=a("\u5C0F\u7A0B\u5E8F\u8FD4\u56DE"),O=d({setup(e){const s=()=>window.location.href="./demo.html",n=navigator.userAgent.indexOf("AliApp")>-1;let o;try{o=n?my:wx.miniProgram}catch(p){console.log(p)}const r=window.location.href,v=r.substring(r.indexOf("?")+1);new URLSearchParams(v).get("certToken");const f=()=>{o.postMessage({data:"\u6D4B\u8BD5webview\u901A\u8BAF"})},b=()=>{o.postMessage({data:"\u5C0F\u7A0B\u5E8F\u8FD4\u56DE"}),o.navigateBack({delta:1})};return(p,W)=>{const l=B("van-button");return m(),g(h,null,[$,u(I,{msg:"Hello Vue 3 + Vite"}),u(l,{type:"success",onClick:s},{default:c(()=>[H]),_:1}),u(l,{type:"primary",onClick:f},{default:c(()=>[j]),_:1}),u(l,{type:"primary",onClick:b},{default:c(()=>[N]),_:1})],64)}}});C(O).use(D).mount("#app");
