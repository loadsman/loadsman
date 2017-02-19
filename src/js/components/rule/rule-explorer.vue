<template>
    <div class="rule-explorer page">
        <div class="card">
            <p class="card-header-title">
                <span>RULES</span>&nbsp;<span
                    style="color: darkgray">(routes)</span>
            </p>
        </div>

        <div class="card">
            <div class="rule-explorer__body">
                <div class="columns is-mobile">
                    <div class="column is-4">
                        <vm-rule-selector
                                @selected="selectedRule = $event"
                        ></vm-rule-selector>
                    </div>
                    <div class="column">
                        <vm-rule-show :rule="selectedRule"></vm-rule-show>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import vmRuleSelector from './rule-selector/rule-selector.vue'
  import vmRuleShow from './rule-show/rule-show.vue'

  export default {
    data () {
      return {
        selectedRule: null
      }
    },
    components: {
      vmRuleSelector,
      vmRuleShow,
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .rule-explorer {
        height: 100%;
        .rule-explorer__body {
            padding: 10px;
        }
    }
</style>