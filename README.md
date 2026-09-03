![img](https://img.shields.io/badge/Lifecycle-Maturing-007EC6)

# BCGov Design System Web Components

## Install

```
npm i git+https://github.com/bcgov/design-system-web-components.git
```

## Use with module bundler (Webpack, React, Angular)

## Upgrade from v1.3.3 to v2.0.0
- when upgrading to new version the stencil v2, added a class of `hydrated` in the `html` tag. 
  - this no longer works, and therefore in each repo, there will be css to need to be removed
```css
## remove this css
html {
  display: none;
  &.hydrated {
    display: block;
  }
}
```
## import into package.json
```json
    "devDependencies": {
      "@bcgov/web-components": "github:bcgov/design-system-web-components#feature/stencil-4",
      ....
    }
```

### Use with CSS
-index.js file
```javascript
import '@bcgov/web-components/dist/bcgov-web-components/bcgov-web-components.esm';
```

### Use with SCSS

index.js file
```javascript
.....
import "@bcgov/web-components/src/components/sass/style.scss";
```

* See [StencilJS implementation into frameworks](https://stenciljs.com/docs/overview)


## Description

The BCGov Web components was created to give a standard look and feel to meet the criteria of the Design System  
Here is how it does it:
- Uses a technology call [Web Components](https://www.webcomponents.org/)
- Uses a compiler that generates Web Components called [StencilJS](https://stenciljs.com/)
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

## Development
Builds are known to work with node v15.14.0 and npm v7.7.6.

Tip: `npm --no-save install` with npm7 will prevent unnecessary package-lock.json changes from needing to be committed back to the repository; not forcing an upgrade for others with npm6.
