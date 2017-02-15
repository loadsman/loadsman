var path = require('path')
var webpack = require('webpack')
var ManifestPlugin = require('webpack-manifest-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = function () {

  return {
    entry: './src/main.js',
    output: {
      path: path.resolve(__dirname, './extension/build'),
      // publicPath: 'build/',
      filename: 'js/[name].js',
      chunkFilename: 'js/[name].js',
      hashFunction: 'sha256',
      pathinfo: true,
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
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader!sass-loader',
          }),
        },
        {
          test: /\.sсss$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader!sass-loader',
          }),
        },
        {
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: 'css-loader',
          }),
        },
        {
          test: /\.vue$/,
          loader: 'vue-loader',
          options: {
            loaders: {
              css: ExtractTextPlugin.extract({
                loader: 'css-loader',
                fallbackLoader: 'vue-style-loader' // <- this is a dep of vue-loader, so no need to explicitly install if using npm3
              }),
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
            name: '[name].[ext]'
          }
        },
        {
          test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
          loader: 'url-loader'
        }
      ]
    },
    resolve: {
      alias: {
        'local-styles': path.resolve(__dirname, 'src/sass/loadsman.sass'),
      },
      modules: [
        path.resolve('./node_modules')
      ]
    },
    performance: {
      hints: false
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: '"production"'
        }
      }),
      // new webpack.optimize.UglifyJsPlugin({
      //   sourceMap: true,
      //   compress: {
      //     warnings: false
      //   }
      // }),
      // new webpack.optimize.OccurrenceOrderPlugin(),
      // new webpack.LoaderOptionsPlugin({
      //   minimize: true
      // }),
      new ExtractTextPlugin('css/[name].css'),
      new CleanWebpackPlugin('extension/build'),

        // NOTE Полезный фичур, но на попозже.
      // split vendor js into its own file
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'vendor',
      //   minChunks: function (module, count) {
      //     any required modules inside node_modules are extracted to vendor
          // return (
          //     module.resource &&
          //     /\.js$/.test(module.resource) &&
          //     module.resource.indexOf(
          //         path.join(__dirname, 'node_modules')
          //     ) === 0
          // )
        // }
      // }),
      // extract webpack runtime and module manifest to its own file in order to
      // prevent vendor hash from being updated whenever app bundle is updated
      // new webpack.optimize.CommonsChunkPlugin({
      //   name: 'manifest',
      //   chunks: ['vendor'],
      // })
    ],
    devtool: '#source-map',
  }
}