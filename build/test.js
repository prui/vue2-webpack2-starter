const ora = require('ora');
const express = require('express');
const webpack = require('webpack');
const config = require('../config');
const getResolvePath = require('./utils').getResolvePath;
const webpackConfig = require('./webpack.test.config');
const shell = require('shelljs');
var colors = require('colors');

var spinner = ora('building for production(线上测试版本编译中)...');
spinner.start();

colors.setTheme({
    custom: ['bgMagenta', 'white']
});

shell.rm('-rf', getResolvePath(webpackConfig.output.path));

const app = express();

webpack(webpackConfig, (err, stats) => {
    spinner.stop();
    if (err) throw err;
    process.stdout.write(stats.toString({
        colors: true,
        modules: true,
        children: true,
        chunks: true,
        chunkModules: true
    }) + '\n');
});