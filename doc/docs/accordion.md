---
title: Accordion
date: 2020-01-02
link: /docs/accordion/
slug: accordion
section: Components
---
Accordion is used for toggling visiblity of content.

## trim.css
Rudimentary collapse behaviour without any transition effect
<br>
<form class="flex flex-wrap">
  <div class="w-1/2">
    <div class="trim-accordion mx-4 w-64">
      <input class="trim-accordion-indicator" id="accordion-0" type="checkbox" name="accordion-checkbox-0" hidden checked />
      <label class="trim-accordion-header" for="accordion-0">Elements (with checkbox)</label>
      <div class="trim-accordion-body">
        <ul class="trim-menu">
          <li class="trim-menu-item">
            <a href="#accordions">Element 1</a>
          </li>
          <li class="trim-menu-item">
            <a href="#accordions">Element 2</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="trim-accordion mx-4 w-64">
      <input class="trim-accordion-indicator" id="accordion-1" type="checkbox" name="accordion-checkbox-0" hidden />
      <label class="trim-accordion-header" for="accordion-1">
        Component
      </label>
      <div class="trim-accordion-body">
        <ul class="trim-menu">
          <li class="trim-menu-item">
            <a href="#accordions">Component 1</a>
          </li>
          <li class="trim-menu-item">
            <a href="#accordions">Component 2</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="w-1/2">
    <div class="trim-accordion mx-4 w-64">
      <input class="trim-accordion-indicator" id="accordion-2" type="radio" name="accordion-radio-0" hidden checked>
      <label class="trim-accordion-header" for="accordion-2">Elements (with radio)</label>
      <div class="trim-accordion-body">
        <ul class="trim-menu">
          <li class="trim-menu-item">
            <a href="#accordions">Element 1</a>
          </li>
          <li class="trim-menu-item">
            <a href="#accordions">Element 2</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="trim-accordion mx-4 w-64">
      <input class="trim-accordion-indicator" id="accordion-3" type="radio" name="accordion-radio-0" hidden>
      <label class="trim-accordion-header" for="accordion-3">
        Component
      </label>
      <div class="trim-accordion-body">
        <ul class="trim-menu">
          <li class="trim-menu-item">
            <a href="#accordions">Component 1</a>
          </li>
          <li class="trim-menu-item">
            <a href="#accordions">Component 2</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</form>
<br><br>

```html
<div class="accordion">
  <input class="accordion-indicator" type="checkbox" hidden checked />
  <label class="accordion-header" for="accordion-1">Elements</label>
  <div class="accordion-body">
    <!-- content -->
  </div>
</div>
```

## theme.css
With transition effect on both container element and icon indicator
<br>
<form class="flex flex-wrap">
  <div class="w-1/2">
    <div class="accordion mx-4 w-64">
      <input class="accordion-indicator" id="accordion-4" type="checkbox" name="accordion-checkbox-1" hidden="" checked>
      <label class="accordion-header" for="accordion-4">
        <i class="icon icon-combo accordion-icon icon-chevron-right mr-px"></i>
        Components (with checkbox)
      </label>
      <div class="accordion-body">
        <ul class="menu">
          <li class="menu-item">
            <a href="#accordions">Component 1</a>
          </li>
          <li class="menu-item">
            <a href="#accordions">Component 2</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="accordion mx-4 w-64">
      <input class="accordion-indicator" id="accordion-5" type="checkbox" name="accordion-checkbox-1" hidden="">
      <label class="accordion-header" for="accordion-5">
        <i class="icon icon-combo accordion-icon icon-chevron-right mr-px"></i>
        Elements
      </label>
      <div class="accordion-body">
        <ul class="menu">
          <li class="menu-item">
            <a href="#accordions">Element 1</a>
          </li>
          <li class="menu-item">
            <a href="#accordions">Element 2</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="w-1/2">
    <div class="accordion mx-4 w-64">
      <input class="accordion-indicator" id="accordion-6" type="radio" name="accordion-radio-2" hidden="" checked>
      <label class="accordion-header" for="accordion-6">
        <i class="icon icon-combo accordion-icon icon-chevron-right mr-px"></i>
        Elements (with radio)
      </label>
      <div class="accordion-body">
        <ul class="menu">
          <li class="menu-item">
            <a href="#accordions">Element 1</a>
          </li>
          <li class="menu-item">
            <a href="#accordions">Element 2</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="accordion mx-4 w-64">
      <input class="accordion-indicator" id="accordion-7" type="radio" name="accordion-radio-2" hidden="">
      <label class="accordion-header" for="accordion-7">
        <i class="icon icon-combo accordion-icon icon-chevron-right mr-px"></i>
        Components
      </label>
      <div class="accordion-body">
        <ul class="menu">
          <li class="menu-item">
            <a href="#accordions">Component 1</a>
          </li>
          <li class="menu-item">
            <a href="#accordions">Component 2</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</form>

```html
<div class="accordion">
  <input class="accordion-indicator" type="checkbox" hidden checked />
  <label class="accordion-header" for="accordion-1">
    <i class="icon icon-combo accordion-icon icon-chevron-right mr-px"></i>
    Elements
  </label>
  <div class="accordion-body">
    <!-- content -->
  </div>
</div>
```

## Toggle by class
Use `open` to toggle the content

<div class="accordion open w-64">
  <label class="accordion-header">
    <i class="icon icon-combo accordion-icon icon-chevron-right mr-px"></i>
    Elements
  </label>
  <div class="accordion-body">
    <ul class="menu">
      <li class="menu-item">
        <a href="#accordions">Element 1</a>
      </li>
      <li class="menu-item">
        <a href="#accordions">Element 2</a>
      </li>
    </ul>
  </div>
</div>

```html
<div class="accordion open">
  <label class="accordion-header" for="accordion-1">
    <i class="icon icon-combo accordion-icon icon-chevron-right mr-px"></i>
    Elements
  </label>
  <div class="accordion-body">
    <!-- content -->
  </div>
</div>
```

## Semantic Tag
If `IE11` is not your targeted browser. You may also use the semantic HTML tags `details`&nbsp;`summary` to implement a "collapsable" component. In this way, the `input` tag is no longer needed for triggering hide/show.

<details class="accordion">
  <summary class="accordion-header">
    <i class="icon icon-combo accordion-indicator icon-chevron-right mr-px"></i>
    Elements
  </summary>
  <div class="accordion-body">
    <ul class="menu">
      <li class="menu-item">
        <a href="#accordions">Element 1</a>
      </li>
      <li class="menu-item">
        <a href="#accordions">Element 2</a>
      </li>
    </ul>
  </div>
</details>

```html
<details class="accordion" open>
  <summary class="accordion-header">
    <i class="icon icon-combo icon-chevron-right mr-px"></i>
    Elements
  </summary>
  <div class="accordion-body">
    <!-- content -->
  </div>
</details>
```
