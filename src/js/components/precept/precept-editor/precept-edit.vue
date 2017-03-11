<template>
    <div class="request-editor">
        <div ref="form">
            <div class="is-flex">
                <div class="select">
                    <vm-method-selector
                            v-model="editedPrecept.method"
                            @input="isClean = false"
                    ></vm-method-selector>
                </div>
                <vm-type-ahead
                        style="flex: 1 1 100%"
                        v-model="editedPrecept.url"
                        placeholder="Name"
                        @input="isClean = false"
                        track-by="uri"
                        :options="ruleWorker.ruleCollection.rules"
                ></vm-type-ahead>
            </div>
            <div class="is-flex" style="width: 100%">
                <div class="request-editor__form-label">Name</div>
                <input class="input is-minimal mousetrap"
                       type="text"
                       placeholder="Name"
                       title="Title"
                       v-model="editedPrecept.name"
                       @input="isClean = false"
                >
            </div>
        </div>

        <div style="height: 20px; background-color: #ebebeb"></div>

        <vm-navigation-tabs
                class="is-marginless"
                :pages="['data', 'headers']"
                v-model="mode"
        ></vm-navigation-tabs>

        <!-- Navigated section -->
        <div>
            <!-- Editor -->
            <div v-if="mode === 'data'">
                <vm-json-editor v-model="editedPrecept.body"
                                :ace-options="{}"
                                @input="isClean = false"
                                @send="send"
                                @save="save"
                ></vm-json-editor>
            </div>

            <!-- Headers -->
            <div v-if="mode === 'headers'">
                <vm-headers v-model="editedPrecept.headers"
                            @input="isClean = false"
                ></vm-headers>
            </div>
        </div>

        <div style="height: 20px; background-color: #ebebeb"></div>

        <div class="is-flex">
            <div class="large-button has-save-color square-32"
                 @click="save"
                 :disabled="isClean"
                 title="Save precept (Ctrl+S)"
            >
                <span class="icon"><i class="fa fa-save"></i></span>
            </div>
            <div class="large-button has-save-color square-32"
                 @click="send"
                 title="Send request from precept (Ctrl+Enter)"
            >
                <span class="icon"><i class="fa fa-send"></i></span>
            </div>
            <div class="flex-divider"></div>
            <div class="large-button has-info-color is-inverted square-32"
                 @click="showHints = ! showHints"
                 title="Show hints"
            >
                <span class="icon"><i class="fa fa-question"></i></span>
            </div>
            <div class="large-button has-remove-color square-32"
                 @click="$emit('removed', precept)"
                 title="Delete precept"
            >
                <span class="icon"><i class="fa fa-times"></i></span>
            </div>
        </div>

        <div v-if="showHints"
             class="hints-block"
             style="padding: 10px"
        >
            <h4>Keybinds: </h4>
            <ul>
                <li><strong>Ctrl+S</strong> — Save precept</li>
                <li><strong>Ctrl+Shift+L</strong> — Format JSON</li>
                <li><strong>Ctrl+Enter</strong> — Send request</li>
            </ul>
        </div>
    </div>
</template>

<script>
  import _ from 'lodash'
  import Mousetrap from 'mousetrap'

  import preceptStorage from '../../../instances/preceptStorage.js'
  import ruleWorker from '../../../instances/workers/ruleWorker.js'

  import Precept from '../../../classes/Entities/Precept.js'

  import vmHeaders from './headers/headers.vue'
  import vmResponseViewer from '../response-viewer/response-viewer.vue'

  import vmJsonEditor from '../../ligth-components/json-editor/json-editor.vue'
  import vmMethodSelector from './method-selector/method-selector.vue'
  import vmNavigationTabs from '../../ligth-components/navigation-tabs.vue'
  import vmTypeAhead from '../../ligth-components/full-type-ahead.vue'

  export default {
    data () {
      return {
        isClean: true,
        showHints: false,

        mode: 'data', // 'headers'

        mousetrap: null,
        editedPrecept: new Precept(),
        ruleWorker,
      }
    },
    components: {
      vmHeaders,
      vmResponseViewer,

      vmJsonEditor,
      vmMethodSelector,
      vmNavigationTabs,
      vmTypeAhead,
    },
    created(){
      this.refreshFromParent()

      this.bindKeys()
    },
    beforeDestroy(){
      this.unbindKeys()
    },
    watch: {
      precept: 'refreshFromParent',
    },
    props: {
      precept: {
        type: Precept,
      }
    },
    methods: {
      save(){
        Object.assign(this.precept, this.editedPrecept)
        this.$emit('updated', this.precept)
        this.isClean = true
      },
      bindKeys(){
        let mousetrap = this.mousetrap = new Mousetrap(this.$refs.form)
        mousetrap.bind('ctrl+s', () => {
          this.save()
          return false // prevent bubbling
        })
        mousetrap.bind('ctrl+enter', () => {
          this.send()
        })
      },
      unbindKeys(){
        this.mousetrap.reset()
      },
      refreshFromParent(){
        this.isClean = true
        this.editedPrecept = Object.assign(new Precept(), this.precept)
      },
      send(){
        this.$emit('send', this.editedPrecept)
      }
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~local-styles";

    .request-editor {
        &__form-label {
            flex: 0 0 70px;
            @include flex-center();
        }
    }
</style>