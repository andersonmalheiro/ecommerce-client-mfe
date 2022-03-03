const commonConfig = require('./webpack.common');
const { merge } = require('webpack-merge');
const path = require('path');

const devConfig = {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    port: 4000,
    historyApiFallback: true,
    static: path.resolve(__dirname, '../dist'),
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
};

module.exports = merge(devConfig, commonConfig);
