const Path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { readdirSync, readFileSync } = require("fs");
const merge = require("webpack-merge");
const parseMD = require("parse-md");
const showdown = require("showdown");
const showdownHighlight = require("showdown-highlight");
let converter = new showdown.Converter({ extensions: [showdownHighlight] });
const marked = require("marked");

/**
 * This reads md file, parses md, adds syntax highlighting.
 *
 * @param {string} mdfile
 */
const parseMarkDown = mdfile => {
  const output = readFileSync(mdfile, "utf8");
  let { metadata, content } = parseMD.default(output);
  content = converter.makeHtml(marked(String(content)));
  return merge({ bodyHtml: content }, metadata);
};

/**
 * This creates page using layout, adds metadata variables
 *
 * @param {string} filename
 * @param {string} mdfile
 * @param {string} sidebar
 * @return {HTMLWebpackPlugin}
 */
const getHtmlWebpackPlugin = (filename, mdfile, sidebar = "") => {
  const baseurl = "index.html" === filename ? "" : "../";
  let options = {
    filename: filename,
    template: Path.resolve(__dirname, `../html/layout.html`)
  };
  const data = merge(options, parseMarkDown(mdfile));
  return new HtmlWebpackPlugin(data);
};

/**
 * Home Page.
 */
const createHomePage = () => {
  return getHtmlWebpackPlugin(
    `index.html`,
    Path.join(__dirname, `../../readme.md`)
  );
};

/**
 * Creates components from @bcgov/web-components/src/components.
 */
const createComponents = htmlplugin => {
  readdirSync(Path.resolve(__dirname, "../components"), {
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
            Path.join(__dirname, `../components/${page}/readme.md`)
          )
        );
      }
    });
  return htmlplugin;
};

/**
 * This is the export that is called.
 */
module.exports = function createHTMLPages() {
  let htmlplugin = Array();
  /** Home Page. */
  htmlplugin.push(createHomePage());
  /** Create Components */
  createComponents(htmlplugin);
  return htmlplugin;
};
