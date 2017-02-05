<template>
    <div class="lists-block">
        <vm-navigation-tabs
                :pages="['routes', 'requests', 'history']"
                v-model="mode"
        ></vm-navigation-tabs>
        <vm-rule-selector v-show="mode === 'rule'"
        ></vm-rule-selector>
        <!--<vm-requests-selector v-show="mode === 'requests'"-->
        <!--&gt;</vm-requests-selector>-->
        <!--<vm-history-selector v-show="mode === 'history'"-->
        <!--&gt;</vm-history-selector>-->
    </div>
</template>

<script>
  import vmNavigationTabs from '../ligth-components/navigation-tabs.vue'
      import vmRuleSelector from '../rules/rule-selector.vue'
  //    import vmRequestsSelector from '../requests/requests-selector.vue'
  //    import vmHistorySelector from '../history/history-selector.vue'

  export default {
    components: {
      vmNavigationTabs,
            vmRuleSelector,
//            vmRequestsSelector,
//            vmHistorySelector,
    },
    data (){
      return {
        mode: "rule",
      }
    },
  }
</script>

<style scoped>

</style>