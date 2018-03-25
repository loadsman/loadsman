<template>
    <div class="project-explorer page">
        <div class="card">
            <p class="card-header-title">
                <span>PROJECTS</span>&nbsp;<span style="color: darkgray">(collections)</span>
            </p>
        </div>
        <div class="card">
            <vm-project-list></vm-project-list>
        </div>
    </div>
</template>


<script lang="ts">
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

<style lang="scss">
    .project-explorer {

    }
</style>