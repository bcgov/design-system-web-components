import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-callout', () => {
  it('builds', async () => {
    const { root } = await render('<bcgov-callout></bcgov-callout>');

    expect(root.tagName.toLowerCase()).toBe('bcgov-callout');
  });

  it('should render my component', async () => {
    const { root } = await render(
      '<bcgov-callout>I am a BCGov Callout</bcgov-callout>',
    );

    expect(root).toMatchSnapshot();
  });
});