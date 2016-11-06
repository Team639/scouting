var autoprefixer = require('autoprefixer');
var stylelint = require('stylelint');
var ExtractTextPlugin = require("extract-text-webpack-plugin");


module.exports = {
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", '.es6']
  },
  entry: {
    client: './src/client/run-client.es6'
  },
  output: {
    path: './bin/public',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.es6$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ["es2015"]
        }
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader", "postcss-loader")
      },
      {
        test: /.(png|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ],
  postcss: function () {
    return [stylelint, autoprefixer({browsers:['last 2 versions']})];
  }
};
