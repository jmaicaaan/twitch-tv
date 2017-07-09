var webpack = require("webpack");
var path    = require("path");
var config  = require("./webpack.config");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var basePath = require("./package.json").basePath;

config.output = {
  filename: "[name].bundle.js",
  publicPath: basePath,
  path: path.resolve(__dirname, "dist")
};

config.plugins = config.plugins.concat([

  // Reduces bundles total size
  new webpack.optimize.UglifyJsPlugin({
    mangle: {

      // You can specify all variables that should not be mangled.
      // For example if your vendor dependency doesn't use modules
      // and relies on global variables. Most of angular modules relies on
      // angular global variable, so we should keep it unchanged
      except: ["$super", "$", "exports", "require", "angular"]
    }
  }),

  new HtmlWebpackPlugin({
    template: "client/index.ejs",
    inject: true,
    baseHref: basePath,
    hash: true
  }),

  new HtmlWebpackPlugin({
    template: "client/index.ejs",
    inject: true,
    baseHref: basePath,
    filename: "404.html",
    hash: true
  })
]);

module.exports = config;
