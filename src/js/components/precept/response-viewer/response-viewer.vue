<template>
    <div class="response-viewer">
        <vm-navigation-tabs
                class="is-marginless"
                :pages="['raw', 'preview']"
                v-model="mode"
        ></vm-navigation-tabs>
        <div class="response-viewer__raw" v-if="mode === 'raw'">
            <pre style="overflow-x: auto;"
                         v-if="! response.isJson"
            ><code>{{response.body}}</code></pre>
        </div>
        <div class="response-viewer__preview" v-if="mode === 'preview'">
            <vm-json-editor :value="response.getJson()"
                            v-if="response.type === 'json'"
                            :ace-options="{readOnly: true}"
            ></vm-json-editor>
            <iframe class="response-viewer__iframe is-marginless is-paddingless" :class="{'is-visible': response.type === 'text'}"
                    :srcdoc="response.body"
            ></iframe>
        </div>
    </div>
</template>

<script>
  import vmNavigationTabs from '../../ligth-components/navigation-tabs.vue'
  import vmJsonEditor from '../../ligth-components/json-editor/json-editor.vue'
  import Response from '../../../classes/Entities/Response.js'

  export default {
    data () {
      return {
        mode: 'preview', // 'raw'
      }
    },
    props: {
      response: {
        type: Response
      }
    },
    components: {
      vmNavigationTabs,
      vmJsonEditor,
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .response-viewer__iframe {
        width: 100%;
        height: 0;
        &.is-visible {
            height: 700px;
        }
    }
</style>