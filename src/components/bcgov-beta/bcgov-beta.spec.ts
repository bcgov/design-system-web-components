import { BcgovBeta } from "./bcgov-beta";
import { newSpecPage } from "@stencil/core/testing";

describe("bcgov-beta", () => {
  it("builds", () => {
    expect(new BcgovBeta()).toBeTruthy();
  });
  it("Render Beta", async () => {
    const page = await newSpecPage({
      components: [BcgovBeta],
      html: `<bcgov-beta >This is my beta message</bcgov-beta>`
    });
    expect(page.root).toEqualHtml(`
    <bcgov-beta aria-label="This is my beta message" aria-role="alert" class="bcgov-beta" tabindex="0" >Beta</bcgov-beta>
    `);
  });
  it("Render Beta Custon Label", async () => {
    const page = await newSpecPage({
      components: [BcgovBeta],
      html: `<bcgov-beta label="Custom Beta">This is my beta message</bcgov-beta>`
    });
    expect(page.root).toEqualHtml(`
    <bcgov-beta label="Custom Beta" aria-label="This is my beta message" aria-role="alert" class="bcgov-beta" tabindex="0" >Custom Beta</bcgov-beta>
    `);
  });
});
