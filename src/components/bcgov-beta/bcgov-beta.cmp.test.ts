import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-beta', () => {
  it('renders the default label and accessible message', async () => {
    const { root } = await render('<bcgov-beta>This is my beta message</bcgov-beta>');

    expect(root.getAttribute('aria-label')).toBe('This is my beta message');
    expect(root.getAttribute('role')).toBe('alert');
    expect(root.textContent).toContain('Beta');
  });

  it('renders a custom label', async () => {
    const { root } = await render('<bcgov-beta label="Custom Beta">This is my beta message</bcgov-beta>');

    expect(root.textContent).toContain('Custom Beta');
  });
});