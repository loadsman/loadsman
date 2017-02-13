<template>
    <div class="rule-explorer">
        <div class="card is-fullwidth">
            <header class="card-header">
                <p class="card-header-title">PRECEPTS</p>
            </header>
            <vm-precept-selector></vm-precept-selector>
            <vm-precept-edit
                    @updated="updated"
            ></vm-precept-edit>
        </div>
    </div>
</template>

<script>
  import vmPreceptSelector from './precept-selector/precept-selector.vue'
  import vmPreceptEdit from './precept-editor/precept-edit.vue'

  export default {
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