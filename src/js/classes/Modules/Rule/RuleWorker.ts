import Rule from '../../Entities/Rule'
import RuleCollection from './RuleCollection'
import ObserverSpawner from '../../Ajax/ObserverSpawner'
import AjaxObserver from '../../Ajax/AjaxObserver'

export default class RuleWorker {
  ruleCollection: RuleCollection = new RuleCollection()
  ruleObserver: AjaxObserver

  constructor () {
    this.ruleCollection = new RuleCollection()
    this.ruleObserver = new ObserverSpawner().getRuleObserver()
  }

  refreshList () {
    return this.ruleObserver.send('get-many').then(({ data }) => {
      let rules: Array<Rule> = data.map((rule) => {
        return Object.assign(new Rule, rule)
      })
      this.ruleCollection.setRules(rules)
    })
  }
}