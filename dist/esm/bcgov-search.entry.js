import { r as registerInstance, a as getElement, h, H as Host } from './index-DQ-lwiDk.js';

const BcgovSearch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    /** A number that represents mobile search breakpoint in px; */
    breakpoint = 0;
    componentWillLoad() {
        const self = this;
        self.isSearchMobile();
        window.addEventListener("resize", function () {
            self.isSearchMobile();
        });
    }
    isSearchMobile() {
        if (window.innerWidth >= this.breakpoint) {
            if (!this.el.classList.contains("is-search-desktop")) {
                this.el.classList.add("is-search-desktop");
            }
        }
        else {
            this.el.classList.remove("is-search-desktop");
        }
    }
    onKeyPress(event) {
        if (event.which === 10 || event.which === 13) {
            event.target.closest('form').submit();
        }
    }
    render() {
        return (h(Host, { key: '0db28b3ea26404b398bf2766c7200aa56f915b80', class: "bcgov-search" }, h("div", { key: '92cb7b38d72e6e76dd29ae3662026a86c31fdee1', class: "search-container" }, h("slot", { key: '82a9ac49b7faa85de481bed847a9975d623a5bcd' }))));
    }
};

export { BcgovSearch as bcgov_search };
