import { r as registerInstance, h, g as getElement } from './core-5dc11fcc.js';

const BcgovButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
            return (h("button", { class: this.buttonStyle() }, h("slot", null)));
        }
        else {
            return (h("a", { class: this.buttonStyle(), href: this.link, role: "button" }, h("slot", null)));
        }
    }
    get el() { return getElement(this); }
};

export { BcgovButton as bcgov_button };
