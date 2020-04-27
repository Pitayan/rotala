---
title: Accordion
link: /docs/accordion/
slug: accordion
section: Components
---

<script>
export default {
  data () {
    return {
      open: true
    }
  }
}
</script>

Accordion is used for toggling visiblity of content.
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
      <td>.accordion</td>
      <td>
        The accordion component container
      </td>
    </tr>
    <tr>
      <td>.accordion-indicator</td>
      <td>
        Used with an input tag to indicate if the accordion is open
      </td>
    </tr>
    <tr>
      <td>.accordion-header</td>
      <td>
        The title of the accordion component
      </td>
    </tr>
    <tr>
      <td>.accordion-body</td>
      <td>
        The content of the accordion component
      </td>
    </tr>
    <tr>
      <td>
        <p>.open</p>
        <p>[open]</p>
      </td>
      <td>
        The switch to control accrodion open/close
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>

## Features
#### with checkbox input
<div>
  <div class="accordion mx-4 w-64">
    <input class="accordion-indicator" id="accordion-0" type="checkbox" name="accordion-checkbox-0" hidden checked />
    <label class="accordion-header" for="accordion-0">
      One (with checkbox)
    </label>
    <div class="accordion-body">
      <ul class="menu">
        <li class="menu-item">
          <a href="#accordions">One 1</a>
        </li>
        <li class="menu-item">
          <a href="#accordions">One 2</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="accordion mx-4 w-64">
    <input class="accordion-indicator" id="accordion-1" type="checkbox" name="accordion-checkbox-0" hidden />
    <label class="accordion-header" for="accordion-1">
      Two
    </label>
    <div class="accordion-body">
      <ul class="menu">
        <li class="menu-item">
          <a href="#accordions">Two 1</a>
        </li>
        <li class="menu-item">
          <a href="#accordions">Two 2</a>
        </li>
      </ul>
    </div>
  </div>
</div>
<br>
<br>

#### with radio input
<div>
  <div class="accordion mx-4 w-64">
    <input class="accordion-indicator" id="accordion-2" type="radio" name="accordion-radio-0" hidden checked>
    <label class="accordion-header" for="accordion-2">
      One (with radio)
    </label>
    <div class="accordion-body">
      <ul class="menu">
        <li class="menu-item">
          <a href="#accordions">One 1</a>
        </li>
        <li class="menu-item">
          <a href="#accordions">One 2</a>
        </li>
      </ul>
    </div>
  </div>
  <div class="accordion mx-4 w-64">
    <input class="accordion-indicator" id="accordion-3" type="radio" name="accordion-radio-0" hidden>
    <label class="accordion-header" for="accordion-3">
      Two
    </label>
    <div class="accordion-body">
      <ul class="menu">
        <li class="menu-item">
          <a href="#accordions">Two 1</a>
        </li>
        <li class="menu-item">
          <a href="#accordions">Two 2</a>
        </li>
      </ul>
    </div>
  </div>
</div>
<br>
<br>

```html {}
<div>
  <div class="accordion">
    <input class="accordion-indicator" id="accordion-0" type="checkbox" name="accordion-checkbox-0" hidden checked />
    <label class="accordion-header" for="accordion-0">
      One
    </label>
    <div class="accordion-body">
      <!-- content -->
    </div>
  </div>
  <div class="accordion">
    <input class="accordion-indicator" id="accordion-1" type="checkbox" name="accordion-checkbox-0" hidden />
    <label class="accordion-header" for="accordion-1">
      Two
    </label>
    <div class="accordion-body">
      <!-- content -->
    </div>
  </div>
</div>
```

#### toggle with `.open`{class="text-xl"}
Use class `.open` to toggle the content instead of an input tag

<div class="accordion w-64" :class="{ open }">
  <label class="accordion-header" @click="open = !open">
    One (click to toggle)
  </label>
  <div class="accordion-body">
    <ul class="menu">
      <li class="menu-item">
        <a href="#accordions">One 1</a>
      </li>
      <li class="menu-item">
        <a href="#accordions">One 2</a>
      </li>
    </ul>
  </div>
</div>

```html {}
<div class="accordion open">
  <label class="accordion-header">
    One
  </label>
  <div class="accordion-body">
    <!-- content -->
  </div>
</div>
```

#### semantic tag
If `IE11` is not your targeted browser. You may also use the semantic HTML tags `details`&nbsp;`summary` to implement a "collapsable" component.

<details class="accordion">
  <summary class="accordion-header">
    One
  </summary>
  <div class="accordion-body">
    <ul class="menu">
      <li class="menu-item">
        <a href="#accordions">One 1</a>
      </li>
      <li class="menu-item">
        <a href="#accordions">One 2</a>
      </li>
    </ul>
  </div>
</details>

```html {}
<details class="accordion" open>
  <summary class="accordion-header">
    One
  </summary>
  <div class="accordion-body">
    <!-- content -->
  </div>
</details>
```



<div class="accordion w-64">
  <input class="accordion-indicator" id="accordion-5" type="checkbox" name="accordion-checkbox-0" hidden checked />
  <label class="accordion-header" for="accordion-5">
    One (click to toggle)
  </label>
  <div class="accordion-body">
    <div>
      hello
    </div>
  </div>
</div>