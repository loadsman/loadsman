(function (document, chrome) {
  var frame

    // NOTE Conceptually, it's better to check for exception id for security reasons.
  // But it's kinda complicated so I just pass name to avoid conflicts.

  // we proxy message from loadsman extension to loadsman iframe and backwards.
  // loadsman-extension -> loadsman-iframe
    chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
      if (data.from !== 'loadsmanExtension'){
        return
      }

      if (data.command === 'closeIframe'){
        toggleIframe()
      }

      if (frame){
        frame.contentWindow.postMessage(data, '*')
      }
    })

  // loadsma-iframe -> loadsman-extension
  window.addEventListener('message', (event) => {
    var data = event.data
    if (data.from !== 'loadsmanIframe'){
      return
    }

    if (data.command === 'closeIframe'){
      toggleIframe()
    }

    chrome.runtime.sendMessage(data);
  })

  function toggleIframe(){
    frame ? removeIframe() : appendIframe()
  }

  function removeIframe(){
    document.body.removeChild(frame)
    frame = null
  }

  function appendIframe(){
    frame = document.createElement('iframe')
    // Configure the frame:
    frame.id = 'loadsman-iframe'
    // Explicitly set border width to avoid flashing of the iframe:
    frame.style.borderWidth = 0
    frame.src = chrome.runtime.getURL('main.html')

    // Avoid troubles with framesets by working with body only:
    if (document.body.nodeName !== 'BODY') {
      return;
    }
    document.body.appendChild(frame)
  }

}(document, chrome))