import { describe, expect, it, render } from '@stencil/vitest';

describe('bcgov-menu', () => {
  it('builds', async () => {
    const { root } = await render('<bcgov-menu></bcgov-menu>');

    expect(root.tagName.toLowerCase()).toBe('bcgov-menu');
  });

  it('renders a menu with nested submenus', async () => {
    const { root } = await render(`
      <bcgov-menu>
        <a href="test.html">Test</a>
        <a active href="test2.html"><span>Adding span</span></a>
        <bcgov-menu active name="Components" href="https://gov.bc.ca">
          <a href="test3.html">Test3</a>
          <a href="test4.html">Test4</a>
        </bcgov-menu>
        <bcgov-menu name="Styles" href="https://gov.bc.ca/styles">
          <a href="style1.html">Test3</a>
          <a href="style2.html">Test4</a>
        </bcgov-menu>
      </bcgov-menu>
    `);

    expect(root).toMatchSnapshot();
  });

  it('renders a menu inside bcgov-header', async () => {
    const { root } = await render(`
      <bcgov-header>
        <bcgov-menu>
          <a href="test.html">Test</a>
          <a active href="test2.html"><span>Adding span</span></a>
          <bcgov-menu active name="Components" href="https://gov.bc.ca">
            <a href="test3.html">Test3</a>
            <a href="test4.html">Test4</a>
          </bcgov-menu>
          <bcgov-menu name="Styles" href="https://gov.bc.ca/styles">
            <a href="style1.html">Test3</a>
            <a href="style2.html">Test4</a>
          </bcgov-menu>
        </bcgov-menu>
      </bcgov-header>
    `);

    expect(root).toMatchSnapshot();
  });
});