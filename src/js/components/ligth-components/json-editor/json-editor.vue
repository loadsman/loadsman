<template>
    <div class="json-editor">
        <div class="json-editor__bind" style="height: 400px;"></div>
        <!-- Here goes binding -->
        <div class="json-editor__notification-border"
             v-if="isError"
        ></div>
    </div>
</template>

<script>
  import ace from './ace-editor/ace-editor'

  import jsoneditor from 'jsoneditor/dist/jsoneditor'

  export default {
    props: ['value'],
    data () {
      return {
        editedJson: null,
        editor: null,
        isError: false,
      }
    },
    watch: {
      value: 'refreshFromParent',
    },
    mounted() {
      this.mountEditor()


//        onChange: () => {
//          try {
//            this.editedJson = this.jsoneditor.get()
//            this.$emit('input', this.editedJson)
//            this.isError = false
//          } catch (e) {
//            this.isError = true
//          }
//        },
    },
    methods: {
      mountEditor (){
        let editor = this.editor = ace.edit(this.$el.children[0])
        let session = editor.getSession()
        session.setTabSize(2)
        session.setUseWrapMode(true)
        session.setMode('ace/mode/json')

        editor.commands.addCommand({
          name: 'format',
          bindKey: {win: "Ctrl+Alt+L", mac: "Command+Alt+L"},
          exec: () => {
            this.format()
          }
        })
        editor.commands.addCommand({
          name: 'format',
          bindKey: {win: "Ctrl+Enter", mac: "Command+Enter"},
          exec: () => {
            this.$emit('send')
          }
        })
        editor.$blockScrolling = Infinity
        editor.on('input', (e) => {
          if (this.isClean()){
            return;
          }

          try {
            this.editedJson = JSON.parse(editor.getValue())
            this.$emit('input', this.editedJson)
            this.isError = false
          } catch (e) {
            this.isError = true
          }
        })

        this.refreshFromParent()
      },
      refreshFromParent(){
        if (this.editedJson !== this.value) {
          this.editor.setValue(JSON.stringify(this.value, null, '\t'))
          this.editedJson = this.value
          setTimeout(() => {
            this.markClean()
          })
        }
      },
      isClean(){
        return this.editor.session.getUndoManager().isClean()
      },
      markClean(){
        this.editor.session.getUndoManager().markClean()
      },
      format(){
        try {
          let data = JSON.parse(this.editor.getValue())
          this.editor.setValue(JSON.stringify(data, null, '\t'))
        } catch (e) {
        }
      }
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~local-styles";

    .json-editor {
        position: relative;
        .json-editor__notification-border {
            position: absolute;
            background-color: $red;
            height: 100%;
            width: 3px;
            z-index: 5;
            top: 0;
        }
    }
</style>


