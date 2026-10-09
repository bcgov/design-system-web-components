import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-carousel', () => {
  it('builds', async () => {
    const { root } = await render('<bcgov-carousel></bcgov-carousel>');

    expect(root.tagName.toLowerCase()).toBe('bcgov-carousel');
  });

  it('renders the component host', async () => {
    const { root } = await render('<bcgov-carousel></bcgov-carousel>');

    expect(root.classList.contains('bcgov-carousel')).toBe(true);
    expect(root).toMatchSnapshot();
  });
});