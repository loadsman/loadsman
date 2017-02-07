<template>
    <div class="edit-block">
        <vm-precept-edit
                v-model="preceptWorker.precept"
        ></vm-precept-edit>
        <!--<vm-response-viewer></vm-response-viewer>-->
    </div>
</template>

<script>
    import _ from 'lodash'

    import preceptWorker from '../../instances/preceptWorker.js'

    import vmPreceptEdit from './precept-edit/precept-edit.vue'
//    import vmResponseViewer from './response-viewer/response-viewer.vue'

//    import requestEditorData from './request-editor/request-editor-data.js'

    export default {
        components: {
            vmPreceptEdit,
//          vmResponseViewer,
        },
        data: () => {
          return {
            preceptWorker
          }
        },
    }
</script>

<style scoped>

</style>
