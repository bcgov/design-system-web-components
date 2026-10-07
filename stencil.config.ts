import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: "bcgov-web-components",
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: './loader',
    },
    {
      type: 'dist-custom-elements',
      customElementsExportBehavior: 'auto-define-custom-elements',
      externalRuntime: false,
    },
    {
      type: 'docs-readme',
      
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  globalStyle: "src/components/sass/style.scss",
  plugins: [
    sass({
      injectGlobalPaths: ["src/styles/index.scss","src/components/sass/variables.scss", "src/components/sass/mixins.scss"]
    })
  ]
};
