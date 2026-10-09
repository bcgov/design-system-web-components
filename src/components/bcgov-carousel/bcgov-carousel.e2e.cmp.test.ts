import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-carousel', () => {
  it('renders', async () => {
    const { root } = await render('<bcgov-carousel></bcgov-carousel>');

    expect(root.classList.contains('hydrated')).toBe(true);
  });
});