import { BcgovHeader } from "./bcgov-header";
import { BcgovBeta } from "../bcgov-beta/bcgov-beta";
import { BcgovButton } from "../bcgov-button/bcgov-button";
import { newSpecPage } from "@stencil/core/testing";

describe("bcgov-header", () => {
  it("builds", () => {
    expect(new BcgovHeader()).toBeTruthy();
  });
  it("Render header with default logo", async () => {
    const page = await newSpecPage({
      components: [BcgovHeader, BcgovBeta, BcgovButton],
      html: `<bcgov-header logo >
      <img
        src="https://www2.gov.bc.ca/assets/download/6124280C12B44DA492667E23E8BC38BF"
        alt="Branding logo"
      />
      <div class="headline" >DevHub<bcgov-beta></bcgov-beta></div>
      <div aria>
        <a href="#main-navigation">Skip to navigation</a>
        <a href="#main-content">Skip to Contents</a>
        <a href="accessibility">Skip to Accessibility Statement</a>
      </div>
      <bcgov-button button-style="hamburger" data-target="main-navigation"
      >Menu</bcgov-button
    >
    </bcgov-header>
      `,
    });
    expect(page.root).toEqualHtml(`
    <bcgov-header logo="" class="bcgov-header" className="bcgov-header" >
      <header>
        <div class="banner">
          <a class="branding-logo" aria-label="branding logo" href="https://www2.gov.bc.ca/gov/content/home">
            <img src="https://www2.gov.bc.ca/assets/download/6124280C12B44DA492667E23E8BC38BF" alt="Branding logo">
          </a>
        </div>
        <div class="headline">DevHub<bcgov-beta class="bcgov-beta " aria-label="This Application is currently in Beta Phase" role="alert" tabindex="0">Beta</bcgov-beta></div>
        <div aria="" class="access">
          <a href="#main-navigation" aria-label="Skip to navigation">Skip to navigation</a>
          <a href="#main-content" aria-label="Skip to Contents">Skip to Contents</a>
          <a href="https://www2.gov.bc.ca/gov/content/home/accessibility" aria-label="Skip to Accessibility Statement">Skip to Accessibility Statement</a>
        </div>
        <bcgov-button button-style="hamburger" class="bcgov-button is-desktop" data-breakpoint="0" data-target="main-navigation">
          <button aria-expanded="false" aria-label="Hamburger" class="hamburger">
            <div></div>
            <span class="bcgov-button-text">Menu</span>
          </button>
        </bcgov-button>
      </header>
    </bcgov-header>
    `);
  });
});
