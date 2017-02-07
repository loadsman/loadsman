<template>
    <form class="precept-header" @submit.prevent="$emit('create')">
        <p class="control has-addons">
            <input class="input is-expanded"
                   name="key"
                   type="text"
                   placeholder="Key"
                   title="Key"
                   v-model="header.key"
            >
            <input class="input is-expanded"
                   name="value"
                   type="text"
                   placeholder="Value"
                   title="Value"
                   v-model="header.value"
            >
            <button class="is-hidden" type="submit"></button>
            <a class="button is-danger is-outlined"
               @click="$emit('remove')"
            >
                <span class="icon is-small">
                  <i class="fa fa-times"></i>
                </span>
            </a>
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
        padding: 0 10px 10px 10px;
    }
</style>