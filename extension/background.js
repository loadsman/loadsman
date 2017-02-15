function getAllProjects() {
  return new Promise((resolve) => {
    chrome.storage.local.get('projects', resolve)
  })
}

function saveAllProjects(projects){
  chrome.storage.local.set({projects})
  chrome.storage.local.get('projects', (data) => {
    console.log(data)
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
  sendMessage('closeIframe', tab.id)
})

// Accept message
chrome.runtime.onMessage.addListener(
    (request, sender, sendResponse) => {
      let data = request.data

      if (request.from !== 'loadsmanIframe') {
        return
      }

      if (request.command === 'getAllProjects'){
        getAllProjects().then((projects) => {
          let response = {
            requestId: data.requestId,
            projects,
          }
          sendMessage('haveAllProjects', sender.tab.id, response)
        })
      }

      if (request.command === 'saveAllProjects'){
        console.log('saveAllProjects')
        saveAllProjects(data.projects)
      }
    }
)