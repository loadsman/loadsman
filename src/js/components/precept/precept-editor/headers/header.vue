<template>
    <form class="precept-header" @submit.prevent="$emit('create')">
        <div class="is-flex">
            <input class="input is-minimal"
                   @keyup.ctrl.88="$emit('remove', {field: 'key'})"
                   name="header-key"
                   type="text"
                   placeholder="Key"
                   title="Key"
                   v-model="header.key"
            >
            <input class="input is-minimal"
                   @keyup.ctrl.88="$emit('remove', {field: 'value'})"
                   name="header-value"
                   type="text"
                   placeholder="Value"
                   title="Value"
                   v-model="header.value"
            >
            <div class="large-button has-remove-color is-inverted square-32"
               @click="$emit('remove', {field: 'key'})"
            >
                <span class="icon">
                  <i class="fa fa-times"></i>
                </span>
            </div>
        </div>
    </form>
</template>

<script lang="ts">
  import Header from '../../../../classes/Entities/Header.ts'

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

<style lang="scss">
    .precept-header {
    }
</style>