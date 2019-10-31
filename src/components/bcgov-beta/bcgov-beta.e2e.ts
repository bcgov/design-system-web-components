import { newE2EPage, E2EPage } from "@stencil/core/testing";

describe("bcgov-beta", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<bcgov-beta></bcgov-beta>");
    const element = await page.find("bcgov-beta");
    expect(element).toHaveClass("hydrated");
  });
  it("render beta", async () => {
    const page: E2EPage = await newE2EPage();
    await page.setContent(`<bcgov-beta>This is my beta message</bcgov-beta>`);
    await page.addStyleTag({ path: "html/dist/bcgov-web-components/bcgov-web-components.css" });
    await page.compareScreenshot("Beta", {
      fullPage: false
    });

    const snapshot = await page.accessibility.snapshot();
    console.log(snapshot);
  });
});
