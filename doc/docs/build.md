---
title: Build
order: 3
link: /docs/build
slug: build
section: Getting Started
---

<script>
export default {
  data () {
    return {
      githubUrl: process.env.GRIDSOME_ALGOLIA_GITHUB,
      active: 0
    }
  }
}
</script>

Learn how to configure and compile the **Rotala** resources.
<br>
<br>

## File structure of the source
As a [Monorepo](https://en.wikipedia.org/wiki/Monorepo){class="link link-doc" target="_blank"} project, **Rotala** locate all the resources together with official packages in the same <a class="link link-doc" target="_blank" :href="githubUrl">Github repository</a>.


<table class="table-group table-group-outline">
  <thead>
    <tr>
      <th>Folder</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="align-baseline">
    <tr>
      <td><code>/doc</code></td>
      <td>Contains this document site sources.</td>
    </tr>
    <tr>
      <td><code>/packages</code></td>
      <td>
        Contains <b>Rotala</b> core style set and official packages.
        <ul>
          <li><g-link class="link link-doc" to="/extensions/rotala">Rotala</g-link></li>
          <li><g-link class="link link-doc" to="/extensions/rotala-theme-default-light">Rotala Theme Default Light</g-link></li>
          <li><g-link class="link link-doc" to="/extensions/rotala-extension-css-icon">Rotala Extension CSS Icon</g-link></li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


As for each official package under the source folder, all the source files are comipled into `dist` folder.

<table class="table-group table-group-outline">
  <thead>
    <tr>
      <th>Folder</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>/style</code></td>
      <td>Contains all style related sources.</td>
    </tr>
    <tr>
      <td>
        <code>/dist</code>
      </td>
      <td>Contains Compiled Rotala core css files.</td>
    </tr>
  </tbody>
</table>
<br>
<br>


## Postcss
**Rotala** core only uses [PostCSS](https://postcss.org){class="link link-doc"} and its plugins to compile the source.

#### plugins
The following [PostCSS](https://postcss.org){class="link link-doc"} plugins are already dependencies by default. By installing **Rotala** via a package manager `yarn`&nbsp;or&nbsp;`npm`, you'll have them in your project.

<table class="table-group table-group-outline">
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="align-baseline">
    <tr>
      <td><a class="link link-doc" href="https://github.com/postcss/postcss-import" target="_blank">postcss-import</a></td>
      <td>
        Enables <code>@import</code> keyword
        <pre class="language-css"><code class="language-css"><span class="token atrule">@import</span> "rotala";</code></pre>
      </td>
    </tr>
    <tr>
      <td><a class="link link-doc" href="https://github.com/postcss/postcss-nested" target="_blank">postcss-nested</a></td>
      <td>
        Enables nesting classes
        <pre class="language-css"><code class="language-css"><span class="token selector"><span class="token class">.tab</span></span> <span class="token punctuation">{</span>
  <span class="token selector">.tab-item</span> <span class="token punctuation">{</span>
    ...
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span></code></pre>
      </td>
    </tr>
    <tr>
      <td><a class="link link-doc" href="https://github.com/postcss/postcss-simple-vars" target="_blank">postcss-simple-vars</a></td>
      <td>
        Enables custom variables
        <pre class="language-css"><code class="language-css">$<span class="token property">my-component</span><span class="token punctuation">:</span> </span>a-beautiful-component<span class="token punctuation">;</span></code></pre>
      </td>
    </tr>
    <tr>
      <td><a class="link link-doc" href="https://github.com/postcss/autoprefixer" target="_blank">autoprefixer</a></td>
      <td>
        Apply prefixes based on target browsers
      </td>
    </tr>
    <tr>
      <td><a class="link link-doc" href="https://github.com/cssnano/cssnano" target="_blank">cssnano</a></td>
      <td>
        Minimize your CSS stylesheet
      </td>
    </tr>
    <tr>
      <td><a class="link link-doc" href="https://tailwindcss.com" target="_blank">Tailwindcss</a></td>
      <td>
        Utility first CSS framework
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>



#### configurations
Here is the default [PostCSS](https://postcss.org){class="link link-doc"} configuration for **Rotala** core styles sets.

```js {}
// postcss.config.js

module.exports = {
  map: false,
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-simple-vars')({
      variables: {
        prefix: ''
      }
    }),
    require('tailwindcss'),
    require('autoprefixer'),
    ...process.env.NODE_ENV === 'production'
      ? [
          require('postcss-banner')({
            important: true,
            inline: true,
            banner: 'Rotala.css v0.1 @copyright 2020 by Daiyanze'
          }),
          require('cssnano')
        ]
      : []
  ]
}
```



## Import
It's recommended to customize your own build by introduing the source files into your project. In this way, you can easily extend the styles with the **Rotala** "blank design" components for theming purposes.

#### default
Extend the class easily with [Tailwindcss](https://tailwindcss.com/){class="link link-doc"} utilities.

<button class="button">default</button>
<button class="button text-gray-700 rounded-full hover:bg-gray-300">hover me</button>

```css {}
/* import the rotala core */
@import "rotala";

/* style up component */
/* you can also write pure css within the block */
.button {
  @apply text-gray-700;
  @apply hover:bg-gray-300;
  @apply rounded-full;
}
```


#### on demand
Only need what you want for the project? Simply import the required components to minimize the import size of the package.

<ul class="trim-tab border border-solid border-gray-300 text-gray-700 rounded-full inline-flex">
  <li class="trim-tab-item rounded-full" :class="{ 'bg-gray-300': active == 0 }">
    <a href="#one" @click.self="active = 0">one</a>
  </li>
  <li class="trim-tab-item rounded-full" :class="{ 'bg-gray-300': active == 1 }">
    <a href="#two" @click.self="active = 1">two</a>
  </li>
  <li class="trim-tab-item rounded-full" :class="{ 'bg-gray-300': active == 2 }">
    <a href="#three" @click.self="active = 2">three</a>
  </li>
</ul>

```css {}
/* required styles */
@import "rotala/style/components/tab.pcss";

.tab {
  @apply inline-flex;
  @apply text-gray-700;
  @apply border border-solid border-gray-300;
  @apply rounded-full;

  &-item {
    @apply px-4;
    @apply rounded-full;

    &.active {
      @apply bg-gray-300;
    }
  }
}
```



## Prefix
**Rotala** keeps all of its classes without prefixes by default. To Avoid class name collisions while introducing **Rotala** to your project, it is preferable to add a custom prefix to the existing classes. Prefix is enabled by a [PostCSS](https://postcss.org){class="link link-doc"} plugin [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars){class="link link-doc"}.

```css {}
/* Prefix */
$link: $(prefix)link;
$button: $(prefix)button;
$checkbox: $(prefix)checkbox;
$form-group: $(prefix)form-group;
$hr: $(prefix)hr;
$input: $(prefix)input;
$radio: $(prefix)radio;
$select: $(prefix)select;
...
```

Utilize the [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars){class="link link-doc"} plugin to add your prefix.

```js {}
// postcss.config.js

module.exports = {
  plugins: [
    ...,
    require('postcss-simple-vars')({
      variables: {
        prefix: 'rotala-'
      }
    }),
    ...
  ]
}
```

Then your component classes will turn into the following output after compiling.

```css {}
/* Before */
.button {
  ...
}

.input {
  ...
}

/* After */
.rotala-button {
  ...
}

.rotala-input {
  ...
}

```

