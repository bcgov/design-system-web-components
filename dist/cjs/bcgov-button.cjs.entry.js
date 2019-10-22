'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-06604fdb.js');

const BcgovButton = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
        /** The action of the button. */
        this.link = "button";
        /** Add a callback to handle events */
        this.eventHandler = this.eventHandlerFunction;
    }
    eventHandlerFunction() { }
    buttonStyle() {
        let buttonStyle = "primary";
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
    }
    componentDidRender() {
        this.eventHandler(this.el);
    }
    render() {
        if ("button" === this.link) {
            return (core.h("button", { class: this.buttonStyle() }, core.h("slot", null)));
        }
        else {
            return (core.h("a", { class: this.buttonStyle(), href: this.link, role: "button" }, core.h("slot", null)));
        }
    }
    get el() { return core.getElement(this); }
    static get style() { return "bcgov-button.sc-bcgov-button a.sc-bcgov-button, bcgov-button.sc-bcgov-button button.sc-bcgov-button{display:inline-block;background-color:var(--bcgov-blue-primary);border:2px solid var(--bcgov-blue-primary);margin:4px 4px 4px 0;border-radius:4px;padding:.75rem 1.5rem;font-size:1.1rem;text-align:center;text-decoration:none;font-weight:200;letter-spacing:1px;line-height:1.2;cursor:pointer}bcgov-button.sc-bcgov-button a.sc-bcgov-button, bcgov-button.sc-bcgov-button a.sc-bcgov-button:active, bcgov-button.sc-bcgov-button a.sc-bcgov-button:focus, bcgov-button.sc-bcgov-button a.sc-bcgov-button:visited, bcgov-button.sc-bcgov-button button.sc-bcgov-button, bcgov-button.sc-bcgov-button button.sc-bcgov-button:active, bcgov-button.sc-bcgov-button button.sc-bcgov-button:focus, bcgov-button.sc-bcgov-button button.sc-bcgov-button:visited{color:var(--bcgov-white)}bcgov-button.sc-bcgov-button a.primary.sc-bcgov-button, bcgov-button.sc-bcgov-button button.primary.sc-bcgov-button{color:var(--bcgov-white)!important}bcgov-button.sc-bcgov-button a.secondary.sc-bcgov-button, bcgov-button.sc-bcgov-button button.secondary.sc-bcgov-button{background:none;color:var(--bcgov-blue-primary)!important}bcgov-button.sc-bcgov-button a.dark.sc-bcgov-button, bcgov-button.sc-bcgov-button button.dark.sc-bcgov-button{background:none;border:2px solid var(--bcgov-white)}bcgov-button.sc-bcgov-button a.dark.sc-bcgov-button:hover, bcgov-button.sc-bcgov-button button.dark.sc-bcgov-button:hover{background-color:var(--bcgov-color-background);color:var(--bcgov-color)}bcgov-button.sc-bcgov-button a.sc-bcgov-button:hover, bcgov-button.sc-bcgov-button button.sc-bcgov-button:hover{text-decoration:underline}bcgov-button.sc-bcgov-button a.sc-bcgov-button:disabled, bcgov-button.sc-bcgov-button button.sc-bcgov-button:disabled{cursor:not-allowed}"; }
};

exports.bcgov_button = BcgovButton;
