import{r as i,o as u,c as p,a as t,t as c,F as d,p as m,b as v,d as s,e as h,f as r,w as g,g as f,B as b}from"./normalize.2120392f.js";import{_ as k}from"./logo.9e2f423b.js";var V=(e,o)=>{const a=e.__vccOpts||e;for(const[n,l]of o)a[n]=l;return a};const _=e=>(m("data-v-164ac555"),e=e(),v(),e),y=_(()=>t("p",null,[s(" Recommended IDE setup: "),t("a",{href:"https://code.visualstudio.com/",target:"_blank"},"VS Code"),s(" + "),t("a",{href:"https://github.com/johnsoncodehk/volar",target:"_blank"},"Volar")],-1)),x=_(()=>t("p",null,[t("a",{href:"https://vitejs.dev/guide/features.html",target:"_blank"}," Vite Documentation "),s(" | "),t("a",{href:"https://v3.vuejs.org/",target:"_blank"},"Vue 3 Documentation")],-1)),S=_(()=>t("p",null,[s(" Edit "),t("code",null,"components/HelloWorld.vue"),s(" to test hot module replacement. ")],-1)),w={props:{msg:String},setup(e){const o=i(0);return(a,n)=>(u(),p(d,null,[t("h1",null,c(e.msg),1),y,x,t("button",{type:"button",onClick:n[0]||(n[0]=l=>o.value++)},"count is: "+c(o.value),1),S],64))}};var B=V(w,[["__scopeId","data-v-164ac555"]]);const C=t("img",{alt:"Vue logo",src:k},null,-1),D=s("\u8DF3\u8F6C\u5230demo"),I={setup(e){const o=()=>{window.location.href="./demo.html"};return(a,n)=>{const l=h("van-button");return u(),p(d,null,[C,r(B,{msg:"Hello Vue 3 + Vite"}),r(l,{type:"success",onClick:o},{default:g(()=>[D]),_:1})],64)}}};f(I).use(b).mount("#app");
