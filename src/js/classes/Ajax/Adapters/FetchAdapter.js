import AbstractAdapter from './AdapterContract'
import AjaxOptions from './AjaxOptions'

class FetchAdapter extends AbstractAdapter{
  send(options: AjaxOptions): Promise{
    let input = options.getFullUrl()
    let init = {
      method: options.method,
      headers: options.headers, // TODO Support headers
      body: options.data,
      credentials: options.credentials,
    }

    return fetch(input, init)
  }
}

export default FetchAdapter