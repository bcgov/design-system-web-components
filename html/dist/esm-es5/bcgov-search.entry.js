import { r as registerInstance, h, H as Host, g as getElement } from './core-07a37eb8.js';
var BcgovSearch = /** @class */ (function () {
    function class_1(hostRef) {
        registerInstance(this, hostRef);
        /** A number that represents mobile search breakpoint in px; */
        this.breakpoint = 0;
    }
    class_1.prototype.componentWillLoad = function () {
        var self = this;
        self.isSearchMobile();
        window.addEventListener("resize", function () {
            self.isSearchMobile();
        });
    };
    class_1.prototype.isSearchMobile = function () {
        if (window.innerWidth >= this.breakpoint) {
            if (!this.el.classList.contains("is-search-desktop")) {
                this.el.classList.add("is-search-desktop");
            }
        }
        else {
            this.el.classList.remove("is-search-desktop");
        }
    };
    class_1.prototype.onKeyPress = function (event) {
        if (event.which === 10 || event.which === 13) {
            event.target.closest('form').submit();
        }
    };
    class_1.prototype.render = function () {
        return (h(Host, { class: "bcgov-search" }, h("div", { class: "search-container" }, h("slot", null))));
    };
    Object.defineProperty(class_1.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return class_1;
}());
export { BcgovSearch as bcgov_search };
