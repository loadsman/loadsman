import axios from 'axios'

import AbstractAdapter from './AdapterContract'
import AjaxOptions from './AjaxOptions'

export default class AxiosAdapter extends AbstractAdapter {
  send (options: AjaxOptions): Promise<any> {

    let promise = axios({
      url: options.getFullUrl(),
      method: options.method,
      headers: options.headers,
      withCredentials: options.credentials,
      data: options.data,
    })

    return this._applyReponseInterceptors(promise, options)
  }

  _applyReponseInterceptors (promise: Promise<any>, options: AjaxOptions) {
    return options.interceptResponse.reduce((acc, value) => {
      return value(acc)
    }, promise)
  }
}
