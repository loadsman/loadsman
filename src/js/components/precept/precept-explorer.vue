<template>
    <div class="rule-explorer page">
        <div class="card">
            <p class="card-header-title">
                <span>PRECEPTS</span>&nbsp;<span style="color: darkgray">(requests)</span>
            </p>
        </div>
        <div class="card">
            <vm-precept-selector></vm-precept-selector>
            <vm-precept-edit
                    v-model="preceptWorker.precept"
                    @updated="updated"
            ></vm-precept-edit>
        </div>
    </div>
</template>

<script>
  import vmPreceptSelector from './precept-selector/precept-selector.vue'
  import vmPreceptEdit from './precept-editor/precept-edit.vue'

  import preceptWorker from '../../instances/workers/preceptWorker.js'

  export default {
    data () {
      return {
        preceptWorker
      }
    },
    components: {
      vmPreceptSelector,
      vmPreceptEdit,
    },
    methods: {
      updated (){
        console.log('updated')
      },
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>