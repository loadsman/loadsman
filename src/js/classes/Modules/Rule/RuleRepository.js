import Rule from '../../Entities/Rule.js'
import _ from 'lodash'

import axios from 'axios'
let instance = axios.create({
  baseURL: '/loadsman/',
  responseType: 'json',
  withCredentials: true,
})
instance.interceptors.response.use((response) => {
  response.data = response.data.data
  return response
})

class RuleRepository {

  constructor() {
    this.rules = []
    this.isLoading = false
    this.loadingComplete = false
    this.errors = null
  }

  loadAll() {
    if (this.isLoading) {
      return
    }
    this.isLoading = true
    instance.post('routes/index')
            .then(({data}) => {
              let rules = _.map(data, (rule) => {
                return _.assign(new Rule, rule)
              })
              // console.group('Got rules from server: ')
              // console.log(rules)
              // console.groupEnd()
              this.rules = rules
              this.loaded = true
              this.isLoading = false
            })
            .catch((result) => {
              console.log(result)
              // let response = {
              //   status: status + ' : ' + error,
              //   data: responseText
              // }
              // commit('set-error-loading', response)

              this.isLoading = false
            })
  }
}

export default RuleRepository