import HeaderCollection from '../../Modules/Header/HeaderCollection.js'

/**
 * @class AjaxOptions
 *
 * @property url {String} server URL that will be used for the request
 * @property method {String} request method
 * @property baseURL {String} `baseURL` will be prepended to `url` unless `url` is absolute
 * @property interceptRequest {Array}
 * @property interceptResponse {Array}
 * @property headers {Array<HeaderCollection>}
 * @property data {any}
 * @property credentials {Boolean}
 */
class AjaxOptions {
  constructor() {
    this.url = ''
    this.method = 'GET'
    this.baseURL = '/'
    this.interceptRequest = []
    this.interceptResponse = []
    this.headers = {}
    this.data = {}
    this.credentials = false
  }

  getFullUrl(){
    let url = this.baseURL + this.url
    if (url === '//'){
      url = '/'
    }

    return url
  }

  methodIsGet(){
    return -1 !== ['GET', 'HEAD'].indexOf(this.method)
  }
}

export default AjaxOptions