import AjaxObserver from '../../Ajax/AjaxObserver.js'
import fetchAjaxFactory from '../../../instances/fetchAjaxFactory.js'

class RuleRepository {
    getDefaultOptions(){
    return {
      method: 'post',
      credentials: true,
      headers: {
        'Content-Type': 'application/json',
      },
      interceptResponse: [
        promise => new Promise((resolve, reject) => {
          promise.then((response) => {
            response.json().then((jsonResponse) => {
              resolve(jsonResponse)
            }).catch((result) => {
              reject(result)
            })
          })
        })
      ]
    }
  }

  getRuleObserver(): AjaxObserver {
    let options = this.getDefaultOptions()
    options.baseURL = '/loadsman/rules/'

    return fetchAjaxFactory.createObserver(options)
  }
}

export default RuleRepository