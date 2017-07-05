const express = require('express');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.dev.config');
const ip = require('ip');
const open = require('open');
var proxy = require('proxy-middleware');
const chalk = require('chalk');

const app = express();

const compiler = webpack(webpackConfig);

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,       // set true 是为了在这里不打印全部的stats
  // stats: {
  //   colors: true,
  //   modules: false,
  //   children: false,
  //   chunks: false,
  //   chunkModules: true
  // }
});

var hotMiddleware = require('webpack-hot-middleware')(compiler);

compiler.plugin('compilation', function(compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function(data, cb) {
    hotMiddleware.publish({action: 'reload'})
    cb()
  })
});

compiler.plugin('done', stats => {
  // my custom printing of build results
  console.log('=================================================================================================');
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: true
  }) + '\n');
  console.log('=================================================================================================');
});

app.use(devMiddleware);
app.use(hotMiddleware);

// app.use('/Api/', proxy('http://api.global-sci.org/'));
config.DEV_SERVER.PROXY.historyApiFallback && app.use(require('connect-history-api-fallback')());
config.DEV_SERVER.PROXY.isProxy && app.use( config.DEV_SERVER.PROXY.api, proxy(config.DEV_SERVER.PROXY.domain));

function listenNewPort(app, port) {
  app.listen(port, (err) => {
    if (err) {
      return console.log(chalk.red(err));
    } else {
      var Url = 'http://' + ip.address() + ':' + port + '/';
      open(Url);
      console.log(chalk.green(Url));
    }
  }).on('error', function(e) {
    if (e.toString().match(/listen EADDRINUSE/)) {
      console.log(chalk.blue(port + '端口已被占用，自动监听', port + 1));
      setTimeout(function() {
        listenNewPort(app, port + 1);
      }, 10);
    } else {
      console.log(chalk.red(e));
      process.exit();
    }

  });
}

listenNewPort(app, config.DEV_SERVER.DEFAULT_PORT);
