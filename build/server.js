const express = require('express');
const webpack = require('webpack');
const config = require('../config');
const webpackConfig = require('./webpack.dev.config');
const ip = require('ip');
const open = require('open');
var proxy = require('proxy-middleware');
const chalk = require('chalk');

const app = express();

const compiler = webpack(webpackConfig, (err,stats)=>{
  if (err) throw err;
  process.stdout.write(stats.toString({
    colors: true,
    modules: false,
    children: false,
    chunks: false,
    chunkModules: true
  }) + '\n');
});

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true,
  // stats: {
  //   colors: true,
  //   chunks: false
  // }
});

app.use(devMiddleware);
app.use(require('webpack-hot-middleware')(compiler));

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
