---
title: Pagination
date: 2020-03-28
link: /docs/pagination/
slug: pagination
section: Components
---

Paging indicator component.

## trim.css
2 features:
- simple appearance
- pagination item disabled cursor behaviour

<ul class="trim-pagination m-2">
  <li class="trim-pagination-prev">
    <a class="trim-link" href="#" id="">&lt; Prev</a>
  </li>
  <li class="trim-pagination-item">
    <a class="trim-link" href="#" id="">1</a>
  </li>
  <li class="trim-pagination-item">
    <a class="trim-link" href="#" id="">...</a>
  </li>
  <li class="trim-pagination-item">
    <a class="trim-link" href="#" id="">5</a>
  </li>
  <li class="trim-pagination-item">
    <a class="trim-link" href="#" id="">6</a>
  </li>
  <li class="trim-pagination-item">
    <a class="trim-link" href="#" id="">7</a>
  </li>
  <li class="trim-pagination-item">
    <a class="trim-link" href="#" id="">...</a>
  </li>
  <li class="trim-pagination-item">
    <a class="trim-link" href="#" id="">12</a>
  </li>
  <li class="trim-pagination-next">
    <a class="trim-link" href="#" id="">Next &gt;</a>
  </li>
</ul>

```html {}
<ul class="trim-pagination">
  <li class="trim-pagination-prev">
    <a class="trim-link" href="#" id="">&lt; Prev</a>
  </li>
  <li class="trim-pagination-item">
    <a class="trim-link" href="#" id="">1</a>
  </li>
  <li class="trim-pagination-item">
    <a class="trim-link" href="#" id="">2</a>
  </li>
  <li class="trim-pagination-item">
    <a class="trim-link" href="#" id="">4</a>
  </li>
  <li class="trim-pagination-next">
    <a class="trim-link" href="#" id="">Next &gt;</a>
  </li>
</ul>
```

## theme.css
1 extra feature:
- active appearance

<ul class="pagination m-2">
  <li class="pagination-prev">
    <a class="link" href="#" id="">&lt; Prev</a>
  </li>
  <li class="pagination-item">
    <a class="link" href="#" id="">1</a>
  </li>
  <li class="pagination-item active">
    <a tabindex="-1" class="link" href="#" id="">2</a>
  </li>
  <li class="pagination-item">
    <a class="link" href="#" id="">3</a>
  </li>
  <li class="pagination-next">
    <a class="link" href="#" id="">Next &gt;</a>
  </li>
</ul>

```html {}
<ul class="pagination">
  <li class="pagination-prev">
    <a class="link" href="#" id="">&lt; Prev</a>
  </li>
  <li class="pagination-item">
    <a class="link" href="#" id="">1</a>
  </li>
  <li class="pagination-item active">
    <a tabindex="-1" class="link" href="#" id="">2</a>
  </li>
  <li class="pagination-item">
    <a class="link" href="#" id="">3</a>
  </li>
  <li class="pagination-next">
    <a class="link" href="#" id="">Next &gt;</a>
  </li>
</ul>
```