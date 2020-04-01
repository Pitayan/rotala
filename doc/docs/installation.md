---
title: Installation
date: 2020-03-15 07:42:34
link: /docs/
slug: installation
section: Getting Started
---

**Rotala** is built on top of [Tailwindcss](https://tailwindcss.com){class="link link-doc"} and written in morden CSS language that borrowed some syntax features from `SCSS`.

## Source Files
Compiling Rotala on your own pipeline with the source file needs the following additional tools:
- Postcss
- Tailwindcss

Refer to [Theme Configuration](/docs/theme-configuration){class="link link-doc"} for your own building purpose.

<button class="button button-primary">Download Source</button>

## Compiled Output
The compiled files are ready to use. Put the following files into your project folder.
- Unstyled components: `rotala.trim.css`
- Themed components: `rotala.css`

<button class="button button-primary">Download Compiled</button>


## Package Manager
**Rotala** css framework can be installed using pacakge managers `yarn` or `npm`.

```bash
yarn add rotala

npm install rotala
```

## Inline CDN
Use CDN delivered compiled files to skip importing files to your project. You may also specify the targeted version.

```html
<!-- Latest -->
<link rel="stylesheet" href="https://unpkg.com/rotala.css/dist/rotala.css">
<link rel="stylesheet" href="https://unpkg.com/rotala.css/dist/rotala.trim.css">

<!-- Versioned -->
<link rel="stylesheet" href="https://unpkg.com/rotala.css/dist/1.0/rotala.css">
<link rel="stylesheet" href="https://unpkg.com/rotala.css/dist/1.0/rotala.trim.css">
```
