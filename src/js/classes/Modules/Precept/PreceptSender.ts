import Precept from '../../Entities/Precept'
import Header from '../../Entities/Header'
import Response from '../../Entities/Response'
import HeaderCollection from '../Header/HeaderCollection'
import PreceptToAjaxOptionsTransformer from './PreceptToAjaxOptionsTransformer'

import fetchAjaxFactory from '../../../instances/resources/fetchAjaxFactory'

export default class {
  observer

  constructor () {
    this.observer = fetchAjaxFactory.createObserver()
  }

  send (precept: Precept): Promise<Response> {
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

  _castToHeaderCollection (headers): HeaderCollection {
    let headersArray = []
    headers.forEach((value, key) => {
      headersArray.push(new Header(key, value))
    })
    return new HeaderCollection(headers)
  }
}