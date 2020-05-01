---
title: Breadcrumb
link: /docs/breadcrumb/
slug: breadcrumb
section: Components
---

A hierachical inidicator component to display current location
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
      <td>.breadcrumb</td>
      <td>
        The breadcrumb component container
      </td>
    </tr>
    <tr>
      <td>.breadcrumb-item</td>
      <td>
        The breadcrumb controller component
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


## Features
#### default
<ul class="breadcrumb">
  <li class="breadcrumb-item">
    <a href="#">Home</a>
  </li>
  <li class="breadcrumb-item px-2">
    /
  </li>
  <li class="breadcrumb-item">
    <a href="#">Mypage</a>
  </li>
  <li class="breadcrumb-item px-2">
    /
  </li>
  <li class="breadcrumb-item active">
    <span>Setting</span>
  </li>
</ul>
<br>
<br>


```html {}
<ul class="breadcrumb">
  <li class="breadcrumb-item">
    <a href="#">Home</a>
  </li>
  <li class="breadcrumb-item px-2">
    /
  </li>
  <li class="breadcrumb-item">
    <a href="#">Mypage</a>
  </li>
  <li class="breadcrumb-item px-2">
    /
  </li>
  <li class="breadcrumb-item active">
    <span>Setting</span>
  </li>
</ul>
```


#### character separator

<ul class="breadcrumb">
  <li class="breadcrumb-item">
    <a href="#">Home</a>
  </li>
  <li class="breadcrumb-item px-2">
    >
  </li>
  <li class="breadcrumb-item">
    <a href="#">Mypage</a>
  </li>
  <li class="breadcrumb-item px-2">
    >
  </li>
  <li class="breadcrumb-item active">
    <span>Setting</span>
  </li>
</ul>
<br>
<br>

```html {}
<ul class="breadcrumb">
  <li class="breadcrumb-item">
    <a href="#">Home</a>
  </li>
  <li class="breadcrumb-item px-2">
    >
  </li>
  <li class="breadcrumb-item">
    <a href="#">Mypage</a>
  </li>
  <li class="breadcrumb-item px-2">
    >
  </li>
  <li class="breadcrumb-item active">
    <span>Setting</span>
  </li>
</ul>
```

#### icon separator

<ul class="breadcrumb">
  <li class="breadcrumb-item">
    <a href="#">Home</a>
  </li>
  <li class="breadcrumb-item px-2">
    <i class="ro-icon ro-icon-chevron-right leading-none align-baseline text-xs"></i>
  </li>
  <li class="breadcrumb-item">
    <a href="#">Mypage</a>
  </li>
  <li class="breadcrumb-item px-2">
    <i class="ro-icon ro-icon-chevron-right leading-none align-baseline text-xs"></i>
  </li>
  <li class="breadcrumb-item active">
    <span>Setting</span>
  </li>
</ul>
<br>
<br>


```html {}
<ul class="breadcrumb">
  <li class="breadcrumb-item">
    <a href="#">Home</a>
  </li>
  <li class="breadcrumb-item px-2">
    <i class="ro-icon ro-icon-chevron-right leading-none align-baseline text-xs"></i>
  </li>
  <li class="breadcrumb-item">
    <a href="#">Mypage</a>
  </li>
  <li class="breadcrumb-item px-2">
    <i class="ro-icon ro-icon-chevron-right leading-none align-baseline text-xs"></i>
  </li>
  <li class="breadcrumb-item active">
    <span>Setting</span>
  </li>
</ul>
```
<br>
<br>


#### hover & underline

<ul class="breadcrumb">
  <li class="breadcrumb-item">
    <a class="link text-gray-700 hover:text-indigo-600 border-b border-gray-500 border-solid hover:border-indigo-500" href="#">Home</a>
  </li>
  <li class="breadcrumb-item px-2">
    <i class="ro-icon ro-icon-chevron-right leading-none align-baseline text-xs"></i>
  </li>
  <li class="breadcrumb-item">
    <a class="link text-gray-700 hover:text-indigo-600 border-b border-gray-500 border-solid hover:border-indigo-500" href="#">Mypage</a>
  </li>
  <li class="breadcrumb-item px-2">
    <i class="ro-icon ro-icon-chevron-right leading-none align-baseline text-xs"></i>
  </li>
  <li class="breadcrumb-item">
    <span class="text-indigo-600">Setting</span>
  </li>
</ul>
<br>
<br>

```html {}
<ul class="breadcrumb">
  <li class="breadcrumb-item">
    <a class="link text-gray-700 hover:text-indigo-600 border-b border-gray-500 border-solid hover:border-indigo-500" href="#">Home</a>
  </li>
  <li class="breadcrumb-item px-2">
    <i class="ro-icon ro-icon-chevron-right leading-none align-baseline text-xs"></i>
  </li>
  <li class="breadcrumb-item">
    <a class="link text-gray-700 hover:text-indigo-600 border-b border-gray-500 border-solid hover:border-indigo-500" href="#">Mypage</a>
  </li>
  <li class="breadcrumb-item px-2">
    <i class="ro-icon ro-icon-chevron-right leading-none align-baseline text-xs"></i>
  </li>
  <li class="breadcrumb-item">
    <span class="text-indigo-600">Setting</span>
  </li>
</ul>
```