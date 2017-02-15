(function (document, chrome) {
  var frame

  // NOTE Conceptually, it's better to check for exception id for security reasons.
  // But it's kinda complicated so I just pass name to avoid conflicts.

  // we proxy message from loadsman extension to loadsman iframe and backwards.
  // loadsman-extension -> loadsman-iframe
  chrome.runtime.onMessage.addListener((data, sender, sendResponse) => {
    if (data.from !== 'loadsmanExtension') {
      return
    }

    if (data.command === 'closeIframe') {
      toggleIframe()
    }

    transitMessageToIframe(data)
  })

  // loadsman-iframe -> loadsman-extension
  window.addEventListener('message', (event) => {
    var data = event.data

    if (data.from !== 'loadsmanIframe') {
      return
    }

    if (data.command === 'closeIframe') {
      toggleIframe()
      return
    }

    transitMessageToExtension(data)
  })

  function transitMessageToIframe(message) {
    // Only when iframe is loaded will we try to pass down messages.
    if (frame && frame.contentWindow) {
      frame.contentWindow.postMessage(message, '*')
    }
  }

  function transitMessageToExtension(message) {
    chrome.runtime.sendMessage(message)
  }

  function toggleIframe() {
    frame ? removeIframe() : appendIframe()
  }

  function removeIframe() {
    document.body.removeChild(frame)
    frame = null
    document.body.style.overflow = 'visible'
  }

  function appendIframe() {
    document.body.style.overflow = 'hidden'
    frame = document.createElement('iframe')
    // Configure the frame:
    frame.id = 'loadsman-iframe'
    // Explicitly set border width to avoid flashing of the iframe:
    frame.style.borderWidth = 0
    // Here we fetch main because if we pass main.html as src
    // origin will not be the same as it was for original page
    let source = chrome.runtime.getURL('main.html')
    fetch(source)
        .then(function (response) {
          response.text().then(function (text) {
            frame.srcdoc = text.replace(/build/gi, 'chrome-extension://' + chrome.runtime.id + '/build')

            // Avoid troubles with framesets by working with body only:
            if (document.body.nodeName !== 'BODY') {
              return;
            }
            document.body.appendChild(frame)
          })
        })
  }

}(document, chrome))