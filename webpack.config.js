const path = require('path')

module.exports = {
    entry: './js/App.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'inline-source-map',
    resolve: {
		extensions: ['.js', '.json']
	},
    module: {
        rules: [
            {
                test: /\.js?/,
                loader: 'babel-loader'
            }
        ]
    }
}