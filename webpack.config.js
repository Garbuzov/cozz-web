const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");


module.exports = {
  entry: {
    index: { import: './src/index.js', dependOn: 'react-vendors' },
    'react-vendors': ['react', 'react-dom'],
  },

  output: {
    path: path.resolve(__dirname, "build"),
    filename: '[name].js', 
    chunkFilename: '[id].[chunkhash].js'
  },
  optimization: {
    runtimeChunk: 'single',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"]
      },
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.js|jsx$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
    ]
  },
  resolve: {
    modules: [path.resolve(__dirname, './src/'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      xyz: './src/'
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "src", "index.html"),
    }),
  ],

};