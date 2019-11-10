const merge = require('webpack-merge');
const base = require('./webpack.base.config');

const devConfig = {
  devtool: 'eval-source-map'
};

module.exports = ({ NODE_ENV } = { NODE_ENV: 'development'}) => merge.smart(
  devConfig,
  base(NODE_ENV)
);
