import { defineVitestConfig } from '@stencil/vitest/config';
import { playwright } from '@vitest/browser-playwright';

export default defineVitestConfig({
  stencilConfig: './stencil.config.ts',
  test: {
    projects: [
      {
        test: {
          name: 'spec',
          include: ['src/**/*.spec.cmp.test.{ts,tsx}'],
          environment: 'stencil',
          setupFiles: ['./vitest-setup.ts'],
        },
      },
      {
        test: {
          name: 'browser',
          include: ['src/**/*.e2e.cmp.test.{ts,tsx}'],
          browser: {
            enabled: true,
            provider: playwright(),
            instances: [{ browser: 'chromium' }],
          },
          setupFiles: ['./vitest-setup.ts'],
        },
      }
    ],
  },
});
