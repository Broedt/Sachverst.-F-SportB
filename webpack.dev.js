// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "development",
  entry:{
    index: "./src/index.js",
    impressum: "./src/impressum/impressum.js",
    },
  output: {
    filename: '[name].bundle.js', // Output JS files named after the entry point
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.json', '.png']
  },
  devtool: "eval-source-map",
  devServer: {
    watchFiles: ["./src/template.html"],
  },
  plugins: [
      new HtmlWebpackPlugin({
        template: "./src/template.html",
        filename: 'index.html', 
        chunks: ['index'],
      }),
      new HtmlWebpackPlugin({
        template: './src/impressum/impressum.html', 
        filename: 'impressum.html', 
        chunks: ['impressum'], 
      }),
      new MiniCssExtractPlugin({
        filename: '[name].css', 
      }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
      },
    ],
  },
};
