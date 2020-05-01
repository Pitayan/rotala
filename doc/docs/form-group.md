---
title: Form Group
link: /docs/form-group/
slug: form-group
section: Components
---

A common form component for group related elements
<br>
<br>


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
      <td>.form-group</td>
      <td>
        The form component container
      </td>
    </tr>
    <tr>
      <td>.form-group-fieldset</td>
      <td>
        The group component for its items within
      </td>
    </tr>
    <tr>
      <td>.form-group-legend</td>
      <td>
        The fieldset caption
      </td>
    </tr>
    <tr>
      <td>.form-group-label</td>
      <td>
        The from group text label for form item
      </td>
    </tr>
    <tr>
      <td>.form-group-item</td>
      <td>
        The form group element component
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


## Features
#### default
<form class="form-group flex">
  <fieldset class="form-group-fieldset mx-auto w-64">
    <legend class="form-group-legend font-bold text-xl">Please login:</legend>
    <label class="form-group-label" for="password">Password:</label>
    <input class="form-group-item input border-b border-solid border-gray-500" type="text" id="paddword" name="password">
    <label class="form-group-label" for="email">Email:</label>
    <input class="form-group-item input border-b border-solid border-gray-500" type="email" id="email" name="email">
    <br>
    <br>
    <div class="flex items-center justify-between">
      <input class="button" type="submit" value="Submit">
      <a href="#" class="link underline">Forgot Password?</a>
    </div>
  </fieldset>
</form>
<br>
<br>


```html {}
<form class="form-group w-64">
  <fieldset class="form-group-fieldset">
    <legend class="form-group-legend font-bold text-xl">Please login:</legend>
    <label class="form-group-label" for="password">Password:</label>
    <input class="form-group-item input border-b border-solid border-gray-500" type="text" id="paddword" name="password">
    <label class="form-group-label" for="email">Email:</label>
    <input class="form-group-item input border-b border-solid border-gray-500" type="email" id="email" name="email">
    <br>
    <br>
    <div class="flex items-center justify-between">
      <input class="button" type="submit" value="Submit">
      <a href="#" class="link underline">Forgot Password?</a>
    </div>
  </fieldset>
</form>
```