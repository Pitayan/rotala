---
title: Pagination
link: /docs/pagination/
slug: pagination
section: Components
---

Paging indicator component
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
      <td>.pagination</td>
      <td>
        The pagination component container
      </td>
    </tr>
    <tr>
      <td>.pagination-item</td>
      <td>
        The pagination controller component
      </td>
    </tr>
    <tr>
      <td>.pagination-prev</td>
      <td>
        The previous page controller
      </td>
    </tr>
    <tr>
      <td>.pagination-next</td>
      <td>
        The next page controller
      </td>
    </tr>
    <tr>
      <td>
        <p>.disabled</p>
        <p>[disabled]</p>
      </td>
      <td>
        The disabled style for pagination item/prev/next
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


## Features
#### default
<ul class="pagination">
  <li class="pagination-prev">
    <a href="#">&lt; Prev</a>
  </li>
  <li class="pagination-item">
    <a href="#">1</a>
  </li>
  <li class="pagination-item">
    ...
  </li>
  <li class="pagination-item">
    <a href="#">20</a>
  </li>
  <li class="pagination-item">
    <a href="#">21</a>
  </li>
  <li class="pagination-item">
    <a href="#">22</a>
  </li>
  <li class="pagination-item">
    ...
  </li>
  <li class="pagination-item">
    <a href="#">30</a>
  </li>
  <li class="pagination-next">
    <a href="#">Next &gt;</a>
  </li>
</ul>

```html {}
<ul class="pagination">
  <li class="pagination-prev">
    <a href="#prev">&lt; Prev</a>
  </li>
  <li class="pagination-item">
    <a href="page/1">1</a>
  </li>
  <li class="pagination-item">
    ...
  </li>
  <li class="pagination-item">
    <a href="page/20">20</a>
  </li>
  <li class="pagination-item">
    <a href="page/21">21</a>
  </li>
  <li class="pagination-item">
    <a href="page/22">22</a>
  </li>
  <li class="pagination-item">
    ...
  </li>
  <li class="pagination-item">
    <a href="page/30">30</a>
  </li>
  <li class="pagination-next">
    <a href="#next">Next &gt;</a>
  </li>
</ul>
```

#### disabled
<ul class="pagination">
  <li class="pagination-prev disabled">
    <a href="#">&lt; Prev</a>
  </li>
  <li class="pagination-item">
    <a href="#">1</a>
  </li>
  <li class="pagination-item">
    <a href="#">2</a>
  </li>
  <li class="pagination-item">
    <a href="#">3</a>
  </li>
  <li class="pagination-item">
    ...
  </li>
  <li class="pagination-item">
    <a href="#">30</a>
  </li>
  <li class="pagination-next">
    <a href="#">Next &gt;</a>
  </li>
</ul>

<ul class="pagination">
  <li class="pagination-prev">
    <a href="#">&lt; Prev</a>
  </li>
  <li class="pagination-item">
    <a href="#">1</a>
  </li>
  <li class="pagination-item">
    ...
  </li>
  <li class="pagination-item">
    <a href="#">28</a>
  </li>
  <li class="pagination-item">
    <a href="#">29</a>
  </li>
  <li class="pagination-item">
    <a href="#">30</a>
  </li>
  <li class="pagination-next disabled">
    <a href="#">Next &gt;</a>
  </li>
</ul>
<br>
<br>

```html {}
<ul class="pagination">
  <li class="pagination-prev disabled">
    <a href="#">&lt; Prev</a>
  </li>
  <li class="pagination-item">
    <a href="#">1</a>
  </li>
  <li class="pagination-item">
    <a href="#">2</a>
  </li>
  <li class="pagination-item">
    <a href="#">3</a>
  </li>
  <li class="pagination-item">
    ...
  </li>
  <li class="pagination-item">
    <a href="#">30</a>
  </li>
  <li class="pagination-next">
    <a href="#">Next &gt;</a>
  </li>
</ul>
```


#### active page
Active status for the pagination item

<ul class="pagination">
  <li class="pagination-prev">
    <a href="#">&lt;</a>
  </li>
  <li class="pagination-item">
    <a href="#">1</a>
  </li>
  <li class="pagination-item">
    <a class="border-2 border-solid border-indigo-500 rounded" tabindex="-1" href="#">2</a>
  </li>
  <li class="pagination-item">
    <a href="#">3</a>
  </li>
  <li class="pagination-next">
    <a href="#">&gt;</a>
  </li>
</ul>
<br>
<br>

```css {}
.pagination .pagination-item.active a {
  @apply border-2 border-solid border-indigo-500;
  @apply rounded;
}
```

```html {}
<ul class="pagination">
  <li class="pagination-prev">
    <a href="#">&lt; Prev</a>
  </li>
  <li class="pagination-item">
    <a href="#">1</a>
  </li>
  <li class="pagination-item active">
    <a href="#">2</a>
  </li>
  <li class="pagination-item">
    <a href="#">3</a>
  </li>
  <li class="pagination-next disabled">
    <a href="#">Next &gt;</a>
  </li>
</ul>
```