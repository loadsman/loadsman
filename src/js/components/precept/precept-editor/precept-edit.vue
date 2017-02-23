<template>
    <div class="request-editor">
        <div class="is-flex">
            <div class="request-editor__form-label">URL</div>
            <input class="input is-minimal"
                   type="text"
                   placeholder="Name"
                   title="Title"
                   v-model="editedPrecept.uri"
            >
        </div>
        <div class="is-flex" style="width: 100%">
            <div class="request-editor__form-label">Name</div>
            <input class="input is-minimal"
                   type="text"
                   placeholder="Name"
                   title="Title"
                   v-model="editedPrecept.name"
            >
        </div>

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
                                style="height: 400px"
                ></vm-json-editor>
            </div>

            <!-- Headers -->
            <div v-if="mode === 'headers'">
                <vm-headers v-model="editedPrecept.headers"
                ></vm-headers>
            </div>
        </div>

        <div class="is-flex">
            <div class="large-button has-save-color"
                 style="width: 42px; height: 42px;"
                 @click="save"
            >
                <span class="icon"><i class="fa fa-save"></i></span>
            </div>
            <div class="flex-divider"></div>
            <div class="large-button has-remove-color"
                 style="width: 42px; height: 42px;"
                 @click="$emit('removed', precept)"
            >
                <span class="icon"><i class="fa fa-times"></i></span>
            </div>
        </div>
    </div>
</template>

<script>
  import _ from 'lodash'

  import preceptStorage from '../../../instances/preceptStorage.js'

  import Precept from '../../../classes/Entities/Precept.js'
  import vmJsonEditor from '../../ligth-components/json-editor/json-editor.vue'
  import vmHeaders from './headers/headers.vue'

  import vmNavigationTabs from '../../ligth-components/navigation-tabs.vue'

  export default {
    data () {
      return {
        editedPrecept: new Precept(),
        mode: 'data', // 'headers'
      }
    },
    components: {
      vmJsonEditor,
      vmHeaders,
      vmNavigationTabs,
    },
    created(){
      this.refreshFromParent()
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
      },
      refreshFromParent(){
        this.editedPrecept = Object.assign(new Precept(), this.precept)
      }
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~local-styles";

    .request-editor {
        &__form-label {
            flex: 0 0 70px;
            background-color: #ebebeb;
            @include flex-center();
        }
    }
</style>