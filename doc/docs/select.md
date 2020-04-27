---
title: Select
link: /docs/select/
slug: select
section: Components
---

Select input component
<br>
<br>

## Features
<table class="ro-table-group ro-table-group-outline">
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="align-baseline">
    <tr>
      <td>.select</td>
      <td>
        The select container component
      </td>
    </tr>
    <tr>
      <td>
        <p>.disabled</p>
        <p>[disabled]</p>
      </td>
      <td>
        The disabled select style
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


#### default
<label class="select-group">
  <select class="select">
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</label>
<br>
<br>
<label class="select-group">
  <select class="select" multiple>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</label>

```html {}
<!-- single select -->
<label class="select-group">
  <select class="select">
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</label>

<!-- multiple select -->
<label class="select-group">
  <select class="select" multiple>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</label>
```

#### disabled
<label class="select-group">
  <select class="select disabled" disabled>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
</label>
<br>
<br>
<label class="select-group">
  <select class="select disabled" multiple disabled>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
</label>

```html {}
<!-- single select disabled -->
<label class="select-group">
  <select class="select disabled" disabled>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
</label>

<!-- multiple select disabled -->
<label class="select-group">
  <select class="select disabled" multiple disabled>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
</label>
```


## Templates
Some stylish examples with a bit more efforts
<br>
<br>

#### underline
<label class="select-group">
  <select class="select border-b border-solid border-gray-300 focus:border-blue-500 w-48">
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</label>
<br>
<br>

```html {}
<label class="select-group">
  <select class="select border-b border-solid border-gray-300 focus:border-blue-500 w-48">
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</label>
```

#### outline
<label class="select-group">
  <select class="select px-2 rounded border border-solid border-gray-300 focus:border-blue-500 w-48">
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</label>
<br>
<br>

```html {}
<label class="select-group">
  <select class="select px-2 rounded border border-solid border-gray-300 focus:border-blue-500 w-48">
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
  </select>
</label>
```