class IframeListener {
  listen(action, closure) {
    window.addEventListener('message', (event) => {
      console.log(event)
    })
  }
}

export default IframeListener