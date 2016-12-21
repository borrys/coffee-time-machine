const webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    app: './app.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: __dirname + '/dist',
    publicPath: 'assets'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use:[
          {
            loader: 'babel-loader',
            options: {presets: ['es2015', 'react']}
          } 
        ]
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  devServer: {
    contentBase: __dirname + '/src'
  }
};
