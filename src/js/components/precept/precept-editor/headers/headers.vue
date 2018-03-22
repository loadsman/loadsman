<template>
    <div class="headers">
        <vm-header
                v-for="(header, index) in headers.items"
                :key="index"
                :header="header"
                @remove="removeHeader(index, $event.field)"
        />
        <vm-header-create
                @create="addNewHeader($event.field)"
        />
    </div>
</template>

<script lang="ts">
  import _ from 'lodash'
  import $ from 'jquery'

  import Header from '../../../../classes/Entities/Header.ts'
  import HeaderCollection from '../../../../classes/Modules/Header/HeaderCollection.ts'

  import vmHeader from './header.vue'
  import vmHeaderCreate from './header-create.vue'

  export default {
    data () {
      return {
        editedHeaders: _.cloneDeep(this.value),
      }
    },
    components: {
      vmHeader,
      vmHeaderCreate,
    },
    props: {
      value: {
        type: HeaderCollection,
        required: true,
      },
    },
    methods: {
      removeHeader (index, field) {
        this.headers.items.splice(index, 1)
        this.sendHeadersToParent()
        this.focusTo(index, field)
      },
      addNewHeader (field) {
        this.value.items.push(new Header())
        this.sendHeadersToParent()

        // Focus on newly created header
        this.focusTo(this.headers.items.length - 1, field)
      },
      focusTo (pointer: number, field) {
        setTimeout(() => {
          let headerElement = this.headers.items[pointer]

          if (!headerElement) {
            headerElement = this.headers.items[pointer -= 1]
          }

          if (headerElement) {
            $(this.$el.children[pointer])
              .find('input[name="header-' + field + '"]')
              .first()
              .select()
          }
        })
      },
      sendHeadersToParent () {
        this.$emit('input', this.headers)
      },
    },
    computed: {
      headers () {
        return this.value
      },
    },
  }
</script>

<style scoped>
    blockquote {
        padding: 6px 12px;
    }

    .columns {
        margin: 0;
    }
</style>