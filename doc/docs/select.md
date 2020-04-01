---
title: Select
date: 2020-03-21
link: /docs/select/
slug: select
section: Elements
---
Select input fields

## trim.css
2 features:
- basic simple appearance with no border
- disabled appearance

#### default

<label class="trim-select-group">
  <select class="trim-select">
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</label>

<label class="trim-select-group">
  <select class="trim-select" multiple>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</label>

```html {}
<!-- single -->
<label class="select-group">
  <select class="select">
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
</label>

<!-- multiple -->
<label class="select-group">
  <select class="select" multiple>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
</label>
```

#### disabled
<label class="trim-select-group">
  <select class="trim-select disabled" disabled>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</label>
<br>
<br>
<label class="trim-select-group">
  <select class="trim-select disabled" multiple disabled>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</label>

```html {}
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
```

## theme.css
2 extra features:
- 2 variants: `outline`&nbsp;`underline`
- variant disabled appearance

#### variants
<label class="select-group">
  <select class="select select-outline w-64 mx-2 my-8">
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</label>
<label class="select-group">
  <select class="select select-underline w-64 mx-2 my-8">
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</label>
<br>
<label class="select-group">
  <select class="select select-outline w-64  mx-2 my-8" multiple>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</label>
<label class="select-group">
  <select class="select select-underline w-64  mx-2 my-8" multiple>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</label>

```html {}
<label class="select-group">
  <select class="select select-outline">
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
</label>

<label class="select-group">
  <select class="select select-underline" multiple>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
</label>
```

#### variant disabled

<label class="select-group">
  <select class="select select-outline disabled w-64 mx-2 my-8" disabled>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</label>
<label class="select-group">
  <select class="select select-underline disabled w-64 mx-2 my-8" disabled>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</label>
<br>
<label class="select-group">
  <select class="select select-outline disabled w-64  mx-2 my-8" multiple disabled>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</label>
<label class="select-group">
  <select class="select select-underline disabled w-64  mx-2 my-8" multiple disabled>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
  </select>
</label>

```html {}
<label class="select-group">
  <select class="select select-outline disabled" disabled>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
</label>

<label class="select-group">
  <select class="select select-underline disabled" multiple disabled>
    <option disabled>Choose one</option>
    <option value="1">1</option>
    <option value="2">2</option>
  </select>
</label>
```