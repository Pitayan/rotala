---
title: Checkbox
link: /docs/checkbox/
slug: checkbox
section: Components
---

A toggle switch form controller
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
      <td>.check-group</td>
      <td>
        The check group container component
      </td>
    </tr>
    <tr>
      <td>.checkbox</td>
      <td>
        The checkbox container component
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


## Features
#### default
The appearance of the checkbox varies among browsers

<form class="check-group">
  <label class="checkbox">
    <input type="checkbox" value="1" name="check_0" checked />
    Check 1
  </label>
  <label class="checkbox">
    <input type="checkbox" value="2" name="check_0" />
    Check 2
  </label>
</form>
<br>
<br>

```html {}
<form class="check-group">
  <label class="checkbox">
    <input type="checkbox" value="1" name="check_0" checked />
    Check 1
  </label>
  <label class="checkbox">
    <input type="checkbox" value="2" name="check_0" />
    Check 2
  </label>
</form>
```


#### disabled
<form class="check-group">
  <label class="checkbox disabled">
    <input type="checkbox" value="1" name="check_0" checked disabled />
    Check 1
  </label>
  <label class="checkbox disabled">
    <input type="checkbox" value="2" name="check_0" disabled />
    Check 2
  </label>
</form>
<br>
<br>

```html {}
<form class="check-group">
  <label class="checkbox disabled">
    <input type="checkbox" value="1" name="check_0" checked disabled />
    Check 1
  </label>
  <label class="checkbox disabled">
    <input type="checkbox" value="2" name="check_0" disabled />
    Check 2
  </label>
</form>
```

