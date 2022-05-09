### 1.3.3 May 9, 2022
* Fix dependabot alerts DESCW-274.

### 1.3.2 November 4, 2021
* Changed z-index scale of elements to fall below wp-admin bar
    * `#wpadminbar` (99999) is treated as ceiling
    * `*:focus` (9999) is treated as floor
    * `.bcgov-search` remains at floor (9999)
    * `.bcgov-header` and `.bcgov-menu.primary` are middle (11000)
    * `.bcgov-menu ul` sits just above the middle (11100)

### 1.3.1 October 25, 2021
* Clean up of dependencies.
    * Replaced node-sass with sass library
    * Upgraded webpack server to V4
    * Upgraded webpack-cli V4
    * Upgraded webpack V5
    * Upgraded webpack and other plugins and utilities.
* Bumping version
* Updated css to use math.div


### 1.3.0 February 10, 2021
* updating stencil build dependencies.
* Clean up of dependencies.
* Bumping version

### 1.2.0 January 30, 2021
* Making some of the styles for forms simpler, removing bcgov-forms and just using .bcgov-forms.
* updating form input accessibility.

### 1.1.4 December 15, 2020
* Accessibility updates.
* Updated Readme.md
* style updates.


### 1.1.3 September 23, 2020
* Menu updates
    * Adding option for hoverover or click menu
    * Adding option for hover delay time to remove.
* Style updates, removing bcgov design system colours from components.
    * add seperate css sheet for bcgov design system colors
    * removing colours from header, footer, buttons.
* Adding form styles
* Updating search styles.


### 1.1.2 September 16, 2020
* css updates for ie fixes
* css updates for menu.

### 1.1.1 September 11, 2020
* Added body class bcgov-menu-primary-is-desktop to notify other components not with in menu.
* Add close on mobile menu
* fix menu arrows.

### 1.1.0 August 31, 2020
* Changed css for menu
* Added additional css variables, to make overrides easier.

### 1.0.3 July 7, 2020
* removed forms css from production

### 1.0.2 May 2020

### 1.0.1  February 25, 2020
* Fixed bcgov-button target to data-target (now allows link buttons to have target="_blank").
* Added inital Jenkins file.
* Revision of tests, and adding a test for the util.js functions.

### 1.0.0 February 14, 2020
* Initial Release 