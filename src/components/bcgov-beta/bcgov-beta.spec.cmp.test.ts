import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-beta', () => {
  it('builds', async () => {
    const { root } = await render('<bcgov-beta></bcgov-beta>');

    expect(root.tagName.toLowerCase()).toBe('bcgov-beta');
  });

  it('Render Beta', async () => {
    const { root } = await render('<bcgov-beta>This is my beta message</bcgov-beta>');

    expect(root).toMatchSnapshot();
  });

  it('Render Beta Custon Label', async () => {
    const { root } = await render('<bcgov-beta label="Custom Beta">This is my beta message</bcgov-beta>');

    expect(root).toMatchSnapshot();
  });
});
