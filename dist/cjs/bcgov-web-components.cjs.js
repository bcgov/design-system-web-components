'use strict';

var index = require('./index-B8yp6nTe.js');

var _documentCurrentScript = typeof document !== 'undefined' ? document.currentScript : null;
/*
 Stencil Client Patch Browser v4.44.2 | MIT Licensed | https://stenciljs.com
 */

var patchBrowser = () => {
  const importMeta = (typeof document === 'undefined' ? require('u' + 'rl').pathToFileURL(__filename).href : (_documentCurrentScript && _documentCurrentScript.tagName.toUpperCase() === 'SCRIPT' && _documentCurrentScript.src || new URL('bcgov-web-components.cjs.js', document.baseURI).href));
  const opts = {};
  if (importMeta !== "") {
    opts.resourcesUrl = new URL(".", importMeta).href;
  }
  return index.promiseResolve(opts);
};

patchBrowser().then(async (options) => {
  await index.globalScripts();
  return index.bootstrapLazy([["bcgov-beta.cjs",[[512,"bcgov-beta",{"content":[1],"label":[1],"stateContent":[32]}]]],["bcgov-breadcrumb.cjs",[[260,"bcgov-breadcrumb"]]],["bcgov-button.cjs",[[772,"bcgov-button",{"link":[1],"targetHidden":[1,"target-hidden"],"eventHandler":[16],"buttonStyle":[1,"button-style"],"target":[1],"dataTarget":[1,"data-target"],"breakpoint":[32]},[[0,"click","onClick"]]]]],["bcgov-callout.cjs",[[260,"bcgov-callout"]]],["bcgov-carousel.cjs",[[257,"bcgov-carousel"]]],["bcgov-footer.cjs",[[772,"bcgov-footer",{"logo":[1]}]]],["bcgov-form.cjs",[[260,"bcgov-form"]]],["bcgov-header.cjs",[[772,"bcgov-header",{"href":[1],"logo":[1]}]]],["bcgov-menu.cjs",[[772,"bcgov-menu",{"alignment":[1],"primary":[1],"sidebar":[1],"menuId":[1,"menu-id"],"instructions":[1],"href":[1],"name":[1],"breakpoint":[2],"hamburger":[4],"active":[4],"allowHover":[4,"allow-hover"],"menuTimeOut":[2,"menu-time-out"],"isSubmenu":[32],"clone":[32],"allTags":[32],"bodyTag":[32],"menuTimeOutState":[32]},[[1,"mouseenter","onMouseEnter"],[1,"mouseleave","onMouseLeave"],[0,"click","onClick"],[0,"keydown","onKeyDown"]]]]],["bcgov-search.cjs",[[772,"bcgov-search",{"breakpoint":[2]},[[0,"keypress","onKeyPress"]]]]]], options);
});

exports.setNonce = index.setNonce;
