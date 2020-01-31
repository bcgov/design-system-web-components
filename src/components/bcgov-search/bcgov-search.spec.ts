import { BcgovSearch } from "./bcgov-search";
import { BcgovButton } from "../bcgov-button/bcgov-button";
import { newSpecPage } from "@stencil/core/testing";

describe("bcgov-search", () => {
  it("builds", () => {
    expect(new BcgovSearch()).toBeTruthy();
  });
  it("Render BreadCrumb", async () => {
    const page = await newSpecPage({
      components: [BcgovSearch, BcgovButton],
      html: `
      <bcgov-search id="search-navigation-example">
        <form>
          <input type="search" placeholder="Search" />
          <bcgov-button button-style="search-inline">Search</bcgov-button>
        </form>
      </bcgov-search>
      `
    });
    expect(page.root).toEqualHtml(`
    <bcgov-search id="search-navigation-example">
      <div class="search-container">
        <form>
          <input placeholder="Search" type="search">
          <bcgov-button button-style="search-inline" class="bcgov-button">
            <button class="search-inline" type="submit">
              <svg aria-hidden="true" class="fa-search fa-w-16 svg-inline--fa" data-icon="search" data-prefix="fas" focusable="false" role="img" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" fill="currentColor"></path>
              </svg>
            </button>
          </bcgov-button>
        </form>
      </div>
    </bcgov-search>
    `);
  });
});
