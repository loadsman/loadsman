import HeaderCollection from '../Modules/Header/HeaderCollection'

export default class Response {
  type: string = 'json'
  body: string = ''
  headers: HeaderCollection = new HeaderCollection([])

  setBody (body: string) {
    this.body = body
    try {
      JSON.parse(body)
      this.type = 'json'
    } catch (e) {
      this.type = 'text'
    }
  }

  getJson () {
    return this.type === 'json' ? JSON.parse(this.body) : null
  }
}