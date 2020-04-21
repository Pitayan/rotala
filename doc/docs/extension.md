---
title: Extension
order: 4
link: /docs/extension
slug: extension
section: Getting Started
---

Contribute to **Rotala** extension library to enhence the framework.
<br>
<br>

## Kick-start
A **Rotala** extension is quite straightforward. Before start, you'll need to refer to [docs/build](/docs/build){class="link link-doc"} to learn more about compiling **Rotala** style sets.

Make sure to create an pleasing `README` file under the project. Follow the [npm docs](https://docs.npmjs.com/packages-and-modules/contributing-packages-to-the-registry){class="link link-doc" target="_blank"} to learn about creating/publishing a package

```shell
# initialize
npm init your_project_folder

# publish
npm publish
```

```shell
# Here is an example of the project folder structure.
dist/
docs/
    index.html
style/
    components/
        button.pcss
        avatar.pcss
package.json
.browserslistrc
...
```


## naming
How to name your extension is all up to you. However, it's recommended to name together with the utility of your extension to improve its explicitness. Here are some preferrable naming conventions:
<br>
<br>

- `rotala-theme-*` -- used for a customized theme by extending the **Rotala** core style sets.
  - Example: [rotala-theme-default-light](/extensions/rotala-theme-default-light){class="link link-doc"}


- `rotala-extension-*` -- used for a any general type of extension. It could also be an extra style sets that **Rotala** doesn't have yet.
  - Example: [rotala-extension-css-icon](/extensions/rotala-extension-css-icon){class="link link-doc"}

<br>
<br>

## keywords
Make sure that you included the following keywords in your extension's `package.json` file.
- `rotala`
- `rotala-extension`
- `rotala-theme` (include this keyword if your extension is a theme)

```json
// package.json
{
  "name": "rotala-theme-superb",
  "description": "a superb rotala theme",
  "keywords": [
    "rotala",
    "rotala-extension",
    "rotala-theme"
  ],
  ...
}
```
