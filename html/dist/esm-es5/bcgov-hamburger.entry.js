import { r as registerInstance, h, H as Host, g as getElement } from './core-f0efafd8.js';
var BcgovHamburger = /** @class */ (function () {
    function BcgovHamburger(hostRef) {
        registerInstance(this, hostRef);
        /** The target */
        this.target = null;
        /** Breakpoint */
        this.breakpoint = null;
    }
    BcgovHamburger.prototype.onClick = function (event) {
        var element = event.target;
        var parent = element;
        var count = 0;
        do {
            if (null === parent) {
                break;
            }
            parent = parent.parentElement;
            ++count;
        } while (null !== parent && null === parent.getAttribute("target") && count < 3);
        if (undefined !== parent && parent.getAttribute("target")) {
            var menuElement = document.getElementById(parent.getAttribute("target"));
            if (undefined !== menuElement) {
                if (menuElement.classList.contains("in")) {
                    menuElement.classList.remove("in");
                }
                else {
                    menuElement.classList.add("in");
                }
            }
        }
        else {
            console.error("Couldn't find menu for hamburger, Check to make sure id's match");
        }
    };
    BcgovHamburger.prototype.componentWillLoad = function () {
        var parent = this.el.parentElement;
        this.target = this.target || ("BCGOV-MENU" === parent.nodeName && parent.getAttribute("id"));
        this.breakpoint = this.breakpoint || this.getParentBreakpoint();
        this.isDesktop();
        var self = this;
        window.addEventListener("resize", function () {
            self.isDesktop();
        });
    };
    BcgovHamburger.prototype.getParentBreakpoint = function () {
        var value = "0";
        var element = document.getElementById(this.target);
        if (null !== element) {
            value = element.getAttribute("breakpoint");
        }
        return parseInt(value);
    };
    BcgovHamburger.prototype.isDesktop = function () {
        var isdesktop = false;
        if (window.innerWidth >= this.breakpoint) {
            this.el.classList.add("is-desktop");
        }
        else {
            this.el.classList.remove("is-desktop");
        }
        return isdesktop;
    };
    BcgovHamburger.prototype.render = function () {
        return (h(Host, { target: this.target }, h("button", { class: "bcgov-navbar-toggle", "aria-expanded": "false" }, h("div", null), h("slot", null))));
    };
    Object.defineProperty(BcgovHamburger.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return BcgovHamburger;
}());
export { BcgovHamburger as bcgov_hamburger };
