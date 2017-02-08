import Rule from '../../Entities/Rule.js'

export default class RuleCollection {
  constructor(items: Array<Rule> = []){
    this.setItems(items)
  }
  setItems(items: Array<Rule>){
    this.items = items
  }
}