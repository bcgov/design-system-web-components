import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-callout', () => {
  it('renders', async () => {
    const { root } = await render('<bcgov-callout>I am a BCGov Callout</bcgov-callout>');

    expect(root.classList.contains('hydrated')).toBe(true);
  });
});