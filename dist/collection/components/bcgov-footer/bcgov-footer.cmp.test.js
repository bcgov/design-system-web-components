import { describe, expect, it, render } from "@stencil/vitest";
describe('bcgov-footer', () => {
    it('renders the default logo', async () => {
        const { root } = await render('<bcgov-footer></bcgov-footer>');
        expect(root.classList.contains('bcgov-footer')).toBe(true);
        expect(root.querySelector('img')).not.toBeNull();
    });
});
