import AbstractAdapter from './AdapterContract'
import AjaxOptions from './AjaxOptions'

class FetchAdapter extends AbstractAdapter {
  send(options: AjaxOptions): Promise {
    console.log(options)
    let input = options.getFullUrl()
    let init = {
      method: options.method,
      headers: options.headers, // TODO Support headers
      body: options.data,
      credentials: options.credentials,
    }

    let promise = fetch(input, init)

    return this._applyReponseInterceptors(promise, options)
  }

  _applyReponseInterceptors(promise: Promise, options: AjaxOptions) {
    return options.interceptResponse.reduce((acc, value) => {
      return value(acc)
    }, promise)
  }
}

export default FetchAdapter