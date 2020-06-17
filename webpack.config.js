//configuracion manual
const path = require('path')

module.exports = {
    // tiene mas prioridad en el package.json
    mode: 'development',

    // punto de entrada
    entry: path.resolve(__dirname, 'src', 'index.js'),

    // punto de salida
    output: {
        filename: 'bundle.js', // nombre del archivo salida, default main.js
        path: path.resolve(__dirname, 'dist2'), // dir de salida
        publicPath: '/' // para imagenes y demas
    },

    // funcionamiento principal de webpack
    module: {
        rules: [
            {
                test: /\.js$/, // todos los files que terminen en js
                exclude: /node_modules/, // excluye los node_modules
                loader: 'babel-loader', // transpila codigo js
            },
        ],
    },

    devServer: {
        contentBase: path.resolve(__dirname, 'src'),
        port: 3000,
    },

    devtool: 'source-map' // source en consola para debuggear
}
