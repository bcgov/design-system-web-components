import { expect, type Page } from '@playwright/test';
import { test } from '@stencil/playwright';
import AxeBuilder from '@axe-core/playwright';

/**
 * Inject the bcgov-web-components.css stylesheet into the page, otherwise no styles are applied.
 * @param page 
 * @param content
 */
const setContentWithStyles = async (page: Page, content: string) => {
  await page.setContent(`
    <head>
      <link rel="stylesheet" href="/build/bcgov-web-components.css">
    </head>
    ${content}
  `);
};

test.describe('bcgov-button', () => {

  test('accessibility', async ({page}) => {
    await setContentWithStyles(page, `
      <main>
        <div>
          <bcgov-button>Primary</bcgov-button>
          <bcgov-button button-style="secondary">Secondary</bcgov-button>
          <span style="background-color: #000; padding: 8px; display: inline-block"><bcgov-button button-style="dark">Dark</bcgov-button></span>
          <bcgov-button button-style="hamburger">Menu</bcgov-button>
          <bcgov-button button-style="search">Search</bcgov-button>
          <bcgov-button button-style="search-inline">Search</bcgov-button>
        </div>
        <div>
          <bcgov-button link="https://gov.bc.ca">Primary</bcgov-button>
          <bcgov-button link="https://gov.bc.ca" button-style="secondary">Secondary</bcgov-button>
          <span style="background-color: #000; padding: 8px; display: inline-block"><bcgov-button link="https://gov.bc.ca" button-style="dark">Dark</bcgov-button></span>
        </div>
      </main>
    `);

    const axe = new AxeBuilder({ page }).include('main');
    const results = await axe.analyze();
    expect(results.violations).toEqual([]);

    // Keyboard navigation
    const buttons = page.locator('bcgov-button>button');
    for (let i = 0; i < await buttons.count(); i++) {
      const button = buttons.nth(i);
      await expect(button).not.toBeFocused();
      await page.keyboard.press('Tab');
      await expect(button).toBeFocused();
    }
  });
});
