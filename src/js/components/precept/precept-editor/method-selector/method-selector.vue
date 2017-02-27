<template>
    <select :value="value" @input="$emit('input', $event.target.value)">
        <option v-for="method in methods"
        >{{method}}
        </option>
    </select>
</template>

<script>
  import Precept from '../../../../classes/Entities/Precept.js'

  export default {
    data () {
      return {
        method: 'GET',
        methods: Precept.methodsList
      }
    },
    props: ['value'],
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>