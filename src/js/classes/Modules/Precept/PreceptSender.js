import Precept from '../../Entities/Precept.js'
import Header from '../../Entities/Header.js'
import Response from '../../Entities/Response.js'
import HeaderCollection from '../Header/HeaderCollection.js'

import fetchAjaxFactory from '../../../instances/resources/fetchAjaxFactory.js'

export default class {
  constructor() {
    this.observer = fetchAjaxFactory.createObserver()
  }

  convertPreceptToOptions(precept: Precept) {
    let options = Object.assign({}, precept)
    options.data = precept.body
    return options
  }

  send(precept: Precept): Promise {
    let options = this.convertPreceptToOptions(precept)

    return new Promise((resolve) => {
      this.observer.send(options).then((fetchResponse) => {
        fetchResponse.text().then((text) => {
          let response = new Response()
          response.headers = this._castToHeaderCollection(fetchResponse.headers)
          response.setBody(text)
          resolve(response)
        })
      })
    })
  }

  _castToHeaderCollection(headers): HeaderCollection {
    let headersArray = []
    headers.forEach((value, key) => {
      headersArray.push(new Header(key, value))
    })
    return new HeaderCollection(headers)
  }
}