const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    //mode: 'development', // or production
    mode: 'production',
    entry: {
        starter: './src/app.ts'
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            { test: /\.css$/, use: [MiniCssExtractPlugin.loader, 'css-loader'] },
            {test: /\.jpg$/, use: 'url-loader?mimetype=image/jpg'},
            { test: /\.tsx?$/, use: 'ts-loader' }
        ]
    },
    externals: [
        //'jquery',
        //'bootstrap',
        //'angular'
    ],
    output: {

        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        path: path.resolve('./dist/')
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendor',
                    chunks: 'all'
                }
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        port: 9000,
        overlay: true
    }

}