import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-header', () => {
  it('builds', async () => {
    const { root } = await render('<bcgov-header></bcgov-header>');

    expect(root.tagName.toLowerCase()).toBe('bcgov-header');
  });

  it('Render header with default logo', async () => {
    const { root } = await render(`
      <bcgov-header logo>
        <img
          src="https://www2.gov.bc.ca/assets/download/6124280C12B44DA492667E23E8BC38BF"
          alt="Branding logo"
        />
        <div class="headline">DevHub<bcgov-beta></bcgov-beta></div>
        <div aria>
          <a href="#main-navigation">Skip to navigation</a>
          <a href="#main-content">Skip to Contents</a>
          <a href="accessibility">Skip to Accessibility Statement</a>
        </div>
        <bcgov-button button-style="hamburger" data-target="main-navigation">
          Menu
        </bcgov-button>
      </bcgov-header>
    `);

    // This DOM snapshot preserves markup coverage, not visual screenshot coverage.
    expect(root).toMatchSnapshot();
  });
});
