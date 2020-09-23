---
description: Buttons allow users to carry out an important action.
title: Buttons
status: draft
author: orinevares
---

# Buttons

## Primary Button
Primary buttons allow users to carry out an important action on your service, such as Download or Submit.


### Use This For
* The most important actions you want users to take on your site.

### Don't Use This For
*	Supporting actions on your page such as 'Cancel', 'Delete', or supporting information

### Design Guidance
*	Only use one primary button per page
*	Use for actions that go to the next step (for example, “Submit”)
*	Button labels should be as short as possible with action words that clearly explain what will happen when the button is clicked (eg. Download, sign up)
* Do not use images for buttons

### Rationale
The rounded edges on the button help differentiate it from other layout items on a page. The underline on hover ensures colour is not the only visual means of conveying information about the button being clickable. The colour helps the button standout amongst other elements on a page and convey its importance to the user.

### Behaviour
1. Button label should appear underlined on hover
2. Button background colour should revert to #003366 when in the active state

#### Screenreaders
As read using ChromeVox

* *"Submit, button."*

## Accessibility
In addition to [fundamental accessibility]() requirements, this component meets or exceeds the [WCAG 2.0 AA](https://www.w3.org/TR/WCAG20/) standards by incorporating the following criteria.




## Example Primary Button
<div>
    <bcgov-button  >Primary Button </bcgov-button>
    <bcgov-button  link="https://gov.bc.ca" >Primary Button Link</bcgov-button>
    <bcgov-button  active link="https://gov.bc.ca" >Primary Button Active</bcgov-button>
    <bcgov-button  disabled link="https://gov.bc.ca" >Primary Button Disabled</bcgov-button>
</div>

### Source

```html
<div>
    <bcgov-button  >Primary Button </bcgov-button>
    <bcgov-button  link="https://gov.bc.ca" >Primary Button Link</bcgov-button>
    <bcgov-button  active link="https://gov.bc.ca" >Primary Button Active</bcgov-button>
    <bcgov-button  disabled link="https://gov.bc.ca" >Primary Button Disabled</bcgov-button>
</div>
```

### Output
<div class="code">
    <bcgov-button  >Primary Button </bcgov-button>
    <bcgov-button  link="https://gov.bc.ca" >Primary Button Link</bcgov-button>
    <bcgov-button  active link="https://gov.bc.ca" >Primary Button Active</bcgov-button>
    <bcgov-button  disabled link="https://gov.bc.ca" >Primary Button Disabled</bcgov-button>
</div>

## Example Secondary Button
<div>
    <bcgov-button button-style="secondary" >Secondary Button</bcgov-button> 
    <bcgov-button link="https://gov.bc.ca" button-style="secondary" >Secondary Button Link</bcgov-button>
    <bcgov-button active button-style="secondary" >Secondary Button Active</bcgov-button>
    <bcgov-button disabled button-style="secondary" >Secondary Button Disabled</bcgov-button>
</div>

### Source

```html
<div>
    <bcgov-button button-style="secondary" >Secondary Button</bcgov-button>
    <bcgov-button link="https://gov.bc.ca" button-style="secondary" >Secondary Button Link</bcgov-button>
    <bcgov-button active button-style="secondary" >Secondary Button Active</bcgov-button>
    <bcgov-button disabled button-style="secondary" >Secondary Button Disabled</bcgov-button>
</div>
```

### Output
<div class="code">
    <bcgov-button button-style="secondary" >Secondary Button</bcgov-button>
    <bcgov-button link="https://gov.bc.ca" button-style="secondary" >Secondary Button Link</bcgov-button>
    <bcgov-button active button-style="secondary" >Secondary Button Active</bcgov-button>
    <bcgov-button disabled button-style="secondary" >Secondary Button Disabled</bcgov-button>
</div>


## Example Dark Button
<div>
    <span style="background-color: #036; padding: 2px 10px; display:inline-block">
        <bcgov-button button-style="dark" >Dark Button</bcgov-button>
        <bcgov-button link="https://gov.bc.ca"  button-style="dark" >Dark Button Link</bcgov-button>
        <bcgov-button active button-style="dark" >Dark Button Active</bcgov-button>
        <bcgov-button disabled button-style="dark" >Dark Button Disabled</bcgov-button>
    </span>
</div>

### Source

```html
    <span style="background-color: #036; padding: 2px 10px; display:inline-block">
        <bcgov-button button-style="dark" >Dark Button</bcgov-button>
        <bcgov-button link="https://gov.bc.ca"  button-style="dark" >Dark Button Link</bcgov-button>
        <bcgov-button active button-style="dark" >Dark Button Active</bcgov-button>
        <bcgov-button disabled button-style="dark" >Dark Button Disabled</bcgov-button>
    </span>
```

### Output
<div class="code">
    <span style="background-color: #036; padding: 2px 10px; display:inline-block">
        <bcgov-button button-style="dark" >Dark Button</bcgov-button>
        <bcgov-button link="https://gov.bc.ca"  button-style="dark" >Dark Button Link</bcgov-button>
        <bcgov-button active button-style="dark" >Dark Button Active</bcgov-button>
        <bcgov-button disabled button-style="dark" >Dark Button Disabled</bcgov-button>
    </span>
</div>

## Example Hamburger Button
<div >
    <span style="background-color: #036;"><bcgov-button button-style="hamburger" >Menu</bcgov-button></style>
</div>

### Source

```html
<div>
    <bcgov-button button-style="hamburger" >Menu</bcgov-button>
</div>
```

### Output
<div class="code">
    <bcgov-button button-style="hamburger" >Menu</bcgov-button>
</div>

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute       | Description                               | Type                                                                               | Default                     |
| -------------- | --------------- | ----------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------- |
| `buttonStyle`  | `button-style`  | Style of button                           | `"dark" \| "hamburger" \| "primary" \| "search" \| "search-inline" \| "secondary"` | `"primary"`                 |
| `dataTarget`   | `data-target`   | Target, only used on hamburger and search | `string`                                                                           | `null`                      |
| `eventHandler` | --              | Add a callback to handle events           | `Function`                                                                         | `this.eventHandlerFunction` |
| `link`         | `link`          | The action of the button.                 | `string`                                                                           | `"button"`                  |
| `target`       | `target`        | A tag target                              | `"_blank" \| "_parent" \| "_self" \| "_top"`                                       | `null`                      |
| `targetHidden` | `target-hidden` | default state of button if applicable     | `string`                                                                           | `"false"`                   |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
