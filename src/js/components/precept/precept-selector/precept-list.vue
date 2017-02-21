<template>
    <div class="requests-selector">
        <header class="card-header">
            <!--<vm-search-panel class="card-header-title"-->
            <!--&gt;</vm-search-panel>-->
        </header>
        <div v-if="precepts.length">
            <vm-precept
                    v-for="precept in precepts"
                    @click="$emit('selected', precept)"
                    class="is-fullwidth"
                    track-by="$index"
                    :precept="precept"
            ></vm-precept>
        </div>

        <div v-else-if="! loading"
             class="notification"
             transition="fade-in"
        >
            No requests found. <a>Create new</a>.
        </div>
    </div>
</template>

<script>
  import _ from 'lodash'

  import vmPrecept from './precept.vue'

  import preceptWorker from '../../../instances/workers/preceptWorker.js'

  export default {
    data () {
      return {
        preceptWorker
      }
    },
    components: {
      vmPrecept,
//      vmSearchPanel
    },
    created (){

    },
    computed: {
      precepts (){
        return preceptWorker.preceptCollection.precepts
      },
      loading(){
        return preceptWorker.preceptObserver.loading
      }
    },
    methods: {
      handlePayload(data, path){
        // Remove slash from the path, so it won't mess up the request.
        path = path.replace('/', '')

        // Empty path means we got all requests.
        if (path === '') {
          let requests = []

          for (let index in data) {
            this.prepareRequest(data[index])
            requests.push(data[index])
          }

          this.$store.dispatch('setRequests', requests)
          return
        }

        // Not empty path means change came by, so we have to update existing entries.
        let request = data

        // Null means we have to delete request from array
        if (request === null) {
          this.$store.dispatch('deleteRequest', {id: path})
          return
        }

        // Otherwise we refresh the entry.
        this.prepareRequest(request)
        let index = _.findIndex(this.requests, {id: path})

        if (index !== -1) {
          this.$store.dispatch('amendRequest', request)
        } else {
          this.$store.dispatch('insertRequest', request)
        }
      }
    },

    // Firebase won't store empty arrays, but we need them in app.
    prepareRequest(request){
      if (request.headers === undefined) {
        request.headers = []
      }
    }
  }
</script>

<style scoped>
    .column {
        padding: 0 10px;
    }
</style>
