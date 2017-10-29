module.exports = function (config) {
  config.set({
    // base path used to resolve all patterns
    basePath: '',

    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha', 'chai'],

    // list of files/patterns to load in the browser
    files: [{ pattern: 'spec.bundle.js', watched: false }],

    // files to exclude
    exclude: [],

    plugins: [
      require("karma-chai"),
      require("karma-chrome-launcher"),
      require("karma-mocha"),
      require("karma-mocha-reporter"),
      require("karma-sourcemap-loader"),
      require("karma-webpack")
    ],

    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: { 'spec.bundle.js': ['webpack', 'sourcemap'] },

    webpack: {
      devtool: 'inline-source-map',
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
      }
    },

    webpackServer: {
      noInfo: true // prevent console spamming when running in Karma!
    },

    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['mocha'],

    // web server port
    port: 9876,

    // enable colors in the output
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // toggle whether to watch files and rerun tests upon incurring changes
    autoWatch: false,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['Chrome'],

    // if true, Karma runs tests once and exits
    singleRun: true
  });
};
