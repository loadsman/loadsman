import AjaxObserver from './AjaxObserver.js'
import axiosAjaxFactory from '../../instances/resources/axiosAjaxFactory.js'
import storageAccessFactory from '../../instances/resources/storageAccessFactory.js'

export default class ObserverSpawner {
  getDefaultOptions (): any {
    return {
      method: 'post',
      credentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      interceptResponse: [
        (promise: Promise<any>) => promise
          .then(response => response.data),
      ],
    }
  }

  getRuleObserver (): AjaxObserver {
    let options = this.getDefaultOptions()
    options.baseURL = '/loadsman/rules/'

    return axiosAjaxFactory.createObserver(options)
  }

  getFrameworkObserver (): AjaxObserver {
    let options = this.getDefaultOptions()
    options.baseURL = '/loadsman/framework/'

    return axiosAjaxFactory.createObserver(options)
  }

  getPreceptObserver (): AjaxObserver {
    return storageAccessFactory.createObserver({})
  }

  getProjectObserver (): AjaxObserver {
    return storageAccessFactory.createObserver({})
  }
}