import * as path from "path";
import * as webpack from "webpack";
import * as htmlWebpackPlugin from "html-webpack-plugin";

let config: webpack.Configuration = {
  mode: "development",
  context: path.resolve(__dirname),
  entry: {
    index: "./src/index"
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].[chunkhash].js"
  },
  resolve: {
    extensions: [".ts", ".js", ".tsx", ".jsx"]
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loaders: ["ts-loader"]
      }
    ]
  },
  plugins: [new htmlWebpackPlugin()],
  devServer: {
    port: 9000,
    open: true
  }
  // externals: {
  //   react: "React",
  //   "react-dom": "ReactDOM"
  // }
};

export default config;
