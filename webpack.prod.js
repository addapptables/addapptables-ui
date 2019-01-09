const merge = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');

const config = require('./webpack.config');

module.exports = merge(config, {

    mode: 'production',

    module: {
        rules: [
            { test: /\.scss$/, use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'] },
        ],
    },

    optimization: {
        minimizer: [
            new UglifyjsWebpackPlugin({
                sourceMap: false,
            }),
        ],
    },

});
