import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'bcgov-tab',
  shadow: true,
})
export class BcgovTab {
  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }
}
