---
title: Extend Class
filepath: gridsome.server.js
order: 2
---

Extend the target component to keep your html template clean and readible

```scss
@import "rotala";
```

```css
.input {
  @apply px-2;
  @apply bg-gray-200;
  @apply rounded;
  @apply border border-solid border-gray-300;
  @apply transition-colors;
  @apply duration-150;

  &:focus {
    @apply bg-white;
  }
}
```

```html {}
<input class="input" placeholder="type something here" />
```

<input class="input px-2 rounded border border-solid border-gray-300 bg-gray-200 transition-colors duration-150 focus:bg-white" placeholder="type something here" />
