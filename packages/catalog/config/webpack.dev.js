const commonConfig = require("./webpack.common");
const { merge } = require("webpack-merge");
const path = require("path");

const devConfig = {
  mode: "development",

  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
    port: 4002,
    open: false,
    static: path.resolve(__dirname, "../dist"),
  },
};

module.exports = merge(devConfig, commonConfig);
