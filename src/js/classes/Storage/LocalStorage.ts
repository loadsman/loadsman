import nedb from 'nedb'

export default class LocalStorage {
  store

  constructor () {
    this.store = new nedb({ filename: 'loadsman-dev-storage' })
    this.store.loadDatabase()
  }

  set (object: object) {
    for (let key in object) {
      return new Promise((resolve) => {
        this.store.update({ key }, {
          key,
          value: object[key],
        }, { upsert: true }, (err, num, doc) => {
          resolve()
        })
      })
    }

    throw 'Incorrect object format (no keys)'
  }

  get (filter: string) {
    const filterObject = {
      key: filter,
    }

    return new Promise((resolve) => {
      this.store.findOne(filterObject).exec((err, docs) => {
        let value = docs ? docs.value : docs
        resolve(value)
      })
    })
  }
}