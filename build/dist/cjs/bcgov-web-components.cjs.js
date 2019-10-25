'use strict';

const core = require('./core-22baf073.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["bcgov-beta.cjs",[[0,"bcgov-beta",{"content":[1],"label":[1]}]]],["bcgov-button.cjs",[[4,"bcgov-button",{"link":[1],"eventHandler":[16],"primary":[1],"secondary":[1],"dark":[1]}]]],["bcgov-callout.cjs",[[4,"bcgov-callout"]]],["bcgov-footer.cjs",[[4,"bcgov-footer"]]],["bcgov-header.cjs",[[0,"bcgov-header",{"href":[1],"headline":[1],"aTags":[16],"imgTags":[16],"headlineTags":[16]}]]],["bcgov-menu.cjs",[[4,"bcgov-menu",{"alignment":[1],"allTags":[16],"menuId":[1,"menu-id"],"instructions":[1],"isSubmenu":[4,"is-submenu"],"href":[1],"name":[1],"clone":[16]},[[1,"mouseenter","onMouseEnter"],[1,"mouseleave","onMouseLeave"]]]]],["bcgov-section-divider.cjs",[[0,"bcgov-section-divider",{"thickness":[8],"margins":[8]}]]]], options);
});
