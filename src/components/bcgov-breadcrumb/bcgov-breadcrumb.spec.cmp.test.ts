import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-breadcrumb', () => {
  it('builds', async () => {
    const { root } = await render('<bcgov-breadcrumb></bcgov-breadcrumb>');

    expect(root.tagName.toLowerCase()).toBe('bcgov-breadcrumb');
  });

  it('Render BreadCrumb', async () => {
    const { root } = await render(`
      <bcgov-breadcrumb>
        <a href="#home">Home</a>
        <a href="#Components">Components</a>
        <a href="#DesignSystem">Design System</a>
        <span>Bread Crumbs</span>
      </bcgov-breadcrumb>
    `);

    expect(root).toMatchSnapshot();
  });
});
