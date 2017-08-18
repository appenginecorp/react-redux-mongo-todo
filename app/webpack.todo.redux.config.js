const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './todo-redux/index.jsx',
  output: {
    path: __dirname + 'todo-redux/public',
    filename: './app.js'
  },
  devServer: {
    port: 4200,
    contentBase: './todo-redux/public'
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      modules: __dirname + '/node_modules'
    }
  },
  plugins: [
    new ExtractTextPlugin('app.css')
  ],
  module: {
    loaders: [{
      test: /.js[x]?$/,
      loader: 'babel-loader',
      exclude: '/node_modules/',
      query: {
        presets: ['es2015', 'react'],
        plugins: ['transform-object-rest-spread']
      }
    }, {
      test: /.css$/,
      loader: ExtractTextPlugin.extract('css-loader', 'style-loader')
    }, {
      test: /\.woff|.woff2|.ttf|.eot|.svg*.*$/,
      loader: 'file-loader'
    }]
  }
};
