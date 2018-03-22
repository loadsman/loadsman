import uniqid from 'uniqid'

export default class Project {
  _id: string
  name: string
  host: string

  constructor (host: string = '') {
    this._id = uniqid()
    this.name = host
    this.host = host
  }
}