import { describe, expect, it, render } from "@stencil/vitest";

describe("bcgov-table", () => {
  it("hydrates with a table row", async () => {
    const { root } = await render(
      '<bcgov-table breakpoint="0"><bcgov-table-row>Cell</bcgov-table-row></bcgov-table>',
    );

    expect(root.classList.contains("hydrated")).toBe(true);
    expect(
      root.querySelector("bcgov-table-row")?.classList.contains("hydrated"),
    ).toBe(true);
  });
});
