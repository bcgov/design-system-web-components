System.register(["./p-58696d3b.system.js"],(function(t){"use strict";var e,n,r;return{setters:[function(t){e=t.r;n=t.h;r=t.g}],execute:function(){var i=t("bcgov_button",function(){function t(t){e(this,t);this.link="button";this.eventHandler=this.eventHandlerFunction}t.prototype.eventHandlerFunction=function(){};t.prototype.buttonStyle=function(){var t="primary";if(undefined!==this.primary){t="primary"}else if(undefined!==this.secondary){t="secondary"}else if(undefined!==this.dark){t="dark"}return t+" bcgov-button"};t.prototype.componentDidRender=function(){this.eventHandler(this.el)};t.prototype.render=function(){if("button"===this.link){return n("button",{class:this.buttonStyle()},n("slot",null))}else{return n("a",{class:this.buttonStyle(),href:this.link,role:"button"},n("slot",null))}};Object.defineProperty(t.prototype,"el",{get:function(){return r(this)},enumerable:true,configurable:true});return t}())}}}));