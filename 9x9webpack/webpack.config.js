const path = require("path");
const webpack = require("webpack");

module.exports = {
  name: "9x9webpack",
  mode: "development",
  devtool: "eval", // hidden-source-map
  resolve: {
    extensions: [".jsx", ".js"]
  },

  entry: {
    app: "./client"
  },

  module: {
    rules: [
      {
        test: /\.jsx$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["last 2 chrome versions"]
                }
              }
            ],
            "@babel/preset-react"
          ],
          plugins: ["@babel/plugin-proposal-class-properties"]
        }
      }
    ]
  },

  plugins: [new webpack.LoaderOptionsPlugin({ debug: true })],

  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js"
  }
};
