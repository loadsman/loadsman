<template>
    <div class="request-editor">
        <div class="is-flex">
            <div style="flex: 0 0 70px" class="is-flex-centered">URL</div>
            <input style="flex: 1 1 0"
                   class="input is-minimal"
                   type="text"
                   placeholder="Name"
                   title="Title"
                   v-model="editedPrecept.name"
            >
        </div>
        <div class="is-flex" style="width: 100%">
            <div style="flex: 0 0 70px" class="is-flex-centered">Name</div>
            <input style="flex: 1 1"
                   class="input is-minimal"
                   type="text"
                   placeholder="Name"
                   title="Title"
                   v-model="editedPrecept.uri"
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
                                style="height: 300px"
                ></vm-json-editor>
            </div>

            <!-- Headers -->
            <div v-if="mode === 'headers'">
                <vm-headers v-model="editedPrecept.headers"
                ></vm-headers>
            </div>
        </div>


        <div class="button is-delete"
             @click="$emit('removed', precept)"
        >
            Delete
        </div>

        <div class="button is-save"
             @click="save"
        >
            Save
        </div>

        <!--<pre>{{precept}}</pre>-->
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