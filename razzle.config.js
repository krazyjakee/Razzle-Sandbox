const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
  modify: (config, { dev }) => {
    if (!dev) {
      config.plugins = config.plugins.concat([
         new BundleAnalyzerPlugin(),
      ]);
    }
    return config;
  },
};
