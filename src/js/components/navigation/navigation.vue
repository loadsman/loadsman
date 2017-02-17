<template>
    <div class="navigation">
        <vm-navigation-item title="Main page"
                            :active="localRouter.path === 'main-page'"
                            @click="localRouter.setPath('main-page')"
        >
            <span class="icon"><i class="fa fa-star"></i></span>
        </vm-navigation-item>
        <vm-navigation-item title="Rules"
                            :active="localRouter.path === 'rules'"
                            @click="localRouter.setPath('rules')"
        >
            <span class="icon"><i class="fa fa-list"></i></span>
        </vm-navigation-item>
        <vm-navigation-item title="Precepts"
                            :active="localRouter.path === 'precepts'"
                            @click="localRouter.setPath('precepts')"
        >
            <span class="icon"><i class="fa fa-envelope-o"></i></span>
        </vm-navigation-item>
        <vm-navigation-item title="Projects"
                            :active="localRouter.path === 'projects'"
                            @click="localRouter.setPath('projects')"
        >
            <span class="icon"><i class="fa fa-file-text-o"></i></span>
        </vm-navigation-item>
        <div style="flex: 1"></div>
        <vm-navigation-item title="Fork me on github!">
            <a href="https://github.com/loadsman/loadsman"
               title="Loadsman"
               target="_blank"
            >
                <span class="icon"><i class="fa fa-github"></i></span>
            </a>
        </vm-navigation-item>
    </div>
</template>

<script>
  import localRouter from '../../instances/localRouter.js'

  import vmNavigationItem from './navigation-item.vue'

  export default {
    data(){
      return {
        localRouter
      }
    },
    components: {
      vmNavigationItem,
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .navigation {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>