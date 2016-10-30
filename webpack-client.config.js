var HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", '.es6', '.json']
  },
  entry: {
    client: './src/client/run-client.es6'
  },
  output: {
    path: './bin/public',
    filename: '[name].js'
  },
  loaders: [
    {
      test: /\.es6$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }
  ],
  plugins: [
      new HtmlWebpackPlugin()
  ]
};