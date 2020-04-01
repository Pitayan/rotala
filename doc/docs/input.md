---
title: Input
date: 2020-03-20
link: /docs/input/
slug: input
section: Elements
---
Input provides common elements `input`&nbsp;`textarea`

## trim.css
2 features:
- basic simple input with no border
- disabled appearance

#### default
<input class="trim-input" type="text" placeholder="a clean input" autofocus />
<textarea class="trim-input" placeholder="a clean textarea"></textarea>

```html {}
<input class="input" />
<textarea class="input"></textarea>
```
#### disabled
<input class="trim-input disabled" placeholder="disabled input" type="text" disabled />
<textarea class="trim-input disabled" placeholder="disabled textarea" disabled></textarea>

```html {}
<input class="input disabled" type="text" disabled />
<textarea class="input disabled" placeholder="disabled textarea" disabled></textarea>
```

## theme.css
4 extra features:
- 2 variants: `outline`&nbsp;`underline`
- popover label thats shows up when placehoder is gone
- caret color as `color-primary-600`
- variants disabled appearance

#### variants

<label>
  <span>outlined input</span>
  <input class="input input-outline w-64 my-4 mx-8" placeholder="outlined input" type="text" />
</label>
<br>
<label>
  <span>underlined input</span>
  <input class="input input-underline w-64 my-4 mx-8" placeholder="underlined input" type="text" />
</label>
<br>
<label class="inline-flex">
  <span class="self-center">outlined textarea</span>
  <textarea class="input input-outline w-64 my-4 mx-8" placeholder="outlined textarea" type="text"></textarea>
</label>
<br>
<label class="inline-flex">
  <span class="self-center">underlined textarea</span>
  <textarea class="input input-underline w-64 my-4 mx-8" placeholder="underlined textarea" type="text"></textarea>
</label>
<br>

```html {}
<input class="input input-outline" placeholder="outlined input" type="text" />
<input class="input input-underline" placeholder="underlined input" type="text" />
<textarea class="input input-outline" placeholder="outlined textarea" type="text"></textarea>
<textarea class="input input-underline" placeholder="underlined textarea" type="text"></textarea>
```

#### popover label
<div class="input-group mx-2 my-8">
  <input class="input input-outline w-64" placeholder="try input something here" type="text" />
  <label class="input-label">your name</label>
</div>
<div class="input-group mx-2 my-8">
  <textarea class="input input-outline w-64" placeholder="try input something here" type="text"></textarea>
  <label class="input-label">your name</label>
</div>

```html {}
<!-- input -->
<div class="input-group">
  <label class="input-label"></label>
  <input class="input input-outline" placeholder="outlined input" type="text" />
</div>

<!-- textarea -->
<div class="input-group">
  <label class="input-label"></label>
  <textarea class="input input-outline" placeholder="outlined textarea" type="text"></textarea>
</div>
```

#### variant disabled
<label>
  <span>outlined input</span>
  <input class="input input-outline disabled w-64 my-4 mx-8" placeholder="outlined input" type="text" disabled />
</label>
<br>
<label>
  <span>underlined input</span>
  <input class="input input-underline disabled w-64 my-4 mx-8" placeholder="underlined input" type="text" disabled />
</label>
<br>
<label class="inline-flex">
  <span class="self-center">outlined textarea</span>
  <textarea class="input input-outline disabled w-64 my-4 mx-8" placeholder="outlined textarea" type="text" disabled></textarea>
</label>
<br>
<label class="inline-flex">
  <span class="self-center">underlined textarea</span>
  <textarea class="input input-underline disabled w-64 my-4 mx-8" placeholder="underlined textarea" type="text" disabled></textarea>
</label>

```html {}
<input class="input input-outline disabled" placeholder="outlined input" type="text" disabled />
<input class="input input-underline disabled" placeholder="underlined input" type="text" disabled />
<textarea class="input input-outline disabled" placeholder="outlined textarea" type="text" disabled></textarea>
<textarea class="input input-underline disabled" placeholder="underlined textarea" type="text" disabled></textarea>
```

