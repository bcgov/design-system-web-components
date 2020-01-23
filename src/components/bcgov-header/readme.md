---
description: Headers help users understand what the content of the page is about and provides a quick, organized way to reach the main sections of a website.
title: Header - Basic
status: draft
author: orinevares
---

# Header
Creates header.  
Headers help people understand what the product or service is about while providing a consistent look, feel, and functionality across government sites.

- define an image
- define headline
- define skip navigation links. 


### Download
* [BC Gov Logo](https://github.com/bcgov/design-system/tree/master/components/assets/images)

## Requirements
* This header must appear on all public-facing online B.C. Government content and services

## Don't Use This when:
* Your product or service is not owned by the Government of British Columbia

## Design Guidance:
* Align content on page with left side of logo

The text in the header should include the site title or service name. If the website is a service, a good name should:
* Use the words users (regular people) use
* Be based on analytics and user research
* Describe a task not a technology
* Not need to change when policy or technology changes
* Include verbs not nouns
* Not include government department or agency names
* Not be brand-driven or focused on marketing

Good examples include:
*	Apply for MSP
*	Get help with court fees
*	Renew your license
*	Find a career

*Adapted from the UK Government’s [Service Naming Guide](https://www.gov.uk/service-manual/design/naming-your-service)

## Rationale
This header matches the mandatory branding requirements of the BC Government. Consistent branding helps users identify who owns the service they are using. The horizontal logo is used instead of a the vertical version to use space efficiently and create a symmetrical flow from the logo to the heading.

## Behaviour

1. Clicking on B.C. government logo links the user back to the homepage of your service 

### Mobile Design
1. Logo and title shrink until mobile size
2. When in mobile view the header title drops below the vertical logo

## Accessibility
This header has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/). This component includes the following accessibility features:

### Screenreaders

* ALT text for BC Government logo reads "Go to the homepage of [current website]"

As read using ChromeVox

> *"Go to the government of british columbia website link."*

> *"Hello British Columbia heading one."*


## Example

```html
<bcgov-header >
  <img
    slot="logo"
    src="https://www2.gov.bc.ca/assets/download/6124280C12B44DA492667E23E8BC38BF"
    alt="Branding logo"
  />
  <div slot="headline" >DevHub<bcgov-beta></bcgov-beta></div>
  <a slot="hidden-link"  href="#main-navigation">Skip to navigation</a>
  <a slot="hidden-link"  href="#main-content">Skip to Contents</a>
  <a  slot="hidden-link"  href="accessibility">Skip to Accessibility Statement</a>
</bcgov-header>
```

## Component

<bcgov-header id="header-example" >
  <img  slot="logo" src="https://www2.gov.bc.ca/assets/download/6124280C12B44DA492667E23E8BC38BF" alt="Branding logo" />
  <div slot="headline">DevHub<bcgov-beta></bcgov-beta></div>
  <a slot="hidden-link"   href="#main-navigation">Skip to navigation</a>
  <a slot="hidden-link"   href="#main-content">Skip to Contents</a>
  <a slot="hidden-link"   href="accessibility">Skip to Accessibility Statement</a>
</bcgov-header>

<!-- Auto Generated Below -->


## Properties

| Property | Attribute | Description   | Type     | Default                                     |
| -------- | --------- | ------------- | -------- | ------------------------------------------- |
| `href`   | `href`    | link for logo | `string` | `"https://www2.gov.bc.ca/gov/content/home"` |
| `logo`   | `logo`    |               | `string` | `"gov_bc_logo.svg"`                         |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
