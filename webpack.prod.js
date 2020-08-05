const { GenerateSW } = require('workbox-webpack-plugin');
const config = require('./webpack.config');

config.plugins.push(new GenerateSW());

module.exports = config;