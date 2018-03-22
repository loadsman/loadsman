import AjaxOptions from '../../Ajax/Adapters/AjaxOptions'
import Precept from '../../Entities/Precept'
import Header from '../../Entities/Header'

import cookies from 'js-cookie'

/**
 * Transformer also applies all precept specific configs.
 */
export default class PreceptToAjaxOptionsTransformer {
  transform (precept: Precept): AjaxOptions {
    let ajaxOptions = new AjaxOptions()
    ajaxOptions.url = precept.url
    ajaxOptions.method = precept.method
    ajaxOptions.headers = precept.headers.clone()
    if (!ajaxOptions.methodIsGet()) {
      // TODO if had this line 'precept.handleXSRF && '. I was unable to figure out what it does.
      this.appendXsrfTokenToHeaders(ajaxOptions)
    }
    ajaxOptions.credentials = precept.credentials
    ajaxOptions.data = precept.body

    return ajaxOptions
  }

  appendXsrfTokenToHeaders (ajaxOptions: AjaxOptions) {
    let token = cookies.get('XSRF-TOKEN')
    token && ajaxOptions.headers.items.push(new Header('X-XSRF-TOKEN', token))
  }
}