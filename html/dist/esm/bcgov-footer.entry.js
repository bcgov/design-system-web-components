import { r as registerInstance, h, H as Host } from './core-10536731.js';

const BcgovFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        /** Alignment of menu */
        this.alignment = "left";
    }
    render() {
        const classes = "bcgov-footer" + " align-" + this.alignment;
        const props = { role: "footer", class: classes };
        return (h(Host, Object.assign({}, props), h("slot", null)));
    }
};

export { BcgovFooter as bcgov_footer };
