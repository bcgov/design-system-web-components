import{r as registerInstance,h,H as Host,g as getElement}from"./index-cfce1eb0.js";
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function _classCallCheck(n,t){if(!(n instanceof t)){throw new TypeError("Cannot call a class as a function")}}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var a=t[e];a.enumerable=a.enumerable||false;a.configurable=true;if("value"in a)a.writable=true;Object.defineProperty(n,a.key,a)}}function _createClass(n,t,e){if(t)_defineProperties(n.prototype,t);if(e)_defineProperties(n,e);return n}function _defineProperty(n,t,e){if(t in n){Object.defineProperty(n,t,{value:e,enumerable:true,configurable:true,writable:true})}else{n[t]=e}return n}function _objectSpread(n){for(var t=1;t<arguments.length;t++){var e=arguments[t]!=null?arguments[t]:{};var a=Object.keys(e);if(typeof Object.getOwnPropertySymbols==="function"){a=a.concat(Object.getOwnPropertySymbols(e).filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})))}a.forEach((function(t){_defineProperty(n,t,e[t])}))}return n}function _slicedToArray(n,t){return _arrayWithHoles(n)||_iterableToArrayLimit(n,t)||_nonIterableRest()}function _arrayWithHoles(n){if(Array.isArray(n))return n}function _iterableToArrayLimit(n,t){var e=[];var a=true;var r=false;var i=undefined;try{for(var o=n[Symbol.iterator](),s;!(a=(s=o.next()).done);a=true){e.push(s.value);if(t&&e.length===t)break}}catch(c){r=true;i=c}finally{try{if(!a&&o["return"]!=null)o["return"]()}finally{if(r)throw i}}return e}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var _WINDOW={};var _DOCUMENT={};try{if(typeof window!=="undefined")_WINDOW=window;if(typeof document!=="undefined")_DOCUMENT=document}catch(e){}var _ref=_WINDOW.navigator||{},_ref$userAgent=_ref.userAgent,userAgent=_ref$userAgent===void 0?"":_ref$userAgent;var WINDOW=_WINDOW;var DOCUMENT=_DOCUMENT;var IS_DOM=!!DOCUMENT.documentElement&&!!DOCUMENT.head&&typeof DOCUMENT.addEventListener==="function"&&typeof DOCUMENT.createElement==="function";~userAgent.indexOf("MSIE")||~userAgent.indexOf("Trident/");var NAMESPACE_IDENTIFIER="___FONT_AWESOME___";var DEFAULT_FAMILY_PREFIX="fa";var DEFAULT_REPLACEMENT_CLASS="svg-inline--fa";var DATA_FA_I2SVG="data-fa-i2svg";var DUOTONE_CLASSES={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"};var initial=WINDOW.FontAwesomeConfig||{};function getAttrConfig(n){var t=DOCUMENT.querySelector("script["+n+"]");if(t){return t.getAttribute(n)}}function coerce(n){if(n==="")return true;if(n==="false")return false;if(n==="true")return true;return n}if(DOCUMENT&&typeof DOCUMENT.querySelector==="function"){var attrs=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];attrs.forEach((function(n){var t=_slicedToArray(n,2),e=t[0],a=t[1];var r=coerce(getAttrConfig(e));if(r!==undefined&&r!==null){initial[a]=r}}))}var _default={familyPrefix:DEFAULT_FAMILY_PREFIX,replacementClass:DEFAULT_REPLACEMENT_CLASS,autoReplaceSvg:true,autoAddCss:true,autoA11y:true,searchPseudoElements:false,observeMutations:true,mutateApproach:"async",keepOriginalSource:true,measurePerformance:false,showMissingIcons:true};var _config=_objectSpread({},_default,initial);if(!_config.autoReplaceSvg)_config.observeMutations=false;var config=_objectSpread({},_config);WINDOW.FontAwesomeConfig=config;var w=WINDOW||{};if(!w[NAMESPACE_IDENTIFIER])w[NAMESPACE_IDENTIFIER]={};if(!w[NAMESPACE_IDENTIFIER].styles)w[NAMESPACE_IDENTIFIER].styles={};if(!w[NAMESPACE_IDENTIFIER].hooks)w[NAMESPACE_IDENTIFIER].hooks={};if(!w[NAMESPACE_IDENTIFIER].shims)w[NAMESPACE_IDENTIFIER].shims=[];var namespace=w[NAMESPACE_IDENTIFIER];var functions=[];var listener=function n(){DOCUMENT.removeEventListener("DOMContentLoaded",n);loaded=1;functions.map((function(n){return n()}))};var loaded=false;if(IS_DOM){loaded=(DOCUMENT.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(DOCUMENT.readyState);if(!loaded)DOCUMENT.addEventListener("DOMContentLoaded",listener)}typeof setImmediate==="undefined"?setTimeout:setImmediate;var meaninglessTransform={size:16,x:0,y:0,rotate:0,flipX:false,flipY:false};function insertCss(n){if(!n||!IS_DOM){return}var t=DOCUMENT.createElement("style");t.setAttribute("type","text/css");t.innerHTML=n;var e=DOCUMENT.head.childNodes;var a=null;for(var r=e.length-1;r>-1;r--){var i=e[r];var o=(i.tagName||"").toUpperCase();if(["STYLE","LINK"].indexOf(o)>-1){a=i}}DOCUMENT.head.insertBefore(t,a);return n}var idPool="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function nextUniqueId(){var n=12;var t="";while(n-- >0){t+=idPool[Math.random()*62|0]}return t}function htmlEscape(n){return"".concat(n).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function joinAttributes(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,'="').concat(htmlEscape(n[e]),'" ')}),"").trim()}function joinStyles(n){return Object.keys(n||{}).reduce((function(t,e){return t+"".concat(e,": ").concat(n[e],";")}),"")}function transformIsMeaningful(n){return n.size!==meaninglessTransform.size||n.x!==meaninglessTransform.x||n.y!==meaninglessTransform.y||n.rotate!==meaninglessTransform.rotate||n.flipX||n.flipY}function transformForSvg(n){var t=n.transform,e=n.containerWidth,a=n.iconWidth;var r={transform:"translate(".concat(e/2," 256)")};var i="translate(".concat(t.x*32,", ").concat(t.y*32,") ");var o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") ");var s="rotate(".concat(t.rotate," 0 0)");var c={transform:"".concat(i," ").concat(o," ").concat(s)};var l={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:c,path:l}}var ALL_SPACE={x:0,y:0,width:"100%",height:"100%"};function fillBlack(n){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:true;if(n.attributes&&(n.attributes.fill||t)){n.attributes.fill="black"}return n}function deGroup(n){if(n.tag==="g"){return n.children}else{return[n]}}function makeIconMasking(n){var t=n.children,e=n.attributes,a=n.main,r=n.mask,i=n.maskId,o=n.transform;var s=a.width,c=a.icon;var l=r.width,f=r.icon;var u=transformForSvg({transform:o,containerWidth:l,iconWidth:s});var d={tag:"rect",attributes:_objectSpread({},ALL_SPACE,{fill:"white"})};var m=c.children?{children:c.children.map(fillBlack)}:{};var g={tag:"g",attributes:_objectSpread({},u.inner),children:[fillBlack(_objectSpread({tag:c.tag,attributes:_objectSpread({},c.attributes,u.path)},m))]};var p={tag:"g",attributes:_objectSpread({},u.outer),children:[g]};var h="mask-".concat(i||nextUniqueId());var v="clip-".concat(i||nextUniqueId());var b={tag:"mask",attributes:_objectSpread({},ALL_SPACE,{id:h,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[d,p]};var y={tag:"defs",children:[{tag:"clipPath",attributes:{id:v},children:deGroup(f)},b]};t.push(y,{tag:"rect",attributes:_objectSpread({fill:"currentColor","clip-path":"url(#".concat(v,")"),mask:"url(#".concat(h,")")},ALL_SPACE)});return{children:t,attributes:e}}function makeIconStandard(n){var t=n.children,e=n.attributes,a=n.main,r=n.transform,i=n.styles;var o=joinStyles(i);if(o.length>0){e["style"]=o}if(transformIsMeaningful(r)){var s=transformForSvg({transform:r,containerWidth:a.width,iconWidth:a.width});t.push({tag:"g",attributes:_objectSpread({},s.outer),children:[{tag:"g",attributes:_objectSpread({},s.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:_objectSpread({},a.icon.attributes,s.path)}]}]})}else{t.push(a.icon)}return{children:t,attributes:e}}function asIcon(n){var t=n.children,e=n.main,a=n.mask,r=n.attributes,i=n.styles,o=n.transform;if(transformIsMeaningful(o)&&e.found&&!a.found){var s=e.width,c=e.height;var l={x:s/c/2,y:.5};r["style"]=joinStyles(_objectSpread({},i,{"transform-origin":"".concat(l.x+o.x/16,"em ").concat(l.y+o.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function asSymbol(n){var t=n.prefix,e=n.iconName,a=n.children,r=n.attributes,i=n.symbol;var o=i===true?"".concat(t,"-").concat(config.familyPrefix,"-").concat(e):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:_objectSpread({},r,{id:o}),children:a}]}]}function makeInlineSvgAbstract(n){var t=n.icons,e=t.main,a=t.mask,r=n.prefix,i=n.iconName,o=n.transform,s=n.symbol,c=n.title,l=n.maskId,f=n.titleId,u=n.extra,d=n.watchable,m=d===void 0?false:d;var g=a.found?a:e,p=g.width,h=g.height;var v=r==="fak";var b=v?"":"fa-w-".concat(Math.ceil(p/h*16));var y=[config.replacementClass,i?"".concat(config.familyPrefix,"-").concat(i):"",b].filter((function(n){return u.classes.indexOf(n)===-1})).filter((function(n){return n!==""||!!n})).concat(u.classes).join(" ");var w={children:[],attributes:_objectSpread({},u.attributes,{"data-prefix":r,"data-icon":i,class:y,role:u.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(p," ").concat(h)})};var I=v&&!~u.classes.indexOf("fa-fw")?{width:"".concat(p/h*16*.0625,"em")}:{};if(m){w.attributes[DATA_FA_I2SVG]=""}if(c)w.children.push({tag:"title",attributes:{id:w.attributes["aria-labelledby"]||"title-".concat(f||nextUniqueId())},children:[c]});var E=_objectSpread({},w,{prefix:r,iconName:i,main:e,mask:a,maskId:l,transform:o,symbol:s,styles:_objectSpread({},I,u.styles)});var A=a.found&&e.found?makeIconMasking(E):makeIconStandard(E),_=A.children,S=A.attributes;E.children=_;E.attributes=S;if(s){return asSymbol(E)}else{return asIcon(E)}}var bindInternal4=function n(t,e){return function(n,a,r,i){return t.call(e,n,a,r,i)}};var reduce=function n(t,e,a,r){var i=Object.keys(t),o=i.length,s=r!==undefined?bindInternal4(e,r):e,c,l,f;if(a===undefined){c=1;f=t[i[0]]}else{c=0;f=a}for(;c<o;c++){l=i[c];f=s(f,t[l],l,t)}return f};function defineIcons(n,t){var e=arguments.length>2&&arguments[2]!==undefined?arguments[2]:{};var a=e.skipHooks,r=a===void 0?false:a;var i=Object.keys(t).reduce((function(n,e){var a=t[e];var r=!!a.icon;if(r){n[a.iconName]=a.icon}else{n[e]=a}return n}),{});if(typeof namespace.hooks.addPack==="function"&&!r){namespace.hooks.addPack(n,i)}else{namespace.styles[n]=_objectSpread({},namespace.styles[n]||{},i)}if(n==="fas"){defineIcons("fa",t)}}var styles=namespace.styles,shims=namespace.shims;var build=function n(){var t=function n(t){return reduce(styles,(function(n,e,a){n[a]=reduce(e,t,{});return n}),{})};t((function(n,t,e){if(t[3]){n[t[3]]=e}return n}));t((function(n,t,e){var a=t[2];n[e]=e;a.forEach((function(t){n[t]=e}));return n}));var e="far"in styles;reduce(shims,(function(n,t){var a=t[0];var r=t[1];var i=t[2];if(r==="far"&&!e){r="fas"}n[a]={prefix:r,iconName:i};return n}),{})};build();function iconFromMapping(n,t,e){if(n&&n[t]&&n[t][e]){return{prefix:t,iconName:e,icon:n[t][e]}}}function toHtml(n){var t=n.tag,e=n.attributes,a=e===void 0?{}:e,r=n.children,i=r===void 0?[]:r;if(typeof n==="string"){return htmlEscape(n)}else{return"<".concat(t," ").concat(joinAttributes(a),">").concat(i.map(toHtml).join(""),"</").concat(t,">")}}function MissingIcon(n){this.name="MissingIcon";this.message=n||"Icon unavailable";this.stack=(new Error).stack}MissingIcon.prototype=Object.create(Error.prototype);MissingIcon.prototype.constructor=MissingIcon;var FILL={fill:"currentColor"};var ANIMATION_BASE={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};({tag:"path",attributes:_objectSpread({},FILL,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var OPACITY_ANIMATE=_objectSpread({},ANIMATION_BASE,{attributeName:"opacity"});({tag:"circle",attributes:_objectSpread({},FILL,{cx:"256",cy:"364",r:"28"}),children:[{tag:"animate",attributes:_objectSpread({},ANIMATION_BASE,{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:_objectSpread({},OPACITY_ANIMATE,{values:"1;0;1;1;0;1;"})}]});({tag:"path",attributes:_objectSpread({},FILL,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:[{tag:"animate",attributes:_objectSpread({},OPACITY_ANIMATE,{values:"1;0;0;0;0;1;"})}]});({tag:"path",attributes:_objectSpread({},FILL,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:_objectSpread({},OPACITY_ANIMATE,{values:"0;0;1;1;0;0;"})}]});function asFoundIcon(n){var t=n[0];var e=n[1];var a=n.slice(4),r=_slicedToArray(a,1),i=r[0];var o=null;if(Array.isArray(i)){o={tag:"g",attributes:{class:"".concat(config.familyPrefix,"-").concat(DUOTONE_CLASSES.GROUP)},children:[{tag:"path",attributes:{class:"".concat(config.familyPrefix,"-").concat(DUOTONE_CLASSES.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(config.familyPrefix,"-").concat(DUOTONE_CLASSES.PRIMARY),fill:"currentColor",d:i[1]}}]}}else{o={tag:"path",attributes:{fill:"currentColor",d:i}}}return{found:true,width:t,height:e,icon:o}}var baseStyles='svg:not(:root).svg-inline--fa {\n  overflow: visible;\n}\n\n.svg-inline--fa {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -0.125em;\n}\n.svg-inline--fa.fa-lg {\n  vertical-align: -0.225em;\n}\n.svg-inline--fa.fa-w-1 {\n  width: 0.0625em;\n}\n.svg-inline--fa.fa-w-2 {\n  width: 0.125em;\n}\n.svg-inline--fa.fa-w-3 {\n  width: 0.1875em;\n}\n.svg-inline--fa.fa-w-4 {\n  width: 0.25em;\n}\n.svg-inline--fa.fa-w-5 {\n  width: 0.3125em;\n}\n.svg-inline--fa.fa-w-6 {\n  width: 0.375em;\n}\n.svg-inline--fa.fa-w-7 {\n  width: 0.4375em;\n}\n.svg-inline--fa.fa-w-8 {\n  width: 0.5em;\n}\n.svg-inline--fa.fa-w-9 {\n  width: 0.5625em;\n}\n.svg-inline--fa.fa-w-10 {\n  width: 0.625em;\n}\n.svg-inline--fa.fa-w-11 {\n  width: 0.6875em;\n}\n.svg-inline--fa.fa-w-12 {\n  width: 0.75em;\n}\n.svg-inline--fa.fa-w-13 {\n  width: 0.8125em;\n}\n.svg-inline--fa.fa-w-14 {\n  width: 0.875em;\n}\n.svg-inline--fa.fa-w-15 {\n  width: 0.9375em;\n}\n.svg-inline--fa.fa-w-16 {\n  width: 1em;\n}\n.svg-inline--fa.fa-w-17 {\n  width: 1.0625em;\n}\n.svg-inline--fa.fa-w-18 {\n  width: 1.125em;\n}\n.svg-inline--fa.fa-w-19 {\n  width: 1.1875em;\n}\n.svg-inline--fa.fa-w-20 {\n  width: 1.25em;\n}\n.svg-inline--fa.fa-pull-left {\n  margin-right: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-pull-right {\n  margin-left: 0.3em;\n  width: auto;\n}\n.svg-inline--fa.fa-border {\n  height: 1.5em;\n}\n.svg-inline--fa.fa-li {\n  width: 2em;\n}\n.svg-inline--fa.fa-fw {\n  width: 1.25em;\n}\n\n.fa-layers svg.svg-inline--fa {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.fa-layers {\n  display: inline-block;\n  height: 1em;\n  position: relative;\n  text-align: center;\n  vertical-align: -0.125em;\n  width: 1em;\n}\n.fa-layers svg.svg-inline--fa {\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter, .fa-layers-text {\n  display: inline-block;\n  position: absolute;\n  text-align: center;\n}\n\n.fa-layers-text {\n  left: 50%;\n  top: 50%;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  -webkit-transform-origin: center center;\n          transform-origin: center center;\n}\n\n.fa-layers-counter {\n  background-color: #ff253a;\n  border-radius: 1em;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  color: #fff;\n  height: 1.5em;\n  line-height: 1;\n  max-width: 5em;\n  min-width: 1.5em;\n  overflow: hidden;\n  padding: 0.25em;\n  right: 0;\n  text-overflow: ellipsis;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-bottom-right {\n  bottom: 0;\n  right: 0;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom right;\n          transform-origin: bottom right;\n}\n\n.fa-layers-bottom-left {\n  bottom: 0;\n  left: 0;\n  right: auto;\n  top: auto;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: bottom left;\n          transform-origin: bottom left;\n}\n\n.fa-layers-top-right {\n  right: 0;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top right;\n          transform-origin: top right;\n}\n\n.fa-layers-top-left {\n  left: 0;\n  right: auto;\n  top: 0;\n  -webkit-transform: scale(0.25);\n          transform: scale(0.25);\n  -webkit-transform-origin: top left;\n          transform-origin: top left;\n}\n\n.fa-lg {\n  font-size: 1.3333333333em;\n  line-height: 0.75em;\n  vertical-align: -0.0667em;\n}\n\n.fa-xs {\n  font-size: 0.75em;\n}\n\n.fa-sm {\n  font-size: 0.875em;\n}\n\n.fa-1x {\n  font-size: 1em;\n}\n\n.fa-2x {\n  font-size: 2em;\n}\n\n.fa-3x {\n  font-size: 3em;\n}\n\n.fa-4x {\n  font-size: 4em;\n}\n\n.fa-5x {\n  font-size: 5em;\n}\n\n.fa-6x {\n  font-size: 6em;\n}\n\n.fa-7x {\n  font-size: 7em;\n}\n\n.fa-8x {\n  font-size: 8em;\n}\n\n.fa-9x {\n  font-size: 9em;\n}\n\n.fa-10x {\n  font-size: 10em;\n}\n\n.fa-fw {\n  text-align: center;\n  width: 1.25em;\n}\n\n.fa-ul {\n  list-style-type: none;\n  margin-left: 2.5em;\n  padding-left: 0;\n}\n.fa-ul > li {\n  position: relative;\n}\n\n.fa-li {\n  left: -2em;\n  position: absolute;\n  text-align: center;\n  width: 2em;\n  line-height: inherit;\n}\n\n.fa-border {\n  border: solid 0.08em #eee;\n  border-radius: 0.1em;\n  padding: 0.2em 0.25em 0.15em;\n}\n\n.fa-pull-left {\n  float: left;\n}\n\n.fa-pull-right {\n  float: right;\n}\n\n.fa.fa-pull-left,\n.fas.fa-pull-left,\n.far.fa-pull-left,\n.fal.fa-pull-left,\n.fab.fa-pull-left {\n  margin-right: 0.3em;\n}\n.fa.fa-pull-right,\n.fas.fa-pull-right,\n.far.fa-pull-right,\n.fal.fa-pull-right,\n.fab.fa-pull-right {\n  margin-left: 0.3em;\n}\n\n.fa-spin {\n  -webkit-animation: fa-spin 2s infinite linear;\n          animation: fa-spin 2s infinite linear;\n}\n\n.fa-pulse {\n  -webkit-animation: fa-spin 1s infinite steps(8);\n          animation: fa-spin 1s infinite steps(8);\n}\n\n@-webkit-keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n\n@keyframes fa-spin {\n  0% {\n    -webkit-transform: rotate(0deg);\n            transform: rotate(0deg);\n  }\n  100% {\n    -webkit-transform: rotate(360deg);\n            transform: rotate(360deg);\n  }\n}\n.fa-rotate-90 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";\n  -webkit-transform: rotate(90deg);\n          transform: rotate(90deg);\n}\n\n.fa-rotate-180 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";\n  -webkit-transform: rotate(180deg);\n          transform: rotate(180deg);\n}\n\n.fa-rotate-270 {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";\n  -webkit-transform: rotate(270deg);\n          transform: rotate(270deg);\n}\n\n.fa-flip-horizontal {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";\n  -webkit-transform: scale(-1, 1);\n          transform: scale(-1, 1);\n}\n\n.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(1, -1);\n          transform: scale(1, -1);\n}\n\n.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {\n  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";\n  -webkit-transform: scale(-1, -1);\n          transform: scale(-1, -1);\n}\n\n:root .fa-rotate-90,\n:root .fa-rotate-180,\n:root .fa-rotate-270,\n:root .fa-flip-horizontal,\n:root .fa-flip-vertical,\n:root .fa-flip-both {\n  -webkit-filter: none;\n          filter: none;\n}\n\n.fa-stack {\n  display: inline-block;\n  height: 2em;\n  position: relative;\n  width: 2.5em;\n}\n\n.fa-stack-1x,\n.fa-stack-2x {\n  bottom: 0;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n}\n\n.svg-inline--fa.fa-stack-1x {\n  height: 1em;\n  width: 1.25em;\n}\n.svg-inline--fa.fa-stack-2x {\n  height: 2em;\n  width: 2.5em;\n}\n\n.fa-inverse {\n  color: #fff;\n}\n\n.sr-only {\n  border: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n}\n\n.sr-only-focusable:active, .sr-only-focusable:focus {\n  clip: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  position: static;\n  width: auto;\n}\n\n.svg-inline--fa .fa-primary {\n  fill: var(--fa-primary-color, currentColor);\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa .fa-secondary {\n  fill: var(--fa-secondary-color, currentColor);\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-primary {\n  opacity: 0.4;\n  opacity: var(--fa-secondary-opacity, 0.4);\n}\n\n.svg-inline--fa.fa-swap-opacity .fa-secondary {\n  opacity: 1;\n  opacity: var(--fa-primary-opacity, 1);\n}\n\n.svg-inline--fa mask .fa-primary,\n.svg-inline--fa mask .fa-secondary {\n  fill: black;\n}\n\n.fad.fa-inverse {\n  color: #fff;\n}';function css(){var n=DEFAULT_FAMILY_PREFIX;var t=DEFAULT_REPLACEMENT_CLASS;var e=config.familyPrefix;var a=config.replacementClass;var r=baseStyles;if(e!==n||a!==t){var i=new RegExp("\\.".concat(n,"\\-"),"g");var o=new RegExp("\\--".concat(n,"\\-"),"g");var s=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(e,"-")).replace(o,"--".concat(e,"-")).replace(s,".".concat(a))}return r}var Library=function(){function n(){_classCallCheck(this,n);this.definitions={}}_createClass(n,[{key:"add",value:function n(){var t=this;for(var e=arguments.length,a=new Array(e),r=0;r<e;r++){a[r]=arguments[r]}var i=a.reduce(this._pullDefinitions,{});Object.keys(i).forEach((function(n){t.definitions[n]=_objectSpread({},t.definitions[n]||{},i[n]);defineIcons(n,i[n]);build()}))}},{key:"reset",value:function n(){this.definitions={}}},{key:"_pullDefinitions",value:function n(t,e){var a=e.prefix&&e.iconName&&e.icon?{0:e}:e;Object.keys(a).map((function(n){var e=a[n],r=e.prefix,i=e.iconName,o=e.icon;if(!t[r])t[r]={};t[r][i]=o}));return t}}]);return n}();function ensureCss(){if(config.autoAddCss&&!_cssInserted){insertCss(css());_cssInserted=true}}function apiObject(n,t){Object.defineProperty(n,"abstract",{get:t});Object.defineProperty(n,"html",{get:function t(){return n.abstract.map((function(n){return toHtml(n)}))}});Object.defineProperty(n,"node",{get:function t(){if(!IS_DOM)return;var e=DOCUMENT.createElement("div");e.innerHTML=n.html;return e.children}});return n}function findIconDefinition(n){var t=n.prefix,e=t===void 0?"fa":t,a=n.iconName;if(!a)return;return iconFromMapping(library.definitions,e,a)||iconFromMapping(namespace.styles,e,a)}function resolveIcons(n){return function(t){var e=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var a=(t||{}).icon?t:findIconDefinition(t||{});var r=e.mask;if(r){r=(r||{}).icon?r:findIconDefinition(r||{})}return n(a,_objectSpread({},e,{mask:r}))}}var library=new Library;var _cssInserted=false;var icon=resolveIcons((function(n){var t=arguments.length>1&&arguments[1]!==undefined?arguments[1]:{};var e=t.transform,a=e===void 0?meaninglessTransform:e,r=t.symbol,i=r===void 0?false:r,o=t.mask,s=o===void 0?null:o,c=t.maskId,l=c===void 0?null:c,f=t.title,u=f===void 0?null:f,d=t.titleId,m=d===void 0?null:d,g=t.classes,p=g===void 0?[]:g,h=t.attributes,v=h===void 0?{}:h,b=t.styles,y=b===void 0?{}:b;if(!n)return;var w=n.prefix,I=n.iconName,E=n.icon;return apiObject(_objectSpread({type:"icon"},n),(function(){ensureCss();if(config.autoA11y){if(u){v["aria-labelledby"]="".concat(config.replacementClass,"-title-").concat(m||nextUniqueId())}else{v["aria-hidden"]="true";v["focusable"]="false"}}return makeInlineSvgAbstract({icons:{main:asFoundIcon(E),mask:s?asFoundIcon(s.icon):{found:false,width:null,height:null,icon:{}}},prefix:w,iconName:I,transform:_objectSpread({},meaninglessTransform,a),symbol:i,title:u,maskId:l,titleId:m,extra:{attributes:v,styles:y,classes:p}})}))}));
/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var faSearch={prefix:"fas",iconName:"search",icon:[512,512,[],"f002","M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"]};var BcgovButton=function(){function n(n){registerInstance(this,n);this.link="button";this.targetHidden="false";this.eventHandler=this.eventHandlerFunction;this.buttonStyle="primary";this.target=null;this.dataTarget=null;this.breakpoint=700}n.prototype.eventHandlerFunction=function(){};n.prototype.componentDidRender=function(){this.eventHandler(this.el);var n=this.el.getAttribute("button-style");if("search"===n||"search-inline"===n){library.add(faSearch);var t=this.el.querySelector("button");var e=icon(faSearch).html[0];t.innerHTML='<span class="bcgov-svg-icon">'.concat(e,'</span><span class="bcgov-button-text">').concat(t.innerHTML,"</span>")}else if("search-inline-close"===n){var t=this.el.querySelector("button");t.innerHTML='<span class="bcgov-button-text">'.concat(t.innerHTML,"</span>")}};n.prototype.componentWillLoad=function(){if(null!==this.dataTarget){var n=this;this.breakpoint=this.getParentBreakpoint();this.el.setAttribute("data-breakpoint","".concat(this.breakpoint));var t=document.getElementById(this.dataTarget);if(null!==t){if("false"===this.targetHidden){t.classList.add("target-hidden")}window.addEventListener("click",(function(t){var e=t.srcElement;var a=n.el.querySelector("button");if(null===e.closest("bcgov-menu")){if(e.parentElement!==n.el){if("true"===a.getAttribute("aria-expanded",true));}}}))}this.isDesktop();window.addEventListener("resize",(function(){n.isDesktop()}))}};n.prototype.getParentBreakpoint=function(){var n="0";if(null!==this.dataTarget){var t=document.getElementById(this.dataTarget);if(null!==t&&t.hasAttribute("breakpoint")){n=t.getAttribute("breakpoint")}}return parseInt(n)};n.prototype.isDesktop=function(){var n=false;if(window.innerWidth>=this.breakpoint){this.el.classList.add("is-desktop")}else{this.el.classList.remove("is-desktop")}return n};n.prototype.onClick=function(n){if(null!==this.dataTarget){var t=document.getElementById(this.dataTarget);var e=this.el.querySelector("button");if(null!==t){if(undefined!==e&&e.hasAttribute("aria-expanded")){e.setAttribute("aria-expanded","true"===t.getAttribute("aria-expanded")?"false":"true")}if(t.classList.contains("target-hidden")){t.classList.remove("target-hidden")}else{t.classList.add("target-hidden")}}}if("search-inline-close"===this.buttonStyle){var t=this.el.closest("bcgov-search");if(t.classList.contains("target-hidden")){t.classList.remove("target-hidden")}else{t.classList.add("target-hidden")}n.preventDefault();return false}};n.prototype.render=function(){var n="".concat(this.buttonStyle);if(this.el.hasAttribute("active")){n="".concat(n," active")}if(this.el.hasAttribute("disable")||this.el.hasAttribute("disabled")){n="".concat(n," disabled")}var t={class:n};if(["hamburger","search"].includes(this.buttonStyle)){t["aria-expanded"]=this.targetHidden;if(this.buttonStyle==="search"){t["aria-label"]="Search"}else if(this.buttonStyle==="hamburger"){t["aria-label"]="Hamburger"}return h(Host,{"data-target":this.dataTarget,class:"bcgov-button"},h("button",Object.assign({},t),h("div",null),h("span",{class:"bcgov-button-text"},h("slot",null))))}else{if("button"===this.link){if("search-inline"==this.buttonStyle){t["type"]="submit"}return h(Host,{class:"bcgov-button"},h("button",Object.assign({},t),h("slot",null)))}else{t["href"]=this.link;t["target"]=this.target;t["role"]="button";return h(Host,{class:"bcgov-button"},h("a",Object.assign({},t),h("slot",null)))}}};Object.defineProperty(n.prototype,"el",{get:function(){return getElement(this)},enumerable:false,configurable:true});return n}();export{BcgovButton as bcgov_button};