<template>
    <div class="precept-header-create">
        <p class="control has-addons">
            <input class="input is-expanded"
                   type="text"
                   placeholder="Key"
                   title="Key"
                   @click.prevent="$emit('click', {field: 'key'})"
            >
            <input class="input is-expanded"
                   type="text"
                   placeholder="Value"
                   title="Value"
                   @click.prevent="$emit('click', {field: 'value'})"
            >
        </p>
    </div>
</template>

<script>
    export default {

    }
</script>

<style style="scss" rel="stylesheet/scss">
    .precept-header-create {
        padding: 0 43px 10px 10px;
    }
</style>