
import {describe,it,render, expect} from "@stencil/vitest";

describe('bcgov-button', () => {
  it('renders', async () => {
    const { root } = await render(`<bcgov-button></bcgov-button>`);
    await expect(root).toEqualHtml(`
      <bcgov-button class="bcgov-button hydrated">
        <button class="primary"></button>
      </bcgov-button>
      `);
  });
});
