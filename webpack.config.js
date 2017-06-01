const path = require('path');
module.exports = {
    entry: "./app/app.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    module: {
        rules: [
            {
                loader: "babel-loader",
                options: {
                    presets: ["es2015", "react"]
                },
                test: /\.jsx?$/,
                exclude: /node_modules/
                
            },{ 
                test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
                loader: 'url-loader?limit=100000' 
            }
        ]
    },
    resolve: {
        alias: {
            "CellFormatter": path.resolve(__dirname, "app/lib/CellFormatter.js")
        }
    }
}