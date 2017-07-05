module.exports = {
    base: 'app',
    output: 'dist',
    testoutput: 'test',
    indexFilePath: 'index.ejs', // app/index.ejs
    projectResolvePaths: [
        'core', //  在app/core路径下寻找import的核心组件
        'components', //  在app/core路径下寻找import的组件
        'assets' //  在app/assets路径下寻找import的图片
    ]
};