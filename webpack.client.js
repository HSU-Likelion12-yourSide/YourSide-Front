const path = require("path");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development",
  target: "web",
  entry: "./src/client.js",
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: "esbuild-loader",
        exclude: /node_modules/,
        options: {
          loader: "jsx", // JSX 문법을 사용하는 경우 "jsx", 아니면 "js"로 설정
          target: "es2015", // 변환할 ECMAScript 버전 지정
        },
        /** babel-loader
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
        */
      },
      {
        test: /\.css$/,
        // use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        type: "asset/resource",
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "svgo-loader",
            options: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    /** Html이 없기 때문에 사용하지 않는다.
    new HtmlWebpackPlugin({
      template: "./index.html",
      // minify: false,
    }),
     */
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets", to: "assets" }],
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
    new CleanWebpackPlugin(),
  ],
};
