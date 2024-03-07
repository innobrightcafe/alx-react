 const path = require('path');

module.exports = {
  entry: '../dashboard/src/index.js',  // entry point
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool:'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: { 
                bypassOnDebug: true, 
            },
          },
        ],
      },
    ],
  },

};