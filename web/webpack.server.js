const path = require("path");
const nodeExternals = require("webpack-node-externals");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: "development",
  entry: "./web/src/entry-server.tsx",
  target: "node",
  externals: [
    nodeExternals(),
    {
      react: "commonjs react",
      "react-dom": "commonjs react-dom",
      "react-dom/server": "commonjs react-dom/server",
    },
  ],
  output: {
    path: path.resolve(__dirname, "../dist/server"),
    filename: "entry-server.js",
    libraryTarget: "commonjs2",
  },
  resolve: {
    extensions: [".js", ".ts", ".tsx"],
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        exclude: /node_modules/,
        use: "esbuild-loader",
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|ico)$/,
        type: "asset/resource",
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
};
