import Precept from '../../Entities/Precept.js'

class PreceptWorker {
  constructor(){
    this.precept = new Precept()
  }

  setPrecept(precept: Precept){
    this.precept = precept
    console.log(precept)
  }
}

export default PreceptWorker