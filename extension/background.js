/**
 * When clicked on extension icon message will be sent.
 */
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, {
    from: 'loadsmanExtension',
    command: 'closeIframe',
  }, function (response) {
  })
})

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
      var data = request.data
      if (data.from !== 'loadsmanIframe'){
        return
      }

      console.log(data)
    }
)