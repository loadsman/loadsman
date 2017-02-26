import HeaderCollection from '../Modules/Header/HeaderCollection.js'

export default class {
  constructor() {
    this.type = 'json'
    this.body = ''
    this.headers = new HeaderCollection([])
  }

  setBody(body: string){
    this.body = body
    try {
      JSON.parse(body)
      this.type = 'json'
    }catch (e){
      this.type = 'text'
    }
  }

  getJson(){
    return this.type === 'json' ? JSON.parse(this.body) : null
  }
}