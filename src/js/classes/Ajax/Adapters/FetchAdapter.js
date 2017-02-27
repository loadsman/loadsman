import AbstractAdapter from './AdapterContract'
import AjaxOptions from './AjaxOptions'
import $ from 'jquery'

class FetchAdapter extends AbstractAdapter {
  send(options: AjaxOptions): Promise {
    console.log(options)
    this.processOptions(options)

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

  /**
   * Prepare options to be sent via fetch.
   *
   * @param options
   */
  processOptions(options: AjaxOptions) {
    if (-1 !== ['GET', 'HEAD'].indexOf(options.method)) {
      this.processGetOptions(options)
    } else {
      this.processNotGetOptions(options)
    }
  }

  processGetOptions(options: AjaxOptions) {
    // Remove body, querify and append to url.
    let body = options.body
    delete options.body

    let query = typeof body !== 'string' ? $.param(body) : body
    if (!query) {
      return
    }

    options.url += '?' + query
  }

  processNotGetOptions(options: AjaxOptions) {
    // Stringify body when needed.
    let body = options.body
    options.body = typeof body === 'string' ? body : JSON.stringify(body)
  }

  _applyReponseInterceptors(promise: Promise, options: AjaxOptions) {
    return options.interceptResponse.reduce((acc, value) => {
      return value(acc)
    }, promise)
  }
}

export default FetchAdapter