import Project from '../../Entities/Project'
import ProjectCollection from './ProjectCollection'
import ObserverSpawner from '../../Ajax/ObserverSpawner'

import preceptWorker from '../../../instances/workers/preceptWorker'

export default class ProjectWorker {
  currentProject
  projectCollection
  projectObserver

  constructor () {
    this.currentProject = null
    this.projectCollection = new ProjectCollection()
    this.projectObserver = new ObserverSpawner().getProjectObserver()
  }

  refreshList () {
    this.projectObserver.send({ method: 'get', data: 'projects' })
      .then((projects: any[] = []) => {
        return projects.map((project) => {
          return Object.assign(new Project(), project)
        })
      })
      .then((projects: Project[]) => {
        this.projectCollection.setProjects(projects)
        this.refreshCurrentProject()
        this.loadCurrentProjectPrecepts()
      })
  }

  saveProject (project: Project) {
    this.projectCollection.projects.push(project)
    this.saveAllProjects()
  }

  saveAllProjects () {
    let payload = {
      projects: this.projectCollection.projects,
    }
    this.projectObserver.send({ method: 'set', data: payload })
  }

  refreshCurrentProject () {
    let currentHost = window.top.location.host

    let fittingProject = this.projectCollection.projects
      .find((project: Project) => {
        return currentHost === project.host
      })

    this.currentProject = fittingProject || this.createFittingProject(currentHost)
  }

  /**
   * Create project with config appropriate for current domain.
   */
  createFittingProject (host) {
    let project = new Project(host)
    this.saveProject(project)
    return project
  }

  loadCurrentProjectPrecepts () {
    preceptWorker.currentProject = this.currentProject
    preceptWorker.refreshList()
  }
}