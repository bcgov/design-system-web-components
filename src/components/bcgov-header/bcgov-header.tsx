import { Component, Prop, h, Host, Element } from "@stencil/core";
import { moveElement } from "../utils/utils";

@Component({
  tag: "bcgov-header"
})
export class BcgovHeader {
  @Prop() href: string;
  @Prop() headline: string;
  @Prop() aTags: NodeList;
  @Prop() imgTags: NodeList;
  @Prop() headlineTags: NodeList;
  @Element() el: HTMLElement;

  componentWillLoad() {
    this.aTags = this.el.querySelectorAll("a[aria]");
    this.imgTags = this.el.querySelectorAll("img");
    this.headlineTags = this.el.querySelectorAll("div");
  }

  componentDidRender() {
    const elements: Array<object> = [
      {
        current: this.aTags,
        container: this.el.querySelector(".access")
      },
      {
        current: this.imgTags,
        container: this.el.querySelector(".branding-logo")
      },
      {
        current: this.headlineTags,
        container: this.el.querySelector(".hl")
      }
    ];

    elements.map(item => {
      [].forEach.call(item["current"], function(element) {
        moveElement(element, item["container"]);
      });
    });
  }
  render() {
    return (
      <Host>
        <header class="bcgov-header">
          <div class="banner">
            <a class="branding-logo" href="" aria-label="branding logo"></a>
            <div class="hl"></div>
            <div class="access"></div>
          </div>
        </header>
      </Host>
    );
  }
}
