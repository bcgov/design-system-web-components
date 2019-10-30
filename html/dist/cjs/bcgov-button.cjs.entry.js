'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-49a26586.js');

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
};

exports.bcgov_button = BcgovButton;
