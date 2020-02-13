---
title: Search
description: search
status: draft
author: sturple
---

# Search.
Search form.

## Example 1 (with button)
<div >
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
<div >
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
<!-- Auto Generated Below -->


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
