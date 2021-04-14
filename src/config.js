const path = require('path');
/* export default {
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader'
            }
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    externals: {
        // global app config object
        config: JSON.stringify({
            apiUrl: 'http://localhost:4000'
        })
    }
}  */
export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://react-email-confirm-server.now.sh'
  : 'http://localhost:8080'

  
