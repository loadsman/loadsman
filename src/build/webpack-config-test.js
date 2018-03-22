const webpack = require('webpack')

var config = require('./config.js')

const resolve = require('./blocks/resolve.js')
const env = require('./blocks/env.js')

const optionsModule = require('./blocks/module.js')
// module: optionsModule,

module.exports = {
  // output: {
  //   path: 'index.js',
  //   publicPath: '/',
  //   filename: '[name].js',
  // },
  module: {
    rules: [
      {
        test: /\.sсss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader?indentedSyntax']
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
          },
        }
      },
      {
        test: /\.md$/,
        use: [
          { loader: 'html-loader' },
          { loader: 'markdown-loader' },
        ]
      },
      {
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|gif|ico)$/,
        loader: 'url-loader',
        options: {
          name: 'images/[name].[ext]?[hash]',
          limit: 100,
          // useRelativePath: true,
        }
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        use: 'url-loader?limit=10000&name=[name].[ext]',
      }
    ]
  },
  resolve,
  plugins: [
    env,
    new webpack.NamedModulesPlugin()
  ]
}
