import Storage from '../../Storage/Storage'

import Rule from '../../Entities/Rule'

export default class {
  storage: Storage

  constructor () {
    this.storage = new Storage({ filename: 'loadsman-rules' })
  }

  create (rule: Rule) {
    this.storage.insert(rule)
  }

  truncate () {
    this.storage.truncate()
  }

  getAll (): Promise<any> {
    return new Promise((resolve) => {
      this.storage.find({}).sort({ path: 1 }).exec((err, doc) => {
        let rules: Rule[] = doc.map((item) => {
          return Object.assign(new Rule, item)
        })
        resolve(rules)
      })
    })
  }
}