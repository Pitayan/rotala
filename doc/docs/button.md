---
title: Button
date: 2020-03-18
link: /docs/button/
slug: button
section: Elements
---
Button includes variant styles and sizes for buttons.

## trim.css
2 default features:
- default simple appearance
- disabled appearance
<br>
<br>

#### default
<button class="trim-button" type="button">Default Button</button>

```html {}
<button class="button" type="button">Button</button>
<input class="button" type="button" value="Button" />
<a class="button" href="#">Button</a>
```

#### default disabled
<button class="trim-button disabled" type="button" disabled>Button</button>

```html {}
<button class="button disabled" type="button" disabled>Button</button>
```

## theme.css
3 extra features:
- 3 variants: `primary`&nbsp;`secondary`&nbsp;`outline`
- loading effect
- disabled appearance for each variant
<br>
<br>

#### variants

<button class="button button-outline m-2" type="button">Outline Button</button>
<button class="button button-primary m-2" type="button">Primary Button</button>
<button class="button button-secondary m-2" type="button">Secondary Button</button>

```html {}
<button class="button button-primary" type="button">Outline Button</button>
<button class="button button-primary" type="button">Primary Button</button>
<button class="button button-secondary" type="button">Secondary Button</button>
```

#### loading
<button class="button loading m-2" type="button">Default Button</button>
<button class="button button-outline loading m-2" type="button">Outline Button</button>
<button class="button button-primary loading m-2" type="button">Primary Button</button>
<button class="button button-secondary loading m-2" type="button">Secondary Button</button>

```html {}
<button class="button loading" type="button">Default Button</button>
<button class="button button-outline loading" type="button">Outline Button</button>
<button class="button button-primary loading" type="button">Primary Button</button>
<button class="button button-secondary loading" type="button">Secondary Button</button>
```

#### variant disabled

<button class="button button-outline disabled m-2" type="button" disabled>Outline Button</button>
<button class="button button-primary disabled m-2" type="button" disabled>Primary Button</button>
<button class="button button-secondary disabled m-2" type="button" disabled>Secondary Button</button>

```html {}
<button class="button button-primary disabled" type="button" disabled>Outline Button</button>
<button class="button button-primary disabled" type="button" disabled>Primary Button</button>
<button class="button button-secondary disabled" type="button" disabled>Secondary Button</button>
```
