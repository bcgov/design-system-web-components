import { newE2EPage } from '@stencil/core/testing';

describe('bcgov-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bcgov-breadcrumb></bcgov-breadcrumb>');

    const element = await page.find('bcgov-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
