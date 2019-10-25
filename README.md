# BCGov Design System Web Components

## Install

```
npm i git+https://github.com/bcgov/design-system-web-components.git
```

## Use with module bundler (Webpack, React, Angular)

### Use with CSS
-index.js file
```javascript
import "core-js/stable"; // makes it ie11 compatible, needs to be first item.
.....
import "@bcgov/web-components/build/dist/bcgov-web-components/bcgov-web-components.css";
import { applyPolyfills, defineCustomElements } from "@bcgov/web-components/build/dist/loader";

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

### Use with SCSS

index.js file
```javascript
import "core-js/stable"; // makes it ie11 compatible, needs to be first item.
.....
import "@bcgov/web-components/src/components/sass/style.scss";
import { applyPolyfills, defineCustomElements } from "@bcgov/web-components/build/dist/loader";

applyPolyfills().then(() => {
  defineCustomElements(window);
});
```

* See [StencilJS implementation into frameworks](https://stenciljs.com/docs/overview)

### Making IE11 compatable.
```npm npm i corejs ```

package.json file
```json
  "babel": {
    "presets": [
      [
        "@babel/preset-env",
        {
          "useBuiltIns": "usage",
          "corejs": "3.0.0",
          "targets": {
            "esmodules": true,
            "ie": "11"
          }
        }
      ]
    ]
  }
```


## Description

The BCGov Web components was created to give a standard look and feel to meet the criteria of the Design System  
Here is how it does it:
- Uses a technology call [Web Components](https://www.webcomponents.org/)
- Uses a compiler that generates Web Components called [StencilJS](https://stenciljs.com/)
- Uses a testing framework [Jest](https://jestjs.io/) and [Puppeteer](https://pptr.dev/).
- Uses [sass](https://sass-lang.com/) files
- Uses **Webpack** for creating web pages for the Design System.


## Accessibility

All components should meet or exceed [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards Although this is the intention, this is very much a **work in progress**.

## Components

- **Collapse**  `<bcgov-collapse>` *Not Implenented*
- **Beta** [Beta](beta.html) `<bcgov-beta>`
- **Button** [Button](button.html) `<bcgov-button>`
- **Callout** [Callout](callout.html) `bcgov-callout>`
- **Footer** [Footer](footer.html) `<bcgov-footer>`
- **Forms**  `<bcgov-forms><bcgov-radio><bcgov-checkbox>` *Not Implemented*
- **Header** [Header](header.html) `<bcgov-header>`
    - logo
    - headline
    - skip links for accessibility
- **Menu** [Menu](menu.html) `<bcgov-menu>`
    - links
    - format (alignment: {left|center|right})
    - submenu
    - accessibility, and accessibility instructions
- **Tabs**  `<bcgov-tabs><bcgov-tab>` *Not Implemented*
