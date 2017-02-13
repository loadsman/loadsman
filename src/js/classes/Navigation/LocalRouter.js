export default class LocalRouter {
  constructor(path: string = ''){
    this.path = path
  }

  setPath(path: String):void{
    this.path = path
  }
}