const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const base = require("./webpack.config.base");
module.exports = {
  ...base,
  mode: "production",
  plugins: [
    ...base.plugins,
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css",
    }),
  ],
  module: {
    rules: [
      ...base.module.rules,
      {
        test: /\.css$/i,
        //二选一要么css 加载到内存，要么css抽离成文件
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
    ],
  },
};
