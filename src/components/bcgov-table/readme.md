---
description: Responsive table-like list
title: Table
---
`bcgov-table` and `bcgov-table-row` provide a responsive table-like layout using list elements. Below the breakpoint, rows stack and can show their column labels.

Use `bcgov-table-row` for each header and data row. It is required for the responsive row layout and mobile column labels; `bcgov-table` alone only provides the list wrapper and breakpoint class.

## Example

```html
<bcgov-table show-column-labels primary-column="2">
  <bcgov-table-row header>
    <div>Name</div>
    <div>Status</div>
  </bcgov-table-row>
  <bcgov-table-row>
    <div>Service A</div>
    <div>Available</div>
  </bcgov-table-row>
</bcgov-table>
```

<!-- Auto Generated Below -->


## Properties

| Property           | Attribute            | Description                                    | Type      | Default     |
| ------------------ | -------------------- | ---------------------------------------------- | --------- | ----------- |
| `breakpoint`       | `breakpoint`         | Breakpoint at which the table turns into rows. | `number`  | `960`       |
| `primaryColumn`    | `primary-column`     | The primary column.                            | `number`  | `undefined` |
| `showColumnLabels` | `show-column-labels` | Shows header columns when not in table.        | `boolean` | `undefined` |


## Slots

| Slot | Description      |
| ---- | ---------------- |
|      | The default slot |


----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
