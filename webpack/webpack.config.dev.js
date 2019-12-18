const Path = require("path");
const Webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const WebpackShellPlugin = require("webpack-shell-plugin");

class WatchRunPlugin {
  apply(compiler) {
    compiler.hooks.watchRun.tap("WatchRun", comp => {
      const changedTimes = comp.watchFileSystem.watcher.mtimes;
      const changedFiles = Object.keys(changedTimes)
        .map(file => `\n  ${file}`)
        .join("");
      if (changedFiles.length) {
      }
    });
  }
}

module.exports = merge(common, {
  mode: "development",
  devtool: "inline-source-map",
  output: {
    chunkFilename: "js/[name].chunk.js"
  },

  devServer: {
    inline: true,
    watchContentBase: true,
    before: function(app, server) {},
    disableHostCheck: true,
    host: "0.0.0.0",
    useLocalIp: false //set to true to use actual ip address
  },
  plugins: [
    new Webpack.optimize.LimitChunkCountPlugin({
      maxChunks: 1
    }),
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    //new Webpack.HotModuleReplacementPlugin(),
    new WebpackShellPlugin({
      onBuildStart: ["stencil build --prod --watch"],
      dev: true
    }),
    new WatchRunPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(js)$/,
        include: Path.resolve(__dirname, "../src/scripts"),
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /\.(s?css|ya?ml)$/i,
        use: ["style-loader", "css-loader?sourceMap=true"]
      },
      {
        test: /\.(s?css|ya?ml)$/i,
        loader: "sass-loader"
      },
      {
        test: /\.md$/i
      }
    ]
  }
});
