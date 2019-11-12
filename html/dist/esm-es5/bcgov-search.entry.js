import { r as registerInstance, h, H as Host, g as getElement } from './core-413b4b4d.js';
import { l as library, f as faSearch, i as icon } from './index.es-c1255c77.js';
var BcgovSearch = /** @class */ (function () {
    function BcgovSearch(hostRef) {
        registerInstance(this, hostRef);
    }
    BcgovSearch.prototype.componentDidRender = function () {
        var submitElement = this.el.querySelector('input[type="submit"');
        library.add(faSearch);
        submitElement.setAttribute("value", icon(faSearch).html[0]);
    };
    BcgovSearch.prototype.render = function () {
        return (h(Host, null, h("div", { class: "search-container" }, h("slot", { name: "form" }))));
    };
    Object.defineProperty(BcgovSearch.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return BcgovSearch;
}());
export { BcgovSearch as bcgov_search };
