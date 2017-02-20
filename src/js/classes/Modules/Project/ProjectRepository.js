import ObserverSpawner

import Project from '../../Entities/Project.js'

export default class ProjectRepository {
  getAll(): Promise {
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