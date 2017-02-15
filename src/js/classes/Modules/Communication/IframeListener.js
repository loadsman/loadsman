export default class {
  listen(command, closure) {
    window.addEventListener('message', (event) => {
      let response = event.data
      if(response && response.from === 'loadsmanExtension' && response.command === command){
        closure(response.data)
      }
    })
  }
  sendCommand(command: string, data: object = {}){
    parent.postMessage({
      from: 'loadsmanIframe',
      command,
      data,
    }, '*')
  }
}
