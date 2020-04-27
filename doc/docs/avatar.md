---
title: Avatar
link: /docs/avatar/
slug: avatar
section: Components
---

A User profile image Component
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
      <td>.avatar</td>
      <td>
        The avatar component container
      </td>
    </tr>
    <tr>
      <td>.avatar-rounded</td>
      <td>
        The avatar round style
      </td>
    </tr>
    <tr>
      <td>[data-initial]</td>
      <td>
        The initial letters to be displayed on default avatar
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>

#### initial
<figure class="avatar bg-gray-300" data-initial="avatar"></figure>
<br>
<br>

```html {}
<figure class="avatar bg-gray-300" data-initial="avatar"></figure>
```

#### image
<figure class="avatar m-2">
  <img src="/avatar-1.svg" class="bg-pink-300" alt="Avatar">
</figure>
<figure class="avatar m-2">
  <img src="/avatar-2.svg" class="bg-blue-300" alt="Avatar">
</figure>
<figure class="avatar m-2">
  <img src="/avatar-3.svg" class="bg-green-300" alt="Avatar">
</figure>
<figure class="avatar m-2">
  <img src="/avatar-4.svg" class="bg-red-300" alt="Avatar">
</figure>
<figure class="avatar m-2">
  <img src="/avatar-5.svg" class="bg-yellow-300" alt="Avatar">
</figure>
<br>
<br>

```html {}
<figure class="avatar">
  <img src="/avatar-1.svg" class="bg-pink-300" alt="Avatar"  />
</figure>
```


#### rounded
<figure class="avatar avatar-rounded m-2">
  <img src="/avatar-1.svg" class="bg-pink-300" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded m-2">
  <img src="/avatar-2.svg" class="bg-blue-300" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded m-2">
  <img src="/avatar-3.svg" class="bg-green-300" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded m-2">
  <img src="/avatar-4.svg" class="bg-red-300" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded m-2">
  <img src="/avatar-5.svg" class="bg-yellow-300" alt="Avatar">
</figure>

```html {}
<figure class="avatar avatar-rounded">
  <img src="/avatar-1.svg" alt="Avatar">
</figure>
```


## Templates
Some stylish examples with a bit more efforts
<br>
<br>

#### background
Use `background color` and `color` to change avatar colors

<figure class="avatar bg-gray-500 text-white mx-2" data-initial="avatar"></figure>
<figure class="avatar bg-orange-500 text-white mx-2" data-initial="avatar"></figure>
<figure class="avatar bg-pink-500 text-white mx-2" data-initial="avatar"></figure>
<figure class="avatar bg-indigo-500 text-white mx-2" data-initial="avatar"></figure>
<figure class="avatar bg-primary-500 text-white mx-2" data-initial="avatar"></figure>
<br>
<br>

```html {}
<figure class="avatar bg-gray-500 text-white" data-initial="avatar"></figure>
```

