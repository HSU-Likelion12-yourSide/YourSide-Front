const path = require("path");

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
        // loader: "babel-loader",
        // exclude: /node_modules/,
        // options: {
        //   presets: ["@babel/preset-env", "@babel/preset-react"],
        // },
      },
    ],
  },
};
