import Storage from '../../Storage/Storage.js'

import uniqid from 'uniqid'

import Precept from '../../Entities/Precept'

export default class PreceptStorage {
  storage: Storage = new Storage({ filename: 'loadsman-precepts' })

  create (precept: Precept) {
    precept._id = uniqid()
    this.storage.insert(precept)
  }

  update (precept: Precept) {
    precept.updatedAt = Date.now()
    this.storage.update(precept)
  }

  upsert (precept: Precept) {
    precept._id ? this.update(precept) : this.create(precept)
  }
}