import Header from '../../Entities/Header.js'

export default class HeaderCollection {
  constructor(items: Array<Header>) {
    this.items = items
  }

  toObject(): Object {
    let headers = {}
    this.items.forEach((header: Header) => {
      if (! header.key){
        return
      }
      headers[header.key] = header.value
    })
    return headers
  }

  clone(): HeaderCollection {
    return new HeaderCollection(this.items.slice(0))
  }
}
