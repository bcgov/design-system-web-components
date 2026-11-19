import { describe, expect, it, render } from "@stencil/vitest";
import { userEvent } from "vitest/browser";

describe("bcgov-menu disclosure navigation", () => {
  it("uses disclosure buttons to expand and collapse nested lists", async () => {
    const { root, waitForChanges } = await render(`
      <bcgov-menu label="Main navigation">
        <li>
          <a href="#components">Components</a>
          <ul>
            <li><a href="#button">Button</a></li>
          </ul>
        </li>
      </bcgov-menu>
    `);
    const toggle = root.querySelector<HTMLButtonElement>(
      "button.disclosure-toggle"
    );
    const submenu = toggle.parentElement.querySelector("ul");

    expect(root.querySelector("nav").getAttribute("aria-label")).toBe(
      "Main navigation"
    );
    expect(toggle.getAttribute("aria-label")).toBe("Toggle Components");
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(toggle.getAttribute("aria-controls")).toBe(submenu.id);
    expect(submenu.hidden).toBe(true);

    await userEvent.click(toggle);
    await waitForChanges();
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    expect(toggle.parentElement.classList.contains("expanded")).toBe(true);
    expect(submenu.hidden).toBe(false);

    await userEvent.click(toggle);
    await waitForChanges();
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(toggle.parentElement.classList.contains("expanded")).toBe(false);
    expect(submenu.hidden).toBe(true);
  });

  it("creates an accessible toggle for a text-only submenu item", async () => {
    const { root } = await render(`
      <bcgov-menu>
        <li>
          Services
          <ul>
            <li><a href="#support">Support</a></li>
          </ul>
        </li>
      </bcgov-menu>
    `);
    const toggle = root.querySelector<HTMLButtonElement>(
      "button.disclosure-toggle"
    );

    expect(toggle.getAttribute("aria-label")).toBe("Toggle Services");
    expect(toggle.getAttribute("aria-controls")).toBe(
      toggle.parentElement.querySelector("ul").id
    );
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
  });

  it("supports arrow, Home, End, and Escape navigation", async () => {
    const { root, waitForChanges } = await render(`
      <bcgov-menu>
        <li>
          <a href="#components">Components</a>
          <button class="disclosure-toggle" type="button"></button>
          <ul>
            <li><a href="#button">Button</a></li>
            <li><a href="#card">Card</a></li>
          </ul>
        </li>
        <li><a href="#about">About</a></li>
      </bcgov-menu>
    `);
    const toggle = root.querySelector<HTMLButtonElement>(
      "button.disclosure-toggle"
    );
    const submenu = toggle.parentElement.querySelector("ul");
    const links = submenu.querySelectorAll<HTMLAnchorElement>("a");
    const about = root.querySelector<HTMLAnchorElement>('a[href="#about"]');

    await userEvent.click(toggle);
    await waitForChanges();
    await userEvent.keyboard("{ArrowDown}");
    expect(document.activeElement).toBe(links[0]);

    await userEvent.keyboard("{ArrowDown}");
    expect(document.activeElement).toBe(links[1]);
    await userEvent.keyboard("{ArrowUp}");
    expect(document.activeElement).toBe(links[0]);
    await userEvent.keyboard("{End}");
    expect(document.activeElement).toBe(links[1]);
    await userEvent.keyboard("{Home}");
    expect(document.activeElement).toBe(links[0]);

    await userEvent.keyboard("{Escape}");
    await waitForChanges();
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(submenu.hidden).toBe(true);
    expect(document.activeElement).toBe(toggle);
  });

  it("closes expanded submenus when focus leaves the navigation", async () => {
    const { root, waitForChanges } = await render(`
      <bcgov-menu>
        <li>
          <button class="disclosure-toggle" type="button">Services</button>
          <ul>
            <li><a href="#support">Support</a></li>
          </ul>
        </li>
      </bcgov-menu>
    `);
    const toggle = root.querySelector<HTMLButtonElement>(
      "button.disclosure-toggle"
    );
    const submenu = toggle.parentElement.querySelector("ul");
    const outsideButton = document.createElement("button");
    document.body.appendChild(outsideButton);

    await userEvent.click(toggle);
    await waitForChanges();
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    await userEvent.click(outsideButton);
    await waitForChanges();

    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(submenu.hidden).toBe(true);
    outsideButton.remove();
  });

  it("closes a submenu when focus moves to another item and keeps siblings exclusive", async () => {
    const { root, waitForChanges } = await render(`
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
    `);
    const [servicesToggle, aboutToggle] = root.querySelectorAll<HTMLButtonElement>(
      "button.disclosure-toggle"
    );
    const servicesList = servicesToggle.parentElement.querySelector("ul");
    const aboutList = aboutToggle.parentElement.querySelector("ul");

    await userEvent.click(servicesToggle);
    await waitForChanges();
    expect(servicesToggle.getAttribute("aria-expanded")).toBe("true");

    aboutToggle.focus();
    await userEvent.keyboard("{Enter}");
    await waitForChanges();
    expect(servicesToggle.getAttribute("aria-expanded")).toBe("false");
    expect(servicesList.hidden).toBe(true);
    expect(aboutToggle.getAttribute("aria-expanded")).toBe("true");

    await userEvent.click(servicesToggle);
    await waitForChanges();
    expect(servicesToggle.getAttribute("aria-expanded")).toBe("true");
    expect(servicesList.hidden).toBe(false);
    expect(aboutToggle.getAttribute("aria-expanded")).toBe("false");
    expect(aboutList.hidden).toBe(true);
  });
});
