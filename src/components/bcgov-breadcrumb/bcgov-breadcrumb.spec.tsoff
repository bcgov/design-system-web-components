import { BcgovBreadcrumb } from "./bcgov-breadcrumb";
import { newSpecPage } from "@stencil/core/testing";

describe("bcgov-breadcrumb", () => {
  it("builds", () => {
    expect(new BcgovBreadcrumb()).toBeTruthy();
  });
  it("Render BreadCrumb", async () => {
    const page = await newSpecPage({
      components: [BcgovBreadcrumb],
      html: `
      <bcgov-breadcrumb>
        <a href="#home">Home</a>
        <a href="#Components">Components</a>
        <a href="#DesignSystem">Design System</a>
        <span>Bread Crumbs</span>
      </bcgov-breadcrumb>
      `
    });
    expect(page.root).toEqualHtml(`
    <bcgov-breadcrumb aria-label="Breadcrumb" class="bcgov-breadcrumb" role="navigation" >
      <ol itemscope="" itemtype="http://schema.org/BreadcrumbList">
        <li aria-label="Home" itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a href="#home" itemprop="item"><span itemprop="name">Home</span></a></li>
        <li aria-label="Components" itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a href="#Components" itemprop="item"><span itemprop="name">Components</span></a></li>
        <li aria-label="Design System" itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><a href="#DesignSystem" itemprop="item"><span itemprop="name">Design System</span></a></li>
        <li aria-label="Bread Crumbs" itemscope="" itemprop="itemListElement" itemtype="http://schema.org/ListItem"><span itemprop="name" aria-current="page" tabindex="0">Bread Crumbs</span></li>
      </ol>
    </bcgov-breadcrumb>
    `);
  });
});
