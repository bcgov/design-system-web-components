import { r as registerInstance, h, g as getElement } from './core-5dc11fcc.js';
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
    Object.defineProperty(BcgovButton, "style", {
        get: function () { return "bcgov-button.sc-bcgov-button a.sc-bcgov-button, bcgov-button.sc-bcgov-button button.sc-bcgov-button{display:inline-block;background-color:var(--bcgov-blue-primary);border:2px solid var(--bcgov-blue-primary);margin:4px 4px 4px 0;border-radius:4px;padding:.75rem 1.5rem;font-size:1.1rem;text-align:center;text-decoration:none;font-weight:200;letter-spacing:1px;line-height:1.2;cursor:pointer}bcgov-button.sc-bcgov-button a.sc-bcgov-button, bcgov-button.sc-bcgov-button a.sc-bcgov-button:active, bcgov-button.sc-bcgov-button a.sc-bcgov-button:focus, bcgov-button.sc-bcgov-button a.sc-bcgov-button:visited, bcgov-button.sc-bcgov-button button.sc-bcgov-button, bcgov-button.sc-bcgov-button button.sc-bcgov-button:active, bcgov-button.sc-bcgov-button button.sc-bcgov-button:focus, bcgov-button.sc-bcgov-button button.sc-bcgov-button:visited{color:var(--bcgov-white)}bcgov-button.sc-bcgov-button a.primary.sc-bcgov-button, bcgov-button.sc-bcgov-button button.primary.sc-bcgov-button{color:var(--bcgov-white)!important}bcgov-button.sc-bcgov-button a.secondary.sc-bcgov-button, bcgov-button.sc-bcgov-button button.secondary.sc-bcgov-button{background:none;color:var(--bcgov-blue-primary)!important}bcgov-button.sc-bcgov-button a.dark.sc-bcgov-button, bcgov-button.sc-bcgov-button button.dark.sc-bcgov-button{background:none;border:2px solid var(--bcgov-white)}bcgov-button.sc-bcgov-button a.dark.sc-bcgov-button:hover, bcgov-button.sc-bcgov-button button.dark.sc-bcgov-button:hover{background-color:var(--bcgov-color-background);color:var(--bcgov-color)}bcgov-button.sc-bcgov-button a.sc-bcgov-button:hover, bcgov-button.sc-bcgov-button button.sc-bcgov-button:hover{text-decoration:underline}bcgov-button.sc-bcgov-button a.sc-bcgov-button:disabled, bcgov-button.sc-bcgov-button button.sc-bcgov-button:disabled{cursor:not-allowed}"; },
        enumerable: true,
        configurable: true
    });
    return BcgovButton;
}());
export { BcgovButton as bcgov_button };
