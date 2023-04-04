'use strict';
const path = require('path');

module.exports = {

  entry: './example/index.js',

  // debug: true,
  mode: 'development',
  devtool: 'inline-source-map',

  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'example'),

    // path: './',
    // pathinfo: true
  },

  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
      options: {
        presets: ['@babel/preset-react', '@babel/preset-env']
      }
    }]
  }

};
