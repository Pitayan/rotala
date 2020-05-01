<template>
  <form :id="id" class="header-search">
    <label class="ro-input-group relative w-full ml-auto md:max-w-sm">
      <span class="absolute inset-y-0 left-0 pl-3 flex items-center z-50 text-base">
        <i class="ro-icon ro-icon-search text-gray-600 mt-px"></i>
      </span>
      <input
        ref="input"
        :id="`${id}-input`"
        class="ro-input ro-input-search"
        placeholder="Search Docs..."
        title="Search Docs"
        type="search"
        v-model="value"
        @focus="onFocus">
    </label>
  </form>
</template>

<script>

export default {
  props: {
    id: {
      type: String,
      default: 'docsearch'
    }
  },
  data () {
    return {
      isLoaded: false,
      value: ''
    }
  },
  methods: {
    onFocus (e) {
      this.$nextTick(() => {
        e.target.value = this.value
      })

      if (this.isLoaded) return

      import('docsearch.js').then(({ default: docsearch }) => {
        docsearch({
          indexName: 'rotalacss',
          inputSelector: `#${this.id}-input`,
          apiKey: process.env.GRIDSOME_ALGOLIA_DOC_SEARCH_API_KEY,
          debug: process.env.NODE_ENV === 'development'
        })

        this.isLoaded = true

        this.$nextTick(() => this.$refs.input.focus())
      })
    }
  }
}
</script>

<style lang="postcss">
@import 'docsearch.js/dist/cdn/docsearch.min.css';

.header-search {
  @apply block;
  @apply mb-0;
  @apply w-full;
  @apply flex-1;

  .algolia-autocomplete {
    @apply w-full;

    .algolia-docsearch-suggestion--wrapper {
      @apply pt-0;
    }

    .algolia-docsearch-suggestion--category-header {
      &-lvl0 .algolia-docsearch-suggestion--highlight,
      &-lvl1 .algolia-docsearch-suggestion--highlight {
        box-shadow: inset 0 -2px 0 0 theme('colors.primary.600');
      }
    }

    .algolia-docsearch-suggestion--highlight {
      @apply text-primary-600;
      @apply bg-primary-100;
    }

    .algolia-docsearch-suggestion
    .algolia-docsearch-suggestion--subcategory-column {
      @apply font-medium;
      @apply text-sm;
      @apply text-gray-500;
      @apply py-3;
    }

    .ds-dropdown-menu {
      @apply shadow-lg;

      .ds-suggestion {
        .algolia-docsearch-suggestion:not(.suggestion-layout-simple)
        .algolia-docsearch-suggestion--content {
          @apply py-3;

          .algolia-docsearch-suggestion--title {
            @apply text-gray-900;
          }
        }

        &.ds-cursor
        .algolia-docsearch-suggestion:not(.suggestion-layout-simple)
        .algolia-docsearch-suggestion--content {
          @apply bg-primary-100;
        }
      }

      [class^=ds-dataset-] {
        @apply border-gray-300;

        .algolia-docsearch-footer {
          .algolia-docsearch-footer--logo {
            background-position: 80%;
            background-size: 70%;
          }
        }
      }
    }
  }
}


@media all and (max-width: theme('screens.md')) {
  .header-search {
    .algolia-autocomplete {
      .ds-dropdown-menu {
        .ds-suggestion {
          .algolia-docsearch-suggestion {
            .algolia-docsearch-suggestion--subcategory-column {
              @apply font-medium;

              &::after {
                content: '';
              }
            }
          }

          .algolia-docsearch-suggestion:not(.suggestion-layout-simple)
          .algolia-docsearch-suggestion--content {
            @apply w-full;
          }
        }
      }
    }
  }
}

@media all and (max-width: theme('screens.sm')) {
  .header-search {
    .algolia-autocomplete {
      .ds-dropdown-menu {
        @apply fixed !important;
        @apply max-w-full;
        @apply min-w-full;
        @apply border-none;

        left: 0 !important;
        top: 3.5rem !important;
        right: 0 !important;

        &::before {
          @apply hidden;
        }
      }
    }
  }
}
</style>