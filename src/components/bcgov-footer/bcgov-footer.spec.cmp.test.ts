import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-footer', () => {
  it('builds', async () => {
    const { root } = await render('<bcgov-footer></bcgov-footer>');

    expect(root.tagName.toLowerCase()).toBe('bcgov-footer');
  });

  it('renders the default logo', async () => {
    const { root } = await render('<bcgov-footer></bcgov-footer>');

    expect(root).toMatchSnapshot();
  });
});