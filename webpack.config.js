if (process.env.NODE_ENV === 'production') {
    module.exports = require('./webpack.config.build')
}

if (process.env.NODE_ENV === 'development') {
    module.exports = require('./webpack.config.dev')
}