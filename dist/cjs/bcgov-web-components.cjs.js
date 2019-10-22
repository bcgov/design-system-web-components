'use strict';

const core = require('./core-06604fdb.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["bcgov-beta.cjs",[[2,"bcgov-beta",{"content":[1],"label":[1]}]]],["bcgov-button.cjs",[[6,"bcgov-button",{"link":[1],"eventHandler":[16],"primary":[1],"secondary":[1],"dark":[1]}]]],["bcgov-callout.cjs",[[6,"bcgov-callout"]]],["bcgov-footer.cjs",[[6,"bcgov-footer"]]],["bcgov-header.cjs",[[2,"bcgov-header",{"href":[1],"headline":[1],"aTags":[16],"imgTags":[16],"headlineTags":[16]}]]],["bcgov-menu.cjs",[[6,"bcgov-menu",{"alignment":[1],"allTags":[16],"menuId":[1,"menu-id"],"instructions":[1],"isSubmenu":[4,"is-submenu"],"href":[1],"name":[1],"clone":[16]},[[1,"mouseenter","onMouseEnter"],[1,"mouseleave","onMouseLeave"]]]]],["bcgov-section-divider.cjs",[[2,"bcgov-section-divider",{"thickness":[8],"margins":[8]}]]]], options);
});
