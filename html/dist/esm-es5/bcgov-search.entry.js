import { r as registerInstance, h, H as Host, g as getElement } from './index-d7bc6b18.js';
var BcgovSearch = /** @class */ (function () {
    function BcgovSearch(hostRef) {
        registerInstance(this, hostRef);
        /** A number that represents mobile search breakpoint in px; */
        this.breakpoint = 0;
    }
    BcgovSearch.prototype.componentWillLoad = function () {
        var self = this;
        self.isSearchMobile();
        window.addEventListener("resize", function () {
            self.isSearchMobile();
        });
    };
    BcgovSearch.prototype.isSearchMobile = function () {
        if (window.innerWidth >= this.breakpoint) {
            if (!this.el.classList.contains("is-search-desktop")) {
                this.el.classList.add("is-search-desktop");
            }
        }
        else {
            this.el.classList.remove("is-search-desktop");
        }
    };
    BcgovSearch.prototype.onKeyPress = function (event) {
        if (event.which === 10 || event.which === 13) {
            event.target.closest('form').submit();
        }
    };
    BcgovSearch.prototype.render = function () {
        return (h(Host, { class: "bcgov-search" }, h("div", { class: "search-container" }, h("slot", null))));
    };
    Object.defineProperty(BcgovSearch.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: false,
        configurable: true
    });
    return BcgovSearch;
}());
export { BcgovSearch as bcgov_search };
