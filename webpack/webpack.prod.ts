import merge from 'webpack-merge';
import { getCommonConfig } from './webpack.common';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { join, resolve } from 'path';

const prodConfig: webpack.Configuration = {
    mode: 'production',
    entry: {
        index: join(resolve('src'), '../index.ts'),
    },
    optimization: {
        minimize: false,
        occurrenceOrder: true,
        namedModules: true,
        namedChunks: true,
        splitChunks: {
            minSize: 200 * 1024 * 1024,
        },
        removeAvailableModules: true,
        mergeDuplicateChunks: true,
        providedExports: true,
        usedExports: true,
        concatenateModules: true,

    },
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.tsx?$/,
                exclude: [/\/node_modules\//],
                use: ['awesome-typescript-loader', 'source-map-loader']
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
            }
        ],
    },

    plugins: [
        //
    ]
};

export default merge(getCommonConfig(), prodConfig);
