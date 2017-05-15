const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.config');
const getJoinPath = require('./utils').getJoinPath;
const config = require('../config');

// Object.keys(baseWebpackConfig.entry).forEach(name => {
//   baseWebpackConfig.entry[name] = ['bael-polyfill', getJoinPath('build/hotClient')].concat(baseWebpackConfig.entry[name]);
// });
Object.keys(baseWebpackConfig.entry).forEach(function (name) {
  baseWebpackConfig.entry[name] = [ getJoinPath('build/hotClient')].concat(baseWebpackConfig.entry[name])
})
module.exports = merge(baseWebpackConfig, {
  devtool: 'eval',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('development'),
        'PLATFORM_ENV': JSON.stringify(process.env.PLATFORM_ENV)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: getJoinPath(config.PATHS.base + '/' + config.PATHS.indexFilePath),
      inject: true,
      title: config.TITLE
    })
  ]
});
