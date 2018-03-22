const webpack = require('webpack')
// var ManifestPlugin = require('webpack-manifest-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = require('./config.js')

const stats = require('./blocks/stats.js')
const resolve = require('./blocks/resolve.js')
const performance = require('./blocks/performance.js')
const entry = require('./blocks/entry.js')
const env = require('./blocks/env.js')
const optionsModule = require('./blocks/module.js')

module.exports = function () {
  return {
    entry,
    stats,
    resolve,
    performance,
    output: {
      path: config.FOLDERS.BUILD,
      filename: 'js/[name].[chunkhash].js',
      publicPath: '/',
    },
    module: optionsModule.main,
    plugins: [
      env,
      new CleanWebpackPlugin(['build'], {root: config.FOLDERS.ROOT}),
      new HtmlWebpackPlugin({
        filename: 'app.html',
        chunks: ['app'],
        template: config.FOLDERS.SRC + '/html/app.html',

        // Custom configs
        googleAnalytics: config.SHOW_ANALYTICS,
        yandexMetrikaCounter: config.SHOW_ANALYTICS,
        googleTagManager: config.SHOW_ANALYTICS,
      }),
      optionsModule.extractor,
      new webpack.optimize.OccurrenceOrderPlugin(),
      new webpack.LoaderOptionsPlugin({
        minimize: true,
      }),
      new webpack.optimize.UglifyJsPlugin({
        sourceMap: true,
        compress: {
          warnings: false,
        },
      }),
    ],
    devtool: '#source-map',
  }
}
