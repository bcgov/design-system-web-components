import "core-js/stable";
import "../html/styles/index.scss";
import { applyPolyfills, defineCustomElements } from "../../build/dist/loader";

applyPolyfills().then(() => {
  defineCustomElements(window);
});
