<template>
    <div class="project-list">
        <div v-for="project in projects"
        >{{project.name}}: {{project.domain}}
        </div>
        <pre>{{projects}}</pre>
        <button @click="create"
                class="button is-primary"
        >Create new project
        </button>
    </div>
</template>

<script>
  import Project from '../../../classes/Entities/Project.js'
  import ProjectCollection from '../../../classes/Modules/Project/ProjectCollection.js'

  import projectWorker from '../../../instances/projectWorker.js'

  import vmProjectItem from './project-item.vue'

  export default {
    components: {
      vmProjectItem,
    },
    data () {
      return {
        projects: []
      }
    },
    created(){
      projectWorker.getProjects().then((projects) => {
        console.log(projects)
      })
    },
    methods: {
      create (){
        this.projects.push(new Project(window.top.location.hostname))

        projectWorker.saveProjects(this.projects)
      },
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .project-list {
        padding: 10px;
    }
</style>