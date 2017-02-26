import AbstractAdapter from './AdapterContract'
import AjaxOptions from './AjaxOptions'
import $ from 'jquery'

class FetchAdapter extends AbstractAdapter {
  send(options: AjaxOptions): Promise {
    console.log(options)
    this.processGetOptions(options)

    let input = options.getFullUrl()
    let init = {
      method: options.method,
      headers: options.headers, // TODO Support headers
      body: options.body,
      credentials: options.credentials,
    }

    console.log(input)
    console.log(init)
    let promise = fetch(input, init)

    return this._applyReponseInterceptors(promise, options)
  }

  processGetOptions(options : AjaxOptions){
    let isGet = -1 !== ['GET', 'HEAD'].indexOf(options.method)
    if (! isGet){
      return options
    }
    let body = options.body
    let query = isGet && typeof body !== 'string' ? $.param(body): body
    delete options.body
    options.url += '?' + query
  }

  _applyReponseInterceptors(promise: Promise, options: AjaxOptions) {
    return options.interceptResponse.reduce((acc, value) => {
      return value(acc)
    }, promise)
  }
}

export default FetchAdapter