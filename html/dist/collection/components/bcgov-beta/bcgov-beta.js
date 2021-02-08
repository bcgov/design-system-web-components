import { Component, Host, h, Element, Prop, State } from "@stencil/core";
export class BcgovBeta {
  constructor() {
    this.content = "This Application is currently in Beta Phase";
    this.label = "Beta";
    this.stateContent = "";
  }
  componentWillLoad() {
    this.stateContent = this.el.textContent || this.content;
    this.el.innerHTML = this.label;
  }
  render() {
    return (h(Host, { class: "bcgov-beta", "aria-label": this.stateContent, role: "alert", tabindex: "0" }));
  }
  static get is() { return "bcgov-beta"; }
  static get properties() { return {
    "content": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "content",
      "reflect": false,
      "defaultValue": "\"This Application is currently in Beta Phase\""
    },
    "label": {
      "type": "string",
      "mutable": false,
      "complexType": {
        "original": "string",
        "resolved": "string",
        "references": {}
      },
      "required": false,
      "optional": false,
      "docs": {
        "tags": [],
        "text": ""
      },
      "attribute": "label",
      "reflect": false,
      "defaultValue": "\"Beta\""
    }
  }; }
  static get states() { return {
    "stateContent": {}
  }; }
  static get elementRef() { return "el"; }
}
