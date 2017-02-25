<template>
    <form class="precept-header" @submit.prevent="$emit('create')">
        <div class="is-flex">
            <input class="input is-minimal"
                   name="key"
                   type="text"
                   placeholder="Key"
                   title="Key"
                   v-model="header.key"
            >
            <input class="input is-minimal"
                   name="value"
                   type="text"
                   placeholder="Value"
                   title="Value"
                   v-model="header.value"
            >
            <div class="large-button has-remove-color is-inverted square-32"
               @click="$emit('remove')"
            >
                <span class="icon">
                  <i class="fa fa-times"></i>
                </span>
            </div>
        </p>
    </form>
</template>

<script>
  import _ from 'lodash'

  import Header from '../../../../classes/Entities/Header.js'

  export default {
    data (){
      return {

      }
    },
    props: {
      header: {
        type: Header,
        required: true,
      },
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .precept-header {
    }
</style>