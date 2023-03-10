const { environment } = require('@rails/webpacker')


const webpack = require('webpack')
environment.plugins.prepend(
  'Provide',
  new webpack.ProvidePlugin({
    $: 'jquery/src/jquery',
    JQuery: 'jquery/src/jquery',
    Popper: 'popper.js'
    })
)

module.exports = environment
