import { BcgovCallout } from "./bcgov-callout";
import { newSpecPage } from "@stencil/core/testing";

describe("bcgov-callout", () => {
  it("builds", () => {
    expect(new BcgovCallout()).toBeTruthy();
  });
  it("should render my component", async () => {
    const page = await newSpecPage({
      components: [BcgovCallout],
      html: `<bcgov-callout>I am a BCGov Callout</bcgov-callout>`
    });
    expect(page.root).toEqualHtml(`
    <bcgov-callout>I am a BCGov Callout</bcgov-callout>
    `);
  });
});
