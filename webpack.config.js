const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin")

module.exports = {

mode: 'production',

entry: {
    main: path.resolve(__dirname, 'src/js/main.js'),
    about: path.resolve(__dirname, 'src/js/about.js')
},

output : {
    path: path.resolve(__dirname, 'public'),
    filename: '[name][contenthash].js',
    clean: true
},

devServer: {
    static: {
        directory: path.resolve(__dirname, 'public')
    },
    port: 3000,
    open:true,
    hot: true,
    compress: true,
    historyApiFallback:true
},


module: {
rules: [
    {
        test: /\.css$/i,
    use: [MiniCssExtractPlugin.loader, "css-loader"],
},
{
    test: /\.m?js$/,
    exclude: /(node_modules|bower_components)/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env']
      }
    }
  }
]


},

plugins: [
    new HtmlWebpackPlugin({
     title: "Countires | Home",
     template: './src/indexTemp.html',
     filename: 'index.html',
     chunks: ['main'] 
    }),
    
    new HtmlWebpackPlugin({
        title: 'Countries | About',
        template: './src/pages/aboutTemp.html',
        filename: 'about.html',
        chunks: ['about']
    }),
    new MiniCssExtractPlugin()

]





}