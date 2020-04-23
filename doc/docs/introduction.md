---
title: Introduction
order: 1
link: /docs/
slug: introduction
section: Getting Started
---

**Rotala** is a flat-design based css framework that offers a great customizibility with which we can create our own theme quickly and easily.
The framework is made available by modern css with some very handy & popular tools [PostCSS](https://postcss.org){class="ro-link ro-link-doc"} and [Tailwindcss](https://tailwindcss.com/){class="ro-link ro-link-doc"}.
<br>
<br>


## "Blank" components
In the **Rotala** core styles sets, all the components hold the very minimal and rudimentrary styles that are await for being extended. Which means, you can start theming with extending/overriding these default components.

<div class="flex flex-wrap items-center">
  <button class="button flex-1">buttton</button>
  <a class="link flex-1" href="#">link</a>
  <ul class="menu flex-1">
    <li class="menu-item">
      <a href="#menu-item-1">menu item 1</a>
    </li>
    <li class="menu-item">
      <a href="#menu-item-2">menu item 2</a>
    </li>
  </ul>
  <ul class="pagination flex-1">
    <li class="pagination-item">
      <a href="/">page 1</a>
    </li>
    <li class="pagination-item">
      <a href="/">page 2</a>
    </li>
  </ul>
</div>

```html {}
<button class="button">buttton</button>

<a class="link" href="#">link</a>

<ul class="menu">
  <li class="menu-item">
    <a href="#menu-item-1">menu item 1</a>
  </li>
  <li class="menu-item">
    <a href="#menu-item-2">menu item 2</a>
  </li>
</ul>

<ul class="pagination">
  <li class="pagination-item">
    <a href="/page-1">page 1</a>
  </li>
  <li class="pagination-item">
    <a href="/page-2">page 2</a>
  </li>
</ul>
```



## Why made it this way?
Not long ago, an elegant CSS tool [Tailwindcss](https://tailwindcss.com/){class="ro-link ro-link-doc"} was created for building up CSS frameworks and themes. It hopes us to make the most of the provided "fragmented utils" to create component templates. This is a very good approach for theming purposes. Besides, with another sets of configurations (`tailwind.config.js`) we could easily control the dimensions of the "fragmented utils".

```html {}
<div class="bg-white rounded-lg p-6">
  <img class="h-16 w-16 rounded-full mx-auto" src="avatar.jpg">
  <div class="text-center">
    <h2 class="text-lg">Some One</h2>
    <div class="text-purple-500">Customer Support</div>
    <div class="text-gray-600">someone@example.com</div>
    <div class="text-gray-600">(555) 765-4321</div>
  </div>
</div>
```

However when the project gets larger, we will encounter something that looks like this. One component with a lot of "modifiers" within the class attribute. This loses readibility and makes the template chunky.

```html {}
<a href="/" class="transition-all ease-in-out duration-150 no-underline rounded-lg px-4 md:px-5 xl:px-4 py-3 md:py-4 xl:py-3 bg-teal-500 hover:bg-teal-600 md:text-lg xl:text-base text-white font-semibold leading-tight shadow-md">Home</a>
```

To recover the readibility and maintainability, it's better to compose these utils into a class with [Tailwindcss](https://tailwindcss.com/){class="ro-link ro-link-doc"}&nbsp; `@apply` function. And what's more, you could even create a parent class with very minimal and trimmed styles to let its descendents to inherit the atrributes. This is how **Rotala** gained the inspiration.

```css
.link {
  @apply transition-all;
  @apply ease-in-out;
  @apply duration-150;
  @apply no-underline;
}

.link.link-home {
  @apply rounded-lg;
  @apply px-4 md:px-5 xl:px-4;
  @apply py-3 md:py-4 xl:py-3;
  @apply bg-teal-500 hover:bg-teal-600;
  @apply md:text-lg xl:text-base;
  @apply text-white;
  @apply font-semibold;
  @apply leading-tight;
  @apply shadow-md;
}
```
```html {}
<a href="/" class="link link-home">Home</a>
```


In a manner of speaking, **Rotala** is rather a normal practice of [Tailwindcss](https://tailwindcss.com/){class="ro-link ro-link-doc"} theming by trimming the components to the minimum viable styles. Yet, it utilizes the best tools in hand to make the framework as customizable as possible.
<br>
<br>



## Extensions
Since **Rotala** core only provides the "trimmed" components, we need more tools to enhence the framework utility. Relying on communities and 3rd parties seems a pretty good idea. So, in the end, the inspiration of "extensions" came right out after imitating [Gatsbyjs](https://www.gatsbyjs.org/){class="ro-link ro-link-doc"} and [Gridsome](https://gridsome.org/){class="ro-link ro-link-doc"} about how they built their beautiful plugin pages.

- Learn how to extend **Rotala** with [extension](/docs/extension){class="ro-link ro-link-doc"}
- Check out the [extension library](/extensions){class="ro-link ro-link-doc"}
<br>
<br>


## Source files
#### style.pcss
The style files are ended with `.pcss` extension. We use `@apply` functions everywhere in the source file. Some of the stylings are not yet part of [Tailwindcss](https://tailwindcss.com/){class="ro-link ro-link-doc"}, so they are kept pure CSS format.

```css {}
/* style/base/typography.pcss */

abbr[title] {
  @apply border-b border-dotted;
  @apply no-underline;

  cursor: help;
}
```



#### entry files
Like any other preprocessor based CSS project, we compile the source into pure CSS with entry files that gather all related sources.

- style/base.pcss `// typography etc.`{class="text-gray-600 bg-transparent"}
- style/components.pcss `// button menu avatar etc.`{class="text-gray-600 bg-transparent"}
- style/main.pcss `// base + components`{class="text-gray-600 bg-transparent"}
- style/prefix.pcss `// class name prefix: my-button`{class="text-gray-600 bg-transparent"}

```css {}
/* For instance */
/* style/base.pcss */

@import "./base/general.pcss";
@import "./base/typography.pcss";
```



## Browser support
The following browsers are what **Rotala** is targeting on. It's quite difficult to allow CSS on various environments. To make things easier, **Rotala** supports very modern browsers.

<div class="flex flex-wrap items-center justify-between">
  <figure class="py-4 sm:w-auto w-1/3">
    <img class="mx-auto" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/chrome/chrome.svg?sanitize=true" width="50" alt="Chrome">
    <caption class="block mx-auto text-gray-700 py-4">
      Last 4
    </caption>
  </figure>
  <figure class="py-4 sm:w-auto w-1/3">
    <img class="mx-auto" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/firefox/firefox.svg?sanitize=true" width="50" alt="Firefox">
    <caption class="block mx-auto text-gray-700 py-4">
      ESR
    </caption>
  </figure>
  <figure class="py-4 sm:w-auto w-1/3">
    <img class="mx-auto" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/safari-ios/safari-ios.svg?sanitize=true" width="50" alt="Safari">
    <caption class="block mx-auto text-gray-700 py-4">
      Last 4
    </caption>
  </figure>
  <figure class="py-4 sm:w-auto w-1/3">
    <img class="mx-auto" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/edge/edge.svg?sanitize=true" width="50" alt="Edge">
    <caption class="block mx-auto text-gray-700 py-4">
      12+
    </caption>
  </figure>
  <figure class="py-4 sm:w-auto w-1/3">
    <img class="mx-auto" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/archive/internet-explorer_9-11/internet-explorer_9-11.svg?sanitize=true" width="50" alt="IE">
    <caption class="block mx-auto text-gray-700 py-4">
      11+
    </caption>
  </figure>
  <figure class="py-4 sm:w-auto w-1/3">
    <img class="mx-auto" src="https://raw.githubusercontent.com/alrra/browser-logos/master/src/opera/opera.svg?sanitize=true" width="50" alt="Opera">
    <caption class="block mx-auto text-gray-700 py-4">
      Last 4
    </caption>
  </figure>
</div>

```browserslist {}
# .browserslistrc

> 1%
last 4 Chrome versions
Edge >= 12
Firefox ESR
last 4 Safari versions
last 4 Opera versions
Explorer >= 11
```
