import { describe, expect, it, render } from "@stencil/vitest";

describe("bcgov-table-row", () => {
  it("renders as a list item with slotted content", async () => {
    const { root } = await render(
      "<bcgov-table-row>Table row</bcgov-table-row>",
    );

    expect(root.classList.contains("bcgov-table-row")).toBe(true);
    expect(root.getAttribute("role")).toBe("listitem");
    expect(root.textContent).toBe("Table row");
  });

  it("marks header rows and formats data cells from header labels", async () => {
    const { root } = await render(`
      <bcgov-table breakpoint="0" primary-column="2">
        <bcgov-table-row header>
          <div>First</div>
          <div>Second</div>
        </bcgov-table-row>
        <bcgov-table-row>
          <div>Value one</div>
          <div>Value two</div>
        </bcgov-table-row>
      </bcgov-table>
    `);
    const rows = root.querySelectorAll("bcgov-table-row");
    const cells = rows[1].children;

    expect(rows[0].classList.contains("header-row")).toBe(true);
    expect(cells[1].classList.contains("primary-column")).toBe(true);
    expect(
      cells[0].querySelector(".table-column-header-label")?.textContent,
    ).toBe("First");
    expect(
      cells[1].querySelector(".table-column-header-label")?.textContent,
    ).toBe("Second");
  });
});
