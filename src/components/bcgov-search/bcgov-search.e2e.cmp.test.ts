import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-search', () => {
  it('renders', async () => {
    const { root } = await render('<bcgov-search></bcgov-search>');

    expect(root.classList.contains('hydrated')).toBe(true);
  });
});