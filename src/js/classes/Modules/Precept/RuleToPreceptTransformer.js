import Rule from '../../Entities/Rule.js'
import Precept from '../../Entities/Precept.js'

class RuleToPreceptTransformer {
  constructor() {

  }

  transform(rule: Rule): Precept {
    let precept = new Precept()

    return {
      method: this.route.methods[0],
      path: this.route.path,
      name: "",
      body: this.route.hasOwnProperty('body') ? this.route.body : '""',
      wheres: this.route.hasOwnProperty('wheres') ? this.route.wheres : {},
      headers: this.route.hasOwnProperty('headers') ? this.route.headers : [],
      config: {
        addCRSF: true,
      }
    }

    return new Precept
  }
}

export default RuleToPreceptTransformer