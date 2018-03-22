import moment from 'moment'
import uniqid from 'uniqid'
import HeaderCollection from '../Modules/Header/HeaderCollection'

export default class Precept {
  _id: string
  body: any
  url: string = ''
  name: string = ''
  method: string = 'GET'
  credentials: boolean = true
  headers: HeaderCollection = new HeaderCollection([])
  createdAt: number = moment().unix()
  updatedAt: number = moment().unix()

  constructor () {
    this._id = uniqid()
    this.body = {}
  }

  setMethod (method: string): void {
    this.method = method
  }

  static get methodsList (): string[] {
    return [
      'GET',
      'POST',
      'PUT',
      'DELETE',
    ]
  }

  setHeaders (headers: HeaderCollection) {
    this.headers = headers
  }
}
