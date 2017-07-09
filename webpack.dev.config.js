var webpack = require("webpack");
var path    = require("path");
var config  = require("./webpack.config");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var basePath = '/';

config.output = {
  filename: "[name].bundle.js",
  publicPath: "/",
  path: path.resolve(__dirname, "client")
};

config.plugins = config.plugins.concat([

  // Adds webpack HMR support. It act"s like livereload,
  // reloading page after webpack rebuilt modules.
  // It also updates stylesheets and inline assets without page reloading.
  new webpack.HotModuleReplacementPlugin(),

  new HtmlWebpackPlugin({
    template: "client/index.ejs",
    inject: true,
    baseHref: basePath
  })
]);

module.exports = config;
