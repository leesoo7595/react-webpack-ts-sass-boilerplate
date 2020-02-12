const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.tsx'),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  mode: "development",
  resolve: {
    extensions: ['.js', '.ts', '.tsx']
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: ['ts-loader']
      },
      {
        test: /\.html/,
        use: ['html-loader']
      },
      {
        test: /\.s(a|c)ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { 
              modules: {
                localIdentName: '[local]_[folder]_[hash:base64:5]'
              } 
            }
          },
          'sass-loader'
        ]
      },
      {
        test: /\.tsx?$/,
        use: ['ts-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    })
  ],
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    port: 3000
  }
};