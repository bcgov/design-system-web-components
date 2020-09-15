import "../components/sass/style.scss";
import "../components/sass/style.scss";
import { applyPolyfills, defineCustomElements } from "../../html/dist/loader";
applyPolyfills().then(() => {
  defineCustomElements(window);
});
