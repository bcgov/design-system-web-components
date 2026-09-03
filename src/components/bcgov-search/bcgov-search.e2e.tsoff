import { newE2EPage } from '@stencil/core/testing';

describe('bcgov-search', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bcgov-search></bcgov-search>');

    const element = await page.find('bcgov-search');
    expect(element).toHaveClass('hydrated');
  });
});
