const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/index.js",

  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].bundle.js",
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: "Redux learning",
      template: path.resolve(__dirname, "./src/template.html"),
      filename: "index.html",
      favicon: "./src/favicon.ico",
    }),
  ],

  mode: "development",
  devtool: "source-map",
  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    port: 8080,
  },
};
