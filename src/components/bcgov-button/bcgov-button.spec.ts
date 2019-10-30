import { BcgovButton } from "./bcgov-button";
import { newSpecPage } from "@stencil/core/testing";

describe("bcgov-button", () => {
  it("builds", () => {
    expect(new BcgovButton()).toBeTruthy();
  });
  it("Render Primary Button", async () => {
    const page = await newSpecPage({
      components: [BcgovButton],
      html: `<bcgov-button>Primary Button</bcgov-button>`
    });
    expect(page.root).toEqualHtml(`
    <bcgov-button><button class="bcgov-button primary">Primary Button</button></bcgov-button>
    `);
  });
  it("Render Seconary Button", async () => {
    const page = await newSpecPage({
      components: [BcgovButton],
      html: `<bcgov-button secondary >Secondary Button</bcgov-button>`
    });
    expect(page.root).toEqualHtml(`
    <bcgov-button secondary ><button class="bcgov-button secondary">Secondary Button</button></bcgov-button>
    `);
  });

  it("Render Seconary Button", async () => {
    const page = await newSpecPage({
      components: [BcgovButton],
      html: `<bcgov-button dark >Dark Button</bcgov-button>`
    });
    expect(page.root).toEqualHtml(`
    <bcgov-button dark ><button class="bcgov-button dark">Dark Button</button></bcgov-button>
    `);
  });
  it("Render Link Button", async () => {
    const page = await newSpecPage({
      components: [BcgovButton],
      html: `<bcgov-button link="https://gov.bc.ca">Link Button</bcgov-button>`
    });
    expect(page.root).toEqualHtml(`
    <bcgov-button link="https://gov.bc.ca" ><a href="https://gov.bc.ca" class="bcgov-button primary" role="button" >Link Button</a></bcgov-button>
    `);
  });
});
