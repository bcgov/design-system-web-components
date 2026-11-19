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

test.describe('bcgov-menu', () => {

  test('accessibility', async ({page}) => {
    await setContentWithStyles(page, `
      <main>
        <bcgov-menu>
          <li>
            <button class="disclosure-toggle" type="button">Services</button>
            <ul>
              <li><a href="#support">Support</a></li>
            </ul>
          </li>
          <li>
            <button class="disclosure-toggle" type="button">About</button>
            <ul>
              <li><a href="#team">Our team</a></li>
            </ul>
          </li>
        </bcgov-menu>
      </main>
    `);

    const axe = new AxeBuilder({ page }).include('main');
    const results = await axe.analyze();
    expect(results.violations).toEqual([]);
  });
});
