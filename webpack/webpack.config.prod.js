const Path = require("path");
const Webpack = require("webpack");
const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const common = require("./webpack.common.js");
const theoImporter = require("../theo-importer");

module.exports = merge(common, {
  mode: "production",
  devtool: "source-map",
  stats: "errors-only",
  bail: true,
  output: {
    filename: "js/[name].js",
    chunkFilename: "js/[name].[chunkhash:8].js"
  },
  plugins: [
    new Webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new Webpack.optimize.ModuleConcatenationPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.(s?css|ya?ml)/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      },
      {
        test: /\.(s?css|ya?ml)$/i,
        loader: "sass-loader",
        options: {
          importer: [theoImporter]
        }
      }
    ]
  }
});
