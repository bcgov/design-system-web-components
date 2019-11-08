import "core-js";
import "../components/sass/style.scss";
import "highlight.js/scss/default.scss";
import "../html/styles/index.scss";
import { applyPolyfills, defineCustomElements } from "../../html/dist/loader";
const b = document.documentElement;
b.setAttribute("data-useragen", navigator.userAgent);
applyPolyfills().then(() => {
  defineCustomElements(window);
});
