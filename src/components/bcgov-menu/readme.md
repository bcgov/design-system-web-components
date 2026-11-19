---
description: Navigation bars provide a list of links to important content on a website or application. Typically they are placed in the header.
title: Navigation Bar – Basic
status: draft
author: orinevares
---


# Menu
Navigation bars provide a list of links to different pages on a website or application.

Submenus use disclosure buttons within a navigation landmark. Use Tab to move
between links and buttons, Enter or Space to toggle a submenu, and Escape to
close an expanded submenu. Arrow keys, Home, and End provide optional movement
between items; moving focus outside the navigation closes expanded submenus.

Provide one `<li>` for each item. For a submenu, nest its `<ul>` inside the
parent `<li>`. The component creates and manages the disclosure button, so a
top-level link remains independently clickable. No nested `bcgov-menu`
elements or manually authored disclosure buttons are needed.


## Use This For
* Sites with six (6) or fewer navigation links or pages

## Design Protocol
* Present items in order of the users priority – higher demand links should be placed further to the left while lower demand links should be placed further to the right.

## Rationale
This header and navigation bar matches the mandatory branding requirements of the BC Government. Consistent branding helps users identify who owns the service they are using. The horizontal logo is used instead of the vertical logo to use space efficiently and create a symmetrical flow from the logo to the heading.

## Behaviour
1.	Link text appears underlined on hover
2.	Link text remains underlined and bolded when user is on the associated page

### Mobile Design
1.	The ‘hamburger icon’ should not appear on its own unless it has suitable Alternative text to ensure that It is recognizable by screen readers.”
2. Smaller browers, including landscape tablets should use the collapsed version of the menu. When the browser window is minimized to mobile view the navigation bar should appear as a hamburger dropdown menu.

## Accessibility
This component has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
As read using ChromeVox


### Converying Information
* Hamburger icon not placed alone without a text label
* Navbar links underline on hover to indicate they are clickable

## Example 1 Primary Menu 

### Output
<div>
<style>
  bcgov-menu.css-example {
  /** Desktop menu **/
  --menu-background: #ff3333;
  --menu-bacground-active: #a8aaad;
  --menu-border-color: #f8bf28;
  /** Desktop submenu */
  --menu-submenu-background: #1e73be;
  --menu-submenu-background-active: #77bbcf;
  }
  </style>
<bcgov-button button-style="hamburger" target="main-navigation-sample-1">Menu</bcgov-button>
<bcgov-menu id="main-navigation-sample-1" primary label="Primary navigation" class="css-example" alignment="left" breakpoint="1200">
  <li><a href="/">Home</a></li>
  <li><a active href="/sandbox.html">Sandbox</a></li>
  <li>
    <a href="/">Components</a>
    <ul>
      <li><a href="/header.html">Header</a></li>
      <li><a href="/menu.html" active>Menus</a></li>
      <li><a href="/buttons.html">Buttons</a></li>
      <li><a href="/footer.html">Footer</a></li>
      <li><a href="/beta.html">Beta</a></li>
      <li><a href="/callout.html">Callout</a></li>
    </ul>
  </li>
  <li><a href="/developer.html">Developer</a></li>
</bcgov-menu>
</div>

### Source
```html
<style>
   bcgov-menu.css-example {
  /** Desktop menu **/
  --menu-background: #ff3333;
  --menu-bacground-active: #a8aaad;
  --menu-border-color: #f8bf28;
  /** Desktop submenu */
  --menu-submenu-background: #1e73be;
  --menu-submenu-background-active: #77bbcf;
  }
  </style>
<bcgov-button button-style="hamburger" target="main-navigation-sample-1">Menu</bcgov-button>
<bcgov-menu id="main-navigation-sample-1" primary label="Primary navigation" class="css-example" alignment="left" breakpoint="1200">
  <li><a href="/">Home</a></li>
  <li><a active href="/sandbox.html">Sandbox</a></li>
  <li>
    <a href="/">Components</a>
    <ul>
      <li><a href="/header.html">Header</a></li>
      <li><a href="/menu.html" active>Menus</a></li>
      <li><a href="/buttons.html">Buttons</a></li>
      <li><a href="/footer.html">Footer</a></li>
      <li><a href="/beta.html">Beta</a></li>
      <li><a href="/callout.html">Callout</a></li>
    </ul>
  </li>
  <li><a href="/developer.html">Developer</a></li>
</bcgov-menu>
```


## Example 2 Menu 

