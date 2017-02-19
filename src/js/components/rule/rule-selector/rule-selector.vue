<template>
    <div class="rule-selector">
        <div class="rule-selector__action-panel">
            <a class="button"
               @click="refresh"
               :class="{'is-loading' : ruleObserver.loading}"
            >
                <i class="fa fa-refresh"></i>
            </a>
            <input type="text" class="input"
                   placeholder="Search doesn't work yet"
            >
        </div>
        <div class="routes-selector__notifications">
            <div class="notification"
                 v-if="filteredRules.length === 0 && ! ruleObserver.loading"
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
            <vm-rule v-for="rule in filteredRules"
                     @selected="selectRule(rule)"
                     :rule="rule"
            ></vm-rule>
        </div>
    </div>
</template>



<script>
  import _ from 'lodash'
  import Rule from '../../../classes/Entities/Rule.js'
  import RuleObserverFactory from '../../../classes/Modules/Rule/RuleObserverFactory.js'

  import ruleCollection from '../../../instances/ruleCollection.js'

  import ruleStorage from '../../../instances/ruleStorage.js'

  import vmRule from './rule.vue'
  //    import vmSearchPanel from  '../search/search-panel.vue'

  export default {
    data () {
      return {
        ruleCollection,
        ruleObserver: new RuleObserverFactory().getRuleObserver()
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
        this.ruleObserver.send('get-many').then(({data}) => {
          let rules: Array<Rule> = data.map((rule) => {
            return Object.assign(new Rule, rule)
          })
          this.ruleCollection.setRules(rules)
        })
      }
    },
    computed: {
      filteredRules (){
//        let {search, routes} = this.$store.getters
//        search = search.toUpperCase()
//        let toDisplay = []
//
//        routes.forEach(function (route) {
//          if (
//              route.methods.join(',').toUpperCase()
//                   .includes(search)
//              || route.path.toUpperCase().includes(search)
//              || (route.action.controller && route.action.controller.toUpperCase()
//                                                  .includes(search))
//              || (route.name && route.name.toUpperCase()
//                                     .includes(search))
//          ) {
//            toDisplay.push(route)
//          }
//        })

        return this.ruleCollection.rules
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
