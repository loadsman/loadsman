Hi, Loadsman here.

## What do we have ATM?

[![Join the chat at https://gitter.im/loadsman-chat/Lobby](https://badges.gitter.im/loadsman-chat/Lobby.svg)](https://gitter.im/loadsman-chat/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

1. Webpack 2 build with hot reload.
2. Chrome extension.
3. Endless hope.
  
Chrome extension includes background script, injected script and iframe. We already have communication established between those. Mostly, things will happen in iframe though. Compiled scripts reside in there. Requests will be handled by axios. Our iframe doesn't trigger any sort of CORS protection and follows original page cookies.
  
