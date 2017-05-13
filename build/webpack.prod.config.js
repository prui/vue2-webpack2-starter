const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.config');
const getJoinPath = require('./utils').getJoinPath;
const config = require('../config');

baseWebpackConfig.output.path += '/' + process.env.PLATFORM_ENV;

baseWebpackConfig.resolve.alias['vue$'] ? baseWebpackConfig.resolve.alias['vue$'] = 'vue/dist/vue.min.js' :undefined;

module.exports = merge(baseWebpackConfig, {
  devtool: 'eval',
  debug: false,
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production'),
        'PLATFORM_ENV': JSON.stringify(process.env.PLATFORM_ENV)
      }
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: getJoinPath(config.PATHS.base + '/' + config.PATHS.indexFilePath),
      inject: true,
      title: config.TITLE
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      sourceMap: false,
      comments: false,
      compress: {
        warnings: false,
        properties: true,
        sequences: true,
        dead_code: true,
        conditionals: true,
        comparisons: true,
        evaluate: true,
        booleans: true,
        unused: true,
        loops: true,
        hoist_funs: true,
        cascade: true,
        if_return: true,
        join_vars: true,
        drop_console: true,
        drop_debugger: true,
        unsafe: true,
        hoist_vars: true,
        negate_iife: true
      },
    })
  ]
});
