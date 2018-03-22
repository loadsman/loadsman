import Header from '../../Entities/Header.js'

export default class HeaderCollection {
  items: Header[]

  constructor (items: Header[]) {
    this.items = items
  }

  toObject (): any {
    let headers = {}
    this.items.forEach((header: Header) => {
      if (!header.key) {
        return
      }
      headers[header.key] = header.value
    })
    return headers
  }

  clone (): HeaderCollection {
    return new HeaderCollection(this.items.slice(0))
  }
}
