<template>
    <div class="precept-header-create is-flex">
        <input class="input is-minimal"
               placeholder="Key"
               title="Key"
               @click.prevent="$emit('click', {field: 'key'})"
        >
        <input class="input is-minimal"
               placeholder="Value"
               title="Value"
               @click.prevent="$emit('click', {field: 'value'})"
        >
        <div class="large-button is-inverted square-32"
             @click="$emit('remove')"
        ></div>
    </div>
</template>

<script>
  export default {}
</script>

<style style="scss" rel="stylesheet/scss">
    .precept-header-create {

    }
</style>