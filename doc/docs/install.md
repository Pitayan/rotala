---
title: Install
order: 2
link: /docs/install
slug: install
section: Getting Started
---

<script>
export default {
  data () {
    return {
      githubUrl: process.env.GRIDSOME_ROTALA_GITHUB,
      releaseUrl: process.env.GRIDSOME_ROTALA_GITHUB + '/releases'
    }
  }
}
</script>


Get to the most comfortable way of installing the style set. `CDN` and `Pre-built` are compiled css files. They are very helpful for prototyping purposes. If you want to build from scrach for better customizability, install the framework with a `package manager`.
<br>
<br>

## Package manager
It is recommended to install files using a package manager `yarn` or `npm`.

```shell {}
yarn add rotala

npm install rotala
```



## CDN
The compiled files are hosted on [unpkg](https://unpkg.com/){class="ro-link ro-link-doc"}.

<a class="button button-primary" target="_blank" href="https://unpkg.com/rotala">Download from unpkg</a>

```html {}
<!-- rotala core -->
<link rel="stylesheet" href="https://unpkg.com/rotala/dist/rotala.css">

<!-- rotala css icons -->
<link rel="stylesheet" href="https://unpkg.com/rotala-extension-css-icon/dist/icon.thin.css">
<link rel="stylesheet" href="https://unpkg.com/rotala-extension-css-icon/dist/icon.thick.css">

<!-- rotala default theme -->
<link rel="stylesheet" href="https://unpkg.com/rotala-theme-default-light/dist/theme.css">
```



## Pre-built
Start quickly with compiled and minified source. You can also download the official packages from the
<a class="ro-link ro-link-doc" target="_blank" :href="githubUrl">Github repository</a>.

<a class="button button-primary" target="_blank" :href="releaseUrl">Download Source</a>

```html {}
<!-- rotala core -->
<link rel="stylesheet" href="rotala.css">

<!-- rotala css icons -->
<link rel="stylesheet" href="icon.thin.css">
<link rel="stylesheet" href="icon.thick.css">

<!-- rotala default theme -->
<link rel="stylesheet" href="theme.css">
```


