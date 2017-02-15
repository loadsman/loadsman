import iframeListener from '../../../instances/iframeListener.js'

import ProjectCollection from './ProjectCollection.js'
import Project from '../../Entities/Project.js'

import uniqid from 'uniqid'

export default class ProjectWorker {
  constructor() {
    this.resolves = []
    iframeListener.listen('haveAllProjects', (data) => {
      let closure = this.resolves[data.requestId]
      delete this.resolves[data.requestId]
      if (closure) {
        closure(data.projects)
      }
    })
  }

  getProjects() {
    let requestId = uniqid()

    iframeListener.sendCommand('getAllProjects', {requestId})

    return new Promise((resolve) => {
      this.resolves[requestId] = resolve
    })
  }

  saveProjects(projects: Array) {
    iframeListener.sendCommand('saveAllProjects', {projects})
  }
}

// export default class {
//   getAll(): Promise{
//     return new Promise((resolve) => {
//       .then((projects: Array) => {
//         projects.map((project) => {
//           return object.assign(new Project, project)
//         })
//
//         resolve(new ProjectCollection(projects))
//       })
//     })
//   }
// }