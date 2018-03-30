import * as path from "path";
import * as webpack from "webpack";
import * as htmlWebpackPlugin from 'html-webpack-plugin';

let config: webpack.Configuration = {
  mode: "development",
  entry: {
    index: "./src/index"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        loader: "ts-loader"
      }
    ]
  },
  plugins: [
    new htmlWebpackPlugin()
  ],
  devServer: {
    port: 9000,
    open: true
  }
};

export default config;
