const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: './src/assets/scripts/main.js',
  output: {
    filename: 'js/[name].[hash].js',
    path: path.join(__dirname, '../dist')
  },
  resolve: {
    alias: {
      'images': path.resolve(__dirname, '../src/assets/images'),
      'styles': path.resolve(__dirname, '../src/assets/styles')
    }
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(png|svg|jp(e*)g)$/,
        use: [{
          loader: 'file-loader',
          options: {
            limit: 8000,
            name: 'img/[name].[ext]'
          }
        }]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: 'file-loader'
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ]
};
