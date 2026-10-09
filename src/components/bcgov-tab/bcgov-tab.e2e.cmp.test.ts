import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-tab', () => {
  it('hydrates with slotted content', async () => {
    const { root } = await render('<bcgov-tab><span>Tab content</span></bcgov-tab>');

    expect(root.classList.contains('hydrated')).toBe(true);
    expect(root.shadowRoot?.querySelector('slot')?.assignedElements()).toHaveLength(1);
  });
});
