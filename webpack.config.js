/* eslint-disable max-lines-per-function */
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = (_, argv) => ({
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
    })
  ],
  resolve: {
    extensions: ['*', '.js', '.jsx', '.scss'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components')
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
    hot: false,
    liveReload: true,
    watchFiles: {
      paths: ['src/**/*']
    },
    historyApiFallback: {
      index: '/'
    }
  }
})
