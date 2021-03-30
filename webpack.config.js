const path = require('path');

module.exports = {
    mode: process.env.NODE_ENV,  //'development', //development, production(ugl & min) 
    entry: path.resolve(__dirname, './src/client/index.js'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    devServer: {
        host: 'localhost',
        port: 4000,
        contentBase: path.join(__dirname, 'build'),
        publicPath: '/',  //front
        historyApiFallback: true,
        inline: true,
        headers: {
            'Access-Control-Allow-Origin': '*'
        },
        proxy: {
            '/': {
                target: 'http://localhost:8000',
                secure: false,
                changeOrigin: true
            }            
        },
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                // include: [path.resolve(__dirname, 'src')],
                use: 'ts-loader',
            },
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    //plugins: //[ // Utilize for actual web deployment of this application
    //     new HtmlWebpackPlugin({
    //       template: './client/index.html',
    //     }),
    //   ],
    resolve: {
        // Enable importing JS / JSX files without specifying their extension
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
};