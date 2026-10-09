import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-tabs', () => {
  it('renders its default slot', async () => {
    const { root } = await render('<bcgov-tabs><span>Tab content</span></bcgov-tabs>');
    const slot = root.shadowRoot?.querySelector('slot');

    expect(slot).not.toBeNull();
    expect(slot?.assignedElements()[0]?.textContent).toBe('Tab content');
  });
});
