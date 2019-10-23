const Path = require("path");
const Webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const WebpackShellPlugin = require("webpack-shell-plugin");
const theoImporter = require("../theo-importer");

class WatchRunPlugin {
  apply(compiler) {
    compiler.hooks.watchRun.tap("WatchRun", comp => {
      const changedTimes = comp.watchFileSystem.watcher.mtimes;
      const changedFiles = Object.keys(changedTimes)
        .map(file => `\n  ${file}`)
        .join("");
      if (changedFiles.length) {
        console.log("====================================");
        console.log("NEW BUILD FILES CHANGED:", changedFiles);
        console.log("====================================");
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
    new Webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("development")
    }),
    //new Webpack.HotModuleReplacementPlugin(),
    new WebpackShellPlugin({ onBuildStart: ["stencil build --prod --watch"], dev: true }),
    new WatchRunPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.(s?css|ya?ml)$/i,
        use: ["style-loader", "css-loader?sourceMap=true"]
      },
      {
        test: /\.(s?css|ya?ml)$/i,
        loader: "sass-loader",
        options: {
          importer: [theoImporter]
        }
      },
      {
        test: /\.md$/i
      }
    ]
  }
});
