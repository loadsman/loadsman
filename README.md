Hi, Loadsman here.

## Intention
Loadsman is a chrome extension with plugin ecosystem that allows manual tinkering of routes.
Think of [Postman](https://www.getpostman.com/) with framework integration.

## Plugins

* [Laravel](https://github.com/loadsman/laravel-plugin)
* [Symfony](https://github.com/loadsman/symfony-plugin)

## Powered by

* [Webpack 2](https://webpack.js.org/)
* [Ace editor](https://ace.c9.io/)
* [Vue.js 2](https://vuejs.org/)
  
Chrome extension includes background script, injected script and iframe. We already have communication established between those. Mostly, things will happen in iframe though. Compiled scripts reside in there. Requests will be handled by axios. Our iframe doesn't trigger any sort of CORS protection and follows original page cookies.
  
