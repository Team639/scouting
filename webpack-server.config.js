var webpack = require('webpack');
var path = require('path');
var fs = require('fs');

var nodeModules = {};
fs.readdirSync('node_modules')
  .filter(function(x) {
    return ['.bin'].indexOf(x) === -1;
  })
  .forEach(function(mod) {
    nodeModules[mod] = 'commonjs ' + mod;
  });

module.exports = {
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", '.es6', '.json']
  },
  target: 'node',
  entry: {
    server: './src/server/run-server.es6'
  },
  output: {
    path: './bin',
    filename: '[name].js'
  },
  loaders: [
    {
      test: /\.es6$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
  ],
  externals: nodeModules
};