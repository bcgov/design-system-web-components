import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-form', () => {
  it('renders', async () => {
    const { root } = await render('<bcgov-form></bcgov-form>');

    expect(root.classList.contains('hydrated')).toBe(true);
  });
});