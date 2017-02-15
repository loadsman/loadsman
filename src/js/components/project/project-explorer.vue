<template>
    <div class="project-explorer">
        <div class="card">
            <p class="card-header-title">PROJECTS</p>
        </div>
        <div class="card">
            <vm-project-list></vm-project-list>
        </div>
    </div>
</template>


<script>
  import iframeListener from '../../instances/iframeListener.js'

  import vmProjectList from './project-list/project-list.vue'

  export default {
    components: {
      vmProjectList,
    },
    created(){

    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .project-explorer {
        padding: 10px;
        .card + .card {
            margin-top: 10px;
        }
    }
</style>