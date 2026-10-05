import { describe, expect, it, render } from "@stencil/vitest";
describe('bcgov-breadcrumb', () => {
    it('renders accessible breadcrumb markup', async () => {
        const { root } = await render(`
      <bcgov-breadcrumb>
        <a href="#home">Home</a>
        <span>Current page</span>
      </bcgov-breadcrumb>
    `);
        expect(root.getAttribute('aria-label')).toBe('Breadcrumb');
        expect(root.getAttribute('role')).toBe('navigation');
        expect(root.querySelectorAll('li')).toHaveLength(2);
        expect(root.querySelector('span[aria-current="page"]')).not.toBeNull();
    });
});
