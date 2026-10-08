import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-search', () => {
  it('builds', async () => {
    const { root } = await render('<bcgov-search></bcgov-search>');

    expect(root.tagName.toLowerCase()).toBe('bcgov-search');
  });

  it('renders a search form with a button', async () => {
    const { root } = await render(`
      <bcgov-search id="search-navigation-example">
        <form>
          <input type="search" placeholder="Search" />
          <bcgov-button button-style="search-inline">Search</bcgov-button>
        </form>
      </bcgov-search>
    `);

    expect(root).toMatchSnapshot();
  });
});