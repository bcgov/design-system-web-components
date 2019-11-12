![Status](https://img.shields.io/badge/Recommended-Draft-orange.svg)
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




## Example

```html
<bcgov-button  link="https://gov.bc.ca">Primary Button</bcgov-button>
<bcgov-button button-style="secondary">Secondary Button</bcgov-button>
<bcgov-button button-style="dark">Dark Button</bcgov-button>
<bcgov-button button-style="hamburger" target="main-navigation">Menu</bcgov-button>
<bcgov-button button-style="search" target="bcgov-search-id">Search</bcgov-button>
```

## Component

<bcgov-button  link="https://gov.bc.ca" >Primary Button</bcgov-button>
<bcgov-button button-style="secondary" >Secondary Button</bcgov-button>
<span style="background-color: #036; padding: 2px 10px; display:inline-block">
<bcgov-button button-style="dark" >Dark Button</bcgov-button>
</span>
<bcgov-button button-style="hamburger" >Menu</bcgov-button>
<bcgov-button button-style="search" >Search</bcgov-button>

<!-- Auto Generated Below -->


## Properties

| Property       | Attribute      | Description                               | Type                                                                               | Default                     |
| -------------- | -------------- | ----------------------------------------- | ---------------------------------------------------------------------------------- | --------------------------- |
| `active`       | `active`       | default state of button if applicable     | `string`                                                                           | `"false"`                   |
| `buttonStyle`  | `button-style` | Style of button                           | `"dark" \| "hamburger" \| "primary" \| "search" \| "search-inline" \| "secondary"` | `"primary"`                 |
| `eventHandler` | --             | Add a callback to handle events           | `Function`                                                                         | `this.eventHandlerFunction` |
| `link`         | `link`         | The action of the button.                 | `string`                                                                           | `"button"`                  |
| `target`       | `target`       | Target, only used on hamburger and search | `string`                                                                           | `null`                      |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
