---
title: Badge
link: /docs/badge/
slug: badge
section: Components
---
Informative notification indicator to the corner
<br>
<br>


## Features
<table class="ro-table-group ro-table-group-outline">
  <thead>
    <tr>
      <th>Property</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="align-baseline">
    <tr>
      <td>.badge</td>
      <td>
        The badge component container
      </td>
    </tr>
    <tr>
      <td>.badge-status</td>
      <td>
        The badge indicator dot
      </td>
    </tr>
    <tr>
      <td>.badge-text</td>
      <td>
        The badge content
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


#### status
<div class="flex flex-wrap items-center">
  <span class="badge mx-4">
    badge
    <span class="badge badge-status"></span>
  </span>
  <button class="button badge mx-4 bg-gray-300">
    button
    <span class="badge badge-status"></span>
  </button>
  <figure class="avatar badge mx-4 bg-gray-300" data-initial="avatar">
    <span class="badge badge-status"></span>
  </figure>
  <figure class="avatar avatar-rounded badge mx-4 bg-gray-300">
    <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
    <span class="badge badge-status"></span>
  </figure>
</div>
<br>
<br>


```html {}
<!-- span -->
<span class="badge">
  badge
  <span class="badge badge-status"></span>
</span>

<!-- button -->
<button class="button badge">
  button
  <span class="badge badge-status"></span>
</button>

<!-- avatar initial -->
<figure class="avatar badge" data-initial="avatar">
  <span class="badge badge-status"></span>
</figure>

<!-- avatar image -->
<figure class="avatar avatar-rounded badge">
  <img src="/avatar-1.svg" alt="Avatar">
  <span class="badge badge-status"></span>
</figure>
```


#### text
Use paddings for inline or small elements to avoid overlapping.

<div class="flex flex-wrap items-center">
  <span class="badge p-1 mx-4">
    badge
    <span class="badge badge-text">10</span>
  </span>
  <button class="button badge mx-4 bg-gray-300">
    button
    <span class="badge badge-text">new</span>
  </button>
  <figure class="avatar badge mx-4 bg-gray-300" data-initial="avatar">
    <span class="badge badge-text">10000</span>
  </figure>
  <figure class="avatar avatar-rounded badge mx-4 bg-gray-300">
    <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
    <span class="badge badge-text">Hi</span>
  </figure>
</div>
<br>
<br>


```html {}
<!-- span -->
<span class="badge p-1">
  badge
  <span class="badge badge-text">10</span>
</span>

<!-- button -->
<button class="button badge">
  button
  <span class="badge badge-text">new</span>
</button>

<!-- avatar initial -->
<figure class="avatar badge" data-initial="avatar">
  <span class="badge badge-text">10000</span>
</figure>

<!-- avatar image -->
<figure class="avatar avatar-rounded badge">
  <img src="/avatar-1.svg" alt="Avatar">
  <span class="badge badge-text">Hi!</span>
</figure>
```

## Templates
Some stylish examples with a bit more efforts
<br>
<br>

#### size
Change the badge size with `height` and `width`

<div class="flex flex-wrap items-center">
  <span class="badge p-2 mx-4">
    badge
    <span class="badge badge-text bg-red-500 h-6 text-xl">10</span>
  </span>
  <button class="button badge mx-4 bg-gray-300">
    button
    <span class="badge badge-status bg-indigo-500 h-6 w-6"></span>
  </button>
</div>
<br>
<br>

```html {}
<!-- span -->
<span class="badge p-1">
  badge
  <span class="badge badge-text h-6 text-xl">10</span>
</span>

<!-- button -->
<button class="button badge">
  button
  <span class="badge badge-text bg-indigo-500 h-6 w-6">new</span>
</button>
```

#### colors
Change the badge color with `background color`

<div class="flex flex-wrap items-center">
  <span class="badge p-1 mx-4">
    badge
    <span class="badge badge-text bg-red-500">10</span>
  </span>
  <button class="button badge mx-4 bg-gray-300">
    button
    <span class="badge badge-text bg-indigo-500">new</span>
  </button>
  <figure class="avatar badge mx-4 bg-gray-300" data-initial="avatar">
    <span class="badge badge-status bg-yellow-500"></span>
  </figure>
  <figure class="avatar avatar-rounded badge mx-4 bg-gray-300">
    <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
    <span class="badge badge-text bg-green-500">Hi!</span>
  </figure>
</div>
<br>
<br>

```html {}
<!-- span -->
<span class="badge p-1">
    badge
  <span class="badge badge-text">10</span>
</span>

<!-- button -->
<button class="button badge">
  button
  <span class="badge badge-text">new</span>
</button>

<!-- avatar initial -->
<figure class="avatar badge" data-initial="avatar">
  <span class="badge badge-status"></span>
</figure>

<!-- avatar image -->
<figure class="avatar avatar-rounded badge">
  <img src="/avatar-1.svg" alt="Avatar">
  <span class="badge badge-text">Hi!</span>
</figure>
```

#### positioning
Change the position of the badge with `transform` and `translate`

Do considering using class templates to support IE browsers.

<div class="flex flex-wrap items-center mx-8">
  <button class="button badge mx-4 bg-gray-300">
    button
    <span class="badge badge-text bg-primary-500 right-auto left-0 transform -translate-x-1/2 -translate-y-1/2">top-left</span>
  </button>
  <button class="button badge mx-4 bg-gray-300">
    button
    <span class="badge badge-text bg-primary-500">top-right</span>
  </button>
</div>
<br>
<br>
<div class="flex flex-wrap items-center mx-8">
  <button class="button badge mx-4 bg-gray-300">
    button
    <span class="badge badge-text bg-primary-500 top-auto bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">bottom-left</span>
  </button>
  <button class="button badge mx-4 bg-gray-300">
    button
    <span class="badge badge-text bg-primary-500 top-auto bottom-0 transform translate-x-1/2 translate-y-1/2">bottom-right</span>
  </button>
</div>
<br>
<br>

```html {}
<button class="button badge mx-4 bg-gray-300">
  button
  <span class="badge badge-text bg-primary-500 right-auto left-0 transform -translate-x-1/2 -translate-y-1/2">top-left</span>
</button>

<button class="button badge mx-4 bg-gray-300">
  button
  <span class="badge badge-text bg-primary-500">top-right</span>
</button>

<button class="button badge mx-4 bg-gray-300">
  button
  <span class="badge badge-text bg-primary-500 top-auto bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2">bottom-left</span>
</button>

<button class="button badge mx-4 bg-gray-300">
  button
  <span class="badge badge-text bg-primary-500 top-auto bottom-0 transform translate-x-1/2 translate-y-1/2">bottom-right</span>
</button>
```