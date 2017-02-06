import Precept from '../../Entities/Precept.js'

class PreceptWorker {
  constructor(){
    this.precept = null
  }

  setPrecept(precept: Precept){
    this.precept = precept
  }
}

export default PreceptWorker