import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-menu', () => {
  // Optional: no legacy E2E test existed to migrate for bcgov-menu.
  it('expands and collapses a submenu when its toggle is clicked', async () => {
    const { root } = await render(`
      <bcgov-menu>
        <bcgov-menu name="Components" href="#components">
          <a href="#button">Button</a>
        </bcgov-menu>
      </bcgov-menu>
    `);
    const submenu = root.querySelector('bcgov-menu');
    const toggle = submenu.querySelector('span');
    const submenuList = submenu.querySelector('ul');

    expect(submenu.getAttribute('aria-expanded')).toBe('false');
    expect(submenuList.getAttribute('aria-hidden')).toBe('true');

    toggle.click();

    expect(submenu.getAttribute('aria-expanded')).toBe('true');
    expect(submenu.classList.contains('expanded')).toBe(true);
    expect(submenuList.getAttribute('aria-hidden')).toBe('false');

    toggle.click();

    expect(submenu.getAttribute('aria-expanded')).toBe('false');
    expect(submenu.classList.contains('expanded')).toBe(false);
    expect(submenuList.getAttribute('aria-hidden')).toBe('true');
  });
});
