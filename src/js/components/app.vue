<template>
    <div id="loadsman-app">
        <div class="top-fixed has-shadow is-flex-tablet">
            <nav class="nav promotion-header">
                <div class="nav-left">
                    <a class="nav-item promotion-header__pretty-link logo" href=".">
                        <span class="nav-icon">LOADSMAN</span>
                    </a>
                </div>

                <div class="nav-right is-flex is-pulled-right ">
                    <a class="nav-item promotion-header__pretty-link"
                       title="Github"
                       href="https://github.com/asvae/laravel-api-tester"
                       target="_blank"
                    >
                        <i class="fa fa-github nav-icon"></i>
                    </a>
                    <a class="nav-item promotion-header__pretty-link"
                       title="Wiki"
                       href="https://github.com/asvae/laravel-api-tester/wiki"
                       target="_blank"
                    >
                        <i class="fa fa-book nav-icon"></i>
                    </a>
                    <a class="nav-item promotion-header__pretty-link"
                       title="Fork me"
                       href="https://github.com/asvae/laravel-api-tester/fork"
                       target="_blank"
                    >
                        <i class="fa fa-code-fork nav-icon"></i>
                    </a>
                    <a class="nav-item promotion-header__pretty-link"
                       title="Issues"
                       href="https://github.com/asvae/laravel-api-tester/issues"
                       target="_blank"
                    >
                        <i class="fa fa-bug nav-icon"></i>
                    </a>
                </div>
            </nav>
            <vm-action-panel class="is-fullwidth"></vm-action-panel>
        </div>
        <div class="bottom">
            <div class="left-side is-full is-multiline">
                <!--<vm-lists-block></vm-lists-block>-->
            </div>
            <div class="right-side">
                <!--<vm-request-poster></vm-request-poster>-->
            </div>
        </div>
    </div>
</template>

<script>

  import axios from 'axios'

  import IframeListener from '../IframeListener.js'

  //    import vmListsBlock from './components/lists-block/lists-block.vue'
  import vmActionPanel from './action-panel/action-panel.vue'
  //    import vmRequestPoster from './components/edit-block/edit-block.vue'

  export default {
    mounted(){

    },
    data (){
      return {
        iframeListener: new IframeListener,
        text: 'Some text',
      }
    },
    components: {
      vmActionPanel,
//            vmListsBlock,
//            vmRequestPoster,
    },
    methods: {
      closeIframe (){
        parent.postMessage({
          from: 'loadsmanIframe',
          command: 'closeIframe'
        }, '*')
      },
    },
  }
</script>

<style lang="sass" rel="stylesheet/sass">
    .promotion-header .promotion-header__pretty-link
        transition: all ease .2s
        color: #006679
        text-shadow: 1px 1px 1px #3debff, -1px -1px 1px #0092a2
        &:hover
            color: #c6faff
            text-shadow: -1px -1px 1px #3debff, 1px 1px 1px #0092a2

    #loadsman-app
        .nav
            background-color: transparent
        .top-fixed
            width: 100%
            top: 0
            left: 0
            position: fixed
            background-color: #1fc8db
            z-index: 5
            box-shadow: 0 2px 5px rgba(0, 0, 0, .15)

        .left-side
            margin-top: 52px
            left: 0
            position: absolute
            width: 400px
            min-height: calc(100% - 52px)
            padding: 10px

        .right-side
            margin-top: 52px
            left: calc(400px)
            position: absolute
            padding: 10px
            width: calc(100% - 400px)

        .logo
            padding-left: 20px

</style>