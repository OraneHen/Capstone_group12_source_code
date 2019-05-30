const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

config = {
    entry: './src/index.js',
    output: {
        path:path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    module:{
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                        {
                        loader: 'babel-loader',
                        options: {
                            presets: ['es2015', 'react', 'stage-0']
                        }                
                    }
                ]
            },
            {
                test: /\.css$/,
                use:[
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            sourceMap: true,
                            importLoaders: 1,
                            localIdentName: '[name]--[local]--[hash:base64:8]'
                        },
                    },
                    'postcss-loader' 
                ]
            },
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'postcss-loader',
                    {
                        loader: 'sass-loader',
                    } 
                ]
            }, 
            {
                test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/font-woff&name=./fonts/[hash].[ext]'
            }, 
            {
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=application/octet-stream&name=./fonts/[hash].[ext]'
            }, 
            {
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
                use: 'url-loader?limit=10000&mimetype=image/svg+xml&name=./fonts/[hash].[ext]'
            }, 
            {
                test: /\.ico$/,
                use: 'url-loader?limit=100000&name=./images/[hash].[ext]'
            },  
            {
                test: /\.png$/,
                use: 'url-loader?limit=100000&name=./images/[hash].[ext]'
            }, 
            {
                test: /\.jpg$/,
                use: 'file-loader?limit=100000&name=./images/[hash].[ext]'
            }
        ]
    },
    devServer:{
        historyApiFallback:true
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.template.html'
        })
    ]
}

module.exports = config;