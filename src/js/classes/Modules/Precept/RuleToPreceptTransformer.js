import Rule from '../../Entities/Rule.js'
import Precept from '../../Entities/Precept.js'

export default class {
  constructor() {

  }

  transform(rule: Rule): Precept {
    let precept = new Precept()

    precept.method = rule.methods[0]
    precept.url = rule.uri
    precept.name = rule.name

    return precept
  }
}
