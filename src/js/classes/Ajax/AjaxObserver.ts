import AjaxOptions from './Adapters/AjaxOptions'

export default class AjaxObserver {
  _send: Function // gives access to actual ajax send. Accepts AjaxOptions.
  _options: AjaxOptions // default options for observer

  loading: number = 0 // Currently loading requests.
  loaded: boolean = false // Triggered either then or catch at least once.
  loadedOk: boolean = false // Triggered then at least once.
  loadedFail: boolean = false // Triggered catch at least once.
  lastLoadOk: boolean = false // If last load was successful.

  constructor (send: Function, options: AjaxOptions) {
    this._send = send
    this._options = options
  }

  _startLoading () {
    this.loading++
  }

  _finishLoading (success: boolean) {
    this.loading--
    this.loaded = true
    this.lastLoadOk = success
    if (success) {
      this.loadedOk = true
    }
    if (!success) {
      this.loadedFail = true
    }
  }

  send (options: AjaxOptions | Object | String) {
    if (!(options instanceof AjaxOptions)) {
      let optionsTmp = typeof options === 'string' ? { url: options } : options
      options = Object.assign(new AjaxOptions(), this._options, optionsTmp)
    }

    this._startLoading()
    let promise = this._send(options)
    promise.then(() => {
      this._finishLoading(true)
    })
    promise.catch(() => {
      this._finishLoading(false)
    })

    return promise
  }
}