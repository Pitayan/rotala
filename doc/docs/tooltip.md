---
title: Tooltip
link: /docs/tooltip/
slug: tooltip
section: Components
---

Hoverable popup text hint
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
      <td>.tooltip</td>
      <td>
        The tooltip component
      </td>
    </tr>
    <tr>
      <td>.tooltip-container</td>
      <td>
        The tooltip container component
      </td>
    </tr>
    <tr>
      <td>
        <p>.tooltip-left</p>
        <p>.tooltip-right</p>
        <p>.tooltip-top-left</p>
        <p>.tooltip-top-center</p>
        <p>.tooltip-top-right</p>
        <p>.tooltip-bottom-left</p>
        <p>.tooltip-bottom-center</p>
        <p>.tooltip-bottom-right</p>
      </td>
      <td>
        The tooltip display position
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


#### default
The default popover container's background color is transparent. You may paint the color yourself.

<div class="flex justify-between my-6">
  <span class="tooltip tooltip-top-right">
    <button class="button text-gray-700 bg-gray-300">top right</button>
    <span class="tooltip-container rounded text-sm text-white" style="background: rgba(0,0,0,.65);">
      <span class="whitespace-pre">This is a top-right tooltip!</span>
    </span>
  </span>
  <span class="tooltip tooltip-top-center">
    <button class="button text-gray-700 bg-gray-300">top</button>
    <span class="tooltip-container rounded text-sm text-white" style="background: rgba(0,0,0,.65)">
      <span class="whitespace-pre">This is a top tooltip!</span>
    </span>
  </span>
  <span class="tooltip tooltip-top-left">
    <button class="button text-gray-700 bg-gray-300">top left</button>
    <span class="tooltip-container rounded text-sm text-white" style="background: rgba(0,0,0,.65)">
      <span class="whitespace-pre">This is a top-left tooltip!</span>
    </span>
  </span>
</div>
<div class="flex justify-between my-6">
  <span class="tooltip tooltip-right">
    <button class="button text-gray-700 bg-gray-300">left</button>
    <span class="tooltip-container rounded text-sm text-white" style="background: rgba(0,0,0,.65)">
      <span class="whitespace-pre">This is a left tooltip!</span>
    </span>
  </span>
  <span class="tooltip tooltip-left">
    <button class="button text-gray-700 bg-gray-300">right</button>
    <span class="tooltip-container rounded text-sm text-white" style="background: rgba(0,0,0,.65)">
      <span class="whitespace-pre">This is a right tooltip!</span>
    </span>
  </span>
</div>
<div class="flex justify-between my-6">
  <span class="tooltip tooltip-bottom-right">
    <button class="button text-gray-700 bg-gray-300">bottom right</button>
    <span class="tooltip-container rounded text-sm text-white" style="background: rgba(0,0,0,.65)">
      <span class="whitespace-pre">This is a bottom-right tooltip!</span>
    </span>
  </span>
  <span class="tooltip tooltip-bottom-center">
    <button class="button text-gray-700 bg-gray-300">bottom</button>
    <span class="tooltip-container rounded text-sm text-white" style="background: rgba(0,0,0,.65)">
      <span class="whitespace-pre">This is a bottom tooltip!</span>
    </span>
  </span>
  <span class="tooltip tooltip-bottom-left">
    <button class="button text-gray-700 bg-gray-300">bottom left</button>
    <span class="tooltip-container rounded text-sm text-white" style="background: rgba(0,0,0,.65)">
      <span class="whitespace-pre">This is a bottom-left tooltip!</span>
    </span>
  </span>
</div>
<br>
<br>

```html {}
<span class="tooltip tooltip-top-right">
  <button class="button text-gray-700 bg-gray-300">top right</button>
  <span class="tooltip-container rounded text-sm text-white" style="background: rgba(0,0,0,.65);">
    <span class="whitespace-pre">This is a top-right tooltip!</span>
  </span>
</span>
```