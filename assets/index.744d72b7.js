import{c as n,d as g}from"./certification-successful.68958ccd.js";import{_ as c}from"./logo.9e2f423b.js";var i="./assets/auth-logo.cdd60c32.png",_="./assets/auth-task-logo.2a440b93.png";function E(s,e,t){if(!s)return"";const a=s.length-e-t;let o="";for(let r=0;r<a;r++)o+="*";return s.substring(0,e)+o+s.substring(s.length-t)}function h(s){return new URL({"/src/assets/auth-logo.png":i,"/src/assets/auth-task-logo.png":_,"/src/assets/certification-failed.png":n,"/src/assets/certification-successful.png":g,"/src/assets/logo.png":c}[`/src/assets/${s}.png`],self.location).href}const f=()=>({VITE_USER_NODE_ENV:"production",VITE_AUTH_BASE_URL:"https://sfrz.wsbs.shxga.gov.cn/authlife",VITE_DEMO_BASE_URL:"https://sfrz.wsbs.shxga.gov.cn",VITE_V3_BASE_URL:"https://sfrz.wsbs.shxga.gov.cn/v3/api",VITE_CLIENT_ID:"dabby_test",VITE_CLIENT_SECRET:"dabby_dev_scrt",VITE_SERVICE_AGREEMENT:"https://sfrz.wsbs.shxga.gov.cn/auth/shanxiauthagreement/sxauthuseragreement.html",BASE_URL:"./",MODE:"production",DEV:!1,PROD:!0}),p=s=>{const e=s.getFullYear();let t=`${s.getMonth()+1}`,a=`${s.getDate()}`;return Number(t)<10&&(t=`0${t}`),Number(a)<10&&(a=`0${a}`),`${e}${t}${a}`};export{_ as a,p as f,h as g,E as h,f as l};
