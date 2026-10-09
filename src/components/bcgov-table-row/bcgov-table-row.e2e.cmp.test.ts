import { describe, expect, it, render } from "@stencil/vitest";

describe("bcgov-table-row", () => {
  it("hydrates inside a table", async () => {
    const { root } = await render(
      '<bcgov-table breakpoint="0"><bcgov-table-row>Cell</bcgov-table-row></bcgov-table>',
    );
    const row = root.querySelector("bcgov-table-row");

    expect(row?.classList.contains("hydrated")).toBe(true);
  });
});
