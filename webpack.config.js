var path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

var ROOT_PATH = path.resolve(__dirname); //当前文件路径
var REACT_PATH = path.resolve(ROOT_PATH,'react'); //项目文件夹
var REACT_BUILD_PATH = path.resolve(ROOT_PATH,'react_build'); //打包后的文件夹

module.exports = {
    entry:[
        'webpack/hot/dev-server',
        'webpack-dev-server/client?httpL//localhost:8080'
    ]
}