### Output
<div>
<style>
  bcgov-menu.css-example {
  /** Desktop menu **/
  --menu-background: #ff3333;
  --menu-bacground-active: #a8aaad;
  --menu-border-color: #f8bf28;
  /** Desktop submenu */
  --menu-submenu-background: #1e73be;
  --menu-submenu-background-active: #77bbcf;
  }
  </style>

<bcgov-menu id="main-navigation-sample-2" label="Main navigation" class="css-example" alignment="left">
  <li><a href="/">Home</a></li>
  <li><a active href="/sandbox.html">Sandbox</a></li>
  <li>
    <a href="/components.html">Components</a>
    <ul>
      <li><a href="/header.html">Header</a></li>
      <li><a href="/menu.html" active>Menus</a></li>
      <li><a href="/buttons.html">Buttons</a></li>
      <li><a href="/footer.html">Footer</a></li>
      <li><a href="/beta.html">Beta</a></li>
      <li><a href="/callout.html">Callout</a></li>
    </ul>
  </li>
  <li><a href="/developer.html">Developer</a></li>
</bcgov-menu>
</div>

### Source
```html
<style>
   bcgov-menu.css-example {
  /** Desktop menu **/
  --menu-background: #ff3333;
  --menu-bacground-active: #a8aaad;
  --menu-border-color: #f8bf28;
  /** Desktop submenu */
  --menu-submenu-background: #1e73be;
  --menu-submenu-background-active: #77bbcf;
  }
  </style>

<bcgov-menu id="main-navigation-sample-2" label="Main navigation" class="css-example" alignment="left">
  <li><a href="/">Home</a></li>
  <li><a active href="/sandbox.html">Sandbox</a></li>
  <li>
    <a href="/components.html">Components</a>
    <ul>
      <li><a href="/header.html">Header</a></li>
      <li><a href="/menu.html" active>Menus</a></li>
      <li><a href="/buttons.html">Buttons</a></li>
      <li><a href="/footer.html">Footer</a></li>
      <li><a href="/beta.html">Beta</a></li>
      <li><a href="/callout.html">Callout</a></li>
    </ul>
  </li>
  <li><a href="/developer.html">Developer</a></li>
</bcgov-menu>
```

## CSS Variables
```css
:root {
  /** Desktop menu **/
  --menu-background: #{$bcgov-color-menu};
  --menu-background-active: #{$bcgov-color-menu-active};
  --menu-color: #{$bcgov-white};
  --menu-color-hover: #{$bcgov-white};
  --menu-color-active: #{$bcgov-white};
  --menu-border-color: #{$bcgov-color-menu-border};

  /** Desktop submenu */
  --menu-submenu-background: #{$bcgov-color-submenu};
  --menu-submenu-background-active: #{$bcgov-color-menu-active};
  --menu-submenu-color: #{$bcgov-white};
  --menu-submenu-color-hover: #{$bcgov-white};
  --menu-submenu-color-active: #{$bcgov-white};

  /** Mobile  Menu**/
  --menu-mobile-border-color: #{$bcgov-color-menu-border};

  --menu-mobile-background: #{$bcgov-color-menu};
  --menu-mobile-background-active: #{$bcgov-color-menu-active};
  --menu-mobile-color: #{$bcgov-white};
  --menu-mobile-color-hover: #{$bcgov-white};
  --menu-mobile-color-active: #{$bcgov-white};

  /** Mobile submenu */
  --menu-mobile-submenu-background: #{$bcgov-color-submenu};
  --menu-mobile-submenu-background-active: #{$bcgov-color-menu-active};
  --menu-mobile-submenu-color: #{$bcgov-white};
  --menu-mobile-submenu-color-hover: #{$bcgov-white};
  --menu-mobile-submenu-color-active: #{$bcgov-white};
}
.some-class bcgov-menu {
  --mobile-background: blue;
}
```
<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                                        | Type      | Default        |
| ------------ | ------------ | ------------------------------------------------------------------ | --------- | -------------- |
| `alignment`  | `alignment`  | Horizontal alignment of the top-level list.                        | `string`  | `"left"`       |
| `breakpoint` | `breakpoint` | Viewport width at which the menu switches to desktop styling.      | `number`  | `0`            |
| `label`      | `label`      | Accessible name for the navigation landmark.                       | `string`  | `"Navigation"` |
| `primary`    | `primary`    | Apply primary header-navigation styling and a mobile close button. | `boolean` | `false`        |
| `sidebar`    | `sidebar`    | Use the compact sidebar layout.                                    | `boolean` | `false`        |


## Slots

| Slot | Description      |
| ---- | ---------------- |
|      | The default slot |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
