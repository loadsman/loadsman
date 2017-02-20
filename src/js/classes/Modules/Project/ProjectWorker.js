import Project from '../../Entities/Project.js'
import ProjectCollection from './ProjectCollection.js'
import ObserverSpawner from '../../Ajax/ObserverSpawner.js'

export default class ProjectWorker {
  constructor() {
    this.currentProject = null
    this.projectCollection = new ProjectCollection()
    this.projectObserver = new ObserverSpawner().getProjectObserver()
  }

  refreshList() {
    this.projectObserver.send({method: 'get', data: 'projects'})
        .then((projects: Array) => {
          return projects.map((project) => {
            return Object.assign(new Project(), project)
          })
        })
        .then((projects: Array<Project>) => {
          this.projectCollection.setProjects(projects)
          this.refreshCurrentProject()
        })
  }

  saveProject(project: Project){
    this.projectCollection.projects.push(project)
    this.saveAllProjects()
  }

  saveAllProjects(){
    let payload = {
      projects: this.projectCollection.projects
    }
    this.projectObserver.send({method: 'set', data: payload})
  }

  refreshCurrentProject() {
    let currentHost = window.top.location.host

    this.currentProject = this.projectCollection.projects.find((project: Project) => {
      return currentHost === project.host
    })
  }
}