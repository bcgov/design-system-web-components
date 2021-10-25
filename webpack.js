const Path = require("path");
const createHTMLPages = require("./src/scripts/build");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const WebpackShellPlugin = require('webpack-shell-plugin-next');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const Webpack = require("webpack");

const loadPlugins = isProduction => {
  let plugins = createHTMLPages();
  plugins.push(
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ["*.html", "css", "js"]
    })
  );
  if (!isProduction) {
    plugins.push(
      new WebpackShellPlugin({
        onBuildStart: ["stencil build --dev --watch "],
        dev: true
      })
    );
  }

  plugins.push(
    new Webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    })
  );
  plugins.push(
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  );

  return plugins;
};

module.exports = env => {
  const isProduction = undefined === env || !env.development;
  const config = {
    paths: {
      resources: Path.resolve(__dirname, "./src/"),
      assets: Path.resolve(__dirname, "./src/assets/"),
      dist: Path.resolve(__dirname, "html")
    },
    sourceMaps: !isProduction,
    isProduction: isProduction
  };

  const settings = {
    context: config.paths.assets,
    mode: isProduction ? "production" : "development",
    devtool: config.sourceMaps ? "source-map" : 'eval-source-map',
    optimization: {
      splitChunks: {
        chunks: "async",
        name: false
      }
    },
    entry: {
      components:[
        Path.join(config.paths.resources, "scripts/components.js"),
      ],
      app: [
        Path.join(config.paths.resources, "scripts/index.js"),
        Path.join(config.paths.resources, "styles/index.scss")
      ]
    },
    output: {
      path: config.paths.dist,
      /*publicPath: "",*/
      filename: "js/[name].js",
      chunkFilename: "js/[name].chunk.js"
    },
    devServer: {
      host: "local-ip",
      hot: "only",
      open: true,
      static: {
          directory: Path.join(__dirname, "src"),
          watch: true
      },
      allowedHosts: "all",
    },

    stats: {
      ids: true,
      hash: true,
      outputPath: true,
      assets: true,
      errors: true,
      errorDetails: true,
      warnings: true,
      reasons: true,
      source: true,
      modules: false,
      publicPath: true
    },
    plugins: loadPlugins(isProduction),
    module: {
      rules: [
        /*
        {
          enforce: "pre",
          test: /\.js$/,
          include: config.paths.resources,
          use: "eslint"
        },
        {
          test: /\.(js)$/,
          include: config.paths.resources,
          exclude: /node_modules/,
          use: "babel-loader"
        },*/
        {
          test: /\.(ttf|otf|eot|woff2?|png|jpe?g|gif|svg|ico)$/,
          include: config.paths.assets,
          exclude: /node_modules/,
          loader: "url-loader",
          options: {
            name: `[path][name].[ext]`
          }
        },
        {
          test: /\.(ttf|otf|eot|woff2?|png|jpe?g|gif|svg|ico)$/,
          include: /node_modules/,
          loader: "file-loader",
          options: {
            limit: 4096,
            outputPath: (url, resourcePath, context) => {
              return ` / vendor / ${url}`;
            },
            publicPath: "../vendor/",
            name: `[name].[ext]`
          }
        },
        {
          test: /\.(s?css|ya?ml)/i,
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                
              }
            },
            "css-loader"
          ]
        },
        {
          test: /\.(s?css|ya?ml)$/i,
          loader: "sass-loader",
          options: {
            sourceMap: true
          }
        },
        {
          test: /\.md$/i,
          include: config.paths.resources,
          use: [
            {
              loader: "html-loader"
            },
            {
              loader: "markdown-loader"
            }
          ]
        }
      ]
    }
  };
  return settings;
};
