<template>
    <div>
        <h2>Header</h2>
        <vm-test-component></vm-test-component>
        Text: {{text}}
    </div>
</template>

<script>
  import vmTestComponent from './test/test-component.vue'

  export default {
    data (){
      return {
        text: 'Some text'
      }
    },
    components: {
      vmTestComponent,
    },
  }
</script>

<style scoped>

</style>