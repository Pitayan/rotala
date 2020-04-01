---
title: Radio
date: 2020-03-22
link: /docs/radio/
slug: radio
section: Elements
---

## trim.css
2 features:
- default browser appearance
- disabled appearance

#### default
<form class="trim-radio-group">
  <label class="trim-radio">
    <input type="radio" value="1" name="check_0" checked />
    Radio 1
  </label>
  <label class="trim-radio">
    <input type="radio" value="2" name="check_0" />
    Radio 2
  </label>
</form>

```html {}
<label class="trim-radio-group">
  <input type="radio" value="1" name="check_0" checked />
  Radio 1
</label>
<label class="trim-radio-group">
  <input type="radio" value="2" name="check_0" />
  Radio 2
</label>
```

#### disabled
<form class="trim-radio-group">
  <label class="trim-radio">
    <input type="radio" value="1" name="check_0" checked disabled />
    Radio 1
  </label>
  <label class="trim-radio">
    <input type="radio" value="2" name="check_0" disabled />
    Radio 2
  </label>
</form>

```html {}
<form class="radio-group">
  <label class="radio">
    <input type="radio" value="1" name="check_0" checked disabled />
    Radio 1
  </label>
  <label class="radio">
    <input type="radio" value="2" name="check_0" disabled />
    Radio 2
  </label>
</form>
```

## theme.css
3 extra feature:
- 1 variant theme
- variants disabled appearance

#### variant
<form>
  <label class="radio">
    <input type="radio" value="1" name="check_0" hidden checked />
    <i class="radio-icon"></i>
    Radio 1
  </label>
  <label class="radio">
    <input type="radio" value="2" hidden name="check_0" />
    <i class="radio-icon"></i>
    Radio 2
  </label>
</form>

#### variant disabled
<form>
  <label class="radio disabled">
    <input type="radio" value="1" name="check_0" hidden checked disabled />
    <i class="radio-icon"></i>
    Radio 1
  </label>
  <label class="radio disabled">
    <input type="radio" value="2" name="check_0" hidden disabled />
    <i class="radio-icon"></i>
    Radio 2
  </label>
</form>