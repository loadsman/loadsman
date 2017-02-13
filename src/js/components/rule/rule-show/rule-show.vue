<template>
    <div class="rule-show">
        <div v-if="! rule" class="notification">Rule not selected.</div>
        <div v-if="rule">
            <pre>{{rule}}</pre>
            <button class="button"
                    @click="createPrecept"
            >
                Create precept
            </button>
        </div>
    </div>
</template>

<script>
  import Rule from '../../../classes/Entities/Rule.js'
  import RuleToPreceptTransformer from '../../../classes/Modules/Precept/RuleToPreceptTransformer.js'

  import preceptWorker from '../../../instances/preceptWorker.js'
  import preceptStorage from '../../../instances/preceptStorage.js'
  import localRouter from '../../../instances/localRouter.js'

  export default {
    data () {
      return {}
    },
    props: {
      rule: {
        type: Rule
      }
    },
    methods: {
        createPrecept (){
          let precept = new RuleToPreceptTransformer().transform(this.rule)
          preceptStorage.create(precept)
          preceptWorker.setPrecept(precept)
          localRouter.setPath('precepts')
        },
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>