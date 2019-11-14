---
title: Beta Status
description: Beta status indicator
status: Draft
author: dlevine
---

![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
# Beta
The beta status indicator tells users that the product is still being worked on.
Creates beta.  Defaults with aria-label="This application is currently in Beta Phase"

## Use This For:
* Indicating your service is still being worked on and things may change.

## Don't Use This when:
* Your service is live and is no longer being actively worked on.

## Rationale
* The beta text has no border so users don't confuse the status for a button
* The text is visually distinct from the service name

Discuss this design on the [Beta Status Github Issue](https://github.com/bcgov/design-system/issues/78)

## Behaviour
1. Additional research is being done for users to interact or understand the meaning of Beta.

## Accessibility
This component has been built according to [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards and all government services should strive to meet this level.  This component successfully includes the following accessibility features:

### Screen readers
(coming soon)

### Colour Contrast
* Gold text exceeds a 7:1 [contrast ratio](https://webaim.org/articles/contrast/) on the header blue background

## Example

```html
Sample Text <bcgov-beta>This is my beta message</bcgov-beta>
```
## Component

Sample Text <bcgov-beta>This is my beta message</bcgov-beta>

<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type     | Default                                         |
| --------- | --------- | ----------- | -------- | ----------------------------------------------- |
| `content` | `content` |             | `string` | `"This Application is currently in Beta Phase"` |
| `label`   | `label`   |             | `string` | `"Beta"`                                        |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
