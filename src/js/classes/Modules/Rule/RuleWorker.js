import Rule from '../../Entities/Rule.js'
import RuleCollection from './RuleCollection.js'
import ObserverSpawner from '../../Ajax/ObserverSpawner.js'

export default class RuleWorker {
  constructor(){
    this.ruleCollection = new RuleCollection()
    this.ruleObserver = new ObserverSpawner().getRuleObserver()
    this.refreshList()
  }

  refreshList(){
    this.ruleObserver.send('get-many').then(({data}) => {
      let rules: Array<Rule> = data.map((rule) => {
        return Object.assign(new Rule, rule)
      })
      this.ruleCollection.setRules(rules)
    })
  }
}