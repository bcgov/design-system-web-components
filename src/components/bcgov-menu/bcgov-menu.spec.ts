import { BcgovMenu } from "./bcgov-menu";
import { newSpecPage } from "@stencil/core/testing";

describe("bcgov-menu", () => {
  it("builds", () => {
    expect(new BcgovMenu()).toBeTruthy();
  });

  it("Render Menu", async () => {
    const page = await newSpecPage({
      components: [BcgovMenu],
      html: `<bcgov-menu  ><a href="test.html">Test</a></bcgov-menu>`
    });

    expect(page.root).toEqualHtml(`
    <bcgov-menu class="is-desktop">
      <ul class="align-left" role="menubar" tabindex="0" >
        <li aria-label="Test" role="menuitem" tabindex="-1">
          <a aria-hidden="true" href="test.html" tabindex="-1">Test</a>
        </li>
      </ul>
    </bcgov-menu>
    `);
  });
});
