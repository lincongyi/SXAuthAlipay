(self["webpackChunklive_demo"]=self["webpackChunklive_demo"]||[]).push([[826],{338:function(t,e,r){"use strict";r.d(e,{Z:function(){return u}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"face-wrap cw-video"},[e("div",{staticClass:"tip-face"},[e("div",{staticClass:"img-wrap"},[t._t("imgSlot"),t.showDefaultImg?e("img",{staticClass:"default-img",attrs:{src:r(3297),alt:""}}):t._e(),t.loading?e("div",{staticClass:"loading-wrap"},[e("img",{staticClass:"loading-img",attrs:{src:r(1199),alt:""}})]):t._e()],2)]),e("van-circle",{staticClass:"circle",attrs:{color:t.gradientColor,rate:t.rate,size:"57vw",clockwise:!1,"stroke-width":16,"layer-color":"#c9c9c9"},model:{value:t.currentRate,callback:function(e){t.currentRate=e},expression:"currentRate"}}),t._t("default")],2)},o=[],i={props:{loading:{type:Boolean,default:!1},showDefaultImg:{type:Boolean,default:!1}},data:function(){return{currentRate:0,rate:100,gradientColor:{"0%":"#607efd","100%":"#38cbb3"}}},methods:{init:function(){this.rate=100},start:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:5,r=e/12.5,n=setInterval((function(){t.rate=t.rate-r,t.rate<=0&&(t.rate=0,clearInterval(n),t.$emit("timeEnd"))}),20)}}},a=i,c=r(1001),s=(0,c.Z)(a,n,o,!1,null,"0f941145",null),u=s.exports},6826:function(t,e,r){"use strict";r.r(e),r.d(e,{default:function(){return d}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"result"},[e("div",{staticClass:"tip-title"},[t._v("验证成功")]),e("cw-video",{staticClass:"cw-video",scopedSlots:t._u([{key:"imgSlot",fn:function(){return[e("img",{staticClass:"default-img",attrs:{src:t.successImg,alt:""}})]},proxy:!0}])},[e("div",{staticClass:"success-img"},[e("img",{attrs:{src:r(2672),alt:""}})])])],1)},o=[],i=(r(2526),r(1817),r(1539),r(2165),r(8783),r(3948),r(2443),r(3680),r(3706),r(2703),r(9070),r(1703),r(6647),r(489),r(9554),r(4747),r(8304),r(5069),r(7042),r(3336));function a(){
/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
a=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",c=n.asyncIterator||"@@asyncIterator",s=n.toStringTag||"@@toStringTag";function u(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{u({},"")}catch(O){u=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof v?e:v,i=Object.create(o.prototype),a=new I(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return C()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=b(a,r);if(c){if(c===h)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var s=f(t,e,r);if("normal"===s.type){if(n=r.done?"completed":"suspendedYield",s.arg===h)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n="completed",r.method="throw",r.arg=s.arg)}}}(t,r,a),i}function f(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(O){return{type:"throw",arg:O}}}t.wrap=l;var h={};function v(){}function d(){}function p(){}var A={};u(A,o,(function(){return this}));var g=Object.getPrototypeOf,y=g&&g(g(B([])));y&&y!==e&&r.call(y,o)&&(A=y);var m=p.prototype=v.prototype=Object.create(A);function w(t){["next","throw","return"].forEach((function(e){u(t,e,(function(t){return this._invoke(e,t)}))}))}function L(t,e){function n(o,a,c,s){var u=f(t[o],t,a);if("throw"!==u.type){var l=u.arg,h=l.value;return h&&"object"==(0,i.Z)(h)&&r.call(h,"__await")?e.resolve(h.__await).then((function(t){n("next",t,c,s)}),(function(t){n("throw",t,c,s)})):e.resolve(h).then((function(t){l.value=t,c(l)}),(function(t){return n("throw",t,c,s)}))}s(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function b(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator["return"]&&(e.method="return",e.arg=void 0,b(t,e),"throw"===e.method))return h;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return h}var n=f(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,h;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function I(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function B(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:C}}function C(){return{value:void 0,done:!0}}return d.prototype=p,u(m,"constructor",p),u(p,"constructor",d),d.displayName=u(p,s,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===d||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,u(t,s,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(L.prototype),u(L.prototype,c,(function(){return this})),t.AsyncIterator=L,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new L(l(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),u(m,s,"Generator"),u(m,o,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=B,I.prototype={constructor:I,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),s=r.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:B(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),h}},t}function c(t,e,r,n,o,i,a){try{var c=t[i](a),s=c.value}catch(u){return void r(u)}c.done?e(s):Promise.resolve(s).then(n,o)}function s(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){c(i,n,o,a,s,"next",t)}function s(t){c(i,n,o,a,s,"throw",t)}a(void 0)}))}}r(2772);var u=r(338),l={components:{CwVideo:u.Z},data:function(){return{successImg:""}},mounted:function(){var t=this;return s(a().mark((function e(){var r,n,o;return a().wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(r=JSON.parse(localStorage.getItem("result")||"{}"),r.result){t.successImg=r.image,n=navigator.userAgent.indexOf("AliApp")>-1;try{o=n?my:wx.miniProgram}catch(i){console.log(i)}setTimeout((function(){console.warn("跳转成功的url"),o.postMessage({data:r.image}),o.navigateBack({delta:1})}),window.config.successDelayTime)}case 2:case"end":return e.stop()}}),e)})))()},methods:{onClickLeft:function(){console.warn("点击了返回键盘");var t=window.config.returnUrl;location.href=t}}},f=l,h=r(1001),v=(0,h.Z)(f,n,o,!1,null,"094a5f0b",null),d=v.exports},8304:function(t,e,r){var n=r(2109),o=r(7674);n({target:"Object",stat:!0},{setPrototypeOf:o})},2443:function(t,e,r){var n=r(7235);n("asyncIterator")},3297:function(t,e,r){"use strict";t.exports=r.p+"static/img/default.7c2577a2.png"},1199:function(t,e,r){"use strict";t.exports=r.p+"static/img/loading.ca8939ba.gif"},2672:function(t){"use strict";t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABECAYAAAAMalKuAAAAAXNSR0IArs4c6QAAAERlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAA6ABAAMAAAABAAEAAKACAAQAAAABAAAAXKADAAQAAAABAAAARAAAAAAxmBVcAAACvklEQVR4Ae3aOU7EMBQG4AlLx0xBM2fgCCBRcAVuSIeQoERDzXYDOAMtlBTD/0a2FDxJvMR2/OJn6clZHNv58pRlYLGQEiyw3W6PELeI6+BO5EA3AYV9j5rKL0LQ3ej8WwGXMltjY3FXBN2f0n4EaLuwlblkul3Qo4UFW9A9LK1NHbEF3Srp0MATW9AdTHubBGILeq/owI6R2II+YLu3KxK2oO/JdmyIjP0P/bBjvKo3QecYAHeI2F+OB+jzrGpc8+QJG2F+QeoMHVt/oIO1OWa168AQ7FxXX7BzSWMcwRbsjAIZh5LMFuyMAhmHkswW7G4BZMYlYoM46W5R9lZWma2wf1BTeUGwQsd8+XzUYLKU2Robi7vCBh2zZY+tzMvP9DlhF48+R+w2+rKkR+acsYtDV9gPemKR67g/sWJyXQ9I1znTg3TSTMf49ICsAltflMnQa8SeDL1m7OzorLDpzQITftRKkevktxd22Ar8BBN/joytu0uGzhJbvztj8qzQWWNzQ58FNhf0WWGXjj5L7FLRZ41toNNbRori/PaCwfl8rmu80BonS28vk6FXha0v0lToVWK30Jc5M71q7Nzogq3FUQODMv0VkaLQs+IUweP37JaLz2Lj05jaAoT+yLBBXNB65PKN/laR+6TuPhFXTdN8Jejbq0tvcOo9MbrXCTg0Lgab5hoETgcyQS8KexQ4A/TisEeDt9CfsHxO64WUIrHJJviW0oZVt5dS0IvFbpuNXiZ0xBtiyhL3/0ZGqyTuANJToteFra8l0FeI3JleJ7aB/p7p3lI3dmZ0wdbgVKvbS6pMF+w2tl5OhC7YGrirjowu2F3I5rZI6IJtwg6tj0QX7CHcvn2B6ILdB+qy3RNdsF1QbW0c0QXbBumz34Iu2D6Yrm170AXbFTCknYEu2CGIvsco9BvUa99jObX/AzO+xwjfjI+UAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=826-legacy.abf0e0ce.js.map