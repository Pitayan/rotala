---
title: Radio
link: /docs/radio/
slug: radio
section: Components
---

#### Features
<table class="ro-table-group ro-table-group-outline">
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="align-baseline">
    <tr>
      <td>.radio-group</td>
      <td>
        The radio group container component
      </td>
    </tr>
    <tr>
      <td>.radio</td>
      <td>
        The radio container component
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>

#### default
The appearance of the radio varies among browsers

<form class="radio-group">
  <label class="radio">
    <input type="radio" value="1" name="check_0" checked />
    Check 1
  </label>
  <label class="radio">
    <input type="radio" value="2" name="check_0" />
    Check 2
  </label>
</form>
<br>
<br>

```html {}
<form class="radio-group">
  <label class="radio">
    <input type="radio" value="1" name="check_0" checked />
    Check 1
  </label>
  <label class="radio">
    <input type="radio" value="2" name="check_0" />
    Check 2
  </label>
</form>
```


#### disabled
<form class="radio-group">
  <label class="radio disabled">
    <input type="radio" value="1" name="check_0" checked disabled />
    Check 1
  </label>
  <label class="radio disabled">
    <input type="radio" value="2" name="check_0" disabled />
    Check 2
  </label>
</form>
<br>
<br>

```html {}
<form class="radio-group">
  <label class="radio disabled">
    <input type="radio" value="1" name="check_0" checked disabled />
    Check 1
  </label>
  <label class="radio disabled">
    <input type="radio" value="2" name="check_0" disabled />
    Check 2
  </label>
</form>
```
