import { BcgovButton } from "./bcgov-button";
import { newSpecPage } from "@stencil/core/testing";

describe("bcgov-button", () => {
  it("builds", () => {
    expect(new BcgovButton()).toBeTruthy();
  });
  it("Render Primary Button", async () => {
    const page = await newSpecPage({
      components: [BcgovButton],
      html: `<bcgov-button>Primary Button</bcgov-button>`,
    });
    expect(page.root).toEqualHtml(`
    <bcgov-button class="bcgov-button"><button class="primary">Primary Button</button></bcgov-button>
    `);
  });
  it("Render Seconary Button", async () => {
    const page = await newSpecPage({
      components: [BcgovButton],
      html: `<bcgov-button button-style="secondary" >Secondary Button</bcgov-button>`,
    });
    expect(page.root).toEqualHtml(`
    <bcgov-button button-style="secondary" class="bcgov-button"><button class="secondary">Secondary Button</button></bcgov-button>
    `);
  });

  it("Render Dark Button", async () => {
    const page = await newSpecPage({
      components: [BcgovButton],
      html: `<bcgov-button button-style="dark" >Dark Button</bcgov-button>`,
    });
    expect(page.root).toEqualHtml(`
    <bcgov-button button-style="dark" class="bcgov-button"><button class="dark">Dark Button</button></bcgov-button>
    `);
  });

  it("Render Hamburger Button", async () => {
    const page = await newSpecPage({
      components: [BcgovButton],
      html: `<bcgov-button button-style="hamburger" >Menu</bcgov-button>`,
    });
    expect(page.root).toEqualHtml(`
    <bcgov-button button-style="hamburger" class="bcgov-button"><button aria-expanded="false" class="hamburger"><div></div>Menu</button></bcgov-button>
    `);
  });
  it("Render Search Button", async () => {
    const page = await newSpecPage({
      components: [BcgovButton],
      html: `<bcgov-button button-style="search">Search</bcgov-button>`,
    });
    expect(page.root).toEqualHtml(`
    <bcgov-button button-style="search" class="bcgov-button" >
      <button aria-expanded="false" class="search">  
        <span class="bcgov-svg-icon">
          <svg aria-hidden="true" class="fa-search fa-w-16 svg-inline--fa" data-icon="search" data-prefix="fas" focusable="false" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" fill="currentColor"></path></svg>
        </span>
        <span class="bcgov-button-text"><div></div>Search</span>
      </button>
    </bcgov-button>
    `);
  });
  it("Render Search Inline Button", async () => {
    const page = await newSpecPage({
      components: [BcgovButton],
      html: `
      <bcgov-button button-style="search-inline" >Search Inline</bcgov-button>
      `,
    });
    expect(page.root).toEqualHtml(`
    
    <bcgov-button button-style="search-inline" class="bcgov-button">
      <button class="search-inline" type="submit" >
        <span class="bcgov-svg-icon">
          <svg aria-hidden="true" class="fa-search fa-w-16 svg-inline--fa" data-icon="search" data-prefix="fas" focusable="false" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
            <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" fill="currentColor"></path>
          </svg>
        </span>
        <span class="bcgov-button-text">Search Inline</span>
      </button>
    </bcgov-button>
    `);
  });
  it("Render Link Button", async () => {
    const page = await newSpecPage({
      components: [BcgovButton],
      html: `<bcgov-button link="https://gov.bc.ca" >Link Button</bcgov-button>`,
    });
    expect(page.root).toEqualHtml(`
    <bcgov-button class="bcgov-button" link="https://gov.bc.ca" ><a href="https://gov.bc.ca" class="primary" role="button" >Link Button</a></bcgov-button>
    `);
  });
  it("Render Link Button With Target", async () => {
    const page = await newSpecPage({
      components: [BcgovButton],
      html: `<bcgov-button target="_blank" link="https://gov.bc.ca" >Link Button</bcgov-button>`,
    });
    expect(page.root).toEqualHtml(`
    <bcgov-button class="bcgov-button" link="https://gov.bc.ca" target="_blank" ><a href="https://gov.bc.ca" class="primary" target="_blank" role="button" >Link Button</a></bcgov-button>
    `);
  });
});
