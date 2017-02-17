import ExtensionStorage from '../classes/Storage/ExtensionStorage.js'
import LocalStorage from '../classes/Storage/LocalStorage.js'

let isProduction = process.env['NODE_ENV'] === 'production'

export default isProduction ? new ExtensionStorage() : new LocalStorage()