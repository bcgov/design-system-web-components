import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bcgov-tabs',
  shadow: true,
})
export class BcgovTabs {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
