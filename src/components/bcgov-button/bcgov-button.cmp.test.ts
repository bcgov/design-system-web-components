
import { describe, it, render, expect } from "@stencil/vitest";
import { vi } from "vitest";

describe('bcgov-button', () => {
  it('renders primary button markup', async () => {
    const { root } = await render('<bcgov-button>Save</bcgov-button>');

    expect(root).toMatchSnapshot();
  });

  it('calls the supplied event handler with the host element', async () => {
    const eventHandler = vi.fn();
    const { root, setProps, waitForChanges } = await render('<bcgov-button>Save</bcgov-button>');

    await setProps({ eventHandler });
    await waitForChanges();

    expect(eventHandler).toHaveBeenCalledWith(root);
  });

  it('toggles a target when clicked', async () => {
    const { root } = await render(`
      <section>
        <aside id="menu-target"></aside>
        <bcgov-button button-style="hamburger" data-target="menu-target">Menu</bcgov-button>
      </section>
    `);
    const target = root.querySelector('#menu-target');
    const button = root.querySelector('bcgov-button button');

    expect(target.classList.contains('target-hidden')).toBe(true);
    expect(button.getAttribute('aria-expanded')).toBe('false');

    button.click();

    expect(target.classList.contains('target-hidden')).toBe(false);
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });
});
