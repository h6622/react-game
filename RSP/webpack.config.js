const path = require("path");

module.exports = {
  name: "Response Check",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".jsx", ".js"]
  },
  entry: {
    app: "./client"
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "babel-loader",
        options: {
          presets: [
            [
              "@babel/preset-env",
              {
                targets: {
                  browsers: ["> 1% in KR"]
                },
                debug: true
              }
            ],
            "@babel/preset-react"
          ],
          plugins: [
            "react-hot-loader/babel",
            "@babel/plugin-proposal-class-properties"
          ]
        }
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: "file-loader"
      }
    ]
  },
  plugins: [],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
    publicPath: "/dist"
  }
};
