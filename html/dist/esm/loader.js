import { C as CSS, p as plt, w as win, a as promiseResolve, b as bootstrapLazy } from './index-cfce1eb0.js';

/*
 Stencil Client Patch Esm v2.15.2 | MIT Licensed | https://stenciljs.com
 */
const patchEsm = () => {
    // NOTE!! This fn cannot use async/await!
    // @ts-ignore
    if (!(CSS && CSS.supports && CSS.supports('color', 'var(--c)'))) {
        // @ts-ignore
        return import(/* webpackChunkName: "polyfills-css-shim" */ './css-shim-d7866f4d.js').then(() => {
            if ((plt.$cssShim$ = win.__cssshim)) {
                return plt.$cssShim$.i();
            }
            else {
                // for better minification
                return 0;
            }
        });
    }
    return promiseResolve();
};

const defineCustomElements = (win, options) => {
  if (typeof window === 'undefined') return Promise.resolve();
  return patchEsm().then(() => {
  return bootstrapLazy([["bcgov-beta",[[0,"bcgov-beta",{"content":[1],"label":[1],"stateContent":[32]}]]],["bcgov-breadcrumb",[[4,"bcgov-breadcrumb"]]],["bcgov-button",[[4,"bcgov-button",{"link":[1],"targetHidden":[1,"target-hidden"],"eventHandler":[16],"buttonStyle":[1,"button-style"],"target":[1],"dataTarget":[1,"data-target"],"breakpoint":[32]},[[0,"click","onClick"]]]]],["bcgov-callout",[[4,"bcgov-callout"]]],["bcgov-carousel",[[1,"bcgov-carousel"]]],["bcgov-footer",[[4,"bcgov-footer",{"logo":[1]}]]],["bcgov-form",[[4,"bcgov-form"]]],["bcgov-header",[[4,"bcgov-header",{"href":[1],"logo":[1]}]]],["bcgov-menu",[[4,"bcgov-menu",{"alignment":[1],"primary":[1],"sidebar":[1],"menuId":[1,"menu-id"],"instructions":[1],"href":[1],"name":[1],"breakpoint":[2],"hamburger":[4],"active":[4],"allowHover":[4,"allow-hover"],"menuTimeOut":[2,"menu-time-out"],"isSubmenu":[32],"clone":[32],"allTags":[32],"bodyTag":[32],"menuTimeOutState":[32]},[[1,"mouseenter","onMouseEnter"],[1,"mouseleave","onMouseLeave"],[0,"click","onClick"],[0,"keydown","onKeyDown"]]]]],["bcgov-search",[[4,"bcgov-search",{"breakpoint":[2]},[[0,"keypress","onKeyPress"]]]]]], options);
  });
};

export { defineCustomElements };
