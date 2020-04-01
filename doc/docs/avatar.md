---
title: Avatar
date: 2020-03-18 07:42:34
link: /docs/avatar/
slug: avatar
section: Components
---
Avatar is user profile image.

## trim.css
2 default features:
- squared picture
- initials
<br>
<br>

#### Squared Picture

<figure class="trim-avatar m-2">
  <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
</figure>
<figure class="trim-avatar m-2">
  <img src="/avatar-2.svg" style="background: turquoise;" alt="Avatar">
</figure>
<figure class="trim-avatar m-2">
  <img src="/avatar-3.svg" style="background: palegreen;" alt="Avatar">
</figure>
<figure class="trim-avatar m-2">
  <img src="/avatar-4.svg" style="background: lightsalmon;" alt="Avatar">
</figure>
<figure class="trim-avatar m-2">
  <img src="/avatar-5.svg" style="background: moccasin;" alt="Avatar">
</figure>
<br>

```html {}
<img class="avatar" src="/avatar-1.svg" style="background: pink;" alt="Avatar" />

<!-- or use figure to wrap around img -->
<figure class="avatar">
  <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
</figure>
```
<br>

#### Initials
The `initials` font size can be changed by applying font-size style.

<figure class="trim-avatar m-2 text-2xl" data-initial="rotala"></figure>
<figure class="trim-avatar m-2 text-xl" data-initial="rotala"></figure>
<figure class="trim-avatar m-2 text-base" data-initial="rotala"></figure>
<figure class="trim-avatar m-2 text-sm" data-initial="rotala"></figure>
<figure class="trim-avatar m-2 text-xs" data-initial="rotala"></figure>
<br>
<figure class="trim-avatar m-2 bg-primary-600 text-gray-100 text-2xl" data-initial="rotala"></figure>
<figure class="trim-avatar m-2 bg-primary-600 text-gray-100 text-xl" data-initial="rotala"></figure>
<figure class="trim-avatar m-2 bg-primary-600 text-gray-100 text-base" data-initial="rotala"></figure>
<figure class="trim-avatar m-2 bg-primary-600 text-gray-100 text-sm" data-initial="rotala"></figure>
<figure class="trim-avatar m-2 bg-primary-600 text-gray-100 text-xs" data-initial="rotala"></figure>
<br>

```html {}
<figure class="avatar bg-primary-600 text-gray-100 text-2xl" data-initial="rotala"></figure>
<figure class="avatar bg-primary-600 text-gray-100 text-xl" data-initial="rotala"></figure>
<figure class="avatar bg-primary-600 text-gray-100 text-base" data-initial="rotala"></figure>
<figure class="avatar bg-primary-600 text-gray-100 text-sm" data-initial="rotala"></figure>
<figure class="avatar bg-primary-600 text-gray-100 text-xs" data-initial="rotala"></figure>
```

## theme.css

3 additional features:
- rounded picture
- color status
- icon status

#### Rounded Picture

<figure class="avatar avatar-rounded m-2">
  <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded m-2">
  <img src="/avatar-2.svg" style="background: turquoise;" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded m-2">
  <img src="/avatar-3.svg" style="background: palegreen;" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded m-2">
  <img src="/avatar-4.svg" style="background: lightsalmon;" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded m-2">
  <img src="/avatar-5.svg" style="background: moccasin;" alt="Avatar">
</figure>
<br>

```html {}
<img class="avatar avatar-rounded" src="/avatar-1.svg" style="background: pink;" alt="Avatar" />

<!-- or use figure to wrap around img -->
<figure class="avatar avatar-rounded">
  <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
</figure>
```
<br>

#### Color Status

Use `background color` on `avatar-status` element to change the color status.
<br>
<figure class="avatar m-2 bg-primary-600 text-gray-100" data-initial="busy">
  <i class="avatar-status bg-red-400 p-1 -mb-px text-2xl"></i>
</figure>
<figure class="avatar avatar-rounded m-2 bg-primary-600 text-gray-100" data-initial="busy">
  <i class="avatar-status bg-red-400 text-2xl"></i>
</figure>
<br>

```html {}
<!-- Squared -->
<figure class="avatar m-2 bg-primary-600 text-gray-100" data-initial="busy">
  <i class="avatar-status bg-red-400"></i>
</figure>

<!-- Rounded -->
<figure class="avatar avatar-rounded m-2 bg-primary-600 text-gray-100" data-initial="busy">
  <i class="avatar-status bg-red-400"></i>
</figure>
```
<br>

Color status works properly with `rounded avatar`. However the `squared avatar` color status size needs to be taken care of by applying `padding` or `font size` to the `avatar-status` element so that the color status can strech to the square corner.
<br>
<figure class="avatar m-2 bg-primary-600 text-gray-100" data-initial="Em..">
  <i class="avatar-status bg-red-400"></i>
</figure>
<figure class="avatar m-2 bg-primary-600 text-gray-100" data-initial="Cool">
  <i class="avatar-status bg-red-400 p-2"></i>
</figure>
<br>

```html {}
<!-- Change squared avatar status size using padding -->
<figure class="avatar m-2 bg-primary-600 text-gray-100" data-initial="busy">
  <i class="avatar-status bg-red-400 p-2"></i>
</figure>
```


#### Icon Status

