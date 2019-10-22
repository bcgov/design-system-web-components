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
      esmLoaderPath: "./loader"
    },
    {
      type: "docs-readme"
    },
    {
      type: "www",
      serviceWorker: null,
      dir: "dist/www"
    }
  ],
  plugins: [
    sass({
      injectGlobalPaths: ["src/global/variables.scss", "src/global/mixins.scss"]
    })
  ]
};
