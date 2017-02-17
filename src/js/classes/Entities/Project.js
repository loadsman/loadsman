import uniqid from 'uniqid'

export default class {
  constructor(domain: string){
    this._id = uniqid()
    this.name = domain
    this.domain = domain
  }
}