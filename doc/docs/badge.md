---
title: Badge
date: 2020-03-23
link: /docs/badge/
slug: badge
section: Components
---
Information notice indicator

## trim.css
2 features:
- notification dot
- numbered notification dot
- avatar badge

#### default
<span class="badge m-2">default badge</span>
<button class="badge button button-outline m-2">button badge</button>


```html {}
<span class="badge">default badge</span>
<button class="button button-outline badge">button badge</button>

```

#### numbered
<span class="badge m-2" data-badge="100">number badge</span>
<button class="button button-outline badge m-2" data-badge="100">button badge</button>

```html {}
<span class="badge" data-badge="100">number badge</span>
<button class="button button-outline badge" data-badge="100">button badge</button>
```

#### avatar badge
<figure class="avatar m-2 bg-gray-400 text-gray-100 text-3xl badge" data-initial="AB" data-badge="10"></figure>
<figure class="avatar m-2 avatar-rounded bg-gray-400 text-gray-100 text-3xl badge" data-initial="AB" data-badge="10"></figure>
<br>
<figure class="avatar badge m-2" data-badge="10">
  <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded badge m-2" data-badge="20">
  <img src="/avatar-2.svg" style="background: turquoise;" alt="Avatar">
</figure>