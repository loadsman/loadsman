export default class {
  path: string

  constructor (path: string = '') {
    let storedPath = this._getFromStorage()
    this.path = storedPath ? storedPath : path
  }

  _getFromStorage (): string {
    return localStorage.getItem('loadsman-internal-path')
  }

  _saveInStorage (path: string) {
    localStorage.setItem('loadsman-internal-path', path)
  }

  setPath (path: string): void {
    this.path = path
    this._saveInStorage(path)
  }
}