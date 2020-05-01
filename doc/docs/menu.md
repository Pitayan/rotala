---
title: Menu
link: /docs/menu/
slug: menu
section: Components
---

A vertical navigation component

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
      <td>.menu</td>
      <td>
        The breadcrumb component container
      </td>
    </tr>
    <tr>
      <td>.menu-item</td>
      <td>
        The menu controller and indicator
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


## Features
#### default
<ul class="menu w-64">
  <li class="menu-item"><a href="#first">First</a></li>
  <li class="menu-item active"><a href="#second">Second</a></li>
  <li class="menu-item"><a href="#third">Third</a></li>
</ul>
<br>
<br>

```html {}
<ul class="menu w-64">
  <li class="menu-item"><a href="#first">First</a></li>
  <li class="menu-item active"><a href="#second">Second</a></li>
  <li class="menu-item"><a href="#third">Third</a></li>
</ul>
```


#### hover effect
<ul class="menu w-64">
  <li class="menu-item hover:bg-gray-300 hover:text-white"><a href="#first">First</a></li>
  <li class="menu-item hover:bg-gray-300 hover:text-white"><a href="#second">Second</a></li>
  <li class="menu-item hover:bg-gray-300 hover:text-white"><a href="#third">Third</a></li>
</ul>
<br>
<br>

```html {}
<ul class="menu w-64">
  <li class="menu-item hover:bg-gray-300 hover:text-white"><a href="#first">First</a></li>
  <li class="menu-item hover:bg-gray-300 hover:text-white"><a href="#second">Second</a></li>
  <li class="menu-item hover:bg-gray-300 hover:text-white"><a href="#third">Third</a></li>
</ul>
```