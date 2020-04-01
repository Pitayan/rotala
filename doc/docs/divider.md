---
title: Divider
date: 2020-03-24
link: /docs/divider/
slug: divider
section: Elements
---

A divider line to seperate contents

## trim.css
1 feature:
- basic appearance

#### default
<div class="trim-hr"></div>
<br>

```html {}
<div class="hr"></div>
```

## theme.css
2 feature:
- vertical
- divider with text

#### vertical
<div class="flex h-32">
  <button class="button">Button left</button>
  <div class="hr hr-vertical"></div>
  <button class="button">Button right</button>
</div>

```html {}
<div class="flex">
  <button class="button">Button left</button>
  <div class="hr hr-vertical"></div>
  <button class="button">Button right</button>
</div>
```

#### with text
<div class="hr text-left" data-content="text left"></div>
<div class="hr" data-content="text center"></div>
<div class="hr text-right" data-content="text right"></div>

```html {}
<div class="hr text-left" data-content="text left"></div>
<div class="hr" data-content="text center"></div>
<div class="hr text-right" data-content="text right"></div>
```

<div class="inline-flex h-32">
  <button class="button">Button left</button>
  <div class="hr hr-vertical" data-content="OR"></div>
  <button class="button">Button right</button>
</div>

```html {}
<div class="flex">
  <button class="button">Button left</button>
  <div class="hr hr-vertical" data-content="OR"></div>
  <button class="button">Button right</button>
</div>
```