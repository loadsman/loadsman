<template>
    <div class="rule-explorer page">
        <div class="card">
            <div class="card-header-title">
                <span>PRECEPTS</span>&nbsp;<span style="color: darkgray">(requests)</span>
                <div class="flex-divider"></div>
                <div class="button is-create is-small"
                     style="font-weight: normal"
                     @click="createPrecept"
                >
                    <span class="icon is-small">
                        <i class="fa fa-plus"></i>
                    </span>
                </div>
            </div>
        </div>

            <div class="columns is-gapless is-mobile">
                <div class="column" style="flex: 1 0 350px; width: 350px;">
                    <div class="card">
                        <vm-precept-list @selected="setCurrentPrecept($event)"
                        ></vm-precept-list>
                    </div>
                </div>
                <div class="column"
                     style="flex: 1 1 100%; padding-left: 10px"
                     v-if="preceptWorker.currentPrecept"
                >
                    <div class="card">
                        <vm-precept-edit :precept="preceptWorker.currentPrecept"
                                         @updated="updated($event)"
                                         @removed="remove($event)"
                        ></vm-precept-edit>
                    </div>
                </div>
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
        this.setCurrentPrecept(precept)
      },
      setCurrentPrecept(precept: ?Precept){
        preceptWorker.currentPrecept = precept
      },
      updated (precept: Precept){
        preceptWorker.saveAllPrecepts()
      },
      remove (precept: Precept){
        this.setCurrentPrecept(null)
        preceptWorker.removePrecept(precept)
      }
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>