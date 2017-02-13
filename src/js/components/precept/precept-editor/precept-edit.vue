<template>
    <div class="request-editor">
        <div class="columns is-multiline is-desktop">
            <div class="column is-full-desktop is-7-widescreen">
                <div class="card is-fullwidth">

                    <header class="card-header">
                        <p class="card-header-title">
                            <input class="input is-expanded is-fullwidth"
                                   type="text"
                                   placeholder="Name"
                                   title="Title"
                                   v-model="editedPrecept.name"
                            >
                        </p>
                    </header>

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
                </div>
            </div>
            <div class="column is-full-desktop is-5-widescreen">
                <vm-route-info></vm-route-info>
            </div>
        </div>
    </div>
</template>

<script>
  import _ from 'lodash'

  import preceptStorage from '../../../instances/preceptStorage.js'

  import Precept from '../../../classes/Entities/Precept.js'
  import vmJsonEditor from '../../ligth-components/json-editor/json-editor.vue'
  //    import vmRouteInfo from './route-info/route-info.vue'
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
      value: 'refreshFromParent',
    },
    props: {
      value: {
        type: Precept,
      }
    },
    methods: {
      loadAllPrecepts(){
        let result = preceptStorage.getAllPrecepts()
        console.log(result.exec((err, doc) => {
          console.log(doc)
        }))
      },
      savePrecept(){
        preceptStorage.create(this.editedPrecept)
        console.log(this.editedPrecept)
      },
      refreshFromParent(){
        this.editedPrecept = Object.assign(new Precept(), this.value)
      }
    },
  }
</script>

<style scoped>
    .request-editor {
        padding-bottom: 10px;
    }
</style>