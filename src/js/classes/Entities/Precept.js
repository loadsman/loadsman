import HeaderCollection from '../Modules/Header/HeaderCollection.js'

/**
 * @class Precept
 * @property body {String} json request
 * @property path {String}
 * @property name {Number}
 * @property method {String}
 * @property headers {String}
 */
class Precept {
  constructor() {
    this.body = '""'
    this.path = '/'
    this.name = ''
    this.method = 'GET'
    this.setHeaders(new HeaderCollection([]))
  }

  setMethod(method: string): void {
    this.method = method
  }

  setHeaders(headers: HeaderCollection) {
    this.headers = headers
  }
}

export default Precept