const ExtractTextPlugin = require('extract-text-webpack-plugin')

const config = require('../config')
const path = require('path')

const isDevelop = process.env.NODE_ENV === 'development'

const extractor = new ExtractTextPlugin({
  filename: 'css/[name].[chunkhash].css',
  disable: isDevelop,
})

exports.extractor = extractor

exports.main = {
  rules: [
    {
      test: /\.s(a|c)ss$/,
      use: extractor.extract({
        use: [
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
        fallback: 'style-loader',
      }),
    },
    {
      test: /\.css$/,
      loader: extractor.extract({
        use: [
          { loader: 'css-loader' },
        ],
        fallback: 'style-loader',
      }),
    },
    {
      test: /\.vue$/,
      loader: 'vue-loader',
      options: {
        loaders: {
          scss: extractor.extract({
            use: [
              { loader: 'css-loader' },
              { loader: 'sass-loader' },
              {
                loader: 'sass-resources-loader',
                options: {
                  resources: path.resolve(__dirname, 'src/sass/loadsman.sass'),
                },
              },
            ],
            fallback: isDevelop ? 'vue-style-loader' : 'style-loader',
          }),
        },
        options: {
          esModule: true,
        },
      },
    },
    {
      test: /\.ts$/,
      loader: 'ts-loader',
      options: {
        appendTsSuffixTo: [/\.vue$/],
      },
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
      },
    },
    {
      test: /\.woff($|\?)|\.woff2($|\?)|\.ttf($|\?)|\.eot($|\?)|\.svg($|\?)/,
      loader: 'url-loader',
      options: {
        name: '[name].[ext]',
        limit: isDevelop ? undefined : 10000,
      },
    },
  ],
}
