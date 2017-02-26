import Header from '../../Entities/Header.js'

class HeaderCollection {
  constructor(items: Array<Header>) {
    this.items = items
  }

  toObject(){
    return {}
  }
}

export default HeaderCollection