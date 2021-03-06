import { Component, Host, h, Element, Prop, Listen } from "@stencil/core";

@Component({
  tag: "bcgov-search",
})
export class BcgovSearch {
  @Element() el;

  /** A number that represents mobile search breakpoint in px; */
  @Prop() breakpoint: number = 0;

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
    } else {
      this.el.classList.remove("is-search-desktop");
    }
  }

  @Listen('keypress')
  onKeyPress( event ) {
    if ( event.which === 10 || event.which === 13){
      event.target.closest('form').submit()
    }
  }

  render() {
    return (
      <Host class="bcgov-search">
        <div class="search-container">
          <slot></slot>
        </div>
      </Host>
    );
  }
}
