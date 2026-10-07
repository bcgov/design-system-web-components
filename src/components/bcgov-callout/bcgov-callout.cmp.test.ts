import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-callout', () => {
  it('renders slotted content', async () => {
    const { root } = await render('<bcgov-callout>I am a BCGov Callout</bcgov-callout>');

    expect(root.classList.contains('bcgov-callout')).toBe(true);
    expect(root.textContent).toContain('I am a BCGov Callout');
  });
});