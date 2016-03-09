var webpack = require('webpack'),
    ExtractTextPlugin = require('extract-text-webpack-plugin'),
    path = require('path'), // nodejs path 模块
    vue = require('vue-loader');
module.exports = {
  // entry: path.join(__dirname,'src/script/[name].js'),
  entry: ['./src/script/common.js','./src/script/es5.js'],
  // entry: {
  //   common: path.join(__dirname,'src/script/common.js'),
  //   es5: path.join(__dirname,'src/script/es5.js'),
  // },
  output: {
    path: path.join(__dirname,'dist/script'),
    filename: 'dest.js'
  },
  module: {
    loaders: [{
      test: /\.vue$/,
      loader: 'vue'
    }, {
      test: /\.(png|jpg)$/,
      loader: 'url-loader?limit=100000&name=img/[hash:8].[name].[ext]'
    }]
  },
  vue: {
    loaders: {
      // sass: 'style!css!sass?indentedSyntax',
      sass: ExtractTextPlugin.extract('style!css!sass?indentedSyntax')
    }
  },
  plugins: [
    new ExtractTextPlugin('./[name].css'), // 输出到 output path 下的 app.css 文件
  ],
  babel: {
    presets: ['es2015', 'stage-0'],
    plugins: ['transform-runtime']
  }
}
