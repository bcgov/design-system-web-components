import { newE2EPage } from '@stencil/core/testing';

describe('bcgov-beta', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bcgov-beta></bcgov-beta>');

    const element = await page.find('bcgov-beta');
    expect(element).toHaveClass('hydrated');
  });
});
