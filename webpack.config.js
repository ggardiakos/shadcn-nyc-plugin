const path = require('path');

module.exports = {
  entry: './index.ts',
  output: {
    filename: 'plugin.bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@': path.resolve(__dirname, './'),
      'components': path.resolve(__dirname, './components/ui'),
      'lib': path.resolve(__dirname, './lib'),
      'hooks': path.resolve(__dirname, './hooks'),
    },
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  mode: 'development',
};
