<template>
    <div class="json-editor">
        <div class="json-editor__bind" style="height: 400px;"></div> <!-- Here goes binding -->
        <div class="json-editor__button-block">
            <div class="button is-small"
                 @click="jsoneditor.format()"
                 title="Format"
            >
            <span class="icon is-small">
                <i class="fa fa-indent"></i>
            </span>
            </div>
            <br>
            <div class="button is-small"
                 @click="jsoneditor.compact()"
                 title="Compact"
            >
            <span class="icon is-small">
                <i class="fa fa-align-justify"></i>
            </span>
            </div>
        </div>
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
        if (this.editedJson !== this.value) {
          this.jsoneditor.set(this.value)
          this.editedJson = this.value
        }
      },
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~jsoneditor/dist/jsoneditor.css";
    @import "~local-styles";

    .json-editor {
        position: relative;
        margin-bottom: -34px;

        .json-editor__button-block {
            position: absolute;
            top: 0;
            left: 0;
            z-index: 8;
            .button {
                opacity: .5;
                background-color: transparent;
                &:hover {
                    background-color: white;
                    opacity: 1;
                    border: none;
                }
            }
        }
        .json-editor__bind {
        }

        .jsoneditor {
            border: none;
            .ace_editor {
                &.ace_focus {
                    // border-color: $primary;
                }
            }
            .ace_marker-layer {
                .ace_active-line {
                    // background-color: lighten($primary, 40%);
                }
            }
            .jsoneditor-menu {
                display: none;
                background-color: $primary;
                border-bottom-color: transparent;
                .jsoneditor-frame {
                    padding: 0;
                    background-color: #0092a2;
                    input {
                        color: #c6faff;
                        line-height: 1.7;
                        margin: 0;
                        &:focus {
                            color: $black;
                            background-color: $white;
                        }
                    }
                }
                .jsoneditor-poweredBy {
                    color: $white;
                }
                button {
                    border-radius: 0;
                    // background-color: $primary;
                    margin: 0;
                    &:hover, &:active, &:focus {
                        // background-color: darken($primary, 10%);
                        outline: 0;
                    }
                }
            }
        }
    }
</style>


