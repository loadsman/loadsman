import AjaxObserverFactory from '../../classes/Ajax/AjaxObserverFactory.ts'
import AxiosAdapter from '../../classes/Ajax/Adapters/AxiosAdapter'

export default new AjaxObserverFactory(new AxiosAdapter)