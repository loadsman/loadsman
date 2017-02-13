import nedb from 'nedb'

export default class {
  constructor(options = {}) {
    this.store = new nedb(options)
    this.store.loadDatabase()
  }

  generateUniqueId() {
    return uniqid()
  }

  insert(object: object) {
    this.store.insert(object)
  }

  update(object: object) {
    this.store.update({_id: object._id}, object)
  }

  find(filter: object) {
    return this.store.find(filter)
  }

  findOne(filter: object) {
    return this.store.find(filter)
  }

  filterBy(filter: object) {
    return this.store.find(filter)
  }

  truncate() {
    this.store.remove({}, {multi: true})
  }
}