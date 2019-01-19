// General Webpack configuration used all the time. Additional configs
// webpack.dev.js, webpack.build-dev.js or webpack.prod.js
// are used depending on npm script
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        // all needed entry points
        app: './src/index.js',
    },
    output: {
        filename: '[name].[hash].bundle.js',
        chunkFilename: '[name].[hash].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    optimization: {
        // allow extraction of common dependencies and prevent code duplication
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                // allow use of ES6
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                // check for favicons and put them into dist folder. Work with 'favicons.js'
                test: /\.(svg|png|ico|xml|json)$/,
                include: path.resolve(__dirname, "./src/favicons"),
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]'
                        }
                    }
                ]
            },
            {
                // put small images inline
                test: /\.(png|jpg|gif)$/i,
                exclude: path.resolve(__dirname, "./src/favicons"),
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ]
            },
            {
                // take care of image compression
                test: /\.(png|svg|jpe?g|gif)$/i,
                exclude: path.resolve(__dirname, "./src/favicons"),
                use: [
                    {
                        loader: 'image-webpack-loader',
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality: 65
                            },
                            optipng: {
                                enabled: false
                            },
                            pngquant: {
                                quality: '65-90',
                                speed: 4
                            }
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        // Clean dist folder before every build
        new CleanWebpackPlugin(['dist/*.*']),
        new HtmlWebpackPlugin({
            title: 'Template Webpage',
            template: './src/template/index.html'
        }),
        // enable hot replacement for modules
        new webpack.HotModuleReplacementPlugin(),
        // Generate Service Workers
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true
        })
    ]
};
