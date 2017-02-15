import ProjectWorker from ''

import ProjectCollection from './ProjectCollection.js'
import Project from '../../Entities/Project.js'

export default class {
  getAll(): Promise{
    return new Promise((resolve) => {
      iframeListener.sendCommand('getAllProjects').then((projects: Array) => {
        projects.map((project) => {
          return object.assign(new Project, project)
        })

        resolve(new ProjectCollection(projects))
      })
    })
  }
}