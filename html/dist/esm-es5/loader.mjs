import { a as patchEsm, b as bootstrapLazy } from './core-07a37eb8.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["bcgov-beta", [[0, "bcgov-beta", { "content": [1], "label": [1] }]]], ["bcgov-breadcrumb", [[4, "bcgov-breadcrumb"]]], ["bcgov-button", [[4, "bcgov-button", { "link": [1], "active": [1], "eventHandler": [16], "buttonStyle": [1, "button-style"], "target": [1], "breakpoint": [32] }, [[0, "click", "onClick"]]]]], ["bcgov-callout", [[4, "bcgov-callout"]]], ["bcgov-carousel", [[1, "bcgov-carousel"]]], ["bcgov-footer", [[4, "bcgov-footer", { "logo": [1] }]]], ["bcgov-form", [[4, "bcgov-form"]]], ["bcgov-header", [[4, "bcgov-header", { "href": [1], "logo": [1] }]]], ["bcgov-menu", [[4, "bcgov-menu", { "alignment": [1], "primary": [1], "sidebar": [1], "menuId": [1, "menu-id"], "instructions": [1], "href": [1], "name": [1], "breakpoint": [2], "hamburger": [4], "active": [4], "isSubmenu": [32], "clone": [32], "allTags": [32] }, [[1, "mouseenter", "onMouseEnter"], [1, "mouseleave", "onMouseLeave"], [0, "click", "onClick"], [0, "keydown", "onKeyDown"]]]]], ["bcgov-search", [[4, "bcgov-search"]]]], options);
    });
};
export { defineCustomElements };
