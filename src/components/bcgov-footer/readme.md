---
description: Footer help users understand what the content of the page is about and provides a quick, organized way to reach the main sections of a website.
title: Footer - Basic
status: draft
author: orinevares
---

# Footer
Footers help people find what they need after scrolling to the bottom of a web page. They provide supplementary information such as copyright, contact information, social media links, and links to other pages within a website.

Creates footer.  All html tags are allowed.
Currently this doesn't do anything special, except add markup.


## Requirements:
* This footer must appear on all public-facing online B.C. Government content and services.

Footer Links:
* “Home” returns to home page of your service
* [Disclaimer](https://www2.gov.bc.ca/gov/content/home/disclaimer), [Privacy](https://www2.gov.bc.ca/gov/content/home/privacy), [Accessibility](https://www2.gov.bc.ca/gov/content/home/accessibility), and [Copyright](https://www2.gov.bc.ca/gov/content/home/copyright) links should all be to the core government statements with any addendums being vetted by ministry or central legal advisors before being released. 
* “Contact Us” provides contact details for service area or program.

## Mobile Design
* All footer links should stack on one another

## Accessibility
This component has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screenreaders
As read using ChromeVox

- *"Footer List with six (6) items."*
- *"Home. Link list item."*
- *"Disclaimer. Link list item."*
- *"Privacy. Link list item."*
- *"Accessibility. Link list item."*
- *"Copyright. Link list item."*
- *"Contact Us. Link list item."*

### Conveying Information
* Links underlined on hover to indicate they are clickable

## Example with external image
<div>
<bcgov-footer  logo>
  <bcgov-menu >
    <a href="/">Home</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/accessibility">Accessibility</a>
  </bcgov-menu>
  <img
    src="https://www2.gov.bc.ca/assets/download/6124280C12B44DA492667E23E8BC38BF"
    alt="Branding logo" />
</bcgov-footer>
</div>

### Source

```html
<bcgov-footer  logo>
  <bcgov-menu >
    <a href="/">Home</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/accessibility">Accessibility</a>
  </bcgov-menu>
  <img
    src="https://www2.gov.bc.ca/assets/download/6124280C12B44DA492667E23E8BC38BF"
    alt="Branding logo" />
</bcgov-footer>
```
### Output
<div class="code">
<bcgov-footer  logo>
  <bcgov-menu >
    <a href="/">Home</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/accessibility">Accessibility</a>
  </bcgov-menu>
  <img
    src="https://www2.gov.bc.ca/assets/download/6124280C12B44DA492667E23E8BC38BF"
    alt="Branding logo" />
</bcgov-footer>
</div>

## Example with bc logo
<div>
<bcgov-footer  logo="gov_bc_logo.svg">
  <bcgov-menu >
    <a href="/">Home</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/accessibility">Accessibility</a>
  </bcgov-menu>
</bcgov-footer>
</div>

### Source
```html
<bcgov-footer logo="gov_bc_logo.svg">
  <bcgov-menu >
    <a href="/">Home</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/accessibility">Accessibility</a>
  </bcgov-menu>
</bcgov-footer>
```

### Output
<div class="code">
<bcgov-footer  logo="gov_bc_logo.svg">
  <bcgov-menu >
    <a href="/">Home</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/accessibility">Accessibility</a>
  </bcgov-menu>
</bcgov-footer>
</div>

## Example with default
<div>
<bcgov-footer >
<div>
  <bcgov-menu >
    <a href="/">Home</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/accessibility">Accessibility</a>
  </bcgov-menu>
  </div>
</bcgov-footer>
</div>

### Source
```html
<bcgov-footer >
  <bcgov-menu >
    <a href="/">Home</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/accessibility">Accessibility</a>
  </bcgov-menu>
</bcgov-footer>
```
### Output
<div class="code">
<bcgov-footer >
  <div>
  <bcgov-menu >
    <a href="/">Home</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/disclaimer">Disclaimer</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/privacy">Privacy</a>
    <a href="https://www2.gov.bc.ca/gov/content/home/accessibility">Accessibility</a>
  </bcgov-menu>
  </div>
</bcgov-footer>
</div>
<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description                                                                        | Type                                                                           | Default                   |
| -------- | --------- | ---------------------------------------------------------------------------------- | ------------------------------------------------------------------------------ | ------------------------- |
| `logo`   | `logo`    | Alignment of menu Built in Logos, other wise just add image, before or after menu. | `"" \| "gov_bc_logo.svg" \| "gov_bc_logo_grey.jpg" \| "gov_bc_logo_white.png"` | `"gov_bc_logo_white.png"` |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
