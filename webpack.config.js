/*
    Webpack es un sistema de bundling para preparar el desarrollo de una aplicación web para producción.
    En cierta medida se puede considerar un Browserify avanzado ya que tiene muchas opciones de configuración.
    También se puede considerar una evolución de Grunt y Gulp,
    ya que permite de alguna manera automatizar los procesos principales que son transpilar y
    preprocesar código de .scss a .css, de ES7 a ES5/6, etc...
*/

var webpack  = require('webpack');
var path = require('path');


//El fichero exporta un objeto JavaScript con las siguientes configuraciones:
module.exports = {
    //Aquí le indicamos que el punto de entrada desde el que debe empezar a leer y
    //realizar el proceso es el archivo controller.js
    entry: path.resolve(__dirname, 'src/controller.js'),
    //Con ésta configuración le estamos indicando donde ha de situarse el fichero de salida
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: "dist/bundle.js"
    },
    //Llegamos a la parte más interesante, los loaders. Aquí en el objeto loaders podemos
    // incluir tantos como queramos, dependiendo del tipo de archivo que queramos modificar.
    // Podemos tener un loader para ficheros JavaScript y JSX como el ejemplo, podemos tener
    // otro para ficheros de estilos y montar el CSS, podemos tener otro para imágenes, etc...

    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015','react','stage-1']
            }
        }]
    },
    //Con esto le indicamos a webpack que se fije en los ficheros con extensión .js y .jsx desde el directorio en el que
    //se encuentra el fichero webpack.config.js hacia dentro. El resto los va ignorar en el proceso de bundling.
    resolve: {
        extensions: ['.js', '.jsx']
    },

    //Esto nos va a crear un servidor (basado en Node.js y Express) de desarrollo en local,
    // en el puerto 500 que servirá nuestra carpeta build.
    // Necesitaremos crear un sencillo fichero index.html en la carpeta /public
    devServer: {
        contentBase:'public/',
        historyApiFallback: true,
        inline: true, //para poder refrescar el browser de forma automatica cuando algo cambia en el codigo
        hot:true, //Para habilitar el reemplazo de módulos en caliente con el servidor
        port:5000 //puerto donde se va a levantar
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
};
