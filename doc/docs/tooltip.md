---
title: Tooltip
date: 2020-03-29
link: /docs/tooltip/
slug: tooltip
section: Components
---

Popup text hint

## trim.css
1 feature:
- simple appearance
- 8 tooltip positions
<br>
<br>

<div class="flex justify-between my-6">
  <span class="trim-tooltip trim-tooltip-top-right" data-tooltip="This is a top-right tooltip!">
    <button class="button">top right</button>
  </span>
  <span class="trim-tooltip trim-tooltip-top" data-tooltip="This is a top tooltip!">
    <button class="button">top</button>
  </span>
  <span class="trim-tooltip trim-tooltip-top-left" data-tooltip="This is a top-left tooltip!">
    <button class="button">top left</button>
  </span>
</div>
<div class="flex justify-between my-6">
  <span class="trim-tooltip trim-tooltip-right" data-tooltip="This is a left tooltip!">
    <button class="button">left</button>
  </span>
  <span class="trim-tooltip trim-tooltip-left" data-tooltip="This is a right tooltip!">
    <button class="button">right</button>
  </span>
</div>
<div class="flex justify-between my-6">
  <span class="trim-tooltip trim-tooltip-bottom-right" data-tooltip="This is a bottom-right tooltip!">
    <button class="button">bottom right</button>
  </span>
  <span class="trim-tooltip trim-tooltip-bottom" data-tooltip="This is a bottom tooltip!">
    <button class="button">bottom</button>
  </span>
  <span class="trim-tooltip trim-tooltip-bottom-left" data-tooltip="This is a bottom-left tooltip!">
    <button class="button">bottom left</button>
  </span>
</div>

```html {}
<span class="tooltip tooltip-top-right" data-tooltip="This is a top-right tooltip!">
  <button class="button">top right</button>
</span>
<span class="tooltip tooltip-top" data-tooltip="This is a top tooltip!">
  <button class="button">top</button>
</span>
<span class="tooltip tooltip-top-left" data-tooltip="This is a top-left tooltip!">
  <button class="button">top left</button>
</span>
```


## theme.css
2 extra features:
- appear transition effect
- dark background
<br>
<br>

<span class="tooltip tooltip-top-right my-6" data-tooltip="This is a top tooltip!">
  <button class="button">hover me</button>
</span>
<br>
<br>

```html {}
<span class="tooltip tooltip-top" data-tooltip="This is a top tooltip!">
  <button class="button">tooltip</button>
</span>
```