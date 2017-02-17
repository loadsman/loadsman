<template>
    <div class="project-list">
        <div v-for="project in projects"
        >{{project.name}}: {{project.domain}}
        </div>
        <pre>{{projects}}</pre>
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
  import Project from '../../../classes/Entities/Project.js'
  import ProjectCollection from '../../../classes/Modules/Project/ProjectCollection.js'

  import projectWorker from '../../../instances/projectWorker.js'

  import vmProjectItem from './project-item.vue'

  import projectRepository from '../../../instances/projectRepository.js'

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
      this.reload()
    },
    methods: {
      reload(){
        projectRepository.getAll().then((projects) => {
          console.log(projects)
          this.projects = projects
        })
      },
      create (){
        let project = new Project(window.top.location.host)
        this.projects.push(project)

        projectRepository.saveAll(this.projects)
      },
    },
  }
</script>

<style lang="scss" rel="stylesheet/scss">
    .project-list {
        padding: 10px;
    }
</style>