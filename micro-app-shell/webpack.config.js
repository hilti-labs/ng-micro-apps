"use strict";

const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/index.ts",
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        exclude: "/node_modules/",
        use: "ts-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".js", ".html"]
  },
  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new CopyWebpackPlugin([
      {
        from: "src/**/*",
        to: "./",
        flatten: true,
        ignore: ["*.ts", "*.map", "*.html"]
      }
    ]),
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html"
    })
  ],
  output: {
    path: path.resolve(__dirname, 'dist')
  }
};

