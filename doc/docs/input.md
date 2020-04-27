---
title: Input
link: /docs/input/
slug: input
section: Components
---

Text input component
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
      <td>.input</td>
      <td>
        default input style
      </td>
    </tr>
    <tr>
      <td>
        <p>.disabled</p>
        <p>[disabled]</p>
      </td>
      <td>
        disabled input style
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>

#### default
<input class="input" type="text" placeholder="a clean input" autofocus />
<textarea class="input" placeholder="a clean textarea"></textarea>
<br>
<br>


```html {}
<input class="input" type="text" placeholder="a clean input" autofocus />
<textarea class="input" placeholder="a clean textarea"></textarea>
```

#### disabled
<input class="input disabled" type="text" placeholder="a clean input" disabled />
<textarea class="input disabled" placeholder="a clean textarea" disabled></textarea>
<br>
<br>


```html {}
<input class="input disabled" type="text" placeholder="a clean input" disabled />
<textarea class="input disabled" placeholder="a clean textarea" disabled></textarea>
```

## Templates
Some stylish examples with a bit more efforts
<br>
<br>

#### underline
<input class="input border-b border-solid border-gray-300 focus:border-blue-500 w-48" type="text" placeholder="underlined input" />
<br>
<br>

```html {}
<input class="input border-b border-solid border-gray-300 focus:border-blue-500 w-48" type="text" placeholder="underlined input" />
```

#### outline
<input class="input rounded px-2 border border-solid border-gray-300 focus:border-blue-500 w-48" type="text" placeholder="outlined input" />
<br>
<br>

```html {}
<input class="input rounded px-2 border border-solid border-gray-300 focus:border-blue-500 w-48" type="text" placeholder="outlined input" />
```

#### color
<input class="input rounded px-2 text-red-700 placeholder-red-700 border border-solid border-red-700 w-48" type="text" placeholder="a clean input" autofocus />
<br>
<br>

<input class="input rounded px-2 text-indigo-700 placeholder-indigo-700 border border-solid border-indigo-700 w-48" type="text" placeholder="a clean input" autofocus />
<br>
<br>

<input class="input rounded px-2 text-green-700 placeholder-green-700 border border-solid border-green-700 w-48" type="text" placeholder="a clean input" autofocus />
<br>
<br>

```html {}
<input class="input rounded px-2 text-red-700 placeholder-red-700 border border-solid border-red-700 w-48" type="text" placeholder="a clean input" autofocus />
```