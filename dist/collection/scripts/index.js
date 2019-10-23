import "../html/styles/index.scss";
import "../html/styles/fallback.scss";
//import "../global/components.scss";
import "../html/styles/design-tokens.scss";
import { applyPolyfills, defineCustomElements } from "../../loader";

applyPolyfills().then(() => {
  defineCustomElements(window);
});
