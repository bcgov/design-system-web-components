import { BcgovHeader } from "./bcgov-header";
import { BcgovBeta } from "../bcgov-beta/bcgov-beta";

import { newSpecPage } from "@stencil/core/testing";

describe("bcgov-callout", () => {
  it("builds", () => {
    expect(new BcgovHeader()).toBeTruthy();
  });
  it("should render my component", async () => {
    const page = await newSpecPage({
      components: [BcgovHeader, BcgovBeta],
      html: `
      <bcgov-header>
      <img
        slot="logo"
        src="https://example.com/image.jpg"
        alt="Branding logo"
      />
      <div slot="headline">Design System<bcgov-beta></bcgov-beta></div>
      <a aria slot="hidden-link" href="#main-content">Skip to Contents</a>
      <a aria slot="hidden-link" href="accessibility">Skip to Accessibility Statement</a>
    </bcgov-header>
      `
    });
    expect(page.root).toEqualHtml(`
    <bcgov-header>
      <header class="bcgov-header">
        <div class="banner">
          <a aria-label="branding logo" class="branding-logo" href="https://www2.gov.bc.ca/gov/content/home">
            <img alt="Branding logo" slot="logo" src="https://example.com/image.jpg">
          </a>
          <div class="hl">
            <div slot="headline">
              Design System
              <bcgov-beta aria-label="This Application is currently in Beta Phase" aria-role="alert" tabindex="0">
                Beta
              </bcgov-beta>
            </div>
          </div>
          <div class="access">
            <a aria-label="Skip to Contents" href="#main-content" slot="hidden-link">
              Skip to Contents
            </a>
            <a aria-label="Skip to Accessibility Statement" href="https://www2.gov.bc.ca/gov/content/home/accessibility" slot="hidden-link">
              Skip to Accessibility Statement
            </a>
          </div>
        </div>
      </header>
    </bcgov-header>
    `);
  });
});
