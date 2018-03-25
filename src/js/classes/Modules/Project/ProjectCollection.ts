import Project from '../../Entities/Project'

export default class ProductCollection {
  projects: Project[] = []

  setProjects (projects: Project[]) {
    this.projects = projects
  }
}