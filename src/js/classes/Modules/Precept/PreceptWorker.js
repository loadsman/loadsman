import Project from '../../Entities/Project.js'
import Precept from '../../Entities/Precept.js'
import ObserverSpawner from '../../Ajax/ObserverSpawner.js'

import PreceptCollection from './PreceptCollection.js'

class PreceptWorker {
  constructor(){
    this.currentProject = null
    this.currentPrecept = null
    this.preceptCollection = new PreceptCollection()
    this.preceptObserver = new ObserverSpawner().getPreceptObserver()
  }

  getStorageKey(){
    return 'precepts_' + this.currentProject._id
  }

  refreshList() {
    this.preceptObserver.send({method: 'get', data: this.getStorageKey()})
        .then((precepts) => {
          precepts = precepts ? precepts : []
          return precepts.map((precept) => {
            return Object.assign(new Precept(), precept)
          })
        })
        .then((precepts: Array<Precept>) => {
          this.preceptCollection.setPrecepts(precepts)
        })
  }

  addPrecept(precept: Precept){
    this.preceptCollection.precepts.push(precept)
    this.saveAllPrecepts()
  }

  saveAllPrecepts(){
    let payload = {}
    payload[this.getStorageKey()] = this.preceptCollection.precepts

    this.preceptObserver.send({method: 'set', data: payload})
  }
}

export default PreceptWorker