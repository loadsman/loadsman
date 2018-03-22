const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

var config = require('./config.js')

const stats = require('./blocks/stats.js')
const resolve = require('./blocks/resolve.js')
const performance = require('./blocks/performance.js')
const entry = require('./blocks/entry.js')
const env = require('./blocks/env.js')
const optionsModule = require('./blocks/module.js')

module.exports = {
  entry,
  stats,
  resolve,
  performance,
  output: {
    path: config.FOLDERS.BUILD,
    publicPath: '/',
    filename: '[name].js',
  },
  module: optionsModule.main,
  devServer: {
    stats: 'errors-only',
    port: 3040,
    https: config.HTTPS,
    contentBase: path.join(__dirname, 'extension'),
    disableHostCheck: true,
    index: 'app.html',
    historyApiFallback: {
      disableDotRule: true,
      rewrites: [
        { from: /(\w)*/i, to: '/app.html' },
      ],
    },
    proxy: [
      {
        context: ['/api/**'],
        target: 'http://subdomain.laravel-spa-boilerplate.test',
        changeOrigin: true,
        secure: false,
        cookieDomainRewrite: '',
        onProxyReq: function (request, req, res) {
          request.setHeader('origin', 'http://subdomain.laravel-spa-boilerplate.test')
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'app.html',
      chunks: ['app'],
      template: config.FOLDERS.SRC + '/html/app.html',
    }),
    env,
    optionsModule.extractor,
    new webpack.NamedModulesPlugin(),
  ],
  devtool: '#eval-source-map',
}
