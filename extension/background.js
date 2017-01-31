/**
 * When clicked on extension icon message will be sent.
 */
chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.sendMessage(tab.id, {
    name: 'loadsman',
    action: 'icon-click'
  }, function (response) {
  })
})