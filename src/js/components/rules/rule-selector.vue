<template>
    <div class="routes-selector card is-fullwidth">
        <header class="card-header">
            <!--<vm-search-panel class="card-header-title"></vm-search-panel>-->
            <a class="button is-large is-white is-fullheight"
               @click="refresh"
               :class="{'is-loading' : ruleRepository.isLoading}"
            >
                <i class="fa fa-refresh"></i>
            </a>
        </header>
        <div class="notification"
             v-if="filteredRules.length === 0 && ! ruleRepository.isLoading"
             transition="fade-in"
        >
            No routes matched.
        </div>
        <vm-rule v-for="rule in filteredRules"
                 @click="selectRule(rule)"
                 :route="rule"
        ></vm-rule>
        <div class="notification is-danger"
             v-if="false"
        >
            Can't load routes. Check console for details.
        </div>
    </div>
</template>

<script>
  import _ from 'lodash'
  import Rule from '../../classes/Entities/Rule.js'
  import RuleRepository from '../../classes/Modules/Rule/RuleRepository.js'

  import vmRule from './rule.vue'
  //    import vmSearchPanel from  '../search/search-panel.vue'

  export default {
    data () {
      return {
        ruleRepository: new RuleRepository()
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
        console.log(rule)
      },
      refresh (){
        this.ruleRepository.loadAll()
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

        return this.ruleRepository.rules
      }
    }
  }
</script>

<style scoped>
    .column {
        padding: 0 10px;
    }

    .notification {
        border-top-right-radius: 0;
        border-top-left-radius: 0;
    }
</style>
