import { r as registerInstance, h, g as getElement } from './core-5b448c27.js';
var BcgovButton = /** @class */ (function () {
    function BcgovButton(hostRef) {
        registerInstance(this, hostRef);
        /** The action of the button. */
        this.link = "button";
        /** Add a callback to handle events */
        this.eventHandler = this.eventHandlerFunction;
    }
    BcgovButton.prototype.eventHandlerFunction = function () { };
    BcgovButton.prototype.buttonStyle = function () {
        var buttonStyle = "primary";
        if (undefined !== this.primary) {
            buttonStyle = "primary";
        }
        else if (undefined !== this.secondary) {
            buttonStyle = "secondary";
        }
        else if (undefined !== this.dark) {
            buttonStyle = "dark";
        }
        return buttonStyle + " bcgov-button";
    };
    BcgovButton.prototype.componentDidRender = function () {
        this.eventHandler(this.el);
    };
    BcgovButton.prototype.render = function () {
        if ("button" === this.link) {
            return (h("button", { class: this.buttonStyle() }, h("slot", null)));
        }
        else {
            return (h("a", { class: this.buttonStyle(), href: this.link, role: "button" }, h("slot", null)));
        }
    };
    Object.defineProperty(BcgovButton.prototype, "el", {
        get: function () { return getElement(this); },
        enumerable: true,
        configurable: true
    });
    return BcgovButton;
}());
export { BcgovButton as bcgov_button };
