---
title: Notification
link: /docs/notification/
slug: notification
section: Components
---
import notification from '~/components/docs/notification/index'
import notificationItem from '~/components/docs/notification/item'

<script>
export default {
  data () {
    return {
      position: 'top-right',
      open: false
    }
  }
}
</script>

<notification :position="position" :container-classes="{ [`bg-white shadow-lg rounded`]: true }">
  <notification-item
    :open.sync="open"
    :container-classes="{ [`bg-white shadow-lg rounded`]: true }" />
</notification>


A notifying component to display messages to the corner of page
<br>
<br>


## Properties
<table class="ro-table-group ro-table-group-outline">
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody class="align-baseline">
    <tr>
      <td>.notification</td>
      <td>
        The notification component
      </td>
    </tr>
    <tr>
      <td>.notification-container</td>
      <td>
        The notification container component to hold its children components with a default max-width of <code>960px</code>
      </td>
    </tr>
    <tr>
      <td>.notification-title</td>
      <td>
        The notification content title.
      </td>
    </tr>
    <tr>
      <td>
        <p>.top-left</p>
        <p>.top-center</p>
        <p>.top-right</p>
        <p>.bottom-left</p>
        <p>.bottom-center</p>
        <p>.bottom-right</p>
      </td>
      <td>
        The position of the notification component to the page
      </td>
    </tr>
    <tr>
      <td>
        <p>.open</p>
        <p>:target</p>
      </td>
      <td>
        The switch to control notification open/close
      </td>
    </tr>
  </tbody>
</table>
<br>
<br>


## Features
#### default
The default notification container's background color is transparent. You may paint the color yourself.

<form class="radio-group flex flex-wrap">
  <label class="radio">
    <input type="radio" value="top-left" v-model="position" name="position" checked />
    top left
  </label>
  <label class="radio">
    <input type="radio" value="top-center" v-model="position" name="position" />
    top center
  </label>
  <label class="radio">
    <input type="radio" value="top-right" v-model="position" name="position" />
    top right
  </label>
</form>
<form class="radio-group flex flex-wrap">
  <label class="radio">
    <input type="radio" value="bottom-left" v-model="position" name="position" />
    bottom left
  </label>
  <label class="radio">
    <input type="radio" value="bottom-center" v-model="position" name="position" />
    bottom center
  </label>
  <label class="radio">
    <input type="radio" value="bottom-right" v-model="position" name="position" />
    bottom right
  </label>
</form>
<br>
<br>

<div>
  <button class="button text-gray-700 bg-gray-300" type="button" @click="open = true">open notification</button>
</div>
<br>
<br>

```html {}
<div class="notification">
  <div class="notification-container bg-white rounded-sm shadow-lg open">
    <div class="notification-title">
      <!-- title -->
    </div>
    <!-- content -->
  </div>
</div>
```

#### stack
Notifications can stack up if there are multiple ones to display

<div>
  <button class="button text-gray-700 bg-gray-300" type="button" @click="$root.$emit('init:notification')">popup notifications</button>
</div>
<br>
<br>

```html {}
<div class="notification">
  <!-- First notification -->
  <div class="notification-container bg-white rounded-sm shadow-lg open">
    <div class="notification-title">
      <!-- title -->
    </div>
    <!-- content -->
  </div>

  ...

  <!-- Last Notification -->
  <div class="notification-container bg-white rounded-sm shadow-lg open">
    <div class="notification-title">
      <!-- title -->
    </div>
    <!-- content -->
  </div>
</div>
```