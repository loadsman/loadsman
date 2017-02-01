<template>
    <div id="loadsman-app">


        <a @click="closeIframe">Закрыть</a>
    </div>
</template>

<script>

    import vmApiTester from '../../../old-src/js/api-tester.vue'

  import IframeListener from '../IframeListener.js'

  import axios from 'axios'

  export default {
    mounted(){
      this.iframeListener.listen('click', () => {
        this.show = !this.show
      })

      axios.post('/some/url')
           .then(() => {
             console.log('then')
           }).catch(() => {
        console.log('catch')
      })

      console.log(this.location)
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