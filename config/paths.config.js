module.exports = {
  base: 'app',
  output: 'dist',
  indexFilePath: 'index.ejs', // app/index.ejs
  projectResolvePaths: [
    'core', //  在app/core路径下寻找import的包
    'assets' //  在app/assets路径下寻找import的包
  ]
};
