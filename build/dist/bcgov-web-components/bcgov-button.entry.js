import{r as t,h as s,g as o}from"./p-9ae496aa.js";const r=class{constructor(s){t(this,s),this.link="button",this.eventHandler=this.eventHandlerFunction}eventHandlerFunction(){}buttonStyle(){let t="primary";return void 0!==this.primary?t="primary":void 0!==this.secondary?t="secondary":void 0!==this.dark&&(t="dark"),t+" bcgov-button"}componentDidRender(){this.eventHandler(this.el)}render(){return"button"===this.link?s("button",{class:this.buttonStyle()},s("slot",null)):s("a",{class:this.buttonStyle(),href:this.link,role:"button"},s("slot",null))}get el(){return o(this)}};export{r as bcgov_button};