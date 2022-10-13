const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  output: {
    path: path.join(__dirname, "/dist"),
    filename: 'bundle.[contenthash].js'
  },
  mode: 'development',
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
          { from: path.join(__dirname, "/public/locales"), to: "locales" }
        ]
      }
    )
  ],
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx'],
    alias: {
      Hotel: path.resolve(__dirname, 'src/hotel/'),
      City: path.resolve(__dirname, 'src/city/'),
      Country: path.resolve(__dirname, 'src/country/'),
      Common: path.resolve(__dirname, 'src/common/'),
      Store: path.resolve(__dirname, 'src/store/'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react']
          }
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        type: 'asset'
      },
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
};
