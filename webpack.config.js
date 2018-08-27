const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {

  devtool: "inline-source-map",

  devServer: {
    contentBase: "./dist",
    hot: true,
  },

  entry: {
    app: "./src/index.js",
  },
  
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      }
    ]
  },

  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/"
  },

  plugins: [
    new CleanWebpackPlugin(["dist"]),
    new HtmlWebpackPlugin({
      title: "output management"
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
