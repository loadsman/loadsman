import AjaxOptions from './AjaxOptions'
import AbstractAdapter from './AdapterContract'
import storage from '../../../instances/resources/storage.js'

export default class StorageAdapter extends AbstractAdapter {
  send (options: AjaxOptions): Promise<any> {

    let promise = storage[options.method](options.data)

    return this._applyReponseInterceptors(promise, options)
  }

  _applyReponseInterceptors (promise: Promise<any>, options: AjaxOptions) {
    return options.interceptResponse.reduce((acc, value) => {
      return value(acc)
    }, promise)
  }
}