import Precept from '../../Entities/Precept.js'
import Header from '../../Entities/Header.js'
import Response from '../../Entities/Response.js'
import HeaderCollection from '../Header/HeaderCollection.js'
import AjaxOptions from '../../Ajax/Adapters/AjaxOptions.js'
import PreceptToAjaxOptionsTransformer from './PreceptToAjaxOptionsTransformer.js'

import fetchAjaxFactory from '../../../instances/resources/fetchAjaxFactory.js'

export default class {
  constructor() {
    this.observer = fetchAjaxFactory.createObserver()
  }

  send(precept: Precept): Promise {
    let transformer = new PreceptToAjaxOptionsTransformer
    let ajaxOptions = transformer.transform(precept)
    console.log(ajaxOptions)

    return new Promise((resolve) => {
      this.observer.send(ajaxOptions).then((fetchResponse) => {
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