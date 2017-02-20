function actWithStorage(method, data) {
  let storage = chrome.storage.local

  return new Promise((resolve) => {
    method === 'get' ? storage.get(data, response => {resolve(response[data])}) : storage.set(data, resolve)
  })
}

function sendMessage(command, tabId, data = {}) {
  chrome.tabs.sendMessage(tabId, {
    command,
    data,
    from: 'loadsmanExtension'
  })
}

/**
 * When clicked on extension icon message will be sent.
 */
chrome.browserAction.onClicked.addListener((tab) => {
  sendMessage('toggleIframe', tab.id)
})

// Accept message
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
      let data = request.data

      if (request.from !== 'loadsmanIframe') {
        return
      }

      if (request.command === 'extensionStorageRequest') {
        actWithStorage(data.method, data.data).then((result) => {
          let response = {
            requestId: data.requestId,
            data: result,
          }
          sendMessage('extensionStorageResponse', sender.tab.id, response)
        })
      }
    }
)