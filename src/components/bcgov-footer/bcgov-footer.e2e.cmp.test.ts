import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-footer', () => {
  it('renders', async () => {
    const { root } = await render('<bcgov-footer></bcgov-footer>');

    expect(root.classList.contains('hydrated')).toBe(true);
  });
});