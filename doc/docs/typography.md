---
title: Typography
date: 2020-03-17 07:42:34
link: /docs/typography/
slug: typography
section: Elements
---
Typography contains default styles of headings semantic text list etc.

## Headings
<h1 class="h1 mb-4">H1 Heading <span class="bg-gray-200 rounded py-1 px-2">40px</span></h1>
<h2 class="h2 pt-0 mt-0 mb-4">H2 Heading <span class="bg-gray-200 rounded py-1 px-2">32px</span></h2>
<h3 class="h3 mb-4">H3 Heading <span class="bg-gray-200 rounded py-1 px-2">28px</span></h3>
<h4 class="h4 mb-4">H4 Heading <span class="bg-gray-200 rounded py-1 px-2">24px</span></h4>
<h5 class="h5 mb-4">H5 Heading <span class="bg-gray-200 rounded py-1 px-2">20px</span></h5>
<h6 class="h6 mb-4">H6 Heading <span class="bg-gray-200 rounded py-1 px-2">16px</span></h6>

```html {}
<h1>H1 Heading</h1>
<h1 class="h1">H1 Heading</h1>
<h2 class="h2">H2 Heading</h2>
<span class="h2">H2 Heading</span>
<div class="h3">H3 Heading</div>
```

## Parapraphs
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>

```html
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
```

## Quotes
<blockquote>
  <p>Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.</p>
  <cite>- Steve Jobs</cite>
</blockquote>

```html
<blockquote>
  <p>Your time is limited, so don’t waste it living someone else’s life. Don’t be trapped by dogma – which is living with the results of other people’s thinking.</p>
  <cite>- Steve Jobs</cite>
</blockquote>
```

## Address
<address><strong>Rotala, Inc.</strong>
  <div><span>Green Office</span><br /></div>
  <div><span>1-1 Alpha, Beta, Somewhere</span><br /></div>
  <div><span>+00-11-2222-3333 (Main)</span><br /></div>
  <a class="link" href="mailto:first.last@example.com">first.last@example.com</a>
</address>

```html
<address>
  <div>Green Office</div><br />
  <div>1-1 Alpha, Beta, Somewhere</div><br />
</address>
```

## Semantic Elements
<div class="flex flex-wrap">
  <div class="w-1/2">
    <div class="my-4">
      <abbr title="Internationalization">I18N</abbr><code class="ml-2">abbr</code>
    </div>
    <div class="my-4">
      <strong>Bold</strong><code class="ml-2">strong</code><code class="ml-2">b</code>
    </div>
    <div class="my-4">
      <cite>Citation</cite><code class="ml-2">cite</code>
    </div>
    <div class="my-4">
      <code>Hello World!</code><code class="ml-2">code</code>
    </div>
    <div class="my-4">
      <del>Deleted</del><code class="ml-2">del</code>
    </div>
    <div class="my-4">
      <em>Emphasis</em><code class="ml-2">em</code>
    </div>
    <div class="my-4">
      <i>Italic</i><code class="ml-2">i</code>
    </div>
    <div class="my-4">
      <ins>Inserted</ins><code class="ml-2">ins</code>
    </div>
    <div class="my-4">
      <kbd>Ctrl + S</kbd><code class="ml-2">kbd</code>
    </div>
  </div>
  <div class="w-1/2">
    <div class="my-4">
      <mark>Highlighted</mark><code class="ml-2">mark</code>
    </div>
    <div class="my-4">
      <ruby>漢
        <rt>kan</rt>字
        <rt>ji</rt>
      </ruby><code class="ml-2">ruby</code>
    </div>
    <div class="my-4">
      <s>Strikethrough</s><code class="ml-2">s</code>
    </div>
    <div class="my-4">
      <samp>Sample</samp><code class="ml-2">samp</code>
    </div>
    <div class="my-4">
      Text <sub>Subscripted</sub><code class="ml-2">sub</code>
    </div>
    <div class="my-4">
      Text <sup>Superscripted</sup><code class="ml-2">sup</code>
    </div>
    <div class="my-4">
      <time>20:00</time><code class="ml-2">time</code>
    </div>
    <div class="my-4">
      <u>Underline</u><code class="ml-2">u</code>
    </div>
    <div class="my-4">
      <var>x</var> =
      <var>y</var> + 2<code class="ml-2">var</code>
    </div>
  </div>
</div>

## Code
<div class="my-6">
    <pre><code data-lang="HTML"><span class="">&lt;!-- code snippets --&gt;</span>
<kbd>F12</kbd>
<span>&lt;p&gt;</span><span>This is an example</span><span>&lt;/p&gt;</span>
<span>&lt;a&gt;</span><span>This is an example</span><span>&lt;/a&gt;</span>
<span>&lt;span&gt;</span><span>This is an example</span><span>&lt;/span&gt;</span>
<span>&lt;b&gt;</span><span>This is an example</span><span>&lt;/b&gt;</span>
    </code></pre>
</div>

## Lists
<div class="flex flex-wrap w-full">
  <div class="sm:w-1/3 w-1/2">
    <ul>
      <li>List Item 1</li>
      <li>List Item 2
        <ul>
          <li>List Sub-Item 1</li>
          <li>List Sub-Item 2</li>
        </ul>
      </li>
      <li>List Item 3</li>
      <li>List Item 4</li>
      <li>List Item 5</li>
    </ul>
  </div>
  <div class="sm:w-1/3 w-1/2">
    <ol>
      <li>List Item 1</li>
      <li>List Item 2
        <ol>
          <li>List Sub-Item 1</li>
          <ol>
            <li>List Sub-Item 1</li>
          </ol>
        </ol>
      </li>
      <li>List Item 3</li>
      <li>List Item 4</li>
      <li>List Item 5</li>
    </ol>
  </div>
  <div class="sm:w-1/3 w-1/2">
    <dl>
      <dt>Item 1</dt>
      <dd>Description for Item 1</dd>
      <dt>Item 2</dt>
      <dd>Description for Item 2</dd>
      <dt>Item 3</dt>
      <dd>Description for Item 3</dd>
    </dl>
  </div>
</div>

```html
<!-- Unordered list -->
<ul>
  <li>List Item 1</li>
  <li>List Item 2</li>
</ul>

<!-- Ordered List -->
<ol>
  <li>List Item 1
    <ol>
      <li>List Sub-Item 1</li>
      <ol>
        <li>List Sub-Item 1</li>
      </ol>
    </ol>
  </li>
</ol>

<!-- Description List -->
<dl>
  <dt>Item 1</dt>
  <dd>Description for Item 1</dd>
</dl>
```