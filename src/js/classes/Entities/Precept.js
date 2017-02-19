import HeaderCollection from '../Modules/Header/HeaderCollection.js'

/**
 * @class Precept
 * @property _id {String}
 * @property body {String} json request
 * @property uri {String}
 * @property name {Number}
 * @property method {String}
 * @property headers {String}
 * @property createdAt {integer}
 * @property updatedAt {integer}
 */
class Precept {
  constructor() {
    this._id = undefined
    this.body = '{}'
    this.uri = '/'
    this.name = ''
    this.method = 'GET'
    this.setHeaders(new HeaderCollection([]))
    this.createdAt = Date.now()
    this.updatedAt = Date.now()
  }

  setMethod(method: string): void {
    this.method = method
  }

  setHeaders(headers: HeaderCollection) {
    this.headers = headers
  }
}

export default Precept