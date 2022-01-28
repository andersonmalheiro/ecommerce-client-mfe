const { merge } = require("webpack-merge");
const path = require('path');
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");

const commonConfig = require("./webpack.common");
const deps = require("../package.json").dependencies;

const devConfig = {
  mode: "development",

  devtool: 'inline-source-map',

  devServer: {
    static: path.resolve(__dirname, '../dist'),
  },

  plugins: [
    new ModuleFederationPlugin({
      name: "app_shell",
      filename: "remoteEntry.js",
      remotes: {
        auth_mf: "auth_mf@http://localhost:4000/remoteEntry.js",
        catalog_mf: "catalog_mf@http://localhost:4002/remoteEntry.js",
        shared_components:
          "shared_components@http://localhost:4001/remoteEntry.js",
      },
      shared: {
        ...deps,
        react: {
          singleton: true,
          requiredVersion: deps.react,
        },
        "react-dom": {
          singleton: true,
          requiredVersion: deps["react-dom"],
        },
        "react-toastify": {
          singleton: true,
          requiredVersion: deps["react-toastify"],
        },
        "react-router-dom": {
          singleton: true,
          requiredVersion: deps["react-router-dom"],
        },
      },
    }),
  ],
};

module.exports = merge(devConfig, commonConfig);
