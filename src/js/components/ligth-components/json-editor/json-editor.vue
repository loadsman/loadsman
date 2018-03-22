<template>
    <div class="json-editor">
        <div class="json-editor__bind" style="height: 400px;"></div>
        <!-- Here goes binding -->
        <div class="json-editor__notification-border"
             v-if="isError"
        ></div>
    </div>
</template>

<script lang="ts">
  import ace from './ace-editor/ace-editor'

  import jsoneditor from 'jsoneditor/dist/jsoneditor'

  export default {
    props: {
      value: {},
      'ace-options': {
        default: () => {
          return {}
        },
      }
    },
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
          name: 'send',
          bindKey: {win: "Ctrl+Enter", mac: "Command+Enter"},
          exec: () => {
            this.$emit('send')
          }
        })
        editor.commands.addCommand({
          name: 'save',
          bindKey: {win: "Ctrl+S", mac: "Command+Shift+S"},
          exec: () => {
            this.$emit('save')
          }
        })

        editor.setShowPrintMargin(false)
        editor.setOptions(this.aceOptions)
        editor.session.setOptions({ tabSize: 2, useSoftTabs: true })

        editor.$blockScrolling = Infinity
        editor.on('input', (e) => {
          if (this.checkIfClean()) {
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
          let jsonString = JSON.stringify(this.value, null, '  ')
          // Open braces for empty object. Being nice to user.
          jsonString = jsonString === '{}' ? "{\n  \n}" : jsonString
          // -1 sets cursor at beginning.
          this.editor.setValue(jsonString, -1)
          this.editedJson = jsonString
          // setValue seems to be queued so we need to wait a tic.
          setTimeout(() => {
            // This is essential to prevent endless watch-refresh loop.
            this.markClean()
          })
        }
      },
      checkIfClean(){
        return this.editor.session.getUndoManager().isClean()
      },
      markClean(){
        this.editor.session.getUndoManager().markClean()
      },
      format(){
        try {
          let data = JSON.parse(this.editor.getValue())
          this.editor.setValue(JSON.stringify(data, null, '  '))
        } catch (e) {
        }
      }
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~local-styles";

    .json-editor {
        resize: vertical;
        overflow: auto;
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


