const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    entry: "./src/lowlevel.js",
    resolve: {
        extensions: [
            '.js',
            '.ts'
        ]
    },
    plugins: [new HtmlWebpackPlugin()]
};
