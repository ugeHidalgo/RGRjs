module.exports = {
    entry: "./js/app.js",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    //loaders...
    module:{
        loaders : [ //se aplicara a todo fichero que cuadre con test (termine en js)
            { 
                test: /\.js?$/, 
                loader: 'babel-loader',
                exclude: /(node_modules|public|react|fbjs)/,
                query: {
                    presets: ['react','es2015']
                }
            } //loader es el loader que hará la carga
        ]
    }
}