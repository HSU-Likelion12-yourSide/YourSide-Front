const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { WebpackManifestPlugin } = require("webpack-manifest-plugin");
const { jsx } = require("react/jsx-runtime");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "src", "entry-client.tsx"),
  output: {
    path: path.resolve(__dirname, "../dist/client"),
    filename: "entry-client.js",
    // library: "React",
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, "public"),
    },
    port: 3000,
    hot: true,
    open: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        // use: {
        //   loader: "babel-loader",
        // },
        use: {
          loader: "esbuild-loader",
          options: {
            loader: "tsx",
            target: "esnext",
            jsx: "automatic",
            // jsxFactory: "React.createElement",
            // jsxFragment: "React.Fragment",
          },
        },
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
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "index.html"),
      // minify: false,
    }),
    new CopyWebpackPlugin({
      patterns: [{ from: path.resolve(__dirname, "public"), to: "" }],
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
    new WebpackManifestPlugin({
      fileName: "manifest.json",
      publicPath: "/",
    }),
    new CleanWebpackPlugin(),
  ],
};
