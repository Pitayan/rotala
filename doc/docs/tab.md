---
title: Tab
link: /docs/tab/
slug: tab
section: Components
---

Tab navigation to switch between views
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
      <td>.tab</td>
      <td>
        The tab container component
      </td>
    </tr>
    <tr>
      <td>.tab-item</td>
      <td>
        The tab controller component
      </td>
    </tr>
    <tr>
      <td>
        <p>.disabled</p>
        <p>[disabled]</p>
      </td>
      <td>
        The disabled style for tab item
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


#### default
<ul class="tab">
  <li class="tab-item">
    <a href="#tabs">List</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Favorite</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Mypage</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Settings</a>
  </li>
</ul>
<br>
<br>

```html {}
<ul class="tab">
  <li class="tab-item">
    <a href="#tabs">List</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Favorite</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Mypage</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Settings</a>
  </li>
</ul>
```

#### disabled
<ul class="tab">
  <li class="tab-item disabled">
    <a href="#tabs" disabled>List</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Favorite</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Mypage</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Settings</a>
  </li>
</ul>
<br>
<br>

```html {}
<ul class="tab">
  <li class="tab-item disabled">
    <a href="#tabs" disabled>List</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Favorite</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Mypage</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Settings</a>
  </li>
</ul>
```

## Templates
Some stylish examples with a bit more efforts
<br>
<br>

#### Classic Tab
With bottom border and hover effect

<ul class="tab border-b border-solid border-gray-300">
  <li class="tab-item -mb-px border-b-2 border-solid border-indigo-500">
    <a href="#tabs">List</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Favorite</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Mypage</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Settings</a>
  </li>
</ul>
<br>
<br>

```css {}
.tab {
  @apply border-b border-solid border-gray-300;
}

.tab .tab-item.active {
  @apply -mb-px;
  @apply border-b-2 border-solid border-indigo-500;
}
```

```html {}
<ul class="tab">
  <li class="tab-item active">
    <a href="#tabs">List</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Favorite</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Mypage</a>
  </li>
  <li class="tab-item">
    <a href="#tabs">Settings</a>
  </li>
</ul>
```