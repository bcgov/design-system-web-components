import { describe, expect, it, render } from '@stencil/vitest';
import { vi } from 'vitest';

describe('bcgov-button', () => {
  it('render buttons', async () => {
    const { root } = await render(`
      <main>
        <div>
          <h4>Buttons</h4>
          <bcgov-button>Primary</bcgov-button>
          <bcgov-button button-style="secondary">Secondary</bcgov-button>
          <span style="background-color: #000; padding: 8px; display: inline-block"><bcgov-button button-style="dark">Dark</bcgov-button></span>
          <bcgov-button button-style="hamburger">Menu</bcgov-button>
          <bcgov-button button-style="search">Search</bcgov-button>
          <bcgov-button button-style="search-inline">Search</bcgov-button>
        </div>
        <div>
          <h4>Links (role="button")</h4>
          <bcgov-button link="https://gov.bc.ca">Primary</bcgov-button>
          <bcgov-button link="https://gov.bc.ca" button-style="secondary">Secondary</bcgov-button>
          <span style="background-color: #000; padding: 8px; display: inline-block"><bcgov-button link="https://gov.bc.ca" button-style="dark">Dark</bcgov-button></span>
        </div>
      </main>
    `);

    expect(root.innerHTML).toMatchSnapshot();
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
    const target = root.querySelector<HTMLElement>('#menu-target')!;
    const button = root.querySelector<HTMLButtonElement>('bcgov-button button')!;

    expect(target.classList.contains('target-hidden')).toBe(true);
    expect(button.getAttribute('aria-expanded')).toBe('false');

    button.click();

    expect(target.classList.contains('target-hidden')).toBe(false);
    expect(button.getAttribute('aria-expanded')).toBe('true');
  });
});
