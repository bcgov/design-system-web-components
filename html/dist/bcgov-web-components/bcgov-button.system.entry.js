System.register(["./core-053aa9d4.system.js"],(function(n){"use strict";var t,e,a,r;return{setters:[function(n){t=n.r;e=n.h;a=n.H;r=n.g}],execute:function(){function i(n,t){if(!(n instanceof t)){throw new TypeError("Cannot call a class as a function")}}function o(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(n,a.key,a)}}function s(n,t,e){if(t)o(n.prototype,t);if(e)o(n,e);return n}function f(n,t,e){if(t in n){Object.defineProperty(n,t,{value:e,enumerable:true,configurable:true,writable:true})}else{n[t]=e}return n}function l(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};var a=Object.keys(e);if(typeof Object.getOwnPropertySymbols==="function"){a=a.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))}a.forEach((function(t){f(n,t,e[t])}))}return n}function c(n,t){return u(n)||m(n,t)||d()}function u(n){if(Array.isArray(n))return n}function m(n,t){var e=[];var a=true;var r=false;var i=undefined;try{for(var o=n[Symbol.iterator](),s;!(a=(s=o.next()).done);a=true){e.push(s.value);if(t&&e.length===t)break}}catch(f){r=true;i=f}finally{try{if(!a&&o["return"]!=null)o["return"]()}finally{if(r)throw i}}return e}function d(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var v={};var g={};try{if(typeof window!=="undefined")v=window;if(typeof document!=="undefined")g=document}catch(Rn){}var h=v.navigator||{},p=h.userAgent,b=p===void 0?"":p;var y=v;var w=g;var k=!!w.documentElement&&!!w.head&&typeof w.addEventListener==="function"&&typeof w.createElement==="function";var x=~b.indexOf("MSIE")||~b.indexOf("Trident/");var z="___FONT_AWESOME___";var M="fa";var O="svg-inline--fa";var C="data-fa-i2svg";var P=function(){try{return"production"==="production"}catch(Rn){return false}}();var L={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"};var A=y.FontAwesomeConfig||{};function E(n){var t=w.querySelector("script["+n+"]");if(t){return t.getAttribute(n)}}function S(n){if(n==="")return true;if(n==="false")return false;if(n==="true")return true;return n}if(w&&typeof w.querySelector==="function"){var I=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];I.forEach((function(n){var t=c(n,2),e=t[0],a=t[1];var r=S(E(e));if(r!==undefined&&r!==null){A[a]=r}}))}var j={familyPrefix:M,replacementClass:O,autoReplaceSvg:true,autoAddCss:true,autoA11y:true,searchPseudoElements:false,observeMutations:true,mutateApproach:"async",keepOriginalSource:true,measurePerformance:false,showMissingIcons:true};var N=l({},j,A);if(!N.autoReplaceSvg)N.observeMutations=false;var D=l({},N);y.FontAwesomeConfig=D;var T=y||{};if(!T[z])T[z]={};if(!T[z].styles)T[z].styles={};if(!T[z].hooks)T[z].hooks={};if(!T[z].shims)T[z].shims=[];var R=T[z];var H=[];var B=function n(){w.removeEventListener("DOMContentLoaded",n);W=1;H.map((function(n){return n()}))};var W=false;if(k){W=(w.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(w.readyState);if(!W)w.addEventListener("DOMContentLoaded",B)}var X={size:16,x:0,y:0,rotate:0,flipX:false,flipY:false};function _(n){if(!n||!k){return}var t=w.createElement("style");t.setAttribute("type","text/css");t.innerHTML=n;var e=w.head.childNodes;var a=null;for(var r=e.length-1;r>-1;r--){var i=e[r];var o=(i.tagName||"").toUpperCase();if(["STYLE","LINK"].indexOf(o)>-1){a=i}}w.head.insertBefore(t,a);return n}var Y="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function U(){var n=12;var t="";while(n-- >0){t+=Y[Math.random()*62|0]}return t}function q(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function F(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,'="').concat(q(n[e]),'" ')}),"").trim()}function V(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,": ").concat(n[e],";")}),"")}function G(n){return n.size!==X.size||n.x!==X.x||n.y!==X.y||n.rotate!==X.rotate||n.flipX||n.flipY}function K(n){var t=n.transform,e=n.containerWidth,a=n.iconWidth;var r={transform:"translate(".concat(e/2," 256)")};var i="translate(".concat(t.x*32,", ").concat(t.y*32,") ");var o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") ");var s="rotate(".concat(t.rotate," 0 0)");var f={transform:"".concat(i," ").concat(o," ").concat(s)};var l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:f,path:l}}var J={x:0,y:0,width:"100%",height:"100%"};function Q(n){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(n.attributes&&(n.attributes.fill||t)){n.attributes.fill="black"}return n}function Z(n){if(n.tag==="g"){return n.children}else{return[n]}}function $(n){var t=n.children,e=n.attributes,a=n.main,r=n.mask,i=n.transform;var o=a.width,s=a.icon;var f=r.width,c=r.icon;var u=K({transform:i,containerWidth:f,iconWidth:o});var m={tag:"rect",attributes:l({},J,{fill:"white"})};var d=s.children?{children:s.children.map(Q)}:{};var v={tag:"g",attributes:l({},u.inner),children:[Q(l({tag:s.tag,attributes:l({},s.attributes,u.path)},d))]};var g={tag:"g",attributes:l({},u.outer),children:[v]};var h="mask-".concat(U());var p="clip-".concat(U());var b={tag:"mask",attributes:l({},J,{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[m,g]};var y={tag:"defs",children:[{tag:"clipPath",attributes:{id:p},children:Z(c)},b]};t.push(y,{tag:"rect",attributes:l({fill:"currentColor","clip-path":"url(#".concat(p,")"),mask:"url(#".concat(h,")")},J)});return{children:t,attributes:e}}function nn(n){var t=n.children,e=n.attributes,a=n.main,r=n.transform,i=n.styles;var o=V(i);if(o.length>0){e["style"]=o}if(G(r)){var s=K({transform:r,containerWidth:a.width,iconWidth:a.width});t.push({tag:"g",attributes:l({},s.outer),children:[{tag:"g",attributes:l({},s.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:l({},a.icon.attributes,s.path)}]}]})}else{t.push(a.icon)}return{children:t,attributes:e}}function tn(n){var t=n.children,e=n.main,a=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(G(o)&&e.found&&!a.found){var s=e.width,f=e.height;var c={x:s/f/2,y:.5};r["style"]=V(l({},i,{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function en(n){var t=n.prefix,e=n.iconName,a=n.children,r=n.attributes,i=n.symbol;var o=i===true?"".concat(t,"-").concat(D.familyPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:l({},r,{id:o}),children:a}]}]}function an(n){var t=n.icons,e=t.main,a=t.mask,r=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,f=n.title,c=n.extra,u=n.watchable,m=u===void 0?false:u;var d=a.found?a:e,v=d.width,g=d.height;var h="fa-w-".concat(Math.ceil(v/g*16));var p=[D.replacementClass,i?"".concat(D.familyPrefix,"-").concat(i):"",h].filter((function(n){return c.classes.indexOf(n)===-1})).concat(c.classes).join(" ");var b={children:[],attributes:l({},c.attributes,{"data-prefix":r,"data-icon":i,class:p,role:c.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(v," ").concat(g)})};if(m){b.attributes[C]=""}if(f)b.children.push({tag:"title",attributes:{id:b.attributes["aria-labelledby"]||"title-".concat(U())},children:[f]});var y=l({},b,{prefix:r,iconName:i,main:e,mask:a,transform:o,symbol:s,styles:c.styles});var w=a.found&&e.found?$(y):nn(y),k=w.children,x=w.attributes;y.children=k;y.attributes=x;if(s){return en(y)}else{return tn(y)}}var rn=function n(t,e){return function(n,a,r,i){return t.call(e,n,a,r,i)}};var on=function n(t,e,a,r){var i=Object.keys(t),o=i.length,s=r!==undefined?rn(e,r):e,f,l,c;if(a===undefined){f=1;c=t[i[0]]}else{f=0;c=a}for(;f<o;f++){l=i[f];c=s(c,t[l],l,t)}return c};function sn(n,t){var e=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var a=e.skipHooks,r=a===void 0?false:a;var i=Object.keys(t).reduce((function(n,e){var a=t[e];var r=!!a.icon;if(r){n[a.iconName]=a.icon}else{n[e]=a}return n}),{});if(typeof R.hooks.addPack==="function"&&!r){R.hooks.addPack(n,i)}else{R.styles[n]=l({},R.styles[n]||{},i)}if(n==="fas"){sn("fa",t)}}var fn=R.styles,ln=R.shims;var cn={};var un={};var mn={};var dn=function n(){var t=function n(t){return on(fn,(function(n,e,a){n[a]=on(e,t,{});return n}),{})};cn=t((function(n,t,e){if(t[3]){n[t[3]]=e}return n}));un=t((function(n,t,e){var a=t[2];n[e]=e;a.forEach((function(t){n[t]=e}));return n}));var e="far"in fn;mn=on(ln,(function(n,t){var a=t[0];var r=t[1];var i=t[2];if(r==="far"&&!e){r="fas"}n[a]={prefix:r,iconName:i};return n}),{})};dn();function vn(n,t,e){if(n&&n[t]&&n[t][e]){return{prefix:t,iconName:e,icon:n[t][e]}}}function gn(n){var t=n.tag,e=n.attributes,a=e===void 0?{}:e,r=n.children,i=r===void 0?[]:r;if(typeof n==="string"){return q(n)}else{return"<".concat(t," ").concat(F(a),">").concat(i.map(gn).join(""),"</").concat(t,">")}}function hn(n){this.name="MissingIcon";this.message=n||"Icon unavailable";this.stack=(new Error).stack}hn.prototype=Object.create(Error.prototype);hn.prototype.constructor=hn;var pn={fill:"currentColor"};var bn={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};var yn={tag:"path",attributes:l({},pn,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})};var wn=l({},bn,{attributeName:"opacity"});var kn={tag:"circle",attributes:l({},pn,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:l({},bn,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:l({},wn,{values:"1;0;1;1;0;1;"})}]};var xn={tag:"path",attributes:l({},pn,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:l({},wn,{values:"1;0;0;0;0;1;"})}]};var zn={tag:"path",attributes:l({},pn,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:l({},wn,{values:"0;0;1;1;0;0;"})}]};function Mn(n){var t=n[0];var e=n[1];var a=n.slice(4),r=c(a,1),i=r[0];var o=null;if(Array.isArray(i)){o={tag:"g",attributes:{class:"".concat(D.familyPrefix,"-").concat(L.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.familyPrefix,"-").concat(L.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(D.familyPrefix,"-").concat(L.PRIMARY),fill:"currentColor",d:i[1]}}]}}else{o={tag:"path",attributes:{fill:"currentColor",d:i}}}return{found:true,width:t,height:e,icon:o}}var On='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';function Cn(){var n=M;var t=O;var e=D.familyPrefix;var a=D.replacementClass;var r=On;if(e!==n||a!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g");var o=new RegExp("\\--".concat(n,"\\-"),"g");var s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Pn=function(){function n(){i(this,n);this.definitions={}}s(n,[{key:"add",value:function n(){var t=this;for(var e=arguments.length,a=new Array(e),r=0;r<e;r++){a[r]=arguments[r]}var i=a.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(n){t.definitions[n]=l({},t.definitions[n]||{},i[n]);sn(n,i[n]);dn()}))}},{key:"reset",value:function n(){this.definitions={}}},{key:"_pullDefinitions",value:function n(t,e){var a=e.prefix&&e.iconName&&e.icon?{0:e}:e;Object.keys(a).map((function(n){var e=a[n],r=e.prefix,i=e.iconName,o=e.icon;if(!t[r])t[r]={};t[r][i]=o}));return t}}]);return n}();function Ln(){if(D.autoAddCss&&!jn){_(Cn());jn=true}}function An(n,t){Object.defineProperty(n,"abstract",{get:t});Object.defineProperty(n,"html",{get:function t(){return n.abstract.map((function(n){return gn(n)}))}});Object.defineProperty(n,"node",{get:function t(){if(!k)return;var e=w.createElement("div");e.innerHTML=n.html;return e.children}});return n}function En(n){var t=n.prefix,e=t===void 0?"fa":t,a=n.iconName;if(!a)return;return vn(In.definitions,e,a)||vn(R.styles,e,a)}function Sn(n){return function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var a=(t||{}).icon?t:En(t||{});var r=e.mask;if(r){r=(r||{}).icon?r:En(r||{})}return n(a,l({},e,{mask:r}))}}var In=new Pn;var jn=false;var Nn=Sn((function(n){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var e=t.transform,a=e===void 0?X:e,r=t.symbol,i=r===void 0?false:r,o=t.mask,s=o===void 0?null:o,f=t.title,c=f===void 0?null:f,u=t.classes,m=u===void 0?[]:u,d=t.attributes,v=d===void 0?{}:d,g=t.styles,h=g===void 0?{}:g;if(!n)return;var p=n.prefix,b=n.iconName,y=n.icon;return An(l({type:"icon"},n),(function(){Ln();if(D.autoA11y){if(c){v["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(U())}else{v["aria-hidden"]="true";v["focusable"]="false"}}return an({icons:{main:Mn(y),mask:s?Mn(s.icon):{found:false,width:null,height:null,icon:{}}},prefix:p,iconName:b,transform:l({},X,a),symbol:i,title:c,extra:{attributes:v,styles:h,classes:m}})}))}));var Dn={prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]};var Tn=n("bcgov_button",function(){function n(n){t(this,n);this.link="button";this.eventHandler=this.eventHandlerFunction;this.buttonStyle="primary";this.target=null;this.breakpoint=700}n.prototype.eventHandlerFunction=function(){};n.prototype.componentDidRender=function(){this.eventHandler(this.el);if("search"===this.el.getAttribute("button-style")){In.add(Dn);var n=this.el.querySelector("button");n.innerHTML=Nn(Dn).html[0]}};n.prototype.componentWillLoad=function(){if(null!==this.target){this.breakpoint=this.getParentBreakpoint();this.isDesktop();var n=this;window.addEventListener("resize",(function(){n.isDesktop()}))}};n.prototype.getParentBreakpoint=function(){var n="0";if(null!==this.target){var t=document.getElementById(this.target);if(null!==t&&t.hasAttribute("breakpoint")){n=t.getAttribute("breakpoint")}}return parseInt(n)};n.prototype.isDesktop=function(){var n=false;if(window.innerWidth>=this.breakpoint){this.el.classList.add("is-desktop")}else{this.el.classList.remove("is-desktop")}return n};n.prototype.onClick=function(){if(null!==this.target){var n=document.getElementById(this.target);var t=this.el.querySelector("button");if(null!==n){if(undefined!==t&&t.hasAttribute("aria-expanded")){t.setAttribute("aria-expanded",n.classList.contains("in")?"false":"true")}if(n.classList.contains("in")){n.classList.remove("in")}else{n.classList.add("in")}}}};n.prototype.render=function(){var n=this.buttonStyle+" bcgov-button";if(["hamburger","search"].includes(this.buttonStyle)){return e(a,{target:this.target},e("button",{class:n,"aria-expanded":"false"},e("div",null),e("slot",null)))}else{if("button"===this.link){return e("button",{class:n},e("slot",null))}else{return e("a",{class:n,href:this.link,role:"button"},e("slot",null))}}};Object.defineProperty(n.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return n}())}}}));