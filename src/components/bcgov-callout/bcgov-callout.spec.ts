import { BcgovCallout } from "./bcgov-callout";
import { newSpecPage } from "@stencil/core/testing";

describe("bcgov-callout", () => {
  it("builds", () => {
    expect(new BcgovCallout()).toBeTruthy();
  });
  it("should render my component", async () => {
    console.time("callout");
    const page = await newSpecPage({
      components: [BcgovCallout],
      html: `<bcgov-callout>I am a BCGov Callout</bcgov-callout>`
    });
    console.timeEnd("callout");
    expect(page.root).toEqualHtml(`
    <bcgov-callout>I am a BCGov Callout</bcgov-callout>
    `);
  });
});
