<template>
    <div class="json-viewer"></div>
</template>

<script lang="ts">
  import jsoneditor from 'jsoneditor'

  export default {
    editor: null, // Json editor instance is bound to component.
    props: {
      json: {}
    },

    watch: {
      json (json){
        this.$options.editor.set(json)
      }
    },
    mounted() {
      let options = {
        mode: 'view',
      }

      this.initEditor(this.$el, options, this.json)
    },
    methods: {
      initEditor(el, options, json){
        this.$options.editor = new jsoneditor(el, options, json)
      }
    },
  }
</script>

<style scoped>

</style>
