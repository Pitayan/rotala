---
title: Modal
link: /docs/modal/
slug: modal
section: Components
---

import modal from '~/components/docs/modal'

<script>
export default {
  data () {
    return {
      background: 'rgba(0,0,0,.25)',
      scrollable: 'body',
      size: 960,
      open: false
    }
  }
}
</script>

<modal
  :style="{ background }"
  :open.sync="open"
  :modal-classes="{ open, ['overflow-y-auto']: scrollable == 'container' }"
  container-classes="bg-white rounded"
  :container-style="{
    maxWidth: `${size}px`,
    maxHeight: scrollable == 'container' ? 'initial' : ''
  }"
  :scrollable="scrollable">
  <template #head>
    <h3>Title</h3>
    <i class="ro-icon ro-icon-close cursor-pointer ml-auto" @click.self="open = false"></i>
  </template>
  <template #body>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu risus cursus, dignissim ex sit amet, rhoncus risus. Nulla condimentum ornare felis sit amet mollis. Integer sit amet ipsum et arcu malesuada mollis sit amet eu nisl. Integer ullamcorper felis non risus pulvinar, at accumsan erat rhoncus. Donec sed enim ut enim cursus eleifend et eu nisl. Sed finibus ultricies tristique. Phasellus ut magna id ligula dignissim maximus. Duis ultricies velit eu ante viverra, in volutpat leo viverra. Integer pharetra augue quis fringilla imperdiet. Aliquam id mollis elit, quis accumsan dui. Aenean ac arcu vitae nisl volutpat ornare vel nec diam. Duis accumsan auctor tristique. Donec id mi at turpis fringilla auctor.</p>
    <p>Fusce sed leo pharetra, efficitur urna ut, porta augue. Phasellus malesuada lobortis semper. Vivamus a urna nec risus congue fringilla. Sed sit amet diam et purus viverra fermentum quis sed leo. Ut tristique at odio ac mollis. Proin sollicitudin at felis sed elementum. Proin sodales neque commodo mauris aliquam, eget scelerisque leo placerat. Vestibulum id est ac velit efficitur convallis eu non felis. Donec ac porta arcu, a finibus ex. Praesent efficitur consectetur ipsum, sed porta purus semper non. Maecenas enim tortor, fermentum ut mauris eu, hendrerit gravida quam. Curabitur quis ligula et est viverra vulputate eget rhoncus ligula. Ut tincidunt mollis bibendum. Duis eu lorem at sapien rhoncus volutpat ut a nibh. In mi justo, gravida placerat sodales nec, lobortis eget lectus.</p>
    <p>Donec mattis non dolor quis dignissim. Donec eu felis eu diam tincidunt facilisis eu sed ligula. Vestibulum vitae placerat eros. Quisque semper placerat sem vel feugiat. Nulla id tortor non orci consequat placerat et vel augue. Etiam nisi dolor, condimentum sit amet rutrum nec, cursus id erat. Pellentesque aliquam turpis eget vehicula congue. Sed sollicitudin felis et facilisis porta. Praesent eget vulputate elit. Pellentesque ligula neque, finibus vitae semper in, lacinia ac urna.</p>
    <p>Curabitur gravida orci gravida, mattis ex tincidunt, viverra diam. Integer ut luctus neque, vel rhoncus ex. In non velit enim. Cras ultricies, justo vel feugiat tincidunt, dolor dui consequat tortor, ut iaculis diam enim quis diam. Cras ac facilisis neque, ut aliquam urna. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nam vulputate arcu orci, ac porttitor ex facilisis nec. Praesent tempus nisi ante. Suspendisse lobortis justo eu lacus faucibus, eu imperdiet dui lacinia. Integer placerat, ligula in laoreet egestas, velit orci hendrerit tortor, vitae malesuada ligula tortor a lacus. Curabitur tempus leo a sem blandit, quis convallis purus eleifend.</p>
    <p>Morbi vitae nulla interdum, convallis nisl non, mollis odio. Aenean pharetra nunc at justo suscipit consequat. Sed et posuere lorem, eget fringilla diam. Duis laoreet massa nec velit suscipit malesuada. Pellentesque venenatis varius dui id fermentum. Aenean non bibendum ligula, interdum tristique purus. Duis sed finibus velit. Curabitur quis egestas odio, a porttitor nisi. Donec pellentesque efficitur sem eget suscipit. Nunc nec tempus sem. Maecenas feugiat, erat sed lacinia volutpat, lorem tortor dictum turpis, et accumsan elit quam eget magna.</p>
  </template>
  <template #footer>
    <button class="button" type="button" @click="open = false">Cancel</button>
    <button class="button bg-gray-300" type="button" @click="open = false">Submit</button>
  </template>
