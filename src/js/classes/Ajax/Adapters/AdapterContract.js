import AjaxOptions from './AjaxOptions'

class AdapterContract {
  insert(options: AjaxOptions) :Promise{
    console.error('Implement send method')

    return new Promise(() => {})
  }
}

export default AdapterContract