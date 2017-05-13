const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.config');
const getJoinPath = require('./utils').getJoinPath;
const config = require('../config');


Object.keys(baseWebpackConfig.entry).forEach(name => {
  baseWebpackConfig.entry[name] = ['babel-polyfill', getJoinPath('build/hotClient')].concat(baseWebpackConfig.entry[name]);
});

module.exports = merge(baseWebpackConfig, {
  devtool: 'eval',
  // debug: true,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'PLATFORM_ENV': JSON.stringify(process.env.PLATFORM_ENV)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: getJoinPath(config.PATHS.base + '/' + config.PATHS.indexFilePath),
      inject: true,
      title: config.TITLE
    })
  ]
});
