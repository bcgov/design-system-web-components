import "core-js"; //makes work with ie11
import "../components/sass/style.scss";
import "../components/sass/style.scss";
import cssVars from "css-vars-ponyfill";
import { applyPolyfills, defineCustomElements } from "../../html/dist/loader";
cssVars({});
applyPolyfills().then(() => {
  defineCustomElements(window);
});
