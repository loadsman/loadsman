<template>
    <div class="main-page">
        <div class="card">
            <p class="card-header-title">MAIN PAGE</p>
        </div>
        <transition name="fade" mode="out-in">
            <div class="card load-spinner__container"
                 key="spinner"
                 v-if="frameworkObserver.loading"
            >
                <div class="load-spinner load-spinner_bottom-right"></div>
            </div>
            <div class="card notification is-danger"
                 key="notification"
                 v-else-if=" ! frameworkObserver.loading && frameworkObserver.loaded && ! frameworkObserver.lastLoadOk"
            >
                <div class="content is-inverted">
                    <h2>Unable to connect :\.</h2>
                    <p>Check console for details. Then maybe <a
                            @click="reload">try again</a>.</p>

                </div>
            </div>
            <div key="framework" v-if="framework">
                <div class="card">
                    <vm-framework-show :framework="framework"
                                       @reload="reload"
                    ></vm-framework-show>
                </div>
            </div>
        </transition>
        <div class="card">
            <vm-current-project></vm-current-project>
        </div>
    </div>
</template>

<script lang="ts">
  import RuleObserverFactory from '../../classes/Ajax/ObserverSpawner.ts'

  import Framework from '../../classes/Entities/Framework'
  import vmFrameworkShow from './framework/framework-show.vue'
  import vmCurrentProject from './project/current-project.vue'

  import currentFramework from '../../instances/currentFramework.js'

  export default {
    data () {
      return {
        frameworkObserver: new RuleObserverFactory().getFrameworkObserver(),
        currentFramework,
      }
    },
    components: {
      vmFrameworkShow,
      vmCurrentProject,
    },
    created(){
      this.reload()
    },
    methods: {
      reload (){
        this.framework = null
        this.frameworkObserver.send('get-data').then(({data}) => {
          this.framework = Object.assign(new Framework, data)
        })
      },
    },
    computed: {
      framework: {
        get (){
          return this.currentFramework.framework
        },
        set(framework){
          this.currentFramework.framework = framework
        }
      }
    }
  }
</script>

<style lang="scss">
    .main-page {
        padding: 10px;
    }
</style>