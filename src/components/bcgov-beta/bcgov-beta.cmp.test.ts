/// <reference types="vite/client" />

import { describe, it, render } from '@stencil/vitest';
import { expect } from 'vitest';
import { page } from 'vitest/browser';
import '../../styles/index.scss';
import '../sass/style.scss';

describe('bcgov-beta', () => {
  it('renders the default label and accessible message', async () => {
    const { root } = await render('<bcgov-beta>This is my beta message</bcgov-beta>');

    expect(root.getAttribute('aria-label')).toBe('This is my beta message');
    expect(root.getAttribute('role')).toBe('alert');
    expect(root.textContent).toContain('Beta');
  });

  it('matches the beta indicator screenshot', async () => {
    await render(`
      <div data-testid="beta-banner" style="display: inline-flex; align-items: center; background: #003366; color: white; padding: 12px; --bcgov-wc-color-brand-secondary: #fcba19;">
        Service <bcgov-beta>This is my beta message</bcgov-beta>
      </div>
    `);

    await expect(page.getByTestId('beta-banner')).toMatchScreenshot();
  });

  it('hydrates with the expected host attributes', async () => {
    const { root } = await render('<bcgov-beta>This is my beta message</bcgov-beta>');

    expect(root.classList.contains('hydrated')).toBe(true);
    expect(root.classList.contains('bcgov-beta')).toBe(true);
    expect(root.getAttribute('tabindex')).toBe('0');
    expect(root.textContent?.trim()).toBe('Beta');
  });

  it('falls back to the default content for the accessible message', async () => {
    const { root } = await render('<bcgov-beta></bcgov-beta>');

    expect(root.getAttribute('aria-label')).toBe('This Application is currently in Beta Phase');
    expect(root.getAttribute('role')).toBe('alert');
  });

  it('renders a custom label', async () => {
    const { root } = await render('<bcgov-beta label="Custom Beta">This is my beta message</bcgov-beta>');

    expect(root.getAttribute('label')).toBe('Custom Beta');
    expect(root.getAttribute('aria-label')).toBe('This is my beta message');
    expect(root.getAttribute('role')).toBe('alert');
    expect(root.classList.contains('bcgov-beta')).toBe(true);
    expect(root.getAttribute('tabindex')).toBe('0');
    expect(root.textContent?.trim()).toBe('Custom Beta');
  });
});
