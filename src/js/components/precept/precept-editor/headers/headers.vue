<template>
    <div class="headers">
        <vm-header
                v-for="(header, index) in headers.items"
                :header="header"
                @remove="headers.items.splice(index, 1), sendHeadersToParent()"
        ></vm-header>
        <vm-header-create
                @click="addNewHeader($event.field)"
        ></vm-header-create>
    </div>
</template>

<script>
  import _ from 'lodash'
  import $ from 'jquery'

  import Header from '../../../../classes/Entities/Header.js'
  import HeaderCollection from '../../../../classes/Modules/Header/HeaderCollection.js'

  import vmHeader from './header.vue'
  import vmHeaderCreate from './header-create.vue'


  export default {
    data (){
      return {
        editedHeaders: _.cloneDeep(this.value)
      }
    },
    components: {
      vmHeader,
      vmHeaderCreate,
    },
    props: {
      value: {
        type: HeaderCollection,
        required: true
      }
    },
    methods: {
      addNewHeader (field){
        this.value.items.push(new Header())
        this.sendHeadersToParent()
        setTimeout(() => {
          // Focus on newly created header
          $(this.$el).find('.precept-header input[name="' + field + '"]').last().select()
        })
      },
      sendHeadersToParent(){
        this.$emit('input', this.headers)
      }
    },
    computed: {
      headers (){
        return this.value
      }
    }
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