<template>
    <div class="rule-explorer page">
        <div class="card">
            <p class="card-header-title">
                <span>PRECEPTS</span>&nbsp;<span style="color: darkgray">(requests)</span>
            </p>
        </div>
        <div class="card">
            <div class="button is-create"
                 @click="createPrecept"
            >Create precept</div>
            <vm-precept-list></vm-precept-list>
            <vm-precept-edit
                    v-model="preceptWorker.currentPrecept"
                    @updated="updated"
            ></vm-precept-edit>
        </div>
    </div>
</template>

<script>
    import Precept from '../../classes/Entities/Precept.js'
  import vmPreceptList from './precept-selector/precept-list.vue'
  import vmPreceptEdit from './precept-editor/precept-edit.vue'

  import preceptWorker from '../../instances/workers/preceptWorker.js'

  export default {
    data () {
      return {
        preceptWorker
      }
    },
    components: {
      vmPreceptList,
      vmPreceptEdit,
    },
    methods: {
      createPrecept(){
        let precept = new Precept()
        preceptWorker.addPrecept(precept)
        preceptWorker.currentPrecept = precept
      },
      updated (){
        console.log('updated')
      },
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>