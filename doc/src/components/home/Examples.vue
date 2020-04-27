<template>
  <div class="examples__frame">
    <h3>An easier way to customize themes</h3>
    <p>
      Choose a comfortable way to develop components for your theme
    </p>
    <div class="flex mx-auto justify-center">
      <ul class="ro-menu flex items-center m-2 text-lg">
        <li class="ro-menu-item"
          :class="{ active: index == current }"
          v-for="({ node }, index) in $static.examples.edges"
          :key="index">
          <a href="#" @click.prevent="current = index">
            {{ node.title }}
          </a>
        </li>
      </ul>
    </div>
    <transition name="slide">
      <template v-for="({ node }, index) in $static.examples.edges">
        <div class="examples__code"
          v-if="index == current"
          :key="index">
          <div v-html="node.content" />
        </div>
      </template>
    </transition>
  </div>
</template>

<static-query>
query {
  examples:	allExample (sortBy: "order", order: ASC)  {
  	edges {
  		node {
  			title
    		content
    		id
  		}
  	}
  }
}
</static-query>

<script>

export default {
	data() {
		return {
			current: 0
		}
  }
}

</script>
