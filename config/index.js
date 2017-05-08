const PATHS = require('./paths.config');
const DEV_SERVER = require('./devServer.config');
const FILE_FORMAT = require('./fileFormat.config');
const MODULE_ALIAS = require('./moduleAlias.config');

module.exports = {
  PATHS: PATHS,
  DEV_SERVER: DEV_SERVER,
  FILE_FORMAT: FILE_FORMAT,
  MODULE_ALIAS: MODULE_ALIAS,
  MULTIPLE_PLATFORM: true,  //是否开启  多版本模式  pc 和 mobile
  TITLE: '权限管理系统'
};
