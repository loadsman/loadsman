class Header {
  constructor() {
    this.key = ''
    this.value = ''
  }

  isEmpty(): boolean {
    return (!(this.key || this.value))
  }
}

export default Header