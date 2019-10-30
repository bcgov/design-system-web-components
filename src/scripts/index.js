import "../components/sass/style.scss";
import "highlight.js/scss/default.scss";
import "../html/styles/index.scss";
import { applyPolyfills, defineCustomElements } from "../../html/dist/loader";
applyPolyfills().then(() => {
  defineCustomElements(window);
});
