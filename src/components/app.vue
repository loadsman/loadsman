<template>
    <div id="loadsman-app">
        <h2>Header</h2>
        <vm-test-component></vm-test-component>
        Text: {{text}}
        <hr>
        <a @click="closeIframe">Закрыть</a>
    </div>
</template>

<script>
  import vmTestComponent from './test/test-component.vue'

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
      vmTestComponent,
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