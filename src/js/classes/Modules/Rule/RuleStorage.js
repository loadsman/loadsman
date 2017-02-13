import Storage from "../../Storage/Storage.js"

import Rule from '../../Entities/Rule.js'

export default class {
  constructor() {
    this.storage = new Storage({filename: 'loadsman-rules'})
  }

  create(rule: Rule) {
    this.storage.insert(rule)
  }

  truncate(){
    this.storage.truncate()
  }

  getAll(): Promise{
    return new Promise((resolve) => {
      this.storage.find({}).sort({ path: 1 }).exec( (err, doc) => {
        let rules: Array<Rule> = doc.map((item) => {
          return Object.assign(new Rule, item)
        })
        resolve(rules)
      })
    })
  }
}