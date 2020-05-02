---
title: Drawer
link: /docs/drawer/
slug: drawer
section: Components
---

import drawer from '~/components/docs/drawer'

<script>
export default {
  data () {
    return {
      position: 'drawer-right',
      open: false,
      background: "rgba(0,0,0,.25)",
      size: '320'
    }
  }
}
</script>

<drawer
  :style="{ background }"
  :open.sync="open"
  :drawer-classes="{ open, [position]: true }"
  :container-style="{
    width: position == 'drawer-right' || position == 'drawer-left' ? `${size}px` : undefined,
    height: position == 'drawer-top' || position == 'drawer-bottom' ? `${size}px` : undefined
  }">
  <div class="bg-white" :class="{
    'bg-white h-full': true,
    'h-screen': position == 'drawer-right' || position == 'drawer-left'
  }">
    {{ position }}
  </div>
</drawer>


An overlayer appearing to an edge of the page
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
      <td>.drawer</td>
      <td>
        The drawer component
      </td>
    </tr>
    <tr>
      <td>.drawer-container</td>
      <td>
        The drawer container with a default width <code>320px</code>
      </td>
    </tr>
    <tr>
      <td>
        <p>drawer-top</p>
        <p>drawer-bottom</p>
        <p>drawer-left</p>
        <p>drawer-right</p>
      </td>
      <td>
        The position of drawer to appear on the page.
      </td>
    </tr>
    <tr>
      <td>
        <p>.open</p>
        <p>:target</p>
      </td>
      <td>
        The switch to control drawer open/close
      </td>
    </tr>
    <tr>
      <td>
        .is-drawer-open
      </td>
      <td>
        A semantic class to attch on <code>body</code> element to restrict scroll behavior
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


## Features
#### default
The default drawer container's background color is transparent. You may paint the color yourself.

<form class="radio-group flex flex-wrap">
  <label class="radio">
    <input type="radio" value="drawer-right" v-model="position" name="position" checked />
    right
  </label>
  <label class="radio">
    <input type="radio" value="drawer-left" v-model="position" name="position" />
    left
  </label>
  <label class="radio">
    <input type="radio" value="drawer-top" v-model="position" name="position" />
    top
  </label>
  <label class="radio">
    <input type="radio" value="drawer-bottom" v-model="position" name="position" />
    bottom
  </label>
</form>
<br>
<br>

<div>
  <button class="button text-gray-700 bg-gray-300" type="button" @click="open = true">open drawer</button>
</div>
<br>
<br>

```html {}
<div class="drawer open left">
  <div class="drawer-container bg-white">
    <!-- your content -->
  </div>
</div>
```


#### container size
Default container width/height is `320px`.

<div class="flex items-center my-4">
  <label class="font-bold">width/height: </label>
  <input type="number" class="input border-b border-solid border-gray-300 mx-2 w-32" v-model="size" />
</div>

<div>
  <button class="button text-gray-700 bg-gray-300" type="button" @click="open = true">open drawer</button>
</div>
<br>
<br>


```html {}
<!-- width -->
<div class="drawer open left">
  <div class="drawer-container bg-white" style="width: 500px">
    <!-- your content -->
  </div>
</div>

<!-- height -->
<div class="drawer open left">
  <div class="drawer-container bg-white" style="height: 500px">
    <!-- your content -->
  </div>
</div>
```