</modal>


A overlayer dialog component
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
      <td>.modal</td>
      <td>
        The modal component
      </td>
    </tr>
    <tr>
      <td>.modal-container</td>
      <td>
        The modal container with a default max-width of <code>960px</code>
      </td>
    </tr>
    <tr>
      <td>.modal-head</td>
      <td>
        The modal content head.
      </td>
    </tr>
    <tr>
      <td>.modal-body</td>
      <td>
        The modal conten body.
      </td>
    </tr>
    <tr>
      <td>.modal-footer</td>
      <td>
        The modal content footer.
      </td>
    </tr>
    <tr>
      <td>
        <p>.open</p>
        <p>:target</p>
      </td>
      <td>
        The switch to control modal open/close
      </td>
    </tr>
    <tr>
      <td>
        .is-modal-open
      </td>
      <td>
        A semantic class to attch on <code>body</code> element to restrict scroll behavior
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>

#### default
The default modal container's background color is transparent. You may paint the color yourself.

<div>
  <button class="button text-gray-700 bg-gray-300" type="button" @click="open = true">open modal</button>
</div>
<br>
<br>

```html {}
<div class="modal" style="background: rgba(0,0,0,.25)">
  <div class="modal-container bg-white">
    <div class="modal-head">
      <!-- head content -->
    </div>
    <div class="modal-body">
      <!-- body content -->
    </div>
    <div class="modal-footer">
      <!-- footer content -->
    </div>
  </div>
</div>
```


#### container size
Default container width is `960px`.

<div class="flex items-center my-4">
  <label class="font-bold">width: </label>
  <input type="number" class="input border-b border-solid border-gray-300 mx-2 w-32" v-model="size" />
</div>

<div>
  <button class="button text-gray-700 bg-gray-300" type="button" @click="open = true">open modal</button>
</div>
<br>
<br>

```html {}
<div class="modal" style="background: rgba(0,0,0,.25)">
  <div class="modal-container bg-white" style="width: 320px">
    <div class="modal-head">
      <!-- head content -->
    </div>
    <div class="modal-body">
      <!-- body content -->
    </div>
    <div class="modal-footer">
      <!-- footer content -->
    </div>
  </div>
</div>
```


#### scrollable container/body
When the content is longer than the screen height, the `.modal-body` becomes scrollable by default. Yet you could also make the `.modal-container` scrollable with a bit more changes.

<form class="radio-group flex flex-wrap">
  <label class="radio">
    <input type="radio" value="body" v-model="scrollable" name="scrollable" checked />
    scrollable modal-body
  </label>
  <label class="radio">
    <input type="radio" value="container" v-model="scrollable" name="scrollable" />
    scrollable modal-container
  </label>
</form>
<br>
<br>

<div>
  <button class="button text-gray-700 bg-gray-300" type="button" @click="open = true">open modal</button>
</div>
<br>
<br>

```html {}
<div class="modal overflow-y-auto" style="background: rgba(0,0,0,.25)">
  <div class="modal-container bg-white" style="max-height: initial">
    <div class="modal-head">
      <!-- head content -->
    </div>
    <div class="modal-body">
      <!-- body content -->
    </div>
    <div class="modal-footer">
      <!-- footer content -->
    </div>
  </div>
</div>
```