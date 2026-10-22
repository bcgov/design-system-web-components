import { expect, type Page } from '@playwright/test';
import { test } from '@stencil/playwright';

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

  const setMenuContent = async (page: Page) => {
    await setContentWithStyles(page, `
      <main>
        <button id="before-menu">Before menu</button>
        <bcgov-menu>
          <a href="#overview">Overview</a>
          <bcgov-menu name="Services">
            <a href="#permits">Permits</a>
            <a href="#support">Support</a>
          </bcgov-menu>
          <bcgov-menu name="About">
            <a href="#about">About us</a>
            <a href="#mission">Our mission</a>
          </bcgov-menu>
          <a href="#contact">Contact</a>
        </bcgov-menu>
        <button id="after-menu">After menu</button>
      </main>
    `);
  };

  const menuItems = (page: Page) =>
    page.locator('ul[role="menubar"] > [role="menuitem"]');

  test('Tab enters the menubar at its first item and exits after one stop', async ({page}) => {
    await setMenuContent(page);

    const items = menuItems(page);
    await page.keyboard.press('Tab');
    await expect(page.locator('#before-menu')).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(items.first()).toBeFocused();
    await page.keyboard.press('Tab');
    await expect(page.locator('#after-menu')).toBeFocused();
  });

  test('arrow keys, Home, and End navigate and wrap among top-level items', async ({page}) => {
    await setMenuContent(page);

    const items = menuItems(page);
    const first = items.first();
    const services = items.nth(1);
    const about = items.nth(2);
    const last = items.last();

    await first.focus();
    await expect(first).toBeFocused();

    await page.keyboard.press('ArrowRight');
    await expect(services).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await expect(about).toBeFocused();
    await page.keyboard.press('ArrowLeft');
    await expect(services).toBeFocused();

    await page.keyboard.press('ArrowLeft');
    await expect(first).toBeFocused();
    await page.keyboard.press('ArrowLeft');
    await expect(last).toBeFocused();
    await page.keyboard.press('ArrowRight');
    await expect(first).toBeFocused();

    await page.keyboard.press('End');
    await expect(last).toBeFocused();
    await page.keyboard.press('Home');
    await expect(first).toBeFocused();
  });

  test('ArrowDown opens a submenu at its first item', async ({page}) => {
    await setMenuContent(page);

    const services = menuItems(page).nth(1);
    const submenuItems = services.locator('ul[role="menu"] > [role="menuitem"]');

    await services.focus();

    await page.keyboard.press('ArrowDown');
    await expect(submenuItems.first()).toBeFocused();
    await expect(services).toHaveAttribute('aria-expanded', 'true');
    await expect(submenuItems.first().locator('a')).toBeVisible();
  });

  test('ArrowUp opens a submenu at its last item', async ({page}) => {
    await setMenuContent(page);

    const services = menuItems(page).nth(1);
    const submenuItems = services.locator('ul[role="menu"] > [role="menuitem"]');

    await services.focus();
    await page.keyboard.press('ArrowUp');
    await expect(submenuItems.last()).toBeFocused();
    await expect(services).toHaveAttribute('aria-expanded', 'true');
  });

  test('Enter opens a submenu at its first item', async ({page}) => {
    await setMenuContent(page);

    const services = menuItems(page).nth(1);
    const submenuItems = services.locator('ul[role="menu"] > [role="menuitem"]');

    await services.focus();
    await page.keyboard.press('Enter');
    await expect(submenuItems.first()).toBeFocused();
    await expect(services).toHaveAttribute('aria-expanded', 'true');
  });

  test('vertical arrows, Home, and End navigate and wrap within an open submenu', async ({page}) => {
    await setMenuContent(page);

    const services = menuItems(page).nth(1);
    const submenuItems = services.locator('ul[role="menu"] > [role="menuitem"]');

    await services.focus();
    await page.keyboard.press('Space');
    await expect(submenuItems.first()).toBeFocused();

    await page.keyboard.press('ArrowDown');
    await expect(submenuItems.nth(1)).toBeFocused();
    await page.keyboard.press('ArrowDown');
    await expect(submenuItems.first()).toBeFocused();
    await page.keyboard.press('ArrowUp');
    await expect(submenuItems.last()).toBeFocused();
    await page.keyboard.press('ArrowUp');
    await expect(submenuItems.first()).toBeFocused();

    await page.keyboard.press('End');
    await expect(submenuItems.last()).toBeFocused();
    await page.keyboard.press('Home');
    await expect(submenuItems.first()).toBeFocused();
  });

  test('Left and Right from a submenu return to adjacent menubar items', async ({page}) => {
    await setMenuContent(page);

    const items = menuItems(page);
    const overview = items.first();
    const services = items.nth(1);
    const about = items.nth(2);

    await services.focus();
    await page.keyboard.press('Space');
    await page.keyboard.press('ArrowLeft');
    await expect(overview).toBeFocused();
    await expect(services).toHaveAttribute('aria-expanded', 'false');

    await services.focus();
    await page.keyboard.press('Space');
    await page.keyboard.press('ArrowRight');
    await expect(about).toBeFocused();
    await expect(services).toHaveAttribute('aria-expanded', 'false');
  });

  test('Escape closes the submenu and returns focus to its parent', async ({page}) => {
    await setMenuContent(page);

    const services = menuItems(page).nth(1);

    await services.focus();
    await page.keyboard.press('Space');
    await expect(services).toHaveAttribute('aria-expanded', 'true');

    await page.keyboard.press('Escape');
    await expect(services).toBeFocused();
    await expect(services).toHaveAttribute('aria-expanded', 'false');
  });

  test('Enter activates a focused link', async ({page}) => {
    await setMenuContent(page);

    await menuItems(page).first().focus();
    await expect(menuItems(page).first()).toBeFocused();
    await page.keyboard.press('Enter');

    await expect(page).toHaveURL(/#overview$/);
  });
});
