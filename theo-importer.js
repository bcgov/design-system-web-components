const theo = require("theo"); // <https://www.npmjs.com/package/theo>
const { resolve, parse } = require("path");

/**
 * Theo Design Token Sass Importer
 * Import scss variables from Yaml files directly
 * @param {string} url - path to the file passed into import statement, i.e. `@import "design-tokens.yml";`
 * @param {string} prev - path to the file the import statement is located at, useful for calculating relative paths
 * @param {function({ file: string, contents: string })} done - callback to fire when done; pass in `file` for path to scss file to import OR `contents` with the contents of a scss file
 * @link <https://www.npmjs.com/package/node-sass#importer--v200---experimental>
 * @link <https://www.npmjs.com/package/theo>
 */
function theoImporter(url, prev, done) {
  // If the imported file doesn't end in `.yml` or `.yaml`, then `return null` early to tell node-sass that we're not going to do anything. It'll go on to the next function or just try to handle the import itself.

  if (!/\.ya?ml/.test(url)) {
    return null;
  }
  console.log("...........TheoImporter", url);

  // `prev` is the where it was imported from, we just want the directory it is in
  const prevDirectory = parse(prev).dir;
  // imports are almost always relative, so let's figure out how to get to there from here so we end up with an absolute url
  const designTokenFilePath = resolve(prevDirectory, url);
  theo
    .convert({
      transform: {
        type: "web",
        file: designTokenFilePath
      },
      format: {
        // This can be any format Theo supports (or your own custom one!) <https://www.npmjs.com/package/theo#formats>
        // We're choosing scss variables with `!default`
        type: "custom-properties.css"
      }
    })
    .then(scss => {
      // `scssString` will be our scss variables, and instead of writing to a file, we'll just pass it back to Sass
      done({
        contents: scss
      });
    })
    .catch(({ message }) => {
      const msg = `Theo design token error in ${url} - ${message}`;
      done(new Error(msg));
    });
}

module.exports = theoImporter;
