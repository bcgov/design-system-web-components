import { newE2EPage } from '@stencil/core/testing';

describe('bcgov-hamburger', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bcgov-hamburger></bcgov-hamburger>');

    const element = await page.find('bcgov-hamburger');
    expect(element).toHaveClass('hydrated');
  });
});
