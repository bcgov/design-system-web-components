const Path = require("path");
const { readdirSync, readFileSync } = require("fs");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const merge = require("webpack-merge");
const parseMD = require("parse-md");

const showdown = require("showdown");
const showdownHighlight = require("showdown-highlight");
let converter = new showdown.Converter({ extensions: [showdownHighlight] });
const marked = require("marked");

const getHtmlWebpackPlugin = (filename, mdfile) => {
  const output = readFileSync(mdfile, "utf8");
  let { metadata, content } = parseMD.default(output);
  content = converter.makeHtml(marked(String(content)));
  let options = {
    filename: filename,
    bodyHtml: content,
    template: Path.resolve(__dirname, `../src/html/index.html`)
  };

  return new HtmlWebpackPlugin(merge(options, metadata));
};

const parseMarkDown = mdfile => {
  const output = readFileSync(mdfile, "utf8");
  let { metadata, content } = parseMD.default(output);
  content = converter.makeHtml(marked(String(content)));
  return merge({ bodyHtml: content }, metadata);
};

const createPages = () => {
  let htmlplugin = Array();

  /**
   * Finds all the directories in ../src/bcgov in order to make pages,
   *  using the readme.md, and index.html as template.
   */
  readdirSync(Path.resolve(__dirname, "../src/components"), {
    withFileTypes: true
  })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => {
      if (
        !(
          "sass" === dirent.name ||
          "scripts" === dirent.name ||
          "utils" === dirent.name
        )
      ) {
        const page = dirent.name;
        htmlplugin.push(
          getHtmlWebpackPlugin(
            `${page.replace("bcgov-", "")}.html`,
            Path.join(__dirname, `../src/components/${page}/readme.md`)
          )
        );
      }
    });

  /** Creates pages from md files */
  readdirSync(Path.resolve(__dirname, "../src/html/pages"), {
    withFileTypes: true
  }).map(dirent => {
    const page = dirent.name;
    htmlplugin.push(
      getHtmlWebpackPlugin(
        `${page.replace(".md", ".html")}`,
        Path.join(__dirname, `../src/html/pages/${page}`)
      )
    );
  });

  htmlplugin.push(
    getHtmlWebpackPlugin(`readme.html`, Path.join(__dirname, `../README.md`))
  );
  return htmlplugin;
};

const settings = {
  entry: {
    bootloader: Path.resolve(__dirname, "../src/scripts/index.js")
  },
  output: {
    path: Path.join(__dirname, "../html"),
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
