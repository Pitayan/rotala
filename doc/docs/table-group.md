---
title: Table Group
link: /docs/table-group/
slug: table-group
section: Components
---

A data table component

## Properties
<table class="ro-table-group ro-table-group-outline">
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="align-baseline">
    <tr>
      <td>.table-group</td>
      <td>
        The tab container component
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


## Features
#### default
<table class="table-group">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gift Box</td>
      <td>Alpha Inc.</td>
      <td>$1.5</td>
    </tr>
    <tr>
      <td>Table Sheet</td>
      <td>Beta Manufacture</td>
      <td>$9</td>
    </tr>
    <tr>
      <td>Notebook</td>
      <td>Cheer co.</td>
      <td>$3</td>
    </tr>
  </tbody>
</table>
<br>
<br>

```html {}
<table class="table-group">
  <thead>
    <tr>
      <th>Product Name</th>
      <th>Manufacturer</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Gift Box</td>
      <td>Alpha Inc.</td>
      <td>$1.5</td>
    </tr>
    <tr>
      <td>Table Sheet</td>
      <td>Beta Manufacture</td>
      <td>$9</td>
    </tr>
    <tr>
      <td>Notebook</td>
      <td>Cheer co.</td>
      <td>$3</td>
    </tr>
  </tbody>
</table>
```


#### outline
Style with horizontal lines

<table class="table-group">
  <thead>
    <tr>
      <th class="border-b-2 border-solid border-gray-300">Product Name</th>
      <th class="border-b-2 border-solid border-gray-300">Manufacturer</th>
      <th class="border-b-2 border-solid border-gray-300">Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border-b border-solid border-gray-300">Gift Box</td>
      <td class="border-b border-solid border-gray-300">Alpha Inc.</td>
      <td class="border-b border-solid border-gray-300">$1.5</td>
    </tr>
    <tr>
      <td class="border-b border-solid border-gray-300">Table Sheet</td>
      <td class="border-b border-solid border-gray-300">Beta Manufacture</td>
      <td class="border-b border-solid border-gray-300">$9</td>
    </tr>
    <tr>
      <td class="border-b border-solid border-gray-300">Notebook</td>
      <td class="border-b border-solid border-gray-300">Cheer co.</td>
      <td class="border-b border-solid border-gray-300">$3</td>
    </tr>
  </tbody>
</table>
<br>
<br>

```css {}
.table-group {
  td,
  th {
    @apply border-b border-solid border-gray-300;
  }

  thead th {
    @apply border-b-2 border-solid border-gray-300;
  }
}
```