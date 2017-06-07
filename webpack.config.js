const path = require('path');
module.exports = {
  entry: path.join(__dirname, 'src/index'),
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'output/assets'),
    publicPath:'/assets'
  },
  module: {
    rules: [{
      test: /.js?$/,
      exclude: [
        path.resolve(__dirname, 'node_modules'),
        path.resolve(__dirname, 'bower_components')
      ],
      loader: 'babel-loader'      
    }]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map'
};