'use strict';

const path = require('path');

module.exports = {

  entry: ['./example/index.js'],

  // debug: false,
  mode: 'production',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'example'),

    // pathinfo: true
  },
  optimization: {
    minimize: true
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
  },

  // plugins: [
  //   // new webpack.DefinePlugin({
  //   //   'process.env': {
  //   //     'NODE_ENV': JSON.stringify('production')
  //   //   }
  //   // }),
  //   new webpack.optimize.UglifyJsPlugin({minimize: true})
  // ]

};
