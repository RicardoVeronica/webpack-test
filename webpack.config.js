//configuracion manual
const path = require('path')

module.exports = {
    // tiene mas prioridad en el package.json
    // mode: 'development'

    // punto de entrada
    entry: path.resolve(__dirname, 'src', 'index.js'),

    // punto de salida
    output: {
        filename: 'bundle.js', // nombre del archivo salida, default main.js
        path: path.resolve(__dirname, 'dist2'), // dir de salida
        publicPath: '/' // para imagenes y demas
    },
}
