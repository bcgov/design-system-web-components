import { describe, expect, it, render } from "@stencil/vitest";

describe("bcgov-table", () => {
  it("renders as a list with slotted content", async () => {
    const { root } = await render(
      '<bcgov-table breakpoint="0" show-column-labels><span>Table content</span></bcgov-table>',
    );

    expect(root.classList.contains("bcgov-table")).toBe(true);
    expect(root.classList.contains("show-column-labels")).toBe(true);
    expect(root.classList.contains("is-table")).toBe(true);
    expect(root.getAttribute("role")).toBe("list");
    expect(root.querySelector("span")?.textContent).toBe("Table content");
  });

  it("does not use table layout above the viewport width", async () => {
    const { root } = await render(
      '<bcgov-table breakpoint="100000"></bcgov-table>',
    );

    expect(root.classList.contains("is-table")).toBe(false);
  });

  it("updates the layout when the viewport is resized", async () => {
    const innerWidth = Object.getOwnPropertyDescriptor(window, "innerWidth");

    try {
      Object.defineProperty(window, "innerWidth", {
        configurable: true,
        value: 500,
      });
      const { root, unmount } = await render(
        '<bcgov-table breakpoint="960"></bcgov-table>',
      );

      expect(root.classList.contains("is-table")).toBe(false);

      Object.defineProperty(window, "innerWidth", {
        configurable: true,
        value: 1000,
      });
      window.dispatchEvent(new Event("resize"));

      expect(root.classList.contains("is-table")).toBe(true);
      unmount();
    } finally {
      if (innerWidth) {
        Object.defineProperty(window, "innerWidth", innerWidth);
      }
    }
  });
});
