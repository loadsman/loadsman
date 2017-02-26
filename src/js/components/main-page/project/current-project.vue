<template>
    <div class="current-project">
        <table class="table" v-if="currentProject">
            <tr>
                <th colspan="2">Current project</th>
            </tr>
            <tr>
                <td>Name</td>
                <td>{{currentProject.name}}</td>
            </tr>
            <tr>
                <td>Host</td>
                <td>{{currentProject.host}}</td>
            </tr>
        </table>
        <div v-else-if="! loading" class="notification is-warning">
            <div class="content">
                <h2>No projects found for current domain.</h2>
                <p>Care to <a @click="createProject">create one</a>?</p>
            </div>
        </div>
    </div>
</template>

<script>
  import Project from '../../../classes/Entities/Project.js'

  import projectWorker from '../../../instances/workers/projectWorker.js'

  export default {
    data () {
      return {
        projectWorker
      }
    },
    created(){
      projectWorker.refreshList()
    },
    methods: {
      createProject (){
        let project = new Project(top.window.location.host)
        projectWorker.saveProject(project)
        projectWorker.refreshCurrentProject()
      },
    },
    computed: {
      currentProject(){
        return projectWorker.currentProject
      },
      loading(){
        return projectWorker.projectObserver.loading
      }
    }
  }
</script>

<style lang="scss" rel="stylesheet/scss">

</style>