<template>
    <div class="precept-header-create is-flex">
        <input class="input is-minimal"
               placeholder="Key"
               title="Key"
               @focus.prevent="$emit('create', {field: 'key'})"
               @click.prevent="$emit('create', {field: 'key'})"
        >
        <input class="input is-minimal"
               placeholder="Value"
               title="Value"
               @focus.prevent="$emit('create', {field: 'value'})"
               @click.prevent="$emit('create', {field: 'value'})"
        >
        <div class="large-button is-inverted square-32"></div>
    </div>
</template>

<script lang="ts">
  export default {}
</script>

<style style="scss" rel="stylesheet/scss">
    .precept-header-create {

    }
</style>