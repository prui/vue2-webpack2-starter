const webpack = require('webpack');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const baseWebpackConfig = require('./webpack.config');
const getJoinPath = require('./utils').getJoinPath;
const config = require('../config');
const getResolvePath = require('./utils').getResolvePath;

baseWebpackConfig.output.path = getResolvePath(config.PATHS.testoutput);

baseWebpackConfig.resolve.alias['vue$'] ? baseWebpackConfig.resolve.alias['vue$'] = 'vue/dist/vue.min.js' : undefined;

module.exports = merge(baseWebpackConfig, {
    devtool: '#eval',
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('test')
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
                drop_console: false,
                drop_debugger: false,
                unsafe: true,
                hoist_vars: true,
                negate_iife: true
            },
        })
    ]
});