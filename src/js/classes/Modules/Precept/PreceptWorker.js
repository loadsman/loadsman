import Project from '../../Entities/Project.js'
import Precept from '../../Entities/Precept.js'
import ObserverSpawner from '../../Ajax/ObserverSpawner.js'

import Header from '../../Entities/Header.js'
import PreceptCollection from './PreceptCollection.js'
import HeaderCollection from '../Header/HeaderCollection.js'

class PreceptWorker {
  constructor() {
    this.currentProject = null
    this.currentPrecept = null
    this.preceptCollection = new PreceptCollection()
    this.preceptObserver = new ObserverSpawner().getPreceptObserver()
  }

  getStorageKey() {
    return 'precepts_' + this.currentProject._id
  }

  refreshList() {
    this.preceptObserver.send({method: 'get', data: this.getStorageKey()})
        .then((precepts) => {
          precepts = precepts ? precepts : []
          return precepts.map((rawPrecept) => {
            let precept : Precept = Object.assign(new Precept(), rawPrecept)
            precept.setHeaders(this._mapHeaders(rawPrecept.headers.items))
            return precept
          })
        })
        .then((precepts: Array<Precept>) => {
          this.preceptCollection.setPrecepts(precepts)
        })
  }

  _mapHeaders(headers: Array){
    console.log(headers)
    headers = headers.map((rawHeader) => {
      return Object.assign(new Header(), rawHeader)
    })
    return new HeaderCollection(headers)
  }

  addPrecept(precept: Precept) {
    this.preceptCollection.precepts.push(precept)
    this.saveAllPrecepts()
  }

  removePrecept(precept: Precept) {
    let index = this.preceptCollection.precepts.indexOf(precept)
    this.preceptCollection.precepts.splice(index, 1)
    this.saveAllPrecepts()
  }

  saveAllPrecepts() {
    let payload = {}
    console.log(this.getStorageKey())
    payload[this.getStorageKey()] = this.preceptCollection.precepts

    this.preceptObserver.send({method: 'set', data: payload})
  }
}

export default PreceptWorker