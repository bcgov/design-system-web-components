import { Config } from "@stencil/core";
import { sass } from "@stencil/sass";

export const config: Config = {
  namespace: "bcgov-web-components",
  devServer: {
    reloadStrategy: null
  },
  outputTargets: [
    {
      type: "dist",
      dir: "build/dist",
      esmLoaderPath: "./loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null,
      dir: "build/dist/www"
    }
  ],
  globalStyle: "src/components/sass/style.scss",
  globalScript: "src/components/scripts/components.ts",
  plugins: [
    sass({
      injectGlobalPaths: ["src/components/sass/variables.scss", "src/components/sass/mixins.scss"]
    })
  ]
};
