const TerserPlugin = require('terser-webpack-plugin');
const base = require('./webpack.base.config');

module.exports = ({ NODE_ENV }) => {
  return {
    ...base(NODE_ENV),
    optimization: {
      minimizer: [new TerserPlugin()]
    }
  };
}