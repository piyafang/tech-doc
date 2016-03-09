var ExtractTextPlugin = require('extract-text-webpack-plugin');
var vue = require('vue-loader');
module.exports = {
  entry: './script/main.js',
  output: {
    path: './dest/',
    publicPath: '../dest/',
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
