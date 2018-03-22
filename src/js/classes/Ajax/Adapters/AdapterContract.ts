import AjaxOptions from './AjaxOptions'

export default class AdapterContract {
  insert (options: AjaxOptions): Promise<any> {
    console.error('Implement send method')

    return new Promise(() => {
    })
  }

  // TODO Check this after project is up. Added to calm TS complaints.
  send (ajaxOptions: AjaxOptions) {

  }
}