import AjaxObserverFactory from '../../classes/Ajax/AjaxObserverFactory.js'
import StorageAdapter from '../../classes/Ajax/Adapters/StorageAdapter.js'

export default new AjaxObserverFactory(new StorageAdapter)