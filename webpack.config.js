var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  devtool: "source-map",
  entry: {},
  module: {
    loaders: [
      { test: /\.js$/, exclude: [/app\/lib/, /node_modules/], loader: "ng-annotate-loader!babel-loader" },
      { test: /\.html$/, loader: "raw-loader" },
      { test: /\.ejs$/, loader: "ejs-loader" },
      { test: /\.pug$/, loader: ["raw-loader", "pug-html-loader"] },
      { test: /\.(scss|sass)$/, loader: "style-loader!css-loader!sass-loader" },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.(gif|jpe?g|png|ico)$/, loader: "url-loader" },
      { test: /\.woff(2)?(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
      { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
    ]
  },
  plugins: [

    new webpack.ProvidePlugin({
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery',
      tether: 'tether',
      Tether: 'tether',
      _: 'lodash'
    }),

    // Injects bundles in your index.html instead of wiring all manually.
    // It also adds hash to all injected assets so we don"t have problems
    // with cache purging during deployment.
    new HtmlWebpackPlugin({
      template: "client/index.ejs",
      inject: true
    }),

    // Automatically move all modules defined outside of application directory to vendor bundle.
    // If you are using more complicated project structure, consider to specify common chunks manually.
    new webpack.optimize.CommonsChunkPlugin({
      name: "vendor",
      minChunks: function (module, count) {
        return module.resource && module.resource.indexOf(path.resolve(__dirname, "client")) === -1;
      }
    })
  ]
};
