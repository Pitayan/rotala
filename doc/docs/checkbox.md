---
title: Checkbox
date: 2020-03-22
link: /docs/checkbox/
slug: checkbox
section: Elements
---

## trim.css
2 features:
- default browser appearance
- disabled appearance

#### default
<form class="trim-check-group">
  <label class="trim-checkbox">
    <input type="checkbox" value="1" name="check_0" checked />
    Check 1
  </label>
  <label class="trim-checkbox">
    <input type="checkbox" value="2" name="check_0" />
    Check 2
  </label>
</form>

```html {}
<label class="trim-check-group">
  <input type="checkbox" value="1" name="check_0" checked />
  Check 1
</label>
<label class="trim-check-group">
  <input type="checkbox" value="2" name="check_0" />
  Check 2
</label>
```

#### disabled
<form class="trim-check-group">
  <label class="trim-checkbox">
    <input type="checkbox" value="1" name="check_0" checked disabled />
    Check 1
  </label>
  <label class="trim-checkbox">
    <input type="checkbox" value="2" name="check_0" disabled />
    Check 2
  </label>
</form>

```html {}
<form class="check-group">
  <label class="checkbox">
    <input type="checkbox" value="1" name="check_0" checked disabled />
    Check 1
  </label>
  <label class="checkbox">
    <input type="checkbox" value="2" name="check_0" disabled />
    Check 2
  </label>
</form>
```

## theme.css
3 extra feature:
- 1 variant theme
- variants disabled appearance

#### variant
<form>
  <label class="checkbox">
    <input type="checkbox" value="1" name="check_0" hidden checked />
    <i class="checkbox-icon"></i>
    Check 1
  </label>
  <label class="checkbox">
    <input type="checkbox" value="2" hidden name="check_0" />
    <i class="checkbox-icon"></i>
    Check 2
  </label>
</form>

#### variant disabled
<form>
  <label class="checkbox disabled">
    <input type="checkbox" value="1" name="check_0" hidden checked disabled />
    <i class="checkbox-icon"></i>
    Check 1
  </label>
  <label class="checkbox disabled">
    <input type="checkbox" value="2" name="check_0" hidden disabled />
    <i class="checkbox-icon"></i>
    Check 2
  </label>
</form>