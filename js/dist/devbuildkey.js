!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="/",r(r.s=0)}([function(e,t,r){e.exports=r(1)},function(e,t,r){var n=r(2)({".dev-indicator":{position:"fixed","z-index":"9999",bottom:"10px",right:"10px",color:"#005B94",display:"none"},".dev-indicator, .dev-indicator div":{height:"15px",width:"15px","border-radius":"50%",border:"2px solid",transition:"all 0.5s ease"},".dev-indicator div":{position:"absolute",top:"-2px",right:"-2px",bottom:"-2px",left:"-2px"},".dev-indicator.loading div":{color:"#44C8F5","border-top-color":"transparent","border-right-color":"transparent","border-bottom-color":"transparent",animation:"dev-indicator-loader 1.4s infinite linear"},".dev-indicator.success":{color:"#208c20"},".dev-indicator.error":{color:"#ED145B"},".dev-indicator.success, .dev-indicator.error, .dev-indicator.loading":{display:"block"},".dev-indicator.success div, .dev-indicator.error div":{border:"1px solid",animation:"dev-indicator-pulse 0.4s infinite linear"},"@keyframes dev-indicator-loader":{"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}},"@keyframes dev-indicator-pulse":{"0%":{transform:"scale(0.7)",opacity:"0"},"50%":{transform:"scale(1)",opacity:"1"},"100%":{transform:"scale(1.3)",opacity:"0"}}}),o=document.head||document.getElementsByTagName("head")[0],i=document.createElement("style");i.type="text/css",i.styleSheet?i.styleSheet.cssText=n:i.appendChild(document.createTextNode(n)),o.appendChild(i);var d=document.createElement("div");d.setAttribute("id","dev-indicator"),d.setAttribute("class","dev-indicator"),document.body.appendChild(d),(d=document.getElementById("dev-indicator")).appendChild(document.createElement("div"));var a=!1;function c(e){if(e.altKey&&68==e.keyCode&&!a){a=!0,s("loading");var t=new XMLHttpRequest;t.onreadystatechange=function(){if(a=!1,4==this.readyState&&200==this.status){var e=document.implementation.createHTMLDocument().documentElement;e.innerHTML=this.responseText,e.querySelectorAll(".error").length>0?(s("error"),d.onClick=function(){document.body.innerHTML=this.responseText}):s("success",!0)}},t.timeout=6e4,t.ontimeout=function(){s("error")},t.open("GET","/dev/build",!0),t.send()}}function s(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=d.classList;r.remove("loading"),r.remove("success"),r.remove("error"),r.add(e),console.log("dev/build: "+e),t&&setTimeout(function(){r.remove("loading"),r.remove("success"),r.remove("error")},4e3)}document.addEventListener?document.addEventListener("keyup",c,!1):document.attachEvent&&document.attachEvent("keyup",c)},function(e,t,r){const n=r(3),o=e=>{return Object.keys(e).map(t=>{const r=e[t];return`${t} {\n${(Array.isArray(r)?r:[r]).map(e=>Object.keys(e).map(t=>"string"==typeof e[t]?`  ${t}: ${e[t]};\n`:n(o(e),"  ")).join("")).join("")}}\n`}).join("\n")};e.exports=(e=>{return(Array.isArray(e)?e:[e]).map(o).join("\n")})},function(e,t,r){"use strict";var n=r(4);e.exports=function(e,t,r){if("string"!=typeof e||"string"!=typeof t)throw new TypeError("`string` and `indent` should be strings");if(null!=r&&"number"!=typeof r)throw new TypeError("`count` should be a number");return 0===r?e:(t=r>1?n(t,r):t,e.replace(/^(?!\s*$)/gm,t))}},function(e,t,r){"use strict";var n=r(5);e.exports=function(e,t){if("string"!=typeof e)throw new TypeError("Expected `input` to be a string");if(t<0||!n(t))throw new TypeError("Expected `count` to be a positive finite number");var r="";do{1&t&&(r+=e),e+=e}while(t>>=1);return r}},function(e,t,r){"use strict";var n=r(6);e.exports=Number.isFinite||function(e){return!("number"!=typeof e||n(e)||e===1/0||e===-1/0)}},function(e,t,r){"use strict";e.exports=Number.isNaN||function(e){return e!=e}}]);
//# sourceMappingURL=devbuildkey.js.map