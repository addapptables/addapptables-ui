const { join } = require('path');
const merge = require('webpack-merge');

const config = require('./webpack.config');

module.exports = merge(config, {

    mode: 'development',

    devServer: {
        contentBase: join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        historyApiFallback: true,
    },

    module: {
        rules: [
            { test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader'] },
        ],
    },

});
