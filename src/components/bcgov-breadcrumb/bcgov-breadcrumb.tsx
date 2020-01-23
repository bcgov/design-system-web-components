import { Component, Host, h, Element } from "@stencil/core";
import { breadCrumbElement } from "../utils/utils";
@Component({
  tag: "bcgov-breadcrumb"
})
export class BcgovBreadcrumb {
  /** Breadcrumb seperator */
  @Element() el;

  componentWillLoad() {
    [].forEach.call(this.el.querySelectorAll("a, span"), function(element) {
      breadCrumbElement(element);
    });
  }

  render() {
    return (
      <Host aria-label="Breadcrumb" role="nav" class="bcgov-breadcrumb">
        <ol itemscope itemtype="http://schema.org/BreadcrumbList">
          <slot></slot>
        </ol>
        <slot name="breadcrumb-extra"></slot>
      </Host>
    );
  }
}
