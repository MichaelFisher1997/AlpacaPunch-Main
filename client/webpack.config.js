var path = require('path');
var webpack = require('webpack');


module.exports = {
    devServer: {
        historyApiFallback: true
       },
       resolve: {
        fallback: {
          assert: require.resolve('assert'),
          
          http: require.resolve('stream-http'),
          account: require.resolve('@zilliqa-js/account'),
          https: require.resolve('https-browserify'),
          os: require.resolve('os-browserify/browser'),
          stream: require.resolve('stream-browserify'),
          "crypto": false
        },
      },
       
        entry: path.resolve(__dirname, "./src/index.js"),
        
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: "babel-loader"
                },
                { 
                    test: /\.css$/, 
                    use: 'css-loader'
                },
                {
                    test: /\.png$/i,
                    type: 'asset/resource',
                    generator: {
                        publicPath: 'assets/',
                      },
                },
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },

                
            ],
        },

    

};
/* config-overrides.js */

