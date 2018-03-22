import AjaxObserverFactory from '../../classes/Ajax/AjaxObserverFactory.ts'
import StorageAdapter from '../../classes/Ajax/Adapters/StorageAdapter.ts'

export default new AjaxObserverFactory(new StorageAdapter)