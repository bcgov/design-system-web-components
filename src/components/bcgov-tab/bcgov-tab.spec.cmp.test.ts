import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-tab', () => {
  it('renders its default slot', async () => {
    const { root } = await render('<bcgov-tab><span>Tab content</span></bcgov-tab>');
    const slot = root.shadowRoot?.querySelector('slot');

    expect(slot).not.toBeNull();
    expect(slot?.assignedElements()[0]?.textContent).toBe('Tab content');
  });
});
