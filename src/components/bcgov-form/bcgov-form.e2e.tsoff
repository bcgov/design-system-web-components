import { newE2EPage } from '@stencil/core/testing';

describe('bcgov-form', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<bcgov-form></bcgov-form>');

    const element = await page.find('bcgov-form');
    expect(element).toHaveClass('hydrated');
  });
});
