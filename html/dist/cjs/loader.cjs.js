'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-cb239ad2.js');

/*
 Stencil Client Patch Esm v2.4.0 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if ( !(index.CSS && index.CSS.supports && index.CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return Promise.resolve().then(function () { return require(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-285ec151.js'); }).then(() => {
            if ((index.plt.$cssShim$ = index.win.__cssshim)) {
                return index.plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return index.promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return index.bootstrapLazy([["bcgov-beta.cjs",[[0,"bcgov-beta",{"content":[1],"label":[1],"stateContent":[32]}]]],["bcgov-breadcrumb.cjs",[[4,"bcgov-breadcrumb"]]],["bcgov-button.cjs",[[4,"bcgov-button",{"link":[1],"targetHidden":[1,"target-hidden"],"eventHandler":[16],"buttonStyle":[1,"button-style"],"target":[1],"dataTarget":[1,"data-target"],"breakpoint":[32]},[[0,"click","onClick"]]]]],["bcgov-callout.cjs",[[4,"bcgov-callout"]]],["bcgov-carousel.cjs",[[1,"bcgov-carousel"]]],["bcgov-footer.cjs",[[4,"bcgov-footer",{"logo":[1]}]]],["bcgov-form.cjs",[[4,"bcgov-form"]]],["bcgov-header.cjs",[[4,"bcgov-header",{"href":[1],"logo":[1]}]]],["bcgov-menu.cjs",[[4,"bcgov-menu",{"alignment":[1],"primary":[1],"sidebar":[1],"menuId":[1,"menu-id"],"instructions":[1],"href":[1],"name":[1],"breakpoint":[2],"hamburger":[4],"active":[4],"allowHover":[4,"allow-hover"],"menuTimeOut":[2,"menu-time-out"],"isSubmenu":[32],"clone":[32],"allTags":[32],"bodyTag":[32],"menuTimeOutState":[32]},[[1,"mouseenter","onMouseEnter"],[1,"mouseleave","onMouseLeave"],[0,"click","onClick"],[0,"keydown","onKeyDown"]]]]],["bcgov-search.cjs",[[4,"bcgov-search",{"breakpoint":[2]},[[0,"keypress","onKeyPress"]]]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
