/**
 * @class AjaxOptions
 *
 * @property url {String} server URL that will be used for the request
 * @property method {String} request method
 * @property baseURL {String} `baseURL` will be prepended to `url` unless `url` is absolute
 * @property interceptRequest {Array}
 * @property interceptResponse {Array}
 * @property headers {Object}
 * @property data {any}
 * @property credentials {Boolean}
 */
class AjaxOptions {
  constructor() {
    this.url = ''
    this.method = 'get'
    this.baseURL = ''
    this.interceptRequest = []
    this.interceptResponse = []
    this.headers = {}
    this.data = {}
    this.credentials = false
  }

  getFullUrl(){
    return this.baseURL + this.url
  }
}

export default AjaxOptions