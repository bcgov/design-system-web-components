import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-breadcrumb', () => {
  it('renders an empty breadcrumb', async () => {
    const { root } = await render('<bcgov-breadcrumb></bcgov-breadcrumb>');

    expect(root.classList.contains('hydrated')).toBe(true);
  });
});