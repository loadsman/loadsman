<template>
    <div id="loadsman-app">
        <div class="top-fixed has-shadow is-flex-tablet">
            <vm-promotion-header></vm-promotion-header>
            <vm-action-panel class="is-fullwidth"></vm-action-panel>
        </div>
        <div class="bottom">
            <div class="left-side is-full is-multiline">
                <vm-lists-block></vm-lists-block>
            </div>
            <div class="right-side">
                <vm-precept-editor></vm-precept-editor>
            </div>
        </div>
    </div>
</template>

<script>

  import axios from 'axios'

  import IframeListener from '../IframeListener.js'

  import vmListsBlock from './lists-block/lists-block.vue'
  import vmPromotionHeader from './promotion-header/promotion-header.vue'
  import vmActionPanel from './action-panel/action-panel.vue'
  import vmPreceptEditor from './precept-editor/precept-editor.vue'

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
      vmListsBlock,
      vmPreceptEditor,

      vmActionPanel,
      vmPromotionHeader,
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