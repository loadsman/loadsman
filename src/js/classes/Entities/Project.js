import uniqid from 'uniqid'

export default class Project {
  constructor(host: string){
    this._id = uniqid()
    this.name = host
    this.host = host
  }
}