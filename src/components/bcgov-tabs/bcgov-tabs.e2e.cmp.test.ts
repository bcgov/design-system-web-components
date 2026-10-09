import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-tabs', () => {
  it('hydrates with slotted content', async () => {
    const { root } = await render('<bcgov-tabs><span>Tab content</span></bcgov-tabs>');

    expect(root.classList.contains('hydrated')).toBe(true);
    expect(root.shadowRoot?.querySelector('slot')?.assignedElements()).toHaveLength(1);
  });
});
