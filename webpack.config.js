const path = require('path');
const configParts = require("./webpack.parts");


module.exports = [{
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
            configParts.loaders.imageLoader
        ]
    },
    plugins: [
        configParts.plugins.cleanDistFolder,
        configParts.plugins.buildHtmlIndex,
        configParts.plugins.sassBuilder
    ],
    devServer: {
        contentBase: './dist',
        port: 1337,
        open: true
    }
}];
