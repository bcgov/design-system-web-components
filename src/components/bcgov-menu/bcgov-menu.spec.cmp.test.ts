import { describe, expect, it, render } from "@stencil/vitest";

describe("bcgov-menu", () => {
  it("builds", async () => {
    const { root } = await render("<bcgov-menu></bcgov-menu>");

    expect(root.tagName.toLowerCase()).toBe("bcgov-menu");
  });

  it("renders a menu with nested lists", async () => {
    const { root } = await render(`
      <bcgov-menu label="Main navigation">
        <li><a href="test.html">Test</a></li>
        <li><a active href="test2.html"><span>Adding span</span></a></li>
        <li>
          <a href="https://gov.bc.ca">Components</a>
          <button class="disclosure-toggle" type="button"></button>
          <ul id="components-submenu">
            <li><a href="test3.html">Test3</a></li>
            <li><a href="test4.html">Test4</a></li>
          </ul>
        </li>
        <li>
          <button class="disclosure-toggle" type="button">Styles</button>
          <ul id="styles-submenu">
            <li><a href="style1.html">Test3</a></li>
            <li><a href="style2.html">Test4</a></li>
          </ul>
        </li>
      </bcgov-menu>
    `);

    expect(root).toMatchSnapshot();
  });

  it("renders a menu inside bcgov-header", async () => {
    const { root } = await render(`
      <bcgov-header>
        <bcgov-menu label="Main navigation">
          <li><a href="test.html">Test</a></li>
          <li><a active href="test2.html"><span>Adding span</span></a></li>
          <li>
            <a href="https://gov.bc.ca">Components</a>
            <button class="disclosure-toggle" type="button"></button>
            <ul id="components-submenu">
              <li><a href="test3.html">Test3</a></li>
              <li><a href="test4.html">Test4</a></li>
            </ul>
          </li>
          <li>
            <button class="disclosure-toggle" type="button">Styles</button>
            <ul id="styles-submenu">
              <li><a href="style1.html">Test3</a></li>
              <li><a href="style2.html">Test4</a></li>
            </ul>
          </li>
        </bcgov-menu>
      </bcgov-header>
    `);

    expect(root).toMatchSnapshot();
  });
});
