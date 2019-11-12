import { Component, Host, h, Element } from "@stencil/core";
import { library, icon } from "@fortawesome/fontawesome-svg-core";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  tag: "bcgov-search"
})
export class BcgovSearch {
  @Element() el;

  componentDidRender() {
    const submitElement = this.el.querySelector('input[type="submit"');
    library.add(faSearch);
    submitElement.setAttribute("value", icon(faSearch).html[0]);
  }
  render() {
    return (
      <Host>
        <div class="search-container">
          <slot name="form"></slot>
        </div>
      </Host>
    );
  }
}
