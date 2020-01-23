import "core-js";
import "highlight.js/scss/default.scss";
import "../styles/index.scss";

function replaceTag(tag) {
  const tagsToReplace = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  };
  return tagsToReplace[tag] || tag;
}
function safe_tags_replace(str) {
  str = str.replace(/<!---->/g, "\n");
  return str.replace(/[&<>]/g, replaceTag);
}

document.addEventListener(
  "DOMContentLoaded",
  function() {
    let body = document.getElementsByTagName("BODY")[0];
    let code_elements = body.querySelectorAll(".code");
    /*  const loadTag = document.createElement("div");
    loadTag.innerHTML = "Loading Code";
    loadTag.classList.add("loading-code");
    [].forEach.call(code_elements, function(element) {
      element.appendChild(loadTag);
    });
    */
    setTimeout(function() {
      [].forEach.call(code_elements, function(element) {
        const pre = document.createElement("pre");
        const code = document.createElement("code");
        code.classList.add("language-html");
        code.classList.add("hljs");

        code.innerHTML = safe_tags_replace(element.innerHTML);
        pre.appendChild(code);
        element.replaceWith(pre);
      });
    }, 5000);
  },
  false
);
