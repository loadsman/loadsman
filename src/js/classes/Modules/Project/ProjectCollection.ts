import Project from '../../Entities/Project.js'

export default class ProductCollection {
  projects: Project[] = []

  setProjects (projects: Project[]) {
    this.projects = projects
  }
}