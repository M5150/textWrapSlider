var webpack = require('webpack');

module.exports = {
  entry: [
    './index.jsx',
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets:['es2015', 'react'],
        },
      },
    ],
  },
  devServer: {
    contentBase: '',
    hot: true,
  },
  output: {
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.jsx', '.js'],
  },
};
