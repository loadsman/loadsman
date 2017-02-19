import Rule from '../../Entities/Rule.js'

export default class RuleCollection {
  constructor(){
    this.rules = []
  }
  setRules(rules: Array<Rule>){
    this.rules = rules
  }
}