Similar to `color status`, the status can be used with icon.

<figure class="avatar m-2">
  <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
  <img class="avatar-icon" src="/avatar-3.svg" style="background: palegreen;" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded m-2">
  <img src="/avatar-2.svg" style="background: turquoise;" alt="Avatar">
  <img class="avatar-icon" src="/avatar-3.svg" style="background: palegreen;" alt="Avatar">
</figure>

```html {}
<figure class="avatar">
  <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
  <img class="avatar-icon" src="/avatar-3.svg" style="background: turquoise;" alt="Avatar">
</figure>
```

## Sizing
Both `trim` and `default` are sizable by defining the `avatar` element's `width` and `height`. The default `width` and `height` are 64px.
<figure class="avatar m-2 bg-primary-600 text-gray-100 text-3xl" data-initial="64">
  <i class="avatar-status bg-red-400 p-2"></i>
</figure>
<figure class="avatar m-2 bg-primary-600 text-gray-100 text-xl w-12 h-12" data-initial="48">
  <i class="avatar-status bg-green-400"></i>
</figure>
<figure class="avatar m-2 bg-primary-600 text-gray-100 text-base w-8 h-8" data-initial="32">
  <i class="avatar-status bg-orange-400"></i>
</figure>
<figure class="avatar m-2 bg-primary-600 text-gray-100 text-xs w-6 h-6" data-initial="24">
  <i class="avatar-status bg-yellow-400"></i>
</figure>
<figure class="avatar m-2 bg-primary-600 text-gray-100 w-4 h-4" style="font-size: 8px" data-initial="16">
  <i class="avatar-status"></i>
</figure>
<br>
<figure class="avatar avatar-rounded m-2 bg-primary-600 text-gray-100 text-3xl" data-initial="64">
  <i class="avatar-status bg-red-400"></i>
</figure>
<figure class="avatar avatar-rounded m-2 bg-primary-600 text-gray-100 text-xl w-12 h-12" data-initial="48">
  <i class="avatar-status bg-green-400"></i>
</figure>
<figure class="avatar avatar-rounded m-2 bg-primary-600 text-gray-100 text-base w-8 h-8" data-initial="32">
  <i class="avatar-status bg-orange-400"></i>
</figure>
<figure class="avatar avatar-rounded m-2 bg-primary-600 text-gray-100 text-xs w-6 h-6" data-initial="24">
  <i class="avatar-status bg-yellow-400"></i>
</figure>
<figure class="avatar avatar-rounded m-2 bg-primary-600 text-gray-100 w-4 h-4" style="font-size: 8px" data-initial="16">
  <i class="avatar-status"></i>
</figure>
<br>
<figure class="avatar m-2">
  <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
  <i class="avatar-status bg-red-400 p-2"></i>
</figure>
<figure class="avatar w-12 h-12 m-2 text-xl">
  <img src="/avatar-2.svg" style="background: turquoise;" alt="Avatar">
  <i class="avatar-status bg-green-400"></i>
</figure>
<figure class="avatar w-8 h-8 m-2 text-base">
  <img src="/avatar-3.svg" style="background: palegreen;" alt="Avatar">
  <i class="avatar-status bg-orange-400"></i>
</figure>
<figure class="avatar w-6 h-6 m-2 text-xs">
  <img src="/avatar-4.svg" style="background: lightsalmon;" alt="Avatar">
  <i class="avatar-status bg-yellow-400"></i>
</figure>
<figure class="avatar w-4 h-4 m-2" style="font-size: 8px">
  <img src="/avatar-5.svg" style="background: moccasin;" alt="Avatar">
  <i class="avatar-status"></i>
</figure>
<br>
<figure class="avatar avatar-rounded m-2">
  <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
  <img class="avatar-icon" src="/avatar-2.svg" style="background: turquoise;" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded w-12 h-12 m-2">
  <img src="/avatar-2.svg" style="background: turquoise;" alt="Avatar">
  <img class="avatar-icon" src="/avatar-3.svg" style="background: palegreen;" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded w-8 h-8 m-2">
  <img src="/avatar-3.svg" style="background: palegreen;" alt="Avatar">
  <img class="avatar-icon" src="/avatar-4.svg" style="background: lightsalmon;" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded w-6 h-6 m-2">
  <img src="/avatar-4.svg" style="background: lightsalmon;" alt="Avatar">
  <img class="avatar-icon" src="/avatar-5.svg" style="background: moccasin;" alt="Avatar">
</figure>
<figure class="avatar avatar-rounded w-4 h-4 m-2">
  <img src="/avatar-5.svg" style="background: moccasin;" alt="Avatar">
  <img class="avatar-icon" src="/avatar-1.svg" style="background: pink;" alt="Avatar">
</figure>

```html {}
<figure class="avatar avatar-rounded w-12 h-12">
  <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
  <img class="avatar-icon" src="/avatar-2.svg" style="background: turquoise;" alt="Avatar">
</figure>

<!-- sizing with style other than tailwind utils -->
<figure class="avatar avatar-rounded" style="width: 48px; height: 48px">
  <img src="/avatar-1.svg" style="background: pink;" alt="Avatar">
  <img class="avatar-icon" src="/avatar-2.svg" style="background: turquoise;" alt="Avatar">
</figure>
```
