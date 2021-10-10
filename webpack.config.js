const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.ts',
    target: 'node',
    devtool: 'inline-source-map',
    output: {
        path: path.resolve(__dirname, 'build'),

    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [
            {
                exclude: [
                    /node_modules/,
                ],
                include: [
                    path.resolve(__dirname, 'src'),
                ],
                test: /\.ts$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            ['@babel/preset-typescript'],
                            ["@babel/preset-env"],
                        ],
                        plugins: ["@babel/plugin-proposal-class-properties"],
                    }
                }
            }
        ]
    }
}