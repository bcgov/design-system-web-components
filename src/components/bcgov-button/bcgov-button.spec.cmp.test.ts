import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-button', () => {
  it('builds', async () => {
    const { root } = await render('<bcgov-button></bcgov-button>');

    expect(root.tagName).toBe('BCGOV-BUTTON');
  });

  it('Render Primary Button', async () => {
    const { root } = await render('<bcgov-button>Primary Button</bcgov-button>');

    expect(root).toMatchSnapshot();
  });

  it('Render Seconary Button', async () => {
    const { root } = await render(
      '<bcgov-button button-style="secondary">Secondary Button</bcgov-button>',
    );

    expect(root).toMatchSnapshot();
  });

  it('Render Dark Button', async () => {
    const { root } = await render(
      '<bcgov-button button-style="dark">Dark Button</bcgov-button>',
    );

    expect(root).toMatchSnapshot();
  });

  it('Render Hamburger Button', async () => {
    const { root } = await render(
      '<bcgov-button button-style="hamburger">Menu</bcgov-button>',
    );

    expect(root).toMatchSnapshot();
  });

  it('Render Search Button', async () => {
    const { root } = await render(
      '<bcgov-button button-style="search">Search</bcgov-button>',
    );

    expect(root).toMatchSnapshot();
  });

  it('Render Search Inline Button', async () => {
    const { root } = await render(
      '<bcgov-button button-style="search-inline">Search Inline</bcgov-button>',
    );

    expect(root).toMatchSnapshot();
  });

  it('Render Link Button', async () => {
    const { root } = await render(
      '<bcgov-button link="https://gov.bc.ca">Link Button</bcgov-button>',
    );

    expect(root).toMatchSnapshot();
  });

  it('Render Link Button With Target', async () => {
    const { root } = await render(
      '<bcgov-button target="_blank" link="https://gov.bc.ca">Link Button</bcgov-button>',
    );

    expect(root).toMatchSnapshot();
  });
});
