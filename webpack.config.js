const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ngAnnotatePlugin = require("ng-annotate-webpack-plugin");

module.exports = {
  bail: true,
  context: __dirname,
  devtool: "cheap-module-source-map",
  mode: "development",
  entry: {
    main: ["babel-polyfill", path.resolve(__dirname, "app/js/app.js")]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "js/[name].js?[hash:8]",
    publicPath: "/"
  },
  resolve: {
    extensions: [".js", ".scss", ".css"]
  },
  module: {
    rules: [
      // {
      //   test: /\.html$/,
      //   exclude: /app\/index.html/,
      //   loaders: [
      //     {
      //       loader: "ngtemplate-loader",
      //       query: {
      //         relativeTo: path.resolve(__dirname, "app")
      //       }
      //     },
      //     {
      //       loader: "html-loader",
      //       query: {
      //         attrs: ["img:src", "img:data-src"]
      //       }
      //     }
      //   ]
      // },
      {
        test: /\.tpl.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loaders: ["babel-loader", //"baggage-loader?[file].html&[file].css"
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, "build"),
    compress: true,
    port: 9000,
    watchOptions: {
      ignore: "/node_modules/"
    },
    historyApiFallback: true,
    hot: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./app/index.html"
    }),
    new ngAnnotatePlugin({
      add: true
    }),
    new webpack.HotModuleReplacementPlugin()
    // new webpack.optimization.splitChunks({
    //   chunks: "all"
    // })
  ]
};
