const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');

const commonConfig = require('./webpack.common');
const deps = require('../package.json').dependencies;

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig = {
  mode: 'production',

  plugins: [
    new ModuleFederationPlugin({
      name: 'app_shell',
      filename: 'remoteEntry.js',
      remotes: {
        auth_mf: `auth_mf@${domain}/remoteEntry.js`,
        catalog_mf: `catalog_mf@${domain}/remoteEntry.js`,
        shared_components: `shared_components@${domain}/remoteEntry.js`,
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        'react-dom': {
          singleton: true,
          requiredVersion: deps['react-dom'],
        },
        'react-toastify': {
          singleton: true,
          requiredVersion: deps['react-toastify'],
        },
        'react-router-dom': {
          singleton: true,
          requiredVersion: deps['react-router-dom'],
        },
      },
    }),
  ],
};

module.exports = merge(prodConfig, commonConfig);
