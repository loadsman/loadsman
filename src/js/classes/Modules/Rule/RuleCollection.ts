import Rule from '../../Entities/Rule'

export default class RuleCollection {
  rules: Rule[] = []

  setRules (rules: Array<Rule>) {
    this.rules = rules
  }
}