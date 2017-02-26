class Header {
  constructor(key = '', value = '') {
    this.key = key
    this.value = value
  }

  isEmpty(): boolean {
    return (!(this.key || this.value))
  }
}

export default Header