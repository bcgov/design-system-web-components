import { newE2EPage, E2EPage } from "@stencil/core/testing";

describe("bcgov-button", () => {
  it("renders", async () => {
    const page: E2EPage = await newE2EPage();
    await page.setContent("<bcgov-button>Primary</bcgov-button>");
    const element = await page.find("bcgov-button");
    expect(element).toHaveClass("hydrated");
  });
  it("render buttons", async () => {
    const page: E2EPage = await newE2EPage();
    await page.setContent(`
    <div>
    <h4>Buttons</h4>
    <bcgov-button>Primary</bcgov-button>
    <bcgov-button secondary>Secondary</bcgov-button>
    <span style="background-color: #000; padding: 8px; display: inline-block"><bcgov-button dark>Dark</bcgov-button></span>
    </div>
    <div>
    <h4>Links (role="button")</h4>
    <bcgov-button link="https://gov.bc.ca">Primary</bcgov-button>
    <bcgov-button link="https://gov.bc.ca" secondary>Secondary</bcgov-button>
    <span style="background-color: #000; padding: 8px; display: inline-block"><bcgov-button link="https://gov.bc.ca" dark>Dark</bcgov-button></span>
    </div>
    `);
    await page.addStyleTag({ path: "build/dist/bcgov-web-components/bcgov-web-components.css" });
    await page.compareScreenshot("Buttons", {
      fullPage: false
    });
  });

  it("accessibility button", async () => {
    const page: E2EPage = await newE2EPage();
    await page.setContent(`
    <bcgov-button>Primary</bcgov-button>
    <bcgov-button link="https://gov.bc.ca" >Primary</bcgov-button>
    `);
    const snapshot = await page.accessibility.snapshot();
    console.log(snapshot);
  });
});
