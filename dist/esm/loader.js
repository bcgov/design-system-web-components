import { g as globalScripts, b as bootstrapLazy } from './index-D50N8331.js';
export { s as setNonce } from './index-D50N8331.js';

const defineCustomElements = async (win, options) => {
  if (typeof window === 'undefined') return undefined;
  await globalScripts();
  return bootstrapLazy([["bcgov-beta_14",[[512,"bcgov-beta",{"content":[1],"label":[1],"stateContent":[32]}],[260,"bcgov-breadcrumb"],[772,"bcgov-button",{"link":[1],"targetHidden":[1,"target-hidden"],"eventHandler":[16],"buttonStyle":[1,"button-style"],"target":[1],"dataTarget":[1,"data-target"],"breakpoint":[32]},[[0,"click","onClick"]]],[260,"bcgov-callout"],[257,"bcgov-carousel"],[772,"bcgov-footer",{"logo":[1]}],[260,"bcgov-form"],[772,"bcgov-header",{"href":[1],"logo":[1]}],[772,"bcgov-menu",{"alignment":[1],"breakpoint":[2],"label":[1],"primary":[4],"sidebar":[4]},[[9,"resize","onResize"],[0,"click","onClick"],[0,"focusout","onFocusOut"],[0,"keydown","onKeyDown"]]],[772,"bcgov-search",{"breakpoint":[2]},[[0,"keypress","onKeyPress"]]],[257,"bcgov-tab"],[772,"bcgov-table",{"breakpoint":[2],"primaryColumn":[2,"primary-column"],"showColumnLabels":[4,"show-column-labels"]},[[9,"resize","onWindowResize"]]],[772,"bcgov-table-row",{"header":[4]}],[257,"bcgov-tabs"]]]], options);
};

export { defineCustomElements };
