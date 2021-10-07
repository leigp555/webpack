const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.config.base");
module.exports = {
  ...base,
  mode: "development",
  devtool: "inline-source-map",
  devServer: {
    static: "./dist",
  },
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        //二选一要么css 加载到内存，要么css抽离成文件
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
