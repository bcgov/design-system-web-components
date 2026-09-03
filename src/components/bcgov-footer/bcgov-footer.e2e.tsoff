import { newE2EPage } from '@stencil/core/testing';

describe('bcgov-footer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bcgov-footer></bcgov-footer>');

    const element = await page.find('bcgov-footer');
    expect(element).toHaveClass('hydrated');
  });
});
