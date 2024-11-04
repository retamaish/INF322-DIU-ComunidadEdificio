/* eslint-disable max-lines-per-function */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const webpack = require('webpack')

module.exports = (_, argv) => ({
  mode: argv.mode || 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js',
    publicPath: '/'
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css'
    }),
    new HtmlWebpackPlugin({
      title: 'ComunidadEdificio'
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@icons': path.resolve(__dirname, 'src/components/icons'),
      '@utilities': path.resolve(__dirname, 'src/utilities')

    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            '@babel/preset-react'
          ]
        }
      },
      {
        test: /\.s?css$/,
        use: argv.mode === 'production'
          ? [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
          : ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    port: 8000,
    hot: true,
    historyApiFallback: {
      index: '/'
    }
  }
})
