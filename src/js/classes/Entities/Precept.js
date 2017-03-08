import moment from 'moment'

import uniqid from 'uniqid'

import HeaderCollection from '../Modules/Header/HeaderCollection.js'

/**
 * @class Precept
 * @property _id {String}
 * @property body {String} json request
 * @property uri {String}
 * @property name {Number}
 * @property method {String}
 * @property headers {Array<HeaderCollection>}
 * @property createdAt {integer}
 * @property updatedAt {integer}
 */
class Precept {
  constructor() {
    this._id = uniqid()
    this.body = {}
    this.url = '/'
    this.name = ''
    this.method = 'GET'
    this.handleXSRF = true
    this.credentials = true
    this.headers = new HeaderCollection([])
    this.createdAt = moment().unix()
    this.updatedAt = moment().unix()
  }

  setMethod(method: string): void {
    this.method = method
  }

  static get methodsList(): Array {
    return [
        'GET',
        'POST',
        'PUT',
        'DELETE',
    ]
  }

  setHeaders(headers: HeaderCollection) {
    this.headers = headers
  }
}

export default Precept