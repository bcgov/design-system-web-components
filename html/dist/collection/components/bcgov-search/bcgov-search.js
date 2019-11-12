import { Host, h } from "@stencil/core";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
export class BcgovSearch {
    componentDidRender() {
        const submitElement = this.el.querySelector('input[type="submit"');
        library.add(faSearch);
        submitElement.setAttribute("value", icon(faSearch).html[0]);
    }
    render() {
        return (h(Host, null,
            h("div", { class: "search-container" },
                h("slot", { name: "form" }))));
    }
    static get is() { return "bcgov-search"; }
    static get elementRef() { return "el"; }
}
