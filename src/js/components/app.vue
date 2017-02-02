<template>
    <div id="loadsman-app">
        <vm-api-tester></vm-api-tester>

        <a @click="closeIframe">Закрыть</a>
    </div>
</template>

<script>

    import vmApiTester from '../../../old-src/js/api-tester.vue'

  import IframeListener from '../IframeListener.js'

  import axios from 'axios'

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
      vmApiTester,
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

</style>