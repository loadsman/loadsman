export default class Header {
  key: string
  value: string

  constructor (key = '', value = '') {
    this.key = key
    this.value = value
  }

  isEmpty (): boolean {
    return (!(this.key || this.value))
  }
}