import { newE2EPage, E2EPage } from "@stencil/core/testing";

describe("bcgov-callout", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<bcgov-callout>I am a BCGov Callout</bcgov-callout>");
    const element = await page.find("bcgov-callout");
    expect(element).toHaveClass("hydrated");
  });
  it("render callout", async () => {
    const page: E2EPage = await newE2EPage();
    await page.setContent("<bcgov-callout>I am a BCGov Callout</bcgov-callout>");
    await page.compareScreenshot("Bcgov Callout", {
      fullPage: false
    });
  });
});
