import merge from 'webpack-merge';
import { getCommonConfig } from './webpack.common';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import TerserJSPlugin from 'terser-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';
import { join, resolve } from 'path';

const prodConfig: webpack.Configuration = {
    mode: 'production',
    entry: {
        index: join(resolve('src'), '../index.ts'),
    },
    optimization: {
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
    },
    module: {
        rules: [
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
