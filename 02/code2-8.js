const webpack = require('webpack');
var path = require('path');

module.exports = {
    entry: {
        app: './main.js'
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new webpack.EnvironmentPlugin(['NODE_ENV'])
    ],
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        },
        extensions: ['.js']
    }
}