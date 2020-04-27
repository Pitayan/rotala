---
title: Button
link: /docs/button/
slug: button
section: Components
---
A clickable form controller component.
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
      <td>.button</td>
      <td>
        default button style
      </td>
    </tr>
    <tr>
      <td>
        <p>.disabled</p>
        <p>[disabled]</p>
      </td>
      <td>
        disabled button style
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


#### default
<button class="button" type="button">Default Button</button>
<br>
<br>


```html {}
<button class="button" type="button">Button</button>
<input class="button" type="button" value="Button" />
<a class="button" href="#">Button</a>
```


#### default disabled
<button class="button disabled" type="button" disabled>Disabled Button</button>
<br>
<br>


```html {}
<button class="button disabled" type="button" disabled>Disabled Button</button>
```


## Templates
Some stylish examples with a bit more efforts
<br>
<br>


#### rounded & outline
<button class="button rounded-full text-gray-700 border border-solid border-gray-700" type="button">Rounded</button>
<br>
<br>


```css {}
.button {
  @apply rounded-full;
  @apply text-gray-700;
  @apply border border-solid border-gray-700;
}
```


```html {}
<button class="button shadow text-gray-700 border border-solid border-gray-700" type="button">Rounded</button>
```


#### background & hover
<button class="button text-gray-700 bg-gray-300 hover:bg-gray-500 transition-colors duration-150" type="button">Background Gray</button>
<br>
<br>


```css {}
.button {
  @apply text-gray-700;
  @apply bg-gray-300;
  @apply hover:bg-gray-500;
  @apply transition-colors duration-150;
}
```



```html {}
<button class="button text-gray-700 bg-gray-300 hover:bg-gray-500 transition-colors duration-150" type="button">Background Gray</button>
```

#### with icon
<button class="button text-gray-700 border border-solid border-gray-700 inline-flex items-center justify-center" type="button"><i class="ro-icon ro-icon-search mr-1"></i>Search</button>
<br>
<br>


```css {}
.button {
  @apply text-gray-700;
  @apply border border-solid border-gray-700;
  @apply inline-flex items-center;
}
```


```html {}
<button class="button text-gray-700 border border-solid border-gray-700 inline-flex items-center justify-center" type="button">
  <i class="icon icon-search mr-1"></i>Search
</button>
```