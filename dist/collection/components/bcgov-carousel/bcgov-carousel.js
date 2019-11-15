import { Host, h } from "@stencil/core";
export class BcgovCarousel {
    render() {
        return (h(Host, null,
            h("slot", null)));
    }
    static get is() { return "bcgov-carousel"; }
    static get encapsulation() { return "shadow"; }
}
