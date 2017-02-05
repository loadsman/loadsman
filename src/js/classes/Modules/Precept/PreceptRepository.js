import Precept from '../../Entities/Precept.js'

class PreceptRepository {
  constructor(){

  }

  send(precept: Precept){
    // TODO Stub
    console.group()
    console.log('Sending precept')
    console.log(precept)
    console.groupEnd()
  }
}

export default PreceptRepository