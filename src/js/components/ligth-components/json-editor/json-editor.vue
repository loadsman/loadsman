<template>
    <div>
        <div class="json-editor"></div>
        <pre>{{value}}</pre>
        <div class="notification is-danger" v-if="isError">
            Error
        </div>
    </div>
</template>

<script>
  import jsoneditor from 'jsoneditor/dist/jsoneditor'

  export default {
    props: ['value'],
    data () {
      return {
        editedJson: null,
        jsoneditor: null,
        isError: false,
      }
    },
    watch: {
      value: 'refreshFromParent',
    },
    mounted() {
      let options = {
        mode: 'code',
        onChange: () => {
          try {
            this.editedJson = this.jsoneditor.get()
            this.$emit('input', this.editedJson)
            this.isError = false
          } catch (e) {
            this.isError = true
          }
        },
      }

      this.editedJson = this.value
      this.jsoneditor = new jsoneditor(this.$el.children[0], options, this.value)
    },
    methods: {
      refreshFromParent(){
        console.log(this.editedJson)
        console.log(this.value)
        if (this.editedJson !== this.value){
          this.jsoneditor.set(this.value)
          this.editedJson = this.value
        }
      },
    },
  }
</script>

<style scoped>

</style>
