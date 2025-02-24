const nodeExternals = require("webpack-node-externals");
const path = require("path");

module.exports = {
  mode: "development",
  target: "node",
  entry: "./src/server.js",
  output: {
    filename: "server.js",
    path: path.resolve(__dirname, "dist"),
  },
  externals: [
    nodeExternals(),
    ({ request }, callback) => {
      if (/\.(css|png|jpe?g|gif|svg)$/.test(request)) {
        return callback(null, "commonjs " + request); // ✅ CSS 및 정적 파일을 Node.js에서 무시하도록 설정
      }
      callback();
    },
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
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
      {
        test: /\.css$/, // ✅ 서버에서 CSS를 무시하도록 처리
        loader: "null-loader",
      },
    ],
  },
  externals: [nodeExternals()],
};
