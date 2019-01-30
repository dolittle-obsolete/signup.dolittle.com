const path = require('path');
const configParts = require('./webpack.parts');

module.exports = [
    {
        entry: ['./src/scripts/index.js', './src/styles/style.scss'],
        output: {
            filename: 'bundle.[hash:5].js',
            path: path.resolve(__dirname, 'dist')
        },
        module: {
            rules: [
                configParts.loaders.htmlLoader,
                configParts.loaders.sassLoader,
                configParts.loaders.svgLoader,
                configParts.loaders.imageLoader,
                { test: /\.woff2(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff2' } },
                { test: /\.woff(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'url-loader', options: { limit: 10000, mimetype: 'application/font-woff' } },
                // load these fonts normally, as files:
                { test: /\.(ttf|eot|otf)(\?v=[0-9]\.[0-9]\.[0-9])?$/i, loader: 'file-loader' }
            ]
        },
        plugins: [configParts.plugins.cleanDistFolder, configParts.plugins.buildHtmlIndex, configParts.plugins.sassBuilder],
        devServer: {
            contentBase: './dist',
            port: 1337,
            open: true
        }
    }
];
