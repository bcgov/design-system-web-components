import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "bcgov-web-components",
  hashFileNames: false,
  enableCache: true,
  devServer: {
    reloadStrategy: null
  },
  outputTargets: [
    {
      type: "dist",
      dir: "html/dist",
      esmLoaderPath: "./loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null,
      dir: "html/dist/www"
    }
  ],
  globalStyle: "src/components/sass/style.scss",
  /*globalScript: "src/components/scripts/components.ts",*/
  plugins: [
    sass({
      injectGlobalPaths: ["src/components/sass/variables.scss", "src/components/sass/mixins.scss"]
    })
  ]
};
