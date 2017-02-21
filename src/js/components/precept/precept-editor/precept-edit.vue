<template>
    <div class="request-editor">
        <div class="card is-fullwidth is-marginless">
            <header class="card-header">
                <p class="card-header-title">
                    <input class="input is-expanded is-fullwidth"
                           type="text"
                           placeholder="Name"
                           title="Title"
                           v-model="editedPrecept.name"
                    >

                    <input class="input is-expanded is-fullwidth"
                           type="text"
                           placeholder="Name"
                           title="Title"
                           v-model="editedPrecept.uri"
                    >
                </p>
            </header>
            <div class="button is-delete"
                 @click="$emit('removed', precept)"
            >Delete</div>
            <div class="button is-save"
                 @click="save"
            >Save</div>

            <div style="padding: 10px">
                <vm-navigation-tabs
                        class="is-boxed"
                        :pages="['data', 'headers']"
                        v-model="mode"
                ></vm-navigation-tabs>
            </div>

            <!-- Editor -->
            <div v-if="mode === 'data'">
                <vm-json-editor :json="editedPrecept.body"
                                style="height: 300px"
                                @changed="editedPrecept.body = $event, changed = true"
                ></vm-json-editor>
            </div>

            <!-- Headers -->
            <div v-if="mode === 'headers'">
                <vm-headers v-model="editedPrecept.headers"
                ></vm-headers>
            </div>

            <pre>{{precept}}</pre>
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

<style scoped>
    .request-editor {

    }
</style>