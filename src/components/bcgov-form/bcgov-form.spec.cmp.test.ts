import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-form', () => {
  it('builds', async () => {
    const { root } = await render('<bcgov-form></bcgov-form>');

    expect(root.tagName.toLowerCase()).toBe('bcgov-form');
  });

  it('renders slotted form content', async () => {
    const { root } = await render('<bcgov-form><input /></bcgov-form>');

    expect(root).toMatchSnapshot();
  });
});