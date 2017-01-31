<template>
    <div>
        <div id="loadsman-app" v-if="show">
            <h2>Header</h2>
            <vm-test-component></vm-test-component>
            Text: {{text}}
            <hr>
            <a @click="show = false">Закрыть</a>
        </div>
    </div>
</template>

<script>
  import vmTestComponent from './test/test-component.vue'

  import ChromeListener from '../ChromeListener.js'

  import axios from 'axios'

  export default {
    mounted(){
      this.chromeListener.listen('click', () => {
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
        chromeListener: new ChromeListener,
        text: 'Some text',
        show: false,
      }
    },
    components: {
      vmTestComponent,
    },
  }
</script>

<style lang="sass" rel="stylesheet/sass">

</style>