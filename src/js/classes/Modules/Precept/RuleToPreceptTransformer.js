import Rule from '../../Entities/Rule.js'
import Precept from '../../Entities/Precept.js'

export default class {
  constructor() {

  }

  transform(rule: Rule): Precept {
    let precept = new Precept()

    precept.method = this.getSingleMethod(rule)
    precept.url = rule.uri
    precept.name = rule.name

    return precept
  }

  getSingleMethod(rule: Rule): string {
    let method = rule.methods[0]
    return method ? method : ['GET']
  }
}
