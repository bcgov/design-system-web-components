
import "../components/sass/style.scss";
import "../components/sass/style.scss";
import { applyPolyfills, defineCustomElements } from "../../html/dist/loader/index.es2017";
applyPolyfills().then(() => {
  defineCustomElements(window);
});
