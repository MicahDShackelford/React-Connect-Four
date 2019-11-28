const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.join(__dirname, '/src/index.jsx'),
  output: {path: `${__dirname}/public/`, filename: 'app.js'},
  resolve: {extensions:['.jsx', '.js']},
  optimization: {minimize: false},
  module: {
    rules: [{
        test: /\.m?jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
          }
        }
      }]
  }
}