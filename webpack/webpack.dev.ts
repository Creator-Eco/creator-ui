import merge from 'webpack-merge';
import { getCommonConfig } from './webpack.common';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { join, resolve } from 'path';

const devConfig: webpack.Configuration = {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: {
        index: [
            join(resolve('src'), 'operator-config/operator.config.js'),
            join(resolve('src'), 'index.tsx'),
        ],

        // 'root-application': 'src/root-application/root-application.js',
        // 'common-dependencies': [
        //   // We want just one version of angular, so we put it into the common dependencies
        //   'core-js/client/shim.min.js',
        //   '@angular/common',
        //   '@angular/compiler',
        //   '@angular/core',
        //   '@angular/platform-browser-dynamic',
        //   '@angular/router',
        //   'reflect-metadata',
        //   /* Just one version of react, too. react-router is fine to have multiple versions of,
        //    * though, so no need to put it in common dependencies
        //    */
        //   'react',
        //   'react-dom',
        // ],
    },
    devServer: {
        contentBase: '/dist',
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        stats: 'errors-only',
        overlay: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            },
        ],
    },

    plugins: [

    ]
};

export default merge(getCommonConfig(), devConfig);
