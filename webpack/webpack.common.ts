import { resolve } from 'path';
import webpack from 'webpack';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
// import MiniCssExtractPlugin from 'mini-css-extract-plugin';

export interface WebpackEnv {
    mode?: string;
    debug?: boolean;
}

export const getCommonConfig = (env: WebpackEnv = {}): webpack.Configuration => {
    const { mode = 'development', debug = true } = env;

    return {
        mode: 'none',
        output: {
            path: resolve('dist'),
            chunkFilename: '[name]_[chunkhash].js',
            filename: '[name].js',
            libraryTarget: 'umd',
            library: 'CreatorUI',
            umdNamedDefine: true
          },
        resolve: {
            alias: {
                '@src': resolve(__dirname, '../src'),
            },
            extensions: ['.js', '.jsx', '.ts', '.tsx'],
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    exclude: /node_modules/,
                    use: 'babel-loader',

                },
                {
                    test: /\.(png|jpe?g|gif|jp2|webp)$/,
                    loader: 'file-loader',
                    options: {
                        name: 'assets/images/[name].[ext]'
                    }
                },
                {
                    test: /\.svg$/,
                    exclude: /node_modules/,
                    use: [
                        {
                            loader: 'babel-loader',
                        },
                        {
                            loader: 'react-svg-loader',
                            options: {
                                jsx: true, // true outputs JSX tags
                            },
                        },
                    ],
                },
                {
                    test: /\.json$/,
                },
            ],
        },
        plugins: [
            new CleanWebpackPlugin(),
            // new MiniCssExtractPlugin({
            //     filename: '[name].css',
            //     chunkFilename: '[id].css',
            //     ignoreOrder: false,
            // })
        ],
    };
};
