var path = require('path')
var webpack = require('webpack')

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, './public/build'),
    publicPath: '/',
    filename: '[name].js',
  },
  stats: {
    colors: true,
    modules: true,
    reasons: true,
    errorDetails: true,
  },
  module: {
    rules: [
      {
        test: /\.sass$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader?indentedSyntax'],
      },
      {
        test: /\.sсss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
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
            // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
            // the "scss" and "sass" values for the lang attribute to the right configs here.
            // other preprocessors should work out of the box, no loader config like this nessessary.
            scss: 'vue-style-loader!css-loader!sass-loader',
            sass: 'vue-style-loader!css-loader!sass-loader?indentedSyntax',
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  resolve: {
    alias: {
      // 'styles': path.resolve(__dirname, 'resources/assets-new/sass/main.sass'),
    },
  },
  devServer: {
    contentBase: path.join(__dirname, "extension"),
    noInfo: true,
    proxy: {
      '/api-tester': {
        target: 'http://pr22.local',
        changeOrigin: true,
        secure: false,
        cookieDomainRewrite: '',
        onProxyReq: function (request, req, res) {
          request.setHeader('origin', 'http://pr22.local')
        }
      },
    }
  },
  performance: {
    hints: false
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
  ],
  devtool: '#eval-source-map'
}