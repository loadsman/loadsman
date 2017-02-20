import Project from '../../Entities/Project.js'

export default class {
  constructor(){
    this.projects = []
  }

  setProjects(projects: Array<Project>){
    this.projects = projects
  }
}