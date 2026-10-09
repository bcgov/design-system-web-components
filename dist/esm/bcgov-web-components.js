import { p as promiseResolve, g as globalScripts, b as bootstrapLazy } from './index-p84c0ubL.js';
export { s as setNonce } from './index-p84c0ubL.js';

/*
 Stencil Client Patch Browser v4.45.2 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = import.meta.url;
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await globalScripts();
  return bootstrapLazy([["bcgov-beta_11",[[512,"bcgov-beta",{"content":[1],"label":[1],"stateContent":[32]}],[260,"bcgov-breadcrumb"],[772,"bcgov-button",{"link":[1],"targetHidden":[1,"target-hidden"],"eventHandler":[16],"buttonStyle":[1,"button-style"],"target":[1],"dataTarget":[1,"data-target"],"breakpoint":[32]},[[0,"click","onClick"]]],[260,"bcgov-callout"],[257,"bcgov-carousel"],[772,"bcgov-footer",{"logo":[1]}],[260,"bcgov-form"],[772,"bcgov-header",{"href":[1],"logo":[1]}],[772,"bcgov-menu",{"alignment":[1],"primary":[1],"sidebar":[1],"menuId":[1,"menu-id"],"instructions":[1],"href":[1],"name":[1],"breakpoint":[2],"hamburger":[4],"active":[4],"allowHover":[4,"allow-hover"],"menuTimeOut":[2,"menu-time-out"],"isSubmenu":[32],"clone":[32],"allTags":[32],"bodyTag":[32],"menuTimeOutState":[32]},[[1,"mouseenter","onMouseEnter"],[1,"mouseleave","onMouseLeave"],[0,"click","onClick"],[0,"keydown","onKeyDown"]]],[772,"bcgov-search",{"breakpoint":[2]},[[0,"keypress","onKeyPress"]]],[257,"bcgov-tabs"]]]], options);
});
