import { BcgovButton } from "./bcgov-button";
import { newSpecPage } from "@stencil/core/testing";

describe("bcgov-callout", () => {
  it("builds", () => {
    expect(new BcgovButton()).toBeTruthy();
  });
  it("Render Primary Button", async () => {
    console.time("button");
    const page = await newSpecPage({
      components: [BcgovButton],
      html: `<bcgov-button>Primary Button</bcgov-button>`
    });
    console.timeEnd("button");
    expect(page.root).toEqualHtml(`
    <bcgov-button><button class="btn">Primary Button</button></bcgov-button>
    `);
  });
});
