webpackJsonp([6],{"1lyH":function(e,r,t){var i=t("vLmZ").idTypeArr;e.exports={getIdTypeText:function(e,r){for(var t=i,n="",s=0;s<t.length;s++)if(t[s].value==e){n=t[s].text;break}if(101==e&&r){var o=r.substring(0,6);-1!=r.indexOf("*")&&(o=r.substring(0,3)),-1!=["810000","820000","830000"].indexOf(o)?n="港澳台居民居住证":-1!=["810","820","830"].indexOf(o)&&(n="港澳台居民居住证")}return n},getPhoneInfo:function(){var e={isWeiXin:!0,wxVersion:"",isHigherWx:!0,platform:"",isMobile:!0},r=navigator.userAgent;if(e.ua=r,e.mic=r.toLowerCase().match(/MicroMessenger/i),e.micArr=navigator.userAgent.match(/MicroMessenger\/([\d\.]+)/i),"micromessenger"!=e.mic)e.isWeiXin=!1;else if(e.micArr&&2==e.micArr.length){e.wxVersion=e.micArr[1];try{e.isHigherWx=function(e,r){r=String(r),console.log("baseVersion",r);var t=[],i=r.split(".");if(e&&-1!=e.indexOf(".")){if((t=e.split("."))[0]){if(console.log("test1"),Number(t[0])<Number(i[0]))return!1;if(Number(t[0])>Number(i[0]))return!0}if(t[1]){if(console.log("test2"),Number(t[1])<Number(i[1]))return!1;if(Number(t[1])>Number(i[1]))return!0}if(t[2]){if(console.log("test3"),Number(t[2])<Number(i[2]))return!1;if(Number(t[2])>Number(i[2]))return!0}}return!0}(e.wxVersion,"6.7.2")}catch(e){console.log("error")}}return navigator.platform&&(e.platform=navigator.platform,-1==navigator.platform.indexOf("Mac")&&-1==navigator.platform.indexOf("Win")||(e.isMobile=!1)),console.log(e),e},getUrlParams:function(e){var r=new Object;if(e=String(e),-1!=(e=decodeURIComponent(e)).indexOf("?"))for(var t=e.substring(e.indexOf("?")+1).split("&"),i=0;i<t.length;i++)r[t[i].split("=")[0]]=unescape(t[i].split("=")[1]);return console.log("theRequest",r),r},checkIdNum:function(e,r){var t={pass:!0,tip:"校验通过"},i=/^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;if(18!=e.length)return t.pass=!1,t.tip="身份证号格式错误",t;if(2==r){if(!i.test(e))return t.pass=!1,t.tip="身份证号格式错误",t;for(var n=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2],s=0,o=0;o<n.length;o++)s+=parseInt(e.charAt(o))*n[o];var a=["1","0","X","9","8","7","6","5","4","3","2"][s%11],u=e.charAt(17);return u="x"==u?"X":u,t.pass=u==a,t.pass?t.tip="校验通过":t.tip="身份证号校验码错误",t}return t.pass=i.test(e),t.pass?t.tip="校验通过":t.tip="身份证号格式错误",t},hideCode:function(e,r,t){if(!e)return"";for(var i=e.length-r-t,n="",s=0;s<i;s++)n+="*";return e.substring(0,r)+n+e.substring(e.length-t)},dateFormat:function(e,r){var t="(\\d{4})(\\d{1,2})(\\d{1,2})";r&&(t="(\\d{4})\\"+r+"(\\d{1,2})\\"+r+"(\\d{1,2})");var i=new RegExp(t,"i");return e="00000000"==(e=String(e))?"长期":e.replace(i,"$1年$2月$3日")}}},vLmZ:function(e,r){e.exports={idTypeArr:[{text:"第二代居民身份证",value:101},{value:101,text:"港澳台居民居住证"},{text:"普通护照",value:414},{text:"港澳居民来往内地通行证",value:516}],idTypeArr1:[{value:101,text:"第二代居民身份证"},{value:101,text:"港澳台居民居住证"}],idTypeArr2:[{value:414,text:"普通护照"},{value:516,text:"港澳居民来往内地通行证"}]}}},["1lyH"]);