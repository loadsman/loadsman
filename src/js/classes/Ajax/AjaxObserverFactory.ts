import AdapterContract from './Adapters/AdapterContract'
import AjaxObserver from './AjaxObserver'
import AjaxOptions from './Adapters/AjaxOptions'

export default class AjaxObserversFactory {
  _adapter: AdapterContract

  constructor (adapter: AdapterContract) {
    this._adapter = adapter
  }

  createObserver (options: any = {}): AjaxObserver {
    let send = (ajaxOptions: AjaxOptions) => {
      return this._adapter.send(ajaxOptions)
    }

    let ajaxOptions = Object.assign(new AjaxOptions(), options)

    return new AjaxObserver(send, ajaxOptions)
  }
}