import { describe, expect, it, render } from "@stencil/vitest";
describe('bcgov-form', () => {
    it('renders slotted form content', async () => {
        const { root } = await render('<bcgov-form><input /></bcgov-form>');
        expect(root.classList.contains('bcgov-form')).toBe(true);
        expect(root.querySelector('input')).not.toBeNull();
    });
});
