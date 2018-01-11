const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist');
const CLIENT_DIR = path.join(__dirname, 'src');

module.exports = {
  context: CLIENT_DIR,
  entry: {
    app: './app',
    login: './login',
  },
  output: {
    path: `${DIST_DIR}/bundle`,
    filename: '[name].bundle.js',
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/,
    }, {
      loader: 'css-loader',
      test: /\.css/,
    }],
  },

  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: DIST_DIR,
  },
};
