let {join} = require ('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  watch: true,
  watchOptions: {
    ignored: /node_modules/
  },
  entry: {
    main: join (__dirname, '/index.js'),
    test: join (__dirname, '/test/index.js')
  },
  output: {
    path: join (__dirname, './'),
    filename: './[name]-bundle.js'
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      }
    ]
  }
}
