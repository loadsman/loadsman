/**
 * Listens for incoming chrome extension messages.
 */

export default class ChromeListener {
  constructor (){
    this._message = chrome.runtime.onMessage
  }

  /**
   * Add listener to action.
   * Example:
   * chromeListener.listen('click', () => {...})
   *
   * @param action
   * @param closure
   */
  listen(action, closure){
    // NOTE Conceptually, it's better to check for exception id for security reasons.
    // But it's kinda complicated so I just pass name to avoid conflicts.
    // this._message.addListener((request, sender, sendResponse) => {
    //   if (request.name !== 'loadsman' && request.action !== action){
    //     return
    //   }
    //
    //   closure()
    // })
  }
}
