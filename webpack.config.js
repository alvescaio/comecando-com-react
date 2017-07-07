module.exports = {
    entry: "./app/App.js",
    output: {
        filename: "public/bundle.js"
    },
    resolveLoader: {
      moduleExtensions: ['-loader']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react']
                }
            }
        ]
    }

};
