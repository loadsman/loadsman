<template>
    <div class="loadsman-app">
        <vm-navigation class="loadsman-app__navigation"></vm-navigation>

        <div class="loadsman-app__main">
            <vm-main-page v-if="localRouter.path === 'main-page'"
            ></vm-main-page>
            <vm-rule-explorer v-if="localRouter.path === 'rules'"
            ></vm-rule-explorer>
            <vm-precept-explorer v-if="localRouter.path === 'precepts'"
            ></vm-precept-explorer>
            <vm-project-explorer v-if="localRouter.path === 'projects'"
            ></vm-project-explorer>
        </div>
    </div>
</template>

<script>

  import localRouter from '../instances/localRouter.js'

  import iframeListener from '../instances/iframeListener.js'

  import vmNavigation from './navigation/navigation.vue'

  import vmMainPage from './main-page/main-page.vue'
  import vmRuleExplorer from './rule/rule-explorer.vue'
  import vmPreceptExplorer from './precept/precept-explorer.vue'
  import vmProjectExplorer from './project/project-explorer.vue'

  export default {
    data (){
      return {
        localRouter,
        text: 'Some text',
      }
    },
    components: {
      vmNavigation,

      vmMainPage,
      vmRuleExplorer,
      vmPreceptExplorer,
      vmProjectExplorer,
    },
    methods: {
      closeIframe (){
        iframeListener.sendCommand('closeIframe')
      },
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    @import "~local-styles";

    .loadsman-app {
        .loadsman-app__navigation {
            position: fixed;
            height: 100%;
            background-color: $primary;
            width: 40px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, .15);
            z-index: 5;
        }
        .loadsman-app__main {
            margin-left: 40px;
        }
    }


</style>