/* eslint-disable */
const path = require('path');
const webpack = require('webpack');
const config = require('../config');
const getResolvePath = require('./utils').getResolvePath;
const getJoinPath = require('./utils').getJoinPath;
const autoprefixer = require('autoprefixer')({
  browsers: ['iOS >= 7', 'Android >= 4.1']
});
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extract = new ExtractTextPlugin('css/[name].[hash].css');
const cssLoader = extract.extract(['css-loader']);
const sassLoader = extract.extract(['css-loader', 'sass-loader']);
const lessLoader = extract.extract(['css-loader', 'less-loader']);

var vueLoaderOptions = new webpack.LoaderOptionsPlugin({
  test: /\.vue$/,
  options: {
    vue: {
      loaders: {
        css: cssLoader,
        sass: sassLoader
      },
      postcss: [require('autoprefixer')({browsers: ['last 2 versions']})]
    }
  }
});
process.env.PLATFORM_ENV = '/';
process.argv.forEach(v => v.match('PLATFORM_ENV') && (process.env.PLATFORM_ENV = v.split('=')[1].trim()));

let projectResolvePaths = [];
config.PATHS.projectResolvePaths.forEach(p => projectResolvePaths.push(getResolvePath(config.PATHS.base + '/' + p)));

module.exports = {
  entry: {
    app: getResolvePath(config.PATHS.base + '/' + process.env.PLATFORM_ENV) // 应用入口  add trim() for fix windows space bugentry
  },
  target: 'web',
  output: {
    path: getResolvePath(config.PATHS.output), //build完之后输出的文件路径
    filename: config.FILE_FORMAT.outputFileName, //输出的文件名
    chunkFilename: config.FILE_FORMAT.outputChunkFilename, //块文件名的输出格式
  },
  resolve: {
    extensions: [
      '.js', '.vue', '.json'
    ], //  import这些后缀的文件不需要加后缀
    modules: [ //实在找不到import，就会到这个路径下面去找   //import 模块的默认目录
      getJoinPath('node_modules'),
      getJoinPath('bower_components')
    ].concat(projectResolvePaths),
    alias: config.MODULE_ALIAS //module import时候的别名   如设置'vue$': 'vue/dist/vue.common.js'。import vue from 'vue'就相当于 import vue from 'vue/dist/vue.common.js'
  },
  resolveLoader: {
    modules: [ //实在找不到import，就会到这个路径下面去找
      getJoinPath('node_modules'),
      getJoinPath('bower_components')
    ]
  },
  plugins: [
    extract, vueLoaderOptions
  ],
  module: {
    rules: [
      {
        test: /\[.vue|js]$/, //test，识别文件,多使用正则表达式，也可以使用绝对文件名称
        enforce: "pre",
        use: [
          {
            loader: 'eslint-loader',
            options: {
              formatter: require('eslint-friendly-formatter')
            }
          }
        ]
      }, {
        test: /\.vue$/, //test，识别文件,多使用正则表达式，也可以使用绝对文件名称
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      }, {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['es2015', 'stage-2']
            }
          }
        ],
        include: new RegExp(config.PATHS.base), //load包括new RegExp(config.PATHS.base)目录下的
        exclude: /node_modules/
      }, {
        test: /\.html$/,
        loader: 'vue-html'
      }, {
        test: /\.json$/,
        loader: 'json'
      }, {
        test: /\.css$/,
        loader: cssLoader
      }, {
        test: /\.scss$/,
        loader: sassLoader
      }, {
        test: /\.less$/,
        loader: lessLoader
      }, {
        test: /\.(png|jpg|gif|svg|jpeg)$/,
        loader: 'url',
        query: {
          limit: 10000, //低于10kb的直接变成base64
          name: 'assets/[name].[ext]?[hash]'
        }
      }, {
        test: /\.((eot|woff|ttf|svg)[\?]?.*)$/,
        loader: 'url',
        query: {
          name: 'assets/[name].[ext]?[hash]'
        }
      }

    ]
  }
};
