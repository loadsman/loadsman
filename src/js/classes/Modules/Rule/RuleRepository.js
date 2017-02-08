import fetchAjaxFactory from '../../../instances/fetchAjaxFactory.js'

class RuleRepository {
  getLoadsmanObserver() {
    return fetchAjaxFactory.createObserver({
      method: 'post',
      credentials: true,
      headers: {
        'Content-Type': 'application/json',
      }
    })
  }

  getRuleObserver() {
    return this.getLoadsmanObserver().extend({
      baseURL: '/loadsman/rules/',
    })
  }
}

export default RuleRepository