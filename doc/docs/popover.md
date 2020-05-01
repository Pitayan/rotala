---
title: Popover
link: /docs/popover/
slug: popover
section: Components
---

<script>
export default {
  data () {
    return {
      position: 'top-right',
      trigger: 'hover',
      open: false
    }
  }
}
</script>

A floating content component

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
      <td>.popover</td>
      <td>
        The popover component
      </td>
    </tr>
    <tr>
      <td>.popover-container</td>
      <td>
        The popover container component with a default width of <code>320px</code>
      </td>
    </tr>
    <tr>
      <td>
        <p>.popover-click</p>
        <p>.popover-hover</p>
      </td>
      <td>
        The popover triger: open by click / hover
      </td>
    </tr>
    <tr>
      <td>
        <p>.popover-left</p>
        <p>.popover-right</p>
        <p>.popover-top-left</p>
        <p>.popover-top-center</p>
        <p>.popover-top-right</p>
        <p>.popover-bottom-left</p>
        <p>.popover-bottom-center</p>
        <p>.popover-bottom-right</p>
      </td>
      <td>
        The popover display position
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


## Features
#### default
The default popover container's background color is transparent. You may paint the color yourself.

<b>trigger</b>
<form class="radio-group flex flex-wrap">
  <label class="radio flex-1">
    <input type="radio" value="hover" v-model="trigger" name="trigger" />
    hover
  </label>
  <label class="radio flex-1"></label>
  <label class="radio flex-1">
    <input type="radio" value="click" v-model="trigger" name="trigger" />
    click
  </label>
</form>
<br>
<br>

<b>position</b>
<form class="radio-group flex flex-wrap">
  <label class="radio flex-1">
    <input type="radio" value="top-left" v-model="position" name="position" checked />
    top left
  </label>
  <label class="radio flex-1">
    <input type="radio" value="top-center" v-model="position" name="position" />
    top center
  </label>
  <label class="radio flex-1">
    <input type="radio" value="top-right" v-model="position" name="position" />
    top right
  </label>
</form>
<form class="radio-group flex flex-wrap justify-between">
  <label class="radio flex-1">
    <input type="radio" value="left" v-model="position" name="position" checked />
    left
  </label>
  <label class="radio flex-1"></label>
  <label class="radio flex-1">
    <input type="radio" value="right" v-model="position" name="position" />
    right
  </label>
</form>
<form class="radio-group flex flex-wrap">
  <label class="radio flex-1">
    <input type="radio" value="bottom-left" v-model="position" name="position" />
    bottom left
  </label>
  <label class="radio flex-1">
    <input type="radio" value="bottom-center" v-model="position" name="position" />
    bottom center
  </label>
  <label class="radio flex-1">
    <input type="radio" value="bottom-right" v-model="position" name="position" />
    bottom right
  </label>
</form>
<br>
<br>

<div class="flex justify-center">
  <div
    class="popover"
    :class="[
      `popover-${position}`,
      `popover-${trigger}`,
      `${trigger == 'click' && open ? 'open' : '' }`
    ]">
    <button class="button text-gray-700 bg-gray-300" @click="open = !open">{{ position }} popover</button>
    <div class="popover-container bg-white shadow-lg rounded">
      <div class="p-4 text-left">
        <h5>Popover</h5>
        <div class="divider"></div>
        <p class="mt-4">
          This is the content of the Popover.
        </p>
      </div>
    </div>
  </div>
</div>
<br>
<br>

```html {}
<div class="popover popover-top-right popover-hover">
  <button class="button">top right popover</button>
  <div class="popover-container bg-white shadow-lg rounded">
    <!-- popover content -->
  </div>
</div>
```