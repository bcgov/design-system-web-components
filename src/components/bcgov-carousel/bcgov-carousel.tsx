import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bcgov-carousel',
  shadow: true
})
export class BcgovCarousel {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
