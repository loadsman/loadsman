export default class {
  constructor(path: string = '') {
    let storedPath = this._getFromStorage()
    this.path = storedPath ? storedPath : path
  }

  _getFromStorage(): ?String {
    return localStorage.getItem('loadsman-internal-path')
  }

  _saveInStorage(path: String) {
    localStorage.setItem('loadsman-internal-path', path)
  }

  setPath(path: String): void {
    this.path = path
    this._saveInStorage(path)
  }
}