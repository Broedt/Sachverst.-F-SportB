// webpack.config.js
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: "production",
  entry:{
    index: "./src/index.js",
    impressum: "./src/footerContent/impressum.js",
    agb: "./src/footerContent/agb.js",
    datenschutz: "./src/footerContent/datenschutz.js"
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
          template: './src/footerContent/impressum.html', 
          filename: 'impressum.html', 
          chunks: ['impressum'], 
        }),
        new HtmlWebpackPlugin({
          template: './src/footerContent/agb.html', 
          filename: 'agb.html', 
          chunks: ['agb'], 
        }),
        new HtmlWebpackPlugin({
          template: './src/footerContent/datenschutz.html', 
          filename: 'datenschutz.html', 
          chunks: ['datenschutz'], 
        }),
        new MiniCssExtractPlugin({
          filename: '[name].css', 
        }),
    ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader,
        'css-loader','style-loader'
      ]
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
