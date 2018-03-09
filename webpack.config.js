const path = require('path');

module.exports = {
  entry: {
      background: './dist/background.js',
      content: './dist/content.js'
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'app/dist'),
    filename: '[name]-bundle.js'  
  }
};