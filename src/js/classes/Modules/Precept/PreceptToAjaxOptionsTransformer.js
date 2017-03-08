import AjaxOptions from '../../Ajax/Adapters/AjaxOptions.js'
import Precept from '../../Entities/Precept.js'
import HeaderCollection from '../Header/HeaderCollection.js'
import Header from '../../Entities/Header.js'

import cookies from 'js-cookie'

/**
 * Transformer also applies all precept specific configs.
 */
export default class PreceptToAjaxOptionsTransformer {
  transform(precept: Precept): AjaxOptions {
    let ajaxOptions = new AjaxOptions()
    ajaxOptions.url = precept.url
    ajaxOptions.method = precept.method
    ajaxOptions.headers = precept.headers.clone()
    if (precept.handleXSRF && ! ajaxOptions.methodIsGet()) {
      this.appendXsrfTokenToHeaders(ajaxOptions)
    }
    ajaxOptions.credentials = precept.credentials
    ajaxOptions.data = precept.body

    return ajaxOptions
  }

  appendXsrfTokenToHeaders(ajaxOptions: AjaxOptions) {
    let token = cookies.get('XSRF-TOKEN')
    token && ajaxOptions.headers.items.push(new Header('X-XSRF-TOKEN', token))
  }
}