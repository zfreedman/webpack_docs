const CleanWebpackPlugin = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {

  devtool: "inline-source-map",

  devServer: {
    contentBase: "./dist"
  },

  entry: {
    app: "./src/index.js",
    print: "./src/print.js",
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
    })
  ],
};
