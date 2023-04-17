const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/index.js',
    db: './src/db.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  experiments: {
    topLevelAwait: true
  },
};