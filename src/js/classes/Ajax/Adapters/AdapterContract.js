import AjaxOptions from './AjaxOptions'

class AdapterContract {
  send(options: AjaxOptions) :Promise{
    console.error('Implement send method')

    return new Promise(() => {})
  }
}

export default AdapterContract