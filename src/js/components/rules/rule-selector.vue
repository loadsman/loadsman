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
             v-if="filteredRoutes.length === 0 && ! ruleRepository.isLoading"
             transition="fade-in"
        >
            No routes matched.
        </div>
        <vm-rule v-for="route in filteredRoutes"
                 class="is-fullwidth"
                 transition="slip"
                 :route="route"
        ></vm-rule>
        <div class="notification is-danger"
             v-if="false"
             transition="fade-in"
        >
            Can't load routes. Check console for details.
        </div>
    </div>
</template>

<script>
  import _ from 'lodash'
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
      refresh (){
        this.ruleRepository.loadAll()
      }
    },
    computed: {
      filteredRoutes (){
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
