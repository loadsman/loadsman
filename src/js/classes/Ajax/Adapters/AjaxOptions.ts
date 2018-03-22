import HeaderCollection from '../../Modules/Header/HeaderCollection'

/**
 * @class AjaxOptions
 *
 * @property interceptRequest {Array}
 * @property interceptResponse {Array}
 * @property headers {Array<HeaderCollection>}
 * @property data {any}
 * @property credentials {Boolean}
 */
class AjaxOptions {
  url: string = '' // server URL that will be used for the request
  method: string = 'GET' // request method
  baseURL: string = '' // `baseURL` will be prepended to `url` unless `url` is absolute
  interceptRequest = []
  interceptResponse = []
  headers: any = {}
  data: any = {}
  credentials: boolean = false

  getFullUrl () {
    let url = this.baseURL + this.url

    return url
  }

  methodIsGet () {
    return -1 !== ['GET', 'HEAD'].indexOf(this.method)
  }
}

export default AjaxOptions