import Precept from '../../Entities/Precept.js'

class PreceptWorker {
  constructor(){
    this.precept = new Precept()
  }

  setPrecept(precept: Precept){
    this.precept = precept
  }
}

export default PreceptWorker