import AdapterContract from './Adapters/AdapterContract'
import AjaxObserver from './AjaxObserver'
import AjaxOptions from './Adapters/AjaxOptions'

/**
 * @class AjaxObserversFactory
 *
 * @property adapter {AdapterContract}
 */
class AjaxObserversFactory {
  constructor(adapter: AdapterContract) {
    this._adapter = adapter
  }

  createObserver(options: Object = {}): AjaxObserver {
    let send = (ajaxOptions: AjaxOptions) => {
      return this._adapter.send(ajaxOptions)
    }

    let ajaxOptions = Object.assign(new AjaxOptions(), options)

    return new AjaxObserver(send, ajaxOptions)
  }
}

export default AjaxObserversFactory