import { BcgovMenu } from "./bcgov-menu";
import { newSpecPage } from "@stencil/core/testing";

describe("bcgov-menu", () => {
  it("builds", () => {
    expect(new BcgovMenu()).toBeTruthy();
  });

  it("Render Menu", async () => {
    const page = await newSpecPage({
      components: [BcgovMenu],
      html: `<bcgov-menu  >
                <a href="test.html">Test</a>
                <a href="test2.html"><span>Adding span</span></a>
                <bcgov-menu name="Components" link="https://gov.bc.ca">
                  <a href="test3.html">Test3</a>
                  <a href="test4.html">Test4</a>
                </bcgov-menu>
            </bcgov-menu>`
    });

    expect(page.root).toEqualHtml(`
    <bcgov-menu class="is-desktop">
      <ul class="align-left" role="menubar" tabindex="0" >
        <li aria-label="Test" role="menuitem" tabindex="-1">
          <a aria-hidden="true" href="test.html" tabindex="-1">Test</a>
        </li>
        <li aria-label="Adding span" role="menuitem" tabindex="-1">
          <a aria-hidden="true" href="test2.html" tabindex="-1">
            <span>Adding span</span>
          </a>
        </li>
        <bcgov-menu aria-expanded="false" aria-haspopup="true" aria-label="Components" aria-selected="false" class="expandable" link="https://gov.bc.ca" name="Components" role="menuitem" tabindex="0">
          <div><a tabindex="-1">Components</a></div>
          <ul aria-hidden="true" role="menu">
            <li aria-label="Test3" role="menuitem" tabindex="-1">
              <a aria-hidden="true" href="test3.html" tabindex="-1">Test3</a>
            </li>
            <li aria-label="Test4" role="menuitem" tabindex="-1">
              <a aria-hidden="true" href="test4.html" tabindex="-1">Test4</a>
            </li>
          </ul>
        </bcgov-menu>
      </ul>
    </bcgov-menu>
    `);
  });
});