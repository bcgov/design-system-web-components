import { newE2EPage } from '@stencil/core/testing';

describe('bcgov-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bcgov-carousel></bcgov-carousel>');

    const element = await page.find('bcgov-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
