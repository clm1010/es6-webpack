const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  // 入口
  entry: ['babel-polyfill','./index.js'],
  output:{
    filename:'index.js',
    path:path.resolve(__dirname,'dist')
  },
  devServer: {
    contentBase:'./dist',
    hot:true,
    compress:true,
    port:9001,
    clientLogLevel:'none',
    quiet:true
  },
  module: {
    rules:[
      {
        test:/\.html$/,
        use:'html-loader'
      },
      {
        test:/\.js$/,
        use:'babel-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new HtmlWebpackPlugin({template:'./index.html'}),
    new webpack.HotModuleReplacementPlugin()
  ]
}
