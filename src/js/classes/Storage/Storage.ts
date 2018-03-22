import nedb from 'nedb'
import uniqid from 'uniqid'

export default class {
  store

  constructor (options = {}) {
    this.store = new nedb(options)
    this.store.loadDatabase()
  }

  generateUniqueId (): string {
    return uniqid()
  }

  insert (object: any) {
    this.store.insert(object)
  }

  update (object: any) {
    this.store.update({ _id: object._id }, object)
  }

  find (filter: any) {
    return this.store.find(filter)
  }

  findOne (filter: any) {
    return this.store.find(filter)
  }

  filterBy (filter: any) {
    return this.store.find(filter)
  }

  truncate () {
    this.store.remove({}, { multi: true })
  }
}