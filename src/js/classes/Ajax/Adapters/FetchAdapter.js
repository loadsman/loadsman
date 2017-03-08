import AbstractAdapter from './AdapterContract'
import AjaxOptions from './AjaxOptions'
import $ from 'jquery'

class FetchAdapter extends AbstractAdapter {
  send(options: AjaxOptions): Promise {
    let init = {
      method: options.method,
      headers: options.headers.toObject(), // TODO Support headers
      body: this.getData(options),
      credentials: options.credentials ? 'include' : false,
    }
    console.log(options)

    let promise = fetch(this.getInput(options), init)

    return this._applyReponseInterceptors(promise, options)
  }

  getInput(options: AjaxOptions) {
    let url = options.getFullUrl()
    // Append data as query for get request.
    if (options.methodIsGet()) {
      let body = options.data
      let query = typeof body !== 'string' ? $.param(body) : body
      if (query) {
        url += '?' + query
      }
    }
    return url
  }

  getData(options: AjaxOptions) {
    if (options.methodIsGet()) {
      return null
    }
    let body = options.data
    return typeof body === 'string' ? body : JSON.stringify(body)
  }

  _applyReponseInterceptors(promise: Promise, options: AjaxOptions) {
    return options.interceptResponse.reduce((acc, value) => {
      return value(acc)
    }, promise)
  }
}

export default FetchAdapter