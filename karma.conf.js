// Karma configuration
var path = require('path')
var webpack = require('webpack')

module.exports = function (config) {
  config.set({
    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',

    logLevel: config.LOG_DEBUG,
    client: {
      captureConsole: true,
    },

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine', 'requirejs'],

    reporters: ['progress', 'coverage'],

    // list of files / patterns to load in the browser
    files: [
      'tests/test-main.js',
      'tests/unit/**/*.js',
    ],

    // list of files to exclude
    exclude: [],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
      'tests/unit/**/*.js': ['webpack', 'coverage']
    },


    webpack: {
      // output: {
      //   path: 'index.js',
      //   publicPath: '/',
      //   filename: '[name].js',
      // },
      module: {
        rules: [
          {
            test: /\.sсss$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader'],
          },
          {
            test: /\.sass$/,
            loaders: ['style-loader', 'css-loader', 'sass-loader?indentedSyntax'],
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
          'local-styles': path.resolve(__dirname, 'src/sass/loadsman.sass'),
        },
      },
      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            NODE_ENV: '"develop"'
          }
        }),
        new webpack.NamedModulesPlugin(),
      ],
    },


    webpackMiddleware: {
      // webpack-dev-middleware configuration
      // i. e.
      stats: 'errors-only'
    },

    coverageReporter: {
      type : 'html',
      dir : 'coverage/'
    },


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false,

    // Concurrency level
    // how many browser should be started simultaneous
    concurrency: Infinity
  })
}
