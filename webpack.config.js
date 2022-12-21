const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve( __dirname , 'dist'),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js' , '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        compress:true,
        historyApiFallback:true,
        port: 3006,
        open:true
    }
}