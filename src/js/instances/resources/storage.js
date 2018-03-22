import ExtensionStorage from '../../classes/Storage/ExtensionStorage.ts'
import LocalStorage from '../../classes/Storage/LocalStorage.ts'

let isProduction = process.env['NODE_ENV'] === 'production'

export default isProduction ? new ExtensionStorage() : new LocalStorage()