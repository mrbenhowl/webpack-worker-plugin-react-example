const path = require('path')

const HtmlWebPackPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin')

const htmlPlugin = new HtmlWebPackPlugin({
  template: './src/index.html',
  filename: './index.html'
})

const WorkerPlugin = require('worker-plugin')

module.exports = {
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),        
    globalObject: 'self'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  plugins: [new CleanPlugin(['dist']), htmlPlugin, new WorkerPlugin()]
}
