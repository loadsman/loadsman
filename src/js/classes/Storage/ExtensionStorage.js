import iframeListener from '../../instances/iframeListener.js'

import uniqid from 'uniqid'

export default class ExtensionStorage {
  constructor(){
    this.resolves = []
    iframeListener.listen('extensionStorageResponse', (response) => {
      let closure = this.resolves[response.requestId]
      delete this.resolves[response.requestId]
      if (closure) {
        closure(response.data)
      }
    })
  }

  sendRequest(method: ['get', 'set'], data): Promise{
    let requestId = uniqid()

    iframeListener.sendCommand('extensionStorageRequest', {
      requestId,
      method,
      data,
    })

    // Return promise and leave the opportunity to resolve it from current object scope.
    return new Promise((resolve) => {
      this.resolves[requestId] = resolve
    })
  }

  get(data) {
    return this.sendRequest('get', data)
  }

  set(data) {
    return this.sendRequest('set', data)
  }
}