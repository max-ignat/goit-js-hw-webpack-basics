const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
            // use: ["style-loader", MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
        use: [ "style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
          },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    //  {
    //     test: /\.css$/i,
    //     use: [MiniCssExtractPlugin.loader, "css-loader"],
    //   },
      // { test: /\.ts$/, use: 'ts-loader' },
    ],
  },
  devServer: {
    port: "4040",
    // open: 'true',
    // stats: 'errors-only',
    },
    plugins: [
        new HtmlWebpackPlugin({ template: 'src/index.html' }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin(),
    ],
};
