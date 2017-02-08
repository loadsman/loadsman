import AjaxOptions from './Adapters/AjaxOptions.js'

/**
 * @class AjaxObserver
 *
 * @property loading {integer} Currently loading requests.
 * @property loaded {Boolean} Triggered either then or catch at least once.
 * @property loadedOk {Boolean} Triggered then at least once.
 * @property loadedFail {Boolean} Triggered catch at least once.
 * @property lastLoadOk {Boolean} If last load was successful.
 */
class AjaxObserver {

  constructor(send: Function, options: AjaxOptions) {
    this._send = send // gives access to actual ajax send. Accepts AjaxOptions.
    this._options = options // default options for observer

    this.loading = 0
    this.loaded = false
    this.loadedOk = false
    this.loadedFail = false
    this.lastLoadOk = false
  }

  _startLoading() {
    this.loading++
  }

  _finishLoading(success: Boolean) {
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

  extend(options): AjaxObserver {
    let newOptions = Object.assign(new AjaxOptions(), this._options, options)

    return new AjaxObserver(this._send, newOptions)
  }

  send(options: Object | String) {
    console.log(this._options)
    console.log(options)

    let optionsTmp = options instanceof String ? {url: options} : options
    optionsTmp = Object.assign(new AjaxOptions(), this._options, optionsTmp)

    console.log(optionsTmp)

    this._startLoading()
    let promise = this._send(optionsTmp)
    promise.then(() => {
      this._finishLoading(true)
    })
    promise.catch(() => {
      this._finishLoading(false)
    })

    return promise
  }
}

export default AjaxObserver