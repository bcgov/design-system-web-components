import { expect } from '@playwright/test';
import { matchers, createConfig } from '@stencil/playwright';

expect.extend(matchers);

export default createConfig({
  testMatch: "*.axe.test.ts",
  use: { baseURL: 'http://localhost:3333' },
});
