import AjaxObserverFactory from '../../classes/Ajax/AjaxObserverFactory.js'
import FetchAdapter from '../../classes/Ajax/Adapters/FetchAdapter'

export default new AjaxObserverFactory(new FetchAdapter)