const path = require ('path')
const MiniCssPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: {
        main: path.resolve (__dirname, 'src', 'public', 'index.js')
    },
    output: {
        path: path.resolve (__dirname, 'dist', 'public'),
        filename: 'bundle.js'
    },
    module:{
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|bower_components)/,
                use: [MiniCssPlugin.loader, 'css-loader']
            }
        ]
    },
    plugins: [
        new MiniCssPlugin ({
            filename: 'css/[name].css',
            chunkFilename: '[id].css'
        }),
        new HtmlWebpackPlugin ({
            template: path.resolve (__dirname, 'src', 'public', 'index.html'),
            filename: 'index.html'
        })
    ]
}