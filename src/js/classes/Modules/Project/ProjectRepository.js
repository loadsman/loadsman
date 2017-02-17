import storage from '../../../instances/storage.js'

import Project from '../../Entities/Project.js'

export default class ProjectRepository {
  getAll(): Array {
    return storage.get('projects').then((projects: Array) => {
      return projects.map((project) => {
        return Object.assign(new Project(), project)
      })
    })
  }

  saveAll(projects): Promise {
    return storage.set({projects})
  }
}