import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-beta', () => {
  it('renders an empty beta', async () => {
    const { root } = await render('<bcgov-beta></bcgov-beta>');

    expect(root.classList.contains('hydrated')).toBe(true);
  });
});
