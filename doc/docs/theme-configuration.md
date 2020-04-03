---
title: Theme Configuration
date: 2020-03-18 07:42:34
link: /docs/theme-configuration/
slug: theme-configuration
section: Getting Started
---
Tune the **Rotala** components to meet your project demand.

## Source Folder
All resources for compile are located within `src/` folder.<br>
`base` and `components` contain the style source which all have an extension name of `pcss` as it's written with [PostCSS](https://postcss.org){class="link link-doc"} plugins.<br>
`vars` has a `js` file to maintain the theme variables used by [Tailwindcss](https://tailwindcss.com/){class="link link-doc"} in later compile process.<br>
`main.pcss` is the default theme. `trim.pcss` is the trimmed theme.

```bash
|-- src/
    |-- base/
        |-- all.pcss
        |-- general.pcss
        |-- typography.pcss
    |-- components/
        |-- accordion/
            |-- accordion.pcss
            |-- accordion.trim.pcss
        |-- avatar/
            |-- avatar.pcss
            |-- avatar.trim.pcss
        |-- badge/
            |-- badge.pcss
            |-- badge.trim.pcss
        |-- ...
        |-- all.pcss
        |-- all.trim.pcss
        |-- prefix.pcss
    |-- vars/
        |-- index.js
    |-- main.pcss
    |-- trim.pcss
```

## Prefix
**Rotala** uses [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars){class="link link-doc"} to control the prefix of the class name for each component. You can add a prefix to avoid conflict in some cases.

```js
const vars = require('postcss-simple-vars')

module.exports = {
  ...
  plugins: [
    ...
    vars({
      variables: {
        prefix: 'your-prefix-here'
      }
    })
  ]
}
```

For further customization on some of the components, change the variables in `./src/prefix.pcss`

```scss
/* Prefix */
$link: $(prefix)link;
$button: $(prefix)button;
$checkbox: $(prefix)checkbox;
$form: $(prefix)form;
$hr: $(prefix)hr;
...
```


## Style Imports
**Rotala** comes with an "already-assembled" stylesheet `rotala.css`. It is created upon a "blank" base -- `rotala.trim.css` which only contains very rudimentary component styles for extending from scratch. Both extending from `rotala.trim.css` and `rotala.css` are preferrable regarding your tuning purposes.<br />

```scss
// Extend the theme by following the Tainwindcss style guides
@charset "UTF-8";
@import "tailwindcss/base";
@import "rotala/src/base/all.pcss";
@import "your/base/override.pcss";

@import "tailwindcss/components";
@import "rotala/src/prefix.pcss";
@import "rotala/src/components/all.trim.pcss";
@import "your/theme/style.pcss";

@import "tailwindcss/utilities";

-------

// Import styles on demand
@charset "UTF-8";
@import "tailwindcss/base";
@import "rotala/src/base/all.pcss";

@import "tailwindcss/components";
@import "rotala/src/prefix.pcss";
@import "rotala/src/components/button/button.trim.pcss";

@import "tailwindcss/utilities";

```

## Theme Variables
**Rotala** extends a few tailwind utilities in `src/vars/index.js` to achieve its implementation. For customization, you need to override these variables and apply them in `tailwind.config.js`.

```js
// tailwind.config.js
// For example, change the primary color
const { variables, plugins } = require('rotala/src/vars')

variables.colors.primary = {
  100: '#ECF7F1',
  200: '#D0EADC',
  300: '#B4DDC7',
  400: '#7CC49E',
  500: '#44AA74',
  600: '#3D9968',
  700: '#296646',
  800: '#1F4D34',
  900: '#143323'
}

module.exports = {
  theme: {
    extend: {
      ...variables
    }
  },
  plugins: plugins
}
```

## Sizing
Default settings for spacing of [Tailwindcss](https://tailwindcss.com){class="link link-doc"} are taken within **Rotala**. So size unit of `rem` and `px` are used together for layouting and positioning.
<br><br>
***Note:*** global font size affects quite a few components.
<br><br>
To change the sizing, override the default spacing/sizing.

```js
// tailwind.config.js
module.exports = {
  theme: {
    spacing: {
      '1': '.125rem',
      '2': '.25rem',
      '3': '.5rem',
      '4': '1rem',
      '5': '2rem',
      '6': '4rem',
      ...
    }
  }
}
```

## Colors
**Rotala** extends default [Tailwindcss](https://tailwindcss.com){class="link link-doc"} colors with overriding the `gray` color. The color variables are written in `src/vars/index.js`.
<br>
<br>
<h5 class="h5">Primary</h5>
<div class="flex flex-wrap w-full mx-4">
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-primary-100"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">100</div>
      <div class="mt-1 font-normal opacity-75">#ECF7F1</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-primary-200"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">200</div>
      <div class="mt-1 font-normal opacity-75">#D0EADC</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-primary-300"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">300</div>
      <div class="mt-1 font-normal opacity-75">#B4DDC7</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-primary-400"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">400</div>
      <div class="mt-1 font-normal opacity-75">#B4DDC7</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-primary-500"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">500</div>
      <div class="mt-1 font-normal opacity-75">#B4DDC7</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-primary-600"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">600</div>
      <div class="mt-1 font-normal opacity-75">#3D9968</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-primary-700"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">700</div>
      <div class="mt-1 font-normal opacity-75">#3D9968</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-primary-800"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">800</div>
      <div class="mt-1 font-normal opacity-75">#3D9968</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-primary-900"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">900</div>
      <div class="mt-1 font-normal opacity-75">#3D9968</div>
    </div>
  </div>
</div>


<h5 class="h5 mt-6">Secondary</h5>
<div class="flex flex-wrap w-full mx-4">
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-secondary-100"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">100</div>
      <div class="mt-1 font-normal opacity-75">#F6F5F5</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-secondary-200"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">200</div>
      <div class="mt-1 font-normal opacity-75">#E8E6E7</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-secondary-300"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">300</div>
      <div class="mt-1 font-normal opacity-75">#DAD7D8</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-secondary-400"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">400</div>
      <div class="mt-1 font-normal opacity-75">#F6F5F5</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-secondary-500"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">500</div>
      <div class="mt-1 font-normal opacity-75">#A29A9D</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-secondary-600"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">600</div>
      <div class="mt-1 font-normal opacity-75">#928B8D</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-secondary-700"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">700</div>
      <div class="mt-1 font-normal opacity-75">#615C5E</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-secondary-800"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">800</div>
      <div class="mt-1 font-normal opacity-75">#494547</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-secondary-900"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">900</div>
      <div class="mt-1 font-normal opacity-75">#312E2F</div>
    </div>
  </div>
</div>


<h5 class="h5 mt-6">Gray</h5>
<div class="flex flex-wrap w-full mx-4">
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-gray-100"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">100</div>
      <div class="mt-1 font-normal opacity-75">#F9F9F9</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-gray-200"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">200</div>
      <div class="mt-1 font-normal opacity-75">#EFEFEF</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-gray-300"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">300</div>
      <div class="mt-1 font-normal opacity-75">#E5E5E5</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-gray-400"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">400</div>
      <div class="mt-1 font-normal opacity-75">#D2D2D2</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-gray-500"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">500</div>
      <div class="mt-1 font-normal opacity-75">#BEBFBE</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-gray-600"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">600</div>
      <div class="mt-1 font-normal opacity-75">#ABACAB</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-gray-700"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">700</div>
      <div class="mt-1 font-normal opacity-75">#727372</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-gray-800"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">800</div>
      <div class="mt-1 font-normal opacity-75">#565656</div>
    </div>
  </div>
  <div class="flex items-center mt-5 sm:w-1/3 w-1/2">
    <div class="h-12 w-12 rounded-sm shadow-inner bg-gray-900"></div>
    <div class="ml-2 text-gray-800 text-xs leading-none pl-1">
      <div class="font-semibold">900</div>
      <div class="mt-1 font-normal opacity-75">#393939</div>
    </div>
  </div>
</div>
<br>

## Compile with Postcss
To compile **Rotala** themes, you need the following postcss tools which are the default dependencies.
- [postcss-import](https://github.com/postcss/postcss-import){class="link link-doc"}
- [postcss-nested](https://github.com/postcss/postcss-nested){class="link link-doc"}
- [postcss-simple-vars](https://github.com/postcss/postcss-simple-vars){class="link link-doc"}
- [Tailwindcss](https://tailwindcss.com){class="link link-doc"}
- [autoprefixer](https://github.com/postcss/autoprefixer){class="link link-doc"}
- [cssnano](https://github.com/cssnano/cssnano){class="link link-doc"}

Take an example of `postcss.config.js`. THis is how **Rotala** uses postcss plugins to play the magic.

```js
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
            banner: 'Rotala.css v*** @copyright 2020 by Daiyanze'
          }),
          require('cssnano')
        ]
      : []
  ]
}
```

For your own customized build, it's preferrable to start with a simple postcss configuration template like this. `postcss-import`{class="mr-1"} `postcss-nested`{class="mr-1"} `postcss-simple-vars`{class="mr-1"} `tailwindcss`{class="mr-1"} are the minimum requirements to compile **Rotala** themes.

```js
module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-simple-vars')({
      variables: {
        prefix: ''
      }
    }),
    require('tailwindcss')
  ]
}
```