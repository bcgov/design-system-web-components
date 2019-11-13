import { newE2EPage, E2EPage } from "@stencil/core/testing";

describe("bcgov-header", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<bcgov-header></bcgov-header>");
    const element = await page.find("bcgov-header");
    expect(element).toHaveClass("hydrated");
  });
  it("render header", async () => {
    const page: E2EPage = await newE2EPage();
    await page.setContent(`
    <bcgov-header>
      <img
        src="https://www2.gov.bc.ca/assets/download/6124280C12B44DA492667E23E8BC38BF"
        alt="Branding logo"
      />
      <div>Design System<bcgov-beta></bcgov-beta></div>
      <a aria href="#main-navigation">Skip to navigation</a>
      <a aria href="#main-content">Skip to Contents</a>
      <a aria href="accessibility">Skip to Accessibility Statement</a>
    </bcgov-header>
    `);
    await page.addStyleTag({
      path: "html/dist/bcgov-web-components/bcgov-web-components.css"
    });
    await page.compareScreenshot("Header", {
      fullPage: false
    });
    const snapshot = await page.accessibility.snapshot();
    //console.log(snapshot);
  });
});
