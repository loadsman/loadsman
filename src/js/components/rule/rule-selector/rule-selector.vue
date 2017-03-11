<template>
    <div class="rule-selector">
        <div class="rule-selector__action-panel">

            <div class="button is-small"
                 @click="refresh"
                 :class="{'is-loading' : loading}"
            >
                <div class="icon is-small">
                    <i class="fa fa-refresh"></i>
                </div>
            </div>
            <input type="text" class="input"
                   placeholder="Search doesn't work yet"
            >
        </div>
        <div class="routes-selector__notifications">
            <div class="notification"
                 v-if="rules.length === 0 && ! loading"
                 transition="fade-in"
            >
                No rules matched.
            </div>
            <div class="notification is-danger"
                 v-if="false"
            >
                Can't load rules. Check console for details.
            </div>
        </div>

        <div class="rule-selector__rules">
            <vm-rule v-for="rule in rules"
                     @selected="selectRule(rule)"
                     :rule="rule"
            ></vm-rule>
        </div>
    </div>
</template>


<script>
  import _ from 'lodash'
  import Rule from '../../../classes/Entities/Rule.js'

  import ruleWorker from '../../../instances/workers/ruleWorker.js'

  import vmRule from './rule.vue'

  export default {
    data () {
      return {
        ruleWorker,
      }
    },
    components: {
      vmRule,
//            vmSearchPanel,
    },
    created (){
      this.refresh()
    },
    methods: {
      selectRule(rule: Rule){
        this.$emit('selected', rule)
      },
      refresh (){
        ruleWorker.refreshList()
      }
    },
    computed: {
      rules(){
        return ruleWorker.ruleCollection.rules
      },
      loading(){
        return ruleWorker.ruleObserver.loading
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .rule-selector {
        .rule-selector__action-panel {

        }
    }
</style>
