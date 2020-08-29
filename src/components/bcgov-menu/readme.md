---
description: Navigation bars provide a list of links to important content on a website or application. Typically they are placed in the header.
title: Navigation Bar – Basic
status: draft
author: orinevares
---


# Menu
Navigation bars provide a list of links to different pages on a website or application.




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

## Example
<div>
<style>
  bcgov-menu.css-example {
  /** Desktop menu **/
  --background: #ff3333;
  --bacground-active: #a8aaad;
  --border-color: #f8bf28;
  /** Desktop submenu */
  --submenu-background: #1e73be;
  --submenu-background-active: #77bbcf;

  }
  </style>
<bcgov-button button-style="hamburger" target="main-navigation-sample">Menu</bcgov-button>
<bcgov-menu id="main-navigation-sample"  primary class="css-example"  alignment="left" breakpoint="1200">
  <a href="/">Home</a>
  <a active href="/sandbox.html">Sandbox</a>
  <bcgov-menu href="/" name="Components">
    <a href="/header.html">Header</a>
    <a href="/menu.html" active>Menus</a>
    <a href="/buttons.html">Buttons</a>
    <a href="/footer.html">Footer</a>
    <a href="/beta.html">Beta</a>
    <a href="/callout.html">Callout</a>
  </bcgov-menu>
  <a href="/developer.html">Developer</a>
</bcgov-menu>
</div>

### Source
```html
<style>
  bcgov-menu.css-example {
  /** Desktop menu **/
  --background: #ff3333;
  --bacground-active: #a8aaad;
  --border-color: #f8bf28;
  /** Desktop submenu */
  --submenu-background: #1e73be;
  --submenu-background-active: #77bbcf;

  }
  </style>
<bcgov-button button-style="hamburger" target="main-navigation-sample">Menu</bcgov-button>
<bcgov-menu id="main-navigation-sample"  
            primary 
            class="css-example"  
            alignment="left" 
            breakpoint="1200">
  <a href="/">Home</a>
  <a active href="/sandbox.html">Sandbox</a>
  <bcgov-menu href="/" name="Components">
    <a href="/header.html">Header</a>
    <a href="/menu.html" active>Menus</a>
    <a href="/buttons.html">Buttons</a>
    <a href="/footer.html">Footer</a>
    <a href="/beta.html">Beta</a>
    <a href="/callout.html">Callout</a>
  </bcgov-menu>
  <a href="/developer.html">Developer</a>
</bcgov-menu>
```

### Output

<div class="code">
<bcgov-button button-style="hamburger" target="main-navigation-sample">Menu</bcgov-button>
<bcgov-menu id="main-navigation-sample" style="background-color: #036;" primary   alignment="left" breakpoint="1200">
  <a href="/">Home</a>
  <a href="/sandbox.html">Sandbox</a>
  <bcgov-menu href="/" name="Components">
    <a href="/header.html">Header</a>
    <a href="/menu.html">Menus</a>
    <a href="/buttons.html">Buttons</a>
    <a href="/footer.html">Footer</a>
    <a href="/beta.html">Beta</a>
    <a href="/callout.html">Callout</a>
  </bcgov-menu>
  <a href="/developer.html">Developer</a>
</bcgov-menu>
</div>


## CSS Variables
```css
bcgov-menu {
  /** Desktop menu **/
  --background: #{$bcgov-color-menu};
  --bacground-active: #{$bcgov-color-menu-active};
  --color: #{$bcgov-white};
  --color-hover: #{$bcgov-white};
  --color-active: #{$bcgov-white};
  --border-color: #{$bcgov-color-menu-border};

  /** Desktop submenu */
  --submenu-background: #{$bcgov-color-submenu};
  --submenu-background-active: #{$bcgov-color-menu-active};
  --submenu-color: #{$bcgov-white};
  --submenu-color-hover: #{$bcgov-white};
  --submenu-color-active: #{$bcgov-white};

  /** Mobile  Menu**/
  --mobile-border-color: #{$bcgov-color-menu-border};
  --mobile-background: #{$bcgov-color-menu};
  --mobile-background-active: #{$bcgov-color-menu-active};
  --mobile-color: #{$bcgov-white};
  --mobile-color-hover: #{$bcgov-white};
  --mobile-color-active: #{$bcgov-white};

  /** Mobile submenu */
  --mobile-submenu-background: #{$bcgov-color-submenu};
  --mobile-submenu-background-active: #{$bcgov-color-menu-active};
  --mobile-submenu-color: #{$bcgov-white};
  --mobile-submenu-color-hover: #{$bcgov-white};
  --mobile-submenu-color-active: #{$bcgov-white};
}
.some-class bcgov-menu {
  --mobile-background: blue;
}
```
<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                                                            | Type      | Default                                                                                                                                     |
| -------------- | -------------- | ---------------------------------------------------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| `active`       | `active`       |                                                                        | `boolean` | `false`                                                                                                                                     |
| `alignment`    | `alignment`    | Alignment of menu                                                      | `string`  | `"left"`                                                                                                                                    |
| `breakpoint`   | `breakpoint`   | A number that represents mobile menu breakpoint in px;                 | `number`  | `0`                                                                                                                                         |
| `hamburger`    | `hamburger`    | Automatically adds hamburger.                                          | `boolean` | `true`                                                                                                                                      |
| `href`         | `href`         | Link for menu                                                          | `string`  | `undefined`                                                                                                                                 |
| `instructions` | `instructions` | Aria Instructions                                                      | `string`  | ``Use arrow keys to navigate between menuitems,   spacebar to expand submenus, escape key to close submenus, enter to activate menuitems.`` |
| `menuId`       | `menu-id`      | Menu id used for instructions TODO: this might need more consideration | `string`  | `"menu"`                                                                                                                                    |
| `name`         | `name`         | Label for submenu                                                      | `string`  | `undefined`                                                                                                                                 |
| `primary`      | `primary`      |                                                                        | `string`  | `undefined`                                                                                                                                 |
| `sidebar`      | `sidebar`      |                                                                        | `string`  | `undefined`                                                                                                                                 |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
