import { p as promiseResolve, g as globalScripts, b as bootstrapLazy } from './index-DQ-lwiDk.js';
export { s as setNonce } from './index-DQ-lwiDk.js';

/*
 Stencil Client Patch Browser v4.44.2 | MIT Licensed | https://stenciljs.com
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
  return bootstrapLazy([["bcgov-beta",[[512,"bcgov-beta",{"content":[1],"label":[1],"stateContent":[32]}]]],["bcgov-breadcrumb",[[260,"bcgov-breadcrumb"]]],["bcgov-button",[[772,"bcgov-button",{"link":[1],"targetHidden":[1,"target-hidden"],"eventHandler":[16],"buttonStyle":[1,"button-style"],"target":[1],"dataTarget":[1,"data-target"],"breakpoint":[32]},[[0,"click","onClick"]]]]],["bcgov-callout",[[260,"bcgov-callout"]]],["bcgov-carousel",[[257,"bcgov-carousel"]]],["bcgov-footer",[[772,"bcgov-footer",{"logo":[1]}]]],["bcgov-form",[[260,"bcgov-form"]]],["bcgov-header",[[772,"bcgov-header",{"href":[1],"logo":[1]}]]],["bcgov-menu",[[772,"bcgov-menu",{"alignment":[1],"primary":[1],"sidebar":[1],"menuId":[1,"menu-id"],"instructions":[1],"href":[1],"name":[1],"breakpoint":[2],"hamburger":[4],"active":[4],"allowHover":[4,"allow-hover"],"menuTimeOut":[2,"menu-time-out"],"isSubmenu":[32],"clone":[32],"allTags":[32],"bodyTag":[32],"menuTimeOutState":[32]},[[1,"mouseenter","onMouseEnter"],[1,"mouseleave","onMouseLeave"],[0,"click","onClick"],[0,"keydown","onKeyDown"]]]]],["bcgov-search",[[772,"bcgov-search",{"breakpoint":[2]},[[0,"keypress","onKeyPress"]]]]]], options);
});
