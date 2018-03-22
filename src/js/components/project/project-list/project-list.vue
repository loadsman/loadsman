<template>
    <div class="project-list">
        <div v-for="project in projects"
        >{{project.name}}: {{project.host}}
        </div>
        <button @click="reload"
                class="button is-primary"
        >
            Get all projects
        </button>
        <button @click="create"
                class="button is-primary"
        >
            Create new project
        </button>
    </div>
</template>

<script>
  import Project from '../../../classes/Entities/Project.ts'
  import ProjectCollection from '../../../classes/Modules/Project/ProjectCollection.ts'

  import projectWorker from '../../../instances/workers/projectWorker.js'

  import vmProjectItem from './project-item.vue'

  export default {
    components: {
      vmProjectItem,
    },
    data () {
      return {
        projectWorker
      }
    },
    created(){
      this.reload()
    },
    methods: {
      reload(){
        projectWorker.refreshList()
      },
      create (){
        let project = new Project(top.window.location.host)
        projectWorker.saveProject(project)
        projectWorker.refreshCurrentProject()
      },
    },
    computed: {
      projects(){
        return projectWorker.projectCollection.projects
      },
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .project-list {
        padding: 10px;
    }
</style>