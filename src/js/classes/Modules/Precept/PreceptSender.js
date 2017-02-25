import Precept from '../../Entities/Precept.js'

import fetchAjaxFactory from '../../../instances/resources/fetchAjaxFactory.js'

export default class {
  constructor(){
    this.observer = fetchAjaxFactory.createObserver()
  }

  convertPreceptToOptions(precept: Precept){
    return precept
  }

  send(precept: Precept){
    console.log(precept)
    console.log(this.observer)
    let options = this.convertPreceptToOptions(precept)
    return this.observer.send(options)
  }
}