import Precept from '../../Entities/Precept.js'

export default class PreceptCollection {
  constructor(){
    this.precepts = []
  }

  setPrecepts(precepts: Precept){
    this.precepts = precepts
  }
}