import AjaxObserver from '../../Ajax/AjaxObserver.js'
import fetchAjaxFactory from '../../../instances/fetchAjaxFactory.js'

class LoadsmanObserversFactory {
  getDefaultOptions() {
    return {
      method: 'post',
      credentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      interceptResponse: [
        (promise: Promise) => promise.then((response) => {
          return response.data
        })
      ]
    }
  }

  getRuleObserver(): AjaxObserver {
    let options = this.getDefaultOptions()
    options.baseURL = '/loadsman/rules/'

    return fetchAjaxFactory.createObserver(options)
  }

  getFrameworkObserver(): AjaxObserver {
    let options = this.getDefaultOptions()
    options.baseURL = '/loadsman/framework/'

    return fetchAjaxFactory.createObserver(options)
  }
}

export default LoadsmanObserversFactory