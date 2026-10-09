import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-header', () => {
  // The legacy screenshot comparison was omitted; rendered markup is snapshotted in the spec suite.
  it('renders', async () => {
    const { root } = await render('<bcgov-header></bcgov-header>');

    expect(root.classList.contains('hydrated')).toBe(true);
  });
});
