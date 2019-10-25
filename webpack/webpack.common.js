const Path = require("path");
const { readdirSync, readFileSync } = require("fs");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const showdown = require("showdown");
const showdownHighlight = require("showdown-highlight");

const marked = require("marked");

const createPages = () => {
  const pages = Array();
  let htmlplugin = Array();
  let converter = new showdown.Converter({
    // That's it
    extensions: [showdownHighlight]
  });
  /**
   * Finds all the directories in ../src/bcgov in order to make pages,
   *  using the readme.md, and index.html as template.
   */
  readdirSync(Path.resolve(__dirname, "../src/components"), {
    withFileTypes: true
  })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => {
      if (!("sass" === dirent.name || "scripts" === dirent.name || "utils" === dirent.name)) {
        const page = dirent.name;
        htmlplugin.push(
          new HtmlWebpackPlugin({
            filename: `${page.replace("bcgov-", "")}.html`,
            bodyHtml: converter.makeHtml(
              marked(
                String(readFileSync(Path.join(__dirname, `../src/components/${page}/readme.md`)))
              )
            ),
            template: Path.resolve(__dirname, `../src/html/index.html`)
          })
        );
      }
    });

  /** Creates pages from md files */
  readdirSync(Path.resolve(__dirname, "../src/html/pages"), {
    withFileTypes: true
  }).map(dirent => {
    const page = dirent.name;
    htmlplugin.push(
      new HtmlWebpackPlugin({
        filename: `${page.replace(".md", ".html")}`,
        bodyHtml: converter.makeHtml(
          String(readFileSync(Path.join(__dirname, `../src/html/pages/${page}`)))
        ),
        template: Path.resolve(__dirname, `../src/html/index.html`)
      })
    );
  });
  htmlplugin.push(
    new HtmlWebpackPlugin({
      filename: `readme.html`,
      bodyHtml: converter.makeHtml(String(readFileSync(Path.join(__dirname, `../README.md`)))),
      template: Path.resolve(__dirname, `../src/html/index.html`)
    })
  );
  return htmlplugin;
};

const settings = {
  entry: {
    bootloader: Path.resolve(__dirname, "../src/scripts/index.js")
  },
  output: {
    path: Path.join(__dirname, "../build"),
    filename: "js/[name].js"
  },
  optimization: {
    splitChunks: {
      chunks: "async",
      name: false
    }
  },
  plugins: [].concat(createPages()),
  resolve: {
    alias: {
      "~": Path.resolve(__dirname, "../src")
    },
    extensions: [".tsx", ".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.mjs$/,
        include: /node_modules/,
        type: "javascript/auto"
      },
      {
        test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|md)(\?.*)?$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]"
          }
        }
      }
    ]
  }
};

module.exports = settings;
