import Storage from '../../Storage/Storage.js'

import uniqid from 'uniqid'

import Precept from '../../Entities/Precept.js'

export default class{
  constructor(){
    this.storage = new Storage({filename: 'loadsman-precepts'})
  }

  create(precept: Precept){
    precept._id = uniqid()
    this.storage.insert(precept)
  }

  update(precept: Precept){
    precept.updatedAt = Date.now()
    this.storage.update(precept)
  }

  upsert(precept: Precept){
    precept._id ? this.update(precept) : this.create(precept)
  }
}