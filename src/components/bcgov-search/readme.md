---
title: Search
description: search
status: draft
author: sturple
---

# Search.
Search form.

## Example 1 (with button)
<div style="position: relative;">
<bcgov-button button-style="search" target="search-navigation-example">Search</bcgov-button>
<bcgov-search id="search-navigation-example">
  <form>
    <input type="search" placeholder="Search" />
    <bcgov-button button-style="search-inline">Search</bcgov-button>
  </form>
</bcgov-search>
</div>

### Source
```html
<div >
<bcgov-button button-style="search" target="search-navigation-example">Search</bcgov-button>
<bcgov-search id="search-navigation-example">
  <form>
    <input type="search" placeholder="Search" />
    <bcgov-button button-style="search-inline">Search</bcgov-button>
  </form>
</bcgov-search>
</div>
```

### Output
<div class="code">
<bcgov-button button-style="search" target="search-navigation-example">Search</bcgov-button>
<bcgov-search id="search-navigation-example">
  <form>
    <input type="search" placeholder="Search" />
    <bcgov-button button-style="search-inline">Search</bcgov-button>
  </form>
</bcgov-search>
</div>

## Example 2 (no button)
<div style="position: relative;">
<bcgov-search id="search-navigation-example-no-button">
  <form>
    <input type="search" placeholder="Search" />
    <bcgov-button button-style="search-inline">Search</bcgov-button>
  </form>
</bcgov-search>
</div>

### Source
```html
<div >
<bcgov-search id="search-navigation-example-no-button">
  <form>
    <input type="search" placeholder="Search" />
    <bcgov-button button-style="search-inline">Search</bcgov-button>
  </form>
</bcgov-search>
</div>
```

### Output
<div class="code">
<bcgov-search id="search-navigation-example-no-button">
  <form>
    <input type="search" placeholder="Search" />
    <bcgov-button button-style="search-inline">Search</bcgov-button>
  </form>
</bcgov-search>
</div>


## Example 3 Extra fields
<div style="position: relative;">
  <bcgov-search breakpoint="1200" id="search-navigation-example-no-button">
    <form>
      <input type="search" placeholder="Search" />
      <select id="select-1" name="select-id" >
        <option value="" disabled selected >Select Option</option>
        <option>Select 1</option>
        <option>Select 2</option>
      </select>
      <bcgov-button button-style="search-inline">Search</bcgov-button>
    </form>
  </bcgov-search>
</div>

### Source
```html
<div >
  <bcgov-search breakpoint="1200" id="search-navigation-example-no-button">
    <form>
      <input type="search" placeholder="Search" />
      <select id="select-1" name="select-id" >
        <option value="" disabled selected >Select Option</option>
        <option>Select 1</option>
        <option>Select 2</option>
      </select>
      <bcgov-button button-style="search-inline">Search</bcgov-button>
    </form>
  </bcgov-search>
</div>
```

### Output
<div class="code">
  <bcgov-search breakpoint="1200" id="search-navigation-example-no-button">
    <form>
      <input type="search" placeholder="Search" />
      <select id="select-1" name="select-id" >
        <option value="" disabled selected >Select Option</option>
        <option>Select 1</option>
        <option>Select 2</option>
      </select>
      <bcgov-button button-style="search-inline">Search</bcgov-button>
    </form>
  </bcgov-search>
</div>

<!-- Auto Generated Below -->


## Properties

| Property     | Attribute    | Description                                              | Type     | Default |
| ------------ | ------------ | -------------------------------------------------------- | -------- | ------- |
| `breakpoint` | `breakpoint` | A number that represents mobile search breakpoint in px; | `number` | `0`     |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
